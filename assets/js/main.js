function toDark() {
    $('.bg-light').removeClass('bg-light').addClass('bg-secondary');
    $('.bg-white').removeClass('bg-white').addClass('bg-dark');
    $('.navbar-light').removeClass('navbar-light').addClass('navbar-dark');
    $('.text-dark').removeClass('text-dark').addClass('text-light');
}

function toLight() {
    $('.bg-dark').removeClass('bg-dark').addClass('bg-white');
    $('.bg-secondary').removeClass('bg-secondary').addClass('bg-light');
    $('.navbar-dark').removeClass('navbar-dark').addClass('navbar-light');
    $('.text-light').removeClass('text-light').addClass('text-dark');
}

$( document ).ready(function() {
    const theme = localStorage.getItem('theme');
    var isDark = false;

    // Moon
    const gibbous = '<img class="emoji" title=":waning_gibbous_moon:" alt=":waning_gibbous_moon:" src="https://github.githubassets.com/images/icons/emoji/unicode/1f316.png" width="20" height="20">'
    const crescent = '<img class="emoji" title=":waning_crescent_moon:" alt=":waning_crescent_moon:" src="https://github.githubassets.com/images/icons/emoji/unicode/1f318.png" width="20" height="20">'

    if (theme === null || theme === 'dark') {
        toDark();
        $( '#btn-theme' ).html(crescent);
        isDark = true;
    };

    $( '#btn-theme' ).click(function() {
        if (isDark) {
            toLight();
            $(this).html(gibbous);
            isDark = false;
            localStorage.setItem('theme', 'light');
        } else {
            toDark();
            $(this).html(crescent);
            isDark = true;
            localStorage.setItem('theme', 'dark');
        }
    });
});
