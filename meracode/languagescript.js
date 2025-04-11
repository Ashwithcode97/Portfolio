// Skill Progress Animation on Hover
document.querySelectorAll('.skill-box').forEach((box) => {
    box.addEventListener('mouseenter', () => {
        let percent = box.getAttribute('data-percent');
        let circle = box.querySelector('.progress');
        let offset = 283 - (percent / 100) * 283;
        circle.style.strokeDashoffset = offset;
    });

    // Reset progress on mouse leave
    box.addEventListener('mouseleave', () => {
        let circle = box.querySelector('.progress');
        circle.style.strokeDashoffset = 283;
    });
});
