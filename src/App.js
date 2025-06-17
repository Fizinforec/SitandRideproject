import "./App.css"
import Head from "./components/head/head"
import Main from "./components/main/main"
import Footer from "./components/footer/footer"
import {BrowserRouter as Router} from 'react-router-dom'; 

function App() {
  return (
      <Router>
      <div className="App">
        <Head />
        <Main></Main>
        <Footer></Footer>
      </div>
      </Router>
  );
}

export default App;