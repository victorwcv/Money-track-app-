import "../styles/button.scss";

const Button = ({ name, icon, onClick, bg, bPad, color, bRad }) => {
  return (
    <button
      className="button"
      style={{
        backgroundColor: bg,
        padding: bPad,
        color: color,
        borderRadius: bRad,
      }}
      onClick={onClick}
    >
      {icon}
      {name}
    </button>
  );
};

export default Button;
