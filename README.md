# 🚐 TravelTrucks

TravelTrucks is a camper rental catalog built with **Next.js**. Users can browse available campers, filter them by location and vehicle characteristics, view detailed information and reviews, and submit a booking request.

## ✨ Features

* 🚐 Camper catalog with pagination and **Load more**
* 📍 Filtering by city
* ⚙️ Filtering by vehicle type, engine, and transmission
* 🖼️ Camper detail pages with image gallery
* 📋 Detailed specifications and amenities
* ⭐ Camper reviews
* 📝 Booking form with name and email validation
* 🔄 Loading, empty, error, and not-found states
* 🌓 Light and dark theme support
* 📱 Responsive layout for desktop and mobile screens

## 🛠️ Tech Stack

![Next.js](https://img.shields.io/badge/Next.js-16-black?style=for-the-badge\&logo=next.js)
![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge\&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge\&logo=typescript)
![TanStack Query](https://img.shields.io/badge/TanStack_Query-FF4154?style=for-the-badge\&logo=reactquery)
![Swiper](https://img.shields.io/badge/Swiper-6332F6?style=for-the-badge\&logo=swiper)
![CSS Modules](https://img.shields.io/badge/CSS_Modules-000000?style=for-the-badge\&logo=cssmodules)

* **Next.js 16** — App Router
* **React 19**
* **TypeScript**
* **TanStack React Query** — server-state management and data fetching
* **Swiper** — camper image galleries
* **CSS Modules** — component-level styling
* **next/font** — optimized font loading
* **ESLint** — code quality

## 🌐 Demo

🔗 [Live Demo](https://travel-trucks-nine-lime.vercel.app/)

## 🚀 Getting Started

### Requirements

* Node.js 20 or newer
* npm

### Installation

```bash
npm install
```

### Environment

The application uses the **GoIT Campers API** by default:

```text
https://campers-api.goit.study
```

To use another compatible API, create a `.env.local` file in the project root:

```env
NEXT_PUBLIC_API_URL=https://your-api.example.com
```

### Development

```bash
npm run dev
```

Open http://localhost:3000 in your browser.

## 📜 Available Scripts

| Command         | Description                  |
| --------------- | ---------------------------- |
| `npm run dev`   | Start the development server |
| `npm run build` | Create a production build    |
| `npm run start` | Start the production server  |
| `npm run lint`  | Run ESLint                   |

## 🗺️ Routes

| Route                 | Description                               |
| --------------------- | ----------------------------------------- |
| `/`                   | Landing page                              |
| `/catalog`            | Camper catalog and filters                |
| `/catalog/[camperId]` | Camper details, reviews, and booking form |

## 📁 Project Structure

```text
app/
├── catalog/
│   ├── page.tsx
│   └── [camperId]/
│       └── page.tsx
├── components/
│   └── Reusable UI components
├── hooks/
│   └── Client-side data hooks
├── lib/
│   └── API helpers and shared constants
├── providers/
│   └── React Query provider
├── services/
│   ├── campers.ts
│   └── booking.ts
├── types/
│   └── TypeScript domain types
└── globals.css
```

## 🔌 API Integration

The API base URL is defined in:

```text
app/lib/api.ts
```

Camper requests are implemented in:

```text
app/services/campers.ts
```

### Endpoints

| Method | Endpoint                              | Description                   |
| ------ | ------------------------------------- | ----------------------------- |
| `GET`  | `/campers`                            | Fetch campers for the catalog |
| `GET`  | `/campers/:camperId`                  | Fetch camper details          |
| `GET`  | `/campers/:camperId/reviews`          | Fetch camper reviews          |
| `POST` | `/campers/:camperId/booking-requests` | Submit a booking request      |

## 🎯 Key Implementation Details

### Data Fetching

**TanStack React Query** is used for:

* server-state management
* caching
* loading and error states
* refetching
* pagination and **Load more** functionality

### Dynamic Routes

Camper detail pages use Next.js dynamic routing:

```text
/catalog/[camperId]
```

Each camper has its own detail page with specifications, amenities, gallery, reviews, and a booking form.

### Responsive Design

The interface is optimized for:

* 📱 Mobile
* 💻 Desktop

The layout adapts to different screen sizes while maintaining the visual hierarchy and design system.

## 💡 What I Practiced

This project helped me strengthen my skills in:

* Next.js App Router
* React Server and Client Components
* TypeScript
* TanStack React Query
* Dynamic routing
* REST API integration
* Form validation
* Reusable React components
* Responsive design
* Loading and error handling
* Theme switching
* Git and GitHub workflow

## 📄 License

This project was created for educational and portfolio purposes.

---

### 👩‍💻 Author

**Kateryna Nehoda**

Junior Frontend Developer

⭐ **Made with ❤️ by Kateryna Nehoda**

