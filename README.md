# Doodax - Advanced Online Readability Checker

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![React Version](https://img.shields.io/badge/react-19%2B-%2361DAFB)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/typescript-%233178C6.svg?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/tailwind_css-%2338B2AC.svg?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

<div align="center">
  <br />
  <h3>
    <a href="https://doodax.com" target="_blank">🚀 LIVE DEMO</a>
  </h3>
  <br />
</div>

**Doodax** is a professional-grade, single-page React application designed to help writers, marketers, and students improve the clarity of their content. It features a powerful real-time readability engine based on the Flesch-Kincaid Grade Level algorithm, integrated with modern AI capabilities for text simplification.

The application is built for speed, privacy (client-side processing), and SEO performance.

---

## ✨ Key Features

-   **⚡ Real-Time Analysis:** Instant calculation of Flesch-Kincaid grade levels as you type.
-   **🎨 Intelligent Highlighting:** Visual feedback highlights complex sentences (yellow) and very complex sentences (red).
-   **🤖 AI Integration:** "Editor Plus" feature leverages the Google Gemini API to rewrite text for better readability.
-   **🌌 Immersive UI:** A modern, galaxy-themed user interface with smooth animations and responsive design.
-   **📊 Detailed Metrics:** Breakdowns of word count, sentence count, and syllable density.
-   **🔍 SEO Optimized:** Includes comprehensive Schema.org JSON-LD structured data and a content-rich guide.
-   **🔒 Privacy Focused:** Text analysis logic runs entirely in the browser.

## 📂 Project Structure

```
/
├── public/
│   ├── index.html        # Main HTML entry point with SEO meta tags
│   ├── favicon.svg       # Brand icon
│   ├── robots.txt        # Crawler directives
│   └── sitemap.xml       # Site structure for search engines
├── src/
│   ├── components/
│   │   ├── ReadabilityChecker.tsx  # Core engine: Logic for Flesch-Kincaid & highlighting
│   │   └── ThemeLayout.tsx         # Layout: Navbar, Footer, Backgrounds, Modals
│   ├── utils/
│   │   └── SeoArticle.tsx          # Content: Extensive SEO article with Schema LD
│   ├── App.tsx           # Application orchestration
│   └── index.tsx         # React root mount
├── .env                  # API configuration
└── package.json          # Dependencies
```

## 🚀 Getting Started

To run this project locally:

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/hsinidev/doodax.git
    cd doodax
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Configure API:**
    Create a `.env` file and add your Google Gemini API key:
    ```
    API_KEY=your_api_key_here
    ```

4.  **Start the server:**
    ```bash
    npm start
    ```

## 🧠 Technical Details

The readability algorithm splits text using RegEx to count sentences, words, and estimates syllables based on vowel grouping heuristics. This calculation is memoized within React to ensure 60fps performance even with large bodies of text.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

<div align="center">
  <b>Powered by HSINI MOHAMED</b><br>
  <a href="https://github.com/hsinidev">GitHub Profile</a>
</div>
