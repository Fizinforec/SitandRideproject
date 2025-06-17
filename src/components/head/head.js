import "./head.css";
import {Link} from "react-router-dom";

export default function Head(){
    return(
        <div className="head">
            <div className="horizontalList">
                <div className="nazvan"><img src={require('../../media/logotip.png')} width="180px" height="70px"></img></div>
                <div className="contact">+7 995 204 98 16</div>
                <div className="list"><Link to="/contacts" className="link">Заказать звонок</Link></div>
                <div className="list"><Link to="/about" className="link">О нашей компании</Link></div>
                <div className="list"><Link to="/products" className="link">Товары</Link></div>
                <div className="list"><Link to="/review" className="link">Обзоры</Link></div>
                <div className="list"><Link to="/otzev" className="link">Отзывы</Link></div>
                <div className="list"><Link to="/contacts" className="link">Контакты</Link></div>
            </div>
        </div>
    )
}