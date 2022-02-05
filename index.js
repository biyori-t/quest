const pingButton = document.getElementById('pingButton');
pingButton.addEventListener('click', async () => {
  const sendMessage = 'Test Message';
  const result = await window.questApi.ping(sendMessage);
  console.log(result.pong);

  if (result.message === sendMessage) {
    console.log('Successed');
  }
});
