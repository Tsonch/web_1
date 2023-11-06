function shape() {
    let str = '';
    for(let i = 1; i <= 9; i++) {
        for(let j = 1; j <= i; j++) {
            if(j == 1 || j == i) {
                str += "#"
            }
            else if(j > 1 && i != 9) {
                str += "0";
            }
            else {
                str += "#";
            }
        }
        str += "\n";
    }
    document.getElementById("shape").value = str;
}

function table() {
    let endI, endJ;
    let checkbox = document.getElementById("5*6");
    if (checkbox.checked) {
        endI = 5;
        endJ = 6;
    }
    else {
        endI = 10;
        endJ = 10;
    }
    let str = '';
    for(let i = 1; i <= endI; i++) {
        for(let j = 1; j <= endJ; j++) {
            let temp = i * j;
            str += temp + ' ';
        }
        str += '\n';
    }
    document.getElementById("table").value = str;
    alert("Работа завершена");
}

function check() {
    let numbers = document.getElementById("arr").value;
    let arr, answer = "True";
    const regex = /\-*\d+/gi;    
    arr = numbers.match(regex);
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] % 2 != 0) {
            answer = "False";
            break;
        }
    }
    document.getElementById("Result").innerHTML = answer;
}

function trucks() {
    let number = document.getElementById("number").value;
    let result = 0;
    for(let i = 1; i <= number; i++) {
        result += 100/i;
    }
    document.getElementById("km").innerHTML = result.toFixed(2);
}

function checkingTwos() {
    let number = document.getElementById("two").value;
    let count = 0, j;
    for(let i = 2; i <= number; i++){
        j = i
        while(j >= 1) {
            if(Math.floor(j % 10) == 2) {
                count++;
            }
            j /= 10;
        }
    }
    document.getElementById("count").innerHTML = count;
}

function comparison() {
    let first_str = document.getElementById("first").value;
    let second_str = document.getElementById("second").value;
    if(first_str.length != second_str.length) {
        document.getElementById("res").innerHTML = "False";
    }
    else {
        let flag = true;
        let sort_1 = first_str.split('');
        let sort_2 = second_str.split('');
        sort_1.sort();
        sort_2.sort();
        for(let i = 0; i < first_str.length; i++) {
            if (sort_1[i] != sort_2[i]) {
                document.getElementById("res").innerHTML = "False";
                flag = false;
            }
        }
        if (flag) {
            document.getElementById("res").innerHTML = "True";
        }
    }
}

// let phrases = [
//     "Now or never!",
//     "Everyone has ones own path.", 
//     "Music is the soul of language.",
//     "Remember who you are.",
//     "It is better to bum out than to fade away.",
//     "Life is a journey.",
//     "Illusion is the first of all pleasures.",
//     "Enjoy every moment."
// ]

// let count = 0, rnd_phrase;

// function game() {
//     let n = document.getElementById("lvl").value;
//     document.getElementById("original").innerHTML = "";
//     count++;
//     let time = 20 * n;
//     printTimer(time);
//     let rnd = Math.floor(Math.random() * phrases.length);
//     rnd_phrase = phrases[rnd];
//     document.getElementById("original").innerHTML = rnd_phrase; 
// }

// function delay() {
//     return new Promise((resolve) => setTimeout(resolve, 1000));
// }

// function printTimer(from) {
//     let current_time = from;
//     async function Time() {
//         for(let i = current_time; i >= 0; i--) {
//             document.getElementById("time").innerHTML = i;
//             current_time--;
//             await delay();
//             if (current_time == 0) {
//                 document.getElementById("end").innerHTML = "You lose";
//                 document.getElementById("text").value = "";
//                 document.getElementById("lvl").value = "";
//                 document.getElementById("original").innerHTML = "";
//                 document.getElementById("time").innerHTML = "";
//             }
//         }
//     }
//     Time();
// }

// function verify() {
//     let n = document.getElementById("lvl").value;
//     let string = document.getElementById("text").value; 
//     if (string === rnd_phrase) {
//         alert("Строки совпали");
//         if (n > count) {
//             document.getElementById("text").value = "";
//             document.getElementById("time").innerHTML = "";
//             game();
//         }
//         else {
//             document.getElementById("end").innerHTML = "You win";
//             document.getElementById("text").value = "";
//             document.getElementById("lvl").value = "";
//             document.getElementById("original").innerHTML = "";
//             document.getElementById("time").innerHTML = "";
//         }
//     }
//     else {
//         document.getElementById("end").innerHTML = "You lose";
//     }
// }

let signs = ["+", "-", "*", "/"];
let result, hp;

function game() {
    let a, b, sign;
    a = Math.floor(Math.random() * 200 - 100);
    b = Math.floor(Math.random() * 200 - 100);
    sign = signs[Math.floor(Math.random() * 4)];
    document.getElementById("end").innerHTML = a + ' ' + sign + ' ' + b + "=";
    if (sign == "+") {
        result = a + b;
    }
    if (sign == "-"){
        result = a - b;
    }
    if (sign == "*") {
        result = a * b;
    }
    if (sign == "/") {
        result = (a / b).toFixed(2);
    }                       
    console.log(result); 
}

function verifi() {
    if (result != document.getElementById("lvl").value) {
        hp--;
        document.getElementById("lvl").value = "";
        document.getElementById("hp").innerHTML = "Количество жизней:" + hp;
        if (hp == 0) {
            document.getElementById("start").innerHTML = "Введите количество жизней ";
            document.getElementById("check").style.display = "none";
            document.getElementById("HP").style.display = "inline";
            document.getElementById("end").innerHTML = "";
            document.getElementById("hp").innerHTML = '';
            document.getElementById("lvl").value = "";
            alert("You lose");
        }
    }
    else {
        document.getElementById("lvl").value = "";
        game();
    }
}

function HP() {
    if (document.getElementById("lvl").value == null){
        alert("Введите количество жизней");
        return;
    }
    hp = document.getElementById("lvl").value;
    if (hp <= 0) {
        document.getElementById("lvl").value = "";
        alert("Количество жизней не может быть меньше или равным нулю");
        return;
    }
    document.getElementById("check").style.display = "inline";
    document.getElementById("HP").style.display = "none";
    document.getElementById("start").innerHTML = "Решение: ";
    document.getElementById("lvl").value = "";
    document.getElementById("hp").innerHTML = "Количество жизней:" + hp;
    game();
}