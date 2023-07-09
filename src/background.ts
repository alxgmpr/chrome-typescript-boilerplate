let pageData: any

chrome.runtime.onMessage.addListener((request) => {
  if (request.cmd === 'pageData') pageData = request.data
})

chrome.runtime.onConnect.addListener((port) => {
  console.assert(port.name == 'popup')
  port.onMessage.addListener((msg) => {
    if (msg.cmd == 'getPageData')
      port.postMessage({ cmd: 'pageData', data: pageData })
  })
})
