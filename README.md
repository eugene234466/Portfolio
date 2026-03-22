# 🌐 Eugene Yarney — Developer Portfolio

![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white)
![Flask](https://img.shields.io/badge/Flask-000000?style=for-the-badge&logo=flask&logoColor=white)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Railway](https://img.shields.io/badge/Railway-0B0D0E?style=for-the-badge&logo=railway&logoColor=white)
![License](https://img.shields.io/badge/License-Proprietary-red?style=for-the-badge)

> *"CE Student building cool things that actually do something 😂"*

A cyberpunk-themed personal portfolio website built with Flask, showcasing my projects, skills, and experience as a second-year Computer Engineering student at Ghana Communication Technology University.

---

## ✨ Features

- ⚡ **Cyberpunk/Neon aesthetic** — deep black background with cyan and magenta neon accents
- 🔤 **Typing animation** — hero tagline cycles through phrases automatically
- 📊 **Animated skill bars** — CSS-powered progress bars with neon glow
- 🗂️ **Projects showcase** — all deployed projects with live links
- 📱 **Fully responsive** — mobile-first design
- 📄 **CV download** — one-click resume download
- 🔗 **Social links** — GitHub, LinkedIn, WhatsApp, Email

---

## 🗂️ Project Structure

```
portfolio/
├── app.py                  # Flask app & routes
├── templates/
│   ├── base.html           # Parent template (navbar + footer)
│   ├── index.html          # Hero + About
│   ├── projects.html       # Project cards
│   ├── skills.html         # Skill bars
│   ├── contact.html        # Contact cards
│   ├── blog.html           # Blog placeholder
│   └── resume.html         # CV download
├── static/
│   ├── css/
│   │   └── style.css       # All styles (cyberpunk theme)
│   ├── js/
│   │   └── main.js         # Typing animation
│   ├── images/
│   │   ├── logo.png
│   │   ├── github.png
│   │   ├── linkedin.png
│   │   ├── whatsapp.png
│   │   └── email.png
│   └── files/
│       └── eugene_cv.pdf   # Downloadable CV
├── requirements.txt
├── Procfile
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites
- Python 3.10+
- pip

### Installation

```bash
# Clone the repository
git clone https://github.com/eugene234466/portfolio.git
cd portfolio

# Install dependencies
pip install -r requirements.txt

# Run the app
python app.py
```

Then open your browser at `http://127.0.0.1:5000` 🎉

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Backend | Python, Flask |
| Frontend | HTML5, CSS3, JavaScript |
| Fonts | Google Fonts — Orbitron |
| Icons | Custom neon PNG icons |
| CSS Framework | Bootstrap 5.3 |
| Deployment | Railway |

---

## 📄 Pages

| Page | Route | Description |
|---|---|---|
| Home | `/` | Hero section + About Me |
| Projects | `/projects` | All deployed projects with links |
| Skills | `/skills` | Animated skill progress bars |
| Contact | `/contact` | Social links + WhatsApp + Email |
| Blog | `/blog` | Coming soon placeholder |
| Resume | `/resume` | Downloadable CV (PDF) |

---

## 🎨 Design System

| Variable | Value | Usage |
|---|---|---|
| `--bg` | `#0a0a0f` | Background |
| `--cyan` | `#00fff5` | Primary accent, headings, borders |
| `--magenta` | `#ff00cc` | Secondary accent, taglines, tags |
| `--text` | `#e0e0e0` | Body text |
| `--font` | `Orbitron` | All text |

---

## 📦 Deployment

This app is deployed on **Railway**.

```
# Procfile
web: gunicorn app:app
```

```
# requirements.txt
Flask
gunicorn
```

Live at: [your-railway-url.up.railway.app](#)

---

## 👨‍💻 About Me

**Eugene Yarney** — Second-year Computer Engineering student at Ghana Communication Technology University.

I build full-stack web apps, desktop tools, AI-powered projects, and whatever else I feel like breaking 😂.

- 🌍 Nsawam, Ghana
- 📧 eugeneyarney23@gmail.com
- 💼 [LinkedIn](https://linkedin.com/in/eugene-yarney)
- 🐙 [GitHub](https://github.com/eugene234466)
- 💬 [WhatsApp](https://wa.me/+233506798129)

---

## 📜 License

This project is proprietary. All rights reserved © 2026 Eugene Yarney.

---

<p align="center">Built with 💜 and way too much caffeine</p>
