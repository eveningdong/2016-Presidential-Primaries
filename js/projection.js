function simplemaps_countymap_getxy(lat, lng) {
    var initial = {
        lat: lat,
        lng: lng
    };

    function distance(xy0, xy1) {
        var x0 = xy0.x;
        var y0 = xy0.y;
        var x1 = xy1.x;
        var y1 = xy1.y;
        var dx = x1 - x0;
        var dy = y1 - y0;
        return Math.sqrt(dy * dy + dx * dx);
    }

    function intersection(x0, y0, r0, x1, y1, r1) {
        var a, dx, dy, d, h, rx, ry;
        var x2, y2;
        var dx = x1 - x0;
        var dy = y1 - y0;
        var d = Math.sqrt(dy * dy + dx * dx);
        var a = (r0 * r0 - r1 * r1 + d * d) / (2 * d);
        var x2 = x0 + dx * a / d;
        var y2 = y0 + dy * a / d;
        var h = Math.sqrt(r0 * r0 - a * a);
        var rx = -dy * (h / d);
        var ry = dx * (h / d);
        var xi = x2 + rx;
        var xi_prime = x2 - rx;
        var yi = y2 + ry;
        var yi_prime = y2 - ry;
        return {
            opt1: {
                x: xi,
                y: yi
            },
            opt2: {
                x: xi_prime,
                y: yi_prime
            }
        };
    }

    function lambert(latlng) {
        var radian = 0.017453293;
        var pi = Math.PI;
        var phi = latlng.lat * radian;
        var lam = latlng.lng * radian;
        var phi0 = 89.99999 * radian;
        var lam0 = -180 * radian;
        var phi1 = 29.5 * radian;
        var phi2 = 45.5 * radian;
        var n = Math.log(Math.cos(phi1) * (1 / Math.cos(phi2))) / Math.log(Math.tan(0.25 * pi + 0.5 * phi2) * (1 / Math.tan(0.25 * pi + 0.5 * phi1)));
        var F = Math.cos(phi1) * Math.pow(Math.tan(0.25 * pi + 0.5 * phi1), n) / n;
        var rho = F * Math.pow(1 / Math.tan(0.25 * pi + 0.5 * phi), n);
        var rho0 = F * Math.pow(1 / Math.tan(0.25 * pi + 0.5 * phi0), n);
        return {
            x: rho * Math.sin(n * (lam - lam0)),
            y: rho0 - rho * Math.cos(n * (lam - lam0))
        };
    }
    var calibrate = {
        wa: {
            latlng: {
                lat: 48.38909015961602,
                lng: -124.727783203125
            },
            xy: {
                x: 48,
                y: 3.5
            }
        },
        fl: {
            latlng: {
                lat: 25.199971,
                lng: -81.079102
            },
            xy: {
                x: 469,
                y: 327
            }
        },
        ny: {
            latlng: {
                lat: 42.05,
                lng: -73.5
            },
            xy: {
                x: 506.3,
                y: 97.3
            }
        },
        akw: {
            latlng: {
                lat: 68.9110048456202,
                lng: -166.201171875
            },
            xy: {
                x: 70,
                y: 445
            }
        },
        ake: {
            latlng: {
                lat: 54.876606654108684,
                lng: -130.869140625
            },
            xy: {
                x: 210,
                y: 580
            }
        },
        akn: {
            latlng: {
                lat: 69.68761843185615,
                lng: -141.15234375
            },
            xy: {
                x: 155,
                y: 451
            }
        },
        haw: {
            latlng: {
                lat: 21.879341082799026,
                lng: -159.44732666015625
            },
            xy: {
                x: 249,
                y: 515
            }
        },
        hae: {
            latlng: {
                lat: 19.526141536032483,
                lng: -154.8138427734375
            },
            xy: {
                x: 343,
                y: 569
            }
        }
    };

    function find_point(initial, pt1, pt2, pt3) {
        var lam = lambert(initial);
        var pt1_lam = lambert(pt1.latlng);
        var pt2_lam = lambert(pt2.latlng);
        var pt3_lam = lambert(pt3.latlng);
        var lam_r_pt1 = distance(lam, pt1_lam);
        var lam_r_pt2 = distance(lam, pt2_lam);
        var dist_lam = distance(pt1_lam, pt2_lam);
        var dist_act = distance(pt1.xy, pt2.xy);
        var scale = dist_lam / dist_act;
        var r_pt1 = lam_r_pt1 / scale;
        var r_pt2 = lam_r_pt2 / scale;
        var opts = intersection(pt1.xy.x, pt1.xy.y, r_pt1, pt2.xy.x, pt2.xy.y, r_pt2);
        var dist_third = distance(lam, pt3_lam) / scale;
        var remnant1 = Math.abs(distance(opts.opt1, pt3.xy) - dist_third);
        var remnant2 = Math.abs(distance(opts.opt2, pt3.xy) - dist_third);
        if (remnant1 < remnant2) {
            return {
                x: opts.opt1.x,
                y: opts.opt1.y
            };
        } else {
            return {
                x: opts.opt2.x,
                y: opts.opt2.y
            };
        }
    }
    if (initial.lat > 50) {
        return find_point(initial, calibrate.akw, calibrate.akn, calibrate.ake);
    } else if (initial.lat < 23) {
        return find_point(initial, calibrate.hae, calibrate.haw, calibrate.ake);
    } else {
        return find_point(initial, calibrate.wa, calibrate.fl, calibrate.ny);
    }
}
