/* Site behaviour: mega menus, mobile menu, scroll reveals, team pop-up, PBMT gallery, partner tabs, newsletter.
   initSite() runs after every page change (see SiteEffects.jsx) and returns a cleanup that removes the
   previous page's listeners, observers and timers, so pages switch instantly without a full reload. */
export function initSite() {
  const ac = new AbortController();
  const observers = [];
  const cleanups = [];
  const proto = EventTarget.prototype;
  const nativeAdd = proto.addEventListener;
  const NativeIO = window.IntersectionObserver;
  // every listener / observer created during setup belongs to this page and is torn down on cleanup
  proto.addEventListener = function (type, fn, opts) {
    const o = opts && typeof opts === "object" ? { ...opts, signal: ac.signal } : { capture: !!opts, signal: ac.signal };
    return nativeAdd.call(this, type, fn, o);
  };
  window.IntersectionObserver = class extends NativeIO {
    constructor(cb, o) { super(cb, o); observers.push(this); }
  };
  try {
    if (document.getElementById("header")) setup(cleanups);
  } catch (err) {
    console.error("Site effects failed to start:", err);
  } finally {
    proto.addEventListener = nativeAdd;
    window.IntersectionObserver = NativeIO;
  }
  return () => {
    ac.abort();
    observers.forEach((o) => o.disconnect());
    cleanups.forEach((fn) => fn());
  };
}

