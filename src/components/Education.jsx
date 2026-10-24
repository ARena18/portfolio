import './Education.css'

const SCHOOLS = [
  {
    degree: 'M.S. in Computer Science',
    note: 'Specialization in Data Science',
    range: 'Exp. Dec 2026',
    details: 'Machine Learning · Artificial Intelligence · Big Data Analysis',
    honors: ["Dean's Graduate Student Honor Roll, Winter 2026"],
  },
  {
    degree: 'B.S. in Computer Science',
    note: 'Summa Cum Laude',
    range: 'Dec 2025',
    details: 'Data Structures · Object-Oriented Programming · Game/Graphics Design · Web Development',
    honors: [
      "Dean's List, Fall 2022 – Fall 2025",
      "President's List, Fall 2022 – Spring 2025",
      'CS Outstanding Student Award',
    ],
  },
]

export default function Education() {
  return (
    <section id="education" className="section education">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">Education</p>
          <h2>Seattle University.</h2>
        </div>

        <div className="education__grid">
          {SCHOOLS.map((s) => (
            <div key={s.degree} className="education__card">
              <div className="education__top">
                <h3>{s.degree}</h3>
                <span className="education__range">{s.range}</span>
              </div>
              <p className="education__note">{s.note}</p>
              <p className="education__details">{s.details}</p>
              <ul className="education__honors">
                {s.honors.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
