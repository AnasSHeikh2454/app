# Minimal Cab Sharing System

## Overview

The Minimal Cab Sharing System is a mobile-adaptive web application designed to facilitate easy and efficient cab sharing for students, staff, and cab drivers. Users can sign up, post trips, search for available rides, book seats, and verify bookings using OTPs. The UI is clean and minimalist to enhance the user experience across devices.

---

## Project Structure

```
Cab_Sharing_Web_App/
├── cab-sharing-frontend/       # Frontend source code (React.js)
├── src/                        # Backend source code (Java, Spring Boot)
│   ├── main/java/com/example/demo/
│   │   ├── config/             # Spring Security & JWT Configuration
│   │   ├── controller/         # REST API Controllers
│   │   ├── dto/                # Data Transfer Objects
│   │   ├── model/              # Database Models
│   │   ├── repository/         # Data Repositories (Spring Data JPA)
│   │   ├── service/            # Business Logic Services
│   │   ├── util/               # Utility Classes
│   │   └── DemoApplication.java # Main Spring Boot Application
│   ├── resources/              # Configuration Files
│   ├── test/java/com/example/demo/ # Test Cases
├── database/                   # H2 Database configuration
├── .gitignore                  # Git ignore rules
├── package.json                # Frontend dependencies
├── build.gradle                # Gradle build configuration
├── settings.gradle             # Gradle settings
└── README.md                   # Project documentation
```

---

## Features

### User Authentication

- Sign up with Name, Role (Student/Staff/Cab Driver), Phone Number, and Profile Picture.
- JWT-based authentication.
- Secure password handling with BCrypt encryption.

### Trip Management

- Post a Trip: Users (Trip Hosts) can post trips specifying the destination, departure time, estimated arrival time, number of available seats, and price.
- Search for Trips: Riders can search for available trips using filters such as destination and departure/arrival time.
- Book a Seat: Riders can book available seats and specify a pickup point.
- Trip Verification: Hosts can verify riders via OTP-based cross-verification.

### Mobile Adaptive UI

- Fully responsive interface, optimized for mobile browsers.

### Additional Features (Future Enhancements)

- Google Maps Integration: Interactive pickup point selection.
- Real-Time Chat: Communication between trip hosts and riders.
- Vehicle Details & Seat Allocation.
- AI-based Dynamic Pricing Algorithm.

---

## Tech Stack

### Backend

- Java (Spring Boot): REST API implementation.
- Spring Security: Authentication and authorization.
- JWT (JSON Web Tokens): Secure user authentication.
- H2 Database: In-memory database for local testing.

### Frontend

- React.js: Dynamic and interactive user interface.
- Axios: API communication.
- Material-UI (MUI): Pre-styled UI components.

### Build & Deployment

- Gradle: Dependency management.
- Docker (Future deployment plan).
- AWS / Heroku (Planned deployment options).

---

## Getting Started

### Clone the Repository

```bash
git clone https://github.com/AnasSHeikh2454/app.git
cd Cab_Sharing_Web_App
```

### Backend Setup

1. Ensure Java 17+ and Gradle are installed.
2. Navigate to the project root and run:
   ```bash
   ./gradlew bootRun
   ```
3. The backend will start at `http://localhost:8081`.
4. Access the H2 Console at `http://localhost:8081/h2-console` with credentials:
   - Username: `sa`
   - Password: `password`

### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd cab-sharing-frontend
   npm install
   npm start
   ```
2. The frontend will start at `http://localhost:3000`.

---

## Usage

1. Sign Up / Log In: Create an account and authenticate.
2. Post a Trip: As a trip host, provide trip details.
3. Search & Book a Trip: Find available trips and book seats.
4. Verify Booking: OTP verification between host and rider.

---

## API Endpoints

### Authentication

- `POST /auth/signup` → Register a new user.
- `POST /auth/login` → Authenticate and generate a JWT token.

### Trip Management

- `POST /api/trips/post` → Host a trip.
- `GET /api/trips/search` → Search for available trips.
- `POST /api/trips/book/{tripId}` → Book a trip.
- `POST /api/trips/verify-otp/{bookingId}` → OTP verification.

---

## Security

- JWT-based authentication ensures secure API access.
- Spring Security roles (`ROLE_USER`, `ROLE_STUDENT`, `ROLE_DRIVER`) manage user permissions.
- CORS Configured to allow frontend-backend communication.

---

## Contributing

1. Fork the repository.
2. Create a branch for your feature (`git checkout -b feature-name`).
3. Commit your changes (`git commit -m "Added new feature"`).
4. Push to GitHub (`git push origin feature-name`).
5. Open a Pull Request.

---

##  Screenshots (Add Here)

- Add UI mockups and API response samples.

---

##

Developed by Anas Sheikh 

