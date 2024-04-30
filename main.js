import './style.css'
import thindLogo from '/thind.svg'

document.querySelector('#app').innerHTML = `
  <div>
  <div class="intro-grid">
    <a href="https://thind.dev/docs" target="_blank">
      <img src="${thindLogo}" class="logo" alt="Vite logo" />
    </a>
  </div>
    <h1>Webflow Starter Project</h1>
    <p class="read-the-docs">
      Click on the logo to learn more
    </p>
  </div>
`
