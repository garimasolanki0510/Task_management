// // scripts/createAdmin.js
// const mongoose = require('mongoose');
// const bcrypt = require('bcryptjs');
// const Admin = require('../models/Admin');

// // Replace with your MongoDB Atlas URI
// const MONGO_URI = process.env.MONGO_URI;

// async function createAdmin() {
//   try {
//     await mongoose.connect('mongodb://localhost:27017/task-manager');
//     console.log('Connected to MongoDB');

//     const existingAdmin = await Admin.findOne({ email: 'admin@example.com' });
//     if (existingAdmin) {
//       console.log('Admin already exists');
//       return;
//     }

//     const hashedPassword = await bcrypt.hash('admin123', 10); // replace with secure password

//     const admin = new Admin({
//       email: 'admin@example.com',
//       password: hashedPassword
//     });

//     await admin.save();
//     console.log('Admin created successfully');
//   } catch (error) {
//     console.error('Error creating admin:', error);
//   } finally {
//     await mongoose.disconnect();
//   }
// }

// createAdmin();
