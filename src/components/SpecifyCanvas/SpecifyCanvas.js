import {CanvasElement} from "../CanvasElement/CanvasElement.js";
import {Rectangle} from "../Rectangle/Rectangle.js";
import {colors} from "../../constants/constants.js";

const setCanvasElementSize = () => {
  CanvasElement.width = window.innerWidth;
  CanvasElement.height = window.innerHeight;
};

export const rectangles = [];

export const SpecifyCanvas = () => {
  setCanvasElementSize();
  window.onresize = () => setCanvasElementSize();

  for (let i = 0; i < 5; ++i) {
    rectangles.push(new Rectangle(10 + i * (100 + 20), 120, 100, 100, colors.gray))
  }

};
