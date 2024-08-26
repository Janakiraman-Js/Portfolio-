
function showSection(sectionId) {
    var sections = document.querySelectorAll('section');
    sections.forEach(function(section) {
        section.classList.remove('active');
    }
);

    var selectedSection = document.getElementById(sectionId);
    if (selectedSection) {
        selectedSection.classList.add('active');
    }
}
function shareResume() {
    const resumeLink = 'https://app.luminpdf.com/viewer/66c9eb7f6c4ac99a3e7fe8ad';
    const subject = encodeURIComponent('Check out my resume');
    const body = encodeURIComponent(`Hi,\n\nPlease find my resume at the following link:\n${resumeLink}\n\nRegards,\nJanakiraman`);
    const mailtoLink = `mailto:?subject=${subject}&body=${body}`;
    window.location.href = mailtoLink;
}

window.onload = function() {
    showSection('home');
};

