type Skill = { name: string; category: string; icon: string; level: number };

type Props = { skills?: Skill[] };

export default function SkillTags({
  skills = [
    { name: "HTML", category: "Frontend", icon: "fa-brands fa-html5", level: 2 },
    { name: "CSS", category: "Frontend", icon: "fa-brands fa-css3-alt", level: 2 },
    { name: "JavaScript", category: "Frontend", icon: "fa-brands fa-js", level: 2 },
    { name: "React", category: "Frontend", icon: "fa-brands fa-react", level: 2 },
    { name: "Git", category: "Tools", icon: "fa-brands fa-git-alt", level: 4 },
    { name: "Python", category: "Programming Languages", icon: "fa-brands fa-python", level: 3 },
  ],
}: Props) {
  return (
    <div className="skill-grid">
      {skills.map((s) => (
        <div key={s.name} className="skill-card">
          <i className={s.icon}></i>
          <h3>{s.name}</h3>
          <p>{s.category}</p>
          <div className="skill-dots">
            {[1, 2, 3, 4, 5].map((n) => (
              <span key={n} className={n <= s.level ? "dot on" : "dot"} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}