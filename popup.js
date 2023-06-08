const brightnessRange = document.getElementById('brightnessRange');

chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
  const tabId = tabs[0].id;

  brightnessRange.addEventListener('input', () => {
    const brightness = brightnessRange.value;
    chrome.tabs.sendMessage(tabId, { brightness });
  });
});
