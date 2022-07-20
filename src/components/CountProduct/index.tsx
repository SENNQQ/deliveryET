import React, {FC} from 'react';
import st from './countProduct.module.scss';

const CountProduct:FC = () => {
    return (

        <>
            <span className={["cart_minus", st.cart_symbol].join(' ')}>-</span>
            <span className={["cart_input", st.cart_count].join(' ')}>
                               <input type="text" defaultValue={1}/>
                           </span>
            <span className={["cart_plus", st.cart_symbol].join(' ')}>+</span>
        </>
        // <div className={st.product__item_line_count}>
        //     <div className={st.minus_plus_number}>
        //         <div className={[st.btnmp, st.minus].join(' ')}>
        //             <svg width=".7291vw" height=".7291vw" viewBox="0 0 14 14" fill="none"
        //                  xmlns="http://www.w3.org/2000/svg">
        //                 <rect x="14" y="6" width="2" height="14" rx="1"
        //                       transform="rotate(90 14 6)" fill="#B4BDC6"></rect>
        //             </svg>
        //         </div>
        //         <div className={st.field_number}>
        //             1
        //         </div>
        //         <div className={[st.btnmp, st.plus].join(' ')}>
        //             <svg width=".7291vw" height=".7291vw" viewBox="0 0 14 14" fill="none"
        //                  xmlns="http://www.w3.org/2000/svg">
        //                 <rect x="6.00098" width="2" height="14" rx="1" fill="#B4BDC6"></rect>
        //                 <rect x="14" y="6.00098" width="2" height="14" rx="1"
        //                       transform="rotate(90 14 6.00098)" fill="#B4BDC6"></rect></svg>
        //         </div>
        //     </div>
        // </div>
    );
};

export default CountProduct;