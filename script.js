var button = document.querySelector('.submit')
var input = document.querySelector('.input_text')
var name = document.querySelector('.name')
var desc = document.querySelector('.desc')
var temp = document.querySelector('.temp')
var hum = document.querySelector('.hum')
var win = document.querySelector('.win')
var APIKey = '7b8a9bb54b18ada4466416f59d222bd4';

button.addEventListener('click', function() {
fetch('https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&appid=7b8a9bb54b18ada4466416f59d222bd4')
.then(response => response.json())
.then (data => console.log(data))

})


