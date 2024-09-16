const clock = document.getElementById('clock')
// const clock = document.querySelector('#clock')
// console.log(clock);

// setInterval runs the code continuously
// setInterval(function(){}, value in ms)
setInterval(function(){
    const time = new Date();
    // console.log(time);
    // clock.innerHTML = time.toLocaleTimeString()
    clock.innerHTML = `<span>${time.toLocaleTimeString()}</span>`
}, 1000)