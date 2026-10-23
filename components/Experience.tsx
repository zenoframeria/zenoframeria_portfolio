type Props = {
  period: string;
  title: string;
  description?: string;
  tags?: string[];
};

export default function ExperienceItem({ period, title, description, tags = [] }: Props) {
  return (
    <div className="timeline-item">
      <span className="timeline-period">{period}</span>
      <div className="timeline-body">
        <h3>{title}</h3>
        {description && <p>{description}</p>}
        <div className="project-tags">
          {tags.map((t) => (
            <span key={t}>{t}</span>
          ))}
        </div>
      </div>
    </div>
  );
}