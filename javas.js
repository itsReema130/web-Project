// moving the cookie onclick
function myMove() {
    var elem = document.getElementById("cookies");
    var pos = 0;
    var id = setInterval(frame, 1);

    function frame() {
        if (pos == 2400) {
            clearInterval(id);
        } else {
            pos++;
            elem.style.top = pos + 'px';
            elem.style.bottom = pos + 'px';
        }
    }
}