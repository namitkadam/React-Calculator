import "./Input.css";

function Input({ value }) {
  return (
    <>
      <div type="text" className="input">
        {value}
      </div>
    </>
  );
}

export default Input;
