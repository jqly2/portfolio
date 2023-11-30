$(document).ready(function () {
    // Load initial content
    fetchAndReplace('components/header.html', 'components/main.html', 'components/footer.html');

    // Attach event listener to the darkModeToggle in the loaded content
    $(document).on('click', '#darkModeToggle', function () {
        const darkModeToggle = document.querySelector('#darkModeToggle');
        const toggleButton = document.querySelector('#toggleButton');
        const lightMode = document.querySelector('#lightMode');
        const linke = document.querySelector('#linke');
        const git = document.querySelector('#git');
        const email = document.querySelector('#email');
        const header = document.querySelector('nav');
        const footer = document.querySelector('footer');

        if (darkModeToggle && toggleButton) {
            document.body.classList.toggle('dark');
            toggleButton.style.left = darkModeToggle.checked ? '1.25em' : null;
            toggleButton.style.right = darkModeToggle.checked ? null : '1.25em';
            lightMode.style.display = darkModeToggle.checked ? null : 'none';
            darkMode.style.display = darkModeToggle.checked ? 'none' : null;
            linke.style.backgroundImage = darkModeToggle.checked ? "url('./img/link.png')" : "url('./img/linkW.png')";
            git.style.backgroundImage = darkModeToggle.checked ? "url('./img/git.png')" : "url('./img/gitW.png')";
            email.style.backgroundImage = darkModeToggle.checked ? "url('./img/email.png')" : "url('./img/emailW.png')"; 
            header.style.backgroundColor = darkModeToggle.checked ? "rgb(212 212 212)" : "rgb(31 41 55)";
            footer.style.backgroundColor = darkModeToggle.checked ? "rgb(212 212 212)" : "rgb(31 41 55)"
        }
    });
});

function fetchAndReplace(header, main, footer) {
    $('#includedHeader').load(header, function () {
        $('#darkModeToggle').prop('checked', false);
    });
    $('#includedMain').load(main);
    $('#includedFooter').load(footer);
}
