import Heading from "./components/Heading/Heading"
import { Link } from "react-router-dom";
import Header from "./HeaderAndFooter/Header"

const Store = () =>{
    return(
        <>
            <Header/>
            <section>
                <div>
                    <h2>Men's collection</h2>
                </div>
            </section>
      
            <Link to="/">Go back</Link>
     
        </>

    )
}

export default Store;