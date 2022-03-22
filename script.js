import {
    mouseDrag, touchDrag
} from './Dependencies/drag.js';

const element = document.getElementById("potato");
console.log(element);
mouseDrag(element);

var c = document.getElementById("canvas");
var ctx = c.getContext("2d");
ctx.moveTo(0, 0);
ctx.lineTo(50, 100);
ctx.stroke();