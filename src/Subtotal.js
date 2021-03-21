import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider"; 
import { getBasketTotal } from "./reducer";

function Subtotal() {
    const [{basket}, dispatch] = useStateValue();


    return (
        <div className="subtotal">
            <CurrencyFormat 
                renderText={(value) => (
                    <div>
                        <p>
                            Subtotal ({basket.length} items): <strong>{value}</strong>
                        </p>
                        <small className="subtotal__gift">
                           <input type="checkbox" />
                            This order contains a gift
                        </small>
                    </div>
                )}

                decimalScale={2} // allow up to decimals
                value={getBasketTotal(basket)} // Pass in the total amount 
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"} 

            />
                <button>Proceed to Checkout</button>
        </div>
    );
}

export default Subtotal;
