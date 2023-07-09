window.addEventListener('message', (event) => {
  if (event.source !== window) return

  const message = event.data

  if (
    typeof message === 'object' &&
    message !== null &&
    message.cmd === 'injectContent'
  ) {
    const p = document.createElement('p')
    p.textContent = 'Hello, world!'
    document.body.appendChild(p)
  }
})

const pageTitle = document.title
chrome.runtime
  .sendMessage({ cmd: 'pageData', data: pageTitle })
  .catch(console.error)
