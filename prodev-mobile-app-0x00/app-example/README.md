# ProDev Mobile App 0x00

This is my first ProDev mobile app project, built using [Expo Router](https://expo.dev/router).

---

## Steps I Followed for Scaffolding

1. Navigated to my parent project directory:
   ```bash
   cd prodev-mobile-setup
Initialized the project using the latest Expo Router template:
npx create-expo-app@latest app-example

Opened the file:
app-example/app/(tabs)/index.tsx
and replaced the default Welcome! text with:
<ThemedText type="title">First App Created</ThemedText>
✅ Now the Home screen shows First App Created.

Started the development server:
npx expo start
On iOS → scanned the QR code with the Camera app.

On Android → scanned the QR code with the Expo Go app.

Resetting the Project
I ran:
npm run reset-project
Observations:
The starter code was moved into a new directory called app-example.

A fresh empty app/ directory was created, ready for development.

The original home screen was removed, and the project was essentially reset to a clean state.

Notes
The project uses file-based routing (Expo Router).

Screens inside app/(tabs) only show when rendered in a Tab navigator.

The constants/Colors.tsx file defines light and dark mode theme colors.

Running the App
Install dependencies:
cd app-example
npm install
Start the Expo dev server:

npx expo start
Learn More
Expo Docs

Expo Router Intro
