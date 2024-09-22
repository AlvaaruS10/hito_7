import React from 'react';
import { useCart } from '/src/components/CartContext'
import { useUser } from '/src/components/UserContext'
import styles from '../Cart.module.css';

const Cart = () => {
  const { cart, addToCart, removeFromCart } = useCart();
  const { token } = useUser()  

  return (
    <div className={styles.cart}>
      {cart.length === 0 ? (
        <p>Tu carrito está vacío</p>
      ) : (
        cart.map((item) => (
          <div key={item.id} className={styles.item}>
            <img src={item.img} alt={item.name} className={styles.image} />
            <div className={styles.details}>
              <h3 className={styles.name}>{item.name}</h3>
              <p className={styles.price}>
                Precio: ${item.price.toLocaleString()}
              </p>
              <p className={styles.count}>Cantidad: {item.count}</p>
              <div className={styles.buttons}>
                <button
                  onClick={() => addToCart(item)}
                  className={styles.button}
                >
                  +
                </button>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className={styles.button}
                >
                  -
                </button>
              </div>
            </div>
          </div>
        ))
      )}
      
      {cart.length > 0 && (
        <button
          className={`${styles.payButton} ${!token && styles.payButtonDisabled}`}
        >Pagar</button>
      )}
    </div>
  );
};

export default Cart


