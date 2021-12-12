val = 0


function btn1(){
    val = val + 1;
    document.getElementById("number").innerHTML=val;;

}
function btn2(){
    if(val > 0){
        val = val - 1;
    }else{
        val = 0
    }
    document.getElementById("number").innerHTML=val;;
}

