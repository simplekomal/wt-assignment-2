console.log("page is load ")
var take_input_key = document.getElementById("take_input_key")
var take_input = document.getElementById("take_input")
var save_value_button = document.getElementById("save_value_button")
var localStorageValue = document.getElementById("localStorageValue")
var rdLS_button = document.getElementById("rdLS_button")
var del_data_button = document.getElementById("del_data_button")
save_value_button.onclick = function () {
    localStorage.setItem(take_input_key.value, take_input.value);
}
rdLS_button.onclick = function () {
    localStorageValue.textContent = localStorage.getItem(take_input_key.value);
}
del_data_button.onclick = function () {
    localStorage.removeItem(take_input_key.value);
}

