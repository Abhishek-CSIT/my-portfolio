document.querySelector('.logo').addEventListener('click', function() {
    window.location.href = 'mailto:abhishekchauhan1405@gmail.com?subject=Portfolio Inquiry&body=Hi, I would like to discuss...';
});

document.getElementById('contact').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get form values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    // Construct the mailto link
    var mailtoLink = 'mailto:abhishekchauhan1405@gmail.com'
        + '?subject=' + encodeURIComponent('Portfolio Inquiry from ' + name)
        + '&body=' + encodeURIComponent('Name: ' + name + '\nEmail: ' + email + '\n\nMessage: ' + message);

    // Open the mailto link (this opens the default email client)
    window.location.href = mailtoLink;
});



// Handle form submission
const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Simple form validation
    const name = form.querySelector('input[name="name"]').value;
    const email = form.querySelector('input[name="email"]').value;
    const message = form.querySelector('textarea[name="message"]').value;

    if (name === '' || email === '' || message === '') {
        alert('Please fill in all fields');
        return;
    }

    // Simulate sending the form data
    alert(`Thank you, ${name}. Your message has been sent!`);

    // Clear the form after submission
    form.reset();
});
