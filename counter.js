val = 0;
var d = new Date();
var t = d.getHours();
var moment= ["morning ", "afternoon ","evening ","night "]
colorsArray = ["red","blue","pink","green","purple","yellow"];


    
    document.getElementById("date").innerHTML = d

    
    if(0 <= t && 12 > t){
    document.getElementById("telltime").innerHTML= "good"+ " "+moment[0] ;
   document.getElementById("image").src = "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/12-good-morning-design-template-0e63204000164c6678e2e5f41b12ecc6_screen.jpg?ts=1597682115";
    
}
else if (12 <= t && 17 > t) {
    document.getElementById("telltime").innerHTML= "good"+ " "+moment[1];
    document.getElementById("image").src = "https://www.yourselfquotes.com/wp-content/uploads/2017/10/Good-Afternoon-Quotes-and-Sayings.jpg";
    
}else if (17 <= t && 20 > t) {
    document.getElementById("telltime").innerHTML= "good"+ " "+moment[2] ;
    document.getElementById("image").src = "https://i.pinimg.com/736x/87/01/84/870184100e94be5fb52a0a6ba84f3017.jpg";
    
}else if (20 <= t && 24 > t) {
    document.getElementById("telltime").innerHTML= "good"+ " "+moment[3];
    document.getElementById("image").src = "https://api.time.com/wp-content/uploads/2017/03/time-health-stock-sleep-bed-night.jpg?quality=85&w=1024&h=512&crop=1";
    
}

















function btn1(){
    if(val >= colorsArray.length - 1){
        val = 0
    }else {
    val = val + 1;
    }
    document.getElementById("number").innerHTML=val;
    document.body.style.backgroundColor = colorsArray[val]
}
function btn2(){
    if(val > 0){
        val = val - 1;
    }else{
        val = 0
    }
    document.getElementById("number").innerHTML=val;
    document.body.style.backgroundColor = colorsArray[val];
}

