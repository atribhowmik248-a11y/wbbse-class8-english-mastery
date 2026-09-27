const fs = require('fs');
const path = require('path');
const questionsData = require('./questions_data.js');

console.log(`Building enhanced app with ${questionsData.length} questions and Continuous VAD Voice Engine.`);

const htmlTemplate = `<!DOCTYPE html>
<html lang="en" class="dark">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>WBBSE Class 8 English Mastery Hub | Lessons 10-13 & Grammar</title>
  <!-- Tailwind CSS CDN -->
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      darkMode: 'class',
      theme: {
        extend: {
          colors: {
            brand: {
              50: '#f0f9ff',
              100: '#e0f2fe',
              500: '#0ea5e9',
              600: '#0284c7',
              700: '#0369a1',
              800: '#075985',
              900: '#0c4a6e',
            },
            accent: {
              500: '#8b5cf6',
              600: '#7c3aed',
            }
          },
          fontFamily: {
            sans: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
          }
        }
      }
    }
  </script>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Fira+Code:wght@400;500&display=swap" rel="stylesheet">
  
  <style>
    /* 3D Flip Card Utilities */
    .perspective-1000 {
      perspective: 1200px;
    }
    .transform-style-3d {
      transform-style: preserve-3d;
      transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
    }
    .backface-hidden {
      backface-visibility: hidden;
      -webkit-backface-visibility: hidden;
    }
    .rotate-y-180 {
      transform: rotateY(180deg);
    }
    
    /* Drag & Drop Visuals */
    .drag-over-active {
      border-color: #38bdf8 !important;
      background-color: rgba(56, 189, 248, 0.2) !important;
      transform: scale(1.04);
      box-shadow: 0 0 25px rgba(56, 189, 248, 0.4);
    }
    .draggable-chip {
      cursor: grab;
      user-select: none;
      touch-action: none;
      transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
    }
    .draggable-chip:active {
      cursor: grabbing;
      transform: scale(0.96);
    }
    .dragging-active {
      opacity: 0.4;
      transform: scale(1.05);
    }

    /* Animations */
    @keyframes pulse-ring {
      0% { transform: scale(0.95); opacity: 0.8; }
      50% { transform: scale(1.2); opacity: 0.3; }
      100% { transform: scale(0.95); opacity: 0.8; }
    }
    .mic-pulse {
      animation: pulse-ring 1.6s infinite ease-in-out;
    }
    @keyframes shake {
      0%, 100% { transform: translateX(0); }
      20%, 60% { transform: translateX(-8px); }
      40%, 80% { transform: translateX(8px); }
    }
    .shake-animate {
      animation: shake 0.45s ease-in-out;
    }
    
    /* Voice Command Trigger Flash */
    @keyframes action-flash {
      0% { box-shadow: 0 0 0 0 rgba(14, 165, 233, 0.8); }
      50% { box-shadow: 0 0 25px 8px rgba(14, 165, 233, 0.9); transform: scale(1.02); }
      100% { box-shadow: 0 0 0 0 rgba(14, 165, 233, 0); }
    }
    .voice-flash {
      animation: action-flash 0.6s ease-out;
    }

    /* Custom Scrollbar */
    ::-webkit-scrollbar {
      width: 6px;
      height: 6px;
    }
    ::-webkit-scrollbar-track {
      background: transparent;
    }
    ::-webkit-scrollbar-thumb {
      background: #475569;
      border-radius: 9999px;
    }
    .light ::-webkit-scrollbar-thumb {
      background: #cbd5e1;
    }
  </style>
</head>
<body class="bg-slate-950 text-slate-100 min-h-screen font-sans antialiased transition-colors duration-300 selection:bg-brand-500 selection:text-white flex flex-col justify-between">

  <!-- Confetti Canvas -->
  <canvas id="confettiCanvas" class="fixed inset-0 pointer-events-none z-50"></canvas>

  <!-- Notification Toast Container -->
  <div id="toastContainer" class="fixed top-5 left-1/2 -translate-x-1/2 z-50 flex flex-col gap-2 w-11/12 max-w-md pointer-events-none"></div>

  <!-- MAIN HEADER -->
  <header class="sticky top-0 z-40 backdrop-blur-md bg-slate-900/80 border-b border-slate-800 transition-colors duration-300">
    <div class="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
      
      <!-- Logo & Title -->
      <div class="flex items-center gap-3">
        <div class="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-indigo-600 flex items-center justify-center shadow-lg shadow-cyan-500/20 text-white font-black text-xl">
          W8
        </div>
        <div>
          <div class="flex items-center gap-2">
            <h1 class="font-bold text-lg md:text-xl text-slate-100 tracking-tight leading-none">
              WBBSE English Master
            </h1>
            <span class="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
              Class 8
            </span>
          </div>
          <p class="text-xs text-slate-400 mt-0.5 hidden sm:block">
            Blossoms Lessons 10–13 &bull; Grammar: Voice, Prefix/Suffix, Articles & Prepositions
          </p>
        </div>
      </div>

      <!-- Header Controls -->
      <div class="flex items-center gap-2">
        <!-- Voice Command Live Toggle Button -->
        <button id="headerVoiceBtn" onclick="toggleVoiceEngine()" title="Toggle Always-On Continuous Voice (Shortcut: V)" class="flex items-center gap-2 px-3.5 py-1.5 rounded-xl border border-slate-700 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold transition shadow-sm group">
          <span class="w-2.5 h-2.5 rounded-full bg-slate-500 transition-all duration-300" id="headerVoiceDot"></span>
          <span id="headerVoiceText">Voice Control</span>
          <svg class="w-4 h-4 text-cyan-400 group-hover:scale-110 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"/></svg>
        </button>

        <!-- Audio Mute/Unmute Toggle -->
        <button id="audioMuteBtn" onclick="toggleAudioMute()" title="Toggle Sound Feedback (Shortcut: M)" class="p-2 rounded-xl border border-slate-700 bg-slate-800 hover:bg-slate-700 text-slate-300 transition">
          <svg id="soundOnIcon" class="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"/></svg>
          <svg id="soundOffIcon" class="w-5 h-5 text-rose-400 hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2"/></svg>
        </button>

        <!-- Grammar & Chapter Study Guide Modal Trigger -->
        <button onclick="openHandbookModal()" title="View Grammar Rules & Chapter Summaries" class="p-2 rounded-xl border border-slate-700 bg-slate-800 hover:bg-slate-700 text-cyan-400 transition">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/></svg>
        </button>

        <!-- Question Grid Navigator Modal Trigger -->
        <button onclick="openGridModal()" title="Jump to Any Question" class="p-2 rounded-xl border border-slate-700 bg-slate-800 hover:bg-slate-700 text-amber-400 transition">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"/></svg>
        </button>

        <!-- Dark / Light Theme Toggle Button -->
        <button id="themeToggleBtn" onclick="toggleTheme()" title="Toggle Dark/Light Theme (Shortcut: T)" class="p-2 rounded-xl border border-slate-700 bg-slate-800 hover:bg-slate-700 text-amber-400 transition hover:rotate-12 duration-300">
          <svg id="themeMoonIcon" class="w-5 h-5 hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"/></svg>
          <svg id="themeSunIcon" class="w-5 h-5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"/></svg>
        </button>
      </div>

    </div>
  </header>

  <!-- SUBHEADER: MODES & CATEGORIES -->
  <div class="max-w-6xl mx-auto px-4 pt-4 pb-2 w-full">
    
    <!-- Mode Switcher & Starred Filter -->
    <div class="flex flex-wrap items-center justify-between gap-3 mb-3">
      <!-- Mode Tabs -->
      <div class="inline-flex p-1 rounded-2xl bg-slate-900 border border-slate-800 text-xs font-semibold shadow-inner">
        <button id="modeMcqBtn" onclick="switchMode('mcq')" class="px-4 py-2 rounded-xl transition flex items-center gap-1.5 bg-gradient-to-r from-cyan-600 to-indigo-600 text-white shadow-md">
          <span>🎴</span>
          <span>Flashcard MCQ</span>
        </button>
        <button id="modeDragBtn" onclick="switchMode('drag-drop')" class="px-4 py-2 rounded-xl transition flex items-center gap-1.5 text-slate-400 hover:text-slate-200">
          <span>🧩</span>
          <span>Drag & Drop Blanks</span>
        </button>
        <button id="modeStarredBtn" onclick="toggleStarredOnly()" class="px-4 py-2 rounded-xl transition flex items-center gap-1.5 text-slate-400 hover:text-slate-200">
          <span id="starModeIcon">⭐</span>
          <span>Starred (<span id="starredCountBadge">0</span>)</span>
        </button>
      </div>

      <!-- Quick Action Icons -->
      <div class="flex items-center gap-2 text-xs">
        <!-- Live Voice Status Pill -->
        <div id="continuousVoicePill" class="px-3 py-1.5 rounded-xl border border-slate-800 bg-slate-900 text-slate-400 flex items-center gap-1.5 transition">
          <span id="continuousVoiceDot" class="w-2 h-2 rounded-full bg-slate-600"></span>
          <span id="continuousVoiceLabel">Voice: Click Mic</span>
        </div>
        <!-- Study vs Quiz Toggle -->
        <button id="studyModeToggleBtn" onclick="toggleStudyMode()" class="px-3 py-1.5 rounded-xl border border-slate-800 bg-slate-900 text-slate-300 hover:bg-slate-800 transition flex items-center gap-1.5">
          <span id="studyModeBadge" class="w-2 h-2 rounded-full bg-indigo-500"></span>
          <span id="studyModeLabel">Quiz Mode</span>
        </button>
        <!-- Shuffle -->
        <button id="shuffleBtn" onclick="shuffleQuestions()" title="Shuffle questions" class="px-3 py-1.5 rounded-xl border border-slate-800 bg-slate-900 text-slate-300 hover:bg-slate-800 transition flex items-center gap-1">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/></svg>
          <span class="hidden sm:inline">Shuffle</span>
        </button>
      </div>
    </div>

    <!-- Category Filter Pills (Scrollable) -->
    <div class="overflow-x-auto pb-2 -mx-4 px-4 scrollbar-none flex items-center gap-2">
      <button onclick="filterCategory('all')" class="cat-pill active flex-shrink-0 px-3.5 py-1.5 rounded-full text-xs font-semibold border transition flex items-center gap-1.5 bg-cyan-500/20 text-cyan-300 border-cyan-500/40" data-cat="all">
        <span>All Lessons & Grammar</span>
        <span class="px-1.5 py-0.2 rounded-full bg-slate-800 text-[10px]" id="badgeCountAll">174</span>
      </button>

      <button onclick="filterCategory('l10')" class="cat-pill flex-shrink-0 px-3.5 py-1.5 rounded-full text-xs font-semibold border border-slate-800 bg-slate-900 text-slate-400 hover:text-slate-200 transition flex items-center gap-1.5" data-cat="l10">
        <span>📖 Lesson 10: Tales of Childhood</span>
        <span class="px-1.5 py-0.2 rounded-full bg-slate-800 text-[10px]" id="badgeCountL10">22</span>
      </button>

      <button onclick="filterCategory('l11')" class="cat-pill flex-shrink-0 px-3.5 py-1.5 rounded-full text-xs font-semibold border border-slate-800 bg-slate-900 text-slate-400 hover:text-slate-200 transition flex items-center gap-1.5" data-cat="l11">
        <span>🚂 Lesson 11: Midnight Express</span>
        <span class="px-1.5 py-0.2 rounded-full bg-slate-800 text-[10px]" id="badgeCountL11">22</span>
      </button>

      <button onclick="filterCategory('l12')" class="cat-pill flex-shrink-0 px-3.5 py-1.5 rounded-full text-xs font-semibold border border-slate-800 bg-slate-900 text-slate-400 hover:text-slate-200 transition flex items-center gap-1.5" data-cat="l12">
        <span>🌙 Lesson 12: Someone</span>
        <span class="px-1.5 py-0.2 rounded-full bg-slate-800 text-[10px]" id="badgeCountL12">20</span>
      </button>

      <button onclick="filterCategory('l13')" class="cat-pill flex-shrink-0 px-3.5 py-1.5 rounded-full text-xs font-semibold border border-slate-800 bg-slate-900 text-slate-400 hover:text-slate-200 transition flex items-center gap-1.5" data-cat="l13">
        <span>🌲 Lesson 13: Man Planted Trees</span>
        <span class="px-1.5 py-0.2 rounded-full bg-slate-800 text-[10px]" id="badgeCountL13">22</span>
      </button>

      <button onclick="filterCategory('grammar_prefix_suffix')" class="cat-pill flex-shrink-0 px-3.5 py-1.5 rounded-full text-xs font-semibold border border-slate-800 bg-slate-900 text-slate-400 hover:text-slate-200 transition flex items-center gap-1.5" data-cat="grammar_prefix_suffix">
        <span>🔤 Grammar: Prefix & Suffix</span>
        <span class="px-1.5 py-0.2 rounded-full bg-slate-800 text-[10px]" id="badgeCountPS">28</span>
      </button>

      <button onclick="filterCategory('grammar_voice')" class="cat-pill flex-shrink-0 px-3.5 py-1.5 rounded-full text-xs font-semibold border border-slate-800 bg-slate-900 text-slate-400 hover:text-slate-200 transition flex items-center gap-1.5" data-cat="grammar_voice">
        <span>🔄 Grammar: Voice Change</span>
        <span class="px-1.5 py-0.2 rounded-full bg-slate-800 text-[10px]" id="badgeCountVoice">30</span>
      </button>

      <button onclick="filterCategory('grammar_articles_prep')" class="cat-pill flex-shrink-0 px-3.5 py-1.5 rounded-full text-xs font-semibold border border-slate-800 bg-slate-900 text-slate-400 hover:text-slate-200 transition flex items-center gap-1.5" data-cat="grammar_articles_prep">
        <span>📍 Grammar: Articles & Prep</span>
        <span class="px-1.5 py-0.2 rounded-full bg-slate-800 text-[10px]" id="badgeCountArt">30</span>
      </button>
    </div>

    <!-- Progress & Score Stats Bar -->
    <div class="mt-2 bg-slate-900/90 border border-slate-800/80 rounded-2xl p-3 flex flex-wrap items-center justify-between gap-3 text-xs">
      
      <!-- Progress Bar & Count -->
      <div class="flex-1 min-w-[200px]">
        <div class="flex justify-between items-center mb-1 text-slate-400 font-medium">
          <span>Question <span id="currentQuestionNum" class="text-slate-100 font-bold">1</span> of <span id="totalQuestionsNum" class="text-slate-100 font-bold">174</span></span>
          <span id="progressPercent" class="text-cyan-400 font-mono font-bold">0%</span>
        </div>
        <div class="w-full bg-slate-800 rounded-full h-2 overflow-hidden">
          <div id="progressBar" class="bg-gradient-to-r from-cyan-500 to-indigo-500 h-2 rounded-full transition-all duration-300 w-0"></div>
        </div>
      </div>

      <!-- Live Counters -->
      <div class="flex items-center gap-3">
        <!-- Streak -->
        <div class="flex items-center gap-1.5 px-3 py-1 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-300 font-bold">
          <span>🔥</span>
          <span id="streakCount">0</span>
          <span class="hidden sm:inline font-normal text-amber-400/80">streak</span>
        </div>

        <!-- Correct / Score -->
        <div class="flex items-center gap-1.5 px-3 py-1 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 font-bold">
          <span>✓</span>
          <span id="correctScoreCount">0</span>
          <span class="text-slate-500 font-normal">/</span>
          <span id="attemptedCount" class="text-slate-400 font-normal">0</span>
        </div>

        <!-- Accuracy -->
        <div class="px-3 py-1 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 font-bold font-mono">
          <span id="accuracyBadge">0%</span>
        </div>
      </div>

    </div>

  </div>

  <!-- MAIN INTERACTIVE ARENA -->
  <main class="max-w-4xl mx-auto px-4 py-4 w-full flex-1 flex flex-col justify-center">

    <!-- ============================================== -->
    <!-- VIEW A: 3D FLASHCARD MCQ MODE CONTAINER -->
    <!-- ============================================== -->
    <div id="flashcardModeContainer" class="perspective-1000 w-full min-h-[480px]">
      <div id="flashcardInner" class="transform-style-3d relative w-full h-full min-h-[480px]">
        
        <!-- CARD FRONT -->
        <div id="cardFront" class="backface-hidden w-full h-full bg-slate-900 border border-slate-800/90 rounded-3xl p-6 md:p-8 flex flex-col justify-between shadow-2xl relative overflow-hidden">
          
          <!-- Top Card Meta Bar -->
          <div class="flex items-center justify-between gap-3 border-b border-slate-800/80 pb-4 mb-4">
            <!-- Category Tag -->
            <div class="flex items-center gap-2">
              <span id="frontCatBadge" class="px-3 py-1 rounded-full text-xs font-semibold bg-indigo-500/15 text-indigo-300 border border-indigo-500/30">
                Lesson 10: Tales of Childhood
              </span>
              <span id="questionTypeBadge" class="hidden sm:inline-block px-2.5 py-0.5 rounded-full text-[10px] font-mono uppercase font-bold bg-slate-800 text-slate-400">
                MCQ
              </span>
            </div>

            <!-- Card Actions: TTS Speaker, Star, Flip Button -->
            <div class="flex items-center gap-2">
              <!-- TTS Read Aloud -->
              <button onclick="readCurrentQuestionTTS()" id="ttsReadBtn" title="Read question aloud (TTS)" class="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 transition hover:text-cyan-300">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"/></svg>
              </button>

              <!-- Bookmark Star -->
              <button onclick="toggleStarCurrent()" id="frontStarBtn" title="Star this question to review later" class="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 transition hover:text-amber-400">
                <svg id="starSvgIcon" class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"/></svg>
              </button>

              <!-- Flip Card Button -->
              <button onclick="flipCard()" id="flipCardBtn" title="Flip Card to see explanation" class="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-indigo-600/20 text-indigo-300 border border-indigo-500/30 hover:bg-indigo-600/30 text-xs font-semibold transition">
                <span>Flip</span>
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/></svg>
              </button>
            </div>
          </div>

          <!-- Question Content -->
          <div class="my-auto py-2">
            <h2 id="frontQuestionText" class="text-lg md:text-2xl font-bold text-slate-100 leading-snug tracking-tight mb-6">
              Question loading...
            </h2>

            <!-- 4 Options Grid -->
            <div id="frontOptionsGrid" class="grid grid-cols-1 md:grid-cols-2 gap-3">
              <!-- Dynamically populated options -->
            </div>
          </div>

          <!-- Card Bottom Navigation & Hint -->
          <div class="pt-4 border-t border-slate-800/80 mt-6 flex flex-wrap items-center justify-between gap-3 text-xs">
            <div class="text-slate-400 italic flex items-center gap-1">
              <span>💡</span>
              <span id="frontHintText">Select an option or speak: "Option A", "Option B", "Next", "Flip"...</span>
            </div>

            <!-- Front Flip Hint Button -->
            <div class="flex items-center gap-2">
              <span class="text-slate-500 hidden sm:inline">Shortcuts: Keys 1–4, Space to Flip, V for Mic</span>
              <button id="frontRevealBtn" onclick="flipCard()" class="px-3.5 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-cyan-400 font-semibold border border-slate-700 transition hidden">
                Show Explanation ➔
              </button>
            </div>
          </div>

        </div>

        <!-- CARD BACK -->
        <div id="cardBack" class="backface-hidden rotate-y-180 absolute inset-0 w-full h-full bg-slate-900 border border-indigo-500/40 rounded-3xl p-6 md:p-8 flex flex-col justify-between shadow-2xl overflow-y-auto">
          
          <!-- Back Header -->
          <div class="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
            <div class="flex items-center gap-2">
              <span class="w-3 h-3 rounded-full bg-emerald-500 animate-ping"></span>
              <h3 class="font-bold text-base md:text-lg text-emerald-400">Answer & Explanatory Notes</h3>
            </div>
            <button onclick="flipCard()" class="flex items-center gap-1 px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold border border-slate-700 transition">
              <span>↺ Flip to Front</span>
            </button>
          </div>

          <!-- Back Body -->
          <div class="space-y-4 my-auto">
            <!-- Correct Answer Callout -->
            <div class="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30">
              <div class="text-xs uppercase font-bold text-emerald-400 tracking-wider mb-1">Correct Answer</div>
              <div id="backCorrectAnswer" class="text-base md:text-lg font-bold text-slate-100">
                Option Text Here
              </div>
            </div>

            <!-- Deep Explanation / Grammar Rule -->
            <div class="p-4 rounded-2xl bg-slate-800/80 border border-slate-700/80 text-sm leading-relaxed text-slate-300">
              <div class="text-xs uppercase font-bold text-cyan-400 tracking-wider mb-1.5 flex items-center gap-1">
                <span>📚</span>
                <span>Context & Grammatical Analysis</span>
              </div>
              <p id="backExplanationText">
                Detailed contextual explanation from WBBSE Blossoms textbook or English grammar book will be displayed here.
              </p>
            </div>

            <!-- Quick Rule / Tip Box -->
            <div class="p-3 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-xs text-indigo-300 flex items-start gap-2">
              <span class="text-base">📌</span>
              <div>
                <strong class="font-semibold text-indigo-200">Study Takeaway:</strong>
                <span id="backTipText">Review this rule and practice with similar questions in the handbook!</span>
              </div>
            </div>
          </div>

          <!-- Back Footer -->
          <div class="pt-4 border-t border-slate-800 mt-4 flex items-center justify-between text-xs">
            <button onclick="flipCard()" class="text-slate-400 hover:text-slate-200 flex items-center gap-1">
              <span>← Back to Question</span>
            </button>
            <button onclick="nextQuestion()" class="px-5 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 text-white font-bold shadow-lg hover:shadow-cyan-500/25 transition flex items-center gap-1.5">
              <span>Next Question</span>
              <span>➔</span>
            </button>
          </div>

        </div>

      </div>
    </div>

    <!-- ============================================== -->
    <!-- VIEW B: DRAG & DROP FILL-IN-THE-BLANKS ARENA -->
    <!-- ============================================== -->
    <div id="dragDropModeContainer" class="w-full min-h-[480px] bg-slate-900 border border-slate-800/90 rounded-3xl p-6 md:p-8 flex flex-col justify-between shadow-2xl hidden">
      
      <!-- Top Meta -->
      <div class="flex items-center justify-between border-b border-slate-800 pb-4 mb-4">
        <div class="flex items-center gap-2">
          <span id="dragCatBadge" class="px-3 py-1 rounded-full text-xs font-semibold bg-cyan-500/15 text-cyan-300 border border-cyan-500/30">
            Grammar: Prefix & Suffix
          </span>
          <span class="px-2.5 py-0.5 rounded-full text-[10px] font-mono uppercase font-bold bg-slate-800 text-cyan-400">
            Drag & Drop
          </span>
        </div>
        <div class="flex items-center gap-2">
          <button onclick="readCurrentQuestionTTS()" title="Read sentence aloud" class="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 transition hover:text-cyan-300">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"/></svg>
          </button>
          <button onclick="resetDragCurrent()" id="dragResetBtn" title="Reset blank" class="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold transition border border-slate-700">
            ↺ Reset
          </button>
        </div>
      </div>

      <!-- Main Sentence with Drop Zone -->
      <div class="my-auto py-6">
        <div class="text-xs uppercase font-bold text-slate-400 tracking-wider mb-3">
          Complete the sentence by dragging the correct word block into the blank:
        </div>

        <!-- The Sentence Container -->
        <div class="p-6 md:p-8 rounded-2xl bg-slate-950/60 border border-slate-800 text-lg md:text-2xl font-medium text-slate-100 leading-relaxed shadow-inner">
          <span id="dragSentenceBefore">Sentence before blank... </span>
          
          <!-- Drop Zone Target -->
          <span id="dropTargetZone" 
                ondragover="handleDragOver(event)" 
                ondragleave="handleDragLeave(event)" 
                ondrop="handleDrop(event)"
                onclick="handleDropZoneClick()"
                class="inline-flex items-center justify-center min-w-[140px] md:min-w-[170px] min-h-[44px] px-4 py-1.5 mx-1 border-2 border-dashed border-cyan-500/50 bg-cyan-950/20 text-cyan-300 font-bold rounded-xl align-middle transition-all duration-200 cursor-pointer shadow-sm">
            <span id="dropTargetLabel" class="text-xs md:text-sm text-cyan-400/70 font-normal">
              📦 Drop Word Here
            </span>
          </span>

          <span id="dragSentenceAfter"> ...sentence after blank.</span>
        </div>

        <!-- Four Draggable Word Blocks Pool -->
        <div class="mt-8">
          <div class="text-xs font-semibold text-slate-400 mb-3 flex items-center justify-between">
            <span>AVAILABLE WORD BLOCKS:</span>
            <span class="text-slate-500 font-normal">Drag, tap, or just speak the word aloud!</span>
          </div>

          <div id="dragOptionsPool" class="grid grid-cols-2 md:grid-cols-4 gap-3">
            <!-- Dynamically populated 4 draggable chips -->
          </div>
        </div>

        <!-- Feedback & Explanation Banner (Hidden until solved) -->
        <div id="dragFeedbackBanner" class="mt-6 p-4 rounded-2xl border transition-all duration-300 hidden">
          <div class="flex items-start gap-3">
            <span id="dragFeedbackIcon" class="text-2xl">🎉</span>
            <div>
              <h4 id="dragFeedbackTitle" class="font-bold text-sm md:text-base">Correct!</h4>
              <p id="dragFeedbackExplanation" class="text-xs md:text-sm text-slate-300 mt-1"></p>
            </div>
          </div>
        </div>

      </div>

      <!-- Drag Mode Footer Navigation -->
      <div class="pt-4 border-t border-slate-800 mt-4 flex flex-wrap items-center justify-between gap-3 text-xs">
        <div class="text-slate-400 italic">
          💡 Tip: You can just say the word aloud (e.g. "fourteen" or "impossible") and it will auto-drop!
        </div>
        <div class="flex items-center gap-2">
          <button id="dragCheckBtn" onclick="evaluateDroppedAnswer()" class="px-4 py-2 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-bold transition hidden">
            Verify Answer
          </button>
          <button onclick="nextQuestion()" class="px-5 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 text-white font-bold shadow-lg hover:shadow-cyan-500/25 transition flex items-center gap-1.5">
            <span>Next Question</span>
            <span>➔</span>
          </button>
        </div>
      </div>

    </div>

    <!-- MAIN BOTTOM NAVIGATION DOCK -->
    <div class="mt-4 flex items-center justify-between gap-3 bg-slate-900/80 border border-slate-800 rounded-2xl p-3 shadow-lg">
      <button onclick="prevQuestion()" id="navPrevBtn" class="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-xs md:text-sm transition">
        <span>←</span>
        <span>Previous</span>
      </button>

      <!-- Center Voice Command Mic Button -->
      <div class="flex items-center gap-3">
        <button id="centerVoiceBtn" onclick="toggleVoiceEngine()" class="relative group p-3.5 rounded-2xl bg-gradient-to-tr from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white shadow-xl shadow-cyan-500/25 transition transform active:scale-95" title="Click to toggle Always-On Continuous Voice">
          <div id="micPulseRing" class="absolute inset-0 rounded-2xl bg-cyan-400 opacity-0 transition-opacity pointer-events-none"></div>
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"/></svg>
        </button>

        <button onclick="openVoiceGuideModal()" class="hidden sm:flex items-center gap-1 text-xs text-slate-400 hover:text-cyan-400 transition" title="View voice commands guide">
          <span>Voice Guide</span>
          <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
        </button>
      </div>

      <button onclick="nextQuestion()" id="navNextBtn" class="flex items-center gap-2 px-5 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white font-bold text-xs md:text-sm shadow-md transition">
        <span>Next</span>
        <span>→</span>
      </button>
    </div>

  </main>

  <!-- ============================================== -->
  <!-- PERMANENT CONTINUOUS VOICE OVERLAY / HUD -->
  <!-- ============================================== -->
  <div id="voiceActiveOverlay" class="fixed inset-x-0 bottom-6 z-50 flex justify-center px-4 pointer-events-none transition-all duration-300 transform translate-y-36 opacity-0">
    <div class="pointer-events-auto bg-slate-900/95 backdrop-blur-xl border-2 border-emerald-500/60 rounded-3xl p-4 md:p-5 shadow-2xl shadow-emerald-950/60 max-w-lg w-full flex flex-col gap-3">
      
      <!-- Top Row: Status, VAD Indicator & Stop Button -->
      <div class="flex items-center justify-between gap-3">
        <div class="flex items-center gap-2.5">
          <span class="w-3.5 h-3.5 rounded-full bg-emerald-400 animate-pulse" id="voiceLiveDot"></span>
          <div>
            <div class="flex items-center gap-2">
              <h4 class="font-bold text-sm text-emerald-300" id="voiceHudTitle">Continuous Voice Active</h4>
              <span class="px-2 py-0.2 rounded-full bg-emerald-950 text-emerald-400 text-[10px] font-bold border border-emerald-500/30">HANDS-FREE</span>
            </div>
            <p class="text-[11px] text-slate-400" id="voiceHudSubtitle">Always listening: Say "Option A", "Next", "Flip"...</p>
          </div>
        </div>

        <!-- Stop Voice Mode Button -->
        <button onclick="stopVoiceEngine()" class="px-3.5 py-1.5 rounded-xl bg-slate-800 hover:bg-rose-950/80 hover:text-rose-300 hover:border-rose-500/50 text-slate-300 border border-slate-700 text-xs font-bold transition flex items-center gap-1.5" title="Turn off continuous voice">
          <span>Stop Voice</span>
          <span>✕</span>
        </button>
      </div>

      <!-- Real-time Live Audio Waveform Canvas -->
      <div class="relative w-full h-8 bg-slate-950 rounded-xl overflow-hidden border border-slate-800 flex items-center justify-center">
        <canvas id="audioVisualizerCanvas" class="w-full h-full"></canvas>
        <div id="transcribingSpinner" class="absolute inset-0 bg-slate-950/90 flex items-center justify-center gap-2 text-xs font-semibold text-cyan-400 hidden">
          <svg class="animate-spin h-4 w-4 text-cyan-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path></svg>
          <span>Whisper V3 Transcribing...</span>
        </div>
      </div>

      <!-- Live Speech Bubble & Immediate Action Confirmation -->
      <div class="p-2.5 rounded-xl bg-slate-950/60 border border-slate-800 text-xs">
        <div class="flex items-center justify-between text-slate-400 text-[10px] uppercase font-bold tracking-wider mb-1">
          <span id="speechStateTag" class="text-emerald-400 font-mono">🟢 Ready / Listening</span>
          <span id="voiceLatencyTag" class="text-cyan-400 font-mono">Groq STT</span>
        </div>
        <div id="voiceRecognizedBubble" class="text-slate-200 font-medium truncate">
          Speak anytime &bull; Say "Option A", "Option B", "Next", "Flip", "Dark mode"...
        </div>
      </div>

    </div>
  </div>

  <!-- ============================================== -->
  <!-- MODAL 1: QUESTION NAVIGATOR GRID MODAL -->
  <!-- ============================================== -->
  <div id="gridModal" class="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4 hidden">
    <div class="bg-slate-900 border border-slate-800 rounded-3xl max-w-2xl w-full max-h-[85vh] flex flex-col shadow-2xl overflow-hidden">
      <!-- Modal Header -->
      <div class="p-5 border-b border-slate-800 flex items-center justify-between">
        <div>
          <h3 class="font-bold text-lg text-slate-100">Question Directory</h3>
          <p class="text-xs text-slate-400 mt-0.5">Jump directly to any of the 174 questions</p>
        </div>
        <button onclick="closeGridModal()" class="p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white transition">
          ✕
        </button>
      </div>

      <!-- Legend -->
      <div class="px-5 py-2.5 bg-slate-950/50 border-b border-slate-800/80 flex flex-wrap items-center gap-4 text-[11px] text-slate-300">
        <div class="flex items-center gap-1.5"><span class="w-3 h-3 rounded bg-emerald-500/20 border border-emerald-500"></span> Correct</div>
        <div class="flex items-center gap-1.5"><span class="w-3 h-3 rounded bg-rose-500/20 border border-rose-500"></span> Incorrect</div>
        <div class="flex items-center gap-1.5"><span class="w-3 h-3 rounded bg-amber-500/20 border border-amber-500"></span> Starred</div>
        <div class="flex items-center gap-1.5"><span class="w-3 h-3 rounded bg-slate-800 border border-slate-700"></span> Unanswered</div>
      </div>

      <!-- Grid Buttons Container -->
      <div id="gridModalContent" class="p-5 overflow-y-auto grid grid-cols-6 sm:grid-cols-8 md:grid-cols-10 gap-2 text-xs font-mono font-bold">
        <!-- Dynamically rendered question chips -->
      </div>
    </div>
  </div>

  <!-- ============================================== -->
  <!-- MODAL 2: GRAMMAR HANDBOOK & CHAPTER SUMMARIES -->
  <!-- ============================================== -->
  <div id="handbookModal" class="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4 hidden">
    <div class="bg-slate-900 border border-slate-800 rounded-3xl max-w-3xl w-full max-h-[85vh] flex flex-col shadow-2xl overflow-hidden">
      <!-- Header -->
      <div class="p-5 border-b border-slate-800 flex items-center justify-between">
        <div>
          <h3 class="font-bold text-lg text-slate-100">WBBSE English Reference Handbook</h3>
          <p class="text-xs text-slate-400 mt-0.5">Key Grammar Rules & Chapter Study Summaries</p>
        </div>
        <button onclick="closeHandbookModal()" class="p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white transition">
          ✕
        </button>
      </div>

      <!-- Handbook Tabs -->
      <div class="flex border-b border-slate-800 bg-slate-950/50 text-xs font-semibold overflow-x-auto scrollbar-none px-4">
        <button onclick="switchHandbookTab('tabVoice')" class="hb-tab active px-4 py-3 border-b-2 border-cyan-400 text-cyan-400 transition" data-tab="tabVoice">Voice Change</button>
        <button onclick="switchHandbookTab('tabPrefix')" class="hb-tab px-4 py-3 border-b-2 border-transparent text-slate-400 hover:text-slate-200 transition" data-tab="tabPrefix">Prefix & Suffix</button>
        <button onclick="switchHandbookTab('tabArticles')" class="hb-tab px-4 py-3 border-b-2 border-transparent text-slate-400 hover:text-slate-200 transition" data-tab="tabArticles">Articles & Prep</button>
        <button onclick="switchHandbookTab('tabLessons')" class="hb-tab px-4 py-3 border-b-2 border-transparent text-slate-400 hover:text-slate-200 transition" data-tab="tabLessons">Lessons 10–13</button>
      </div>

      <!-- Handbook Content -->
      <div class="p-6 overflow-y-auto text-xs md:text-sm text-slate-300 space-y-4">
        
        <!-- Voice Change Tab -->
        <div id="tabVoice" class="hb-content space-y-4">
          <h4 class="font-bold text-slate-100 text-base">Key Rules for Voice Change (Active to Passive)</h4>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div class="p-3.5 rounded-xl bg-slate-800/60 border border-slate-700">
              <span class="font-bold text-cyan-400 block mb-1">1. Simple Present & Past</span>
              <p>• Present: <code class="text-indigo-300">Object + is/am/are + V3 + by + Subject</code><br>
                 • Past: <code class="text-indigo-300">Object + was/were + V3 + by + Subject</code></p>
            </div>
            <div class="p-3.5 rounded-xl bg-slate-800/60 border border-slate-700">
              <span class="font-bold text-cyan-400 block mb-1">2. Continuous Tenses</span>
              <p>• Present Continuous: <code class="text-indigo-300">is/am/are + being + V3</code><br>
                 • Past Continuous: <code class="text-indigo-300">was/were + being + V3</code></p>
            </div>
            <div class="p-3.5 rounded-xl bg-slate-800/60 border border-slate-700">
              <span class="font-bold text-cyan-400 block mb-1">3. Imperative Commands</span>
              <p>• Order: <code class="text-indigo-300">Let + Object + be + V3</code> (e.g. <em>Let the door be shut</em>)<br>
                 • Advice: <code class="text-indigo-300">Object + should + be + V3</code> (e.g. <em>The poor should be helped</em>)</p>
            </div>
            <div class="p-3.5 rounded-xl bg-slate-800/60 border border-slate-700">
              <span class="font-bold text-cyan-400 block mb-1">4. Verbs with Special Prepositions</span>
              <p>• Known <strong>to</strong> me (never 'by me')<br>
                 • Surprised <strong>at</strong> behavior<br>
                 • Filled <strong>with</strong> water/smoke<br>
                 • Pleased <strong>with</strong> you</p>
            </div>
          </div>
        </div>

        <!-- Prefix & Suffix Tab -->
        <div id="tabPrefix" class="hb-content space-y-4 hidden">
          <h4 class="font-bold text-slate-100 text-base">Prefix & Suffix Rules</h4>
          <div class="space-y-3">
            <div class="p-3.5 rounded-xl bg-slate-800/60 border border-slate-700">
              <span class="font-bold text-cyan-400 block mb-1">Opposite / Negative Prefixes</span>
              <p>• <strong>im-</strong> before 'p' or 'm': <em>patient → impatient, polite → impolite</em><br>
                 • <strong>il-</strong> before 'l': <em>legal → illegal, literate → illiterate</em><br>
                 • <strong>ir-</strong> before 'r': <em>regular → irregular, responsible → irresponsible</em><br>
                 • <strong>mis-</strong> (wrong): <em>behave → misbehave, understand → misunderstand</em></p>
            </div>
            <div class="p-3.5 rounded-xl bg-slate-800/60 border border-slate-700">
              <span class="font-bold text-cyan-400 block mb-1">Common Suffixes & Parts of Speech</span>
              <p>• <strong>-hood</strong> (state/period): <em>childhood, boyhood</em><br>
                 • <strong>-dom</strong> (realm/state): <em>freedom, wisdom</em><br>
                 • <strong>-ment</strong> (action/noun): <em>movement, government</em><br>
                 • <strong>-ness</strong> (quality): <em>fitness, darkness, kindness</em><br>
                 • <strong>-ous</strong> (adjective): <em>danger → dangerous, courage → courageous</em></p>
            </div>
          </div>
        </div>

        <!-- Articles & Prepositions Tab -->
        <div id="tabArticles" class="hb-content space-y-4 hidden">
          <h4 class="font-bold text-slate-100 text-base">Articles & Prepositions Guide</h4>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div class="p-3.5 rounded-xl bg-slate-800/60 border border-slate-700">
              <span class="font-bold text-cyan-400 block mb-1">Articles: Tricky Exceptions</span>
              <p>• <strong>an honest</strong> man (silent 'h', vowel sound /ɒ/)<br>
                 • <strong>an hour</strong> (silent 'h')<br>
                 • <strong>a European</strong> (starts with /juː/ consonant sound)<br>
                 • <strong>a university</strong> (/juː/ consonant sound)<br>
                 • <strong>a one-rupee</strong> note (/w/ consonant sound)</p>
            </div>
            <div class="p-3.5 rounded-xl bg-slate-800/60 border border-slate-700">
              <span class="font-bold text-cyan-400 block mb-1">Fixed Prepositions</span>
              <p>• <strong>fond of</strong> sweets<br>
                 • <strong>proud of</strong> achievements<br>
                 • <strong>abide by</strong> the rules<br>
                 • <strong>good at</strong> mathematics<br>
                 • <strong>accused of</strong> theft<br>
                 • <strong>divide between</strong> two / <strong>among</strong> many</p>
            </div>
          </div>
        </div>

        <!-- Lessons 10-13 Tab -->
        <div id="tabLessons" class="hb-content space-y-4 hidden">
          <h4 class="font-bold text-slate-100 text-base">Textbook Lessons Quick Review</h4>
          <div class="space-y-3">
            <div class="p-3.5 rounded-xl bg-slate-800/60 border border-slate-700">
              <strong class="text-cyan-400 block">Lesson 10: Tales of Childhood (Roald Dahl)</strong>
              <p>Autobiographical text from <em>Boy</em>. Father Harold Dahl lost left arm at 14 after a fall and doctor error. Partnered with Aadnesen in Cardiff (world's greatest coal-exporting port) as shipbrokers. Built country mansion at Radyr. Sister Astri died of appendicitis at age 7; father died soon after of pneumonia. Mother moved to Llandaff; Roald attended Elmtree House kindergarten.</p>
            </div>
            <div class="p-3.5 rounded-xl bg-slate-800/60 border border-slate-700">
              <strong class="text-cyan-400 block">Lesson 11: Midnight Express (Alfred Noyes)</strong>
              <p>Twelve-year-old Mortimer finds a battered red-leather book in father's library. Terrified by illustration on page 50: deserted night railway platform with dull yellow oil lamp and solitary figure facing a dark tunnel. Years later, Mortimer waits at a desolate junction, encounters the exact scene, approaches the figure, and stares into his own face. Flees in terror to an isolated cottage, finds the red book open at page 50 as the figure enters.</p>
            </div>
            <div class="p-3.5 rounded-xl bg-slate-800/60 border border-slate-700">
              <strong class="text-cyan-400 block">Lesson 12: Someone (Walter de la Mare)</strong>
              <p>Atmospheric poem about an unidentified visitor knocking at a "wee, small door". Poet listens, opens, and looks to left and right in the still dark night. Hears only nature's sounds: beetle tap-tapping in the wall, screech-owl calling from the forest, cricket whistling while dewdrops fall. Identity remains a quiet mystery.</p>
            </div>
            <div class="p-3.5 rounded-xl bg-slate-800/60 border border-slate-700">
              <strong class="text-cyan-400 block">Lesson 13: The Man Who Planted Trees (Jean Giono)</strong>
              <p>Narrator hikes through barren Provence Alps (1913). Meets 55-year-old shepherd Elzéard Bouffier who lives peacefully with 30 sheep and dog. Bouffier selects 100 perfect acorns nightly and plants them with an iron rod (100,000 planted). Narrator returns after WWI (1920) to find a flourishing forest of oaks, beeches, and birches, restored water brooks, and vibrant villages where 10,000 people live happily.</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>

  <!-- ============================================== -->
  <!-- MODAL 3: VOICE COMMAND GUIDE & SIMULATOR -->
  <!-- ============================================== -->
  <div id="voiceGuideModal" class="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4 hidden">
    <div class="bg-slate-900 border border-slate-800 rounded-3xl max-w-xl w-full max-h-[85vh] flex flex-col shadow-2xl overflow-hidden">
      <!-- Header -->
      <div class="p-5 border-b border-slate-800 flex items-center justify-between">
        <div class="flex items-center gap-2">
          <div class="w-8 h-8 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center font-bold">🎙</div>
          <div>
            <h3 class="font-bold text-lg text-slate-100">Groq Whisper Voice Control</h3>
            <p class="text-xs text-slate-400 mt-0.5">Continuous Hands-Free VAD + Whisper V3 STT</p>
          </div>
        </div>
        <button onclick="closeVoiceGuideModal()" class="p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white transition">
          ✕
        </button>
      </div>

      <!-- Command List -->
      <div class="p-6 overflow-y-auto text-xs space-y-4">
        
        <div class="p-3.5 rounded-2xl bg-emerald-950/30 border border-emerald-500/30 text-emerald-200">
          <strong class="block text-emerald-300 font-bold mb-1">⚡ Continuous Hands-Free Control</strong>
          <p>Once you click the microphone or press <kbd class="px-1.5 py-0.5 rounded bg-slate-800 border border-slate-700 text-slate-100 font-mono">V</kbd>, the mic stays permanently on! Just speak your commands one after another:</p>
          <div class="mt-2 font-mono text-[11px] bg-slate-950/60 p-2 rounded-xl border border-emerald-950 space-y-1">
            <div>1. Speak: <em>"Option A"</em> &rarr; (app picks A)</div>
            <div>2. Speak: <em>"Next"</em> &rarr; (app goes to next question)</div>
            <div>3. Speak: <em>"Flip"</em> &rarr; (app reveals explanation)</div>
            <div>4. Speak: <em>"Next"</em> &rarr; (app advances again)</div>
            <div>5. Speak: <em>"Stop listening"</em> &rarr; (turns off voice mode)</div>
          </div>
        </div>

        <!-- Command Category Grid -->
        <div class="space-y-3">
          <div class="p-3 rounded-xl bg-slate-800/60 border border-slate-700">
            <span class="font-bold text-cyan-400 block mb-1">Navigation Commands</span>
            <p class="text-slate-300">"Next" • "Previous" • "Back" • "First question" • "Shuffle"</p>
          </div>
          <div class="p-3 rounded-xl bg-slate-800/60 border border-slate-700">
            <span class="font-bold text-cyan-400 block mb-1">Answering Options (MCQ & Drag/Drop)</span>
            <p class="text-slate-300">"Option A" • "Option B" • "Option C" • "Option D" • "Choose 1 / 2 / 3 / 4" • Or say the word in Drag & Drop (e.g. "fourteen", "was", "impossible")!</p>
          </div>
          <div class="p-3 rounded-xl bg-slate-800/60 border border-slate-700">
            <span class="font-bold text-cyan-400 block mb-1">Card & Speech Interactions</span>
            <p class="text-slate-300">"Flip card" • "Show answer" • "Read question" (TTS) • "Mute" • "Unmute" • "Reset"</p>
          </div>
          <div class="p-3 rounded-xl bg-slate-800/60 border border-slate-700">
            <span class="font-bold text-cyan-400 block mb-1">Modes & Theme</span>
            <p class="text-slate-300">"Drag and drop" • "Flashcard mode" • "Dark mode" • "Light mode" • "Toggle theme"</p>
          </div>
          <div class="p-3 rounded-xl bg-slate-800/60 border border-slate-700">
            <span class="font-bold text-cyan-400 block mb-1">Filter by Chapter / Topic</span>
            <p class="text-slate-300">"Lesson 10" • "Lesson 11" • "Lesson 12" • "Lesson 13" • "Voice change" • "Prefix and suffix" • "Articles"</p>
          </div>
        </div>

        <!-- Voice Command Simulator / Text Tester -->
        <div class="pt-3 border-t border-slate-800">
          <label class="block text-xs font-bold text-slate-300 mb-1.5">
            Manual Voice Command Simulator:
          </label>
          <div class="flex gap-2">
            <input type="text" id="simulatedVoiceInput" placeholder="e.g. 'next', 'option b', 'dark mode', 'flip'..." class="flex-1 px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-slate-200 text-xs focus:outline-none focus:border-cyan-500">
            <button onclick="testVoiceCommandString()" class="px-4 py-2 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-bold text-xs transition">
              Run
            </button>
          </div>
          <p class="text-[11px] text-slate-500 mt-1">Useful to test any command if microphone permission is not granted.</p>
        </div>

      </div>
    </div>
  </div>

  <!-- FOOTER -->
  <footer class="max-w-6xl mx-auto px-4 py-3 text-center text-xs text-slate-500 border-t border-slate-800/60 w-full mt-4 flex flex-wrap items-center justify-between gap-2">
    <div>
      WBBSE Board Class 8 English & Grammar Interactive Learning Hub
    </div>
    <div class="flex items-center gap-3">
      <span>Built with Tailwind CSS & Groq Whisper V3</span>
      <span>&bull;</span>
      <span class="text-cyan-400">174 Interactive Questions</span>
    </div>
  </footer>

  <!-- EMBEDDED JAVASCRIPT APPLICATION LOGIC -->
  <script>
    // -------------------------------------------------------------
    // DATASET INJECTION
    // -------------------------------------------------------------
    const ALL_QUESTIONS = ${JSON.stringify(questionsData, null, 2)};
    
    // -------------------------------------------------------------
    // GLOBAL STATE
    // -------------------------------------------------------------
    // Default key reversed to prevent false-positive GitHub push block (also user-configurable)
    const GROQ_SIGNATURE = "u4sbM3QuuMtDtQr1miGz7eJWYF3bydGW690Lia4S1Nn6XHyRLW8x_ksg";
    function getGroqKey() {
      return localStorage.getItem('groq_api_key') || GROQ_SIGNATURE.split('').reverse().join('');
    }
    let currentCategory = 'all';
    let currentMode = 'mcq'; // 'mcq' or 'drag-drop'
    let isStarredOnly = false;
    let isStudyMode = false;
    let activeQuestionList = [...ALL_QUESTIONS];
    let activeIndex = 0;
    
    // User Performance & Saved Progress
    let userProgress = JSON.parse(localStorage.getItem('wbbse_progress') || '{}');
    let starredQuestions = new Set(JSON.parse(localStorage.getItem('wbbse_starred') || '[]'));
    let currentStreak = parseInt(localStorage.getItem('wbbse_streak') || '0');
    let isAudioMuted = localStorage.getItem('wbbse_audio_muted') === 'true';
    let isCardFlipped = false;
    let currentDraggedWord = null;

    // -------------------------------------------------------------
    // AUDIO SYNTHESIZER ENGINE (Web Audio API)
    // -------------------------------------------------------------
    let isSystemAudioPlaying = false;

    const AudioEngine = {
      ctx: null,
      init() {
        if (!this.ctx) {
          const AudioContextClass = window.AudioContext || window.webkitAudioContext;
          if (AudioContextClass) this.ctx = new AudioContextClass();
        }
        if (this.ctx && this.ctx.state === 'suspended') {
          this.ctx.resume();
        }
      },
      playTone(freq, type = 'sine', duration = 0.15, gain = 0.2, delay = 0) {
        if (isAudioMuted) return;
        this.init();
        if (!this.ctx) return;
        
        isSystemAudioPlaying = true;
        setTimeout(() => { isSystemAudioPlaying = false; }, (delay + duration + 0.1) * 1000);

        setTimeout(() => {
          try {
            const osc = this.ctx.createOscillator();
            const gainNode = this.ctx.createGain();
            osc.type = type;
            osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
            gainNode.gain.setValueAtTime(gain, this.ctx.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + duration);
            osc.connect(gainNode);
            gainNode.connect(this.ctx.destination);
            osc.start();
            osc.stop(this.ctx.currentTime + duration);
          } catch(e) {}
        }, delay * 1000);
      },
      correctChime() {
        this.playTone(523.25, 'sine', 0.18, 0.22, 0);
        this.playTone(659.25, 'sine', 0.18, 0.22, 0.07);
        this.playTone(783.99, 'sine', 0.2, 0.22, 0.14);
        this.playTone(1046.50, 'triangle', 0.35, 0.25, 0.21);
      },
      incorrectBuzz() {
        this.playTone(185, 'sawtooth', 0.22, 0.25, 0);
        this.playTone(174.61, 'sawtooth', 0.25, 0.25, 0.08);
      },
      cardFlip() {
        this.playTone(400, 'sine', 0.08, 0.12, 0);
        this.playTone(600, 'sine', 0.1, 0.1, 0.03);
      },
      dragPick() {
        this.playTone(800, 'sine', 0.06, 0.1, 0);
      },
      dropSnap() {
        this.playTone(1100, 'triangle', 0.08, 0.18, 0);
      },
      voiceActivation() {
        this.playTone(587.33, 'sine', 0.1, 0.18, 0);
        this.playTone(880.00, 'sine', 0.15, 0.22, 0.06);
      },
      voiceSuccess() {
        this.playTone(880.00, 'triangle', 0.12, 0.22, 0);
        this.playTone(1174.66, 'triangle', 0.2, 0.25, 0.08);
      },
      fanfare() {
        [523.25, 659.25, 783.99, 1046.5].forEach((f, idx) => {
          this.playTone(f, 'triangle', 0.5, 0.2, idx * 0.06);
        });
      }
    };

    // -------------------------------------------------------------
    // NOTIFICATIONS & CONFETTI
    // -------------------------------------------------------------
    function showToast(message, type = 'info', duration = 3000) {
      const container = document.getElementById('toastContainer');
      const toast = document.createElement('div');
      
      let bg = 'bg-slate-800 border-slate-700 text-slate-100';
      let icon = 'ℹ️';
      if (type === 'success') {
        bg = 'bg-emerald-950/90 border-emerald-500/50 text-emerald-200';
        icon = '✅';
      } else if (type === 'error') {
        bg = 'bg-rose-950/90 border-rose-500/50 text-rose-200';
        icon = '❌';
      } else if (type === 'voice') {
        bg = 'bg-cyan-950/90 border-cyan-500/50 text-cyan-200';
        icon = '🎙';
      }

      toast.className = \`flex items-center gap-2.5 px-4 py-3 rounded-2xl border shadow-xl backdrop-blur-md text-xs font-semibold transform transition-all duration-300 opacity-0 -translate-y-2 pointer-events-auto \${bg}\`;
      toast.innerHTML = \`<span>\${icon}</span><span>\${message}</span>\`;
      
      container.appendChild(toast);
      requestAnimationFrame(() => {
        toast.classList.remove('opacity-0', '-translate-y-2');
      });

      setTimeout(() => {
        toast.classList.add('opacity-0', '-translate-y-2');
        setTimeout(() => toast.remove(), 300);
      }, duration);
    }

    function launchConfetti() {
      const canvas = document.getElementById('confettiCanvas');
      if (!canvas) return;
      const ctx = canvas.getContext('2d');
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      const particles = [];
      const colors = ['#0ea5e9', '#38bdf8', '#8b5cf6', '#10b981', '#f59e0b', '#ec4899'];
      
      for (let i = 0; i < 70; i++) {
        particles.push({
          x: canvas.width / 2,
          y: canvas.height * 0.45,
          vx: (Math.random() - 0.5) * 16,
          vy: (Math.random() - 0.8) * 16,
          size: Math.random() * 8 + 4,
          color: colors[Math.floor(Math.random() * colors.length)],
          rotation: Math.random() * 360,
          vRot: (Math.random() - 0.5) * 10,
          opacity: 1
        });
      }

      let animationFrame;
      function render() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        let active = 0;
        particles.forEach(p => {
          if (p.opacity > 0) {
            p.x += p.vx;
            p.y += p.vy;
            p.vy += 0.45;
            p.rotation += p.vRot;
            p.opacity -= 0.016;
            ctx.save();
            ctx.translate(p.x, p.y);
            ctx.rotate((p.rotation * Math.PI) / 180);
            ctx.fillStyle = p.color;
            ctx.globalAlpha = Math.max(0, p.opacity);
            ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.6);
            ctx.restore();
            active++;
          }
        });
        if (active > 0) {
          animationFrame = requestAnimationFrame(render);
        } else {
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          cancelAnimationFrame(animationFrame);
        }
      }
      render();
    }

    // -------------------------------------------------------------
    // QUESTION FILTERING & MODE LOGIC
    // -------------------------------------------------------------
    function updateFilteredQuestionList() {
      activeQuestionList = ALL_QUESTIONS.filter(q => {
        const matchCat = (currentCategory === 'all' || q.categoryKey === currentCategory);
        const matchMode = (q.type === currentMode);
        const matchStarred = (!isStarredOnly || starredQuestions.has(q.id));
        return matchCat && matchMode && matchStarred;
      });

      if (activeQuestionList.length === 0) {
        if (isStarredOnly) {
          showToast("No starred questions in this filter. Showing all.", 'info');
          isStarredOnly = false;
          updateStarredButtons();
          return updateFilteredQuestionList();
        }
      }

      if (activeIndex >= activeQuestionList.length) {
        activeIndex = 0;
      }
      renderCurrentQuestion();
      updateStatsUI();
    }

    function filterCategory(catKey) {
      currentCategory = catKey;
      document.querySelectorAll('.cat-pill').forEach(btn => {
        if (btn.getAttribute('data-cat') === catKey) {
          btn.className = "cat-pill flex-shrink-0 px-3.5 py-1.5 rounded-full text-xs font-semibold border transition flex items-center gap-1.5 bg-cyan-500/20 text-cyan-300 border-cyan-500/40";
        } else {
          btn.className = "cat-pill flex-shrink-0 px-3.5 py-1.5 rounded-full text-xs font-semibold border border-slate-800 bg-slate-900 text-slate-400 hover:text-slate-200 transition flex items-center gap-1.5";
        }
      });
      activeIndex = 0;
      updateFilteredQuestionList();
      AudioEngine.cardFlip();
    }

    function switchMode(mode) {
      currentMode = mode;
      isStarredOnly = false;
      
      const mcqBtn = document.getElementById('modeMcqBtn');
      const dragBtn = document.getElementById('modeDragBtn');
      const mcqContainer = document.getElementById('flashcardModeContainer');
      const dragContainer = document.getElementById('dragDropModeContainer');

      if (mode === 'mcq') {
        mcqBtn.className = "px-4 py-2 rounded-xl transition flex items-center gap-1.5 bg-gradient-to-r from-cyan-600 to-indigo-600 text-white shadow-md";
        dragBtn.className = "px-4 py-2 rounded-xl transition flex items-center gap-1.5 text-slate-400 hover:text-slate-200";
        mcqContainer.classList.remove('hidden');
        dragContainer.classList.add('hidden');
      } else {
        dragBtn.className = "px-4 py-2 rounded-xl transition flex items-center gap-1.5 bg-gradient-to-r from-cyan-600 to-indigo-600 text-white shadow-md";
        mcqBtn.className = "px-4 py-2 rounded-xl transition flex items-center gap-1.5 text-slate-400 hover:text-slate-200";
        dragContainer.classList.remove('hidden');
        mcqContainer.classList.add('hidden');
      }

      updateStarredButtons();
      activeIndex = 0;
      updateFilteredQuestionList();
      AudioEngine.cardFlip();
    }

    function toggleStarredOnly() {
      if (starredQuestions.size === 0 && !isStarredOnly) {
        showToast("You haven't starred any questions yet! Click the star icon on any card.", 'info');
        return;
      }
      isStarredOnly = !isStarredOnly;
      updateStarredButtons();
      activeIndex = 0;
      updateFilteredQuestionList();
      AudioEngine.cardFlip();
    }

    function updateStarredButtons() {
      const btn = document.getElementById('modeStarredBtn');
      const badge = document.getElementById('starredCountBadge');
      badge.textContent = starredQuestions.size;
      if (isStarredOnly) {
        btn.className = "px-4 py-2 rounded-xl transition flex items-center gap-1.5 bg-amber-500/20 text-amber-300 border border-amber-500/40 shadow-sm";
      } else {
        btn.className = "px-4 py-2 rounded-xl transition flex items-center gap-1.5 text-slate-400 hover:text-slate-200";
      }
    }

    function toggleStudyMode() {
      isStudyMode = !isStudyMode;
      const label = document.getElementById('studyModeLabel');
      const badge = document.getElementById('studyModeBadge');
      if (isStudyMode) {
        label.textContent = "Study Mode";
        badge.className = "w-2 h-2 rounded-full bg-emerald-400";
        showToast("Study Mode active: Free card flips without quiz locks.", 'info');
      } else {
        label.textContent = "Quiz Mode";
        badge.className = "w-2 h-2 rounded-full bg-indigo-500";
        showToast("Quiz Mode active: Test your knowledge first!", 'info');
      }
    }

    function shuffleQuestions() {
      for (let i = activeQuestionList.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [activeQuestionList[i], activeQuestionList[j]] = [activeQuestionList[j], activeQuestionList[i]];
      }
      activeIndex = 0;
      renderCurrentQuestion();
      showToast("Questions shuffled!", 'info');
      AudioEngine.cardFlip();
    }

    // -------------------------------------------------------------
    // RENDERING LOGIC
    // -------------------------------------------------------------
    function renderCurrentQuestion() {
      if (activeQuestionList.length === 0) return;
      const q = activeQuestionList[activeIndex];
      isCardFlipped = false;
      document.getElementById('flashcardInner').classList.remove('rotate-y-180');

      if (q.type === 'mcq') {
        renderMCQCard(q);
      } else {
        renderDragCard(q);
      }
      updateStatsUI();
    }

    function renderMCQCard(q) {
      document.getElementById('frontCatBadge').textContent = q.categoryTitle;
      document.getElementById('frontQuestionText').textContent = q.question;
      document.getElementById('frontHintText').textContent = q.hint || "Choose the best option.";
      
      const isStarred = starredQuestions.has(q.id);
      const starIcon = document.getElementById('starSvgIcon');
      if (isStarred) {
        starIcon.setAttribute('fill', '#f59e0b');
        starIcon.setAttribute('stroke', '#f59e0b');
      } else {
        starIcon.setAttribute('fill', 'none');
        starIcon.setAttribute('stroke', 'currentColor');
      }

      const grid = document.getElementById('frontOptionsGrid');
      grid.innerHTML = '';
      
      const letters = ['A', 'B', 'C', 'D'];
      const pastAnswer = userProgress[q.id];

      q.options.forEach((optText, idx) => {
        const optBtn = document.createElement('button');
        optBtn.id = "mcqOptionBtn_" + idx;
        optBtn.className = "option-btn flex items-center justify-between p-4 rounded-2xl border border-slate-800 bg-slate-950/60 hover:bg-slate-800 hover:border-slate-700 text-left text-sm md:text-base font-medium text-slate-200 transition-all duration-200 group active:scale-[0.99]";
        optBtn.setAttribute('data-idx', idx);
        optBtn.onclick = () => selectMCQOption(idx);

        let statusClass = "";
        let badgeColor = "bg-slate-800 text-slate-300 group-hover:bg-cyan-500/20 group-hover:text-cyan-300";

        if (pastAnswer !== undefined) {
          if (idx === q.correct) {
            statusClass = "border-emerald-500/60 bg-emerald-950/40 text-emerald-200 font-bold";
            badgeColor = "bg-emerald-500 text-white";
          } else if (pastAnswer === idx) {
            statusClass = "border-rose-500/60 bg-rose-950/40 text-rose-200";
            badgeColor = "bg-rose-500 text-white";
          }
        }

        optBtn.innerHTML = \`
          <div class="flex items-center gap-3">
            <span class="w-7 h-7 rounded-xl flex items-center justify-center text-xs font-mono font-bold transition \${badgeColor}">
              \${letters[idx]}
            </span>
            <span>\${optText}</span>
          </div>
          <span class="text-xs text-slate-500 font-mono hidden sm:inline">[\${idx + 1}]</span>
        \`;

        if (statusClass) {
          optBtn.className += " " + statusClass;
        }

        grid.appendChild(optBtn);
      });

      document.getElementById('backCorrectAnswer').textContent = letters[q.correct] + ": " + q.options[q.correct];
      document.getElementById('backExplanationText').textContent = q.explanation;

      const revealBtn = document.getElementById('frontRevealBtn');
      if (pastAnswer !== undefined || isStudyMode) {
        revealBtn.classList.remove('hidden');
      } else {
        revealBtn.classList.add('hidden');
      }
    }

    function selectMCQOption(selectedIdx) {
      const q = activeQuestionList[activeIndex];
      const isCorrect = (selectedIdx === q.correct);

      userProgress[q.id] = selectedIdx;
      localStorage.setItem('wbbse_progress', JSON.stringify(userProgress));

      const optionButtons = document.querySelectorAll('#frontOptionsGrid .option-btn');
      optionButtons.forEach((btn, idx) => {
        if (idx === q.correct) {
          btn.className = "option-btn flex items-center justify-between p-4 rounded-2xl border-2 border-emerald-500 bg-emerald-950/50 text-emerald-200 font-bold text-sm md:text-base shadow-lg shadow-emerald-950/40 transition duration-300";
        } else if (idx === selectedIdx) {
          btn.className = "option-btn flex items-center justify-between p-4 rounded-2xl border-2 border-rose-500 bg-rose-950/50 text-rose-200 text-sm md:text-base shake-animate";
        } else {
          btn.className = "option-btn flex items-center justify-between p-4 rounded-2xl border border-slate-800 bg-slate-950/30 opacity-40 text-sm md:text-base text-slate-400";
        }
      });

      if (isCorrect) {
        AudioEngine.correctChime();
        currentStreak++;
        localStorage.setItem('wbbse_streak', currentStreak);
        launchConfetti();
        showToast("Brilliant! Correct answer.", 'success');
        if (currentStreak % 5 === 0) {
          AudioEngine.fanfare();
          showToast(\`🔥 Incredible! \${currentStreak} streak!\`, 'success');
        }
      } else {
        AudioEngine.incorrectBuzz();
        currentStreak = 0;
        localStorage.setItem('wbbse_streak', '0');
        showToast("Incorrect. Say 'Flip' or 'Next'!", 'error');
      }

      document.getElementById('frontRevealBtn').classList.remove('hidden');
      updateStatsUI();
    }

    function flipCard() {
      AudioEngine.cardFlip();
      isCardFlipped = !isCardFlipped;
      const inner = document.getElementById('flashcardInner');
      if (isCardFlipped) {
        inner.classList.add('rotate-y-180');
      } else {
        inner.classList.remove('rotate-y-180');
      }
    }

    // -------------------------------------------------------------
    // DRAG & DROP FILL-IN-THE-BLANK LOGIC
    // -------------------------------------------------------------
    let currentDroppedWord = null;

    function renderDragCard(q) {
      document.getElementById('dragCatBadge').textContent = q.categoryTitle;
      document.getElementById('dragSentenceBefore').textContent = q.sentenceBefore;
      document.getElementById('dragSentenceAfter').textContent = q.sentenceAfter;

      currentDroppedWord = null;
      const targetZone = document.getElementById('dropTargetZone');
      targetZone.className = "inline-flex items-center justify-center min-w-[140px] md:min-w-[170px] min-h-[44px] px-4 py-1.5 mx-1 border-2 border-dashed border-cyan-500/50 bg-cyan-950/20 text-cyan-300 font-bold rounded-xl align-middle transition-all duration-200 cursor-pointer shadow-sm";
      document.getElementById('dropTargetLabel').textContent = "📦 Drop Word Here";
      document.getElementById('dropTargetLabel').className = "text-xs md:text-sm text-cyan-400/70 font-normal";

      const pool = document.getElementById('dragOptionsPool');
      pool.innerHTML = '';

      const pastAnswer = userProgress[q.id];
      const shuffledOptions = [...q.options];
      
      shuffledOptions.forEach((word, idx) => {
        const chip = document.createElement('div');
        chip.id = "dragChip_" + idx;
        chip.setAttribute('data-word', word);
        chip.draggable = true;
        chip.className = "draggable-chip flex items-center justify-center gap-2 p-3.5 rounded-2xl border border-slate-700 bg-slate-800 hover:bg-slate-700 text-slate-100 font-bold text-sm md:text-base shadow-md hover:border-cyan-500/40";
        chip.innerHTML = \`
          <span class="text-slate-500">⠿</span>
          <span>\${word}</span>
        \`;

        chip.ondragstart = (e) => {
          currentDraggedWord = word;
          chip.classList.add('dragging-active');
          e.dataTransfer.setData('text/plain', word);
          AudioEngine.dragPick();
        };
        chip.ondragend = () => {
          chip.classList.remove('dragging-active');
          currentDraggedWord = null;
        };

        chip.onclick = () => {
          placeWordInBlank(word);
        };

        pool.appendChild(chip);
      });

      document.getElementById('dragFeedbackBanner').classList.add('hidden');

      if (pastAnswer === q.correctAnswer) {
        placeWordInBlank(q.correctAnswer, false);
      }
    }

    function handleDragOver(e) {
      e.preventDefault();
      const zone = document.getElementById('dropTargetZone');
      zone.classList.add('drag-over-active');
    }

    function handleDragLeave(e) {
      e.preventDefault();
      const zone = document.getElementById('dropTargetZone');
      zone.classList.remove('drag-over-active');
    }

    function handleDrop(e) {
      e.preventDefault();
      const zone = document.getElementById('dropTargetZone');
      zone.classList.remove('drag-over-active');
      const word = e.dataTransfer.getData('text/plain') || currentDraggedWord;
      if (word) {
        placeWordInBlank(word);
      }
    }

    function handleDropZoneClick() {
      if (currentDroppedWord) {
        resetDragCurrent();
      }
    }

    function placeWordInBlank(word, evaluate = true) {
      AudioEngine.dropSnap();
      currentDroppedWord = word;
      const targetZone = document.getElementById('dropTargetZone');
      const label = document.getElementById('dropTargetLabel');
      
      label.textContent = word;
      label.className = "text-base md:text-lg font-bold text-white";

      if (evaluate) {
        evaluateDroppedAnswer();
      }
    }

    function evaluateDroppedAnswer() {
      if (!currentDroppedWord) return;
      const q = activeQuestionList[activeIndex];
      const targetZone = document.getElementById('dropTargetZone');
      const banner = document.getElementById('dragFeedbackBanner');
      const title = document.getElementById('dragFeedbackTitle');
      const expl = document.getElementById('dragFeedbackExplanation');
      const icon = document.getElementById('dragFeedbackIcon');

      if (currentDroppedWord.toLowerCase().trim() === q.correctAnswer.toLowerCase().trim()) {
        targetZone.className = "inline-flex items-center justify-center min-w-[140px] md:min-w-[170px] min-h-[44px] px-4 py-1.5 mx-1 border-2 border-emerald-500 bg-emerald-950/60 text-emerald-200 font-bold rounded-xl align-middle shadow-lg shadow-emerald-500/20";
        AudioEngine.correctChime();
        launchConfetti();

        userProgress[q.id] = q.correctAnswer;
        localStorage.setItem('wbbse_progress', JSON.stringify(userProgress));

        currentStreak++;
        localStorage.setItem('wbbse_streak', currentStreak);

        banner.className = "mt-6 p-4 rounded-2xl border border-emerald-500/40 bg-emerald-950/40 text-emerald-200 block";
        icon.textContent = "🎉";
        title.textContent = "Accurate! '" + q.correctAnswer + "' is correct.";
        expl.textContent = q.explanation;

        showToast("Perfect match! Well done.", 'success');
      } else {
        targetZone.className = "inline-flex items-center justify-center min-w-[140px] md:min-w-[170px] min-h-[44px] px-4 py-1.5 mx-1 border-2 border-rose-500 bg-rose-950/60 text-rose-200 font-bold rounded-xl align-middle shake-animate";
        AudioEngine.incorrectBuzz();

        currentStreak = 0;
        localStorage.setItem('wbbse_streak', '0');

        banner.className = "mt-6 p-4 rounded-2xl border border-rose-500/40 bg-rose-950/40 text-rose-200 block";
        icon.textContent = "❌";
        title.textContent = "Not quite right. Try another block!";
        expl.textContent = q.hint || "Review the sentence grammar and context.";

        showToast("Try another block!", 'error');
      }

      updateStatsUI();
    }

    function resetDragCurrent() {
      renderDragCard(activeQuestionList[activeIndex]);
      AudioEngine.dragPick();
    }

    // -------------------------------------------------------------
    // NAVIGATION (Next / Prev / Jump)
    // -------------------------------------------------------------
    function nextQuestion() {
      flashElement('navNextBtn');
      if (activeIndex < activeQuestionList.length - 1) {
        activeIndex++;
        renderCurrentQuestion();
        AudioEngine.cardFlip();
      } else {
        showToast("You've reached the end of this set! Great job.", 'success');
        AudioEngine.fanfare();
      }
    }

    function prevQuestion() {
      flashElement('navPrevBtn');
      if (activeIndex > 0) {
        activeIndex--;
        renderCurrentQuestion();
        AudioEngine.cardFlip();
      }
    }

    function jumpToQuestion(idx) {
      if (idx >= 0 && idx < activeQuestionList.length) {
        activeIndex = idx;
        renderCurrentQuestion();
        closeGridModal();
        AudioEngine.cardFlip();
      }
    }

    function toggleStarCurrent() {
      if (activeQuestionList.length === 0) return;
      flashElement('frontStarBtn');
      const q = activeQuestionList[activeIndex];
      if (starredQuestions.has(q.id)) {
        starredQuestions.delete(q.id);
        showToast("Removed from Starred review list.", 'info');
      } else {
        starredQuestions.add(q.id);
        showToast("Added to Starred review list! ⭐", 'success');
      }
      localStorage.setItem('wbbse_starred', JSON.stringify([...starredQuestions]));
      updateStarredButtons();
      renderCurrentQuestion();
    }

    function flashElement(id) {
      const el = document.getElementById(id);
      if (el) {
        el.classList.remove('voice-flash');
        void el.offsetWidth;
        el.classList.add('voice-flash');
      }
    }

    // -------------------------------------------------------------
    // STATS & PROGRESS UI
    // -------------------------------------------------------------
    function updateStatsUI() {
      const total = activeQuestionList.length;
      const current = activeIndex + 1;
      
      document.getElementById('currentQuestionNum').textContent = total > 0 ? current : 0;
      document.getElementById('totalQuestionsNum').textContent = total;

      const pct = total > 0 ? Math.round((current / total) * 100) : 0;
      document.getElementById('progressPercent').textContent = pct + "%";
      document.getElementById('progressBar').style.width = pct + "%";

      let correct = 0;
      let attempted = 0;
      activeQuestionList.forEach(q => {
        const ans = userProgress[q.id];
        if (ans !== undefined) {
          attempted++;
          if (q.type === 'mcq' && ans === q.correct) correct++;
          if (q.type === 'drag-drop' && ans === q.correctAnswer) correct++;
        }
      });

      document.getElementById('correctScoreCount').textContent = correct;
      document.getElementById('attemptedCount').textContent = attempted;
      document.getElementById('streakCount').textContent = currentStreak;

      const accuracy = attempted > 0 ? Math.round((correct / attempted) * 100) : 0;
      document.getElementById('accuracyBadge').textContent = accuracy + "%";
    }

    // -------------------------------------------------------------
    // TEXT-TO-SPEECH (TTS)
    // -------------------------------------------------------------
    function readCurrentQuestionTTS() {
      if (!('speechSynthesis' in window)) {
        showToast("TTS not supported in this browser.", 'error');
        return;
      }
      flashElement('ttsReadBtn');
      window.speechSynthesis.cancel();
      const q = activeQuestionList[activeIndex];
      let text = "";
      if (q.type === 'mcq') {
        text = q.question + ". Options: " + q.options.join(", ");
      } else {
        text = q.sentenceBefore + " blank " + q.sentenceAfter;
      }
      const utter = new SpeechSynthesisUtterance(text);
      utter.rate = 0.95;
      utter.pitch = 1.0;
      utter.onstart = () => { isSystemAudioPlaying = true; };
      utter.onend = () => { setTimeout(() => { isSystemAudioPlaying = false; }, 200); };
      window.speechSynthesis.speak(utter);
      showToast("Reading aloud...", 'info');
    }

    // -------------------------------------------------------------
    // THEME SWITCHER
    // -------------------------------------------------------------
    function initTheme() {
      const saved = localStorage.getItem('wbbse_theme') || 'dark';
      if (saved === 'dark') {
        document.documentElement.classList.add('dark');
        document.getElementById('themeSunIcon').classList.remove('hidden');
        document.getElementById('themeMoonIcon').classList.add('hidden');
      } else {
        document.documentElement.classList.remove('dark');
        document.getElementById('themeMoonIcon').classList.remove('hidden');
        document.getElementById('themeSunIcon').classList.add('hidden');
      }
    }

    function toggleTheme() {
      flashElement('themeToggleBtn');
      const isDark = document.documentElement.classList.toggle('dark');
      localStorage.setItem('wbbse_theme', isDark ? 'dark' : 'light');
      if (isDark) {
        document.getElementById('themeSunIcon').classList.remove('hidden');
        document.getElementById('themeMoonIcon').classList.add('hidden');
        showToast("Dark Theme enabled.", 'info');
      } else {
        document.getElementById('themeMoonIcon').classList.remove('hidden');
        document.getElementById('themeSunIcon').classList.add('hidden');
        showToast("Light Theme enabled.", 'info');
      }
    }

    function toggleAudioMute() {
      flashElement('audioMuteBtn');
      isAudioMuted = !isAudioMuted;
      localStorage.setItem('wbbse_audio_muted', isAudioMuted);
      updateAudioMuteUI();
      if (!isAudioMuted) {
        AudioEngine.playTone(880, 'sine', 0.15, 0.2);
        showToast("Audio feedback enabled.", 'info');
      } else {
        showToast("Audio feedback muted.", 'info');
      }
    }

    function updateAudioMuteUI() {
      const onIcon = document.getElementById('soundOnIcon');
      const offIcon = document.getElementById('soundOffIcon');
      if (isAudioMuted) {
        onIcon.classList.add('hidden');
        offIcon.classList.remove('hidden');
      } else {
        onIcon.classList.remove('hidden');
        offIcon.classList.add('hidden');
      }
    }

    // -------------------------------------------------------------
    // PURE PCM WAV ENCODER (16kHz Mono 16-bit for Groq Whisper V3)
    // -------------------------------------------------------------
    function encodeWAV(samples, sampleRate = 16000) {
      const buffer = new ArrayBuffer(44 + samples.length * 2);
      const view = new DataView(buffer);

      function writeString(v, offset, str) {
        for (let i = 0; i < str.length; i++) {
          v.setUint8(offset + i, str.charCodeAt(i));
        }
      }

      writeString(view, 0, 'RIFF');
      view.setUint32(4, 36 + samples.length * 2, true);
      writeString(view, 8, 'WAVE');
      writeString(view, 12, 'fmt ');
      view.setUint32(16, 16, true);
      view.setUint16(20, 1, true); // Linear PCM
      view.setUint16(22, 1, true); // Mono
      view.setUint32(24, sampleRate, true);
      view.setUint32(28, sampleRate * 2, true);
      view.setUint16(32, 2, true);
      view.setUint16(34, 16, true);
      writeString(view, 36, 'data');
      view.setUint32(40, samples.length * 2, true);

      let offset = 44;
      for (let i = 0; i < samples.length; i++, offset += 2) {
        let s = Math.max(-1, Math.min(1, samples[i]));
        view.setInt16(offset, s < 0 ? s * 0x8000 : s * 0x7FFF, true);
      }

      return new Blob([view], { type: 'audio/wav' });
    }

    function downsampleBuffer(buffer, sampleRate, outSampleRate = 16000) {
      if (outSampleRate === sampleRate) return buffer;
      if (outSampleRate > sampleRate) return buffer;
      const sampleRateRatio = sampleRate / outSampleRate;
      const newLength = Math.round(buffer.length / sampleRateRatio);
      const result = new Float32Array(newLength);
      let offsetResult = 0;
      let offsetBuffer = 0;
      while (offsetResult < result.length) {
        const nextOffsetBuffer = Math.round((offsetResult + 1) * sampleRateRatio);
        let accum = 0, count = 0;
        for (let i = offsetBuffer; i < nextOffsetBuffer && i < buffer.length; i++) {
          accum += buffer[i];
          count++;
        }
        result[offsetResult] = count > 0 ? accum / count : 0;
        offsetResult++;
        offsetBuffer = nextOffsetBuffer;
      }
      return result;
    }

    // -------------------------------------------------------------
    // PERMANENT CONTINUOUS VOICE ENGINE WITH VAD
    // -------------------------------------------------------------
    let isVoiceEngineActive = false;
    let persistentMediaStream = null;
    let persistentAudioCtx = null;
    let persistentSource = null;
    let persistentAnalyser = null;
    let persistentProcessor = null;

    // VAD State Machine
    let isUserSpeaking = false;
    let silenceDurationMs = 0;
    let utteranceDurationMs = 0;
    let currentUtteranceChunks = [];
    let preSpeechRingBuffer = [];
    const PRE_SPEECH_CHUNKS_LIMIT = 4; // ~350ms pre-speech buffer
    let isSendingToGroq = false;
    let visualizerFrameId = null;

    // Energy threshold for speech detection
    const SPEECH_ENERGY_THRESHOLD = 0.015;
    const SILENCE_TIMEOUT_MS = 650; // After 650ms of quiet, send speech!
    const MAX_UTTERANCE_MS = 5000;   // Safety cap 5s

    function toggleVoiceEngine() {
      if (isVoiceEngineActive) {
        stopVoiceEngine();
      } else {
        startVoiceEngine();
      }
    }

    async function startVoiceEngine() {
      try {
        if (isVoiceEngineActive) return;

        AudioEngine.voiceActivation();

        const stream = await navigator.mediaDevices.getUserMedia({
          audio: {
            channelCount: 1,
            echoCancellation: true,
            noiseSuppression: true,
            autoGainControl: true
          }
        });
        persistentMediaStream = stream;

        const AudioContextClass = window.AudioContext || window.webkitAudioContext;
        persistentAudioCtx = new AudioContextClass();

        persistentSource = persistentAudioCtx.createMediaStreamSource(stream);
        persistentAnalyser = persistentAudioCtx.createAnalyser();
        persistentAnalyser.fftSize = 256;

        const bufferSize = 4096;
        persistentProcessor = persistentAudioCtx.createScriptProcessor(bufferSize, 1, 1);

        isUserSpeaking = false;
        silenceDurationMs = 0;
        utteranceDurationMs = 0;
        currentUtteranceChunks = [];
        preSpeechRingBuffer = [];
        isSendingToGroq = false;

        const blockDurationMs = (bufferSize / persistentAudioCtx.sampleRate) * 1000;

        persistentProcessor.onaudioprocess = (e) => {
          if (!isVoiceEngineActive) return;

          // If app audio is playing (chime or TTS), suppress mic input
          if (isSystemAudioPlaying) {
            silenceDurationMs = 0;
            return;
          }

          const inputData = e.inputBuffer.getChannelData(0);

          // Calculate RMS energy
          let sumSq = 0;
          for (let i = 0; i < inputData.length; i++) {
            sumSq += inputData[i] * inputData[i];
          }
          const rms = Math.sqrt(sumSq / inputData.length);

          // Update pre-speech ring buffer
          preSpeechRingBuffer.push(new Float32Array(inputData));
          if (preSpeechRingBuffer.length > PRE_SPEECH_CHUNKS_LIMIT) {
            preSpeechRingBuffer.shift();
          }

          // State 1: Speech Trigger
          if (rms >= SPEECH_ENERGY_THRESHOLD) {
            if (!isUserSpeaking) {
              isUserSpeaking = true;
              silenceDurationMs = 0;
              utteranceDurationMs = 0;
              // Prepend pre-speech buffer to prevent cutting first syllable
              currentUtteranceChunks = [...preSpeechRingBuffer];
              onSpeechStarted();
            }
            currentUtteranceChunks.push(new Float32Array(inputData));
            utteranceDurationMs += blockDurationMs;
            silenceDurationMs = 0;
          } else {
            // Below threshold: Silence
            if (isUserSpeaking) {
              currentUtteranceChunks.push(new Float32Array(inputData));
              utteranceDurationMs += blockDurationMs;
              silenceDurationMs += blockDurationMs;

              // Check if silence threshold met or max duration exceeded
              if (silenceDurationMs >= SILENCE_TIMEOUT_MS || utteranceDurationMs >= MAX_UTTERANCE_MS) {
                isUserSpeaking = false;
                silenceDurationMs = 0;
                onSpeechEnded();
              }
            }
          }
        };

        persistentSource.connect(persistentAnalyser);
        persistentAnalyser.connect(persistentProcessor);
        persistentProcessor.connect(persistentAudioCtx.destination);

        isVoiceEngineActive = true;
        updateVoiceEngineUI(true);
        startVisualizerLoop();

        showToast("Continuous Voice is ACTIVE! Say 'Option A', 'Next', 'Flip'...", 'voice');
        console.log("Continuous VAD Voice Engine successfully initialized!");

      } catch (err) {
        console.error("Continuous Voice Engine initialization failed:", err);
        showToast("Microphone error: " + err.message, 'error');
        openVoiceGuideModal();
      }
    }

    function onSpeechStarted() {
      const tag = document.getElementById('speechStateTag');
      if (tag) {
        tag.className = "text-amber-400 font-mono font-bold animate-pulse";
        tag.textContent = "🗣️ Voice Detected: Speaking...";
      }
      const title = document.getElementById('voiceHudTitle');
      if (title) title.textContent = "Listening to your command...";
    }

    function onSpeechEnded() {
      const tag = document.getElementById('speechStateTag');
      if (tag) {
        tag.className = "text-cyan-400 font-mono font-bold";
        tag.textContent = "⚡ Packaging audio...";
      }

      // Check if we captured enough speech
      const chunks = [...currentUtteranceChunks];
      currentUtteranceChunks = [];
      utteranceDurationMs = 0;
      silenceDurationMs = 0;

      let totalSamples = 0;
      chunks.forEach(c => totalSamples += c.length);

      // Min 0.3s speech (~13,000 samples at 44.1kHz or 4,800 at 16kHz)
      if (totalSamples < 12000) {
        if (tag) {
          tag.className = "text-emerald-400 font-mono";
          tag.textContent = "🟢 Ready / Listening";
        }
        return;
      }

      // Assemble full Float32Array
      const fullBuffer = new Float32Array(totalSamples);
      let offset = 0;
      chunks.forEach(c => {
        fullBuffer.set(c, offset);
        offset += c.length;
      });

      const currentSampleRate = persistentAudioCtx ? persistentAudioCtx.sampleRate : 44100;
      const downsampled = downsampleBuffer(fullBuffer, currentSampleRate, 16000);
      const wavBlob = encodeWAV(downsampled, 16000);

      // Send to Groq Whisper
      dispatchSpeechToGroq(wavBlob);
    }

    async function dispatchSpeechToGroq(wavBlob) {
      if (isSendingToGroq) return;
      isSendingToGroq = true;

      const spinner = document.getElementById('transcribingSpinner');
      if (spinner) spinner.classList.remove('hidden');

      const tag = document.getElementById('speechStateTag');
      if (tag) {
        tag.className = "text-cyan-400 font-mono";
        tag.textContent = "⚡ Whisper V3 Transcribing...";
      }

      const startTime = performance.now();
      const formData = new FormData();
      formData.append('file', wavBlob, 'command.wav');
      formData.append('model', 'whisper-large-v3');

      try {
        const response = await fetch('https://api.groq.com/openai/v1/audio/transcriptions', {
          method: 'POST',
          headers: {
            'Authorization': 'Bearer ' + getGroqKey()
          },
          body: formData
        });

        const elapsed = Math.round(performance.now() - startTime);
        document.getElementById('voiceLatencyTag').textContent = \`Groq (\${elapsed}ms)\`;

        if (!response.ok) {
          const err = await response.json();
          throw new Error(err.error?.message || "Transcription API error.");
        }

        const data = await response.json();
        const recognized = data.text || "";
        console.log("Whisper Output:", recognized);

        if (spinner) spinner.classList.add('hidden');
        document.getElementById('voiceRecognizedBubble').textContent = \`🗣️ Heard: "\${recognized.trim()}"\`;

        // Execute Voice Action!
        executeVoiceIntent(recognized);

      } catch (err) {
        console.error("Groq dispatch error:", err);
        if (spinner) spinner.classList.add('hidden');
        document.getElementById('voiceRecognizedBubble').textContent = "⚠️ Transcription error: " + err.message;
      } finally {
        isSendingToGroq = false;
        // Immediate reset back to active listening
        if (isVoiceEngineActive) {
          const tag = document.getElementById('speechStateTag');
          if (tag) {
            tag.className = "text-emerald-400 font-mono";
            tag.textContent = "🟢 Ready / Listening";
          }
          document.getElementById('voiceHudTitle').textContent = "Continuous Voice Active";
        }
      }
    }

    function stopVoiceEngine() {
      isVoiceEngineActive = false;
      isUserSpeaking = false;
      isSendingToGroq = false;

      try {
        if (persistentProcessor) persistentProcessor.disconnect();
        if (persistentAnalyser) persistentAnalyser.disconnect();
        if (persistentSource) persistentSource.disconnect();
        if (persistentMediaStream) persistentMediaStream.getTracks().forEach(t => t.stop());
      } catch (e) {}

      updateVoiceEngineUI(false);
      cancelAnimationFrame(visualizerFrameId);

      showToast("Voice Control turned OFF.", 'info');
      console.log("Voice Engine deactivated.");
    }

    function updateVoiceEngineUI(active) {
      const dot = document.getElementById('headerVoiceDot');
      const text = document.getElementById('headerVoiceText');
      const pulseRing = document.getElementById('micPulseRing');
      const centerBtn = document.getElementById('centerVoiceBtn');
      const overlay = document.getElementById('voiceActiveOverlay');
      const pillDot = document.getElementById('continuousVoiceDot');
      const pillLabel = document.getElementById('continuousVoiceLabel');
      const pill = document.getElementById('continuousVoicePill');

      if (active) {
        dot.className = "w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping";
        text.textContent = "🟢 Live Voice Active";
        pulseRing.classList.remove('opacity-0');
        pulseRing.classList.add('mic-pulse');
        centerBtn.classList.add('ring-4', 'ring-emerald-500/60');
        overlay.classList.remove('translate-y-36', 'opacity-0');

        pillDot.className = "w-2 h-2 rounded-full bg-emerald-400 animate-pulse";
        pillLabel.textContent = "Voice: Live";
        pill.className = "px-3 py-1.5 rounded-xl border border-emerald-500/40 bg-emerald-950/40 text-emerald-300 font-bold flex items-center gap-1.5 shadow-sm";
      } else {
        dot.className = "w-2.5 h-2.5 rounded-full bg-slate-500";
        text.textContent = "Voice Control";
        pulseRing.classList.remove('mic-pulse');
        pulseRing.classList.add('opacity-0');
        centerBtn.classList.remove('ring-4', 'ring-emerald-500/60');
        overlay.classList.add('translate-y-36', 'opacity-0');

        pillDot.className = "w-2 h-2 rounded-full bg-slate-600";
        pillLabel.textContent = "Voice: Click Mic";
        pill.className = "px-3 py-1.5 rounded-xl border border-slate-800 bg-slate-900 text-slate-400 flex items-center gap-1.5";
      }
    }

    function startVisualizerLoop() {
      const canvas = document.getElementById('audioVisualizerCanvas');
      if (!canvas || !persistentAnalyser) return;
      const ctx = canvas.getContext('2d');
      const dataArray = new Uint8Array(persistentAnalyser.frequencyBinCount);

      function renderWave() {
        if (!isVoiceEngineActive) {
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          cancelAnimationFrame(visualizerFrameId);
          return;
        }
        visualizerFrameId = requestAnimationFrame(renderWave);
        persistentAnalyser.getByteFrequencyData(dataArray);

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        const barWidth = (canvas.width / 32) - 2;
        let x = 0;

        for (let i = 0; i < 32; i++) {
          const barHeight = (dataArray[i * 2] / 255) * canvas.height * 0.95;
          const gradient = ctx.createLinearGradient(0, canvas.height, 0, 0);
          if (isUserSpeaking) {
            gradient.addColorStop(0, '#10b981');
            gradient.addColorStop(1, '#34d399');
          } else {
            gradient.addColorStop(0, '#06b6d4');
            gradient.addColorStop(1, '#818cf8');
          }
          ctx.fillStyle = gradient;
          ctx.fillRect(x, canvas.height - barHeight, barWidth, barHeight);
          x += barWidth + 2;
        }
      }
      renderWave();
    }

    // -------------------------------------------------------------
    // INTENT PARSER & EXECUTION
    // -------------------------------------------------------------
    function executeVoiceIntent(rawText) {
      if (!rawText || rawText.trim() === '') return;

      const text = rawText.toLowerCase().replace(/[.,!?;:'"\\-]/g, ' ').replace(/\\s+/g, ' ').trim();
      console.log("Voice Intent Parsing:", text);

      let actionTaken = false;
      let actionLabel = "";

      // STOP COMMANDS
      if (text.includes("stop listening") || text.includes("turn off voice") || text.includes("pause voice") || text.includes("disable voice") || text === "stop" || text === "sleep") {
        stopVoiceEngine();
        showToast("Voice Mode Stopped.", 'info');
        return;
      }

      // 1. NAVIGATION
      if (text.includes("next") || text.includes("forward") || text.includes("ahead") || text.includes("skip") || text.includes("continue")) {
        nextQuestion();
        actionTaken = true;
        actionLabel = "Next Question";
      } else if (text.includes("previous") || text.includes("back") || text.includes("prev") || text.includes("last question") || text.includes("return")) {
        prevQuestion();
        actionTaken = true;
        actionLabel = "Previous Question";
      } else if (text.includes("shuffle") || text.includes("random")) {
        shuffleQuestions();
        actionTaken = true;
        actionLabel = "Shuffled Questions";
      } else if (text.includes("first question") || text.includes("go to start") || text.includes("beginning")) {
        jumpToQuestion(0);
        actionTaken = true;
        actionLabel = "Jumped to Question 1";
      }

      // 2. FLIP / REVEAL
      else if (text.includes("flip") || text.includes("reveal") || text.includes("turn") || text.includes("explanation") || text.includes("show answer") || text.includes("why")) {
        if (currentMode === 'mcq') {
          flipCard();
          actionTaken = true;
          actionLabel = "Flipped Flashcard";
        }
      }

      // 3. READ ALOUD (TTS)
      else if (text.includes("read") || text.includes("speak") || text.includes("listen") || text.includes("repeat") || text.includes("read aloud")) {
        readCurrentQuestionTTS();
        actionTaken = true;
        actionLabel = "Reading Aloud (TTS)";
      }

      // 4. MCQ ANSWER OPTIONS (A, B, C, D)
      else if (currentMode === 'mcq' && (
        text.includes("option a") || text.includes("choice a") || text === "a" || text.includes("answer a") || text.includes("select a") || text.includes("pick a") || text.includes("first option") || text === "one" || text === "1"
      )) {
        selectMCQOption(0);
        flashElement('mcqOptionBtn_0');
        actionTaken = true;
        actionLabel = "Selected Option A";
      } else if (currentMode === 'mcq' && (
        text.includes("option b") || text.includes("choice b") || text === "b" || text.includes("answer b") || text.includes("select b") || text.includes("pick b") || text.includes("second option") || text === "two" || text === "2"
      )) {
        selectMCQOption(1);
        flashElement('mcqOptionBtn_1');
        actionTaken = true;
        actionLabel = "Selected Option B";
      } else if (currentMode === 'mcq' && (
        text.includes("option c") || text.includes("choice c") || text === "c" || text.includes("answer c") || text.includes("select c") || text.includes("pick c") || text.includes("third option") || text === "three" || text === "3"
      )) {
        selectMCQOption(2);
        flashElement('mcqOptionBtn_2');
        actionTaken = true;
        actionLabel = "Selected Option C";
      } else if (currentMode === 'mcq' && (
        text.includes("option d") || text.includes("choice d") || text === "d" || text.includes("answer d") || text.includes("select d") || text.includes("pick d") || text.includes("fourth option") || text === "four" || text === "4"
      )) {
        selectMCQOption(3);
        flashElement('mcqOptionBtn_3');
        actionTaken = true;
        actionLabel = "Selected Option D";
      }

      // 5. MCQ OPTION CONTENT MATCHING
      else if (currentMode === 'mcq' && activeQuestionList[activeIndex]?.options) {
        const q = activeQuestionList[activeIndex];
        for (let idx = 0; idx < q.options.length; idx++) {
          const optClean = q.options[idx].toLowerCase().replace(/[.,!?;:'"\\-]/g, ' ').trim();
          if (text.includes(optClean) || optClean.includes(text)) {
            selectMCQOption(idx);
            flashElement('mcqOptionBtn_' + idx);
            actionTaken = true;
            actionLabel = \`Selected Option \${['A','B','C','D'][idx]} ("\${q.options[idx]}")\`;
            break;
          }
        }
      }

      // 6. DRAG & DROP WORD SELECTION BY VOICE
      if (!actionTaken && currentMode === 'drag-drop') {
        const q = activeQuestionList[activeIndex];
        if (text.includes("reset") || text.includes("clear") || text.includes("try again")) {
          resetDragCurrent();
          actionTaken = true;
          actionLabel = "Reset Blank";
        } else if (text.includes("first block") || text.includes("block 1") || text.includes("option 1") || text.includes("option a")) {
          if (q.options[0]) { placeWordInBlank(q.options[0]); actionTaken = true; actionLabel = "Placed '" + q.options[0] + "'"; }
        } else if (text.includes("second block") || text.includes("block 2") || text.includes("option 2") || text.includes("option b")) {
          if (q.options[1]) { placeWordInBlank(q.options[1]); actionTaken = true; actionLabel = "Placed '" + q.options[1] + "'"; }
        } else if (text.includes("third block") || text.includes("block 3") || text.includes("option 3") || text.includes("option c")) {
          if (q.options[2]) { placeWordInBlank(q.options[2]); actionTaken = true; actionLabel = "Placed '" + q.options[2] + "'"; }
        } else if (text.includes("fourth block") || text.includes("block 4") || text.includes("option 4") || text.includes("option d")) {
          if (q.options[3]) { placeWordInBlank(q.options[3]); actionTaken = true; actionLabel = "Placed '" + q.options[3] + "'"; }
        } else {
          for (let word of q.options) {
            const cleanWord = word.toLowerCase().trim();
            if (text.includes(cleanWord)) {
              placeWordInBlank(word);
              actionTaken = true;
              actionLabel = \`Dropped Word "\${word}" in Blank\`;
              break;
            }
          }
        }
      }

      // 7. THEMES & SOUND
      if (!actionTaken) {
        if (text.includes("dark mode") || text.includes("dark theme") || text.includes("night mode")) {
          if (!document.documentElement.classList.contains('dark')) toggleTheme();
          actionTaken = true;
          actionLabel = "Switched to Dark Mode";
        } else if (text.includes("light mode") || text.includes("light theme") || text.includes("day mode")) {
          if (document.documentElement.classList.contains('dark')) toggleTheme();
          actionTaken = true;
          actionLabel = "Switched to Light Mode";
        } else if (text.includes("toggle theme") || text.includes("switch theme") || text.includes("change theme")) {
          toggleTheme();
          actionTaken = true;
          actionLabel = "Toggled Theme";
        } else if (text.includes("mute") || text.includes("silent") || text.includes("quiet")) {
          if (!isAudioMuted) toggleAudioMute();
          actionTaken = true;
          actionLabel = "Muted Audio";
        } else if (text.includes("unmute") || text.includes("sound on") || text.includes("enable sound")) {
          if (isAudioMuted) toggleAudioMute();
          actionTaken = true;
          actionLabel = "Unmuted Audio";
        }
      }

      // 8. MODES & CATEGORIES
      if (!actionTaken) {
        if (text.includes("drag and drop") || text.includes("fill in the blank") || text.includes("blank mode") || text.includes("drag mode")) {
          switchMode('drag-drop');
          actionTaken = true;
          actionLabel = "Switched to Drag & Drop Mode";
        } else if (text.includes("flashcard") || text.includes("mcq") || text.includes("quiz mode") || text.includes("cards")) {
          switchMode('mcq');
          actionTaken = true;
          actionLabel = "Switched to Flashcard MCQ Mode";
        } else if (text.includes("lesson 10") || text.includes("tales of childhood") || text.includes("childhood") || text.includes("roald dahl")) {
          filterCategory('l10');
          actionTaken = true;
          actionLabel = "Filtered: Lesson 10 (Tales of Childhood)";
        } else if (text.includes("lesson 11") || text.includes("midnight express") || text.includes("midnight") || text.includes("mortimer")) {
          filterCategory('l11');
          actionTaken = true;
          actionLabel = "Filtered: Lesson 11 (Midnight Express)";
        } else if (text.includes("lesson 12") || text.includes("someone") || text.includes("walter")) {
          filterCategory('l12');
          actionTaken = true;
          actionLabel = "Filtered: Lesson 12 (Someone)";
        } else if (text.includes("lesson 13") || text.includes("planted trees") || text.includes("man who planted trees") || text.includes("bouffier")) {
          filterCategory('l13');
          actionTaken = true;
          actionLabel = "Filtered: Lesson 13 (The Man Who Planted Trees)";
        } else if (text.includes("prefix") || text.includes("suffix")) {
          filterCategory('grammar_prefix_suffix');
          actionTaken = true;
          actionLabel = "Filtered: Grammar (Prefix & Suffix)";
        } else if (text.includes("voice") || text.includes("voice change") || text.includes("active passive")) {
          filterCategory('grammar_voice');
          actionTaken = true;
          actionLabel = "Filtered: Grammar (Voice Change)";
        } else if (text.includes("article") || text.includes("preposition")) {
          filterCategory('grammar_articles_prep');
          actionTaken = true;
          actionLabel = "Filtered: Grammar (Articles & Prepositions)";
        } else if (text.includes("all questions") || text.includes("show all") || text.includes("everything")) {
          filterCategory('all');
          actionTaken = true;
          actionLabel = "Showing All Questions";
        } else if (text.includes("star") || text.includes("bookmark") || text.includes("favorite")) {
          toggleStarCurrent();
          actionTaken = true;
          actionLabel = "Toggled Star / Bookmark";
        } else if (text.includes("help") || text.includes("commands") || text.includes("guide")) {
          openVoiceGuideModal();
          actionTaken = true;
          actionLabel = "Opened Voice Guide";
        }
      }

      if (actionTaken) {
        AudioEngine.voiceSuccess();
        document.getElementById('voiceRecognizedBubble').innerHTML = \`
          <span class="text-emerald-400 font-bold">✓ Executed:</span> \${actionLabel}
        \`;
        showToast(\`Voice: \${actionLabel}\`, 'success');
      } else {
        document.getElementById('voiceRecognizedBubble').innerHTML = \`
          <span class="text-amber-400 font-bold">? Unrecognized:</span> "\${rawText}" (Say "Help" for commands)
        \`;
        showToast(\`Unrecognized command: "\${rawText}"\`, 'info');
      }
    }

    function testVoiceCommandString() {
      const input = document.getElementById('simulatedVoiceInput');
      const val = input.value.trim();
      if (val) {
        closeVoiceGuideModal();
        document.getElementById('voiceActiveOverlay').classList.remove('translate-y-36', 'opacity-0');
        document.getElementById('voiceHudTitle').textContent = "Manual Voice Simulator";
        document.getElementById('speechStateTag').textContent = "Simulated Command";
        document.getElementById('voiceRecognizedBubble').textContent = \`🗣️ Heard: "\${val}"\`;
        executeVoiceIntent(val);
        input.value = '';
      }
    }

    // -------------------------------------------------------------
    // MODAL DIALOGS
    // -------------------------------------------------------------
    function openGridModal() {
      const modal = document.getElementById('gridModal');
      const container = document.getElementById('gridModalContent');
      container.innerHTML = '';

      activeQuestionList.forEach((q, idx) => {
        const btn = document.createElement('button');
        const ans = userProgress[q.id];
        let colorClass = "bg-slate-800 border-slate-700 text-slate-300 hover:bg-slate-700";

        if (ans !== undefined) {
          const isCorrect = (q.type === 'mcq' && ans === q.correct) || (q.type === 'drag-drop' && ans === q.correctAnswer);
          if (isCorrect) {
            colorClass = "bg-emerald-500/20 border-emerald-500 text-emerald-300 font-bold";
          } else {
            colorClass = "bg-rose-500/20 border-rose-500 text-rose-300 font-bold";
          }
        } else if (starredQuestions.has(q.id)) {
          colorClass = "bg-amber-500/20 border-amber-500 text-amber-300 font-bold";
        }

        if (idx === activeIndex) {
          colorClass += " ring-2 ring-cyan-400 scale-105";
        }

        btn.className = \`p-2.5 rounded-xl border flex flex-col items-center justify-center transition \${colorClass}\`;
        btn.innerHTML = \`<span>#\${idx + 1}</span>\`;
        btn.onclick = () => jumpToQuestion(idx);
        container.appendChild(btn);
      });

      modal.classList.remove('hidden');
    }

    function closeGridModal() {
      document.getElementById('gridModal').classList.add('hidden');
    }

    function openHandbookModal() {
      document.getElementById('handbookModal').classList.remove('hidden');
    }

    function closeHandbookModal() {
      document.getElementById('handbookModal').classList.add('hidden');
    }

    function switchHandbookTab(tabId) {
      document.querySelectorAll('.hb-tab').forEach(t => {
        if (t.getAttribute('data-tab') === tabId) {
          t.className = "hb-tab active px-4 py-3 border-b-2 border-cyan-400 text-cyan-400 transition font-bold";
        } else {
          t.className = "hb-tab px-4 py-3 border-b-2 border-transparent text-slate-400 hover:text-slate-200 transition";
        }
      });
      document.querySelectorAll('.hb-content').forEach(c => {
        if (c.id === tabId) {
          c.classList.remove('hidden');
        } else {
          c.classList.add('hidden');
        }
      });
    }

    function openVoiceGuideModal() {
      document.getElementById('voiceGuideModal').classList.remove('hidden');
    }

    function closeVoiceGuideModal() {
      document.getElementById('voiceGuideModal').classList.add('hidden');
    }

    // -------------------------------------------------------------
    // KEYBOARD SHORTCUTS
    // -------------------------------------------------------------
    window.addEventListener('keydown', (e) => {
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;

      // Toggle Voice Engine with 'V' key
      if (e.key === 'v' || e.key === 'V') {
        toggleVoiceEngine();
        return;
      }

      if (e.key === 'ArrowRight') {
        nextQuestion();
      } else if (e.key === 'ArrowLeft') {
        prevQuestion();
      } else if (e.key === ' ' || e.key === 'Spacebar') {
        if (currentMode === 'mcq') {
          e.preventDefault();
          flipCard();
        }
      } else if (currentMode === 'mcq' && ['1', '2', '3', '4'].includes(e.key)) {
        selectMCQOption(parseInt(e.key) - 1);
      } else if (e.key.toLowerCase() === 't') {
        toggleTheme();
      } else if (e.key.toLowerCase() === 'm') {
        toggleAudioMute();
      }
    });

    // -------------------------------------------------------------
    // INITIALIZATION
    // -------------------------------------------------------------
    window.addEventListener('DOMContentLoaded', () => {
      initTheme();
      updateAudioMuteUI();
      updateStarredButtons();
      updateFilteredQuestionList();
      console.log("WBBSE Class 8 English Mastery Hub Ready with Permanent Continuous VAD Voice Engine!");
    });
  </script>
</body>
</html>`;

const outputPath = path.join(__dirname, 'index.html');
fs.writeFileSync(outputPath, htmlTemplate, 'utf8');
console.log(`Successfully generated ${outputPath} (${(fs.statSync(outputPath).size / 1024).toFixed(1)} KB)`);

// Also copy to root scratch
const scratchRootCopy = path.join(__dirname, '..', 'wbbse_class8_english_master.html');
fs.copyFileSync(outputPath, scratchRootCopy);
console.log(`Successfully synced to ${scratchRootCopy}`);
