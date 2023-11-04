var color = ["red", "blue","orange","pink","black","white","silver","golden","green","brown","red",
"green","cyan","black","voilet","blue","yellow","purple","orange","lightgreen","lemon",]
var idx = 0;
let  x = 1;
let cc = document.getElementById("cb");
// cc.addEventListener("click","console.log('X')"); //not word need function
// cc.addEventListener("click",console.log('X'));
//cc.onclick = "console.log('xyze')";
 // cc.onClick = console.log('xyze');
/* cc.addEventListener("click",xyz);   => work
function xyz(){
    console.log("x");
} */

function fun1() {
    let idx = Math.floor(Math.random() * 20);
   // console.log(idx);
   var temp = document.getElementById("circle").style.backgroundColor = color[idx];
  // var temp = document.getElementById("circle");
  // wrong - temp.setAttribute("style", "backgroundcolor:red;");
 /* temp.setAttribute("style", "background-color:color[idx];");
     not work for color array if i put red then work,why?
 */
}

cc.addEventListener("click",fun1);


var shape = ["shape1", "shape2", "shape3", "shape4", "shape5"]

let cs = document.getElementById("sb");
cs.addEventListener("click",fun2);


function fun2() {
    if (x === 1) {
      var i = document.getElementsByClassName("shape1")[0];
      i.className = "shape2";
      x++;
    }
    else if(x === 2){
      var i = document.getElementsByClassName("shape2")[0];
      i.className = "shape3";
      x++; 
    }
    else if(x === 3){
        var i = document.getElementsByClassName("shape3")[0];
        i.className = "shape4";
        x++; 
      }
      else if(x === 4){
        var i = document.getElementsByClassName("shape4")[0];
        i.className = "shape5";   
        x++; 
      }
      else{
        var i = document.getElementsByClassName("shape5")[0];
        i.className = "shape1";
        x = 1;
      }
  }


