chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.brightness) {
    const filterValue = `brightness(${message.brightness}%)`;
    chrome.tabs.insertCSS(sender.tab.id, {
      code: `html { filter: ${filterValue}; }`,
      runAt: 'document_start'
    });
  }
});
