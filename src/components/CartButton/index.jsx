import Add2CartButton from "./Add2CartButton"
import AltAdd2CartButton from "./AltAdd2CartButton"
import { useSelector } from 'react-redux';
import {selectCartList, selectVariantId } from '../Products/productSlice';

const CartButton = props => {

    const variantId = useSelector(selectVariantId);

    const [{quantity}] = useSelector(selectCartList).filter(item => (item.$id === variantId));

    return <div className="cart-button-container font-14">
        {(quantity>0) ? <AltAdd2CartButton quantity={quantity} /> : <Add2CartButton />}
    </div>
}

export default CartButton