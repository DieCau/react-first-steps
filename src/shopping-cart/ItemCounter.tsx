interface ItemCounterProps {
  itemName: string;
  quantity: number;
}

export const ItemCounter = ({ itemName, quantity }: ItemCounterProps) => {
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
      <button
        onMouseEnter={() => {
          console.log(`Mouse Enter ${itemName}`);
        }}
        onClick={() => {
          console.log(`Click ${itemName}`);
        }}
      >
        +1
      </button>
      <span>{quantity}</span>
      <button>-1</button>
    </section>
  );
};
