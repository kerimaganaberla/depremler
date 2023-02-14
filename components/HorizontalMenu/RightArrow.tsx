import React from "react";
import { VisibilityContext } from "react-horizontal-scrolling-menu";
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
export default function RightArrow() {
    const { isLastItemVisible, scrollNext } = React.useContext(VisibilityContext);
  
    return (
      <button disabled={isLastItemVisible} onClick={() => scrollNext()}>
      <ArrowCircleRightIcon/>
      </button>
    );
  }