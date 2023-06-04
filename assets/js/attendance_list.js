function myFunction() {
    var btnText = document.getElementById("myBtn");
  
    if (btnText.innerHTML === "Read more") {
        btnText.innerHTML = "Read less";
        var elements = document.querySelectorAll(".more");
        for (var i = 0; i < elements.length; i++) {
            elements[i].style.display = "block";
        }
    } else {
      btnText.innerHTML = "Read more";
      var elements = document.querySelectorAll(".more");
      for (var i = 0; i < elements.length; i++) {
          elements[i].style.display = "none";
      }
    }
  }