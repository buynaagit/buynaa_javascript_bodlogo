images = ["panda.jpg","panda.jpg", "dog.jpg", "dog.jpg", "cat.jpg", "cat.jpg", "lion.jpg", "lion.jpg", "camel.jpg", "camel.jpg", "eagle.jpg", "eagle.jpg", "horse.jpg", "horse.jpg", "goat.jpg", "goat.jpg"];
flip_count = 0;
daralt = 0;
olson = 0;
var myVar;
function random_array(arr){

	for(i=0; i<arr.length; i++){
		rand= Math.floor(Math.random()*16);
		temp= arr[i];
		arr[i] = arr[rand];
		arr[rand] = temp;
	}
}

random_array(images);
console.log(images);


function check(img, index){
	
    if(flip_count==0){
    img.setAttribute("src", images[index]);
    flip_count++;
    daralt = index;
    }
    else{
    img.setAttribute("src", images[index]);
    flip_count=0;
    setTimeout(function(){
    	  	if(images[daralt]==images[index]){
    	img.style.visibility = "hidden";
    	document.getElementById("img" + daralt).style.visibility = "hidden";

    }
        else{
    	img.setAttribute("src", 'star.jpg');
    	document.getElementById("img" + daralt).setAttribute("src", 'star.jpg');
    }
}, 500);
    }
    
}

time = 0.2;
duration = time*60;


function updateElem(){
	minutes = Math.floor(duration/60);
    seconds = duration % 60;
    seconds = seconds < 10 ? "0"+seconds:seconds;

	document.getElementById("timer").innerHTML = minutes+":"+seconds;
	duration--;
	if(duration<0){
		clearInterval(updateElem)
	}
	}

setInterval(updateElem, 1000)


//stopInterval(updateElem){
//	if(duration<=0)
//}

//tsag zogsooh
//button onclick
    //else if(images[daralt]==images[index])
// input start
// toglogch
// input type text 
// start tovch darval prompt garj ired hereglegch nree oruulna uu ok

//}



  // if(images[daralt]==images[index]){
    
 //   }		
