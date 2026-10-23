type SkillGroup = { title: string; skills: string[] };

type Props = {
  groups?: SkillGroup[];
};

// ทักษะแบบป้าย เรียงแนวนอนแถวเดียว (ตัดบรรทัดเองเมื่อจอแคบ)
export default function SkillTags({
  groups = [
    { title: "Languages", skills: ["HTML", "CSS", "JavaScript", "TypeScript", "Python"] },
    { title: "Tools", skills: ["Git", "GitHub", "VS Code"] },
    { title: "Learning", skills: ["React", "Next.js", "Tailwind CSS"] },
  ],
}: Props) {
  return (
    <div className="mt-20 flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
      {groups.map((group) => (
        <ul key={group.title} className="flex flex-wrap items-center gap-2">
          <li className="text-xs text-neutral-500">{group.title}</li>
          {group.skills.map((skill) => (
            <li
              key={skill}
              className="rounded-full border border-neutral-300 bg-white px-3 py-1 text-xs text-neutral-800"
            >
              {skill}
            </li>
          ))}
        </ul>
      ))}
    </div>
  );
}