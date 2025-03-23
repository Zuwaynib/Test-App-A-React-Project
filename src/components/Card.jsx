const Card = ({ title, subtitle, altClass }) => {
  return (
    <div className={"card " + altClass}>
      <h3>{title}</h3>
      <p>{subtitle}</p>
    </div>
  );
};

export default Card;
