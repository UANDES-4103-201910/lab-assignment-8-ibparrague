$(document).ready(function(){

class KeyboardController {
    constructor(id_target) {
        this.target= $(id_target);
        this.element = document.getElementById("targetelement");
    }

    toggleKeyboard(){
      var k = document.getElementById("kcontainer")
      if (k.style.display == "none"){
        k.style.display = "block"
      }
      else{
        k.style.display = "none"
      }
    }

    keyPressed(key) {

        if (key.text().includes("Tab")){
          this.element.innerHTML += "tab_space";
        }
        else if (key.text().includes("Accept")){
          alert("Accepted")
        }
        else if (key.text().includes("Cancel")){
          alert("Canceled")
        }
        else if (key.text().includes("Enter")){
          this.element.innerHTML += "<p>"
        }
        else if (key.text().includes("Shift")){
          this.element.innerHTML += "s_"
        }
        else if (key.text().includes("Bksp")){
          this.element.innerHTML = this.element.innerHTML.slice(0,-1)
        }
        else{
          this.element.innerHTML += key.text()
        }
    }
}


var x = new KeyboardController("targetelement")

$(".key").click(function(){
  x.keyPressed($(this))
});

$("#asd").click(function(){
  x.toggleKeyboard()
});


});
