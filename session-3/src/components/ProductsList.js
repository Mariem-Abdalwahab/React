import productsArr from "../productsData";
import Product from "./Product";
import './ProductsList.css'

function ProductsList(){
    let products = productsArr.map(product => {
        return  product.price >100?(
            // key in the output of map
            <Product key= {product.id} product={product}/>) : null
        
    })
    return(
        <div className="product-list">
            <div className="row">
                {products}
            </div>
        </div>
    );
}

export default ProductsList;