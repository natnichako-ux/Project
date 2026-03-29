// server.js
// Node.js web server สำหรับให้บริการหน้า UI และหน้าเว็บแมพจากโฟลเดอร์ภายนอก

const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 7789;

// กำหนดเส้นทางไปยังโฟลเดอร์เว็บแมพที่อยู่ในโฟลเดอร์พี่น้องของ Project บน Desktop
const webmapPath = path.join(__dirname, '..', 'webmap');

// ให้บริการไฟล์สาธารณะในโฟลเดอร์ Project เช่น project.html, project.js, style.css
app.use(express.static(path.join(__dirname)));

// ให้บริการไฟล์แผนที่เมื่อเรียกเส้นทาง /map
app.use('/map', express.static(webmapPath));

// เมื่อผู้ใช้เรียก /map ให้ส่ง index.html ของเว็บแมพ
app.get('/map', (req, res) => {
  res.sendFile(path.join(webmapPath, 'index.html'));
});

// เมื่อผู้ใช้เรียก root / ให้ส่ง project.html เป็นหน้า UI หลัก
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'project.html'));
});

// เริ่มเซิร์ฟเวอร์
app.listen(port, () => {
  console.log(`Server started: http://localhost:${port}`);
  console.log('Open this URL to see the UI and click GoToMap');
});
