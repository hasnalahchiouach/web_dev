const area = document.body;

const circle = document.querySelector('.circle');

function event_click(e){

    circle.style.left = window.innerWidth-e.clientX + 'px';
    circle.style.top = window.innerHeight-e.clientY + 'px';

}

area.addEventListener("mousemove",event_click);
















































/*const AREA = document.body;
const CIRCLE = document.querySelector('.circle');
onst AREA = document.body;
const CIRCLE = document.querySelector('.circle');


var windowWidth = window.innerWidth;
var windowHeight = window.innerHeight;

function mouseCoordinates(e) {
    // Capture the event object (mouse movement).
    // Get X coordinate (distance from left viewport edge) via clientX property.
    // Take total window width, subtract current coordinate and width of circle.
    // Do the same for Y coordinate (distance from top viewport edge).
    var horizontalPosition = windowWidth - e.clientX;
    var verticalPosition= windowHeight - e.clientY;

    // Set horizontal and vertical position.
    CIRCLE.style.left = horizontalPosition + 'px';
    CIRCLE.style.top = verticalPosition + 'px';
}

function changeColorOnTouch() {
    CIRCLE.style.backgroundColor = "green";
    CIRCLE.style.borderColor = "green";
}

// When the mouse moves, run the mouseCoordinates function.
CIRCLE.addEventListener('mousemove', mouseCoordinates, false);

// When the mouse touches the circle, run the changeColorOnTouch function.
CIRCLE.addEventListener('mouseenter', changeColorOnTouch, false);

// When the mouse leaves the circle, remove inline styles with an anonymous function.
CIRCLE.addEventListener('mouseleave', function(){CIRCLE.removeAttribute("style");}, false);
*/