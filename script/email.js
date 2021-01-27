function sendMail () {

  var userEmail = document.getElementById('toEmail')
  var userName = document.getElementById('toName')
  var message_html = document.getElementById('toText')
  var temParams = {
    userEmail: userEmail.value,
    userName: userName.value,
    message_html: message_html.value,
  }; 

  emailjs.send('gmail', 'template_0ttxCrjk', temParams)
  .then(function(response) {
    console.log('SUCCESS!', response.status);
    userEmail.value = ""
    userName.value = ""
    message_html.value = ""
  });

}