[loading.html](https://github.com/user-attachments/files/28758029/loading.html)
<!DOCTYPE html>
<html lang="th">
<head>

<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1">

<title>Loading...</title>

<style>

[video.html](https://github.com/user-attachments/files/28758035/video.html)
[style.css](https://github.com/user-attachments/files/28758034/style.css)
[script.js](https://github.com/user-attachments/files/28758031/script.js)
[memory.html](https://github.com/user-attachments/files/28758030/memory.html)

body{

margin:0;
display:flex;
justify-content:center;
align-items:center;
height:100vh;

background:linear-gradient(180deg,#ffd6e7,#ffeef5);

font-family:sans-serif;

overflow:hidden;

}

.box{

text-align:center;

}

h1{

color:#ff5c93;

font-size:40px;

}

p{

font-size:22px;

color:#777;

}

.bar{

width:280px;

height:18px;

background:white;

border-radius:30px;

overflow:hidden;

margin:auto;

margin-top:30px;

}

.fill{

height:100%;

width:0%;

background:#ff6ca9;

animation:load 4s forwards;

}

@keyframes load{

100%{

width:100%;

}

}

</style>

</head>

<body>

<div class="box">
<img src="images/11.png">

<h2>มีอะไรจะให้เธออออ</h2>

<p>โหลดเเปป (,,• ֊ •,,) </p>

<div class="bar">

<div class="fill"></div>

</div>

</div>

<script>

setTimeout(()=>{

window.location="video.html";

},4000);

</script>

</body>

</html>
<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <title>Happy Anniversary</title>
  <style>
    body {
      margin: 0;
      min-height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
      background: #ffd9e8;
      font-family: Tahoma, sans-serif;
    }

    .box {
      max-width: 500px;
      padding: 24px;
      border-radius: 20px;
      background: rgba(255,255,255,0.7);
      color: #a04870;
      font-size: 22px;
      line-height: 1.8;
      text-align: center;
    }
  </style>
</head>
<body>
  <div class="box">
    <div id="text"></div>
  </div>

  <script>
    const message = `สุขสันต์วันครบรอบนะออย ❤️ ขอบคุณที่เข้ามาเป็นรอยยิ้มของเค้า ขอบคุณที่อยู่ข้าง ๆ กันมาตลอด ไม่ว่าจะผ่านไปกี่วัน เค้าก็ยังเลือกออยเหมือนเดิม รักออยที่สุดนะ 💖`;
    let i = 0;

    function typing() {
      const textEl = document.getElementById("text");
      if (!textEl) return;

      if (i < message.length) {
        textEl.innerHTML += message.charAt(i);
        i++;
        setTimeout(typing, 60);
      }
    }

    typing();
  </script>
</body>
</html>

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
body{
    margin:0;
    padding:0;
    font-family:Arial,sans-serif;
    background:linear-gradient(180deg,#ffd6e7,#ffeef5);
    display:flex;
    justify-content:center;
    align-items:center;
    height:100vh;
    overflow:hidden;
}

.container{
    width:360px;
    background:rgba(255,255,255,.85);
    backdrop-filter:blur(10px);
    border-radius:30px;
    padding:30px;
    text-align:center;
    box-shadow:0 10px 30px rgba(0,0,0,.15);
}

.profile img{
    width:130px;
    height:130px;
    border-radius:50%;
    object-fit:cover;
    border:5px solid white;
    box-shadow:0 0 15px pink;
}

h1{
    color:#ff5b9b;
}

p{
    color:#777;
}

#dots{
    display:flex;
    justify-content:center;
    gap:10px;
    margin:20px 0;
}

#dots span{
    width:14px;
    height:14px;
    border-radius:50%;
    background:#ffd0e0;
}

.keypad{
    display:grid;
    grid-template-columns:repeat(3,80px);
    justify-content:center;
    gap:12px;
}

.keypad button{
    width:80px;
    height:80px;
    border:none;
    border-radius:50%;
    background:white;
    font-size:26px;
    cursor:pointer;
    box-shadow:0 5px 15px rgba(0,0,0,.1);
    transition:.2s;
}

.keypad button:hover{
    transform:scale(1.08);
    background:#ff8ab8;
    color:white;
}/* พื้นหลัง */
body{
    background:linear-gradient(180deg,#ffd6e7,#ffeef6);
    overflow:hidden;
}

/* หัวใจลอย */
.heart{
    position:fixed;
    top:-50px;
    animation:fall linear forwards;
    pointer-events:none;
}

@keyframes fall{

0%{
transform:translateY(-50px) rotate(0deg);
opacity:1;
}

100%{
transform:translateY(110vh) rotate(360deg);
opacity:0;
}

}

/* ดาววิ้ง */
.star{

position:fixed;
width:4px;
height:4px;
background:white;
border-radius:50%;
animation:blink 2s infinite;

}

@keyframes blink{

50%{
opacity:.2;
transform:scale(.5);
}

100%{
opacity:1;
}

}
<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>𝖪𝖤𝖳𝖲𝖠𝖱𝖨𝖭 ❤️</title>
  <style>
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    body {
      font-family: Tahoma, sans-serif;
      background: linear-gradient(180deg, #ffd9e8, #ffcfe0, #fff0f6);
      overflow: hidden;
      min-height: 100vh;
      position: relative;
      color: #8a3d61;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 20px;
    }

    .hearts-bg,
    .photos-fall,
    .sparkles {
      position: fixed;
      inset: 0;
      pointer-events: none;
      overflow: hidden;
    }

    .heart {
      position: absolute;
      top: -10vh;
      color: #ff8fba;
      animation: fall linear infinite;
      opacity: 0.75;
    }

    .photo-fall {
      position: absolute;
      top: -20vh;
      width: 70px;
      height: 70px;
      border-radius: 16px;
      object-fit: cover;
      box-shadow: 0 8px 20px rgba(255, 130, 170, 0.25);
      border: 3px solid rgba(255, 255, 255, 0.8);
      animation: photoFall linear infinite;
      opacity: 0.95;
    }

    .sparkle {
      position: absolute;
      color: #fff;
      animation: twinkle 2.5s infinite ease-in-out;
      opacity: 0.8;
    }

    .wrapper {
      position: relative;
      z-index: 2;
      width: 92%;
      max-width: 430px;
      background: rgba(255, 255, 255, 0.45);
      border: 1px solid rgba(255, 255, 255, 0.75);
      backdrop-filter: blur(10px);
      border-radius: 28px;
      padding: 18px;
      text-align: center;
      box-shadow: 0 14px 35px rgba(255, 137, 179, 0.22);
    }

    h1 {
      font-size: 26px;
      margin-bottom: 12px;
      color: #ff5d98;
    }

    .video-box {
      width: 100%;
      border-radius: 22px;
      overflow: hidden;
      box-shadow: 0 10px 24px rgba(255, 123, 168, 0.25);
      background: #fff;
      position: relative;
    }

    video {
      width: 100%;
      display: block;
      background: #f8dbe7;
    }

    .video-error {
      display: none;
      padding: 18px;
      color: #a14e73;
      font-size: 15px;
      background: rgba(255, 255, 255, 0.75);
    }

    .message {
      margin-top: 18px;
      min-height: 110px;
      padding: 16px;
      border-radius: 20px;
      background: rgba(255, 255, 255, 0.55);
      color: #934b6e;
      font-size: 17px;
      line-height: 1.8;
      opacity: 0;
      transform: translateY(15px);
      transition: 0.8s ease;
    }

    .message.show {
      opacity: 1;
      transform: translateY(0);
    }

    @keyframes fall {
      0% {
        transform: translateY(-10vh) scale(1);
        opacity: 0;
      }
      10% {
        opacity: 0.85;
      }
      100% {
        transform: translateY(110vh) scale(1.3);
        opacity: 0;
      }
    }

    @keyframes photoFall {
      0% {
        transform: translateY(-20vh) rotate(0deg);
        opacity: 0;
      }
      10% {
        opacity: 1;
      }
      100% {
        transform: translateY(120vh) rotate(18deg);
        opacity: 0;
      }
    }

    @keyframes twinkle {
      0%, 100% {
        transform: scale(0.7);
        opacity: 0.35;
      }
      50% {
        transform: scale(1.2);
        opacity: 1;
      }
    }
  </style>
</head>
<body>
  <div class="hearts-bg" id="heartsBg"></div>
  <div class="photos-fall" id="photosFall"></div>
  <div class="sparkles" id="sparkles"></div>
  <div class="wrapper">
    <h1>𝖪𝖤𝖳𝖲𝖠𝖱𝖨𝖭</h1>
    <div class="video-box">
      <video id="loveVideo" controls playsinline poster="images/cover.jpg">
        <source src="videos/112.mov" type="video/mp4">
      </video> 
    </div>
    <div class="message" id="finalMessage">
      สุขสันต์วันครบรอบนะเเฟน ❤️<br />
      ขอบคุณที่เข้ามาเป็นรอยยิ้มของเค้า<br />
      ขอบคุณที่อยู่ข้าง ๆ กันมาตลอด<br />
      เค้ารักเธอทู๊กวันนน<br />
      รักเเฟนนะ ( ´͈ ᵕ `͈ )
    </div>
  </div>

  <audio id="bgMusic" loop>
    <source src="music.mp3" type="audio/mpeg" />
  </audio>

  <script>
    const video = document.getElementById("loveVideo");
    const music = document.getElementById("bgMusic");
    const finalMessage = document.getElementById("finalMessage");
    const videoError = document.getElementById("videoError");

    function createHearts() {
      const container = document.getElementById("heartsBg");
      for (let i = 0; i < 25; i++) {
        const heart = document.createElement("div");
        heart.className = "heart";
        heart.innerHTML = "❤";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.fontSize = Math.random() * 20 + 14 + "px";
        heart.style.animationDuration = Math.random() * 5 + 6 + "s";
        heart.style.animationDelay = Math.random() * 6 + "s";
        container.appendChild(heart);
      }
    }

    function createSparkles() {
      const container = document.getElementById("sparkles");
      const icons = ["✦", "✨", "✧"];
      for (let i = 0; i < 30; i++) {
        const sparkle = document.createElement("div");
        sparkle.className = "sparkle";
        sparkle.innerHTML = icons[Math.floor(Math.random() * icons.length)];
        sparkle.style.left = Math.random() * 100 + "vw";
        sparkle.style.top = Math.random() * 100 + "vh";
        sparkle.style.fontSize = Math.random() * 12 + 10 + "px";
        sparkle.style.animationDelay = Math.random() * 2 + "s";
        container.appendChild(sparkle);
      }
    }

    function createFallingPhotos() {
      const container = document.getElementById("photosFall");
      const photos = ["images/1.jpg", "images/2.jpg", "images/3.jpg", "images/4.jpg", "images/5.jpg", "images/6.jpg", "images/7.jpg",];

      setInterval(() => {
        const img = document.createElement("img");
        img.className = "photo-fall";
        img.src = photos[Math.floor(Math.random() * photos.length)];
        img.style.left = Math.random() * 90 + "vw";
        img.style.animationDuration = Math.random() * 6 + 7 + "s";
        container.appendChild(img);

        setTimeout(() => {
          img.remove();
        }, 9000);
      }, 1000);
    }

    video.addEventListener("play", () => {
      music.play().catch(() => {});
    });

    video.addEventListener("ended", () => {
      finalMessage.classList.add("show");
    });

    video.addEventListener("error", () => {
      video.style.display = "none";
      videoError.style.display = "block";
    });

    createHearts();
    createSparkles();
    createFallingPhotos();
  </script>
</body>
</html>

<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>𝖲𝖤𝖳𝖲𝖠𝖱𝖨𝖭</title>
  <style>
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    body {
      font-family: "Tahoma", sans-serif;
      min-height: 100vh;
      overflow: hidden;
      background: linear-gradient(180deg, #ffd9e8, #ffcfe0, #ffeaf2);
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      color: #7a3b57;
    }

    .container {
      position: relative;
      z-index: 2;
      width: 90%;
      max-width: 360px;
      text-align: center;
      background: rgba(255, 255, 255, 0.45);
      backdrop-filter: blur(10px);
      border: 1px solid rgba(255, 255, 255, 0.65);
      border-radius: 28px;
      padding: 24px 20px 28px;
      box-shadow: 0 12px 35px rgba(255, 143, 186, 0.25);
    }

    .photo {
      width: 130px;
      height: 130px;
      margin: 0 auto 16px;
      border-radius: 50%;
      overflow: hidden;
      border: 4px solid #ffb6cf;
      box-shadow: 0 0 20px rgba(255, 145, 180, 0.35);
    }

    .photo img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    h1 {
      font-size: 26px;
      color: #ff5f9a;
      margin-bottom: 8px;
    }

    p {
      font-size: 16px;
      margin-bottom: 18px;
      color: #8b4a67;
    }

    .pin-display {
      display: flex;
      justify-content: center;
      gap: 12px;
      margin-bottom: 22px;
      min-height: 18px;
    }

    .dot {
      width: 16px;
      height: 16px;
      border-radius: 50%;
      border: 2px solid #ff90b9;
      background: rgba(255, 255, 255, 0.7);
      transition: 0.25s;
      box-shadow: 0 0 8px rgba(255, 182, 203, 0.35);
    }

    .dot.filled {
      background: #ff6fa8;
      box-shadow: 0 0 12px rgba(255, 111, 168, 0.65);
    }

    .keypad {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 12px;
    }

    .keypad button {
      height: 62px;
      border: none;
      border-radius: 18px;
      font-size: 22px;
      font-weight: bold;
      color: #ffffff;
      cursor: pointer;
      background: linear-gradient(180deg, #ffb7d1, #ff95bc);
      box-shadow: 0 6px 16px rgba(255, 133, 180, 0.25);
      transition: transform 0.15s, filter 0.2s;
    }

    .keypad button:hover {
      filter: brightness(1.05);
      transform: scale(1.05);
    }

    .keypad button:active {
      transform: scale(0.97);
    }

    .heart {
      position: absolute;
      top: -10vh;
      color: #ff8fba;
      font-size: 22px;
      animation: fall linear infinite;
      opacity: 0.75;
      z-index: 1;
      user-select: none;
      pointer-events: none;
    }

    @keyframes fall {
      0% {
        transform: translateY(-10vh) scale(1);
        opacity: 0;
      }
      10% {
        opacity: 0.9;
      }
      100% {
        transform: translateY(110vh) scale(1.4);
        opacity: 0;
      }
    }

    .note {
      margin-top: 16px;
      font-size: 13px;
      color: #a85d7f;
      opacity: 0.95;
    }
  </style>
</head>
<body>
  <div id="hearts"></div>

  <div class="container">
    <div class="photo">
      <img src="images/1.jpg"/>
    </div>

    <h1>⋆.𐙚 ̊ คนสวยของเค้า ⋆˙⟡</h1>
    
    <div class="pin-display" id="display">
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>

    </div>

    <div class="keypad">
      <button type="button" onclick="press('1')">1</button>
      <button type="button" onclick="press('2')">2</button>
      <button type="button" onclick="press('3')">3</button>
      <button type="button" onclick="press('4')">4</button>
      <button type="button" onclick="press('5')">5</button>
      <button type="button" onclick="press('6')">6</button>
      <button type="button" onclick="press('7')">7</button>
      <button type="button" onclick="press('8')">8</button>
      <button type="button" onclick="press('9')">9</button>
      <button type="button" onclick="backspace()">⌫</button>
      <button type="button" onclick="press('0')">0</button>
      <button type="button" onclick="checkPassword()">❤️</button>
    </div>

    <div class="note">รักอ้วนมากๆนะ</div>
  </div>

  <script>
    let input = "";
    const correctPassword = "140269";

    function updateDots() {
      const dots = document.querySelectorAll(".dot");
      dots.forEach((dot, index) => {
        if (index < input.length) {
          dot.classList.add("filled");
        } else {
          dot.classList.remove("filled");
        }
      });
    }

    function press(num) {
      if (input.length < 6) {
        input += num;
        updateDots();
      }
    }

    function backspace() {
      input = input.slice(0, -1);
      updateDots();
    }

    function checkPassword() {
      if (input === correctPassword) {
        window.location.href = "loading.html";
      } else {
        alert("รหัสไม่ถูกนะออย ลองอีกครั้ง 💕");
        input = "";
        updateDots();
      }
    }

    function createHearts() {
      const heartsContainer = document.getElementById("hearts");

      for (let i = 0; i < 25; i++) {
        const heart = document.createElement("div");
        heart.classList.add("heart");
        heart.innerHTML = "❤";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.animationDuration = (Math.random() * 5 + 5) + "s";
        heart.style.fontSize = (Math.random() * 18 + 14) + "px";
        heart.style.opacity = Math.random();
        heart.style.animationDelay = Math.random() * 5 + "s";
        heartsContainer.appendChild(heart);
      }
    }

    createHearts();
    updateDots();
  </script>
</body>
</html>
