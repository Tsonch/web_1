//1

function pushText() {
    document.getElementById("text").value = "Просто текст";
}

//2

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

//3

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

//4

function showText() {
    let text = document.getElementById("text");
    let button = document.getElementById("show");
    if (text.type == "text") {
        text.setAttribute('type', 'password');
        button.innerHTML = "Скрыто"; 
        return;
    }
    text.setAttribute('type', 'text');
    button.innerHTML = "Доступно";
}

//5

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

//6

let square = document.getElementById("square");

square.onmouseover = function () {
    square.style.background = "green";
}

square.onmouseout = function () {
    square.style.background = "red";
}

//7

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

//8

let cities = [
    "Белоярский",
    "Когалым",
    "Лангепас",
    "Лянтор",
    "Мегион",
    "Нефтеюганск",
    "Нижневартовск",
    "Нягань",
    "Покачи",
    "Пыть-Ях",
    "Радужный",
    "Советский",
    "Сургут",
    "Урай",
    "Ханты-Мансийск",
    "Югорск"
]

document.getElementById("text2").addEventListener('input', function () {
    document.getElementById("answer").innerHTML = '';
    let value = document.getElementById("text2").value;
    if (value == '') {
        return;
    }
    let str = '';
    for (let i = 0; i < cities.length; i++) {
        if (cities[i].toUpperCase().includes(value.toUpperCase())) {
            str += cities[i] + "\n";
        }
    }
    document.getElementById("answer").innerHTML = str;
})

//9

const trail_max = 10;
let trail_arr = [];

for (let i = 0; i < trail_max; i++) {
    let div = document.createElement('div');
    div.classList.add('follow-cursor');
    document.body.appendChild(div);
}

let trail = document.getElementsByClassName('follow-cursor');

document.addEventListener('mousemove', function (e) {
    const x = e.pageX, y = e.pageY;
    if (trail_arr.length == trail_max) {
        trail_arr = [];
    }
    trail_arr.push({x, y});
    for(let i = 0; i < trail_arr.length; i++) {
        trail[i].style.top = trail_arr[i].y + 'px';
        trail[i].style.left = trail_arr[i].x + 'px';
    }
})

let el = document.getElementById("element");

el.addEventListener('mousedown', function (e) {
    let shiftX = e.clientX - el.getBoundingClientRect().left;
    let shiftY = e.clientY - el.getBoundingClientRect().top;
    el.style.position = 'absolute';
    el.style.zIndex = '999';
    
    function moveAt(pageX, pageY) {
        el.style.left = pageX - shiftX + 'px'; 
        el.style.top = pageY - shiftY + 'px';
    }
    function onMouseMove(e) {
        moveAt(e.pageX, e.pageY);
    }
    document.addEventListener('mousemove', onMouseMove);
    el.addEventListener('mouseup', function () {
        document.removeEventListener('mousemove', onMouseMove);
    })
    el.ondragstart = function() {
        return false;
    };
})

let canvas = document.getElementById('game');
let ctx = canvas.getContext('2d');

let c_width = canvas.width, c_height = canvas.height;
let tile_size = 20, score, dir, game;

let snake = [];
let apple;

document.addEventListener('keydown', function (e) {
    if (e.code == 'KeyD' && dir != "left") dir = "right";
    else if (e.code == 'KeyA' && dir != "right") dir = "left";
    else if (e.code == 'KeyW' && dir != "bottom") dir = "top";
    else if (e.code == 'KeyS' && dir != "top") dir = "bottom";
})

function drawSnake() {
    for (let i = 0; i < snake.length; i++) {
        if (i == 0) ctx.fillStyle = "green";
        else ctx.fillStyle = "LimeGreen";
        ctx.strokeRect(snake[i].x * tile_size, snake[i].y * tile_size, tile_size, tile_size);
        ctx.fillRect(snake[i].x * tile_size, snake[i].y * tile_size, tile_size, tile_size);
    } 
}

function drawApple() {
    ctx.fillStyle = "red";
    ctx.strokeRect(apple.x * tile_size, apple.y * tile_size, tile_size, tile_size);
    ctx.fillRect(apple.x * tile_size, apple.y * tile_size, tile_size, tile_size);
}

function end(newHead) {
    for (let i = 0; i < snake.length; i++) {
        if (newHead.x == snake[i].x && newHead.y == snake[i].y) {
            document.getElementById("start").style.display = "inline";
            snake = [];
            ctx.clearRect(0, 0, c_width, c_height);
            clearInterval(game);
        }
    }
}

function drawGame() {
    document.getElementById("score").innerHTML = "Результат: " + score;
    ctx.clearRect(0, 0, c_width, c_height);
    drawSnake();
    drawApple();
    let headX = snake[0].x;
    let headY = snake[0].y;
    if (headX == apple.x && headY == apple.y) {
        score++;
        apple = {
            x: Math.floor(Math.random() * (c_width / tile_size - 1)),
            y: Math.floor(Math.random() * (c_height / tile_size - 1))
        };
    }
    else snake.pop();
    if (dir == "right") headX++;
    else if (dir == "left") headX--;
    else if (dir == "top")  headY--;
    else if (dir == "bottom") headY++;
    if (headX < 0) headX = c_width / tile_size - 1;
    else if (headX > c_width / tile_size - 1) headX = 0;
    else if (headY < 0) headY = c_height / tile_size - 1;
    else if (headY > c_height / tile_size - 1) headY = 0;
    let newHead = {x:headX, y:headY};
    end(newHead);
    snake.unshift(newHead);
}

function start() {
    document.getElementById("start").style.display = "none";
    snake = [
        {x: 2, y: 0},
        {x: 1, y: 0},
        {x: 0, y: 0}
    ]
    apple = {
        x: Math.floor(Math.random() * (c_width / tile_size)),
        y: Math.floor(Math.random() * (c_height / tile_size))
    }
    dir = "right";
    score = 0;
    game = setInterval(drawGame, 80);
}