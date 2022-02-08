var increment, increment1=1,increment2=1,increment3=1;
var first_time=true;
var i=5;

/* this part for scroll right for all products*/
function Scroll_right(num) {
    if (num==1) { increment=increment1;  }
    else if (num==2) {increment=increment2;  }
    else{  increment=increment3;  }
    if (increment<3) {
        document.getElementById("scroll"+num).style.left=(40*increment)+"%";
       document.getElementById("sec"+num).style.left=(-640*increment)+"px";
       document.getElementById("next"+num).style.left=1240+(640*increment)+"px";
       document.getElementById("prev"+num).style.left=(640*increment)+"px";
       if (num==1) { increment1++;  }
       if (num==2) {increment2++;  }
       if (num==3){  increment3++;  }
    }
    else{
        document.getElementById("scroll"+num).style.left=0+"%";
        document.getElementById("next"+num).style.left=1240+"px";
        document.getElementById("prev"+num).style.left=0+"px";
        document.getElementById("sec"+num).style.left=0+"px";
        if (num==1) { increment1=1;  }
        else if (num==2) {increment2=1;  }
        else{  increment3=1;  }
    }
}
/* this part for scroll left for all products*/
function Scroll_left(num) {
    if (num==1) { increment=increment1;  }
    else if (num==2) {increment=increment2;  }
    else{  increment=increment3;  }
    if (increment>1) {
        increment--;
        document.getElementById("scroll"+num).style.left=(40*(increment-1))+"%";
       document.getElementById("next"+num).style.left=1240+((increment-1)*640)+"px";
       document.getElementById("prev"+num).style.left=(640*increment)-640+"px";
       document.getElementById("sec"+num).style.left=(-640*increment)+640+"px";
       var sec=document.querySelectorAll("section");
       if (num==1) { increment1--;  }
       if (num==2) {increment2--;  }
       if (num==3){  increment3--;  }
    }
    else{
        document.getElementById("scroll"+num).style.left=80+"%";
        document.getElementById("next"+num).style.left=1240+(640*2)+"px";
        document.getElementById("prev"+num).style.left=(640*2)+"px";
        document.getElementById("sec"+num).style.left=(-640*2)+"px";
        if (num==1) { increment1=3;  }
        else if (num==2) {increment2=3;  }
        else{  increment3=3;  }
        
    }
}
/* this part for active li navgation bar*/
function active(num) {
    document.getElementById("li"+num).style.transition="background 1s";
    document.getElementById("li"+num).style.backgroundColor="rgb(255, 64, 64)";
}
/* this part for not active li navgation bar*/
function out(num) {
    document.getElementById("li"+num).style.transition="background 1s";
    document.getElementById("li"+num).style.backgroundColor="initial";
}
/* this for slider button next and previous and active*/
function nextImage() {
    var slider_inner=document.getElementById('boxs');
    var image=['2','3','4','5','1'];
    if (i<image.length) {
        i=i+1;
    }
    else{
        i=1;
    }
    slider_inner.innerHTML="<img src=image_Home/"+image[i-1]+".jpg>";
    document.getElementById("img_"+i).style.backgroundColor="rgb(26, 41, 124)";
    if(i>1) document.getElementById("img_"+(i-1)).style.backgroundColor="rgb(255, 255, 255)";
    if(i==1){document.getElementById("img_"+5).style.backgroundColor="rgb(255, 255, 255)";first_time=false;}
}
function prevImage() {
    var slider_inner=document.getElementById('boxs');
    var image=['2','3','4','5','1'];
    if (i<image.length+1 && i>1) {
        i=i-1;
    }
    else{
        i=image.length;
    }
    if(first_time==true)i=5;
    slider_inner.innerHTML="<img src=image_Home/"+image[i-1]+".jpg>";
    document.getElementById("img_"+i).style.backgroundColor="rgb(26, 41, 124)";
    if(i<5) document.getElementById("img_"+(i+1)).style.backgroundColor="rgb(255, 255, 255)";
    if(i==5 || first_time){document.getElementById("img_"+1).style.backgroundColor="rgb(255, 255, 255)";first_time=false;}
}
function active_img(num) {
    var slider_inner=document.getElementById('boxs');
    var image=['2','3','4','5','1'];
    let prev_i=i;
    i=num;
    slider_inner.innerHTML="<img src=image_Home/"+image[i-1]+".jpg>";
    document.getElementById("img_"+i).style.backgroundColor="rgb(26, 41, 124)";
    if(prev_i!=num)
    document.getElementById("img_"+prev_i).style.backgroundColor="rgb(255, 255, 255)";
    if(first_time){
    document.getElementById("img_"+1).style.backgroundColor="rgb(255, 255, 255)";first_time=false;}
}
function img_over(num) {
    document.getElementById("img_"+num).style.backgroundColor="rgb(26, 41, 124)";
}
function img_out(num) {
    if(num!=i)
    document.getElementById("img_"+num).style.backgroundColor="rgb(255, 255, 255)";
}
setInterval(nextImage ,5000);