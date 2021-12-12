let sayNo = document.getElementById("No");
let SayYes = document.getElementById("Yes");
let replaceText = document.getElementById("Text");

sayNo.addEventListener("click", ()=>{
    width = window.innerWidth;
    height = window.innerHeight;

    newWidth = (Math.random() * width);
    newHeight = (Math.random() * height);

    document.getElementById('No').style.position = "absolute";
    document.getElementById('No').style.left = newWidth + "px";
    document.getElementById('No').style.top = newHeight + "px";
});

SayYes.addEventListener("click", ()=>{
    replaceText.innerHTML = "<h1>Sabía que Dirías que sí</h1>";
    document.getElementById("Text").style.fontSize = 20;
    document.getElementById("Text").style.color = "Green"; 
});