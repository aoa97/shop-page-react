import { useEffect, useRef } from "react";
import { IconBread, IconCircle, IconHome } from "../SVG/IconSvg";
import MenuLinksItem from "../MenuLinksItem";
import "./styles.css";

const MenuToggle = ({ children, title, icon, badge, active }) => {
  const dashRef = useRef();
  const breadIconRef = useRef();

  useEffect(() => {
    if (active) {
      dashRef.current.classList.toggle("show");
    }
  }, [active]);

  const handleToggle = () => {
    dashRef.current.classList.toggle("show");
    breadIconRef.current.classList.toggle("toggle-icon-rotate");
  };

  return (
    <>
      <MenuLinksItem
        icon={icon}
        title={title}
        onClick={handleToggle}
        className={`dash-toggle ${active ? "active-toggle" : ""}`}
      >
        {badge ? (
          <div className="badge">{badge}</div>
        ) : (
          <div className="badge" style={{ opacity: 0 }} />
        )}
        <div ref={breadIconRef}>
          <IconBread />
        </div>
      </MenuLinksItem>

      {/* Toggle */}
      <div ref={dashRef} className="menu__links__section toggle">
        {children}
      </div>
    </>
  );
};

export default MenuToggle;
