const submittedForm = document.querySelector('form')
// console.log(submittedForm);

submittedForm.addEventListener('submit', function(event){
    event.preventDefault();
    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const result = document.querySelector('#result')
    if (height == '' || height <= 0 || isNaN(height)) {
        result.innerHTML = `Enter valid height ${height}`
        console.log(height);
    }else if (weight == '' || weight <= 0 || isNaN(weight)) {
        result.innerHTML = `Enter valid weight ${weight}`
        console.log(weight);
    }else{
        const val = (weight/((height*height)/10000)).toFixed(2);    
        if (val < 18.5) {
            result.innerHTML = `Underweight : ${val}`
        } else if( val >= 18.5 && val < 25){
            result.innerHTML = `Healthy weight : ${val}`            
        } else if( val >= 25 && val < 30){
            result.innerHTML = `Overweight : ${val}`
        } else if( val >= 30 && val < 40){
            result.innerHTML = `Obese : ${val}`
        }else{
            result.innerHTML = `Severly obese : ${val}`
        }
    }
})