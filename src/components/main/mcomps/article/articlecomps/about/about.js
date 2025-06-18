import "./about.css"

export default function About(){
    return(
        <div className="about">
            <div className="d1">Главная</div>

             <div className="d2">
                <div className="d4"> 
                <img src={require('../../../../../../media/podrobnee.jpg')} width="35%" height="35%"></img> </div>
                <div className="d5"> <img src={require('../../../../../../media/samocat.png')} width="100%" height="70%"></img>
                <img src={require('../../../../../../media/Skidka.jpg')} width="100%" height="30%"></img>
                </div>
             </div>

            <div className="d3"><img src={require('../../../../../../media/nizabout1.png')} width="80px" height="80px"></img>
            Доставка по всей России
            <img src={require('../../../../../../media/nizabout2.png')} width="80px" height="80px"></img> 
            Официальная гарантия
            <img src={require('../../../../../../media/nizabout3.png')} width="80px" height="80px"></img> 
            Большой ассортимент
            <img src={require('../../../../../../media/nizabout4.png')} width="80px" height="80px"></img> 
            Любой способ оплаты
            <img src={require('../../../../../../media/nizabout5.png')} width="80px" height="80px"></img> 
            Хорошие отзывы
            </div>
        </div>
    )
}