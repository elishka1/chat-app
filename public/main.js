const socket = io()



const button1 = document.getElementById('submit');
const input = document.getElementById('box')

button1.addEventListener('click', (e) => {
   e.preventDefault();
   const message = input.value
   socket.emit('sendMessage', message)

  });



  socket.on('message', (text) => {
    console.log(text)
})