import "./Button.modules.css"
function Button({ children, handler, className }) {
  return (
    <button className={className || ""} onClick={handler}>
      {children}
    </button>
  );
}

export default Button;
