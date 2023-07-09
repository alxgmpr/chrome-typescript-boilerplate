import { h, render } from 'preact'
import { useEffect, useState } from 'preact/hooks'

function Popup() {
  const [pageData, setPageData] = useState<any>()

  useEffect(() => {
    const port = chrome.runtime.connect({ name: 'popup' })
    port.postMessage({ cmd: 'getPageData' })
    port.onMessage.addListener((msg) => {
      if (msg.cmd === 'pageData') {
        setPageData(msg.data)
      }
    })
  }, [])
  const handleClick = () => {
    chrome.tabs.query({ active: true, currentWindow: true }, ([tab]) => {
      chrome.scripting
        .executeScript({
          target: { tabId: tab.id! },
          func: () => {
            window.postMessage({ cmd: 'injectContent' }, '*')
          },
        })
        .catch(console.error)
    })
  }

  return (
    <div>
      <h1>Typescript + SWC = 🚀</h1>
      <button onClick={handleClick}>Inject Content</button>
      <p>Current page title:</p>
      <pre>{JSON.stringify(pageData, null, 2)}</pre>
    </div>
  )
}

render(<Popup />, document.getElementById('root') as HTMLDivElement)
