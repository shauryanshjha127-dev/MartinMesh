# 📡 MartinMesh — Zero-Internet Tactical Mesh & Comms

> **Completely Offline. Zero Servers. Multi-Hop Radio Relay.**

MartinMesh is a decentralized, off-grid communication system engineered for real-time messaging, voice notes, and direct P2P audio/video calling across local devices without cellular towers, SIM cards, or an internet connection.

---

## ⚡ Core Features

- **🌐 Dual-Engine Topology:**
  - **High-Bandwidth Wi-Fi P2P (0–150m):** Direct camera streams, low-latency audio calls, and rich media packets.
  - **Low-Energy Multi-Hop Mesh (150–300m+):** Automatic packet jumping across intermediate nodes (up to 4 hops) with packet deduplication and TTL expiration.
- **🎙️ Tactical Voice Notes:** Integrated Push-To-Talk (PTT) audio recording powered by the MediaRecorder API and Base64 payload bundling.
- **📹 Direct P2P Calling:** Local WebRTC video and audio streaming interface designed for zero-internet environments.
- **📻 Channel / Group Routing:** Switch seamlessly between global broadcasts (`#300m-Broadcast`) and focused squad operations (`#Team-Alpha`, `#Squad-Bravo`).
- **🪪 Local Profiles & Avatars:** Fully offline identity configuration with local storage persistence and custom image uploads.
- **🔊 Procedural Audio FX:** Real-time tactical beeps and alerts generated on-the-fly via the Web Audio API without external audio files.
- **🔥 Ephemeral Privacy:** In-memory message handling architecture to prevent persistent tracking.

---

## 🏗️ Architecture & Technology Stack

| Layer | Technology |
| :--- | :--- |
| **Frontend UI / Styling** | HTML5, Tailwind CSS, FontAwesome |
| **Media & Audio Engine** | Web Audio API, MediaRecorder API, WebRTC |
| **Mobile Core (Android)** | Capacitor 6 |
| **Desktop Core (Windows)**| Electron 28 |
| **Continuous Integration** | GitHub Actions (Automated Cloud Artifacts) |

---

## 🚀 Getting Started

### 1. Android Installation
1. Navigate to the **Releases** or **Actions** tab of this repository.
2. Download the latest `MartinMesh-DualEngine-APK.zip` artifact.
3. Extract and install the `.apk` on your Android device.
4. Grant Camera and Microphone permissions on
