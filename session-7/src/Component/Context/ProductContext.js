import { createContext, useState } from "react";


export const Contextprovider = createContext();

const ProductContext = (props) => {
    const[products, setProducts] = useState([
        {id:1, title: "one"},
        {id:2, title: "two"},
    ]);
    // console.log(products);
  return (

    <>
        <Contextprovider.Provider value={products}>
            {props.children}
        </Contextprovider.Provider>
    </>
  )
}

export default ProductContext;