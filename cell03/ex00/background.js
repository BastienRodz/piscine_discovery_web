function randomInteger(max) {
    return Math.floor(Math.random()*(max + 1));
}

function randomRgbColor() {
    let r = randomInteger(255);
    let g = randomInteger(255);
    let b = randomInteger(255);
    return [r,g,b];
}

function randomHexColor() {
    let [r,g,b] =randomRgbColor();

    let hr = r.toString(16).padStart(2, '0');
    let hg = g.toString(16).padStart(2, '0');
    let hb = b.toString(16).padStart(2, '0');

    return "#" + hr + hg + hb;
}

size = 3;

function makeBtnBigger() {
    var btn = document.getElementById("the-button");
    var height = btn.offsetHeight;
    var width = btn.offsetWidth;

    var newHeight;
    var newWidth;

    newWidth = width + 10;
    newHeight = height + 10;
    size += 0.1;
    btn.style.width = newWidth + 'px';
    btn.style.height = newHeight + 'px';
    btn.style.fontSize = size + 'rem'
}

function changeColor() {
    let hex = randomHexColor();
    makeBtnBigger();
    document.body.style.background = hex;
}


