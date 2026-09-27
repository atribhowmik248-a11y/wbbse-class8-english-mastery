# WBBSE Class 8 English Mastery Hub 🎓

An interactive, voice-controlled pair-learning web application tailored for the **West Bengal Board of Secondary Education (WBBSE) Class 8 English curriculum**. Features **174 questions** covering *Blossoms* textbook Lessons 10–13 and core English Grammar topics, powered by **Groq Whisper V3 Speech-to-Text (STT)**, synthesized Web Audio feedback, 3D interactive flashcards, HTML5 drag-and-drop mechanics, and dual dark/light themes.

---

## ✨ Features

- **174 Comprehensive Questions**:
  - **Lesson 10**: *Tales of Childhood* by Roald Dahl (22 questions)
  - **Lesson 11**: *Midnight Express* by Alfred Noyes (22 questions)
  - **Lesson 12**: *Someone* by Walter de la Mare (20 questions)
  - **Lesson 13**: *The Man Who Planted Trees* by Jean Giono (22 questions)
  - **Grammar**: Prefix and Suffix (28 questions)
  - **Grammar**: Voice Change — Active to Passive across all tenses, imperatives, and interrogatives (30 questions)
  - **Grammar**: Articles and Prepositions (30 questions)
- **🎙️ Continuous Hands-Free Voice Control**:
  - Powered by **Groq Whisper V3** (`whisper-large-v3`) via high-speed STT.
  - Real-time **Voice Activity Detection (VAD)** with automatic ~650ms silence detection.
  - Infinite hands-free looping: speak consecutive commands (*"Option A"*, *"Next"*, *"Flip"*, *"Next"*) with zero clicks between questions.
  - Real-time animated audio waveform visualizer.
  - Audio Feedback Shield to prevent self-triggering from system chimes.
- **🎴 3D Interactive Flashcards**:
  - Realistic 3D card-flip animations (`preserve-3d`, `perspective: 1200px`).
  - Text-to-Speech (TTS) integration for listening to questions and choices aloud.
  - In-depth textbook citations and grammatical rule explanations on card flip.
- **🧩 Drag & Drop Fill-in-the-Blanks**:
  - Native HTML5 Drag and Drop API with responsive drop target zones.
  - Touchscreen and tap-to-place fallback for mobile devices.
  - Instant validation with confetti animations and sound effects.
- **🔊 Synthesized Web Audio Engine**:
  - Self-contained audio generated directly via the HTML5 `AudioContext` (no external MP3/WAV dependencies).
  - Melodic chimes, buzzers, card-flip swooshes, drag pops, drop snaps, and celebratory streak fanfares.
- **🌓 Dark & Light Themes**:
  - Modern sleek dark mode with neon accents and high-contrast light mode.
  - Top-right corner toggle button with persistence in `localStorage`.
- **📊 Study Tracking & Extras**:
  - Live progress bar, score counter, streak counter (`🔥`), and accuracy metrics.
  - Star / Bookmark questions for dedicated revision.
  - Question Navigator Directory grid (jump to any question 1–174).
  - Built-in Grammar Handbook and Chapter Summary revision drawer.

---

## 🛠 Tech Stack

- **HTML5** & **Tailwind CSS** (via CDN)
- **Vanilla JavaScript** (No external frameworks, lightweight, fast)
- **Web Audio API** (Sound synthesis + PCM audio capture)
- **Groq API & Whisper V3** (Cloud STT speech recognition)
- **Web Speech API** (Local speech synthesis TTS)

---

## 🚀 Local Run

Simply open `index.html` in any modern web browser (Google Chrome, Microsoft Edge, Mozilla Firefox, Apple Safari).

---

## 📄 License

MIT License. Designed for students and teachers of WBBSE Class 8 English.
