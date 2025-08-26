# Hospital Management System

A full-stack MERN application designed to streamline hospital operations with two separate dashboards: one for patients and another for admins. Patients can easily book appointments and send inquiries, while admins can manage doctors, appointments, and messages efficiently.

Live Demo →https://hospital-appointment-frontend.vercel.app/

Patient Side

  - Contact hospital via messages without login.
  - Register/Login securely with JWT authentication.
  - Book appointments by selecting department and doctor.
  - View status of booked appointments.


### Admin Side

- Secure Admin login.

- Dashboard to view & manage appointments (approve, reject, pending).

- Manage doctors:

- Add new doctor (with profile picture via Cloudinary).

- Manage admins: add new admin profiles.

- View all messages sent by patients.

### Tech Stack

#### Frontend:

- Vite + React

#### Backend:

- Node.js + Express.js (REST API)

- JWT Authentication (separate tokens for patient & admin)

#### Database & Storage:

- MongoDB (flexible schema for users, appointments, messages)

- Cloudinary (for storing doctor images)

### Authentication

- Separate JWT tokens for Patient and Admin authorization.

- Protected routes for sensitive operations like adding doctors/admins.

