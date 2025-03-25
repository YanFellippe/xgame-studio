// Accordion para serviços
document.querySelectorAll('.service-title').forEach(title => {
    title.addEventListener('click', () => {
        const content = title.nextElementSibling;
        content.style.display = content.style.display === 'block' ? 'none' : 'block';
    });
});