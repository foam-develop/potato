
  import {
    mouseDrag, touchDrag
} from './Dependencies/drag.js';

const element = document.getElementById("potato");
console.log(element);
mouseDrag(element);
touchDrag(element);

var c = document.getElementById("canvas");
var ctx = c.getContext("2d");
ctx.moveTo(250, 60);
ctx.lineTo(300, 250);
ctx.stroke();
