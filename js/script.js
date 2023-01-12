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
  
  {
    let temp = document.createElement("template");
    temp.innerHTML = `
    <div class="w3-top">
        <div class="w3-bar color-medium w3-card">
            <a class="w3-bar-item w3-button w3-padding-large w3-hide-medium w3-hide-large w3-right" href="javascript:void(0)" onclick="toggleMenu()" title="Toggle Navigation Menu"><i class="fa fa-bars"></i></a>
            <img class="w3-bar-item" height="46" alt='' src='/exponentialidle/assets/images/logo.png'/>
            <a href="/exponentialidle/index.html#" class="w3-bar-item w3-button w3-padding-large text-bold">Exponential Idle</a>
            <a href="/exponentialidle/index.html#screenshots" class="w3-bar-item w3-button w3-padding-large w3-hide-small">Screenshots</a>
            <a href="/exponentialidle/index.html#download" class="w3-bar-item w3-button w3-padding-large w3-hide-small">Download</a>
            <a href="/exponentialidle/whatsnew.html#" class="w3-bar-item w3-button w3-padding-large w3-hide-small">What's New</a>
            <a href="/exponentialidle/privacypolicy.html#" class="w3-bar-item w3-button w3-padding-large w3-hide-small">Privacy Policy</a>
            <div class="w3-dropdown-hover" style="outline: none;">
                <button class="w3-button w3-padding-large w3-hide-small" style="outline: none;">Tools</button>
                <div class="w3-dropdown-content w3-bar-block w3-card-4 color-medium">
                <a href="/exponentialidle/community-guide/index.html" class="w3-bar-item w3-button">Community Guide</a>
                <a href="/exponentialidle/bluestacks.html#" class="w3-bar-item w3-button">BlueStacks</a>
                <a href="/exponentialidle/stars.html" class="w3-bar-item w3-button">Star Optimizer</a>
                <a href="/exponentialidle/students.html" class="w3-bar-item w3-button">Student Optimizer</a>
                </div>
            </div>
            <a href="index.html#contact" class="w3-bar-item w3-button w3-padding-large w3-hide-small">Contact</a>
        </div>
    </div>
  
    <!-- Navbar on small screens (remove the onclick attribute if you want the navbar to always show on top of the content when clicking on the links) -->
    <div id="navDemo" class="w3-bar-block color-light w3-hide w3-hide-large w3-hide-medium w3-top" style="margin-top:46px">
        <a href="/exponentialidle/index.html#screenshots" class="w3-bar-item w3-button w3-padding-large" onclick="toggleMenu()">Screenshots</a>
        <a href="/exponentialidle/index.html#download" class="w3-bar-item w3-button w3-padding-large" onclick="toggleMenu()">Download</a>
        <a href="/exponentialidle/whatsnew.html#" class="w3-bar-item w3-button w3-padding-large" onclick="toggleMenu()">What's New</a>
        <a href="/exponentialidle/privacypolicy.html#" class="w3-bar-item w3-button w3-padding-large" onclick="toggleMenu()">Privacy Policy</a>
        <a href="/exponentialidle/community-guide/index.html" class="w3-bar-item w3-button w3-padding-large" onclick="toggleMenu()">Community Guide</a>
        <a href="/exponentialidle/bluestacks.html#" class="w3-bar-item w3-button w3-padding-large" onclick="toggleMenu()">BlueStacks</a>
        <a href="/exponentialidle/stars.html" class="w3-bar-item w3-button w3-padding-large" onclick="toggleMenu()">Star Optimizer</a>
        <a href="/exponentialidle/students.html" class="w3-bar-item w3-button w3-padding-large" onclick="toggleMenu()">Student Optimizer</a>
        <a href="/exponentialidle/index.html#contact" class="w3-bar-item w3-button w3-padding-large" onclick="toggleMenu()">Contact</a>
    </div>
    `
    let clon = temp.content.cloneNode(true);
    document.body.prepend(clon);
  }
  
  {
    let temp = document.createElement("template");
    temp.innerHTML = `
    <footer class="w3-container w3-center w3-opacity color-light w3-medium">
    <p class="w3-opacity w3-center" style="margin:4px">© 2021 Conic Games</p>
    </footer>
    `;
    let clon = temp.content.cloneNode(true);
    document.body.appendChild(clon);
  }