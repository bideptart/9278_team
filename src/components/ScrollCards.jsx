const Card = ({ title, src }) => {
  return (
    <div className="scroll-card">
      <div className="scroll-card-inner">
        <img className="scroll-card-img" src={src} alt={title} />
      </div>
    </div>
  );
};

export default function ScrollCards({ items }) {
  return (
    <div className="scroll-cards">
      {items.map((item) => (
        <Card key={item.title} {...item} />
      ))}
    </div>
  );
}
