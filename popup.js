const toggle = document.getElementById("toggle");
const cssBox = document.getElementById("cssBox");

chrome.storage.sync.get(["enabled", "customCSS"], ({ enabled, customCSS }) => {
  toggle.checked = !!enabled;
  cssBox.value = customCSS || "";
});

toggle.addEventListener("change", () => {
  chrome.storage.sync.set({ enabled: toggle.checked });
});

cssBox.addEventListener("input", () => {
  chrome.storage.sync.set({ customCSS: cssBox.value });
});