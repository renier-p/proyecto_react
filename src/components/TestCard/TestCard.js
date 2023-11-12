import "./TestCard.css";

function TestCard(props) {
  const { img, titulo } = props;

  return (
    <div>
      <img src={img} alt="" />
      <h1>{titulo}</h1>
    </div>
  );
}

export default TestCard;
