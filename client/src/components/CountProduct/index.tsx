import React, {FC, useState} from 'react';
import st from './countProduct.module.scss';
import cn from "classnames";

type countType = {
    countItem: number,
    changeCountItem?: (newCount: number) => void,
    catalog?: boolean,
    refInput?: React.RefObject<HTMLInputElement>
}

const CountProduct: FC<countType> = ({countItem,
                                         changeCountItem,
                                         catalog,
                                         refInput}) => {

    const [count, setCount] = useState<number>(countItem);

    const handleAddOne = ():void => {
        if (count === 99)
            return
        if (changeCountItem !== undefined) {
            changeCountItem(count + 1);
        }
        setCount(count + 1);
    }

    const handleSubtractOne = ():void => {
        if (count === 1)
            return
        if (changeCountItem !== undefined) {
            changeCountItem(count - 1);
        }
        setCount(count - 1);
    }

    const handleOnChange = (e: React.FormEvent<HTMLInputElement>):void => {
        let newValue = e.currentTarget.value;
        if (parseInt(newValue) <= 1 || isNaN(parseInt(newValue))) {
            setCount(1);
        } else if (parseInt(newValue) >= 99) {
            setCount(99);
        } else {
            if (changeCountItem !== undefined) {
                changeCountItem(parseInt(newValue));
            }
            setCount(parseInt(newValue));
        }

    }

    return (
        <>
            <span
                className={cn({cart_minus: catalog}, st.cart_symbol)}
                onClick={handleSubtractOne}>
                -
            </span>
            <span className={cn({cart_input: catalog}, st.cart_count)}>
                               <input type="text"
                                      value={count}
                                      onChange={handleOnChange}
                                      ref={refInput}/>
            </span>
            <span
                className={cn({cart_plus: catalog}, st.cart_symbol)}
                onClick={handleAddOne}>
                +
            </span>
        </>
    );
};

export default CountProduct;