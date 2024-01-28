import "../../style/css/btn.css";

function Btn({ name, className, onClick }) {
  return (
    <div className="btnbox">
      <button id="btn" className={className} onClick={onClick}>
        {" "}
        {name}{" "}
      </button>
    </div>
  );
}
export default Btn;
