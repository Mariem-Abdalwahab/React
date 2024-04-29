import { Link } from 'react-router-dom';
// import './product.css'
function Prodcut(props){
    let {productId, product} = {props};
// console.log(props);
    return(
        <>
            <div className="card cardHi w-50 m-auto">
            <img src={props.product.image} className="card-img-top productImg" alt={props.product.description}/>
            <div className="card-body">
                <h5 className="card-title">{props.product.title}</h5>
                <p className="card-text desc">{props.product.description}</p>
                <p>Price: {props.product.price}$</p>
                
            </div>
            </div>
        </>
    )
}

export default Prodcut;