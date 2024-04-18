function Product(props){
    
    return (
        <div className="product">
            <h1>{props.product.title}</h1>
            <img src={props.product.image} alt="#"></img>
            <p>{props.product.price}</p>
        </div>
    )
}

export default Product;