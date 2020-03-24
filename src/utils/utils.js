import {CanvasContext} from "../components/CanvasContext/CanvasContext.js";
import {CanvasElement} from "../components/CanvasElement/CanvasElement.js";
import {colors} from "../constants/constants.js";

export const Utils = {
  clearCanvas: () => {
    CanvasContext.fillStyle = colors.white;
    CanvasContext.fillRect(0, 0, CanvasElement.width, CanvasElement.height);
  },
  isPointInRect: (x, y, rect) => {
    return x > rect.x && x < rect.x + rect.width && y > rect.y && y < rect.y + rect.height;
  },
  macroCollision: (obj1, obj2) => {
    let XColl = false;
    let YColl = false;

    if ((obj1.x + obj1.width >= obj2.x) && (obj1.x <= obj2.x + obj2.width)) XColl = true;
    if ((obj1.y + obj1.height >= obj2.y) && (obj1.y <= obj2.y + obj2.height)) YColl = true;

    return XColl && YColl;
  },
};
