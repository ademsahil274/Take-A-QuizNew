// Create variable references to initial HTML locations
var headerEl = document.getElementById("top");
var contentId = document.getElementById("content");

// This function will handle the basic creation of an element, one attribute, and text content
function createElement(element, type, value, text) {
    var tmp = document.createElement(element);
    tmp.setAttribute(type, value);
    tmp.textContent = text;
    return tmp;
};

//This function will create buttons for answer later
function createButton(idValue) {
    var tmp = document.createElement("button");
    tmp.setAttribute("type", "button");
    tmp.setAttribute("class", "answers");
    tmp.setAttribute("id", idValue);
    return tmp;
};
// This will create the span containing button text
function createSpan(idValue) {
    var tmp = document.createElement("span");
    tmp.setAttribute("data-answer", "option" + idValue);
    tmp.setAttribute("id", "option" + idValue);
    return tmp;
};

// This function will be used to append the Child elements
function appendChild(location, element) {
    var tmp = location.appendChild(element);
    return tmp;
};

// This is a click event that will start the quiz
function startQuiz(event) {
    event.preventDefault;
    // Data for quiz starts here
    // Questions that get pushed into questionList array
    questionList = [];


