// project.js
// สคริปต์สำหรับควบคุมการแสดงผล UI และหน้าแผนที่

const uiScreen = document.getElementById('ui-screen');
const mapScreen = document.getElementById('map-screen');
const gotoButton = document.getElementById('goto-map');
const backButton = document.getElementById('back-button');
const mapFrame = document.getElementById('map-frame');

// เมื่อกดปุ่ม GoToMap จะซ่อน UI แล้วแสดง iframe ที่โหลดหน้าแผนที่
gotoButton.addEventListener('click', () => {
  uiScreen.classList.remove('active');
  mapScreen.classList.add('active');
  mapFrame.src = 'map-screen.html';
});

// เมื่อกดปุ่มกลับ จะกลับไปยังหน้า UI
backButton.addEventListener('click', () => {
  mapFrame.src = '';
  mapScreen.classList.remove('active');
  uiScreen.classList.add('active');
});

// หมายเหตุ: iframe โหลด URL /map/ ซึ่งจะถูกจัดการโดย server.js

