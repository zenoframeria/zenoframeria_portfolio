type props = {
  title: string;
  description: string;
  year: string;
};

export default function Achievement({ title, description, year }: props) {
  return (
    <div className="achievement-card">
      <span className="achievement-icon"><i className="fa-solid fa-star"></i></span>
      <div className="achievement-text">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <span className="achievement-year">UNLOCKED · {year}</span>
    </div>
  );
}