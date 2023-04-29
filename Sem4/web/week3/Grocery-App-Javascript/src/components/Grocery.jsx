const Grocery = (props) => {
  console.log(props);
  return (
    <div>
      <span>{props.name}</span>
      <div>
        <button> - </button>
        <span>{props.quantity}</span>
        <button> + </button>
      </div>
    </div>
  );
};

export default Grocery;
