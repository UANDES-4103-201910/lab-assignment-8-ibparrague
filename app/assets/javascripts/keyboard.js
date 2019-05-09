$(document).ready(function(){

class KeyboardController {
    constructor(id_target) {
        this.target= $(id_target);
        this.element = document.getElementById("targetelement");
        this.shift = 0
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
          this.element.innerHTML += "&nbsp;&nbsp;&nbsp;&nbsp;";
        }
        else if (key.text().includes("Accept")){
          alert("Accepted")
        }
        else if (key.text().includes("Cancel")){
          alert("Canceled")
        }
        else if (key.text().includes("Enter")){
          this.element.innerHTML += "<br>"
        }

        else if (key.text().includes("Bksp")){
          var asd = this.element.innerHTML
          var lasd = this.element.innerHTML.length
          if (asd.length > 0){
            this.element.innerHTML = asd.substring(0, asd.length - 1);
          }
          var l2asd = this.element.innerHTML.length
          if (l2asd == lasd){
            var pos = this.element.innerHTML.lastIndexOf('&nbsp;');
            this.element.innerHTML = this.element.innerHTML.substring(0,pos) + this.element.innerHTML.substring(pos+6);
          }
        }
        else if (key.hasClass("key-space")){
          this.element.innerHTML += "&nbsp"
        }
        else if (key.text().includes("Accept")){
          alert("Accepted")
        }
        else if (key.text().includes("Shift")){
          this.shift = 1
        }
        else{
          var dsa = key.text().trim()
          if (this.shift == 0){
            dsa = dsa.toLowerCase()
            this.element.innerHTML += dsa
          }
          if (this.shift == 1){
            this.element.innerHTML += dsa
            this.shift = 0
          }
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
