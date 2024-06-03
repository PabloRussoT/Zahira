import express from 'express';
import { sequelize } from './database/database.js';
import medicRoutes from './routes/medics.js'; // Asegúrate de que este sea el nombre correcto del archivo
import { Medic } from './models/Medic.js';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(express.json());
app.use('/medics', medicRoutes);
app.use(express.static(path.join(__dirname, 'public')));  // Servir archivos estáticos

// Sincronizar la base de datos y comenzar el servidor
sequelize.sync({ force: true }).then(() => {
  console.log('Database & tables created!');
  
  // Insertar datos de ejemplo
  Medic.bulkCreate([
    { name: 'Dr. John Doe', speciality: 'Cardiology', phone: '555-1234', email: 'johndoe@example.com', image: 'image1.jpg', services: 'Heart Surgery, Cardiac Consultation', certifications: 'Board Certified', state: 'activo' },
    { name: 'Dr. Jane Smith', speciality: 'Neurology', phone: '555-5678', email: 'janesmith@example.com', image: 'image2.jpg', services: 'Brain Surgery, Neurological Consultation', certifications: 'Board Certified', state: 'activo' },
    { name: 'Dr. Emily Johnson', speciality: 'Pediatrics', phone: '555-8765', email: 'emilyjohnson@example.com', image: 'image3.jpg', services: 'Child Care, Immunization', certifications: 'Board Certified', state: 'activo' },
    { name: 'Dr. Michael Brown', speciality: 'Orthopedics', phone: '555-4321', email: 'michaelbrown@example.com', image: 'image4.jpg', services: 'Bone Surgery, Joint Replacement', certifications: 'Board Certified', state: 'activo' },
    { name: 'Dr. Sarah Davis', speciality: 'Dermatology', phone: '555-6789', email: 'sarahdavis@example.com', image: 'image5.jpg', services: 'Skin Treatment, Cosmetic Dermatology', certifications: 'Board Certified', state: 'activo' },
    { name: 'Dr. William Wilson', speciality: 'Oncology', phone: '555-7890', email: 'williamwilson@example.com', image: 'image6.jpg', services: 'Cancer Treatment, Chemotherapy', certifications: 'Board Certified', state: 'activo' },
    { name: 'Dr. Linda Martinez', speciality: 'Gynecology', phone: '555-2345', email: 'lindamartinez@example.com', image: 'image7.jpg', services: 'Prenatal Care, Gynecological Surgery', certifications: 'Board Certified', state: 'activo' },
    { name: 'Dr. Robert Anderson', speciality: 'Psychiatry', phone: '555-3456', email: 'robertanderson@example.com', image: 'image8.jpg', services: 'Mental Health Therapy, Psychiatric Medication', certifications: 'Board Certified', state: 'activo' },
    { name: 'Dr. Karen Taylor', speciality: 'Ophthalmology', phone: '555-4567', email: 'karentaylor@example.com', image: 'image9.jpg', services: 'Eye Surgery, Vision Correction', certifications: 'Board Certified', state: 'activo' },
    { name: 'Dr. James Thomas', speciality: 'Endocrinology', phone: '555-5670', email: 'jamesthomas@example.com', image: 'image10.jpg', services: 'Diabetes Management, Hormonal Disorders', certifications: 'Board Certified', state: 'activo' }
  ]).then(() => {
    console.log('Sample data inserted');
  }).catch((error) => {
    console.error('Error inserting sample data:', error);
  });
  
  // Iniciar el servidor
  app.listen(3000, () => {
    console.log('Server is running on port 3000');
  });
}).catch((error) => {
  console.error('Error creating database & tables:', error);
});
