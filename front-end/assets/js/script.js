const socket = io()
const nameInput = document.getElementById('nameInput')
const messageInput = document.getElementById('messageInput')
const btSend = document.getElementById('btSend')
const messagesContainer = document.getElementById('messagesContainer')


// Fetching GET requisition response with Axios:
async function getMessages() {

  axios.get('/messages')

    .then(function (response) {

      messagesContainer.innerHTML = ""

      for (let i = 0; i <= response.data.length; i++) {
        messagesContainer.innerHTML += `<article class="message"><h5>${response.data[i].name}:</h5> <p>${response.data[i].message}</p></article>`
      }
      
    })

    .catch(function(error) {
      console.log(error)

    })

    .then(function() {

    });

}

// POST requisition:
async function sendMessage() {

  // Checking if there'ś text in the inputs:
  if (nameInput.value.trim() && messageInput.value.trim()) {

    let messageToBeSent = {}
    messageToBeSent.name = nameInput.value.trim()
    messageToBeSent.message = messageInput.value.trim()

    axios.post('/messages', {
      name: messageToBeSent.name,
      message: messageToBeSent.message
    })

      .then(function(response) {
        getMessages()
        messageInput.value = ''
      })

      .catch(function(error) {
        console.log(error)
      });
  }
}

getMessages()

btSend.onclick = sendMessage
socket.on('message', getMessages)