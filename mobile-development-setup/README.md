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
npx create-expo-app MyApp --template
cd MyApp

# Start development server
npx expo start