function setup(cleanups) {
  (function () {
    const root = document.documentElement;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    /* ---------- Mobile menu ---------- */
    const menuToggle = document.getElementById('menuToggle');
    const nav = document.getElementById('nav');
    const closeMenu = () => {
      nav.classList.remove('is-open');
      menuToggle.setAttribute('aria-expanded', 'false');
      menuToggle.setAttribute('aria-label', 'Open menu');
    };
    menuToggle.addEventListener('click', () => {
      const open = nav.classList.toggle('is-open');
      menuToggle.setAttribute('aria-expanded', String(open));
      menuToggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    });
    nav.querySelectorAll('a').forEach((a) => a.addEventListener('click', closeMenu));

    /* ---------- Dropdowns (Technology) ---------- */
    const subs = [...document.querySelectorAll('.has-sub')];
    const closeSubs = (except) => subs.forEach((s) => {
      if (s === except) return;
      s.classList.remove('is-open');
      s.querySelector('.nav__caret').setAttribute('aria-expanded', 'false');
    });
    subs.forEach((item) => {
      const caret = item.querySelector('.nav__caret');
      caret.addEventListener('click', (e) => {
        e.stopPropagation();
        const open = item.classList.toggle('is-open');
        caret.setAttribute('aria-expanded', String(open));
        closeSubs(item);
      });
    });
    document.addEventListener('click', (e) => { if (!e.target.closest('.has-sub')) closeSubs(); });
    // after picking a page from a mega menu, keep menus closed until the pointer leaves them
    // (the page changes without a reload, so the pointer would otherwise still be hovering the menu)
    document.querySelectorAll('.nav__sub a').forEach((a) => a.addEventListener('click', () => {
      closeSubs();
      root.classList.add('menus-closed');
    }));
    document.addEventListener('mousemove', (e) => {
      if (!e.target.closest('.has-sub')) root.classList.remove('menus-closed');
    });
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeSubs(); });
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeMenu(); });

    /* ---------- Active nav link ---------- */
    const links = [...document.querySelectorAll('.nav__link')];
    const sections = links
      .map((l) => l.getAttribute('href'))
      .map((href) => (location.pathname === '/' ? href.replace(/^\/(?=#)/, '') : href))
      .filter((href) => href.startsWith("#") && href.length > 1) // same-page sections only
      .map((href) => document.querySelector(href))
      .filter(Boolean);
    const navObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        links.forEach((l) => l.classList.toggle('is-active', l.getAttribute('href') === '#' + entry.target.id));
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    sections.forEach((s) => navObserver.observe(s));

    /* ---------- Reveal on scroll ---------- */
    const revealObserver = new IntersectionObserver((entries, obs) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        obs.unobserve(entry.target);
      });
    }, { threshold: 0.15 });
    document.querySelectorAll('.reveal').forEach((el, i) => {
      el.style.transitionDelay = (i % 3) * 90 + 'ms';
      revealObserver.observe(el);
    });

    /* ---------- Statement: words light up as you scroll ---------- */
    document.querySelectorAll('[data-words]').forEach((el) => {
      const words = el.textContent.trim().split(/\s+/);
      el.setAttribute('aria-label', el.textContent.trim());
      const accentFrom = el.dataset.accentFrom ? Number(el.dataset.accentFrom) : Infinity;
      el.innerHTML = words.map((w, i) => `<span class="w${i >= accentFrom ? ' w--accent' : ''}" aria-hidden="true">${w}</span>`).join(' ');
      const spans = [...el.querySelectorAll('.w')];

      if (reduceMotion) { spans.forEach((s) => s.classList.add('is-on')); return; }

      let ticking = false;
      const update = () => {
        const r = el.getBoundingClientRect();
        const vh = window.innerHeight;
        // 0 when the text enters the lower part of the screen, 1 when it reaches the upper third
        const progress = Math.min(Math.max((vh * 0.85 - r.top) / (vh * 0.55), 0), 1);
        const lit = Math.round(progress * spans.length);
        spans.forEach((s, i) => s.classList.toggle('is-on', i < lit));
        ticking = false;
      };
      window.addEventListener('scroll', () => {
        if (!ticking) { requestAnimationFrame(update); ticking = true; }
      }, { passive: true });
      update();
    });

    /* ---------- India installations map ----------
       Add or edit sites here: name + latitude/longitude.
       SAMPLE entries are placeholders — replace them with your real installation sites. */
    const SITES = [
      { name: 'Thiruvananthapuram, Kerala', lat: 8.5241, lon: 76.9366 },
      { name: 'Ahmedabad, Gujarat', lat: 23.0225, lon: 72.5714 },
      { name: 'Kochi, Kerala', lat: 9.9312, lon: 76.2673, sample: true },
      { name: 'Bengaluru, Karnataka', lat: 12.9716, lon: 77.5946, sample: true },
      { name: 'Chennai, Tamil Nadu', lat: 13.0827, lon: 80.2707, sample: true },
      { name: 'Hyderabad, Telangana', lat: 17.385, lon: 78.4867, sample: true },
      { name: 'Mumbai, Maharashtra', lat: 19.076, lon: 72.8777, sample: true },
      { name: 'New Delhi, Delhi', lat: 28.6139, lon: 77.209, sample: true },
      { name: 'Kolkata, West Bengal', lat: 22.5726, lon: 88.3639, sample: true },
      { name: 'Lucknow, Uttar Pradesh', lat: 26.8467, lon: 80.9462, sample: true },
      { name: 'Guwahati, Assam', lat: 26.1445, lon: 91.7362, sample: true },
      { name: 'Bhubaneswar, Odisha', lat: 20.2961, lon: 85.8245, sample: true },
    ];

    const mapSvg = document.querySelector('.map__svg');
    const pinLayer = document.getElementById('mapPins');
    if (mapSvg && pinLayer) {
      const { lon0, lat1, k, s } = mapSvg.dataset;
      const [, , vbW, vbH] = mapSvg.getAttribute('viewBox').split(/\s+/).map(Number);
      // Same projection used to draw the outline: equirectangular, x scaled by cos(22°)
      const project = (lat, lon) => [((lon - lon0) * k * s) / vbW * 100, ((lat1 - lat) * s) / vbH * 100];
      const list = document.getElementById('siteList');

      SITES.forEach((site, i) => {
        const [x, y] = project(site.lat, site.lon);
        const pin = document.createElement('button');
        pin.type = 'button';
        pin.className = 'pin';
        pin.style.left = x + '%';
        pin.style.top = y + '%';
        pin.style.setProperty('--d', (i * 0.35) + 's');
        pin.style.transitionDelay = (0.2 + i * 0.08) + 's'; // pins drop in one after another
        pin.setAttribute('aria-label', site.name);
        pin.innerHTML = `<span class="pin__core"></span><span class="pin__label">${site.name}</span>`;
        pin.addEventListener('click', () => {
          pinLayer.querySelectorAll('.pin.is-open').forEach((p) => p !== pin && p.classList.remove('is-open'));
          pin.classList.toggle('is-open');
        });
        pinLayer.appendChild(pin);

        const li = document.createElement('li');
        li.textContent = site.name;
        list.appendChild(li);
      });
      document.getElementById('siteCount').textContent = SITES.length;
      cleanups.push(() => { pinLayer.textContent = ''; list.textContent = ''; });
    }

    /* ---------- Technology list: highlight the active item ---------- */
    const items = [...document.querySelectorAll('.layer-item')];
    const activate = (n) => {
      items.forEach((it) => it.classList.toggle('is-active', it.dataset.layer === n));
    };
    if (items.length) {
      activate(items[0].dataset.layer);
      items.forEach((it) => {
        it.addEventListener('mouseenter', () => activate(it.dataset.layer));
        it.addEventListener('focus', () => activate(it.dataset.layer));
      });
      const layerObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => { if (entry.isIntersecting) activate(entry.target.dataset.layer); });
      }, { rootMargin: '-45% 0px -50% 0px' });
      items.forEach((it) => layerObserver.observe(it));
    }

    /* ---------- Stacking cards (About page) ---------- */
    document.querySelectorAll('[data-stack]').forEach((stack) => {
      const cards = [...stack.querySelectorAll('.scard')];
      const header = document.getElementById('header');
      // Sticky offset per card: normally just below the header (stepped so earlier cards peek out),
      // but a card taller than the screen first scrolls until its bottom is visible, then pins.
      const setTops = () => {
        const small = innerWidth <= 640;
        cards.forEach((card, i) => {
          const base = header.offsetHeight + (small ? 16 : 30) + i * (small ? 10 : 22);
          const fit = innerHeight - card.offsetHeight - 16;
          card.style.top = Math.min(base, fit) + 'px';
        });
      };
      setTops();
      window.addEventListener('resize', setTops);
      if (reduceMotion || cards.length < 2) return;
      let ticking = false;
      const update = () => {
        cards.forEach((card, i) => {
          const next = cards[i + 1];
          if (!next || getComputedStyle(card).position !== 'sticky') { card.style.transform = ''; card.style.filter = ''; return; }
          const cardTop = card.getBoundingClientRect().top;
          const nextTop = next.getBoundingClientRect().top;
          const h = card.offsetHeight;
          // 0 when the next card is a full card-height below, 1 when it has fully covered this one
          const p = Math.min(Math.max(1 - (nextTop - cardTop) / h, 0), 1);
          card.style.transform = `scale(${1 - p * 0.06})`;
          card.style.filter = `brightness(${1 - p * 0.45})`;
        });
        ticking = false;
      };
      window.addEventListener('scroll', () => { if (!ticking) { requestAnimationFrame(update); ticking = true; } }, { passive: true });
      window.addEventListener('resize', update);
      update();
    });

    /* ---------- Image gallery (PBMT page) ---------- */
    document.querySelectorAll('[data-gallery]').forEach((gal) => {
      const slides = [...gal.querySelectorAll('.pb-gallery__slide')];
      let current = 0;
      let timer = null;
      const show = (n) => {
        current = (n + slides.length) % slides.length;
        slides.forEach((s, i) => { s.classList.toggle('is-active', i === current); s.setAttribute('aria-hidden', i === current ? 'false' : 'true'); });
      };
      const stop = () => { clearInterval(timer); timer = null; };
      const start = () => { if (!reduceMotion && !timer) timer = setInterval(() => show(current + 1), 4000); };
      gal.querySelector('[data-prev]').addEventListener('click', () => { show(current - 1); stop(); start(); });
      gal.querySelector('[data-next]').addEventListener('click', () => { show(current + 1); stop(); start(); });
      gal.addEventListener('mouseenter', stop);
      gal.addEventListener('mouseleave', start);
      start();
      cleanups.push(stop);
    });

    /* ---------- Team list: round photo pops up over the active row ---------- */
    document.querySelectorAll('[data-team-list]').forEach((list) => {
      const float = list.querySelector('.ml__float');
      const img = float.querySelector('img');
      const ini = float.querySelector('span');
      const rows = [...list.querySelectorAll('.ml__row')];
      let active = null;
      const show = (row) => {
        if (row === active) return;
        active?.classList.remove('is-active');
        active = row;
        row.classList.add('is-active');
        if (row.dataset.img) { img.src = row.dataset.img; ini.textContent = ''; }
        else { img.removeAttribute('src'); ini.textContent = row.dataset.initials || ''; }
        float.style.top = `${row.offsetTop + (float.offsetWidth > 200 ? row.offsetHeight / 2 : 10)}px`;   // offsetTop is relative to the list; on phones the photo sits just above the row
        float.classList.add('is-on');
      };
      const hide = () => { active?.classList.remove('is-active'); active = null; float.classList.remove('is-on'); };

      if (window.matchMedia('(hover: hover) and (min-width: 761px)').matches) {
        rows.forEach((row) => row.addEventListener('mouseenter', () => show(row)));
        list.addEventListener('mouseleave', hide);
        return;
      }
      // touch / small screens: follow the row nearest the middle of the screen, or the one tapped
      let ticking = false;
      const pick = () => {
        ticking = false;
        const mid = window.innerHeight * 0.5;
        const box = list.getBoundingClientRect();
        if (box.bottom < mid - 40 || box.top > mid + 40) { hide(); return; }
        let best = null, dist = Infinity;
        rows.forEach((row) => {
          const r = row.getBoundingClientRect();
          const d = Math.abs(r.top + r.height / 2 - mid);
          if (d < dist) { dist = d; best = row; }
        });
        if (best) show(best);
      };
      window.addEventListener('scroll', () => { if (!ticking) { ticking = true; requestAnimationFrame(pick); } }, { passive: true });
      rows.forEach((row) => row.addEventListener('click', (e) => { if (!e.target.closest('a')) show(row); }));
      pick();
    });

    /* ---------- Product story: pinned media follows the chapter in view (OralScan page) ---------- */
    const steps = [...document.querySelectorAll('[data-step]')];
    if (steps.length) {
      const items = [...document.querySelectorAll('[data-media]')];
      const links = [...document.querySelectorAll('[data-chapter]')];
      const activate = (key) => {
        items.forEach((m) => m.classList.toggle('is-active', m.dataset.media === key));
        links.forEach((l) => l.classList.toggle('is-active', l.dataset.chapter === key));
      };
      const io = new IntersectionObserver((entries) => {
        entries.forEach((e) => { if (e.isIntersecting) activate(e.target.dataset.step); });
      }, { rootMargin: '-45% 0px -45% 0px' });
      steps.forEach((s) => io.observe(s));
    }

    /* ---------- Tabs (About page impact) ---------- */
    document.querySelectorAll('[data-tabs]').forEach((wrap) => {
      const tabs = [...wrap.querySelectorAll('[role="tab"]')];
      const select = (tab) => {
        tabs.forEach((t) => {
          const on = t === tab;
          t.setAttribute('aria-selected', String(on));
          t.tabIndex = on ? 0 : -1;
          document.getElementById(t.getAttribute('aria-controls')).hidden = !on;
        });
      };
      tabs.forEach((tab, i) => {
        tab.addEventListener('click', () => select(tab));
        tab.addEventListener('keydown', (e) => {
          const step = { ArrowRight: 1, ArrowDown: 1, ArrowLeft: -1, ArrowUp: -1 }[e.key];
          if (e.key === 'Home' || e.key === 'End' || step) {
            e.preventDefault();
            const next = e.key === 'Home' ? tabs[0] : e.key === 'End' ? tabs[tabs.length - 1] : tabs[(i + step + tabs.length) % tabs.length];
            select(next); next.focus();
          }
        });
      });
    });

    /* ---------- Shop product page (CureLite): photo gallery ---------- */
    document.querySelectorAll('[data-shop-gallery]').forEach((gal) => {
      const imgs = [...gal.querySelectorAll('.cl-gallery__img')];
      const thumbs = [...gal.querySelectorAll('[data-thumb]')];
      const count = gal.querySelector('[data-count]');
      let cur = 0;
      const show = (n) => {
        cur = (n + imgs.length) % imgs.length;
        imgs.forEach((im, i) => { const on = i === cur; im.classList.toggle('is-active', on); if (on) im.removeAttribute('aria-hidden'); else im.setAttribute('aria-hidden', 'true'); });
        thumbs.forEach((t, i) => { t.classList.toggle('is-active', i === cur); t.setAttribute('aria-pressed', String(i === cur)); });
        if (count) count.textContent = `${cur + 1} / ${imgs.length}`;
      };
      thumbs.forEach((t, i) => t.addEventListener('click', () => show(i)));
      gal.querySelector('[data-prev]')?.addEventListener('click', () => show(cur - 1));
      gal.querySelector('[data-next]')?.addEventListener('click', () => show(cur + 1));
      const stage = gal.querySelector('.cl-gallery__stage');
      let x0 = null;
      stage?.addEventListener('touchstart', (e) => { x0 = e.touches[0].clientX; }, { passive: true });
      stage?.addEventListener('touchend', (e) => {
        if (x0 === null) return;
        const dx = e.changedTouches[0].clientX - x0; x0 = null;
        if (Math.abs(dx) > 40) show(cur + (dx < 0 ? 1 : -1));
      });
    });

    /* ---------- Testimonials loop (home): repeat the cards once so the row can glide endlessly ---------- */
    document.querySelectorAll('[data-quotes] .quotes__track').forEach((track) => {
      const cards = [...track.children].filter((c) => !c.hasAttribute('data-clone'));
      if (!track.querySelector('[data-clone]')) {
        cards.forEach((card) => {
          const copy = card.cloneNode(true);
          copy.setAttribute('data-clone', '');
          copy.setAttribute('aria-hidden', 'true');
          copy.setAttribute('inert', '');
          track.appendChild(copy);
        });
      }
      track.style.setProperty('--q-duration', cards.length * 8 + 's'); // about 8 seconds per card
    });

    /* ---------- Awards page: filter the trophies by year ---------- */
    document.querySelectorAll('[data-aw-filters]').forEach((bar) => {
      const chips = [...bar.querySelectorAll('[data-aw-filter]')];
      const items = [...document.querySelectorAll('[data-aw-grid] .aw-item')];
      chips.forEach((chip) => chip.addEventListener('click', () => {
        const year = chip.dataset.awFilter;
        chips.forEach((c) => { const on = c === chip; c.classList.toggle('is-on', on); c.setAttribute('aria-pressed', String(on)); });
        items.forEach((it) => {
          const show = year === 'all' || it.dataset.year === year;
          it.classList.toggle('is-hidden', !show);
          it.classList.remove('is-in');
          if (show) { void it.offsetWidth; it.classList.add('is-in'); }
        });
      }));
    });

    /* ---------- Newsletter (validates; not connected to a backend yet) ---------- */
    const form = document.getElementById('newsletterForm');
    const input = document.getElementById('newsletterEmail');
    const note = document.getElementById('newsletterNote');
    if (form) form.addEventListener('submit', (e) => {
      e.preventDefault();
      const valid = input.value.trim() !== '' && input.checkValidity();
      form.classList.toggle('is-error', !valid);
      note.classList.toggle('is-error', !valid);
      input.setAttribute('aria-invalid', String(!valid));
      note.textContent = valid ? 'Thank you for subscribing.' : 'Please enter a valid email address.';
      if (valid) form.reset();
    });

    /* ---------- Footer year ---------- */
    const year = document.getElementById('year');
    if (year) year.textContent = new Date().getFullYear();
  })();

  /* Partners page: tabs (Investors / Supported by / Clinical partners) */
  (function () {
    var wrap = document.querySelector('[data-partner-tabs]');
    if (!wrap) return;
    var tabs = [].slice.call(wrap.querySelectorAll('.pt-tab'));
    var ink = wrap.querySelector('.pt-tabs__ink');
    function moveInk(tab) { ink.style.width = tab.offsetWidth + 'px'; ink.style.height = tab.offsetHeight + 'px'; ink.style.transform = 'translate(' + tab.offsetLeft + 'px,' + tab.offsetTop + 'px)'; }
    function select(tab, focus) {
      tabs.forEach(function (t) {
        var on = t === tab, panel = document.getElementById(t.getAttribute('aria-controls'));
        t.classList.toggle('is-on', on); t.setAttribute('aria-selected', on ? 'true' : 'false'); t.tabIndex = on ? 0 : -1;
        panel.hidden = !on; panel.classList.toggle('is-on', on);
      });
      moveInk(tab);
      if (focus) tab.focus();
    }
    tabs.forEach(function (t, i) {
      t.addEventListener('click', function () { select(t); });
      t.addEventListener('keydown', function (e) {
        var d = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0;
        if (d) { e.preventDefault(); select(tabs[(i + d + tabs.length) % tabs.length], true); }
      });
    });
    var start = tabs.filter(function (t) { return '#' + t.getAttribute('aria-controls') === location.hash; })[0] || tabs[0];
    select(start);
    window.addEventListener('resize', function () { moveInk(wrap.querySelector('.pt-tab.is-on')); });
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(function () { moveInk(wrap.querySelector('.pt-tab.is-on')); });
  })();

  /* Home hero: show the device photo only if it loads */
  (function () {
    document.querySelectorAll('.device__photo').forEach(function (img) {
      var ok = function () { img.parentNode.classList.add('has-photo'); };
      if (img.complete) { img.naturalWidth ? ok() : img.remove(); return; }
      img.addEventListener('load', ok);
      img.addEventListener('error', function () { img.remove(); });
    });
  })();
}
