function isStringDigit(str) {
    return /^\d+$/.test(str);
}


document.addEventListener('DOMContentLoaded', function() {
    var stars = document.querySelectorAll('.stars-rating');
    for (var i = 0; i < stars.length; i++) {
        let value = stars[i].getAttribute('value');
        if (value == null || !isStringDigit(value)) {
            value = '0';
        }

        value = parseInt(value);

        stars[i].innerText = '★'.repeat(value) + '☆'.repeat(5 - value);
    }
});