🩺 Prescripto – Doctor Appointment Booking System

Prescripto is a modern MERN stack (MongoDB, Express, React, Node.js) web application that allows patients to easily book appointments with doctors. It offers an intuitive admin panel, doctor dashboard, and user interface for smooth healthcare management.

🚀 Tech Stack

Frontend: React.js, Tailwind CSS
Backend: Node.js, Express.js
Database: MongoDB
Payment: Stripe / Razorpay (depending on your setup)
Authentication: JWT (JSON Web Token)

⚙️ Features
👩‍⚕️ For Patients

Register and log in securely

Browse doctors by specialty

Book and manage appointments

Make online payments for consultations

🧑‍⚕️ For Doctors

Manage patient appointments

View schedules and availability

Update consultation status

🧑‍💼 For Admin

Manage users, doctors, and appointments

Approve or block doctor accounts

View complete system analytics

🖼️ Screenshots
Admin Panel	Dashboard	Doctor Panel

	
	

💡 Make sure your images are inside a folder named screenshots in your project root.

🧩 Installation

Clone the repository

git clone https://github.com/Iqbalcs/Final-year-project.git
cd Final-year-project


Install dependencies for both frontend and backend

cd backend
npm install
cd ../frontend
npm install


Create an .env file inside the backend folder and add:

MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PORT=5000


Run the app

# In backend
npm start

# In frontend
npm run dev

📦 Folder Structure
Final-year-project/
│
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middlewares/
│   ├── server.js
│   ├── package.json
│   └── .env
│
├── frontend/
│   ├── src/
│   ├── public/
│   └── package.json
│
└── screenshots/
    ├── admin.jpeg
    ├── dashboard.jpeg
    └── Doctor.jpeg

💬 Author

Iqbal Hussain
💻 MERN Stack Developer
🌐 GitHub Profile
