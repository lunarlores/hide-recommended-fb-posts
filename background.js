chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({
    enabled: true,
    customCSS: `
      div.html-div.xdj266r.x14z9mp.xat24cr.x1lziwak.xexx8yu.xyri2b.x18d9i69.x1c1uobl:has(
        span.x193iq5w.xeuugli.x13faqbe.x1vvkbs.x1xmvt09.x1f6kntn.xvq8zen.x1s688f.x1fey0fg
      ):not(
        :has(span.html-span.xdj266r.x14z9mp.xat24cr.x1lziwak.xexx8yu.xyri2b.x18d9i69.x1c1uobl.x1hl2dhg.x16tdsg8.x1vvkbs.xfx01vb)
      ) > * {
        display: none;
      }

      div.html-div.xdj266r.x14z9mp.xat24cr.x1lziwak.xexx8yu.xyri2b.x18d9i69.x1c1uobl:has(
        span.x193iq5w.xeuugli.x13faqbe.x1vvkbs.x1xmvt09.x1f6kntn.xvq8zen.x1s688f.x1fey0fg
      ):not(
        :has(span.html-span.xdj266r.x14z9mp.xat24cr.x1lziwak.xexx8yu.xyri2b.x18d9i69.x1c1uobl.x1hl2dhg.x16tdsg8.x1vvkbs.xfx01vb)
      )::before {
        content: "Hidden post: If this is incorrect, refresh the page.";
        display: block;
        color: #666;
        background: #f0f0f0;
        padding: 0.5em 1em;
        font-style: italic;
        width: 100%;
        box-sizing: border-box;
      }
    `
  });

  chrome.action.setIcon({
    path: {
      16: "icons/icon-disabled16.png",
      48: "icons/icon-disabled48.png",
      128: "icons/icon-disabled128.png"
    }
  });
});
