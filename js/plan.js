(function($, root, undefined) {

    $(function() {

        dragula([document.getElementById('my-plan')]);

        $('a[data-original-title="Remove from Plan"]').on('click', function() {
            $(this).parent().parent().parent().parent().parent().slideUp();
        });

    });

})(jQuery, this);
