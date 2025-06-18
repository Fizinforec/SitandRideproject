import "./products.css"

export default function Products(){
    return(
        <div className="products">
            <div className="d1p">Товары</div>

                <div className="d2p">
                <div className="d3p"> 
                <img src={require('../../../../../../media/Eco-ride.jpg')} width="80%" height="80%"></img> </div>
                <div className="d3p"> 
                <img src={require('../../../../../../media/Speedy.jpg')} width="80%" height="80%"></img> </div>
                <div className="d3p">
                <img src={require('../../../../../../media/Pro-X.jpg')} width="80%" height="80%"></img></div>
                <div className="d3p">
                <img src={require('../../../../../../media/shlem.jpg')} width="80%" height="80%"></img></div>
                </div>
                <div className="d2p">
                <div className="d3p">
                <img src={require('../../../../../../media/koleno.jpg')} width="80%" height="80%"></img> </div>
                <div className="d3p"> </div>
                <div className="d3p"> </div>
                <div className="d3p"> </div>
            </div>
        </div>
    )
}