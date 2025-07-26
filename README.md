 <div style="width: 100px;  margin: 0 auto; ">

![alt](mute-icon.png )
 </div>
 
# YouTube Ad Muter Extension

A simple and effective Chrome extension to automatically mute advertisements on YouTube and YouTube Music, ensuring a smoother and uninterrupted viewing and listening experience. Say goodbye to sudden loud ads breaking your flow!

## ✨ Features

* **Automatic Ad Detection:** Intelligently identifies when an ad is playing on both YouTube and YouTube Music by detecting specific elements on the page.

* **Instant Mute:** Automatically mutes the audio of the video player within the browser tab when an ad is detected.

* **Seamless Unmute:** Restores the audio to its previous state once the advertisement concludes.

* **User Preference Storage:** Remembers your mute preference, so you don't have to set it every time.

* **Lightweight & Efficient:** Designed to run in the background without impacting your browsing performance.

## 🚀 How to Install & Use

### Installation (Developer Mode)

Since this is a custom extension, you'll need to install it manually via Chrome's developer mode:

1.  **Download the Extension:**

    * Clone this repository: `git clone https://github.com/Iamanajaz/Mute-ads.git`

    * Or, download the ZIP file and extract it to a folder on your computer. Make sure you have the `manifest.json`, `content.js`, `popup.html`, and `mute-icon.png` files in the root of this folder.

2.  **Open Chrome Extensions Page:**

    * Open your Chrome browser.

    * Type `chrome://extensions` in the address bar and press Enter.

3.  **Enable Developer Mode:**

    * In the top right corner of the Extensions page, toggle on the "**Developer mode**" switch.

4.  **Load the Extension:**

    * Click on the "**Load unpacked**" button that appears.

    * Navigate to the folder where you saved the extension (the one containing your `manifest.json` file) and select it.

5.  **Pin the Extension (Optional but Recommended):**

    * Click on the puzzle piece icon (Extensions) in your Chrome toolbar.

    * Find "YouTube Ad Muter" and click the pin icon next to it to make it easily visible in your toolbar. This will also show the extension's icon (`mute-icon.png`) in your toolbar.

### Usage

Once installed, the extension works automatically in the background.

1.  Navigate to [YouTube](https://www.youtube.com/) or [YouTube Music](https://music.youtube.com/).

2.  Play a video or song.

3.  When an ad appears, the extension will automatically mute the video's audio.

4.  Once the ad finishes, the audio will be unmuted, and your content will resume normally.

## 📄 License

This project is licensed under the MIT License - see the `LICENSE` file for details.

## ⚠️ Disclaimer

This extension aims to improve user experience by muting advertisements. It does not block ads entirely, nor does it interfere with YouTube's revenue model beyond muting the audio during ad playback. Its functionality relies on the current structure of YouTube's website (specifically the `.ad-showing` class), which may change, potentially affecting the extension's behavior. Updates will be provided to adapt to such changes.
