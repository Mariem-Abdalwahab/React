import { Link } from "react-router-dom"

function Sidebar(){
    return(
        <>
        <ul className="list-unstyled">
            <li>
                <Link to='/Products'>Get All Products</Link>
            </li>
            <li>
                <Link to="/catigories">Get All Catigories</Link>
             
            </li>
        </ul>
            
           
        </>
    )
}

export default Sidebar