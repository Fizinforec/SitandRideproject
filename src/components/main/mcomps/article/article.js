import { Routes, Route } from "react-router-dom"
import "./article.css"
import About from "./articlecomps/about/about"
import Contacts from "./articlecomps/contacts/contacts"
import Er404 from "./articlecomps/Er404/Er404.js"
import Products from "./articlecomps/products/products"
import Review from "./articlecomps/review/review"
import Zvonok from "./articlecomps/zvonok/zvonok"

export default function Article(){
    return(
        <div className="article">
            <Routes>
                <Route path="/about" element={<About/>} />
                <Route path="/review" element={<Review/>} />
                <Route path="/products" element={<Products/>} />
                <Route path="/zvonok" element={<Zvonok/>} />
                <Route path="/contacts" element={<Contacts/>} />
                <Route path="/" element={<About/>} />
                <Route path="*" element={<Er404/>} />
            </Routes>
        </div>
    )
}