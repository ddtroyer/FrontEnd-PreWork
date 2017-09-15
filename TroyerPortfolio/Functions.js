function myFunction() {
  var x = document.getElementByClass("navbar");
  if (x.className === "navbar"){
    x.className += " responsive";
  }
  else {
     {
       x.className = "navbar";
     }
  }
}

function animal() {
  var x = document.getElementById("userAnswer").value;
  var upperX = x.toUpperCase();
  document.getElementById("myResponse").innerHTML = (upperX + " are my favorite, too!");
}

function copyright() {
  alert("Photos from Unsplash by Markus Spiske, Caspar Rubin, Markus Petritz, Greg Rakozy, Sai Kiran Anagani, and Alex Knight");
}
//add additional html and css functionality

/*ideas for additional functionality
-onmouseover for copyright stuff

*/
