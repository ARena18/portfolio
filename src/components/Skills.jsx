import './Skills.css'

const GROUPS = [
  { label: 'Programming', items: ['C++', 'C#', 'Python'] },
  { label: 'Web', items: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'ASP.NET'] },
  { label: 'Data', items: ['MySQL', 'MongoDB', 'Supabase'] },
  { label: 'Cloud & Tools', items: ['AWS', 'Git', 'GitHub', 'Linux', 'Microsoft Office'] },
  { label: 'Language', items: ['English', 'Korean'] },
]

export default function Skills() {
  return (
    <section id="skills" className="section skills">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">Skills</p>
          <h2>Toolkit.</h2>
        </div>

        <div className="skills__groups">
          {GROUPS.map((g) => (
            <div key={g.label} className="skills__group">
              <span className="skills__group-label">{g.label}</span>
              <div className="skills__chips">
                {g.items.map((item) => (
                  <span key={item} className="skills__chip">{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
