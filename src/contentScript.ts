window.addEventListener('message', (event) => {
  console.log('test:', event)
  // Only accept messages from the same frame
  if (event.source !== window) {
    return
  }

  const message = event.data

  // Only accept messages that we know are ours
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
