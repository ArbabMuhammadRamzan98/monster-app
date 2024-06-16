import './card.css'
const Card = (props) => {
    return <div className="card">
    <img src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`} alt='monsters' />
    <h3>{props.monster.name}</h3>
    <p>{props.monster.email}</p>
   </div>
}
export default Card;