import {Utils} from "../../utils/utils.js";
import {rectangles} from "../SpecifyCanvas/SpecifyCanvas.js";
import {colors} from "../../constants/constants.js";

const body = document.body;
export let selectedRectangle = null;
export let isRectangleSelected = false;
const offset = {};
export const mouse = {
  x: 0,
  y: 0,
};

const onMouseDown = (event) => {
  offset.x = event.clientX - mouse.x;
  offset.y = event.clientY - mouse.y;

  if (!isRectangleSelected) {
    for (let i in rectangles) {
      if (Utils.isPointInRect(mouse.x, mouse.y, rectangles[i])) {
        selectedRectangle = rectangles[i];
        isRectangleSelected = true;
      }
    }
  }

  body.addEventListener("mousemove", onMouseMove);
  body.addEventListener("mouseup", onMouseUp);
};

const onMouseUp = () => {
  selectedRectangle = null;
  isRectangleSelected = false;

  body.removeEventListener("mouseup", onMouseUp);
};

const onMouseMove = (event) => {
  mouse.x = event.clientX;
  mouse.y = event.clientY;

  Utils.clearCanvas();

  for (let i in rectangles) {
    rectangles[i].draw();

    if (Utils.isPointInRect(mouse.x, mouse.y, rectangles[i])) {
      rectangles[i].stroke();
    }
  }

  if (isRectangleSelected) {
    selectedRectangle.x = mouse.x - selectedRectangle.width / 2;
    selectedRectangle.y = mouse.y - selectedRectangle.height / 2;

    for (let i in rectangles) {
      if (Utils.macroCollision(selectedRectangle, rectangles[i])) {
        rectangles[i].color = colors.red;
        selectedRectangle.color = colors.red;
      } else {
        rectangles[i].color = colors.gray;
      }
    }
  }
};

export const enableDragAndDrop = () => {
  body.addEventListener("mousedown", onMouseDown);
  body.addEventListener("mousemove", onMouseMove);
};
