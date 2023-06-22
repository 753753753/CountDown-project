const enddate = "11 May 2024 8:00 AM"

document.getElementById("end-date").innerText = enddate;

const inputs = document.querySelectorAll("input");

function clock(){
    const end = new Date(enddate);
    const now = new Date();
    console.log(now);
    const diff = (end - now) / 1000;
     
    if(diff< 0){
      document.getElementById("card-1").style.backgroundColor = "red";
      document.getElementById("card-2").style.backgroundColor = "red";
      document.getElementById("card-3").style.backgroundColor = "red";
      document.getElementById("card-4").style.backgroundColor = "red";
      document.getElementById("card-1").style.color = "white";
      document.getElementById("card-2").style.color = "white";
      document.getElementById("card-3").style.color = "white";
      document.getElementById("card-4").style.color = "white";
      return;
    }
   
    inputs[0].value = Math.floor(diff / 3600 / 24);

    inputs[1].value = Math.floor(diff / 3600) % 24;

    inputs[2].value = Math.floor(diff / 60) % 60;

    inputs[3].value = Math.floor(diff) % 60;

}

clock();

setInterval(() => {
    clock()
}, 1000);