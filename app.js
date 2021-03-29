  window.onload = function() {

    const margin = (window.innerHeight * 0.05) + "px";
    const margin2 = (window.innerHeight * 0.05)
    const windowHeight = window.innerHeight;
    const windowWidth = window.innerWidth;
    const tan30 = Math.tan((Math.PI)/6)
    const tan60 = Math.tan((Math.PI)/3)
    const root3 = Math.sqrt(3)
    const root33 = (Math.sqrt(3))/3

    const number12 = document.createElement("div")
    number12.innerText = "12";
    number12.style.position = 'absolute';
    number12.style.top = margin;
    number12.style.left = "50" + "%";
    number12.style.transform = "translateX(-50%)";
    document.body.appendChild(number12);

    const number6 = document.createElement("div")
    number6.innerText = "6";
    number6.style.position = 'absolute';
    number6.style.bottom = margin;
    number6.style.left = "50" + "%";
    number6.style.transform = "translateX(-50%)";
    document.body.appendChild(number6);

    const number9 = document.createElement("div")
    number9.innerText = "9";
    number9.style.position = 'absolute';
    number9.style.left = margin;
    number9.style.top = "50" + "%";
    number9.style.transform = "translateY(-50%)";
    document.body.appendChild(number9);

    const number3 = document.createElement("div")
    number3.innerText = "3";
    number3.style.position = 'absolute';
    number3.style.right = margin;
    number3.style.top = "50" + "%";
    number3.style.transform = "translateY(-50%)";
    document.body.appendChild(number3);

    const number1 = document.createElement("div")
    number1.innerText = "1";
    number1.style.position = 'absolute';
    
    if ((((windowHeight/2)-margin2)/ (((windowWidth/2)-margin2)) > root3)) {
    number1.style.top = (((0.5 * windowHeight) - ((0.5 * windowWidth) - margin2) * tan60)) + "px";
    number1.style.right = margin;
    // number1.style.color = "#0000ff";
    document.body.appendChild(number1);
    } else {
    number1.style.top = margin;
    // number1.style.color = "#ff0000";
    number1.style.right = ((0.5 * windowWidth) - (((0.5 * windowHeight) - margin2) * tan30)) + "px";
    document.body.appendChild(number1);
    }
   

    const number2 = document.createElement("div")
    number2.innerText = "2";
    number2.style.position = 'absolute';

    if ((((windowHeight/2)-margin2)/ (((windowWidth/2)-margin2)) > root33)) {
    number2.style.top = (((0.5 * windowHeight) - ((0.5 * windowWidth) - margin2) * tan30)) + "px";
    number2.style.right = margin;
    document.body.appendChild(number2);
    } else {
    number2.style.top = margin;
    number2.style.right = ((0.5 * windowWidth) - (((0.5 * windowHeight) - margin2) * tan60)) + "px";
    document.body.appendChild(number2);
    }

    
    const number4 = document.createElement("div")
    number4.innerText = "4";
    number4.style.position = 'absolute';

    if ((((windowHeight/2)-margin2)/ (((windowWidth/2)-margin2)) > root33)) {
    number4.style.bottom = (((0.5 * windowHeight) - ((0.5 * windowWidth) - margin2) * tan30)) + "px";
    number4.style.right = margin;
    document.body.appendChild(number4);
    } else {
    number4.style.bottom = margin;
    number4.style.right = ((0.5 * windowWidth) - (((0.5 * windowHeight) - margin2) * tan60)) + "px";
    document.body.appendChild(number4);
    }

    const number5 = document.createElement("div")
    number5.innerText = "5";
    number5.style.position = 'absolute';
    
    if ((((windowHeight/2)-margin2)/ (((windowWidth/2)-margin2)) > root3)) {
    number5.style.bottom = (((0.5 * windowHeight) - ((0.5 * windowWidth) - margin2) * tan60)) + "px";
    number5.style.right = margin;
    document.body.appendChild(number5);
    } else {
    number5.style.bottom = margin;
    number5.style.right = ((0.5 * windowWidth) - (((0.5 * windowHeight) - margin2) * tan30)) + "px";
    document.body.appendChild(number5);
    }


  const number7 = document.createElement("div")
    number7.innerText = "7";
    number7.style.position = 'absolute';
    
    if ((((windowHeight/2)-margin2)/ (((windowWidth/2)-margin2)) > root3)) {
    number7.style.bottom = (((0.5 * windowHeight) - ((0.5 * windowWidth) - margin2) * tan60)) + "px";
    number7.style.left = margin;
    document.body.appendChild(number7);
    } else {
    number7.style.bottom = margin;
    number7.style.left = ((0.5 * windowWidth) - (((0.5 * windowHeight) - margin2) * tan30)) + "px";
    document.body.appendChild(number7);
    }
   

    const number8 = document.createElement("div")
    number8.innerText = "8";
    number8.style.position = 'absolute';

    if ((((windowHeight/2)-margin2)/ (((windowWidth/2)-margin2)) > root33)) {
    number8.style.bottom = (((0.5 * windowHeight) - ((0.5 * windowWidth) - margin2) * tan30)) + "px";
    number8.style.left = margin;
    document.body.appendChild(number8);
    } else {
    number8.style.bottom = margin;
    number8.style.left = ((0.5 * windowWidth) - (((0.5 * windowHeight) - margin2) * tan60)) + "px";
    document.body.appendChild(number8);
    }

    
    const number10 = document.createElement("div")
    number10.innerText = "10";
    number10.style.position = 'absolute';

    if ((((windowHeight/2)-margin2)/ (((windowWidth/2)-margin2)) > root33)) {
    number10.style.top = (((0.5 * windowHeight) - ((0.5 * windowWidth) - margin2) * tan30)) + "px";
    number10.style.left = margin;
    number10.style.transform = `translateX(-25%)`
    document.body.appendChild(number10);
    } else {
    number10.style.top = margin;
    number10.style.left = ((0.5 * windowWidth) - (((0.5 * windowHeight) - margin2) * tan60)) + "px";
    document.body.appendChild(number10);
    
    }

    const number11 = document.createElement("div")
    number11.innerText = "11";
    number11.style.position = 'absolute';
    
    if ((((windowHeight/2)-margin2)/ (((windowWidth/2)-margin2)) > root3)) {
    number11.style.top = (((0.5 * windowHeight) - ((0.5 * windowWidth) - margin2) * tan60)) + "px";
    number11.style.left = margin;
    document.body.appendChild(number11);
    } else {
    number11.style.top = margin;
    number11.style.left = ((0.5 * windowWidth) - (((0.5 * windowHeight) - margin2) * tan30)) + "px";
    document.body.appendChild(number11);

    }
}



var myVar = setInterval(myTimer, 1000);

function myTimer() {
const now = new Date();
  const hour = now.getHours() * 30 + Math.floor(now.getMinutes() / 12) * 6;
  document.body.style.backgroundImage = `conic-gradient(from ${hour}deg, #c4c4c4, #fff)`;

 

function formatAMPM(date) {
  var hours = date.getHours();
  var ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  var strTime = ampm;
  return strTime;
}

const line = document.querySelector(".day-indicator")
line.innerHTML = formatAMPM(new Date)
// line.style.transform = `translate(-50%, -50%)`


if (line.innerHTML = 'AM')
{ line.style.letterSpacing = "-0.2" + "rem";
}



}


function myStopFunction() {
  clearInterval(myVar);
}

