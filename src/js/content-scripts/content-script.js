const setDisplayNone = (els) => {
  for(let i = 0; i < els.length; i++) {
    const el = els[i];
    if(!el) { continue; }
    el.setAttribute('data-read-only-mode-hidden', '1')
    el.style.display = 'none';
  }
};

chrome.runtime.sendMessage("IsEnabled", (isEnabled) => {
  if(!isEnabled) { return; }
  setInterval(() => {
    /* Remove the compose area */
    setDisplayNone([document.querySelector('div:not([data-read-only-mode-hidden="1"])[data-testid="primaryColumn"] div[role="progressbar"]')?.parentElement]);
    setDisplayNone(document.querySelectorAll('div:not([data-read-only-mode-hidden="1"])[data-testid="primaryColumn"] .css-1dbjc4n div[class="css-1dbjc4n r-e84r5y r-1or9b2r"]'));
    /* Remove the compose tweet button */
    setDisplayNone(document.querySelectorAll('a:not([data-read-only-mode-hidden="1"])[href="/compose/tweet"]'));
    /* Remove reply icon */
    setDisplayNone(document.querySelectorAll('div:not([data-read-only-mode-hidden="1"])[data-testid="reply"]'));
  }, 250);
});