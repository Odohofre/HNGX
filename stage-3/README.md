# Image Gallery App

[Live site](https://dnd-image-gallery-pi.vercel.app/gallery)

This is a Drag-and-Drop Image Gallery app built using React. It allows users to showcase a collection of images in a visually appealing manner. Authenticated users can drag and drop images within the gallery, and utilize search functionality to filter images based on tags.

## Features

- **Authentication:**
  - Simple email and password login.
  - Authentication handled using Firebase.

- **Image Display:**
  - Images presented in a visually appealing grid layout.
  - Each image is tagged for easy categorization.

- **Loading State:**
  - Skeleton loader displayed while images are being loaded.

- **Search Functionality:**
  - Filter images based on associated tags.

- **Drag-and-Drop:**
  - Users can rearrange images within the gallery through drag-and-drop.

- **User-friendly Feedback:**
  - Smooth animations and visual cues during drag-and-drop interactions.

- **Responsive Design:**
  - Seamlessly functions on various devices (desktops, tablets, mobiles).

- **Design Flexibility:**
  - Adheres to requirements while allowing for unique and appealing design.

## Technologies Used

- React
- Tailwind CSS
- Axios (to fetch the data)
- Firebase (for authentication)
- Pixabay API (for image data)

## Setup

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Odohofre/HNGX/tree/main/stage-3
   cd image-gallery-app
   ```

2. **Install dependencies:**

   ```bash
   pnpm install
   ```

3. **Set up Firebase:**
   - Create a Firebase project and set up authentication using email/password.

4. **Configure Firebase:**
   - Update Firebase configuration in the appropriate file (e.g., `config/firebase.js`).

5. **Start the application:**

   ```bash
   pnpm run dev
   ```

6. **Access the application:**
   - Open your web browser and navigate to [http://localhost:3000](http://localhost:3000).

## Author

- [Bright Odohofre](https://github.com/Odohofre)
