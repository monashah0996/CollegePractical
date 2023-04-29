import Quantity from './Quantity';
type Props = {
  name: string;
  quantity: number;
  id: string;
  onDelete: (id: string) => void;
  onQuantityChange: (id: string, data: number) => void;
};

// interface Props {
//   name: string;
//   quantity: number;
// }

const Grocery = (props: Props) => {
  console.log(props);
  return (
    <div className='grocery'>
      <span className='grocery-name'>
        <button
          className='remove-grocery'
          onClick={() => props.onDelete(props.id)}
        >
          {' '}
          X{' '}
        </button>
        {props.name}
      </span>
      <Quantity
        quantity={props.quantity}
        id={props.id}
        onQuantityChange={props.onQuantityChange}
      />
    </div>
  );
};

export default Grocery;
