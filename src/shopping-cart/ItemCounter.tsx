import { useState } from 'react';

// import './ItemCounter.css';
import styles from './ItemCounter.module.css';

interface ItemCounterProps {
  itemName: string;
  quantity?: number;
}

// Si mi valor es undefined puede evitar igualando a un valor
export const ItemCounter = ({ itemName, quantity = 1 }: ItemCounterProps) => {
  const [count, setCount] = useState(quantity);

  const handleAdd = () => {
    setCount(count + 1);
  };

  const handleSubtract = () => {
    if (count === 1) return;
    setCount(count - 1);
  };

  return (
    <section
      className={styles.itemRow}
      // style={{
      //   display: 'flex',
      //   alignItems: 'center',
      //   gap: 10,
      //   marginTop: 10,
      // }}
    >
      <span
        className={styles['item-text']}
        style={{ color: count === 1 ? 'red' : 'black' }}
      >
        {itemName}
      </span>
      <button onClick={handleAdd}>+1</button>
      <span>{count}</span>
      <button onClick={handleSubtract}>-1</button>
    </section>
  );
};
