import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { ArrowUpRight, Briefcase, Lightbulb, TrendUp, UsersThree } from "@phosphor-icons/react/dist/ssr";

export const metadata = {
  title: "Our Team | Sascan Meditech",
  description:
    "Meet the Sascan Meditech team: founders, technical, marketing team and interns building non-invasive cancer screening and biophotonics devices in Thiruvananthapuram.",
};

export default function TeamPage() {
  return (
    <>
      <Header active="company" />
      <div className="page-team">
        <main id="main">
            <section className="pb-page tc-section" id="overview">
              <div className="container tc-head reveal">
                <h1 className="tc-head__title">Meet the team</h1>
              </div>
              <div className="container tc-stack ml-stack">
                <div className="ml reveal" id="founders" data-team-list="">
                  <p className="ml__label label mono">Founders</p>
                  <ul className="ml__rows">
                  <li className="ml__row" data-img="/assets/team/dr-subhash-narayanan.webp">
                    <span className="ml__thumb" aria-hidden="true"><img src="/assets/team/dr-subhash-narayanan.webp" width="480" height="480" alt="" loading="lazy" decoding="async" /></span>{" "}<span className="ml__name">Dr Subhash Narayanan</span>{" "}<a className="ml__li" href="https://in.linkedin.com/in/subhash-narayanan-9439475" target="_blank" rel="noopener" aria-label="Dr Subhash Narayanan on LinkedIn">LinkedIn <ArrowUpRight weight="regular" className="pi ico" aria-hidden="true" /></a>{" "}<span className="ml__role">Founder CEO</span>
                  </li>
                  <li className="ml__row" data-img="/assets/team/usha-subhash.webp">
                    <span className="ml__thumb" aria-hidden="true"><img src="/assets/team/usha-subhash.webp" width="480" height="480" alt="" loading="lazy" decoding="async" /></span>{" "}<span className="ml__name">Usha Subhash</span>{" "}<a className="ml__li" href="https://in.linkedin.com/in/usha-subhash-b6a571287" target="_blank" rel="noopener" aria-label="Usha Subhash on LinkedIn">LinkedIn <ArrowUpRight weight="regular" className="pi ico" aria-hidden="true" /></a>{" "}<span className="ml__role">Director CRM</span>
                  </li>
                  </ul>
                  <div className="ml__float" aria-hidden="true"><img alt="" /><span></span></div>
                </div>
                <div className="ml reveal" id="technical" data-team-list="">
                  <p className="ml__label label mono">Technical Team</p>
                  <ul className="ml__rows">
                  <li className="ml__row" data-img="/assets/team/rinoy-suvarnadas.webp">
                    <span className="ml__thumb" aria-hidden="true"><img src="/assets/team/rinoy-suvarnadas.webp" width="480" height="480" alt="" loading="lazy" decoding="async" /></span>{" "}<span className="ml__name">Rinoy Suvarnadas</span>{" "}<a className="ml__li" href="https://www.linkedin.com/in/rinoy-suvarnadas-ab685237/" target="_blank" rel="noopener" aria-label="Rinoy Suvarnadas on LinkedIn">LinkedIn <ArrowUpRight weight="regular" className="pi ico" aria-hidden="true" /></a>{" "}<span className="ml__role">Operation &amp; Compliance</span>
                  </li>
                  <li className="ml__row" data-img="/assets/team/nikhil-vishnu-k.webp">
                    <span className="ml__thumb" aria-hidden="true"><img src="/assets/team/nikhil-vishnu-k.webp" width="480" height="480" alt="" loading="lazy" decoding="async" /></span>{" "}<span className="ml__name">Nikhil Vishnu K</span>{" "}<a className="ml__li" href="https://www.linkedin.com/in/nikhil-vishnu-k/" target="_blank" rel="noopener" aria-label="Nikhil Vishnu K on LinkedIn">LinkedIn <ArrowUpRight weight="regular" className="pi ico" aria-hidden="true" /></a>{" "}<span className="ml__role">Industrial Design &amp; Product Development Lead</span>
                  </li>
                  <li className="ml__row" data-img="/assets/team/rahul-r-k.webp">
                    <span className="ml__thumb" aria-hidden="true"><img src="/assets/team/rahul-r-k.webp" width="480" height="480" alt="" loading="lazy" decoding="async" /></span>{" "}<span className="ml__name">Rahul R K</span>{" "}<a className="ml__li" href="https://www.linkedin.com/in/rahul-r-k-042517206/" target="_blank" rel="noopener" aria-label="Rahul R K on LinkedIn">LinkedIn <ArrowUpRight weight="regular" className="pi ico" aria-hidden="true" /></a>{" "}<span className="ml__role">Senior Hardware Engineer</span>
                  </li>
                  <li className="ml__row" data-img="/assets/team/dr-meera-murali.webp">
                    <span className="ml__thumb" aria-hidden="true"><img src="/assets/team/dr-meera-murali.webp" width="480" height="480" alt="" loading="lazy" decoding="async" /></span>{" "}<span className="ml__name">Dr Meera Murali</span>{" "}<a className="ml__li" href="https://www.linkedin.com/in/dr-meera-murali-6a8a77254/" target="_blank" rel="noopener" aria-label="Dr Meera Murali on LinkedIn">LinkedIn <ArrowUpRight weight="regular" className="pi ico" aria-hidden="true" /></a>{" "}<span className="ml__role">Clinical Affairs Manager</span>
                  </li>
                  <li className="ml__row" data-img="/assets/team/vysakh-a-r.webp">
                    <span className="ml__thumb" aria-hidden="true"><img src="/assets/team/vysakh-a-r.webp" width="480" height="480" alt="" loading="lazy" decoding="async" /></span>{" "}<span className="ml__name">Vysakh A R</span>{" "}<a className="ml__li" href="https://www.linkedin.com/in/vysakh-ar/" target="_blank" rel="noopener" aria-label="Vysakh A R on LinkedIn">LinkedIn <ArrowUpRight weight="regular" className="pi ico" aria-hidden="true" /></a>{" "}<span className="ml__role">Finance &amp; Accounts Executive</span>
                  </li>
                  <li className="ml__row" data-img="/assets/team/sreehari-p.webp">
                    <span className="ml__thumb" aria-hidden="true"><img src="/assets/team/sreehari-p.webp" width="480" height="480" alt="" loading="lazy" decoding="async" /></span>{" "}<span className="ml__name">Sreehari P</span>{" "}<a className="ml__li" href="https://www.linkedin.com/in/sreeharii-p-dev/" target="_blank" rel="noopener" aria-label="Sreehari P on LinkedIn">LinkedIn <ArrowUpRight weight="regular" className="pi ico" aria-hidden="true" /></a>{" "}<span className="ml__role">Software Developer</span>
                  </li>
                  <li className="ml__row" data-img="/assets/team/reshma-k.webp">
                    <span className="ml__thumb" aria-hidden="true"><img src="/assets/team/reshma-k.webp" width="480" height="480" alt="" loading="lazy" decoding="async" /></span>{" "}<span className="ml__name">Reshma Rajendran</span>{" "}<a className="ml__li" href="https://www.linkedin.com/in/reshmaknair/" target="_blank" rel="noopener" aria-label="Reshma Rajendran on LinkedIn">LinkedIn <ArrowUpRight weight="regular" className="pi ico" aria-hidden="true" /></a>{" "}<span className="ml__role">Clinical &amp; Regulatory Affairs Associate</span>
                  </li>
                  <li className="ml__row" data-img="/assets/team/adithya-s-kumar.webp">
                    <span className="ml__thumb" aria-hidden="true"><img src="/assets/team/adithya-s-kumar.webp" width="480" height="480" alt="" loading="lazy" decoding="async" /></span>{" "}<span className="ml__name">Adithya S Kumar</span>{" "}<a className="ml__li" href="https://www.linkedin.com/in/adithya-s-kumar-adithya/" target="_blank" rel="noopener" aria-label="Adithya S Kumar on LinkedIn">LinkedIn <ArrowUpRight weight="regular" className="pi ico" aria-hidden="true" /></a>{" "}<span className="ml__role">Optoelectronics Engineer</span>
                  </li>
                  <li className="ml__row" data-initials="JJ">
                    <span className="ml__thumb" aria-hidden="true"><span>JJ</span></span>{" "}<span className="ml__name">Jinosh J R</span>{" "}<a className="ml__li" href="https://www.linkedin.com/in/jinosh-j-r-491798316/" target="_blank" rel="noopener" aria-label="Jinosh J R on LinkedIn">LinkedIn <ArrowUpRight weight="regular" className="pi ico" aria-hidden="true" /></a>{" "}<span className="ml__role">Electronics Hardware &amp; PCB Design Engineer</span>
                  </li>
                  <li className="ml__row" data-img="/assets/team/gopika-pradeep.webp">
                    <span className="ml__thumb" aria-hidden="true"><img src="/assets/team/gopika-pradeep.webp" width="480" height="480" alt="" loading="lazy" decoding="async" /></span>{" "}<span className="ml__name">Gopika Pradeep</span>{" "}<a className="ml__li" href="https://www.linkedin.com/in/gopika-pradeep-623342321/" target="_blank" rel="noopener" aria-label="Gopika Pradeep on LinkedIn">LinkedIn <ArrowUpRight weight="regular" className="pi ico" aria-hidden="true" /></a>{" "}<span className="ml__role">Biomedical Engineer – Quality &amp; Regulatory Affairs</span>
                  </li>
                  <li className="ml__row" data-img="/assets/team/vivek-p-krishnan.webp">
                    <span className="ml__thumb" aria-hidden="true"><img src="/assets/team/vivek-p-krishnan.webp" width="480" height="480" alt="" loading="lazy" decoding="async" /></span>{" "}<span className="ml__name">Vivek P Krishnan</span>{" "}<a className="ml__li" href="https://www.linkedin.com/in/vivekpkrishnan/" target="_blank" rel="noopener" aria-label="Vivek P Krishnan on LinkedIn">LinkedIn <ArrowUpRight weight="regular" className="pi ico" aria-hidden="true" /></a>{" "}<span className="ml__role">Clinical Research Associate</span>
                  </li>
                  <li className="ml__row" data-img="/assets/team/shahana-m.webp">
                    <span className="ml__thumb" aria-hidden="true"><img src="/assets/team/shahana-m.webp" width="480" height="480" alt="" loading="lazy" decoding="async" /></span>{" "}<span className="ml__name">Shahana M</span>{" "}<a className="ml__li" href="https://www.linkedin.com/in/shahanameeran/" target="_blank" rel="noopener" aria-label="Shahana M on LinkedIn">LinkedIn <ArrowUpRight weight="regular" className="pi ico" aria-hidden="true" /></a>{" "}<span className="ml__role">Jr Optoelectronics Engineer</span>
                  </li>
                  <li className="ml__row" data-img="/assets/team/anoop-s-u.webp">
                    <span className="ml__thumb" aria-hidden="true"><img src="/assets/team/anoop-s-u.webp" width="480" height="480" alt="" loading="lazy" decoding="async" /></span>{" "}<span className="ml__name">Anoop S U</span>{" "}<a className="ml__li" href="https://www.linkedin.com/in/anoop-s-u-a502163b7/" target="_blank" rel="noopener" aria-label="Anoop S U on LinkedIn">LinkedIn <ArrowUpRight weight="regular" className="pi ico" aria-hidden="true" /></a>{" "}<span className="ml__role">Junior Accountant</span>
                  </li>
                  </ul>
                  <div className="ml__float" aria-hidden="true"><img alt="" /><span></span></div>
                </div>
                <div className="ml reveal" id="marketing" data-team-list="">
                  <p className="ml__label label mono">Marketing Team</p>
                  <ul className="ml__rows">
                  <li className="ml__row" data-initials="ST">
                    <span className="ml__thumb" aria-hidden="true"><span>ST</span></span>{" "}<span className="ml__name">Shivrudra T</span>{" "}<span className="ml__li ml__li--none" aria-hidden="true">—</span>{" "}<span className="ml__role">Sales Head</span>
                  </li>
                  <li className="ml__row" data-initials="MS">
                    <span className="ml__thumb" aria-hidden="true"><span>MS</span></span>{" "}<span className="ml__name">Manisha Sarda</span>{" "}<span className="ml__li ml__li--none" aria-hidden="true">—</span>{" "}<span className="ml__role">Marketing Head - West</span>
                  </li>
                  </ul>
                  <div className="ml__float" aria-hidden="true"><img alt="" /><span></span></div>
                </div>
              </div>
            </section>

            <section className="section section--rule" id="join">
              <div className="container tm-why">
                <div className="tm-why__head reveal">
                  <h2 className="pb-h2 tm-h2">Why you should <span className="accent">join us</span></h2>
                  <p className="pb-p">At Sascan, we are committed to transforming healthcare through innovative medical technologies and diagnostic solutions.</p>
                  <Link href="/careers" className="btn btn--primary">Careers</Link>
                </div>
                <ul className="tm-why__grid reveal">
                    <li className="tm-why__item">
                      <span className="tm-why__icon"><UsersThree weight="light" className="pi ico" aria-hidden="true" /></span>
                      <h3 className="tm-why__title">Teamwork</h3>
                      <p>Collaborate with passionate professionals across healthcare, engineering to create innovative medical technologies that improve patient care and save lives globally.</p>
                    </li>
                    <li className="tm-why__item">
                      <span className="tm-why__icon"><Briefcase weight="light" className="pi ico" aria-hidden="true" /></span>
                      <h3 className="tm-why__title">Careers</h3>
                      <p>Build a meaningful career in a fast-growing medical device company focused on innovation, research, and developing impactful healthcare solutions for the future</p>
                    </li>
                    <li className="tm-why__item">
                      <span className="tm-why__icon"><Lightbulb weight="light" className="pi ico" aria-hidden="true" /></span>
                      <h3 className="tm-why__title">Innovations</h3>
                      <p>Work with advanced imaging systems, ML- powered diagnostics, and cutting-edge technologies designed to transform early cancer detection.</p>
                    </li>
                    <li className="tm-why__item">
                      <span className="tm-why__icon"><TrendUp weight="light" className="pi ico" aria-hidden="true" /></span>
                      <h3 className="tm-why__title">Growth Opportunities</h3>
                      <p>Gain hands-on experience, continuous learning opportunities, and exposure to multidisciplinary projects that support both personal and professional growth</p>
                    </li>
                </ul>
              </div>
            </section>
          </main>
      </div>
      <Footer />
    </>
  );
}
