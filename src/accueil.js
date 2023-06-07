import { Link } from "react-router-dom";
function Home (){

    return(
        <div className="App">
        <div>Accueil</div>
        <div> <Link to="/contact">Contact</Link> </div>
       <div> <Link to="/service">service</Link> </div>
       <div> <Link to="/count">count</Link> </div>

        </div>
    )
}
export default Home;