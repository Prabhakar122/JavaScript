function colorGenerator() {
    const values = "0123456789ABCDEF";
    let HexCode = "#";
    for (i = 1; i <= 6; i++) {
      let randNum = Math.floor(Math.random() * 16);
      HexCode += values[randNum];
    }
    return HexCode;
  }
  
  let judge;
  function generate() {
    if (!judge) {
      judge = setInterval(changeBG, 1000);
    }
  }
  
  const stopper = function () {
    clearInterval(judge);
    judge = null;
  };
  
  function changeBG() {
    document.querySelector("body").style.backgroundColor = colorGenerator();
  }
  
  document.querySelector("#start").addEventListener("click", function () {
    generate();
  });
  
  document.querySelector("#stop").addEventListener("click", function () {
    stopper();
  });
  