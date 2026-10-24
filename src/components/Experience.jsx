import './Experience.css'

const ROLES = [
  {
    range: '2025.08 — present',
    title: 'Web Designer',
    org: 'Technology Ethics Initiative, Seattle University',
    bullets: [
      'Built a React front end surfacing data on AI news coverage.',
      'Proposed and refined designs directly with faculty stakeholders.',
    ],
  },
  {
    range: '2025.04 — present',
    title: 'Big Data Analysis Grader',
    org: 'Computer Science Dept., Seattle University',
    bullets: [
      'Reviewed student Hadoop, S3, HiveQL, and Spark pipelines on AWS.',
      'Identified error sources and coached best practices in feedback.',
    ],
  },
  {
    range: '2024.10 — 2025.06',
    title: 'Object-Oriented Development Grader',
    org: 'Computer Science Dept., Seattle University',
    bullets: [
      'Evaluated C++/C# submissions for design, inheritance, and testing.',
      'Aligned grading criteria with faculty across sections.',
    ],
  },
  {
    range: '2024.09 — 2025.06',
    title: 'Web Developer',
    org: 'Capstone, sponsored by Thoughts Cost',
    bullets: [
      'Led a team building a reading tool for special education students.',
      'Ran the project through Agile/Scrum with a Kanban-based workflow.',
    ],
  },
  {
    range: '2024.09 — present',
    title: 'Intro Programming Tutor',
    org: 'Computer Science Dept., Seattle University',
    bullets: [
      'Adapted explanations of memory, control flow, and data structures to each student.',
    ],
  },
  {
    range: '2023.09 — 2024.08',
    title: 'Research Assistant',
    org: 'Computer Science Dept., Seattle University',
    bullets: [
      'Co-led a web-based epidemiology simulation used in undergrad courses.',
      'Findings published in the Journal of Biology and Microbiology Education.',
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="section experience">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">Experience</p>
          <h2>Where the work has happened.</h2>
        </div>

        <ol className="timeline">
          {ROLES.map((role) => (
            <li key={role.title + role.range} className="timeline__item">
              <div className="timeline__date">{role.range}</div>
              <div className="timeline__content">
                <h3>{role.title}</h3>
                <p className="timeline__org">{role.org}</p>
                <ul className="timeline__bullets">
                  {role.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
