/* Job openings, grouped by department. Used by the Careers page and the "Apply now" pop-up.
   Add a department or a role here and both update. */

export const CAREERS_EMAIL = "office.sascan@gmail.com";

export const DEPARTMENTS = [
  {
    name: "Engineering",
    roles: [
      {
        title: "Software Developer",
        experience: "5+ years",
        type: "Full-Time",
        location: "Thiruvananthapuram, Kerala",
        salary: "Based on Experience",
        skills: ["C# WPF .NET", "Android Java", "SQL", "OOP Concepts"],
        facts: [
          ["Qualification", "Bachelor's or Master's Degree in Computer Science, Software Engineering, or related field"],
          ["Industry", "Medical Equipment Manufacturing"],
        ],
      },
    ],
  },
  {
    name: "Design",
    roles: [
      {
        title: "Industrial Design Intern",
        experience: "Internship",
        summary: "We're looking for a passionate Industrial Design Intern to support our team in designing and prototyping medical devices.",
        skills: ["CAD · Rhino", "CAD · SolidWorks", "Prototyping", "Testing"],
        facts: [
          ["Qualification", "B.Des, M.Des or PG Diploma in Product/Industrial Design"],
          ["Interest", "Healthcare and user-focused design"],
        ],
      },
    ],
  },
];
