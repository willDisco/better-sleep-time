const colors = [
  "rgb(168, 39, 254)",
  "rgb(154, 3, 254)",
  "rgb(150, 105, 254)",
  "rgb(140, 140, 255)",
  "rgb(187, 187, 255)",
  "rgb(143, 254, 221)",
]

function handleOnClick() {
    let output = document.querySelector(".output");
    output.style.display = "block";
  
    let hours = document.getElementById("hours");
    hours.innerHTML = "";

    let hh = document.getElementById("hh").value;
    let mm = document.getElementById("mm").value;
    let ampm = document.getElementById("ampm").value;

    hh = ampm === "PM" ? hh + 12: hh;
    let now = new Date();
    // allow 14 minutes to fall sleep!
    now.setMinutes(now.getMinutes() + 14);

    now.setHours(hh);
    now.setMinutes(mm);
  
    // calculate sleep cycles!
    for (let i = 1; i <= 6; i++) {
      now.setMinutes(now.getMinutes() + 90);
      let elm = document.createElement("div");
      elm.innerText = 
        now.toLocaleTimeString("en-US", { timeStyle: "short" });
        elm.style.color = colors[i];
      hours.appendChild(elm);
    } 
  }