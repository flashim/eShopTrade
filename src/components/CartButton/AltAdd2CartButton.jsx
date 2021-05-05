import { useSelector, useDispatch } from 'react-redux';
import {addQuantity, removeQuantity, selectVariantId} from '../Products/productSlice';

const AltAdd2CartButton = props => {

    const {quantity} = props;

    const dispatch = useDispatch();
    const variantId = useSelector(selectVariantId);

    const onAddToCart = () => {
        dispatch(addQuantity(variantId));
    }

    const onRemoveFromCart = () => {
        dispatch(removeQuantity(variantId));
    }

    return <div className="altcart-button font-14">
        <div className="button " onClick={onRemoveFromCart}> - </div>
        <div className="quantity-display">{quantity}</div>
        <div className="button" onClick={onAddToCart}> + </div>
    </div>
}

export default AltAdd2CartButton