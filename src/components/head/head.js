import "./head.css";
import {Link} from "react-router-dom";

export default function Head(){
    return(
        <div className="head">
            <div className="horizontalList">
                <div className="nazvan"><img src={require('../../media/logotip.png')} width="180px" height="70px"></img></div>
                <div className="list"><Link to="/contacts" className="link">Заказать звонок:</Link>+7 995 204 98 16 &emsp;&emsp;&emsp;</div>
                <div className="list"><Link to="/about" className="link">Главная&emsp;&emsp;</Link></div>
                <div className="list"><Link to="/products" className="link">Товары&emsp;&emsp;</Link></div>
                <div className="list"><Link to="/review" className="link">Статьи&emsp;&emsp;</Link></div>
                <div className="list"><Link to="/contacts" className="link">Контакты</Link></div>
            </div>
        </div>
    )
}