function validate_emails() {
  console.log('Inside validate_emails()')
  var email_element = document.getElementById('email')
  // console.log(email)
  // console.log(email.value)

  var confirmEmail_element = document.getElementById('confirmEmail')
  // console.log(confirmEmail_element)
  // console.log(confirmEmail_element.value)

  // console.log("Border Color: ", confirmEmail_element.style.borderColor)
  // console.log("Background Color: ", confirmEmail_element.style.backgroundColor)

  if (email.value === confirmEmail_element.value) {
    console.log('Emails Match')
    confirmEmail_element.style.borderColor = '#ccc'
    confirmEmail_element.style.backgroundColor = 'white'
  } else {
    console.log('Emails DONT Match')
    // console.log(confirmEmail_element)
    confirmEmail_element.style.borderColor = 'yellow'
    confirmEmail_element.style.backgroundColor = 'orange'
    // console.log('Emails DONT Match')
  }
}

document
  .getElementById('confirmEmail')
  .addEventListener('blur', validate_emails)
