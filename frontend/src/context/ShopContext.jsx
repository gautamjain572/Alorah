import { createContext } from "react";
import { products } from "../assets/frontend_assets/assets";

export const ShopContext = createContext("");

const ShopContextProvider = (props) => {
    const currency = '₹';
    const delivery_fee = 0;
    const value = {
        products , currency , delivery_fee
    }
    return (
        <ShopContext.Provider value={(value)}>
            {props.childern}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;