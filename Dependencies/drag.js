// Draggable DIV: https://stackoverflow.com/questions/24050738/javascript-how-to-dynamically-move-div-by-clicking-and-dragging

// for MOUSE
function mouseDrag (element) {
    var mousePosition;
    var offset = [0,0];
    var isDown = false;

    element.addEventListener('mousedown', function(e) {
        isDown = true;
        offset = [
            element.offsetLeft - e.clientX,
            element.offsetTop - e.clientY
        ];
    });
    
    document.addEventListener('mouseup', function() {
        isDown = false;
    });
    
    document.addEventListener('mousemove', function(event) {
        event.preventDefault();
        if (isDown) {
            mousePosition = {
                x : event.clientX,
                y : event.clientY
    
            };
            element.style.left = (mousePosition.x + offset[0]) + 'px';
            element.style.top  = (mousePosition.y + offset[1]) + 'px';
        }
    });
}

// for TOUCH
function touchDrag (element) {
    var touchPosition;
    var offset = [0,0];
    var isDown = false;

    element.addEventListener('touchstart', function(e) {
        e.preventDefault();
        isDown = true;
        offset = [
            element.offsetLeft - e.touches[0].pageX,
            element.offsetTop - e.touches[0].pageY
        ];
    });
    
    document.addEventListener('touchend', function(e) {
        isDown = false;
        element.style.left = (position.x + offset[0]) + 'px';
        element.style.top  = (position.y + offset[1]) + 'px';
    });
    
    document.addEventListener('touchmove', function(event) {
        event.preventDefault();
        if (isDown) {
                touchPosition = {
                    x : event.touches[0].pageX,
                    y : event.touches[0].pageY
                };
            element.style.left = (touchPosition.x + offset[0]) + 'px';
            element.style.top  = (touchPosition.y + offset[1]) + 'px';
        }
    });
}

export {
    mouseDrag, touchDrag
};