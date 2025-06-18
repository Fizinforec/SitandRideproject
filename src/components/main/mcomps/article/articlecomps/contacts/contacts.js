import "./contacts.css"

export default function Contacts(){
    return(
        <div className="contacts">
            <div className="d1k">Контакты</div>

            <div className="d2k">
                <div className="d3k"> 
                    <p>Главный офис<br/>
                    г.Москва, ул.Пушкина 27 стр. 11<br/>
                    Телефоны: +7 995 204 98 16, +7 992 708 37 87,<br/>
                    Режим работы:<br/>
                    Понедельник - пятница с 10:00 до 19:00<br/>
                    Обед - с 13:00 до 13:30<br/>
                    Выходной: Суббота, Воскресенье.<br/><br/>
                    Возможен прием в любое время по предварительной договоренности<br/><br/>
                    Консультанты работают круглосуточно:<br/><br/>
                    Для обеспечения Вашего комфорта и экономии времени рекомендуем предворительно связаться</p>
                </div>
                <div className="d4k"> 
                    <form id="form1" action="/" method="post" role="form" onsubmit="return submitForm();">
                    <label for="name">Введите Ваше имя</label><br/>
                    <input id="name" name="name" size="15" type="text" Placeholder="Алексей" title="Имя" required/><br/>
                    <label for="name">Введите номер телефона</label><br/>
                    <input id="tel" name="tel" size="11" type="text" Placeholder="+71234567890" required/><br/>
                    <button type = "submit">Заказать звонок</button>
                    </form>
                </div>
            </div>
        </div>
    )

}