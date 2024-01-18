// Add a touchstart event listener to each image container
document.querySelectorAll('.image-container').forEach(function (container) {
    container.addEventListener('touchstart', function () {
        // Add a class to the container when touched
        container.classList.add('touch-hover');

        setTimeout(function () {
            container.classList.remove('touch-hover');
        }, 500);
    });
});
function scrollToGallery() {
    var galleryElement = document.getElementById('news gallery');

    var offset = galleryElement.offsetTop - 150;

    window.scrollTo({
        top: offset,
        behavior: 'smooth'
    });
}


function sendEmail() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var contactNo = document.getElementById("contact-no").value;
    var message = document.getElementById("message").value;

    var mailtoLink = "mailto:contact@ninjabytes.live?subject=Inquiry&body=";
    mailtoLink += "Name: " + encodeURIComponent(name) + "%0D%0A";
    mailtoLink += "Email: " + encodeURIComponent(email) + "%0D%0A";
    mailtoLink += "Contact No: " + encodeURIComponent(contactNo) + "%0D%0A";
    mailtoLink += "Message: " + encodeURIComponent(message);
    window.location.href = mailtoLink;
}
document.addEventListener('DOMContentLoaded', function () {
    var twitterIcon = document.querySelector('.bi-instagram');

    if (twitterIcon) {
        twitterIcon.addEventListener('click', function () {
            window.location.href = 'https://www.instagram.com/ninjabytestech/';
        });
    }
}); document.addEventListener('DOMContentLoaded', function () {
    var twitterIcon = document.querySelector('.bi-telegram');

    if (twitterIcon) {
        twitterIcon.addEventListener('click', function () {
            window.location.href = 'https://t.me/NinjaBytesTech';
        });
    }
}); document.addEventListener('DOMContentLoaded', function () {
    var twitterIcon = document.querySelector('.bi-linkedin');

    if (twitterIcon) {
        twitterIcon.addEventListener('click', function () {
            window.location.href = 'https://www.linkedin.com/company/NinjaBytes';
        });
    }
});

document.addEventListener('DOMContentLoaded', function () {
    var whatIcon = document.querySelector('.bi-whatsapp');

    if (whatIcon) {
        whatIcon.addEventListener('click', function () {
            window.location.href = 'https://whatsapp.com/channel/0029VaL6iYfIHphPHFGBje23';
        });
    }
});


document.addEventListener('DOMContentLoaded', function () {
    var whatIcon = document.querySelector('.bi-git');

    if (whatIcon) {
        whatIcon.addEventListener('click', function () {
            window.location.href = 'https://gitlab.com/ninjabytestech';
        });
    }
});


document.addEventListener('DOMContentLoaded', function () {
    var whatIcon = document.querySelector('.bi-github');

    if (whatIcon) {
        whatIcon.addEventListener('click', function () {
            window.location.href = 'https://github.com/ninjabytestech';
        });
    }
});

document.addEventListener('contextmenu', function (event) {
    event.preventDefault();
});