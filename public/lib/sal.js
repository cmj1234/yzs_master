/*jquery.als v.1.7 | (c) 2012, 2014 Federica Sibella musings(at)musings(dot)it | http://www.musings.it | MIT license.*/ ! function (e) {
    function t(e) {
        if ("string" == typeof e) {
            var t = e.indexOf("_"); - 1 != t && (e = e.substr(t + 1))
        }
        return e
    }

    function i(i, o) {
        i.preventDefault(), void 0 === o && (o = e(this));
        var r = t(o.attr("data-id")),
            s = n[r];
        s.next.off(), s.prev.off(), s.viewport.off("touchend"), "yes" === s.options.autoscroll && e.fn.als("stop", r), e.fn.als("next", r), "yes" === s.options.autoscroll && e.fn.als("start", r)
    }

    function o(i, o) {
        i.preventDefault(), void 0 === o && (o = e(this));
        var r = t(o.attr("data-id")),
            s = n[r];
        s.prev.off(), s.next.off(), s.viewport.off("touchend"), "yes" === s.options.autoscroll && e.fn.als("stop", r), e.fn.als("prev", r), "yes" === s.options.autoscroll && e.fn.als("start", r)
    }
    var n = [],
        s = 0,
        a = {
            init: function (t) {
                this.each(function () {
                    var a = {
                            visible_items: 3,
                            scrolling_items: 1,
                            orientation: "horizontal",
                            circular: "no",
                            autoscroll: "no",
                            interval: 4e3,
                            speed: 600,
                            easing: "swing",
                            direction: "left",
                            start_from: 0
                        },
                        l = e(this),
                        c = l.data("als"),
                        m = e(),
                        d = e(),
                        u = e(),
                        p = e(),
                        h = e(),
                        v = e(),
                        f = 0,
                        w = 0,
                        T = 0,
                        g = 0,
                        _ = 0,
                        y = 0,
                        x = 0,
                        k = 0,
                        b = 0,
                        E = 0,
                        q = 0,
                        H = 0,
                        W = {};
                    switch (W.swipeTreshold = 100, W.allowedTime = 300, m = e.extend(a, t), "no" == m.circular && "yes" == m.autoscroll && (m.circular = "yes"), ("linear" != m.easing || "swing" != m.easing) && (m.easing = "swing"), l.attr("id") && "" != l.attr("id") || l.attr("id", "als-container_" + s), l.attr("data-id", "als-container_" + s), p = l.find(".als-viewport").attr("data-id", "als-viewport_" + s), u = l.find(".als-wrapper").attr("data-id", "als-wrapper_" + s), d = l.find(".als-item"), f = d.size(), m.visible_items > f && (m.visible_items = f - 1), m.scrolling_items > m.visible_items && (m.visible_items > 1 ? m.scrolling_items = m.visible_items - 1 : 1 === m.visible_items && (m.scrolling_items = m.visible_items)), m.start_from > f - m.visible_items && (m.start_from = 0), h = l.find(".als-prev").attr("data-id", "als-prev_" + s), v = l.find(".als-next").attr("data-id", "als-next_" + s), m.orientation) {
                        case "horizontal":
                        default:
                            if (d.each(function (t) {
                                    e(this).attr("id", "als-item_" + s + "_" + t), T += e(this).outerWidth(!0), e(this).outerHeight(!0) > x && (x = e(this).outerHeight(!0)), b < m.visible_items && (0 == m.start_from ? (w += e(this).outerWidth(!0), b++) : t >= m.start_from && (w += e(this).outerWidth(!0), b++)), 0 != m.start_from && (E < m.start_from && (y += e(this).outerWidth(!0), E++), q = m.start_from)
                                }), u.css("width", T), d.css("left", -y), p.css("width", w), u.css("height", x), p.css("height", x), "yes" == m.circular && 0 != m.start_from)
                                for (r = 0; r < m.start_from; r++) {
                                    var z = d.last().position(),
                                        D = z.left + d.last().outerWidth(!0);
                                    d.eq(r).css("left", D)
                                }
                            break;
                        case "vertical":
                            if (d.each(function (t) {
                                    e(this).attr("id", "als-item_" + s + "_" + t), _ += e(this).outerHeight(!0), e(this).outerWidth(!0) > k && (k = e(this).outerWidth(!0)), b < m.visible_items && (0 == m.start_from ? (g += e(this).outerHeight(!0), b++) : t >= m.start_from && (g += e(this).outerHeight(!0), b++)), 0 != m.start_from && (E < m.start_from && (y += e(this).outerHeight(!0), E++), q = m.start_from)
                                }), u.css("height", _), d.css("top", -y), p.css("height", g), u.css("width", k), p.css("width", k), "yes" == m.circular && 0 != m.start_from)
                                for (r = 0; r < m.start_from; r++) {
                                    var z = d.last().position(),
                                        X = z.top + d.last().outerHeight(!0);
                                    d.eq(r).css("top", X)
                                }
                    }
                    return "no" == m.circular && (0 == m.start_from && h.css("display", "none"), m.visible_items + m.start_from == f && v.css("display", "none")), v.on("click touchstart touchend", i), h.on("click touchstart touchend", o), p.on("touchstart", function (e) {
                        if (void 0 == e.originalEvent.touches) var t = e;
                        else var t = e.originalEvent.touches[0] || e.originalEvent.changedTouches[0];
                        W.ox = t.pageX, W.oy = t.pageY, W.startTime = (new Date).getTime()
                    }), p.on("touchmove", function () {}), p.on("touchend", function (e) {
                        if (void 0 == e.originalEvent.touches) var t = e;
                        else var t = e.originalEvent.touches[0] || e.originalEvent.changedTouches[0];
                        W.dx = t.pageX - W.ox, W.dy = t.pageY - W.oy, W.endTime = (new Date).getTime() - W.startTime, "horizontal" == m.orientation ? W.dx < -W.swipeTreshold && W.endTime < W.allowedTime ? ("yes" == m.circular || m.visible_items + m.start_from < f) && i(e, p) : W.dx > W.swipeTreshold && W.endTime < W.allowedTime && ("yes" == m.circular || m.start_from > 0) && o(e, p) : W.dy < -W.swipeTreshold && W.endTime < W.allowedTime ? ("yes" == m.circular || m.visible_items + m.start_from < f) && i(e, p) : W.dy > W.swipeTreshold && W.endTime < W.allowedTime && ("yes" == m.circular || m.start_from > 0) && o(e, p)
                    }), l.data("als", {
                        container: l,
                        instance: s,
                        options: m,
                        viewport: p,
                        wrapper: u,
                        prev: h,
                        next: v,
                        item: d,
                        num_items: f,
                        wrapper_width: T,
                        viewport_width: w,
                        wrapper_height: _,
                        viewport_height: g,
                        current: q,
                        timer: H,
                        mm: W
                    }), c = l.data("als"), n[s] = c, "yes" == m.autoscroll ? (e.fn.als("start", s), u.hover(function () {
                        e.fn.als("stop", e(this).attr("data-id"))
                    }, function () {
                        e.fn.als("start", e(this).attr("data-id"))
                    })) : "no" == m.autoscroll && e.fn.als("stop", s), s++, n
                })
            },
            next: function (e) {
                e = t(e);
                var r = n[e],
                    s = r.mm,
                    a = 0,
                    l = 0;
                switch (r.options.orientation) {
                    case "horizontal":
                    default:
                        var c = 0,
                            m = 0;
                        switch (r.options.circular) {
                            case "no":
                            default:
                                for (a = r.current; a < r.current + r.options.scrolling_items; a++) c += r.item.eq(a).outerWidth(!0);
                                for (r.current += r.options.scrolling_items, l = r.current; l < r.current + r.options.visible_items; l++) m += r.item.eq(l).outerWidth(!0);
                                r.viewport.animate({
                                    width: m
                                }, r.options.speed, r.options.easing), r.item.animate({
                                    left: "-=" + c
                                }, r.options.speed, r.options.easing), r.item.promise().done(function () {
                                    r.next.on("click touchstart touchend", i), r.prev.on("click touchstart touchend", o), r.viewport.on("touchend", function (e) {
                                        if (void 0 == e.originalEvent.touches) var t = e;
                                        else var t = e.originalEvent.touches[0] || e.originalEvent.changedTouches[0];
                                        s.dx = t.pageX - s.ox, s.dy = t.pageY - s.oy, s.endTime = (new Date).getTime() - s.startTime, "horizontal" == r.options.orientation ? s.dx < -s.swipeTreshold && s.endTime < s.allowedTime ? r.current + r.options.visible_items < r.num_items && i(e, r.viewport) : s.dx > s.swipeTreshold && s.endTime < s.allowedTime && r.current > 0 && o(e, r.viewport) : s.dy < -s.swipeTreshold && s.endTime < s.allowedTime ? r.current + r.options.visible_items < r.num_items && i(e, r.viewport) : s.dy > s.swipeTreshold && s.endTime < s.allowedTime && r.current > 0 && o(e, r.viewport)
                                    })
                                }), r.current > 0 && r.prev.show(), r.current + r.options.visible_items >= r.num_items && r.next.hide();
                                break;
                            case "yes":
                                var d = 0,
                                    u = [];
                                for (a = r.current; a < r.current + r.options.scrolling_items; a++) {
                                    var p = a;
                                    a >= r.num_items && (p = a - r.num_items), c += r.item.eq(p).outerWidth(!0), u[d] = p, d++
                                }
                                for (r.current += r.options.scrolling_items, r.current >= r.num_items && (r.current -= r.num_items), l = r.current; l < r.current + r.options.visible_items; l++) {
                                    var h = l;
                                    l >= r.num_items && (h = l - r.num_items), m += r.item.eq(h).outerWidth(!0)
                                }
                                r.viewport.animate({
                                    width: m
                                }, r.options.speed, r.options.easing), r.item.animate({
                                    left: "-=" + c
                                }, r.options.speed, r.options.easing), r.item.promise().done(function () {
                                    var e = r.item.last().position(),
                                        t = e.left + r.item.last().outerWidth(!0);
                                    for (k5 = 0; k5 < u.length; k5++) {
                                        if (0 == u[k5]) var e = r.item.last().position(),
                                            t = e.left + r.item.last().outerWidth(!0);
                                        r.item.eq(u[k5]).css("left", t)
                                    }
                                    r.next.on("click touchstart touchend", i), r.prev.on("click touchstart touchend", o), r.viewport.on("touchend", function (e) {
                                        if (void 0 == e.originalEvent.touches) var t = e;
                                        else var t = e.originalEvent.touches[0] || e.originalEvent.changedTouches[0];
                                        s.dx = t.pageX - s.ox, s.dy = t.pageY - s.oy, s.endTime = (new Date).getTime() - s.startTime, "horizontal" == r.options.orientation ? s.dx < -s.swipeTreshold && s.endTime < s.allowedTime ? i(e, r.viewport) : s.dx > s.swipeTreshold && s.endTime < s.allowedTime && o(e, r.viewport) : s.dy < -s.swipeTreshold && s.endTime < s.allowedTime ? i(e, r.viewport) : s.dy > s.swipeTreshold && s.endTime < s.allowedTime && o(e, r.viewport)
                                    })
                                })
                        }
                        break;
                    case "vertical":
                        var v = 0,
                            f = 0;
                        switch (r.options.circular) {
                            case "no":
                            default:
                                for (a = r.current; a < r.current + r.options.scrolling_items; a++) v += r.item.eq(a).outerHeight(!0);
                                for (r.current += r.options.scrolling_items, l = r.current; l < r.current + r.options.visible_items; l++) f += r.item.eq(l).outerHeight(!0);
                                r.viewport.animate({
                                    height: f
                                }, r.options.speed, r.options.easing), r.item.animate({
                                    top: "-=" + v
                                }, r.options.speed, r.options.easing), r.item.promise().done(function () {
                                    r.next.on("click touchstart touchend", i), r.prev.on("click touchstart touchend", o), r.viewport.on("touchend", function (e) {
                                        if (void 0 == e.originalEvent.touches) var t = e;
                                        else var t = e.originalEvent.touches[0] || e.originalEvent.changedTouches[0];
                                        s.dx = t.pageX - s.ox, s.dy = t.pageY - s.oy, s.endTime = (new Date).getTime() - s.startTime, "horizontal" == r.options.orientation ? s.dx < -s.swipeTreshold && s.endTime < s.allowedTime ? r.current + r.options.visible_items < r.num_items && i(e, r.viewport) : s.dx > s.swipeTreshold && s.endTime < s.allowedTime && r.current > 0 && o(e, r.viewport) : s.dy < -s.swipeTreshold && s.endTime < s.allowedTime ? r.current + r.options.visible_items < r.num_items && i(e, r.viewport) : s.dy > s.swipeTreshold && s.endTime < s.allowedTime && r.current > 0 && o(e, r.viewport)
                                    })
                                }), r.current > 0 && r.prev.show(), r.current + r.options.visible_items >= r.num_items && r.next.hide();
                                break;
                            case "yes":
                                var d = 0,
                                    u = [];
                                for (a = r.current; a < r.current + r.options.scrolling_items; a++) {
                                    var p = a;
                                    a >= r.num_items && (p = a - r.num_items), v += r.item.eq(p).outerHeight(!0), u[d] = p, d++
                                }
                                for (r.current += r.options.scrolling_items, r.current >= r.num_items && (r.current -= r.num_items), l = r.current; l < r.current + r.options.visible_items; l++) {
                                    var h = l;
                                    l >= r.num_items && (h = l - r.num_items), f += r.item.eq(h).outerHeight(!0)
                                }
                                r.viewport.animate({
                                    height: f
                                }), r.item.animate({
                                    top: "-=" + v
                                }), r.item.promise().done(function () {
                                    var e = r.item.last().position(),
                                        t = e.top + r.item.last().outerHeight(!0);
                                    for (k5 = 0; k5 < u.length; k5++) {
                                        if (0 == u[k5]) var e = r.item.last().position(),
                                            t = e.top + r.item.last().outerHeight(!0);
                                        r.item.eq(u[k5]).css("top", t)
                                    }
                                    r.next.on("click touchstart touchend", i), r.prev.on("click touchstart touchend", o), r.viewport.on("touchend", function (e) {
                                        if (void 0 == e.originalEvent.touches) var t = e;
                                        else var t = e.originalEvent.touches[0] || e.originalEvent.changedTouches[0];
                                        s.dx = t.pageX - s.ox, s.dy = t.pageY - s.oy, s.endTime = (new Date).getTime() - s.startTime, "horizontal" == r.options.orientation ? s.dx < -s.swipeTreshold && s.endTime < s.allowedTime ? i(e, r.viewport) : s.dx > s.swipeTreshold && s.endTime < s.allowedTime && o(e, r.viewport) : s.dy < -s.swipeTreshold && s.endTime < s.allowedTime ? i(e, r.viewport) : s.dy > s.swipeTreshold && s.endTime < s.allowedTime && o(e, r.viewport)
                                    })
                                })
                        }
                }
                return n[e] = r, n
            },
            prev: function (e) {
                e = t(e);
                var r = n[e],
                    s = r.mm,
                    a = 0,
                    l = 0;
                switch (r.options.orientation) {
                    case "horizontal":
                    default:
                        var c = 0,
                            m = 0;
                        switch (r.options.circular) {
                            case "no":
                            default:
                                for (r.current -= r.options.scrolling_items, a = r.current; a < r.current + r.options.scrolling_items; a++) c += r.item.eq(a).outerWidth(!0);
                                for (l = r.current; l < r.current + r.options.visible_items; l++) m += r.item.eq(l).outerWidth(!0);
                                r.viewport.animate({
                                    width: m
                                }), r.item.animate({
                                    left: "+=" + c
                                }, r.options.speed, r.options.easing), r.item.promise().done(function () {
                                    r.next.on("click touchstart touchend", i), r.prev.on("click touchstart touchend", o), r.viewport.on("touchend", function (e) {
                                        if (void 0 == e.originalEvent.touches) var t = e;
                                        else var t = e.originalEvent.touches[0] || e.originalEvent.changedTouches[0];
                                        s.dx = t.pageX - s.ox, s.dy = t.pageY - s.oy, s.endTime = (new Date).getTime() - s.startTime, "horizontal" == r.options.orientation ? s.dx < -s.swipeTreshold && s.endTime < s.allowedTime ? r.current + r.options.visible_items < r.num_items && i(e, r.viewport) : s.dx > s.swipeTreshold && s.endTime < s.allowedTime && r.current > 0 && o(e, r.viewport) : s.dy < -s.swipeTreshold && s.endTime < s.allowedTime ? r.current + r.options.visible_items < r.num_items && i(e, r.viewport) : s.dy > s.swipeTreshold && s.endTime < s.allowedTime && r.current > 0 && o(e, r.viewport)
                                    })
                                }), r.current <= 0 && r.prev.hide(), r.current + r.options.visible_items < r.num_items && r.next.show();
                                break;
                            case "yes":
                                var d = 0,
                                    u = [];
                                for (r.current -= r.options.scrolling_items, r.current < 0 && (r.current += r.num_items), a = r.current; a < r.current + r.options.scrolling_items; a++) {
                                    var p = a;
                                    a >= r.num_items && (p = a - r.num_items), c += r.item.eq(p).outerWidth(!0), u[d] = p, d++
                                }
                                for (l = r.current; l < r.current + r.options.visible_items; l++) {
                                    var h = l;
                                    l >= r.num_items && (h = l - r.num_items), m += r.item.eq(h).outerWidth(!0)
                                }
                                var v = r.item.first().position(),
                                    f = v.left - r.wrapper_width;
                                for (k5 = 0; k5 < u.length; k5++)
                                    if (r.item.eq(u[k5]).css("left", f), 0 == u[k5]) {
                                        var w = r.item.eq(0).position(),
                                            T = w.left - r.wrapper_width;
                                        for (k6 = 0; k5 > k6; k6++) r.item.eq(u[k6]).css("left", T)
                                    }
                                setTimeout(function () {
                                    r.viewport.animate({
                                        width: m
                                    }), r.item.animate({
                                        left: "+=" + c
                                    }, r.options.speed, r.options.easing), r.item.promise().done(function () {
                                        r.next.on("click touchstart touchend", i), r.prev.on("click touchstart touchend", o), r.viewport.on("touchend", function (e) {
                                            if (void 0 == e.originalEvent.touches) var t = e;
                                            else var t = e.originalEvent.touches[0] || e.originalEvent.changedTouches[0];
                                            s.dx = t.pageX - s.ox, s.dy = t.pageY - s.oy, s.endTime = (new Date).getTime() - s.startTime, "horizontal" == r.options.orientation ? s.dx < -s.swipeTreshold && s.endTime < s.allowedTime ? i(e, r.viewport) : s.dx > s.swipeTreshold && s.endTime < s.allowedTime && o(e, r.viewport) : s.dy < -s.swipeTreshold && s.endTime < s.allowedTime ? i(e, r.viewport) : s.dy > s.swipeTreshold && s.endTime < s.allowedTime && o(e, r.viewport)
                                        })
                                    })
                                }, 200)
                        }
                        break;
                    case "vertical":
                        var g = 0,
                            _ = 0;
                        switch (r.options.circular) {
                            case "no":
                            default:
                                for (r.current -= r.options.scrolling_items, a = r.current; a < r.current + r.options.scrolling_items; a++) g += r.item.eq(a).outerHeight(!0);
                                for (l = r.current; l < r.current + r.options.visible_items; l++) _ += r.item.eq(l).outerHeight(!0);
                                r.viewport.animate({
                                    height: _
                                }), r.item.animate({
                                    top: "+=" + g
                                }, r.options.speed, r.options.easing), r.item.promise().done(function () {
                                    r.next.on("click touchstart touchend", i), r.prev.on("click touchstart touchend", o), r.viewport.on("touchend", function (e) {
                                        if (void 0 == e.originalEvent.touches) var t = e;
                                        else var t = e.originalEvent.touches[0] || e.originalEvent.changedTouches[0];
                                        s.dx = t.pageX - s.ox, s.dy = t.pageY - s.oy, s.endTime = (new Date).getTime() - s.startTime, "horizontal" == r.options.orientation ? s.dx < -s.swipeTreshold && s.endTime < s.allowedTime ? r.current + r.options.visible_items < r.num_items && i(e, r.viewport) : s.dx > s.swipeTreshold && s.endTime < s.allowedTime && r.current > 0 && o(e, r.viewport) : s.dy < -s.swipeTreshold && s.endTime < s.allowedTime ? r.current + r.options.visible_items < r.num_items && i(e, r.viewport) : s.dy > s.swipeTreshold && s.endTime < s.allowedTime && r.current > 0 && o(e, r.viewport)
                                    })
                                }), r.current <= 0 && r.prev.hide(), r.current + r.options.visible_items < r.num_items && r.next.show();
                                break;
                            case "yes":
                                var d = 0,
                                    u = [];
                                for (r.current -= r.options.scrolling_items, r.current < 0 && (r.current += r.num_items), a = r.current; a < r.current + r.options.scrolling_items; a++) {
                                    var p = a;
                                    a >= r.num_items && (p = a - r.num_items), g += r.item.eq(p).outerHeight(!0), u[d] = p, d++
                                }
                                for (l = r.current; l < r.current + r.options.visible_items; l++) {
                                    var h = l;
                                    l >= r.num_items && (h = l - r.num_items), _ += r.item.eq(h).outerHeight(!0)
                                }
                                var v = r.item.first().position(),
                                    y = v.top - r.wrapper_height;
                                for (k5 = 0; k5 < u.length; k5++)
                                    if (r.item.eq(u[k5]).css("top", y), 0 == u[k5]) {
                                        var w = r.item.eq(0).position(),
                                            x = w.top - r.wrapper_height;
                                        for (k6 = 0; k5 > k6; k6++) r.item.eq(u[k6]).css("top", x)
                                    }
                                setTimeout(function () {
                                    r.viewport.animate({
                                        height: _
                                    }, r.options.speed, r.options.easing), r.item.animate({
                                        top: "+=" + g
                                    }, r.options.speed, r.options.easing), r.item.promise().done(function () {
                                        r.next.on("click touchstart touchend", i), r.prev.on("click touchstart touchend", o), r.viewport.on("touchend", function (e) {
                                            if (void 0 == e.originalEvent.touches) var t = e;
                                            else var t = e.originalEvent.touches[0] || e.originalEvent.changedTouches[0];
                                            s.dx = t.pageX - s.ox, s.dy = t.pageY - s.oy, s.endTime = (new Date).getTime() - s.startTime, "horizontal" == r.options.orientation ? s.dx < -s.swipeTreshold && s.endTime < s.allowedTime ? i(e, r.viewport) : s.dx > s.swipeTreshold && s.endTime < s.allowedTime && o(e, r.viewport) : s.dy < -s.swipeTreshold && s.endTime < s.allowedTime ? i(e, r.viewport) : s.dy > s.swipeTreshold && s.endTime < s.allowedTime && o(e, r.viewport)
                                        })
                                    })
                                }, 200)
                        }
                }
                return n[e] = r, n
            },
            start: function (i) {
                i = t(i);
                var o = n[i];
                switch (0 != o.timer && clearInterval(o.timer), o.options.direction) {
                    case "left":
                    case "up":
                    default:
                        o.timer = setInterval(function () {
                            o.next.off(), o.prev.off(), o.viewport.off("touchend"), e.fn.als("next", i)
                        }, o.options.interval);
                        break;
                    case "right":
                    case "down":
                        o.timer = setInterval(function () {
                            o.prev.off(), o.next.off(), o.viewport.off("touchend"), e.fn.als("prev", i)
                        }, o.options.interval)
                }
                return n[i] = o, n
            },
            stop: function (e) {
                e = t(e);
                var i = n[e];
                return clearInterval(i.timer), n[e] = i, n
            },
            destroy: function () {
                id = t(e(this).attr("data-id"));
                var i = n[id];
                i.prev.off(), i.next.off(), i.viewport.off(), e.fn.als("stop", id), e.removeData(i, "als"), this.unbind(), this.element = null
            }
        };
    e.fn.als = function (t) {
        return a[t] ? a[t].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof t && t ? void e.error("Method " + t + " does not exist on jQuery.als") : a.init.apply(this, arguments)
    }
}(jQuery);