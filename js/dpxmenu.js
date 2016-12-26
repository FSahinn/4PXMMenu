
$(document).ready(function() {
        $mobilmenu = $('.mobmenu');
        $menuac = $('#menuac');

        $menuac.click(function() {
            $(this).toggleClass('acik');
            $('#ust').toggleClass('sagagel');
            $mobilmenu.toggleClass('mobmenu-acik');
        });
});
