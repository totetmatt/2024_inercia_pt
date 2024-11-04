//window.addEventListener('DOMContentLoaded', addInfoInit)

function addInfoInit() {
  //setTimeout(function(){
  document.querySelectorAll(".add-info").forEach((el) => {
    //const inforef = el.getAttribute("info-ref");
    var moreinfo;
    moreinfo = document.createElement("span");
    moreinfo.addEventListener("click", hideSeek);
    moreinfo.innerHTML = ' (<a href="javascript:void(0)">more info</a>)';
    el.appendChild(moreinfo);
  });
  //},100);
}

function hideSeek(e) {
  var thisdiv = e.currentTarget.parentElement;
  var inforef = e.currentTarget.parentElement.getAttribute("info-ref");
  //console.log(inforef);

  // if info already exists, no need to add it again
  var check = document.getElementById(inforef);
  if (check) return;

  var info = document.createElement("span");
  info.setAttribute("id", inforef);
  loadHTMLWithFetch(inforef, info);
  thisdiv.appendChild(info);
}

// function loadHTML(file, elmnt) {
//   console.log("Loading " + file);
//   if (file) {
//     xhttp = new XMLHttpRequest();
//     xhttp.onreadystatechange = function () {
//       if (this.readyState == 4) {
//         if (this.status == 200) {
//           elmnt.innerHTML = this.responseText;
//         }
//         if (this.status == 404) {
//           elmnt.innerHTML = "Page not found.";
//         }
//       }
//     };
//     xhttp.open("GET", file, true);
//     xhttp.setRequestHeader("Cache-Control", "no-cache, no-store, max-age=0");
//     xhttp.setRequestHeader("Expires", "Tue, 01 Jan 1980 1:00:00 GMT");
//     xhttp.setRequestHeader("Pragma", "no-cache");
//     xhttp.send();
//     return;
//   }
// }

async function loadHTMLWithFetch(file, elmnt) {
  console.log("Loading " + file);
  if (file) {
    try {
      const req = await fetch(`${file}.html`, {
        method: "GET",
        headers: {
          "Cache-Control": "no-cache, no-store, max-age=0",
          "Expires": "Tue, 01 Jan 1980 1:00:00 GMT",
          "Pragma": "no-cache",
        },
      });
      elmnt.innerHTML = await req.text();
    } catch (error) {
      elmnt.innerHTML = " <br>Page not found.";
      console.log("error:", error);
    }
  }
}
