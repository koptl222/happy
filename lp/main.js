$(document).ready(function () {
    $(function () {
        var o, t = "countdownResetPoplavok",
            e = "countdownTimePoplavok",
            n = (new Date).getTime(),
            a = localStorage.getItem(t);
        null == a ? localStorage.setItem(t, n) : 246e4 < n - a && (o = (new Date).getTime() + 24e5, localStorage.setItem(e, o), localStorage.setItem(t, n)), o = localStorage.getItem(e) ? localStorage.getItem(e) : (new Date).getTime() + 24e5, $(".countdown").countdown(o, function (t) {
            $(this).html(t.strftime('<div class="countdown__item hour">%H</div><div class="countdown__item minute">%M</div><div class="countdown__item second">%S</div>'))
        }).on("update.countdown", function (t) {
            o = t.finalDate.getTime(), localStorage.setItem(e, o)
        }).on("finish.countdown", function (t) {
            $(".countdown").countdown("stop")
        })
    }), $(".zak__btn").click(function () {
        var t = $(this).attr("href"),
            t = $(t).offset().top;
        return jQuery("html:not(:animated),body:not(:animated)").animate({
            scrollTop: t
        }, 1e3), !1
    }), $(function () {
        $(".owl-carousel").owlCarousel({
            items: 1,
            loop: !0,
            nav: !0,
            margin: 15
        }), $(".owl-prev").empty(), $(".owl-next").empty()
    }), $(function () {
        var t = $("[data-gif]");
        $.each(t, function (t, o) {
            var e = $(o).data("gif");
            $(o).attr("src", e)
        })
    })
});