import "./footer.css"
import {Link} from "react-router-dom";

export default function Footer(){
    return(
        <div className="footer"> 
            <div className="horizontalList">
                <div className="styleListfooter">  
                    <img src={require('../../media/tele.png')} width="40" height="30"></img>+7 995 204 98 16
                    <Link to="https://t.me/websitebuildingCK" className="link"> <img src={require('../../media/telegram.png')} width="30" height="30"></img>Telegram</Link>
                    <Link to="https://wa.me/00000000000" className="link"> <img src={require('../../media/whatsapp.png')} width="30" height="30"></img>Whatsapp</Link>
                </div>
                <div className="styleListfooterright"><br/><img src={require('../../media/adres.png')} width="40" height="30"></img> 
                Москва, ул.Пушкина 27 стр 11 <br/>
                sitandride@gmail.com
                </div>
            </div>
        </div>
    )
}