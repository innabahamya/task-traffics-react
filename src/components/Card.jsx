

const Card = ({ name, currency, price, interval, traffic, content }) => (
    <div className="card">
      <h3>{name}</h3>
      <p>{price} {currency}{interval}</p>
      <p>{traffic}</p>
      <p>{content}</p>
    </div>
  );

export default Card
