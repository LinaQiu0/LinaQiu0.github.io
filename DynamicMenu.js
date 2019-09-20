//
// if (window.innerWidth >= 900) {
//   document.getElementById("selfImage").align = "left";
//   document.getElementById("selfImage").style.width = "300px";
//   document.getElementById("selfImage").style.margin = "0px 50px 700px -50px"
// }
// else {
//   // document.getElementById("selfImage").align = "middle";
//   document.getElementById("selfImage").style.width = "250px";
//   document.getElementById("selfImage").style.height = "auto";
//   document.getElementById("selfImage").style.display = "block";
//   document.getElementById("selfImage").style.margin = "0 auto";
// }

function displayDropDownList() {
  if(document.getElementById("mobileNav").style.display === "none") {
    document.getElementById("mobileNav").style.display = "block";
  }
  else {
    document.getElementById("mobileNav").style.display = "none";
  }
}

function size() {
  var width = window.innerWidth;
  var gap = width / 12;
  if (window.innerWidth >= 1000) {
    document.getElementById("selfImage").align = "left";
    document.getElementById("selfImage").style.width = "300px";
    document.getElementById("selfImage").style.marginRight = "50px"
    document.getElementById("selfImage").style.marginBottom = gap + "px";
    document.getElementById("selfImage").style.marginLeft = "-50px";
    document.getElementById("homeIntro").style.marginBottom = gap + "px";
  }
  else {
    document.getElementById("selfImage").align = "middle";
    document.getElementById("selfImage").style.width = "250px";
    document.getElementById("selfImage").style.height = "auto";
    document.getElementById("selfImage").style.display = "block";
    document.getElementById("selfImage").style.margin = "0 auto";
    document.getElementById("homeIntro").style.margin = "10px auto";
  }
}

function resize() {
  var width = window.innerWidth;
  var gap = width / 11;
  var paddingGap = width / 15;
  if(document.getElementById("mobileNav").style.display === "block" ) {
    document.getElementById("mobileNav").style.display = "none";
  }
  if (window.innerWidth >= 1000) {
    document.getElementById("selfImage").align = "left";
    document.getElementById("selfImage").style.width = "300px";
    document.getElementById("selfImage").style.marginRight = "50px"
    document.getElementById("selfImage").style.marginBottom = gap + "px";
    document.getElementById("selfImage").style.marginLeft = "-50px";
    document.getElementById("homeIntro").style.marginBottom = gap + "px";
    document.getElementById("rI").style.paddingTop = paddingGap + "px";
    // document.getElementById("researchInterests").style.margin = "0px 0px 0px 0px";
  }
  else {
    document.getElementById("selfImage").align = "middle";
    document.getElementById("selfImage").style.width = "250px";
    document.getElementById("selfImage").style.height = "auto";
    document.getElementById("selfImage").style.display = "block";
    document.getElementById("selfImage").style.margin = "0 auto";
    document.getElementById("homeIntro").style.margin = "10px auto";
  }
}
