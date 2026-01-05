# 📚 StudyNotion - An EdTech Platform

![StudyNotion Banner](https://img.shields.io/badge/StudyNotion-EdTech%20Platform-blue?style=for-the-badge)
[![Live Demo](https://img.shields.io/badge/Live-Demo-success?style=for-the-badge)](https://studynotionpro.netlify.app/)

## 🌟 About The Project

**StudyNotion** is a comprehensive EdTech platform designed to empower learners and instructors worldwide. Built with modern web technologies, it provides an intuitive interface for online learning, course management, and educational content delivery. The platform enables instructors to share their knowledge with millions of students while offering learners the flexibility to learn at their own pace from anywhere in the world.

### 🎯 Key Features

- **For Students:**
  - Browse and enroll in courses across multiple subjects and programming languages
  - Track learning progress with visual dashboards
  - Access rich multimedia content including videos, quizzes, and projects
  - Rate and review courses to help fellow learners
  - Secure payment gateway integration for course purchases
  - Personalized learning dashboard
  - Progress tracking for each enrolled course
  - Certificate generation upon course completion

- **For Instructors:**
  - Create and manage courses with rich content
  - Upload videos, create quizzes, and assignments
  - Track student enrollment and performance
  - Receive payments through secure gateway
  - Analytics dashboard for course performance
  - Section and subsection management for structured learning

- **Core Platform Features:**
  - User authentication and authorization (JWT-based)
  - OTP-based email verification
  - Secure password reset functionality
  - Responsive design for all devices
  - Real-time progress tracking
  - Shopping cart functionality
  - Course catalog with filtering and search
  - Category-based course organization
  - Review and rating system
  - Email notifications for enrollments and updates

## 🛠️ Tech Stack

### Frontend
![React](https://img.shields.io/badge/React-18.3.1-61DAFB?style=flat&logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-Latest-646CFF?style=flat&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-4.0.14-38B2AC?style=flat&logo=tailwind-css&logoColor=white)
![Redux](https://img.shields.io/badge/Redux_Toolkit-2.6.1-764ABC?style=flat&logo=redux&logoColor=white)

- **React 18.3.1** - UI Library
- **Vite** - Build tool and development server
- **Tailwind CSS 4.0.14** - Utility-first CSS framework
- **Redux Toolkit 2.6.1** - State management
- **React Router DOM 7.4.0** - Client-side routing
- **Framer Motion** - Animation library for smooth UI transitions
- **React Hook Form 7.54.2** - Form handling and validation
- **Chart.js 4.4.8** - Data visualization
- **React Markdown 10.1.0** - Markdown rendering
- **Swiper 11.2.6** - Touch slider/carousel
- **React Icons 5.5.0** - Icon library
- **React Hot Toast 2.5.2** - Toast notifications
- **React Dropzone 14.3.8** - File upload handling
- **React OTP Input 3.1.1** - OTP input component
- **React Type Animation 3.2.0** - Typing animation effects

### Backend
![Node.js](https://img.shields.io/badge/Node.js-Latest-339933?style=flat&logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express.js-4.21.2-000000?style=flat&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-8.12.1-47A248?style=flat&logo=mongodb&logoColor=white)

- **Node.js** - JavaScript runtime
- **Express.js 4.21.2** - Web application framework
- **MongoDB (Mongoose 8.12.1)** - NoSQL database
- **JWT (jsonwebtoken 9.0.2)** - Authentication
- **Bcrypt 5.1.1** - Password hashing
- **Nodemailer 6.10.0** - Email service
- **Cloudinary 2.6.0** - Media management
- **Razorpay 2.9.6** - Payment gateway integration
- **Express-fileupload 1.5.1** - File upload middleware
- **Cookie-parser 1.4.7** - Cookie parsing
- **CORS 2.8.5** - Cross-origin resource sharing
- **OTP-generator 4.0.1** - OTP generation
- **Node-schedule 2.1.1** - Task scheduling

## 📁 Project Structure

```
StudyNotion/
│
├── frontend/                 # React frontend application
│   ├── src/
│   │   ├── assets/          # Images, logos, and static files
│   │   ├── components/      # Reusable React components
│   │   │   ├── common/      # Common components (Navbar, Footer, etc.)
│   │   │   ├── core/        # Core feature components
│   │   │   │   ├── AboutPage/
│   │   │   │   ├── auth/
│   │   │   │   ├── Catalog/
│   │   │   │   ├── Course/
│   │   │   │   ├── Dashboard/
│   │   │   │   ├── HomePage/
│   │   │   │   └── ViewCourse/
│   │   │   └── ContactPage/
│   │   ├── data/            # Static data and configuration
│   │   ├── hooks/           # Custom React hooks
│   │   ├── Pages/           # Page components
│   │   ├── reducer/         # Redux reducers
│   │   ├── services/        # API services and operations
│   │   ├── slices/          # Redux slices
│   │   └── utils/           # Utility functions
│   ├── package.json
│   ├── vite.config.js
│   └── tailwind.config.js
│
└── server/                   # Node.js backend application
    ├── config/              # Configuration files
    │   ├── cloudinary.js
    │   ├── database.js
    │   └── razorpay.js
    ├── controllers/         # Request handlers
    │   ├── Auth.js
    │   ├── Cart.js
    │   ├── Category.js
    │   ├── Course.js
    │   ├── Payments.js
    │   ├── Profile.js
    │   └── RatingAndReview.js
    ├── models/              # Database models
    │   ├── User.js
    │   ├── Course.js
    │   ├── Category.js
    │   ├── Cart.js
    │   ├── Profile.js
    │   ├── Section.js
    │   ├── SubSection.js
    │   ├── CourseProgress.js
    │   └── RatingAndReview.js
    ├── routes/              # API routes
    ├── middlewares/         # Custom middlewares
    ├── mail/               # Email templates
    └── utils/              # Utility functions
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- MongoDB database
- Cloudinary account (for media storage)
- Razorpay account (for payments)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/vansh-tambi/StudyNotionedtech.git
   cd StudyNotionedtech
   ```

2. **Setup Backend**
   ```bash
   cd server
   npm install
   ```

3. **Configure Backend Environment Variables**
   
   Create a `.env` file in the server directory:
   ```env
   PORT=4000
   MONGODB_URL=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   
   # Cloudinary Configuration
   CLOUD_NAME=your_cloudinary_cloud_name
   API_KEY=your_cloudinary_api_key
   API_SECRET=your_cloudinary_api_secret
   
   # Razorpay Configuration
   RAZORPAY_KEY=your_razorpay_key
   RAZORPAY_SECRET=your_razorpay_secret
   
   # Email Configuration
   MAIL_HOST=smtp.gmail.com
   MAIL_USER=your_email@gmail.com
   MAIL_PASS=your_email_password
   
   # Frontend URL
   FRONTEND_URL=http://localhost:5173
   ```

4. **Setup Frontend**
   ```bash
   cd ../frontend
   npm install
   ```

5. **Configure Frontend Environment Variables**
   
   Create a `.env` file in the frontend directory:
   ```env
   VITE_BASE_URL=http://localhost:4000/api/v1
   VITE_RAZORPAY_KEY=your_razorpay_key
   ```

6. **Run the Application**

   **Backend:**
   ```bash
   cd server
   npm run dev
   ```

   **Frontend:**
   ```bash
   cd frontend
   npm run dev
   ```

7. **Access the Application**
   - Frontend: `http://localhost:5173`
   - Backend API: `http://localhost:4000`

## 📊 Database Schema

The application uses MongoDB with the following main collections:

- **Users** - Student and instructor information
- **Profiles** - Extended user profile data
- **Courses** - Course details and content
- **Categories** - Course categories
- **Sections** - Course sections
- **SubSections** - Individual lessons/videos
- **CourseProgress** - User progress tracking
- **RatingAndReviews** - Course ratings and reviews
- **Cart** - Shopping cart items
- **OTP** - Email verification OTPs

## 🎨 Features in Detail

### Authentication & Authorization
- JWT-based authentication
- Role-based access control (Student/Instructor/Admin)
- OTP-based email verification
- Secure password reset with email tokens

### Course Management
- Rich text editor for course descriptions
- Video upload and streaming
- Section and subsection organization
- Draft and publish functionality
- Course pricing and duration management

### Payment Processing
- Secure Razorpay integration
- Order creation and verification
- Payment success notifications via email
- Transaction history

### Media Management
- Cloudinary integration for video and image storage
- Optimized media delivery
- Thumbnail generation
- Multi-format support

### Progress Tracking
- Visual progress indicators
- Completion percentage calculation
- Lecture completion tracking
- Course completion certificates

## 🔐 Security Features

- Password hashing with bcrypt
- JWT token authentication
- HTTP-only cookies
- CORS configuration
- Input validation and sanitization
- SQL injection prevention
- XSS protection

## 🌐 API Endpoints

### Authentication
- `POST /api/v1/auth/signup` - User registration
- `POST /api/v1/auth/login` - User login
- `POST /api/v1/auth/sendotp` - Send OTP for verification
- `POST /api/v1/auth/changepassword` - Change password

### Courses
- `GET /api/v1/course/getAllCourses` - Get all courses
- `GET /api/v1/course/getCourseDetails` - Get course details
- `POST /api/v1/course/createCourse` - Create new course (Instructor)
- `PUT /api/v1/course/editCourse` - Edit course (Instructor)
- `DELETE /api/v1/course/deleteCourse` - Delete course (Instructor)

### Payments
- `POST /api/v1/payment/capturePayment` - Process payment
- `POST /api/v1/payment/verifyPayment` - Verify payment

### Profile
- `GET /api/v1/profile/getUserDetails` - Get user profile
- `PUT /api/v1/profile/updateProfile` - Update profile
- `PUT /api/v1/profile/updateDisplayPicture` - Update profile picture

## 📱 Responsive Design

StudyNotion is fully responsive and works seamlessly across:
- Desktop computers
- Tablets
- Mobile devices
- All modern browsers (Chrome, Firefox, Safari, Edge)

## ✨ Animations & UI Enhancements

### Framer Motion Integration
The application features smooth, professional animations powered by **Framer Motion** library:

#### Enhanced Components:
1. **Home Page** - Hero section with fade-in, slide animations, staggered button effects
2. **Navigation** - Slide-down entrance, hover effects, rotating dropdown icons
3. **Buttons** - Spring physics hover/tap animations (scale effects)
4. **Code Blocks** - Viewport-triggered slide animations from left and right
5. **Course Cards** - Lift-on-hover effects with staggered fade-in
6. **Footer** - Animated social icons, link hover effects, staggered section loading
7. **Modals** - Smooth backdrop and content entrance/exit animations

#### Animation Patterns:
- **Fade & Slide**: Smooth entrance animations with opacity and position changes
- **Hover Effects**: Scale transformations with spring physics
- **Viewport Triggers**: Animations activate when elements scroll into view
- **Staggered Children**: Sequential animations for lists and groups

#### Performance Optimizations:
- GPU-accelerated transforms
- Viewport-once animations to prevent re-triggering
- Spring physics for natural motion
- Lazy loading of animation states

### Responsive Breakpoints:
- **Mobile**: < 640px (sm)
- **Tablet**: ≥ 640px (sm) to < 1024px
- **Desktop**: ≥ 1024px (lg)
- **Large Desktop**: ≥ 768px (md)

All animations are optimized for mobile devices and respect user preferences for reduced motion.

## 🧪 Testing Guide

### Quick Start Testing
1. Install dependencies: `cd frontend && npm install`
2. Run dev server: `npm run dev`
3. Open browser: `http://localhost:5173`

### What to Test

**Homepage Animations:**
- Hero badge fades in from top with hover scale
- Heading and subheading with staggered animations
- CTA buttons with spring physics
- Video banner scales in smoothly
- Code blocks slide in from left/right on scroll
- Course cards have staggered entrance and lift on hover

**Navigation & Footer:**
- Navbar slides down on page load
- Logo scales on hover
- Dropdown chevron rotates
- Footer sections fade in on scroll
- Social icons scale and rotate on hover

**Responsive Testing:**
- Test breakpoints: 320px (mobile), 768px (tablet), 1920px (desktop)
- Verify text sizes, button layouts, and grid adjustments
- Check touch interactions on mobile devices

### Performance Checks:
- Open DevTools → Performance tab
- Record while scrolling/interacting
- Verify 60fps smooth animations
- Check for layout shifts or jank

### Browser Compatibility:
✅ Chrome | ✅ Firefox | ✅ Safari | ✅ Edge | ✅ Mobile browsers

## 🤝 Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Vansh Tambi**

- GitHub: [@vansh-tambi](https://github.com/vansh-tambi)
- Project Link: [https://github.com/vansh-tambi/StudyNotionedtech](https://github.com/vansh-tambi/StudyNotionedtech)

## 🌐 Live Demo

Check out the live application: [StudyNotion Pro](https://studynotionpro.netlify.app/)

## 📞 Contact & Support

For any queries or support, please reach out through:
- GitHub Issues: [Create an issue](https://github.com/vansh-tambi/StudyNotionedtech/issues)
- Contact Page: [Contact Us](https://studynotionpro.netlify.app/contact)

## 🙏 Acknowledgments

- [React Documentation](https://react.dev/)
- [Express.js Documentation](https://expressjs.com/)
- [MongoDB Documentation](https://docs.mongodb.com/)
- [Tailwind CSS Documentation](https://tailwindcss.com/)
- [Cloudinary](https://cloudinary.com/)
- [Razorpay](https://razorpay.com/)

---

<div align="center">
  <p>Made with ❤️ by Vansh Tambi</p>
  <p>⭐ Star this repository if you find it helpful!</p>
</div>
