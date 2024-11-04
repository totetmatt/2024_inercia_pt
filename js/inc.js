window.addEventListener("DOMContentLoaded", initStuff);

function initStuff() {
  includeHTML();
  setTimeout(function () {
    var li = document.location.pathname.substr(4);
    var id_ref = "header_" + (li === "" ? "index.html" : li);
    //console.log("banana: " + li + " " + id_ref);
    var dom = document.getElementById(id_ref);
    if (dom) dom.setAttribute("aria-current", "page"); // highlight the menu selection via css

    var fl = document.getElementById("flagref");
    if (fl) fl.href = fl.href + li;
  }, 100);
}

function addInfoInit() {
  document.querySelectorAll(".add-info").forEach((el) => {
    const moreinfo = document.createElement("span");
    moreinfo.addEventListener("click", hideSeek);
    moreinfo.innerHTML = " [+info]";
    el.appendChild(moreinfo);
  });

  //fix the table layout
  let td1Witdh = null;
  let td2Witdh = null;
  document.querySelectorAll("tr").forEach((el) => {
    if (el.children.length > 1) {
      let td = el.children[0];
      if (!td1Witdh) td1Witdh = td.offsetWidth - 25 + "px";
      td.style.width = td1Witdh;
      td = el.children[1];
      if (!td2Witdh) td2Witdh = td.offsetWidth - 25 + "px";
      td.style.width = td2Witdh;
    }
  });
}
function hideSeek(e) {
  const infoElem = e.target.parentElement.parentElement.nextElementSibling;
  infoElem.classList.toggle("visible");
  console.log(e.target.parentElement.parentElement.style.backgroundColor);
  e.target.innerHTML = infoElem.classList.contains("visible") ? " [-info]" : " [+info]";
}

function includeHTML() {
  var z, i, elmnt, file, xhttp;
  /* Loop through a collection of all HTML elements: */
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    /*search for elements with a certain atrribute:*/
    file = elmnt.getAttribute("w3-include-html");
    if (file) {
      /* Make an HTTP request using the attribute value as the file name: */
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function () {
        if (this.readyState == 4) {
          if (this.status == 200) {
            elmnt.innerHTML = this.responseText;
          }
          if (this.status == 404) {
            elmnt.innerHTML = "Page not found.";
          }
          /* Remove the attribute, and call this function once more: */
          elmnt.removeAttribute("w3-include-html");
          includeHTML();
        }
      };
      xhttp.open("GET", file, true);
      xhttp.setRequestHeader("Cache-Control", "no-cache, no-store, max-age=0");
      xhttp.setRequestHeader("Expires", "Tue, 01 Jan 1980 1:00:00 GMT");
      xhttp.setRequestHeader("Pragma", "no-cache");
      xhttp.send();
      /* Exit the function: */
      return;
    }
  }
}
