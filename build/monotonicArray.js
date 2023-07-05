"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.monotonicArray2 = exports.monotonicArray = void 0;
function monotonicArray(array) {
    let direction = 0;
    for (let i = 0; i < array.length; i++) {
        const firstNum = array[i];
        const secondNum = array[i + 1];
        if (firstNum !== secondNum) {
            if (direction === 0) {
                direction = secondNum - firstNum;
            }
            if (direction > 0 && firstNum > secondNum)
                return false;
            if (direction < 0 && firstNum < secondNum)
                return false;
        }
    }
    return true;
}
exports.monotonicArray = monotonicArray;
function monotonicArray2(array) {
    const firstNum = array[0];
    const secondNum = array[1];
    let direction = "none";
    if (firstNum < secondNum) {
        direction = "up";
    }
    else if (firstNum > secondNum) {
        direction = "down";
    }
    else {
        direction = "none";
    }
    if (direction === "up") {
        for (let i = 0; i < array.length - 1; i++) {
            if (array[i] > array[i + 1])
                return false;
        }
    }
    if (direction === "down") {
        for (let i = 2; i < array.length; i++) {
            if (array[i] < array[i + 1])
                return false;
        }
    }
    return true;
}
exports.monotonicArray2 = monotonicArray2;
