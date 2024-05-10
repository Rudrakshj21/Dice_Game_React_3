import "./Button.modules.css";
function Button({ children, handler, className}) {
  return (
    <button
      className={className || ""}
      onClick={(event) => handler(event)}
      value={children}
    >
      {children}
    </button>
  );
}

export default Button;
