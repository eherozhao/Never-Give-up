document.getElementById("demo").onmouseover = function() {mouseOver()};
document.getElementById("demo").onmouseout = function() {mouseOut()};

function mouseOver() {
    document.getElementById("demo").innerHTML = "The same pronunciation as 'How'.";
}

function mouseOut() {
    document.getElementById("demo").innerHTML = "Hello! My name is Hao.";
}