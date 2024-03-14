


function Card (name, price, traffic, content) {
    return (
    <div className="card">
        <h3>{name}</h3>
        <p>{price}</p>
        <p>{traffic}</p>
        <p>{content}</p>
    </div>
    )
}

export default Card