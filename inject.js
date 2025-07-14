(() => {
  let lastPath = location.pathname;

  const run = () => {
    const url = window.location.href;
    const isExcluded = url.includes("/groups") || url.includes("/search");

    if (isExcluded) return;

    chrome.storage.sync.get(["enabled", "customCSS"], ({ enabled, customCSS }) => {
      if (!enabled || !customCSS) return;

      if (!document.head.querySelector('style[data-hide-recommended]')) {
        const style = document.createElement("style");
        style.setAttribute("data-hide-recommended", "true");
        style.textContent = customCSS;
        document.head.appendChild(style);
      }

      setTimeout(() => {
        const selector = "div.html-div.xdj266r.x14z9mp.xat24cr.x1lziwak.xexx8yu.xyri2b.x18d9i69.x1c1uobl";
        const posts = document.querySelectorAll(selector);
        if (posts.length === 0) {
          const fallback = document.createElement("div");
          fallback.textContent = "⚠️ Extension may not be active. Try refreshing the page.";
          fallback.style.cssText = `
            background: #fff3cd;
            color: #856404;
            padding: 0.75em 1em;
            border: 1px solid #ffeeba;
            font-size: 14px;
            font-family: sans-serif;
            text-align: center;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            z-index: 9999;
          `;
          document.body.prepend(fallback);
        }
      }, 5000);
    });
  };

  // Run once on load
  run();

  // Detect internal Facebook route changes
  const observer = new MutationObserver(() => {
    const newPath = location.pathname;
    if (newPath !== lastPath) {
      lastPath = newPath;
      run();
    }
  });

  observer.observe(document.body, { childList: true, subtree: true });
})();
