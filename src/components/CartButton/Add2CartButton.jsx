import { useSelector, useDispatch } from 'react-redux';
import {addQuantity, selectVariantId} from '../Products/productSlice';

const Add2CartButton = props => {

    const dispatch = useDispatch();
    const variantId = useSelector(selectVariantId);
    
    const onAddToCart = () => {
        dispatch(addQuantity(variantId));
    }

    return <div className="cart-button font-14" onClick={onAddToCart} >Add to cart</div>
}

export default Add2CartButton