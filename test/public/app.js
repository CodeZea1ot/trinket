console.log('JS loaded')

document.getElementById('clickMe').addEventListener('click', () => {
  const output = document.getElementById('output')
  const now = new Date()
  output.textContent = `Button clicked! Current time: ${now.toLocaleTimeString()}`
})
