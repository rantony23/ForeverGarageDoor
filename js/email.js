document.querySelector('#form').addEventListener('submit', function(event) {
  event.preventDefault();
  
  const formData = new FormData(this);
  const data = {
      name: formData.get('name'),
      lastname: formData.get('lastname'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      message: formData.get('message')
  };

  fetch('http://localhost:3000/send', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
  })
  .then(response => response.text())
  .then(result => alert(result))
  .catch(error => console.error('Error:', error));
});