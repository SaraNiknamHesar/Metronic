
$(document).ready(function () {
    $(".dropdown").click(function () {
        $(this).find(".dropdown-menu").slideToggle("fast");
        $(this).find(".fa-chevron-down").toggleClass("rotate-180");
    });
});

$(document).on("click", function (event) {
    var $trigger = $(".dropdown");
    if (!$trigger.is(event.target) && !$trigger.has(event.target).length) {
        $(".dropdown-menu").slideUp("fast");
        $trigger.find(".fa-chevron-down").removeClass("rotate-180");
    }
});
document.addEventListener('DOMContentLoaded', function () {
    var toastElList = [].slice.call(document.querySelectorAll('.toast'));
    var toastList = toastElList.map(function (toastEl) {
        return new bootstrap.Toast(toastEl, {
            autohide: false
        });
    });

    toastList.forEach(toast => toast.show());
});
