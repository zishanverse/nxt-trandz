import CartContext from '../../context/CartContext'
import './index.css'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      const len = cartList.length
      let totalPrice
      if (len > 1) {
        totalPrice = cartList.reduce(
          (each, next) =>
            each.price * each.quantity + next.price * next.quantity,
        )
      } else {
        totalPrice = cartList[0].price * cartList[0].quantity
      }

      return (
        <div className="flex-end">
          <div className="summary-card">
            <h1 className="summary-head">
              Order Total:{' '}
              <span className="summary-prize">Rs {totalPrice}/-</span>
            </h1>
            <p className="summary-item-count">{len} Items in cart</p>
            <button type="button" className="checkout">
              Checkout
            </button>
          </div>
        </div>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary
