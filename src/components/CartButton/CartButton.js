import React from "react";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import './CartButton.css';

const CartButton = () => {
    return (
        <button className='button'>
            <span className='icon'><ShoppingCartIcon /></span>
            <span>Карзина</span>
            <span className='badge'>3</span>
        </button >
    )
}

export default CartButton;