function emailSend(){
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "rantony52@gmail.com",
        Password : "4E3E2CCCADC8AC47A9B8F238206912BB1E62",
        To : 'osornioandradea@gmail.com',
        From : "rantony52@gmail.com",
        Subject : "This is the subject",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );
}