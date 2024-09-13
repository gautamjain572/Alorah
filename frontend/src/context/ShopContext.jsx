import { createContext, Fragment } from "react";
import { products } from "../assets/frontend_assets/assets";

export const ShopContext = createContext("");

const ShopContextProvider = (props) => {
    const currency = '₹';
    const delivery_fee = 0;
    const valuee = {
        products , currency , delivery_fee
    }
    return (
        <ShopContext.Provider value={valuee}>
          {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;