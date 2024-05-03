import { atom } from "recoil"

const ProductState = atom({
    key: "ProductState",
    default: [
        {id:1, title: "one"},
        {id:2, title: "two"},
    ]
})

export default ProductState;