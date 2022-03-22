$(function() {
    country = $.url(location.href).param('country');

    if (country == 'SI') {
        sl_selected = 'selected="selected"';
    } else {
        sl_selected = '';
    }
   

    selects = $("select[name='country']");
    selects.append('<option value="SI" ' + sl_selected + '>Slovenija</option>');

    var change = 0,
        updatePrices = function(item) {

            change = 1;

            $(item.children).each(function() {
                if (this.selected) sel = $(this).val();
            });

            if (typeof sel === 'undefined') {
                sel = 'SI';
            }

            if (sel == 'SI') {
                $('.old_price_val').html('78');
                $('.old_price_cur').html('EUR');
                $('.new_price_val').html('39');
                $('.new_price_cur').html('EUR');
                $('select[name=country]').val('SI').trigger('change');
                initializeMask({ mask: "(+386)@9999[999]", removeMaskOnSubmit: false,  definitions: {
                    '@': {
                      validator: "[1-9]",
                      casing: "lower"
                    }
                  }})
            }

       

            change = 0;
        };
    $("select").change(function() {
        if (change == 0) updatePrices(this);
    }).change();

    function initializeMask(mask) {
        $('[name=phone]').inputmask(mask);
    }
    $(document).ready(function () {
        $("[name=phone]").keydown(function (event) {
            if (event.keyCode == 46 || event.keyCode == 8 || event.keyCode == 9 || event.keyCode == 27 ||
                (event.keyCode == 65 && event.ctrlKey === true) ||
                (event.keyCode >= 35 && event.keyCode <= 39)) {
                return;
            } else {
                if ((event.keyCode < 48 || event.keyCode > 57) && (event.keyCode < 96 || event.keyCode > 105)) {
                    event.preventDefault();
                }
            }
        });
    });
});