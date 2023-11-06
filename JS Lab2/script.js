function greeting() {
    let age = document.getElementById("age");
    let name = document.getElementById("name");
    let surname = document.getElementById("surname");
    let patronymic = document.getElementById("patronymic");
    if (age.value <= 0) {
        alert("Введите нормальный возраст");
    }
    else if (age.value < 7) {
        document.getElementById("greeting").innerHTML = "Привет, " + name.value;
    }
    else if (age.value > 7 && age.value < 18) {
        document.getElementById("greeting").innerHTML = "Здравствуй, " + surname.value;
    }
    else if (age.value > 18) {
        document.getElementById("greeting").innerHTML = "Здравствуйте, " + name.value + " " + patronymic.value;
    }
}

function getRemain() {
    if(number_2 == 0) {
        alert("На ноль делить нельзя");
    }
    else {
        let number_1 = document.getElementById("number_1");
        let number_2 = document.getElementById("number_2");
        let result = number_1.value % number_2.value;
        document.getElementById("result").innerHTML = result;
    }
}

function getWeekDay() {
    let number = document.getElementById("day");
    let days = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"];
    if (number.value < 1 || number.value > 7) {
        alert("Такого дня недели нет");
    }
    else {
        document.getElementById("WeekDay").innerHTML = days[number.value - 1];
    }
}

let position = [
    {
        x: 30,
        y: 40,
        z: 50
    },
    {
        x: 30,
        y: 50,
        z: 40
    },
    {
        x: 40,
        y: 30,
        z: 50
    },
    {
        x: 40,
        y: 50,
        z: 30
    },
    {
        x: 50,
        y: 40,
        z: 30
    },
    {
        x: 50,
        y: 30,
        z: 40
    }
]

function getNumberOfWagons() {
    let width = document.getElementById("width");
    let height = document.getElementById("height");
    let length = document.getElementById("length");
    let orders = document.getElementById("order");
    let arr = [6];
    let flag = true;
    for(let i = 0; i < 6; i++) {
        let count_order = 0;
        count_order += getOrdersInWagon(width.value, position[i].x);
        // console.log(getOrdersInWagon(width.value, position[i].x));
        count_order *= getOrdersInWagon(height.value, position[i].y);
        // console.log(getOrdersInWagon(height.value, position[i].y));
        count_order *= getOrdersInWagon(length.value, position[i].z);
        // console.log(getOrdersInWagon(length.value, position[i].z));
        // console.log(count_order);
        if(count_order == 0) {
            arr[i] = 0;
        }
        else {
            arr[i] =  Math.ceil(orders.value / count_order);
        }
    }
    // console.log(arr);
    let min = arr[0];
    for (let i = 1; i < 6; i++) {
        if (min > arr[i] && arr[i] != 0) {
            min = arr[i];
        }
    }
    if (arr[0] == 0) {
        for (let i = 1; i < 6; i++) {
            if(arr[i] != 0) {
                flag = false;
                break;
            }
        }
        if (flag) {
            alert("Введите нормальные размеры вагона");
        }
    }
    document.getElementById("wagons").innerHTML = min;
}


function getOrdersInWagon(size_wagon, size_box) {
    let count = 0;
    while(size_wagon >= size_box) {
        size_wagon -= size_box;
        if (size_wagon > 5) {
            size_wagon -= 5;
        }
        count++;
    }
    return count;
}