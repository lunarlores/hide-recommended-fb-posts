# hide-recommended-fb-posts
Automatically hides “Recommended for you” posts on Facebook's homepage. Lightweight, open-source, and customizable.

# Hide Recommended Posts (Chrome/Edge Extension)

A lightweight browser extension to **automatically hide "Recommended for you" posts** on Facebook’s main feed. 

## ✨ Features

- Hides suggested content you never asked for
- Automatically detects when you're on the main feed
- Skips injection on `/groups` and `/search`
- Fallback warning if CSS fails to apply
- Toggle & custom CSS editor in popup
- Works on Facebook desktop site (`facebook.com`)

## 🔧 How to Install (Manual)

1. Clone or download this repository as a ZIP
2. Go to `chrome://extensions` (or `edge://extensions`)
3. Enable **Developer mode**
4. Click **Load unpacked**
5. Select the folder you just extracted

## 📁 Folder Contents

| File           | Purpose                                 |
|----------------|------------------------------------------|
| `inject.js`    | Main logic to inject CSS + fallback check |
| `popup.html`   | Extension popup UI                      |
| `popup.js`     | Logic for toggling CSS or editing it    |
| `background.js`| Loads default CSS at install            |
| `manifest.json`| Extension manifest (v3)                 |
| `icons/`       | Default and disabled icon sets          |

## 🖼️ Icons

- 👁️ Default icon
- 🙈 Disabled icon when inactive on Facebook

## 📜 License

MIT — use freely, improve it, share it.

---

> “Don’t show me what I didn’t follow.”  
> — You, probably.
