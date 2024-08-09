document.addEventListener("DOMContentLoaded", function() {
    const aboutSection = document.getElementById('about');
    const skillsSection = document.getElementById('skills');
    const experienceSection = document.getElementById('experience');
    const educationSection = document.getElementById('education');

    const sections = [aboutSection, skillsSection, experienceSection, educationSection];

    sections.forEach(section => {
        section.addEventListener('click', function() {
            this.classList.toggle('expanded');
        });
    });

const buttons = document.querySelectorAll('.toggle-button');
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const content = button.nextElementSibling;
        content.style.display = content.style.display === 'block' ? 'none' : 'block';
    });
});
});
