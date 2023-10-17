import 'bootstrap/dist/css/bootstrap.min.css'
import './styles.css'

const Todo = ( {karnet, name, image}) => {
  return (
    <li className="cards_item">
        <div className="card">
            <div className="card_content">
                <h2 className="card_title">{name} </h2>
                <p className="card_text">{karnet}</p>
            </div>
            <div className="card_image"><img className='w-100 vh-100' src={image}/></div>
            <div className="card_content">
            <a href="" className="btn card_btn btn1">Ver Más</a>
            </div>
        </div>
    </li>
  )
}

export default Todo