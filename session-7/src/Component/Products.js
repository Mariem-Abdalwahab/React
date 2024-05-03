import { useContext } from "react"
import ProductContext from "./Context/ProductContext";
import { Contextprovider } from "./Context/ProductContext";
import { useRecoilState } from "recoil";
import ProductState from "./atoms/Products-atom";

const Products = () => {
    // const products = useContext(Contextprovider);
    const [products, setProducts] = useRecoilState(ProductState);
  return (
    <>
        <h1>Products</h1>
        <ul>
            {products.map((product,index)=>{
                return(
                    <li key={index}>{product.id} == {product.title}</li>
                )
            })}
        </ul>
    </>
  )
}

export default Products