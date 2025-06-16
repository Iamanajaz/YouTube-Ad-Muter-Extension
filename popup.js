const toggle = document.getElementById('toggle');

chrome.storage.sync.get(['muteAds'], (result) => {
  toggle.checked = result.muteAds ?? true;
});

toggle.addEventListener('change', () => {
  chrome.storage.sync.set({ muteAds: toggle.checked });
});
