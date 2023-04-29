import Quantity from './Quantity';

// type Props = {
//   name: string;
//   quantity: number;
// };

interface Props {
  name: string;
  quantity: number;
}
const Grocery = (props: Props) => {
  console.log(props);
  return (
    <div className='grocery'>
      <span className='grocery-name'>{props.name}</span>
      <Quantity quantity={props.quantity} />
    </div>
  );
};

export default Grocery;
