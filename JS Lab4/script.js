let cats = [
    {name: "Tomas", color: "Black", sex: "M", age: 1},
    {name: "Rodion", color: "Green", sex: "M", age: 4},
    {name: "Samanta", color: "Blue", sex: "F", age: 3},
    {name: "Katya", color: "Orange", sex: "F", age: 6}
]

function table() {
    if (document.getElementById('table').childNodes.length == 1) {
        alert("Таблица уже выведена");
        return;
    }
    let head = ['name', 'color', 'sex', 'age'];
    let table = document.createElement('table');
    let thead = document.createElement('thead');
    let tbody = document.createElement('tbody');
    let head_row = document.createElement('tr');
    for (let i = 0; i < 4; i++) {
        let th = document.createElement('th');
        th.innerHTML = head[i];
        head_row.appendChild(th);
    }
    thead.appendChild(head_row);
    table.appendChild(thead);
    for (let i = 0; i < 4; i++) {
        let row = document.createElement('tr');
        for (let j = 0; j < 4; j++) {
            let td = document.createElement('td');
            if (j == 0){
                td.innerHTML = cats[i].name
            }
            else if (j == 1){
                td.innerHTML = cats[i].color
            }
            else if (j == 2) {
                td.innerHTML = cats[i].sex
            }
            else if (j == 3) {
                td.innerHTML = cats[i].age
            }
            row.appendChild(td);
        }
        tbody.appendChild(row);
    }
    table.appendChild(tbody);
    document.getElementById('table').appendChild(table);
}

function array1() {
    let numbers = document.getElementById("arr").value;
    let arr, count = 1, result;
    const regex = /\-*\d+/gi;    
    arr = numbers.match(regex);
    result = multiplication(arr, count, arr[0]);
    document.getElementById("res1").innerHTML = result;
}

function multiplication(arr, count, result) {
    if (count != arr.length) {
        return result *= multiplication(arr, count + 1, arr[count]);
    }
    else return result;
}

function array2() {
    let numbers = document.getElementById("arr2").value;
    let arr, count = 0, result;
    const regex = /\-*\d+/gi;    
    arr = numbers.match(regex);
    arrNumb = arr.map(Number); 
    result = change(arrNumb, count);
    document.getElementById("res2").innerHTML = result;
}

function change(arr, count, result = []) {
    if (count != arr.length) {
        if (count == 0) {
            result.push(arr[count]);
        }
        else {
            result.push(result[count - 1] + arr[count]);
        }
        change(arr, count + 1, result);
    }
    return result;
}

function range() {
    let first = Number(document.getElementById("first").value);
    let second = Number(document.getElementById("second").value);
    let step = document.getElementById("step").value;
    let arr = [];
    if (step == 0 || step == "") {
        alert("Ведите шаг не пустой шаг и не равный нулю");
        return;
    }
    step = Number(step);
    if (first > second) {
        if (step > 0 || step > Math.abs(first - second)) {
            alert("В данном случае с таким шагом невозможно сделать последовательность");
            return;
        }
        else {
            while (first >= second) {
                arr.push(first);
                first += step;
                console.log(arr);
            }
            document.getElementById("sequence").innerHTML = "[" + arr + "]";
        }
    }
    else if (first < second) {
        if (step < 0 || step > Math.abs(first - second)) {
            alert("В данном случае с таким шагом невозможно сделать последовательность");
            return;
        }
        else {
            while (first <= second) {
                arr.push(first);
                first += step;
            }
            document.getElementById("sequence").innerHTML = "[" + arr + "]";
        }
    }
}

function seven() {
    let name = document.getElementById("name").value;
    let color = document.getElementById("color").value;
    let sex = document.getElementById("sex").value;
    let age = document.getElementById("age").value;
    parametrs = {name: name, color: color, sex: sex, age: age};
    let arr = [], index = 0, str = '';
    arr = findObject(index, parametrs);
    if (arr.length == 0) {
        alert("Не найдено результатов");
    }
    for (let i of arr) {
        str += "name: " + i.name + " color: " + i.color + " sex: " + i.sex + " age: " + i.age + "\n";
    }
    document.getElementById("filterArr").innerHTML = str;
}

function findObject(index, parametrs, arr = []) {
    if (index == cats.length) {
        return;
    }
    let flag = true;
    if (parametrs.name != "" && parametrs.name != cats[index].name) {
        flag = false;
    }
    if (parametrs.color != "" && parametrs.color != cats[index].color) {
        flag = false;
    }
    if (parametrs.sex != "" && parametrs.sex != cats[index].sex) {
       flag = false;
    }
    if (parametrs.age != "" && parametrs.age != cats[index].age) {
       flag = false;
    }
    if (flag) {
        arr.push(cats[index]);
    }
    findObject(index + 1, parametrs, arr);
    return arr;
}