function checkText() {
    let text = document.getElementById("text").value;
    let str = '';
    if (text == '') {
        str = "Вы ничего не ввели";
    }
    else {
        str = "Вы ввели " + text;
    }        
    alert(str);
}

function blocking() {
    let is_blocked = document.getElementById("text").readOnly;
    if (is_blocked == true) {
        document.getElementById("text").readOnly = false;
        document.getElementById("block").innerHTML = "Разблокировано";
    }
    else {
        document.getElementById("text").readOnly = true;
        document.getElementById("block").innerHTML = "Заблокировано";
    }
}

function invisible() {
    let input = document.getElementById("text");
    if (input.style.display == '') {
        input.style.display = 'none';
        document.getElementById("invis").innerHTML = "Показать поле";
    }
    else {
        input.style.display = '';
        document.getElementById("invis").innerHTML = "Скрыть поле";
    }
}

let square = document.getElementById("square");

square.onmouseover = function () {
    square.style.background = "green";
}

square.onmouseout = function () {
    square.style.background = "red";
}

let figures = document.querySelectorAll(".circle");
figures.forEach(x => {
    x.style.background = "red";
})

document.addEventListener("click", function (e) {
    let id = e.target.id;
    let shape = document.getElementById(id);
    let this_class = e.target.className;
    if (this_class == "circle") {
        if (shape.style.background == "red") {
            figures.forEach(x => {
                x.style.background = "red";
            })
            shape.style.background = "green";
        }
        else {
            shape.style.background = "red";
        }
    }
})