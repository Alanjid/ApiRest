import 'bootstrap/dist/css/bootstrap.min.css'
import './styles.css'

const Todo = ( {karnet, name, image}) => {
  return (
    <li className="cards_item">
        <div className="card">
            <div>
                <h2 className="card_title">{name} </h2>
                <p className="card_text">{karnet}</p>
            </div>
            <div className="card_content"><img src={image} className="card_image"/></div>
            <div>
            <a href="/dashboard" className="btn card_btn btn1">Ver Más</a>
            </div>
        </div>
    </li>
  )
}

export default Todo