import Card from "./Card";
import './card-list.css'

const CardList = ({data}) => {

    {data.map((item, index) => (
        <Card key={index} {...item} />
      ))}

    // return (
    //     <div className="app-list list-group">
    //         {elements}
    //     </div>
    // )
}

export default CardList;