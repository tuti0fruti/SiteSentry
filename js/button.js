var count = 0;
document.getElementById("button1").onclick = function (){
    count++;
    if (count % 2 === 0){
        document.getElementById("demo").innerHTML = "";
    }
    else{
        var img = document.createElement("img");
        img.src = "https://i.scdn.co/image/ab6761610000e5ebca77d763703a93930c363a39";
        document.getElementById("demo").appendChild(img);
    }
};
