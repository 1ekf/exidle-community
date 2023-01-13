// Used to toggle the menu on small screens when clicking on the menu button
function toggleMenu() {
  var x = document.getElementById("navDemo");
  if (x.className.indexOf("w3-show") == -1) {
    x.className += " w3-show";
  } else { 
    x.className = x.className.replace(" w3-show", "");
  }
}
  
// When the user clicks anywhere outside of the modal, close it
var modal = document.getElementById('ticketModal');
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// macro to add duplicate entries
$('head').load('/exponentialidle/community-guide/scripts/head.html');
$(document).ready(function() {
  // $('div.toc').prepend(makeTOC());
  $.get("/exponentialidle/community-guide/scripts/nav.html", function(data) {$('body').prepend(data);});
  $.get("/exponentialidle/community-guide/scripts/footer.html", function(data) {$('body').append(data);});

  if (window.matchMedia('(orientation: landscape)')) {
    console.log("landscape");
  } else {
    console.log("portrait");
  }
});

function makeTOC() {
  const outer = document.createElement("ul")
  outer.classList.add("w3-ul", "w3-border");
  let inner;
  $('h1, h3').each(function() {
    if ($(this).is('h1')) {
      const titleEntry = document.createElement("li");
      titleEntry.classList.add("text-color");
      titleEntry.innerHTML = $(this).text();
      outer.appendChild(titleEntry);

      inner = document.createElement("ul");
      outer.appendChild(inner);
    } else {
      const subTitleEntry = document.createElement("li");
      subTitleEntry.classList.add("text-color");
      subTitleEntry.innerHTML = $(this).text();
      inner.appendChild(subTitleEntry);
    }
  });
  return outer;
}

/* Set the width of the side navigation to 250px */
function openNav() {
  document.getElementById("mySidenav").style.display = "block";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  document.getElementById("mySidenav").style.display = "none";
}
