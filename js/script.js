$(document).ready(function () {
  // --- Apply saved theme as soon as possible (html element, not body) ---
  try {
    const saved = localStorage.getItem('theme'); // 'dark' | 'light' | null
    const prefers = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (saved === 'dark' || (!saved && prefers)) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  } catch (e) {}

  // Load initial content (with callbacks so we can sync after each part loads)
  fetchAndReplace('components/header.html', 'components/main.html', 'components/footer.html');

  // Toggle: use 'change' so keyboard users work; target <html>
  $(document).on('change', '#darkModeToggle', function () {
    const isDark = this.checked;
    setTheme(isDark ? 'dark' : 'light');
    syncUIToTheme();
  });

  // After each partial loads, sync the UI so newly injected nodes pick up the theme
  $(document)
    .on('loadDone:header', function () { syncUIToTheme(); })
    .on('loadDone:main',   function () { syncUIToTheme(); })
    .on('loadDone:footer', function () { syncUIToTheme(); });

  // ---------- helpers ----------
  function setTheme(mode) {
    if (mode === 'dark') {
      document.documentElement.classList.add('dark');   // <html>
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }

  function syncUIToTheme() {
    const isDark = document.documentElement.classList.contains('dark');

    // Reflect checkbox if it exists (header)
    const $toggle = $('#darkModeToggle');
    if ($toggle.length) $toggle.prop('checked', isDark);

    // Optional: move knob, swap icons
    const toggleButton = document.querySelector('#toggleButton');
    const lightMode = document.querySelector('#lightMode');
    const darkModeIcon = document.querySelector('#darkMode'); // <-- this existed in your code but variable was missing

    if (toggleButton) {
      toggleButton.style.left  = isDark ? '1.25em' : null;
      toggleButton.style.right = isDark ? null : '1.25em';
    }
    if (lightMode)    lightMode.style.display    = isDark ? '' : 'none';
    if (darkModeIcon) darkModeIcon.style.display = isDark ? 'none' : '';

    // Optional fallbacks if you didn't use Tailwind dark: classes on nav/footer
    const header = document.querySelector('nav');
    const footer = document.querySelector('footer');
    if (header) header.style.backgroundColor = isDark ? 'rgb(31 41 55)' : 'rgb(212 212 212)';
    if (footer) footer.style.backgroundColor = isDark ? 'rgb(31 41 55)' : 'rgb(212 212 212)';

    // Swap social icon images if you rely on light/dark assets
    const linke = document.querySelector('#linke');
    const git   = document.querySelector('#git');
    const email = document.querySelector('#email');
    if (linke) linke.style.backgroundImage = isDark ? "url('./img/linkW.png')"  : "url('./img/link.png')";
    if (git)   git.style.backgroundImage   = isDark ? "url('./img/gitW.png')"   : "url('./img/git.png')";
    if (email) email.style.backgroundImage = isDark ? "url('./img/emailW.png')" : "url('./img/email.png')";
  }

  function fetchAndReplace(header, main, footer) {
    $('#includedHeader').load(header, function (res, status) {
      if (status === 'success') {
        // make the checkbox reflect the real theme immediately after header injects
        $('#darkModeToggle').prop('checked', document.documentElement.classList.contains('dark'));
        $(document).trigger('loadDone:header');
      }
    });

    $('#includedMain').load(main, function (res, status) {
      if (status === 'success') {
        // main.html just arrived — apply the current theme to it
        $(document).trigger('loadDone:main');
      }
    });

    $('#includedFooter').load(footer, function (res, status) {
      if (status === 'success') {
        $(document).trigger('loadDone:footer');
      }
    });
  }

  // Initial sync for anything already on the page
  syncUIToTheme();
});
