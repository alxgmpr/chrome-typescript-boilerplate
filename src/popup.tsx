import { h, render } from 'preact'

function Popup() {
  const handleClick = () => {
    chrome.tabs.query({ active: true, currentWindow: true }, ([tab]) => {
      chrome.scripting
        .executeScript({
          target: { tabId: tab.id! },
          func: () => {
            // Send a message to the content script
            window.postMessage({ cmd: 'injectContent' }, '*')
          },
        })
        .catch(console.error)
    })
  }

  return <button onClick={handleClick}>Inject Content</button>
}

render(<Popup />, document.getElementById('root') as HTMLDivElement)
