document.querySelector('.logo').addEventListener('click', function() {
    window.location.href = 'mailto:abhishekchauhan1405@gmail.com?subject=Portfolio Inquiry&body=Hi, I would like to discuss...';
});

document.getElementById('contact').addEventListener('submit', function(event) {
    event.preventDefault(); 
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;
    var mailtoLink = 'mailto:abhishekchauhan1405@gmail.com'
        + '?subject=' + encodeURIComponent('Portfolio Inquiry from ' + name)
        + '&body=' + encodeURIComponent('Name: ' + name + '\nEmail: ' + email + '\n\nMessage: ' + message);
    window.location.href = mailtoLink;
});
const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = form.querySelector('input[name="name"]').value;
    const email = form.querySelector('input[name="email"]').value;
    const message = form.querySelector('textarea[name="message"]').value;

    if (name === '' || email === '' || message === '') {
        alert('Please fill in all fields');
        return;
    }
    alert(`Thank you, ${name}. Your message has been sent!`);
    form.reset();
});
