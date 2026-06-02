// Filter Cards By Sector Categories
function filterJobs(category) {
    // 1. Manage Active Button Highlight CSS States
    const buttons = document.querySelectorAll('.filter-btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');

    // 2. Hide or Show Cards Based on Selection Criteria
    const cards = document.querySelectorAll('.job-card');
    cards.forEach(card => {
        if (category === 'all' || card.getAttribute('data-category') === category) {
            card.style.display = 'flex';
        } else {
            card.style.display = 'none';
        }
    });
}

// Live Text Input Search Mechanics
document.getElementById('job-search').addEventListener('input', function(e) {
    const searchTerm = e.target.value.toLowerCase();
    const cards = document.querySelectorAll('.job-card');

    cards.forEach(card => {
        const title = card.querySelector('.job-title').textContent.toLowerCase();
        const description = card.querySelector('.job-description').textContent.toLowerCase();
        
        if (title.includes(searchTerm) || description.includes(searchTerm)) {
            card.style.display = 'flex';
        } else {
            card.style.display = 'none';
        }
    });
});

// Auto-populate Contact Inquiry Form upon Applying
function openApplyModal(jobTitle) {
    const contactSection = document.getElementById('contact');
    const selectDropdown = contactSection.querySelector('select');
    const textarea = contactSection.querySelector('textarea');

    // Smooth scroll down to the inquiry setup area
    contactSection.scrollIntoView({ behavior: 'smooth' });

    // Pre-fill fields for applicant convenience
    selectDropdown.value = 'candidate';
    textarea.value = `Hello MADO Team, I am highly interested in applying for the "${jobTitle}" position listed on your website. Please advise me on the next application steps.`;
}