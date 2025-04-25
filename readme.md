
# Harry Potter React Single Page Application

This is a full-stack web application that allows users to explore a list of Harry Potter wizards and their spells. The frontend is built with React (using Vite), and the backend is powered by Node.js with Express and Sequelize, connected to a MySQL database hosted on Aiven.

## Live Demo

- Frontend (Netlify): [View Demo](https://bed1-bergen-yc.netlify.app/)
- Backend API (Render): [View Demo](https://react-harry-potter.onrender.com/)

## API Documentation
- Available at [Swagger](https://react-harry-potter.onrender.com/api/v1/docs/)

## Tech Stack

### Frontend
- React with Vite
- React Router
- Deployed on Netlify

### Backend
- Node.js with Express
- Sequelize ORM (MySQL)
- Database hosted on Aiven
- Deployed on Render

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/react-harry-potter-api.git
cd react-harry-potter-api
```

---

## Backend Setup

```bash
cd server
npm install
```

Create a `.env` file in the `server` folder:

```
PORT=3000
ADMIN_ROLE=admin

JWT_SECRET=your-secret

DB_NAME=your-db-name
DB_USERNAME=your-db-user
DB_PASSWORD=your-db-password

DB_HOST=your-aiven-hostname
DB_PORT=your-port

DB_DIALECT=mysql
```

Run the server:

```bash
npm start
```

---

## Frontend Setup

```bash
cd client
npm install
```

Create a `.env` file in the `client` folder:

```
VITE_API_URL=https://react-harry-potter.onrender.com
```

Run the development server:

```bash
npm run dev
```

---

## Deployment Notes

### Frontend (Netlify)
- Base directory: `client`
- Build command: `npm run build`
- Publish directory: `client/dist`
- Environment variable:  
  `VITE_API_URL=https://react-harry-potter.onrender.com`

### Backend (Render)
- Select `server` as the root directory
- Add environment variables from `.env`
- Build and start command: `npm install && npm start`

---

## Features

- View all wizards
- View details for a single wizard
- Fetch and display related spells from the database
- API endpoints for wizards and spells

## Future Enhancements

- Add authentication
- Allow users to add, delete or update wizards
- Add filters by house, type, or difficulty

## Author

**Yosmel Chiang**  
Student at Noroff School of Technology and Digital Media  
[GitHub](https://github.com/yosmelchiang)

## License

This project is open-source and available for educational and non-commercial use.
