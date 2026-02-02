function IconSwitch({ icon, onSwitch }) {
  return (
    <span
      className="material-icons"
      style={{ cursor: "pointer" }}
      onClick={onSwitch}
      aria-label="switch view"
      title="Switch view"
    >
      {icon}
    </span>
  );
}

export default IconSwitch;