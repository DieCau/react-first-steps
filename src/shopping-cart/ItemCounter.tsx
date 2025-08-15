import { useState } from 'react';

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
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        marginTop: 10,
      }}
    >
      <span style={{ width: 150 }}>{itemName}</span>
      <button onClick={handleAdd}>+1</button>
      <span>{count}</span>
      <button onClick={handleSubtract}>-1</button>
    </section>
  );
};
