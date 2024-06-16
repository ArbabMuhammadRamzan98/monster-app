
import Card from '../card';
import './card-lists.css'
const CardLists = (props) => {
   return <div className='card-lists'>
        {
          props.monstersLists.map(monster => <Card monster={monster} />)
        }
      </div>
}

export default CardLists;