import "./Button.css";

function Button({ val, color, handleClick }) {
  return (
    <>
      <div
        value={val}
        onClick={() => handleClick(val)}
        className="btn-wrapper"
        style={{ backgroundColor: color }}
      >
        {val}
      </div>
    </>
  );
}
export default Button;
