import "./styles.css";

const MenuLinksItem = ({
  children,
  title,
  icon,
  className = "",
  active,
  ...otherProps
}) => (
  <div
    className={`menu__links__item ${className} ${active ? "link-active" : ""}`}
    {...otherProps}
  >
    {icon}
    <span>{title}</span>
    {children}
  </div>
);

export default MenuLinksItem;
