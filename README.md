# 📖 Read Aloud

**Read Aloud** is a simple and intuitive mobile application built with React Native. The app allows users to take a picture or select one from their device's media gallery, extract any readable text from the image using OCR (Optical Character Recognition), and have the text read aloud using text-to-speech functionality.

## 🚀 Features

- 📸 Capture a photo using the device camera
- 🖼 Select an image from the device's photo library
- 🔍 Extract text from images using OCR
- 🔊 Read extracted text aloud with a built-in text-to-speech engine
- 🌓 Clean and minimal UI with smooth user experience

## 🛠 Tech Stack

- **React Native** – Core mobile framework
- **Expo** – Simplified development and deployment
- **expo-image-picker** – Image selection from gallery
- **expo-speech** – Text-to-speech API
- **Image to Text API** – OCR text extraction

## 📦 Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/OyintarePaul/image-to-text-react-native.git
   cd image-to-text-react-native


2. **Install dependencies:**

   ```bash
   npm install


3. **Start the development server:**

   ```bash
   npx expo start


> Ensure you have [Node.js](https://nodejs.org/), [Expo CLI](https://docs.expo.dev/get-started/installation/), and a mobile emulator or Expo Go installed on your device.

## 📱 Usage

1. Launch the app.
2. Choose to either:

   * Take a new photo, or
   * Pick an image from your gallery.
3. Tap the "Convert Text" button to extract the text from the image.
4. Tap the "Read Aloud" button to hear the extracted text.

## 📁 Project Structure

```
read-aloud/
├── assets/                 # App assets (icons, splash, etc.)
├── components/             # Reusable UI components
├── screens/                # Screen components (e.g. Home, Camera, Result)
├── utils/                  # OCR and helper utilities
├── App.js                  # Entry point
└── README.md
```


## 🧪 Testing

Basic testing can be done through Expo Go by scanning the QR code from `npx expo start`.

## 📝 License

This project is licensed under the MIT License.

## 🙌 Acknowledgmentss

* [Expo](https://expo.dev/)
* [Image to Text API](https://apilayer.com/marketplace/image_to_text-api)
* [React Native Community](https://reactnative.dev/)

---

Feel free to contribute or submit issues if you encounter bugs or have feature suggestions!

```

