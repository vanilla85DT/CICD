 1 สร้างโปรเจกต์ใหม่

    1.1 npx create-next-app@latest ecommerce-app --typescript
    1.2 cd ecommerce-app

 2 ติดตั้ง Dependencies ที่จำเป็นตามความชอบ
    
   npm install @prisma/client bcrypt zustand axios @mui/material @emotion/react @emotion/styled @heroicons/react @stripe/stripe-js @stripe/react-stripe-js
   npm install -D prisma tailwindcss postcss autoprefixer

   ### หน้าที่ของแต่ละตัว 
   Frontend: React (zustand, @mui/material, @heroicons/react, @emotion/react, TailwindCSS) เพื่อสร้าง UI และจัดการสถานะ
   Backend: Prisma, bcrypt, Stripe, และ axios เพื่อเชื่อมต่อฐานข้อมูล, เข้ารหัสข้อมูล, และรองรับการชำระเงิน
   CSS:TailwindCSS ทำงานร่วมกับ PostCSS และ Autoprefixer เพื่อประมวลผล CSS อย่างมีประสิทธิภาพ

3 คำสั่งgit

  3.1 เชื่อมต่อกับ Remote Repository ใช้  git remote add origin https://github.com/vanilla85DT/testNexttttttt.git

  3.2 ส่งข้อมูลไปยัง Remote Repository ใช้ git push origin <branch>

  3.3 ดึงข้อมูลจาก Remote Repository ใช้ git pull origin <branch>

  การทำงานกับ Branch
     
      1. สร้าง Branch ใหม่ใช้      git branch <branch-name>
      2. ย้ายไปยัง Branch อื่นใช้    git checkout <branch-name>

  คำสั่งเกี่ยวกับ file 
      
   1. เพิ่มไฟล์ใน Staging Area 
      
      เพิ่มไฟล์เฉพาะไฟล์เดียว ใช้ git add <filename>
      เพิ่มทุกไฟล์ที่เปลี่ยนแปลง  ใช้ git add .

   2.บันทึกการเปลี่ยนแปลง (Commit) 

      git commit -m "ข้อความอธิบายการเปลี่ยนแปลง"



git remote remove origin
git remote -v

git init
git add .
git commit -m "wahahaha"
git remote add origin https://github.com/vanilla85DT/CICD.git
git push origin main
git push origin main --force
