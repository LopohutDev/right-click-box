import React, { useState } from "react";
import { useStylesFromThemeFunction } from "./RightClickComponent";

const RightClickComponent: React.FC = () => {
  const classes = useStylesFromThemeFunction();
  const node = React.useRef<HTMLTableRowElement>(null);
  const [click, setClick] = useState(false);
  const [positionX, setPositionX] = useState(0);
  const [positionY, setPositionY] = useState(0);

  let exitTimeout: NodeJS.Timeout;
  return (
    <div
      className={classes.container}
      onContextMenu={(e: React.MouseEvent) => {
        e.preventDefault();
        if (exitTimeout) {
          clearTimeout(exitTimeout);
        }
        setClick(true);
        setPositionY(e.clientY);
        setPositionX(e.clientX);
      }}
      ref={node}
    >
      {click && (
        <div
          className={classes.boxContainer}
          style={{ top: positionY, left: positionX }}
          onMouseLeave={() => {
            exitTimeout = setTimeout(() => {
              setClick(false);
            }, 500);
          }}
        >
          Box
        </div>
      )}
    </div>
  );
};

export default RightClickComponent;
