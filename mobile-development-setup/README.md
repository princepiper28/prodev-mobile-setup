# Mobile Development Environment Setup

This README documents the setup process for my mobile development environment using **React Native + Expo Framework**.

---

## ✅ Requirements

Before starting, I ensured the following were installed:

- **Node.js LTS** (v16 or higher) → [Download](https://nodejs.org/)
- **Visual Studio Code (VS Code)** → [Download](https://code.visualstudio.com/)
- **Operating System**: (macOS / Linux / Windows)
- **Expo CLI** (installed globally with `npm install -g expo-cli`)
- **Expo Go app** on my physical device (Android/iOS)

---

## 📱 Installing Expo Go

1. Visit [Expo Go official page](https://expo.dev/go).
2. Select the latest SDK version.
3. Download and install the app:
   - **Android:** via [Google Play Store](https://play.google.com/store/apps/details?id=host.exp.exponent)
   - **iOS:** via [Apple App Store](https://apps.apple.com/app/expo-go/id982107779)
4. Open the **Expo Go** app on my device.
5. Created an account / logged in successfully.

---

## 🧪 Testing the Setup

To confirm everything works:

```bash
# Create a new Expo project with TypeScript
npx create-expo-app App-example --template
cd App-example

# Start development server
npx expo start

# ProDev Mobile App 0x00

## 1. Project Setup (Scaffolding Steps)

1. Navigated to the parent project directory:
   ```bash
   cd prodev-mobile-setup
Initialized a new Expo project using the Expo Router template:

bash
Copy
Edit
npx create-expo-app@latest .
Opened the file app-example/app/(tabs)/index.tsx.

Modified the default text:

Changed Welcome! → First App Created

Started the Expo development server:

bash
Copy
Edit
npx expo start
For iOS devices: scanned the QR code using the Camera app.

For Android devices: scanned the QR code using the Expo Go app.

2. Resetting the Project
To reset the project, ran:

bash
Copy
Edit
npm run reset-project
Observations:
The .expo folder and build caches were cleared.

All cached files, temporary states, and dependencies linked to previous builds were removed.

The project returned to a fresh state, similar to a newly initialized Expo app.

This helped ensure that no stale cache or old build artifacts interfered with the app’s behavior.

3. Files Modified
app-example/app/(tabs)/index.tsx → updated welcome text.

README.md → contains scaffolding steps and reset-project observations.

app-example/constants/Colors.tsx → unchanged from template.
