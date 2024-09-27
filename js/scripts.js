document.addEventListener('DOMContentLoaded', () => {
    const testimonials = document.querySelectorAll('.testimonial');
    let index = 0;

    function showNextTestimonial() {
        testimonials.forEach((testimonial, i) => {
            testimonial.style.display = i === index ? 'block' : 'none';
        });
        index = (index + 1) % testimonials.length;
    }

    setInterval(showNextTestimonial, 3000);
    showNextTestimonial();
});
