// FAQ Accordion functionality
document.addEventListener('DOMContentLoaded', function () {
    const faqItems = document.querySelectorAll('#faq-1404 .cs-faq-item');

    faqItems.forEach(function (item) {
        const button = item.querySelector('.cs-button');

        button.addEventListener('click', function () {
            // Close all other items
            faqItems.forEach(function (otherItem) {
                if (otherItem !== item && otherItem.classList.contains('active')) {
                    otherItem.classList.remove('active');
                }
            });

            // Toggle current item
            item.classList.toggle('active');
        });
    });
});
