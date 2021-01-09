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

    if (theme === null || theme === 'dark') {
        toDark();
        $( '#btn-theme' ).html("🌘");
        isDark = true;
    };

    $( '#btn-theme' ).click(function() {
        if (isDark) {
            toLight();
            $(this).html("🌖");
            isDark = false;
            localStorage.setItem('theme', 'light');
        } else {
            toDark();
            $(this).html("🌘");
            isDark = true;
            localStorage.setItem('theme', 'dark');
        }
    });
});
