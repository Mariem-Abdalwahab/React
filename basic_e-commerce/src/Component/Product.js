import { Link } from 'react-router-dom';
import './product.css'
function Prodcut(props){
    // let {product, btnStatus} = {props};
// console.log(product);
    return(
        <div className="card cardHi">
        <img src={props.product.image} className="card-img-top productImg" alt={props.product.description}/>
        <div className="card-body">
            <h5 className="card-title">{props.product.title}</h5>
            <p className="card-text desc">{props.product.description}</p>
            <p>Price: {props.product.price}$</p>
            {props.btnStatus && <Link href="#" className="btn btn-primary" to={`/product/${props.product.id}`}>More</Link> }
           
        </div>
        </div>
    )
}

export default Prodcut;