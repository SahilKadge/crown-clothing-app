// import { useContext } from 'react';
// import { CartContext } from '../../contexts/cart.context';


import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { CartIconContainer, ItemCount } from './cart-icon.styles';

//redux
import { useDispatch ,useSelector } from 'react-redux';

import {setIsCartOpen} from '../../store/cart/cart.action.js';
import {selectCartCount , selectIsCartOpen} from '../../store/cart/cart.selector.js';


const CartIcon = () => {
  // const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);

  //redux
  const dispatch = useDispatch();

  const cartCount = useSelector(selectCartCount);
  const isCartOpen = useSelector(selectIsCartOpen)

  const toggleIsCartOpen = () => dispatch(setIsCartOpen(!isCartOpen));


  //context
  // const toggleIsCartOpen = () => setIsCartOpen(isCartOpen);
  return (
    <CartIconContainer onClick={toggleIsCartOpen}>
      <ShoppingIcon className='shopping-icon' />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
