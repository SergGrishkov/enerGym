document
  .getElementById('subscriptionForm')
  .addEventListener('submit', function (event) {
    event.preventDefault();

    const emailInput = document.getElementById('email');
    const email = emailInput.value;

    createSubscription({ email })
      .then(response => {
        console.log(response.json());
      })
      .catch(error => {
        console.error('Error:', error);
      });
  });

async function createSubscription(data) {
  const url = 'https://energyflow.b.goit.study/api/v1/subscription';

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  return response;
}
