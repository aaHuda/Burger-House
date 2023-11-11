submitButton = document.querySelector('#submit')
inputEmail = document.querySelector('#inputEmail4')

submitButton.addEventListener('click', () => {
  alert('Terima kasih telah subscribe ' + inputEmail.value + ' 🥰')
  inputEmail.value = ''
})