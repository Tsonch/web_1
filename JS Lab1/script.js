function getCosX() {
    let x = document.getElementById("number");
    let result = Math.cos(x.value);
    document.getElementById("result").innerHTML = result;
}

function replaceText() {
    let str_ = "произошла замена";
    let text = document.getElementById("text");
    text.innerHTML = str_;
}

function getCarProperties() {
    let color = document.getElementById("color");
    let brand = document.getElementById("brand");
    let model = document.getElementById("model");
    color.innerHTML += "black";
    brand.innerHTML += "Toyota";
    model.innerHTML += "ae86";
}