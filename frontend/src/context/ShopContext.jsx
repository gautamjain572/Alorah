import { createContext, Fragment, useState } from "react";
import { products } from "../assets/frontend_assets/assets";

export const ShopContext = createContext("");

const ShopContextProvider = (props) => {
    const currency = '₹';
    const delivery_fee = 0;
    const [search,setSearch] = useState('');
    const [showSearch,setShowSearch] = useState(false);
    const valuee = {
        products , currency , delivery_fee,
        search,setSearch,showSearch,setShowSearch
    }
    return (
        <ShopContext.Provider value={valuee}>
          {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;