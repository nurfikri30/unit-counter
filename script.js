const inputConvert = document.getElementById('input-convert');
const unitLength = document.querySelector('.unit-length');
const unitVolume = document.querySelector('.unit-volume');
const unitMass = document.querySelector('.unit-mass');
const convertBtn = document.querySelector('.convert-btn');

const toMeter = 3.281
const toGallon = 0.264
const toKilos = 2.204

convertBtn.addEventListener('click', function(){
    let convertValue = 0
    if (inputConvert.value){
    convertValue = parseFloat(inputConvert.value)
    getConvert(convertValue);
    }
    else{
        alert("Input can't empty");
    }
})

function getConvert(value){
    unitLength.innerHTML = `${value} meters = ${(value * toMeter).toFixed(3)} feet | ${value} feet = ${(value / toMeter).toFixed(3)} meters`

    unitVolume.innerHTML = `${value} liters = ${(value * toGallon).toFixed(3)} gallons | ${value} gallons = ${(value / toGallon).toFixed(3)} liters`

    unitMass.innerHTML = `${value} kilos = ${(value * toKilos).toFixed(3)} pounds | ${value} pounds = ${(value / toKilos).toFixed(3)} kilos`
}