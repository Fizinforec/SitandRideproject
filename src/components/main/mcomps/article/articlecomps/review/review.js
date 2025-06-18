import "./review.css"

export default function Review(){
    return(
        <div className="review">
            <div className="d1s">Статьи</div>

            <div className="d2s">
                <div className="d3s">
                <figure>
                <img src={require('../../../../../../media/statia1.jpeg')} width="100%" height="100%"></img>
                <figcaption>Самые необычные самокаты</figcaption></figure>  </div>
                <div className="d3s"> <figure>
                <img src={require('../../../../../../media/statia2.jpg')} width="100%" height="100%"></img>
                <figcaption>Почему самокаты захватили мир </figcaption></figure> </div>
                <div className="d3s">  <figure>
                <img src={require('../../../../../../media/statia3.jpg')} width="100%" height="100%"></img>
                <figcaption>Техника безопасности и неутишительная статистика</figcaption></figure> </div>
                <div className="d3s">  <figure>
                <img src={require('../../../../../../media/statia4.png')} width="100%" height="100%"></img> 
                <figcaption>Из чего сделан ваш самокат</figcaption></figure>
                </div>
            </div>

            <div className="d4s">
                <img src={require('../../../../../../media/view.jpg')} width="60%" height="100%"></img>
                
                <div className = "text">
                        <pre>
                        Садись и катись - крупный ритейлер средств индивидуальной <br/>
                        мобильности и аксессуаров. Мы ориентируемся на то, чтобы<br/>
                        вы могли выбрать надежный, долговечный самокат по <br/>
                        минимальной на рынке цене. При создании и обновлении сайта <br/>
                        sitandride-online.ru мы продумали логическую структуру<br/>
                        каталога и снабдили карточками все доступные товары. Выбрать<br/>
                        технику в нашем магазине и просто, благодаря опытным <br/>
                        консультантам нашего контакт-центра. С нами вас повезет!<br/>
                        </pre>
                </div>
            </div>

        </div>
    )
}
