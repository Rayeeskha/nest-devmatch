(function () {
    function ready(callback) {
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', callback);
            return;
        }

        callback();
    }

    ready(function () {
        var navToggle = document.querySelector('[data-rr-nav-toggle]');
        var nav = document.getElementById('rrNav');
        var whatsappToggle = document.querySelector('[data-whatsapp-toggle]');
        var whatsappCard = document.getElementById('rrWhatsAppCard');
        var whatsappChat = document.querySelector('.rr-whatsapp-chat');
        var whatsappClose = document.querySelector('[data-whatsapp-close]');

        function closeNav() {
            if (!nav || !navToggle) {
                return;
            }

            nav.classList.remove('show', 'rr-nav-open');
            navToggle.setAttribute('aria-expanded', 'false');
        }

        if (navToggle && nav) {
            navToggle.addEventListener('click', function () {
                var isOpen = nav.classList.contains('rr-nav-open');

                nav.classList.toggle('show', !isOpen);
                nav.classList.toggle('rr-nav-open', !isOpen);
                navToggle.setAttribute('aria-expanded', String(!isOpen));
            });
        }

        document.querySelectorAll('.navbar-nav a').forEach(function (link) {
            link.addEventListener('click', closeNav);
        });

        function setWhatsappOpen(isOpen) {
            if (!whatsappChat || !whatsappToggle || !whatsappCard) {
                return;
            }

            whatsappChat.classList.toggle('is-open', isOpen);
            whatsappToggle.setAttribute('aria-expanded', String(isOpen));
            whatsappCard.setAttribute('aria-hidden', String(!isOpen));
        }

        if (whatsappToggle) {
            whatsappToggle.addEventListener('click', function () {
                setWhatsappOpen(!whatsappChat.classList.contains('is-open'));
            });
        }

        if (whatsappClose) {
            whatsappClose.addEventListener('click', function () {
                setWhatsappOpen(false);
            });
        }

        function buildWhatsappUrl(form) {
            var phone = form.getAttribute('data-phone');
            var message = ['Hello Riverside Royale, I want to check room availability.'];

            form.querySelectorAll('[data-label]').forEach(function (field) {
                var label = field.getAttribute('data-label');
                var value = field.value;

                if (value) {
                    message.push(label + ': ' + value);
                }
            });

            if (!phone) {
                return '';
            }

            return 'https://wa.me/' + phone + '?text=' + encodeURIComponent(message.join('\n'));
        }

        function openWhatsappEnquiry(form) {
            var url = buildWhatsappUrl(form);

            if (url) {
                window.location.href = url;
            }
        }

        document.querySelectorAll('.js-whatsapp-form').forEach(function (form) {
            form.addEventListener('submit', function (event) {
                event.preventDefault();
                openWhatsappEnquiry(form);
            });
        });

        document.querySelectorAll('[data-whatsapp-submit]').forEach(function (button) {
            button.addEventListener('click', function (event) {
                var form = button.closest('.js-whatsapp-form');

                if (form) {
                    event.preventDefault();
                    openWhatsappEnquiry(form);
                }
            });
        });

        document.addEventListener('keyup', function (event) {
            if (event.key === 'Escape') {
                closeNav();
                setWhatsappOpen(false);
            }
        });
    });
})();

if (window.jQuery) {
    jQuery(function ($) {
        if ($.fn.owlCarousel) {
        $('.rr-blog-slider').owlCarousel({
            dots: true,
            loop: true,
            margin: 24,
            nav: false,
            responsive: {
                0: { items: 1 },
                768: { items: 2 },
                1200: { items: 3 }
            }
        });

        $('.rr-contact-slider').owlCarousel({
            dots: true,
            items: 1,
            loop: true,
            nav: false
        });
    }

    });
}
