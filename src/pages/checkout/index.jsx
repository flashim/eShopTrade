import { useSelector, useDispatch } from 'react-redux';
import { selectCartList, selectVariantId } from '../../components/Products/productSlice';

const checkout = () => {

    const cartList = useSelector(selectCartList);
    const checkoutList = cartList.filter(item => item.quantity > 0);
    const total = checkoutList.reduce((total, item) => total + (item.quantity * item.price), 0);
    const hasItems = () => checkoutList.length > 0 ? true : false

    return (
        <div className="cart-container">
            {hasItems() ?
                <div>
                    Checkout page:: Total: ${total}
                    {cartList.filter(item => item.quantity > 0).map(item => {

                        return (<div key={item.id} className="checkout-item">
                            <div>
                                <img className="product-image-thumb"
                                    src={item.image_src}
                                    alt={item.name}
                                />
                                <div>{`ID - ${item.$id}`}</div>
                            </div>
                            <div>
                                <div>{item.name}</div>
                                <div>{`${item.$name} - ${item.$value}`}</div>
                                <div>{`Quantity - ${item.quantity}`}</div>
                                <div>{`Rate - $${item.price}`}</div>
                                <div><hr /></div>
                                <div>{`Total - $${item.price * item.quantity}`}</div>
                            </div>
                        </div>)
                    }
                    )}
                    <div className="cart-button">${total} :ORDER:</div>
                </div>
                : <div>No items in cart</div>
            }
        </div>

    );
};

export default checkout;