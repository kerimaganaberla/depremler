import React from "react";
import { VisibilityContext } from "react-horizontal-scrolling-menu";
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
export default function LeftArrow() {
  const { isFirstItemVisible, scrollPrev } =
    React.useContext(VisibilityContext);

  return (
    <button disabled={isFirstItemVisible} onClick={() => scrollPrev()}>
      <ArrowCircleLeftIcon/>
    </button>
  );
}
