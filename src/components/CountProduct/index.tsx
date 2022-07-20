import React, {FC, useState} from 'react';
import st from './countProduct.module.scss';
import cn from "classnames";

const CountProduct: FC<{ catalog?: boolean }> = ({catalog}) => {

    const [count, setCount] = useState(1);

    const handleAddOne = () => {
        if(count === 99)
            return
        setCount(count + 1);
    }

    const handleSubtractOne = () => {
        if(count === 1)
            return
        setCount(count - 1);
    }

    const handleOnChange = (e: React.FormEvent<HTMLInputElement>) => {
        let newValue = e.currentTarget.value;
        if (parseInt(newValue) <= 1 || isNaN(parseInt(newValue))) {
            setCount(1);
        } else {
            setCount(parseInt(newValue));
        }

    }

    return (
        <>
            <span className={cn({cart_minus: catalog}, st.cart_symbol)}
                  onClick={handleSubtractOne}>-</span>
            <span className={cn({cart_input: catalog}, st.cart_count)}>
                               <input type="text"
                                      value={count}
                                      onChange={handleOnChange}
                               />
            </span>
            <span className={cn({cart_plus: catalog}, st.cart_symbol)}
                  onClick={handleAddOne}>+</span>
        </>
    );
};

export default CountProduct;