let password = "";
const correct = "140269"; // เปลี่ยนรหัสตรงนี้ได้

const dots = document.querySelectorAll("#dots span");

function updateDots(){

    dots.forEach(dot=>{
        dot.style.background="#ffd0e0";
    });

    for(let i=0;i<password.length;i++){
        dots[i].style.background="#ff5b9b";
    }

}

function press(num){

    if(password.length>=6) return;

    password+=num;

    updateDots();

}

function clearPass(){

    password=password.slice(0,-1);

    updateDots();

}

function checkPass(){

    if(password==correct){

        window.location.href="loading.html";

    }else{

        alert("รหัสไม่ถูกนะ 💖");

        password="";

        updateDots();

    }

}// สร้างหัวใจลอย
setInterval(() => {

    const heart = document.createElement("div");

    heart.innerHTML = "💖";

    heart.style.position = "fixed";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.top = "-50px";
    heart.style.fontSize = (20 + Math.random() * 25) + "px";
    heart.style.pointerEvents = "none";
    heart.style.zIndex = "999";

    document.body.appendChild(heart);

    let y = -50;

    const move = setInterval(() => {

        y += 2;

        heart.style.top = y + "px";

        if (y > window.innerHeight) {

            clearInterval(move);

            heart.remove();

        }

    }, 16);

}, 500);
// หัวใจลอย

setInterval(()=>{

let h=document.createElement("div");

h.className="heart";

h.innerHTML="💖";

h.style.left=Math.random()*100+"vw";

h.style.fontSize=(20+Math.random()*20)+"px";

h.style.animationDuration=(4+Math.random()*3)+"s";

document.body.appendChild(h);

setTimeout(()=>{

h.remove();

},7000);

},400);

// ดาว

for(let i=0;i<40;i++){

let star=document.createElement("div");

star.className="star";

star.style.left=Math.random()*100+"vw";
star.style.top=Math.random()*100+"vh";

document.body.appendChild(star);

}