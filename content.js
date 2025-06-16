let muteAds = true;

chrome.storage.sync.get(['muteAds'], (result) => {
  muteAds = result.muteAds ?? true;
});

chrome.storage.onChanged.addListener((changes) => {
  if (changes.muteAds) {
    muteAds = changes.muteAds.newValue;
  }
});

function isAdPlaying() {
  // YouTube marks ad container during ads
  return document.querySelector('.ad-showing');
}

function muteDuringAds() {
  const video = document.querySelector('video');
  if (!video) return;

  if (muteAds && isAdPlaying()) {
    video.muted = true;
    console.log('🔇 Ad detected – video muted');
  } else {
    video.muted = false;
  }
}

// Run check repeatedly
setInterval(muteDuringAds, 500);
