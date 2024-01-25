document.addEventListener('DOMContentLoaded', function () {
    function updateQuote() {
        fetch('https://api.quotable.io/random')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                document.getElementById('quote-text').textContent = '' + data.content + '';
                document.querySelector('.quote-author').textContent = '' + data.author;
            })
            .catch(error => console.error('Помилка під час отримання цитати:', error));
    }

    updateQuote();

    document.addEventListener('click', updateQuote);
});
