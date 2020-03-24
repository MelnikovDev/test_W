import {CanvasContext} from "../CanvasContext/CanvasContext.js";
import {colors} from "../../constants/constants.js";

export var Rectangle = function (x, y, width, height, color) {
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
  this.color = color;
};

Rectangle.prototype = {
  draw: function () {
    CanvasContext.fillStyle = this.color;
    CanvasContext.fillRect(this.x, this.y, this.width, this.height);
  },
  stroke: function () {
    CanvasContext.strokeStyle = colors.blue;
    CanvasContext.lineWidth = 2;
    CanvasContext.strokeRect(this.x, this.y, this.width, this.height);
  }
};
