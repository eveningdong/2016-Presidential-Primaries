var create_simplemaps_countymap = function(no_clone) {
    var map_name = simplemaps_countymap_mapinfo.map_name;
    var demo = true;
    Raphael.fn.print_path = function(x, y, string, font, size) {
        var print_text = this.print(x, y, string, font, size, "middle");
        var actual_path = print_text.attrs.path.toString();
        var bb = Raphael.pathBBox(actual_path);
        print_text.remove();
        var dx = x - bb.x - bb.width / 2;
        var dy = y - bb.y - bb.height / 2;
        var transformation = "t" + dx + "," + dy;
        var result = Raphael.transformPath(actual_path, transformation);
        return result.toString();
    };

    function clone(srcInstance) {
        if (typeof srcInstance != "object" || srcInstance === null) {
            return srcInstance;
        }
        var newInstance = srcInstance.constructor();
        for (var i in srcInstance) {
            newInstance[i] = clone(srcInstance[i]);
        }
        return newInstance;
    }

    function isDescendant(parent, child) {
        var node = child.parentNode;
        while (node != null) {
            if (node == parent) {
                return true;
            }
            node = node.parentNode;
        }
        return false;
    }
    if (typeof console === "undefined" || typeof console.log === "undefined") {
        console = {};
        console.log = function() {};
    }

    function isFunction(functionToCheck) {
        var getType = {};
        return functionToCheck && getType.toString.call(functionToCheck) === "[object Function]";
    }

    function set_responsive_handler() {
        function resize() {
            resize_paper();
        }
        var resizeTimer;

        function detect_resize() {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(resize, 300);
        }
        if (window.addEventListener) {
            window.addEventListener("resize", function() {
                detect_resize();
            }, false);
            window.addEventListener("orientationchange", function() {
                detect_resize();
            }, false);
        } else {
            window.attachEvent("resize", function() {
                detect_resize();
            }, false);
            window.attachEvent("orientationchange", function() {
                detect_resize();
            }, false);
        }
        if (vml) {
            document.body.onresize = function() {
                resize();
            };
        }
    }
    var curtop;

    function findPos(obj) {
        var curleft = curtop = 0,
            scr = obj,
            fixed = false;
        while ((scr = scr.parentNode) && scr != document.body) {
            curleft -= scr.scrollLeft || 0;
            curtop -= scr.scrollTop || 0;
            if (getStyle(scr, "position") == "fixed") {
                fixed = true;
            }
        }
        if (fixed && !window.opera) {
            var scrDist = scrollDist();
            curleft += scrDist[0];
            curtop += scrDist[1];
        }
        do {
            curleft += obj.offsetLeft;
            curtop += obj.offsetTop;
        } while (obj = obj.offsetParent);
        return [curleft, curtop];
    }

    function scrollDist() {
        var html = document.getElementsByTagName("html")[0];
        if (html.scrollTop && document.documentElement.scrollTop) {
            return [html.scrollLeft, html.scrollTop];
        } else if (html.scrollTop || document.documentElement.scrollTop) {
            return [html.scrollLeft + document.documentElement.scrollLeft, html.scrollTop + document.documentElement.scrollTop];
        } else if (document.body.scrollTop) {
            return [document.body.scrollLeft, document.body.scrollTop];
        }
        return [0, 0];
    }

    function getStyle(obj, styleProp) {
        if (obj.currentStyle) {
            var y = obj.currentStyle[styleProp];
        } else if (window.getComputedStyle) {
            var y = window.getComputedStyle(obj, null)[styleProp];
        }
        return y;
    }

    function distance(xy0, xy1) {
        var x0 = xy0.x;
        var y0 = xy0.y;
        var x1 = xy1.x;
        var y1 = xy1.y;
        var dx = x1 - x0;
        var dy = y1 - y0;
        return Math.sqrt(dy * dy + dx * dx);
    }

    function create_bbox_state(auto) {
        var print_string = "simplemaps_" + map_name + "map.mapinfo.state_bbox_array={";
        var state_bbox_array = {};
        for (var state in mapinfo.paths) {
            var path_to_add = mapinfo.paths[state];
            path_to_add = Raphael._pathToAbsolute(path_to_add);
            var bt = Raphael.pathBBox(path_to_add);
            var x = Math.round(bt.x);
            var y = Math.round(bt.y);
            var y2 = Math.round(bt.y2);
            var x2 = Math.round(bt.x2);
            print_string += "'" + state + "'" + ":{x: " + x + ",y:" + y + ",x2:" + x2 + ",y2:" + y2 + "},";
            state_bbox_array[state] = bt;
        }
        print_string = print_string.substring(0, print_string.length - 1);
        print_string += "};";
        if (!auto) {
            console.log(print_string);
        }
        return state_bbox_array;
    }
    if (typeof Object.create !== "function") {
        Object.create = function(o) {
            function F() {}
            F.prototype = o;
            return new F;
        };
    }
    if (!Array.prototype.forEach) {
        Array.prototype.forEach = function(fn, scope) {
            for (var i = 0, len = this.length; i < len; ++i) {
                fn.call(scope, this[i], i, this);
            }
        };
    }

    function linePath(startX, startY, endX, endY) {
        var start = {
            x: startX,
            y: startY
        };
        var end = {
            x: endX,
            y: endY
        };
        return "M" + start.x + " " + start.y + " L" + end.x + " " + end.y;
    }
    var isMobile = {
        Android: function() {
            return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function() {
            return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS: function() {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: function() {
            return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: function() {
            return navigator.userAgent.match(/IEMobile/i);
        },
        any: function() {
            return isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows();
        }
    };

    function is_touch() {
        return isMobile.any();
    }
    var hooks_object = {
        over_state: false,
        over_region: false,
        over_location: false,
        out_state: false,
        out_region: false,
        out_location: false,
        click_state: false,
        click_region: false,
        click_location: false,
        close_popup: false,
        zoomable_click_state: false,
        zoomable_click_region: false,
        complete: false,
        refresh_complete: false,
        zooming_complete: false,
        back: false
    };
    var mapdata;

    function get_mapdata() {
        if (no_clone) {
            mapdata = simplemaps_countymap_mapdata;
        } else {
            if (!api_object) {
                mapdata = clone(simplemaps_countymap_mapdata);
            } else {
                mapdata = api_object.mapdata;
            }
        }
    }
    get_mapdata();
    var back_image, images_directory, directory, mapinfo, state_specific, main_settings, getxy, normalizing_factor;

    function preload() {
        state_specific = mapdata.state_specific;
        mapinfo = simplemaps_countymap_mapinfo;
        getxy = simplemaps_countymap_getxy;
        main_settings = mapdata.main_settings;
        var scripts = document.getElementsByTagName("script");
        var mysrc = scripts[scripts.length - 1].src;
        back_image = main_settings.back_image != "no" ? main_settings.back_image : false;
        images_directory = main_settings.images_directory != "default" ? main_settings.images_directory : false;
        directory = images_directory ? images_directory : mysrc.substring(0, mysrc.lastIndexOf("/countymap.js") + 1) + "map_images/";
        normalizing_factor = mapinfo.calibrate.width / 750;
    }
    var ignore_pos, current_viewbox, responsive, div, initial_zoom, initial_zoom_solo, tooltip_manual, last_clicked, tooltip_up;

    function get_map_info() {
        div = main_settings.div === undefined ? "map" : main_settings.div;
        initial_zoom = main_settings.initial_zoom === undefined ? -1 : main_settings.initial_zoom;
        initial_zoom_solo = main_settings.initial_zoom_solo == "yes" ? true : false;
        responsive = main_settings.width == "responsive" ? true : false;
        zooming_on = main_settings.zoom == "no" ? false : true;
        regions = mapinfo.default_regions && zooming_on ? mapinfo.default_regions : false;
        if (mapdata.regions) {
            regions = mapdata.regions;
        }
        if (mapdata.labels) {
            labels = mapdata.labels;
        }
        tooltip_manual = false;
        last_clicked = false;
        tooltip_up = false;
        ignore_pos = false;
    }
    var zoom_time, order_number, zoom_percentage, initial_back, link_text, zooming_on, fade_time, hide_eastern_labels, labels, ignore_default_labels;
    var adjacent_opacity;
    var opacity;
    var incremental;
    var label_size;
    var label_color;
    var label_opacity;
    var new_tab;
    var default_location_opacity;
    var hooks;
    var border_size;
    var popup_color;
    var popup_opacity;
    var popup_shadow;
    var popup_corners;
    var popup_nocss;
    var popup_font;

    function get_refreshable_info() {
        opacity = main_settings.background_transparent == "yes" ? 0 : 1;
        label_size = main_settings.label_size ? main_settings.label_size : 22;
        label_color = main_settings.label_color ? main_settings.label_color : "white";
        new_tab = main_settings.url_new_tab == "yes" ? true : false;
        default_location_opacity = main_settings.location_opacity ? main_settings.location_opacity : 1;
        hooks = main_settings.js_hooks == "yes" ? true : false;
        border_size = main_settings.border_size ? main_settings.border_size : 1.5;
        popup_color = main_settings.popup_color ? main_settings.popup_color : "white";
        popup_opacity = main_settings.popup_opacity ? main_settings.popup_opacity : 0.9;
        popup_shadow = main_settings.popup_shadow > -1 ? main_settings.popup_shadow : 1;
        popup_corners = main_settings.popup_corners ? main_settings.popup_corners : 5;
        popup_nocss = main_settings.popup_nocss == "yes" ? true : false;
        popup_font = main_settings.popup_font ? main_settings.popup_font : "12px/1.5 Verdana, Arial, Helvetica, sans-serif";
        incremental = main_settings.zoom_out_incrementally == "no" ? false : true;
        adjacent_opacity = main_settings.adjacent_opacity ? main_settings.adjacent_opacity : 0.3;
        zoom_time = main_settings.zoom_time ? main_settings.zoom_time : 0.5;
        fade_time = main_settings.fade_time ? main_settings.fade_time * 1000 : 200;
        labels = mapdata.labels;
        initial_back = main_settings.initial_back && main_settings.initial_back != "no" ? main_settings.initial_back : false;
        hide_eastern_labels = main_settings.hide_eastern_labels == "yes" ? true : false;
        link_text = main_settings.link_text ? main_settings.link_text : "(Link)";
        back_image = main_settings.back_image != "no" ? main_settings.back_image : false;
        order_number = main_settings.order_number ? main_settings.order_number : false;
        zoom_percentage = main_settings.zoom_percentage ? main_settings.zoom_percentage : 0.99;
    }

    function is_onclick(popups) {
        if (popups == "on_click") {
            return true;
        } else if (popups == "detect" && touch) {
            return true;
        } else {
            return false;
        }
    }

    function is_off(popups) {
        if (popups == "off") {
            return true;
        } else {
            return false;
        }
    }
    var vml;
    var tough;
    var ie;
    var ios;
    var on_click;
    var popup_off = false;
    var reload = false;
    var touch;
    var popups;

    function get_client_info() {
        vml = Raphael.type == "VML" ? true : false;
        ie = document.all ? true : false;
        ios = isMobile.iOS() ? true : false;
        touch = is_touch() ? true : false;
        popups = main_settings.pop_ups ? main_settings.pop_ups : main_settings.popups;
        on_click = false;
        popup_off = is_off(popups);
    }
    var map_outer;
    var map_inner;
    var mapdiv;

    function create_dom_structure() {
        mapdiv = document.getElementById(div);
        console.log(mapdiv);
        map_outer = document.getElementById(div + "_outer") ? document.getElementById(div + "_outer") : false;
        map_inner = document.getElementById(div + "_inner") ? document.getElementById(div + "_inner") : false;
        if (map_outer) {
            mapdiv.removeChild(map_outer);
            mapdiv.removeChild(map_inner);
            var tt_to_del = document.getElementById("tt_sm");
            if (tt_to_del) {
                tt_to_del.parentNode.removeChild(tt_to_del);
            }
        }
        map_outer = document.createElement("div");
        map_inner = document.createElement("div");
        map_outer.id = div + "_outer";
        map_inner.id = div + "_inner";
        map_inner.style.position = "relative";
        map_outer.style.position = "absolute";
        map_outer.style.zIndex = "1";
        console.log(mapdiv);
        mapdiv.appendChild(map_outer);
        mapdiv.appendChild(map_inner);
    }
    var width;
    var height;
    var scale;
    var ratio;
    var x_scale;
    var y_scale;
    var original_location;
    var original_width;
    var original_height;

    function create_dimensions() {
        if (responsive) {
            width = mapdiv.parentNode.offsetWidth;
            mapdiv.style.width = width + "px";
        } else {
            width = main_settings.width === undefined ? 800 : main_settings.width;
        }
        width = width * 1;
        original_width = mapinfo.calibrate.width;
        original_height = mapinfo.calibrate.height ? mapinfo.calibrate.height : mapinfo.calibrate.width / mapinfo.calibrate.ratio;
        width_to_height = original_width / original_height;
        height = width / width_to_height;
        x_scale = mapinfo.calibrate.x_adjust;
        y_scale = mapinfo.calibrate.y_adjust;
        original_location = {
            x: 0,
            y: 0,
            w: width,
            h: height,
            r: ratio
        };
        if (!resizing) {
            ratio = 1;
            scale = width / original_width;
            transform = "s" + scale + "," + scale + ",0,0,t" + x_scale + "," + y_scale;
        }
    }
    var paper;
    var all_visible_states;
    var location_labels;
    var all_visible_labels;
    var transform;
    var background;
    var all_pills;
    var all_states;
    var all_regions;
    var all_locations;
    var all_labels;
    var top_labels;

    function create_canvas() {
        paper = Raphael(map_inner, width, height);
        paper.setViewBox(0, 0, width, height);
        background = paper.rect(-1000 * scale, -1000 * scale, 5000 * scale, 3000 * scale);
        background.hide();
        all_states = paper.set();
        all_visible_states = paper.set();
        all_regions = paper.set();
        all_locations = paper.set();
        all_labels = paper.set();
        location_labels = paper.set();
        all_visible_labels = paper.set();
        top_labels = paper.set();
        all_pills = paper.set();
    }
    
    var paper_back;
    var back_arrow;

    function create_back_button() {
        back_arrow = paper.set();
        var w = 35;
        var h = 35;
        if (back_image) {
            var image_location = directory + back_image;
            var img = new Image;
            img.onload = function() {
                w = img.width;
                h = img.height;
                make_arrow();
            };
            img.src = image_location;
        } else {
            make_arrow();
        }

        function make_arrow() {
            paper_back = Raphael(map_outer, w, h);
            if (back_image) {
                var back_arrow_arrow = paper_back.image(image_location, 0, 0, w, h);
                back_arrow_arrow.attr({
                    cursor: "pointer"
                });
                back_arrow_arrow.reg_num = -1;
                back_arrow.push(back_arrow_arrow);
            } else {
                var arrow_path = "m503.7,743.8c190.3-96.6 132.9-417.05-155.6-409.71v-128.7l-228.1,195.0 228.1,205.8v-131.6c240.9-5.5 229.9,202.8 155.6,269.3z";
                var arrow_color = main_settings.arrow_color ? main_settings.arrow_color : "#3B729F";
                var arrow_color_border = main_settings.arrow_color_border ? main_settings.arrow_color_border : "#88A4BC";
                var arrow_size = 0.05;
                var back_arrow_box = paper_back.rect(0, 0, w, h).attr({
                    fill: "black",
                    opacity: 0,
                    cursor: "pointer"
                });
                var back_arrow_arrow = paper_back.path(arrow_path).attr({
                    stroke: arrow_color_border,
                    'stroke-width': 2,
                    'stroke-opacity': 1,
                    fill: arrow_color,
                    'fill-opacity': 1,
                    cursor: "pointer"
                }).scale(arrow_size, arrow_size, -2, -6);
                back_arrow_arrow.reg_num = -1;
                back_arrow_box.reg_num = -1;
                back_arrow.push(back_arrow_arrow);
                back_arrow.push(back_arrow_box);
            }
            if (!initial_back) {
                back_arrow.hide();
            }
            back_arrow.click(back_click);
        }
    }
    var cattr, lattr, rattr, region_map, label_attributes, locations;

    function set_attributes() {
        locations = mapdata.locations;
        cattr = [];
        lattr = [];
        rattr = [];
        region_map = [];
        label_attributes = [];
        var default_region = {};
        default_region.color = false;
        default_region.hover_color = false;
        default_region.opacity = main_settings.region_opacity ? main_settings.region_opacity : 1;
        default_region.hover_opacity = main_settings.region_hover_opacity ? main_settings.region_hover_opacity : 0.6;
        default_region.url = false;
        default_region.description = false;
        default_region.inactive = false;
        default_region.zoomable = true;
        default_region.popup = main_settings.region_popups ? main_settings.region_popups : popups;
        default_region.cascade = main_settings.region_cascade_all == "yes" ? true : false;
        default_region.zoom_percentage = zoom_percentage;
        default_region.x1 = false;
        default_region.y1 = false;
        default_region.x2 = false;
        default_region.y2 = false;
        if (regions) {
            for (var region in regions) {
                for (var i = 0; i < regions[region].states.length; i++) {
                    var state = regions[region].states[i];
                    region_map[state] = region;
                }
            }
        }
        for (var id in regions) {
            rattr[id] = Object.create(default_region);
            if (regions[id].url) {
                rattr[id].zoomable = false;
            }
            for (var prop in regions[id]) {
                if (regions[id][prop] != "default") {
                    rattr[id][prop] = regions[id][prop];
                }
                if (regions[id][prop] == "yes") {
                    rattr[id][prop] = true;
                }
                if (regions[id][prop] == "no") {
                    rattr[id][prop] = false;
                }
            }
        }
        for (var id in mapinfo.paths) {
            var default_state = {};
            default_state.color = main_settings.state_color;
            default_state.hover_color = main_settings.state_hover_color;
            default_state.image_source = false;
            default_state.description = main_settings.state_description;
            default_state.url = main_settings.state_url;
            default_state.inactive = main_settings.all_states_inactive == "yes" ? true : false;
            default_state.hide = main_settings.all_states_hidden == "yes" ? true : false;
            default_state.hide_label = false;
            default_state.hover_border_color = main_settings.hover_border_color ? main_settings.hover_border_color : false;
            default_state.hover_border_size = main_settings.hover_border_size ? main_settings.hover_border_size : false;
            default_state.zoom_percentage = zoom_percentage;
            default_state.zoomable = main_settings.all_states_zoomable == "yes" ? true : false;
            default_state.popup = main_settings.state_popups ? main_settings.state_popups : popups;
            var region_id = region_map[id] ? region_map[id] : false;
            if (region_id && rattr[region_id].cascade) {
                if (rattr[region_id].color) {
                    default_state.color = rattr[region_id].color;
                }
                if (rattr[region_id].hover_color) {
                    default_state.hover_color = rattr[region_id].hover_color;
                }
                if (rattr[region_id].description) {
                    default_state.description = rattr[region_id].description;
                }
                if (rattr[region_id].url) {
                    default_state.url = rattr[region_id].url;
                }
                if (rattr[region_id].inactive) {
                    default_state.inactive = rattr[region_id].inactive;
                }
                if (rattr[region_id].hide) {
                    default_state.hide = rattr[region_id].hide;
                }
            }
            cattr[id] = Object.create(default_state);
            if (map_name == "us" && (id == "GU" || id == "PR" || id == "VI" || id == "MP")) {
                cattr[id].hide = "yes";
            }
            if ((map_name == "us" && hide_eastern_labels) && (id == "VT" || id == "NJ" || id == "DE" || id == "DC" || id == "NH" || id == "MA" || id == "CT" || id == "RI" || id == "MD")) {
                cattr[id].hide_label = "yes";
            }           
        }
        var default_label = {};
        default_label.font_family = main_settings.label_font ? main_settings.label_font : "arial,sans-serif";
        default_label.color = main_settings.label_color ? main_settings.label_color : "white";
        default_label.hover_color = main_settings.label_hover_color ? main_settings.label_hover_color : default_label.color;
        default_label.size = label_size;
        default_label.hide = main_settings.hide_labels == "yes" ? true : false;
        default_label.line = false;
        default_label.line_color = main_settings.label_line_color ? main_settings.label_line_color : "black";
        default_label.parent_type = "state";
        default_label.parent_id = false;
        default_label.display = "all", default_label.anchor = main_settings.label_anchor ? main_settings.label_anchor : "middle";
        default_label.pill = false;
        default_label.pill_width = main_settings.pill_width ? main_settings.pill_width : false;
        default_label.x = false;
        default_label.y = false;
        default_label.name = "Not Named";
        default_label.display = "all", default_label.id = false;
        default_label.preset = false;
        var default_labels = mapinfo.default_labels;
        for (var id in default_labels) {
            label_attributes[id] = Object.create(default_label);
            label_attributes[id].preset = true;
            for (var prop in default_labels[id]) {
                if (default_labels[id][prop] != "default") {
                    label_attributes[id][prop] = default_labels[id][prop];
                }
                if (default_labels[id][prop] == "yes") {
                    label_attributes[id][prop] = true;
                }
                if (default_labels[id][prop] == "no") {
                    label_attributes[id][prop] = false;
                }
            }
        }
        for (var id in labels) {
            if (!label_attributes[id]) {
                label_attributes[id] = Object.create(default_label);
            }
            for (var prop in labels[id]) {
                if (labels[id][prop] != "default") {
                    label_attributes[id][prop] = labels[id][prop];
                }
                if (labels[id][prop] == "yes") {
                    label_attributes[id][prop] = true;
                }
                if (labels[id][prop] == "no") {
                    label_attributes[id][prop] = false;
                }
            }
        }
        var default_location = {};
        default_location.color = main_settings.location_color ? main_settings.location_color : "#FF0067";
        default_location.hover_color = main_settings.location_hover_color ? main_settings.location_hover_color : false;
        default_location.border = main_settings.location_border ? main_settings.location_border : 1.5;
        default_location.border_color = main_settings.location_border_color ? main_settings.location_border_color : "#FFFFFF";
        default_location.hover_border = main_settings.location_hover_border ? main_settings.location_hover_border : 2;
        default_location.size = main_settings.location_size;
        default_location.description = main_settings.location_description;
        default_location.url = main_settings.location_url;
        default_location.inactive = main_settings.all_locations_inactive == "yes" ? true : false;
        default_location.type = main_settings.location_type;
        default_location.image_source = main_settings.location_image_source ? main_settings.location_image_source : "";
        default_location.hide = main_settings.all_locations_hide ? main_settings.all_locations_hide : "no", default_location.opacity = default_location_opacity;
        default_location.hover_opacity = main_settings.location_hover_opacity ? main_settings.location_hover_opacity : false;
        default_location.overwrite_image_location = false;
        default_location.popup = main_settings.location_popups ? main_settings.location_popups : popups;
        default_location.x = false;
        default_location.y = false;
        default_location.x_adjust = 10;
        default_location.y_adjust = 10;
        default_location.font_size = 14;
        default_location.display = "all";
        default_location.hide = main_settings.all_locations_hidden == "yes" ? true : false;
        if (default_location.type == undefined) {
            default_location.type = "square";
        }
        for (var id in locations) {
            lattr[id] = Object.create(default_location);
            for (var prop in locations[id]) {
                if (prop == "region") {
                    lattr[id].display = "region";
                }
                if (locations[id][prop] != "default") {
                    lattr[id][prop] = locations[id][prop];
                }
                if (locations[id][prop] == "yes") {
                    lattr[id][prop] = true;
                }
                if (locations[id][prop] == "no") {
                    lattr[id][prop] = false;
                }
            }
            if (!lattr[id].hover_opacity) {
                lattr[id].hover_opacity = lattr[id].opacity;
            }
            if (!lattr[id].hover_color) {
                lattr[id].hover_color = lattr[id].color;
            }
        }
    }
    var currently_zooming = false;
    var tooltip;

    function create_tooltip() {
        var find_pos = findPos(map_inner);
        var x0_page = find_pos[0];
        var y0_page = find_pos[1];
        var x0 = 0;
        var y0 = 0;
        var h = 0;
        var u;
        var l;
        var x_mid;
        var y_mid;
        var id = "tt";
        var top = 5;
        var left = 5;
        var maxw = 400;
        var speed = 1000;
        var timer = 20;
        var endalpha = 0;
        var alpha = 0;
        var tt, t, c, b, h;
        return {
            create: function() {
                tt = document.createElement("div");
                tt.setAttribute("id", id + "_sm");
                tt.style.position = "absolute";
                tt.style.display = "none";
                map_inner.appendChild(tt);
                map_inner.onmousemove = this.pos;
                tt.onmousemove = this.pos;
            },
            show: function(v, w) {
                if (popup_off) {
                    return;
                }
                ignore_pos = false;
                if (tt == null) {
                    tooltip.create();
                }
                tt.style.display = "block";
                tt.innerHTML = v;
                h = parseInt(tt.offsetHeight, 10);
                tooltip.update_pos();
            },
            reset_pos: function(x, y) {
                if (tt == undefined) {
                    tooltip.create();
                }
                tooltip.set_pos(y0 + y, x0 + x);
            },
            update_pos: function() {
                tooltip.set_pos(u, l);
            },
            pos: function(e) {
                u = ie ? event.clientY + document.documentElement.scrollTop : e.pageY;
                u = u - y0_page;
                l = ie ? event.clientX + document.documentElement.scrollLeft : e.pageX;
                l = l - x0_page;
                if (popup_off || tooltip_manual || ignore_pos || tooltip_up && on_click) {
                    return;
                }
                tooltip.set_pos(u, l);
            },
            set_pos: function(u, l) {
                var quad = 1;
                x_mid = x0 + 0.5 * width;
                y_mid = y0 + 0.5 * height;
                h = tt.offsetHeight;
                if (l > x_mid && u > y_mid) {
                    quad = 4;
                } else if (l < x_mid && u > y_mid) {
                    quad = 3;
                } else if (l > x_mid && u < y_mid) {
                    quad = 2;
                } else if (l < x_mid && u < y_mid) {
                    quad = 1;
                }
                if (quad == 1) {
                    tt.style.top = u + 7 + "px";
                    tt.style.left = l + left + 7 + "px";
                } else if (quad == 2) {
                    tt.style.top = u + 5 + "px";
                    tt.style.left = l - tt.offsetWidth - 5 + "px";
                } else if (quad == 3) {
                    tt.style.top = u - h - 3 + "px";
                    tt.style.left = l + left + 3 + "px";
                } else {
                    tt.style.top = u - h - 4 + "px";
                    tt.style.left = l - tt.offsetWidth - 4 + "px";
                }
            },
            hide: function() {
                if (tt != undefined) {
                    tt.style.display = "none";
                }
                find_pos = findPos(map_inner);
                if (find_pos) {
                    x0_page = find_pos[0];
                    y0_page = find_pos[1];
                }
            }
        };
    }

    function set_tt_css() {
        function newStyle(str) {
            var pa = document.getElementsByTagName("head")[0];
            var el = document.createElement("style");
            el.type = "text/css";
            el.media = "screen";
            if (el.styleSheet) {
                el.styleSheet.cssText = str;
            } else {
                el.appendChild(document.createTextNode(str));
            }
            pa.appendChild(el);
            return el;
        }

        function getsupportedprop(proparray) {
            var root = document.documentElement;
            for (var i = 0; i < proparray.length; i++) {
                if (proparray[i] in root.style) {
                    var answer = proparray[i];
                    answer = answer.replace("borderRadius", "border-radius");
                    answer = answer.replace("MozBorderRadius", "-moz-border-radius");
                    answer = answer.replace("WebkitBorderRadius", "-webkit-border-radius");
                    answer = answer.replace("boxShadow", "box-shadow");
                    answer = answer.replace("MozBoxShadow", "-moz-box-shadow");
                    answer = answer.replace("WebkitBoxShadow", "-webkit-box-shadow");
                    return answer;
                }
            }
        }
        var roundborderprop = getsupportedprop(["borderRadius", "MozBorderRadius", "WebkitBorderRadius"]);
        var rcss = roundborderprop ? roundborderprop + ": " + popup_corners + "px;" : "";
        var shadowprop = getsupportedprop(["boxShadow", "MozBoxShadow", "WebkitBoxShadow"]);
        var scss = shadowprop ? shadowprop + ": " + 3 * popup_shadow + "px " + 3 * popup_shadow + "px " + 4 * popup_shadow + "px rgba(0,0,0,.5);" : "";
        if (popup_shadow < 0.01) {
            scss = "";
        }
        var mcss = "#tt_sm{" + rcss + scss + "z-index: 1000000; background-color: " + popup_color + "; padding: 7px; opacity:" + popup_opacity + "; font: " + popup_font + "; color: black;} #tt_name_sm{float: left; font-weight: bold} #tt_custom_sm{float: left; clear: both; margin: 0px; padding: 0px;}";
        var css1 = "#xmark_sm{float: right; margin: 0px; cursor: pointer;}";
        var css2 = "#xmark_sm{float: left; margin: 0px; margin-left: 5px; cursor: pointer;}";
        if (!vml) {
            var str = css1 + mcss;
        } else {
            var str = mcss + css2;
        }
        newStyle(str);
    }

    function get_zooming_dimensions(element) {
        var gotoX = (element.sm.bbox.x + x_scale) * scale;
        var gotoY = (element.sm.bbox.y + y_scale) * scale;
        var gotoW = element.sm.bbox.width * scale;
        var gotoH = element.sm.bbox.height * scale;
        var actualWH;
        var paperWidth = original_width * scale;
        var paperHeight = original_height * scale;
        var zp = element.sm.zp;
        var w = gotoW;
        var h = gotoH;
        var x = gotoX;
        var y = gotoY;
        gotoW = w / zp;
        gotoH = h / zp;
        gotoX = x - (gotoW - w) * 0.5;
        gotoY = y - (gotoH - h) * 0.5;
        if (gotoW / gotoH > paperWidth / paperHeight) {
            isWider = true;
            ratio = gotoW / paperWidth;
            actualWH = paperHeight * ratio;
            gotoY -= (actualWH - gotoH) / 2;
        } else {
            isWider = false;
            ratio = gotoH / paperHeight;
            actualWH = paperWidth * ratio;
            gotoX -= (actualWH - gotoW) / 2;
        }
        return {
            x: gotoX,
            y: gotoY,
            w: gotoW,
            h: gotoH,
            r: ratio
        };
    }

    function reset_state_attributes(destination) {
        for (var i = 0; i < destination.sm.states.length; ++i) {
            var state = state_array[destination.sm.states[i]];
            state.attr(state.sm.attributes);
            highlight_labels(state, "reset", false, true);
        }
    }

    function reset_last_state() {
        if (last_destination && last_destination.sm.type == "state" && last_destination.sm.attributes) {
            if (!last_destination.sm.ignore_hover) {
                last_destination.attr(last_destination.sm.attributes);
            }
            highlight_labels(last_destination, "out");
        }
    }

    function reset_region_attributes(region) {
        if (region) {
            region.stop();
            region.attr(region.sm.attributes);
            for (var i = 0; i < region.sm.states.length; ++i) {
                var state = state_array[region.sm.states[i]];
                highlight_labels(state, "reset");
            }
        }
    }

    function reset_all_region_attributes() {
        all_regions.forEach(function(region) {
            if (region.sm.id != -1) {
                reset_region_attributes(region);
            }
        });
    }

    function location_correction(destination, initial) {
        var type = destination.sm.type;
        var t = transform + "s" + ratio;
        all_locations.hide();
        var zoom_rate = zoom_time * 1000;
        all_locations.forEach(function(lct) {
            if (lct.sm.hide) {
                lct.hide();
            } else if (lct.sm.display == "all" || lct.sm.display == "state" && type == "state") {
                lct.show();
            } else if (lct.sm.display == "state" && type != "state") {
                lct.hide();
            } else if (lct.sm.display == "out" && type == "out") {
                lct.show();
            } else if (lct.sm.display == type && destination.sm.bbox) {
                var in_destination = Raphael.isPointInsideBBox(destination.sm.bbox, lct.sm.x, lct.sm.y);
                if (!in_destination) {
                    lct.hide();
                    lct.sm.in_destination = false;
                } else {
                    lct.sm.in_destination = true;
                    lct.show();
                }
            }
            var new_side = lct.sm.size * ratio;
            var new_x = lct.sm.x - new_side / 2;
            var new_y = lct.sm.y - new_side / 2;
            lct.sm.bbox = {
                x: new_x,
                y: new_y,
                x2: new_x + new_side,
                y2: new_y + new_side
            };
            if (lct.sm.shape_type == "circle") {
                if (!vml && !touch && !initial) {
                    lct.animate({
                        r: new_side * 0.5
                    }, zoom_rate);
                    if (lct.sm.scalable_label) {
                        lct.sm.scalable_label.animate({
                            transform: t
                        }, zoom_rate);
                    }
                } else {
                    lct.attr({
                        r: new_side * 0.5
                    });
                }
            } else {
                if (!vml && !touch && !initial) {
                    lct.animate({
                        height: new_side,
                        width: new_side,
                        x: new_x,
                        y: new_y
                    }, zoom_rate);
                } else {
                    lct.attr({
                        height: new_side,
                        width: new_side,
                        x: new_x,
                        y: new_y
                    });
                }
            }
            if (lct.sm.scalable_label) {
                lct.sm.scalable_label.attr({
                    transform: t
                });
            }
        });
    }

    function hide_reveal_labels(destination) {
        var type = destination.sm.type;
        for (var i in label_array) {
            var lbl = label_array[i];
            var lbl_set = label_set_array[lbl.sm.id];
            var parent = lbl.sm.parent;
            if (lbl.sm.hide) {
                lbl_set.hide();
            } else if (lbl.sm.display != type && lbl.sm.display != "all" || parent.sm.type == "location" && !parent.sm.in_destination) {
                lbl_set.hide();
            } else {
                if (lbl.sm.line) {
                    var line_path = get_line_path(lbl);
                    lbl.sm.line.attr({
                        path: line_path
                    });
                }
                lbl_set.show();
            }
        }
    }

    function hide_and_show_before(destination, initial) {
        var type = destination.sm.type;
        var last_type = last_destination.sm.type;
        back_arrow.hide();
        location_correction(destination, initial);
        hide_reveal_labels(destination);
        if (type == "region") {
            reset_state_attributes(destination);
        }
        if (last_type == "region") {
            reset_last_state();
            if (type == "state" && !destination.sm.region) {
                reset_region_attributes(last_destination);
            } else if (type == "region") {
                reset_region_attributes(last_destination);
            } else if (type == "out") {
                reset_region_attributes(last_destination);
            }
        } else if (last_type == "state") {
            reset_last_state();
            if (type == "region" && destination.sm.id != last_destination.sm.region) {
                reset_region_attributes(region_array[last_destination.sm.region]);
            } else if (type == "state" && !destination.sm.region) {
                reset_region_attributes(region_array[last_destination.sm.region]);
            } else if (type == "out") {
                highlight_labels(last_destination, "out");
            }
        }
        if (type != "out") {
            all_states.stop();
            all_pills.stop();
            all_states.attr({
                'fill-opacity': adjacent_opacity
            });
            all_pills.attr({
                'fill-opacity': adjacent_opacity
            });
            destination.stop();
            destination.attr({
                'fill-opacity': 1
            });
            destination.sm.labels.forEach(function(label) {
                if (label.sm.pill) {
                    label.sm.pill.stop();
                    label.sm.pill.attr({
                        'fill-opacity': 1
                    });
                }
            });
            destination.animate({
                'stroke-width': destination.sm.hover_border_size * (width / original_width) * normalizing_factor
            }, zoom_time * 1000);
        } else {
            all_states.attr({
                'fill-opacity': 1
            });
            all_pills.attr({
                'fill-opacity': 1
            });
            reset_all_region_attributes();
        }
        all_states.animate({
            'stroke-width': border_size * (width / original_width) * normalizing_factor
        }, zoom_time * 1000);
    }

    function hide_and_show_after(destination) {
        if (initial_zoom_solo && destination.sm.type == "region") {
            if (initial_back) {
                back_arrow.show();
            } else {
                return;
            }
        } else if (destination.sm.type == "state" || destination.sm.type == "region" || initial_back) {
            back_arrow.show();
        }
    }
    var end_destination;

    function zoom_to(destination, initial) {
        if (last_animated) {
            last_animated.stop();
            last_animated = false;
        }
        last_clicked = false;
        end_destination = destination;
        tooltip.hide();
        tooltip_up = false;
        currently_zooming = true;
        if (destination.sm.type != "out") {
            destination.sm.zooming_dimensions = get_zooming_dimensions(destination);
        }
        var to_zoom_dimensions = destination.sm.zooming_dimensions;
        current_viewbox = to_zoom_dimensions;
        var to = {
            x: to_zoom_dimensions.x,
            y: to_zoom_dimensions.y,
            w: to_zoom_dimensions.w,
            h: to_zoom_dimensions.h
        };
        var from_zoom_dimensions = last_destination.sm.zooming_dimensions;
        var from = {
            x: from_zoom_dimensions.x,
            y: from_zoom_dimensions.y,
            w: from_zoom_dimensions.w,
            h: from_zoom_dimensions.h
        };
        ratio = to_zoom_dimensions.r;
        hide_and_show_before(destination, initial);

        function updateZoom() {
            paper.setViewBox(from.x, from.y, from.w, from.h, false);
        }

        function whenDone() {
            hide_and_show_after(destination, initial);
            last_destination = destination;
            currently_zooming = false;
            on_click = false;
            update_zoom_level();
            if (hooks_object.zooming_complete) {
                hooks_object.zooming_complete();
            }
        }
        if (!vml && !touch && !initial) {
            TweenLite.to(from, zoom_time, {
                x: to.x,
                y: to.y,
                w: to.w,
                h: to.h,
                onUpdate: updateZoom,
                onComplete: whenDone
            });
        } else {
            paper.setViewBox(to.x, to.y, to.w, to.h, false);
            whenDone();
        }
    }

    function create_content(element) {
        var content = element.sm.description;
        var embedded_img = "data:image/png;base64,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";
        var external_image = directory + "x.png";
        var image_source = vml ? external_image : embedded_img;
        var xmark = "<img id=\"xpic_sm" + "_" + div + "\"src=\"" + image_source + "\" width=\"15\" height=\"15\" alt=\"Close\" border=\"0\" />";
        var linkhere_end = new_tab ? "\" target=\"_blank\">" + link_text + "</a>" : "\">" + link_text + "</a>";
        var linkhere = " <a href=\"" + element.sm.url + linkhere_end + "&nbsp;";
        if (!element.sm.on_click) {
            xmark = "";
            linkhere = "";
        }
        if (element.sm.url == "") {
            linkhere = "";
        }
        var content_part = content == "" ? (content_part = "") : "<div id=\"tt_custom_sm\"; />" + content + "</div>";
        return "<div id=\"tt_title_sm\"><div id=\"tt_name_sm\">" + element.sm.name + linkhere + "</div><div id=\"xmark_sm\">" + xmark + "</div></div>" + content_part + "</div>";
    }
    var bbox_storage;
    var state_array;
    var state_bbox_array = false;

    function create_states(refresh) {
        if (!refresh) {
            bbox_storage = {};
            state_array = {};
        }
        state_bbox_array = mapinfo.state_bbox_array;
        var scaled_border_size = border_size * (width / original_width) * normalizing_factor;
        for (var id in mapinfo.paths) {
            make_state(id);
        }

        function make_state(id) {
            var brand_new = state_array[id] ? false : true;
            var state = brand_new ? paper.path(mapinfo.paths[id]) : state_array[id];
            if (!vml) {
                state.node.setAttribute("class", "sm_state_" + id);
            }
            var attrs = cattr[id];
            var attributes = {
                fill: attrs.color,
                'fill-opacity': 1,
                stroke: main_settings.border_color,
                cursor: "pointer",
                'stroke-opacity': 1,
                'stroke-width': scaled_border_size,
                'stroke-linejoin': "round"
            };
            if (attrs.inactive) {
                attributes.cursor = "default";
            }
            var hover_border_color = attrs.hover_border_color ? attrs.hover_border_color : main_settings.border_color;
            var hover_border_size = attrs.hover_border_size ? attrs.hover_border_size : border_size;
            var scaled_hover_border_size = hover_border_size * (width / original_width) * normalizing_factor;
            var over_attributes = {
                fill: attrs.hover_color,
                stroke: hover_border_color,
                'stroke-width': scaled_hover_border_size
            };
            if (brand_new) {
                state.sm = {};
            }
            if (attrs.image_source) {
                state.sm.ignore_hover = true;
                attributes.fill = "url(" + directory + attrs.image_source + ")";
            }
            if (attrs.hover_border_color || attrs.hover_border_size) {
                state.sm.emphasizable = true;
            } else {
                state.sm.emphasizable = false;
            }
            state.sm.hover_border_size = hover_border_size;
            state.attr(attributes);
            state.transform(transform);
            state.sm.attributes = attributes;
            state.sm.over_attributes = over_attributes;
            state.sm.description = attrs.description;
            state.sm.adjacent_attributes = {
                'fill-opacity': adjacent_opacity
            };
            state.sm.hide = attrs.hide;
            state.sm.hide_label = attrs.hide_label;
            if (brand_new) {
                state.sm.region = false;
            }
            state.sm.name = attrs.name ? attrs.name : mapinfo.names[id];
            state.sm.url = attrs.url;
            state.sm.inactive = attrs.inactive;
            state.sm.on_click = is_onclick(attrs.popup);
            state.sm.popup_off = is_off(attrs.popup);
            state.sm.labels = [];
            state.sm.zp = attrs.zoom_percentage;
            state.sm.zoomable = attrs.zoomable;
            state.sm.type = "state";
            state.sm.id = id;
            state.sm.hide_labels = attrs.hide_label;
            state.sm.content = create_content(state);
            if (!state_bbox_array) {
                state_bbox_array = create_bbox_state(true);
            }
            var bbox = state_bbox_array[id];
            if (bbox == undefined) {
                bbox = Raphael.pathBBox(mapinfo.paths[id].path);
            }
            state.sm.bbox = bbox;
            state.sm.bbox.width = bbox.x2 - bbox.x;
            state.sm.bbox.height = bbox.y2 - bbox.y;
            if (state.sm.hide) {
                state.hide();
            } else {
                if (brand_new) {
                    all_visible_states.push(state);
                }
            }
            if (brand_new) {
                state_array[id] = state;
                all_states.push(state);
            }
        }
        all_states.hide();
    }

    function style_background() {
        background.attr({
            fill: main_settings.background_color,
            'fill-opacity': opacity,
            stroke: "none"
        });
    }
    var region_array;
    var last_destination;
    var destination;

    function create_regions(refresh) {
        if (!refresh) {
            region_array = {};
        }
        var scaled_border_size = border_size * (width / original_width) * normalizing_factor;
        var default_region_attributes = {
            stroke: main_settings.border_color,
            cursor: "pointer",
            'stroke-opacity': 1,
            'stroke-width': scaled_border_size,
            'stroke-linejoin': "round"
        };
        if (regions) {
            for (var id in regions) {
                var attrs = rattr[id];
                var region_object = regions[id];
                var region = refresh ? region_array[id] : paper.set();
                if (!refresh) {
                    region.sm = {};
                    region.sm.states = [];
                    if (region_array[id]) {
                        console.log("Duplicate Regions");
                        continue;
                    }
                    var x1 = false;
                    var x2 = false;
                    var y1 = false;
                    var y2 = false;
                    for (var i = 0; i < region_object.states.length; i++) {
                        var state_id = region_object.states[i];
                        var state = state_array[state_id];
                        if (!state) {
                            console.log(state_id + " does not exist");
                            continue;
                        }
                        if (state.sm.region) {
                            console.log(state.sm.name + " already assigned to a region");
                            continue;
                        }
                        state.sm.region = id;
                        if (!(vml && state.sm.ignore_hover && (attrs.color || attrs.hover_color))) {
                            region.push(state);
                        }
                        var bbox = state.sm.bbox;
                        var x1_current = bbox.x;
                        var x2_current = bbox.x2;
                        var y1_current = bbox.y;
                        var y2_current = bbox.y2;
                        if (!x1) {
                            x1 = x1_current;
                            x2 = x2_current;
                            y1 = y1_current;
                            y2 = y2_current;
                        } else {
                            x1 = x1_current <= x1 ? x1_current : x1;
                            x2 = x2_current >= x2 ? x2_current : x2;
                            y1 = y1_current <= y1 ? y1_current : y1;
                            y2 = y2_current >= y2 ? y2_current : y2;
                        }
                        region.sm.states.push(state_id);
                    }
                    if (attrs.x1 && attrs.y1 && attrs.x2 && attrs.y2) {
                        x1 = attrs.x1;
                        y1 = attrs.y1;
                        x2 = attrs.x2;
                        y2 = attrs.y2;
                    }
                }
                var attributes = {
                    'fill-opacity': attrs.opacity,
                    cursor: "pointer"
                };
                var over_attributes = {
                    'fill-opacity': attrs.hover_opacity
                };
                if (attrs.color) {
                    attributes.fill = attrs.color;
                }
                if (attrs.hover_color) {
                    over_attributes.fill = attrs.hover_color;
                }
                if (attrs.inactive) {
                    attributes.cursor = "default";
                }
                if (!refresh) {
                    region.sm.bbox = {};
                    region.sm.bbox.x = x1;
                    region.sm.bbox.y = y1;
                    region.sm.bbox.width = x2 - x1;
                    region.sm.bbox.height = y2 - y1;
                    region.sm.bbox.x2 = x2;
                    region.sm.bbox.y2 = y2;
                }
                region.sm.attributes = attributes;
                region.sm.name = region_object.name;
                region.sm.description = attrs.description;
                region.sm.url = attrs.url;
                region.sm.labels = paper.set();
                region.sm.content = create_content(region);
                region.sm.over_attributes = over_attributes;
                region.sm.adjacent_attributes = {
                    'fill-opacity': adjacent_opacity
                };
                region.sm.zoomable = attrs.zoomable;
                region.sm.on_click = is_onclick(attrs.popup);
                region.sm.popup_off = is_off(attrs.popup);
                region.sm.zp = attrs.zoom_percentage;
                region.sm.inactive = attrs.inactive;
                region.sm.type = "region";
                region.sm.id = id;
                if (!refresh) {
                    all_regions.push(region);
                    region_array[id] = region;
                }
            }
        }
        if (!refresh) {
            region_array[-1] = {};
            var out = region_array[-1];
            out.sm = {};
            out.sm.type = "out";
            out.sm.zooming_dimensions = {
                x: 0,
                y: 0,
                w: width,
                h: height,
                r: ratio
            };
            current_viewbox = {
                x: 0,
                y: 0,
                w: width,
                h: height,
                r: ratio
            };
            last_destination = out;
        }
    }
    var all_external_borders = false;

    function create_borders() {
        if (!simplemaps_countymap_mapdata.borders) {
            return;
        } else {
            all_external_borders = paper.set();
        }
        for (i in simplemaps_countymap_mapdata.borders) {
            var border = simplemaps_countymap_mapdata.borders[i];
            var b = paper.path(border.path);
            b.transform(transform);
            b.attr({
                stroke: border.color,
                fill: "none",
                cursor: "pointer",
                'stroke-dasharray': [border.dash],
                'stroke-width': border.size,
                'stroke-linejoin': "round",
                'stroke-miterlimit': 4
            });
            all_external_borders.push(b);
        }
    }
    var label_array;
    var label_set_array;

    function create_labels() {
        all_labels.forEach(function(lbl) {
            lbl.remove();
        });
        all_labels.splice(0, all_labels.length);
        label_array = {};
        label_set_array = {};
        all_locations.toFront();
        label_attributes = label_attributes.reverse();
        for (var id in label_attributes) {
            var over_location = false;
            if (!label_attributes.hasOwnProperty(id)) {
                continue;
            }
            var brand_new = label_array[id] ? false : true;
            var label_set = paper.set();
            var attrs = label_attributes[id];
            var parent = false;
            if (attrs.parent_type == "state") {
                parent = state_array[attrs.parent_id];
            } else if (attrs.parent_type == "region") {
                parent = region_array[attrs.parent_id];
            } else if (attrs.parent_type == "location") {
                parent = location_array[attrs.parent_id];
            }
            if (!attrs.x && !attrs.y && parent) {
                if (parent.sm.type == "location") {
                    attrs.x = parent.sm.x;
                    attrs.y = parent.sm.y;
                    over_location = true;
                }
            }
            if (!parent) {
                console.log("The following object does not exist: " + id);
                continue;
            }
            if (attrs.name == "Not Named" && parent) {
                attrs.name = parent.sm.id;
            }
            if (brand_new) {
                if (over_location) {
                    var label_path = paper.print_path(attrs.x, attrs.y, attrs.name, paper.getFont("FreeSans"), attrs.size);
                    var label = paper.path(label_path);
                } else {
                    var label = paper.text(attrs.x, attrs.y, attrs.name);
                }
            } else {
                var label = label_array[id];
            }
            label.sm = {};
            label.sm.hide = attrs.hide;
            if (parent && (parent.sm.hide_label || parent.sm.hide)) {
                label.sm.hide = true;
            }
            label.sm.parent = parent;
            parent.sm.labels.push(label);
            if (parent.sm.region) {
                region_array[parent.sm.region].sm.labels.push(label);
            }
            var attributes = {
                'stroke-width': 0,
                fill: attrs.color,
                'font-size': attrs.size,
                'font-weight': "bold",
                cursor: "pointer",
                'font-family': attrs.font_family,
                'text-anchor': attrs.anchor
            };
            var over_attributes = {
                fill: attrs.hover_color
            };
            var out_attributes = {
                fill: attrs.color
            };
            if (parent.sm.inactive) {
                attributes.cursor = "default";
            }
            label.attr(attributes);
            label.sm.attributes = attributes;
            label.sm.over_attributes = over_attributes;
            label.sm.out_attributes = out_attributes;
            label.sm.type = "label";
            label.sm.id = id;
            if (over_location) {
                parent.sm.scalable_label = label;
            }
            label.sm.preset = attrs.preset;
            label.sm.line = false;
            if (attrs.parent_type == "region") {
                label.sm.display = "out";
            } else {
                label.sm.display = attrs.display;
            }
            label_array[id] = label;
            if (attrs.line && parent && attrs.parent_type == "location") {
                if (label.sm.display == "all") {
                    console.log("Labels with lines cannot be shown at \"all\" zoom levels");
                } else {
                    label.sm.bbox = label.getBBox(true);
                    var line_path = get_line_path(label);
                    var line = paper.path(line_path).transform(transform);
                    var line_attributes = {
                        stroke: "#000000",
                        cursor: "pointer",
                        'stroke-width': 2
                    };
                    line.attr(line_attributes);
                    line.sm = {};
                    line.sm.parent = parent;
                    line.sm.attributes = line_attributes;
                    line.sm.type = "label";
                    label.sm.pill = false;
                    line.sm.id = id;
                    line.sm.display = attrs.display;
                    label.sm.line = line;
                    label_set.push(line);
                }
            }
            if (parent.sm.type == "state" && attrs.pill) {
                var label_bbox = label.sm.bbox ? label.sm.bbox : label.getBBox(true);
                if (vml) {
                    label_bbox.x = attrs.x - 0.5 * label_bbox.width;
                    label_bbox.y = attrs.y - 0.55 * label_bbox.height;
                    label_bbox.x2 = label_bbox.x + label_bbox.width;
                    label_bbox.y2 = label_bbox.y + label_bbox.height;
                }
                var p = 0.15;
                var calculated_width = label_bbox.width * (1 + p * 3);
                var width = attrs.width ? attrs.width : calculated_width;
                var x = label_bbox.x - 0.5 * (width - label_bbox.width);
                var y = label_bbox.y - 0.5 * label_bbox.height * p;
                var height = label_bbox.height * (1 + p);
                var r = height / 5;
                var pill = paper.rect(x, y, width, height, r);
                pill.transform(transform);
                pill.attr(parent.sm.attributes);
                pill.sm = {};
                pill.sm.parent = parent;
                if (attrs.display == "state" || attrs.display == "all") {
                    parent.sm.bbox.x = parent.sm.bbox.x >= label_bbox.x ? label_bbox.x : parent.sm.bbox.x;
                    parent.sm.bbox.x2 = parent.sm.bbox.x2 <= label_bbox.x2 ? label_bbox.x2 : parent.sm.bbox.x2;
                    parent.sm.bbox.y = parent.sm.bbox.y >= label_bbox.y ? label_bbox.y : parent.sm.bbox.y;
                    parent.sm.bbox.y2 = parent.sm.bbox.y2 <= label_bbox.y2 ? label_bbox.y2 : parent.sm.bbox.y2;
                    parent.sm.bbox.width = parent.sm.bbox.x2 - parent.sm.bbox.x;
                    parent.sm.bbox.height = parent.sm.bbox.y2 - parent.sm.bbox.y;
                }
                if ((attrs.display == "region" || attrs.display == "all") && parent.sm.region) {
                    var region_bbox = region_array[parent.sm.region].sm.bbox;
                    region_bbox.x = region_bbox.x >= label_bbox.x ? label_bbox.x : region_bbox.x;
                    region_bbox.x2 = region_bbox.x2 <= label_bbox.x2 ? label_bbox.x2 : region_bbox.x2;
                    region_bbox.y = region_bbox.y >= label_bbox.y ? label_bbox.y : region_bbox.y;
                    region_bbox.y2 = region_bbox.y2 <= label_bbox.y2 ? label_bbox.y2 : region_bbox.y2;
                    region_bbox.width = region_bbox.x2 - region_bbox.x;
                    region_bbox.height = region_bbox.y2 - region_bbox.y;
                }
                label.sm.pill = pill;
                all_pills.push(pill);
                label_set.push(pill);
                label_set.push(label);
            } else {
                label_set.push(label);
            }
            if (label.sm.display != "out" && label.sm.display != "all" || label.sm.hide) {
                label_set.hide();
            } else {
                all_visible_labels.push(label_set);
            }
            if (!label.sm.preset) {
                top_labels.push(label_set);
            }
            if (label.sm.parent.sm.type == "location" && !label.sm.line) {
                location_labels.push(label_set);
            }
            all_labels.push(label_set);
            label_set_array[id] = label_set;
            label_set.transform(transform);
            if (!vml) {
                label.node.setAttribute("class", "sm_label_" + id);
            }
        }
        all_labels.hide();
    }

    function get_line_path(label) {
        var label_bbox = label.sm.bbox;
        var location_bbox = label.sm.parent.sm.bbox;
        var location_points = [];
        location_points.push({
            x: 0.5 * (location_bbox.x + location_bbox.x2),
            y: location_bbox.y
        });
        location_points.push({
            x: 0.5 * (location_bbox.x + location_bbox.x2),
            y: location_bbox.y2
        });
        location_points.push({
            x: location_bbox.x,
            y: 0.5 * (location_bbox.y + location_bbox.y2)
        });
        location_points.push({
            x: location_bbox.x2,
            y: 0.5 * (location_bbox.y + location_bbox.y2)
        });
        var label_points = [];
        label_points.push({
            x: label_bbox.x2 + 2,
            y: 0.5 * (label_bbox.y + label_bbox.y2)
        });
        label_points.push({
            x: label_bbox.x - 2,
            y: 0.5 * (label_bbox.y + label_bbox.y2)
        });
        label_points.push({
            x: 0.5 * (label_bbox.x + label_bbox.x2),
            y: label_bbox.y - 2
        });
        label_points.push({
            x: 0.5 * (label_bbox.x + label_bbox.x2),
            y: label_bbox.y2 + 2
        });
        var winner = {};
        for (var k in label_points) {
            for (var j in location_points) {
                var current_label = label_points[k];
                var current_location = location_points[j];
                var distance_between = distance(current_label, current_location);
                if (k == 0 && j == 0 || distance_between < winner.distance) {
                    winner.label = current_label;
                    winner.location = current_location;
                    winner.distance = distance_between;
                }
            }
        }
        return linePath(winner.label.x, winner.label.y, winner.location.x, winner.location.y);
    }
    var location_array;

    function create_locations(refresh) {
        all_locations.forEach(function(lct) {
            lct.remove();
        });
        all_locations.splice(0, all_locations.length);
        location_array = {};
        for (var id in locations) {
            make_location(id);
        }

        function make_location(id) {
            var attrs = lattr[id];
            if (attrs.type != "image") {
                var attributes = {
                    'stroke-width': attrs.border * scale * normalizing_factor,
                    stroke: attrs.border_color,
                    fill: attrs.color,
                    opacity: attrs.opacity,
                    cursor: "pointer"
                };
                var over_attributes = {
                    'stroke-width': attrs.hover_border * scale * normalizing_factor,
                    stroke: attrs.border_color,
                    fill: attrs.hover_color,
                    opacity: attrs.hover_opacity,
                    cursor: "pointer"
                };
            } else {
                var attributes = {
                    cursor: "pointer"
                };
                var over_attributes = {
                    cursor: "pointer"
                };
            }
            if (attrs.inactive) {
                attributes.cursor = "default";
            }
            var shape_type = lattr[id].type;
            var location_scale = simplemaps_countymap_mapinfo.location_scale ? simplemaps_countymap_mapinfo.location_scale : 1;
            var size = attrs.size * location_scale;
            if (attrs.x && attrs.y) {
                var point = {};
                point.x = attrs.x, point.y = attrs.y;
            } else {
                var point = getxy(attrs.lat, attrs.lng);
            }
            if (shape_type == "square" || shape_type == "image") {
                var new_side = size * ratio;
                var new_x = point.x - new_side / 2;
                var new_y = point.y - new_side / 2;
            }
            if (shape_type == "circle") {
                var location = paper.circle(point.x, point.y, size * ratio * 0.5);
                var bbox = {
                    x: point.x - size * 0.5 * ratio,
                    y: point.y - size * 0.5 * ratio,
                    x2: point.x + size * 0.5 * ratio,
                    y2: point.y + size * 0.5 * ratio,
                    here: "hi"
                };
            } else if (shape_type == "image") {
                var image_location = attrs.overwrite_image_location ? attrs.overwrite_image_location : directory + attrs.image_source;
                var location = paper.image(image_location, new_x, new_y, new_side, new_side);
                var bbox = {
                    x: new_x,
                    y: new_y,
                    x2: new_x + new_side,
                    y2: new_y + new_side
                };
            } else {
                var location = paper.rect(new_x, new_y, new_side, new_side);
                var bbox = {
                    x: new_x,
                    y: new_y,
                    x2: new_x + new_side,
                    y2: new_y + new_side
                };
            }
            location.sm = {};
            location.sm.attributes = attributes;
            location.attr(attributes);
            location.transform(transform);
            location.sm.original_transform = transform;
            location.sm.over_attributes = over_attributes;
            location.sm.id = id;
            location.sm.name = attrs.name;
            location.sm.url = attrs.url;
            location.sm.type = "location";
            location.sm.shape_type = shape_type;
            location.sm.description = attrs.description;
            location.sm.inactive = attrs.inactive;
            location.sm.in_destination = true;
            location.sm.on_click = is_onclick(attrs.popup);
            location.sm.popup_off = is_off(attrs.popup);
            location.sm.x = point.x;
            location.sm.y = point.y;
            location.sm.bbox = bbox;
            location.sm.labels = [];
            location.sm.size = size;
            location.sm.hide = attrs.hide;
            location.sm.display = attrs.display;
            if (location.sm.display == "region" || location.sm.display == "state" || attrs.hide) {
                location.hide();
            }
            location.sm.content = create_content(location);
            all_locations.push(location);
            location_array[id] = location;
            if (!vml) {
                location.node.setAttribute("class", "sm_location_" + id);
            }
        }
    }

    function state_or_region(state) {
        current_destination = currently_zooming ? end_destination : last_destination;
        if (state.sm.type == "location") {
            return state;
        }
        if (state.sm.region && current_destination.sm.type == "out") {
            return region_array[state.sm.region];
        } else if (current_destination.sm.type == "region" && region_array[state.sm.region] != current_destination && state.sm.region) {
            return region_array[state.sm.region];
        } else if (current_destination.sm.type == "state" && state.sm.region && state.sm.region != current_destination.sm.region) {
            return region_array[state.sm.region];
        } else if (current_destination.sm.type == "state" && state.sm.region && !current_destination.sm.region) {
            return region_array[state.sm.region];
        } else {
            return state;
        }
    }

    function is_adjacent(element) {
        if (last_destination.sm.type == "region" && element.sm.type == "region") {
            return true;
        } else if (last_destination.sm.type == "region" && element.sm.type == "state" && (!element.sm.region || element.sm.region != last_destination.sm.id)) {
            return true;
        } else if (last_destination.sm.type == "state" && element.sm.type == "region") {
            return true;
        } else if (last_destination.sm.type == "state" && element.sm.type == "state" && element != last_destination) {
            return true;
        } else {
            return false;
        }
    }

    function highlight_labels(element, type, adjacent, skip_check) {
        if (!element.sm.labels) {
            return;
        } else {
            var labels = element.sm.labels;
        }
        labels.forEach(function(label) {
            var parent = skip_check ? label.sm.parent : state_or_region(label.sm.parent);
            if (type == "over") {
                if (label.sm.pill) {
                    label.sm.pill.stop();
                    if (!parent.sm.ignore_hover) {
                        label.sm.pill.attr(parent.sm.over_attributes);
                    }
                }
                label.stop();
                label.attr(label.sm.over_attributes);
            } else if (type == "reset") {
                label.attr(label.sm.out_attributes);
                if (label.sm.pill) {
                    label.sm.pill.attr(parent.sm.attributes);
                    if (adjacent) {
                        label.sm.pill.attr(parent.sm.adjacent_attributes);
                    }
                }
            } else {
                label.animate(label.sm.out_attributes, fade_time);
                if (label.sm.pill) {
                    if (!parent.sm.ignore_hover) {
                        label.sm.pill.animate(parent.sm.attributes, fade_time);
                    }
                    if (adjacent) {
                        label.sm.pill.animate(parent.sm.adjacent_attributes, fade_time);
                    }
                }
            }
        });
    }

    function labels_inactive(element) {
        if (!element.sm.labels) {
            return;
        } else {
            var labels = element.sm.labels;
        }
        labels.forEach(function(label) {
            if (element.sm.inactive) {
                label.attr({
                    cursor: "default"
                });
            } else {
                label.attr({
                    cursor: "pointer"
                });
            }
        });
    }

    function emphasize(element) {
        if (element.sm.type != "state") {
            return;
        }
        if (!element.sm.emphasizable) {
            return;
        }
        element.insertBefore(all_visible_states);
    }
    var last_over = false;
    var last_animated = false;
    var region_click;
    var label_click;
    var click;
    var over;
    var out;
    var background_click;
    var label_over;
    var label_out;
    var back_click;

    function create_event_handlers() {
        label_over = function() {
            if (this.sm.parent) {
                over.call(this.sm.parent);
            }
        };
        label_out = function() {
            if (this.sm.parent) {
                out.call(this.sm.parent);
            }
        };
        label_click = function() {
            if (this.sm.parent) {
                click.call(this.sm.parent);
            }
        };
        over = function() {
            if (!this.id && !this.type == "set") {
                return;
            }
            var element = state_or_region(this);
            if (element.sm.on_click) {
                on_click = true;
            }
            popup_off = element.sm.popup_off;
            if (currently_zooming || tooltip_up && on_click) {
                return;
            }
            if (last_over) {
                out.call(last_over);
            }
            last_over = this;
            if (!element) {
                return;
            }
            labels_inactive(element);
            if (element.sm.inactive) {
                return;
            }
            emphasize(element);
            over_hook(element);
            if (!on_click) {
                tooltip.show(element.sm.content);
                element.stop();
                if (vml && element.sm.type == "location" && element.sm.shape_type == "image") {
                    return;
                }
                if (!element.sm.ignore_hover) {
                    element.animate(element.sm.over_attributes, 1);
                }
                highlight_labels(element, "over");
            } else {
                if (!tooltip_up) {
                    element.stop();
                    if (vml && element.sm.type == "location" && element.sm.shape_type == "image") {
                        return;
                    }
                    if (!element.sm.ignore_hover) {
                        element.animate(element.sm.over_attributes, 1);
                    }
                    highlight_labels(element, "over");
                }
            }
        };
        var reset_appearance = function(element, callback) {
            tooltip.hide();
            if (is_adjacent(element)) {
                if (!element.sm.ignore_hover) {
                    element.animate(element.sm.attributes, fade_time, whenDone);
                }
                element.animate(element.sm.adjacent_attributes, fade_time, whenDone);
                highlight_labels(element, "out", true);
            } else {
                if (vml && element.sm.type == "location" && element.sm.shape_type == "image") {
                    return;
                }
                if (!element || !element.sm) {
                    return;
                }
                if (!element.sm.ignore_hover) {
                    element.animate(element.sm.attributes, fade_time, whenDone);
                }
                highlight_labels(element, "out");
            }

            function whenDone() {
                if (isFunction(callback)) {
                    callback();
                }
            }
        };
        out = function(force, callback) {
            if (currently_zooming) {
                return;
            }
            if (!tooltip_up) {
                on_click = false;
            }
            last_over = false;
            if (!this.id && !this.type == "set") {
                return;
            }
            var element = state_or_region(this);
            if (!element) {
                return;
            }
            if (element.sm.inactive) {
                return;
            }
            out_hook(element);
            if (!on_click) {
                tooltip.hide();
                if (is_adjacent(element)) {
                    if (currently_zooming) {
                        return false;
                    }
                    if (!element.sm.ignore_hover) {
                        element.animate(element.sm.attributes, fade_time);
                    }
                    element.animate(element.sm.adjacent_attributes, fade_time);
                    highlight_labels(element, "out", true);
                } else {
                    if (vml && element.sm.type == "location" && element.sm.shape_type == "image") {
                        return;
                    }
                    if (!element.sm.ignore_hover) {
                        element.animate(element.sm.attributes, fade_time);
                    }
                    highlight_labels(element, "out");
                }
            } else {
                if (!tooltip_up || force == true) {
                    reset_appearance(element, callback);
                    last_animated = element;
                }
            }
        };
        var state_p, county_p;
        click = function() {
            if (currently_zooming) {
                return;
            }
            var element = state_or_region(this);

            // Output state name or state + county name
            var id = element.sm.id;
            console.log(id);
            // Update the text in # barCharts
            if (id.length == 2){
                state_p = simplemaps_countymap_mapinfo.default_regions[id].name;
                bar_text.text(state_p);
                // data related to stateResult.csv
                county_state.text(state_p);
                county_county.text('');
                county_candidate.text('Trump'); //default to be Trump
                county_votes.text('int');
                county_fact.text(''); //current no faction for state
                portrait.attr("xlink:href", "images/trump.png") // default to be Trump

            } else if (id.length == 5 ){
                countyName = simplemaps_countymap_mapinfo.names[id];
                bar_text.text(state_p + "+" + county_p);
                // data related to countyResult.csv
                county_state.text(state_p);
                county_county.text(county_p);
                county_candidate.text('Trump'); //default to be Trump
                county_votes.text('int');
                county_fact.text('float');
                portrait.attr("xlink:href", "images/trump.png") // default to be Trump
                // Automatically jump to bottom
                d3.select('#map').on('click', function () {
                    document.getElementById('barCharts').scrollIntoView(true);
                })
            
             var height_p = 500;
var width_p = 1000;
var margin_p = {
	left:80,
	right:50,
	top:80,
	bottom:50
}


var svg_p = d3.select("#partybar").append("svg").attr("height", height_p).attr("width", width_p);

// parameter can be changed
var x_bar = 200;
var bar_height = 30;
var barLength = 600;

// Label
var bar_sq = 30;
var dist = 140;
var textDist = 8;

var portrait = svg_p.append("image")
.attr("x", 20)
.attr("y", 20)
.attr("width", 100)
.attr("height",100);

var hSq = svg_p.append("rect")
	.attr("class","partybar_label")
	.attr("x", x_bar)
	.attr("y", margin_p.top)
	.attr("width", bar_sq)
	.attr("height", bar_sq)
	.attr("fill", "blue")
	.style("opacity", 0.8)
	.on('mouseover', function () {
	portrait.attr("xlink:href", "images/hillary.png");
	})
    .on('mouseout', function () {
	portrait.attr("xlink:href", "");
	})
	.on("click", function () {
	portrait.attr("xlink:href", "images/hillary.png");
	});

var sSq = svg_p.append("rect")
	.attr("class","partybar_label")
	.attr("x", x_bar + dist)
	.attr("y", margin_p.top)
	.attr("width", bar_sq)
	.attr("height", bar_sq)
	.attr("fill", "orange")
	.style("opacity", 0.8)
	.on('mouseover', function () {
	portrait.attr("xlink:href", "images/bernie.png");
	})
    .on('mouseout', function () {
	portrait.attr("xlink:href", "");
	})
	.on("click", function () {
	portrait.attr("xlink:href", "images/bernie.png");
	});

var tSq = svg_p.append("rect")
	.attr("class","partybar_label")
	.attr("x", x_bar + 2*dist)
	.attr("y", margin_p.top)
	.attr("width", bar_sq)
	.attr("height", bar_sq)
	.attr("fill", "red")
	.style("opacity", 0.8)
	.on('mouseover', function () {
	portrait.attr("xlink:href", "images/trump.png");
	})
    .on('mouseout', function () {
	portrait.attr("xlink:href", "");
	})
	.on("click", function () {
	portrait.attr("xlink:href", "images/trump.png");
	});

var cSq = svg_p.append("rect")
	.attr("class","partybar_label")
	.attr("x", x_bar + 3 * dist)
	.attr("y", margin_p.top)
	.attr("width", bar_sq)
	.attr("height", bar_sq)
	.attr("fill", "green")
	.style("opacity", 0.8)
	.on('mouseover', function () {
	portrait.attr("xlink:href", "images/cruz.png");
	})
    .on('mouseout', function () {
	portrait.attr("xlink:href", "");
	})
	.on("click", function () {
	portrait.attr("xlink:href", "images/cruz.png");
	});

var oSq = svg_p.append("rect")
	.attr("class","partybar_label")
	.attr("x", x_bar + 4 * dist)
	.attr("y", margin_p.top)
	.attr("width", bar_sq)
	.attr("height", bar_sq)
	.attr("fill", "grey")
	.on('mouseover', function () {
	portrait.attr("xlink:href", "images/other.png");
	})
    .on('mouseout', function () {
	portrait.attr("xlink:href", "");
	})
	.on("click", function () {
	portrait.attr("xlink:href", "images/other.png");
	});

var text_p_h = svg_p.append("text")
	.attr("class","partybar_label_text")
	.attr("x", x_bar+bar_sq/2)
	.attr("y", margin_p.top - textDist)
	.attr("text-anchor","middle")
	.text("Hillary Clinton");

var text_p_s = svg_p.append("text")
	.attr("class","partybar_label_text")
	.attr("x", x_bar+ 1*dist + bar_sq/2)
	.attr("y", margin_p.top - textDist)
	.attr("text-anchor","middle")
	.text("Bernie Sanders");

var text_p_t = svg_p.append("text")
	.attr("class","partybar_label_text")
	.attr("x", x_bar+2*dist +bar_sq/2)
	.attr("y", margin_p.top - textDist)
	.attr("text-anchor","middle")
	.text("Donald Trump");

var text_p_c = svg_p.append("text")
	.attr("class","partybar_label_text")
	.attr("x", x_bar+3*dist +bar_sq/2)
	.attr("y", margin_p.top - textDist)
	.attr("text-anchor","middle")
	.text("Ted Cruz");

var text_p_o = svg_p.append("text")
	.attr("class","partybar_label_text")
	.attr("x", x_bar+4*dist +bar_sq/2)
	.attr("y", margin_p.top - textDist)
	.attr("text-anchor","middle")
	.text("Other");

var text_p_D = svg_p.append("text")
	.attr("class","partybar_text_party")
	.attr("text-anchor","middle")
	.attr("x", margin_p.left)
	.attr("y", 0.4 * height_p)
	.text("Democrats");

var text_p_R = svg_p.append("text")
	.attr("class","partybar_text_party")
	.attr("text-anchor","middle")
	.attr("x", margin_p.left)
	.attr("y", 0.6 * height_p)
	.text("Republican");


var fractions = {
	t: results[state_p][county_p]["Donald Trump"].Fraction,
	c: results[state_p][county_p]["Ted Cruz"].Fraction,
	h: results[state_p][county_p]["Hillary Clinton"].Fraction,
	s: results[state_p][county_p]["Bernie Sanders"].Fraction,
	d: 1 - results[state_p][county_p]["Hillary Clinton"].Fraction - results[state_p][county_p]["Bernie Sanders"].Fraction,
	r: 1 - results[state_p][county_p]["Donald Trump"].Fraction - results[state_p][county_p]["Ted Cruz"].Fraction
}

console.log(fractions);
var trumpBar = {
	x:x_bar,
	y:300 - bar_height/2,
	width: fractions.t * barLength,
	height: bar_height,
	votes: results[state_p][county_p]["Donald Trump"].Votes
}

var cruzBar = {
	x:trumpBar.x+trumpBar.width,
	y:300- bar_height/2, 
	width:  fractions.c * barLength,
	height: bar_height,
	votes: results[state_p][county_p]["Ted Cruz"].Votes
}

var clintonBar = {
	x:x_bar,
	y:200- bar_height/2, 
	width: fractions.h * barLength,
	height: bar_height,
	votes: results[state_p][county_p]["Hillary Clinton"].Votes
}

var sandersBar = {
	x:clintonBar.x+clintonBar.width,
	y:200- bar_height/2,
	width: fractions.s * barLength,
	height: bar_height,
	votes: results[state_p][county_p]["Bernie Sanders"].Votes
}

// other democrats
var dOtherBar = {
	x:sandersBar.x+sandersBar.width,
	y:200- bar_height/2,
	width: fractions.d * barLength,
	height: bar_height,
	votes: Math.round(clintonBar.votes / fractions.h * fractions.d)
}

// other republican 
var rOtherBar = {
	x:cruzBar.x + cruzBar.width,
	y:300- bar_height/2,
	width: fractions.r * barLength,
	height: bar_height,
	votes: Math.round(trumpBar.votes / fractions.t * fractions.r)
}

// total republican and democrats votes
var rTotalVotes = trumpBar.votes + cruzBar.votes + rOtherBar.votes;
var dTotalVotes = clintonBar.votes + sandersBar.votes + dOtherBar.votes;

var trumpTip = d3.tip()
  .attr("class", "d3-tip")
  .offset([-10, 0])
  .html(function(d) {
    return "<strong style='color:white'>Donald Trump:</strong> <span style='color:red'>" + trumpBar.votes + " votes " + "</span>" +
    "<strong style='color:white'> Total Republican:</strong><span style='color:red'>" + rTotalVotes + " votes" + "</span>";
  });

var cruzTip = d3.tip()
  .attr("class", "d3-tip")
  .offset([-10, 0])
  .html(function(d) {
    return "<strong style='color:white'>Ted Cruz:</strong> <span style='color:green'>" + cruzBar.votes + " votes" + "</span>" + 
    "<strong style='color:white'> Total Republican:</strong><span style='color:green'>" + rTotalVotes + " votes" + "</span>";
  });

var clintonTip = d3.tip()
  .attr("class", "d3-tip")
  .offset([-10, 0])
  .html(function(d) {
    return "<strong style='color:white'>Hillary Clinton:</strong> <span style='color:blue'>" + clintonBar.votes + " votes" + "</span>" +
    "<strong style='color:white'> Total Democrats:</strong><span style='color:blue'>" + dTotalVotes + " votes" + "</span>";
  });

var sandersTip = d3.tip()
  .attr("class", "d3-tip")
  .offset([-10, 0])
  .html(function(d) {
    return "<strong style='color:white'>Bernie Sanders:</strong> <span style='color:orange'>" + sandersBar.votes + " votes" + "</span>"+
    "<strong style='color:white'> Total Democrats:</strong><span style='color:orange'>" + dTotalVotes + " votes" + "</span>";
  });

var rTip = d3.tip()
  .attr("class", "d3-tip")
  .offset([-10, 0])
  .html(function(d) {
    return "<strong style='color:white'>Other Republican:</strong> <span style='color:grey'>" + rOtherBar.votes + " votes" + "</span>"+
    "<strong style='color:white'> Total Democrats:</strong><span style='color:grey'>" + dTotalVotes + " votes" + "</span>";
  });

var dTip = d3.tip()
  .attr("class", "d3-tip")
  .offset([-10, 0])
  .html(function(d) {
    return "<strong style='color:white'>Other Democrats:</strong><span style='color:grey'>" + dOtherBar.votes + " votes" + "</span>"+
    "<strong style='color:white'> Total Democrats:</strong><span style='color:grey'>" + dTotalVotes + " votes" + "</span>";
  });

svg_p.call(trumpTip);
svg_p.call(cruzTip);
svg_p.call(sandersTip);
svg_p.call(clintonTip);
svg_p.call(rTip);
svg_p.call(dTip);

var clinton_bar = svg_p.append("rect")
	.attr("class","partybar_bar")
	.attr("x", clintonBar.x)
	.attr("y", clintonBar.y)
	.attr("width", clintonBar.width)
	.attr("height", clintonBar.height)
	.attr("fill", "blue")
	.style("opacity", 0.8)
	.on('mouseover', function (d){
		clintonTip.show(d);
		portrait.attr("xlink:href", "images/hillary.png")
	})
    .on('mouseout', function (d) {
    	clintonTip.hide(d);
    	portrait.attr("xlink:href", "")
    })
    .on('click',function (d) {
    	clintonTip.show(d);
    	sandersTip.hide(d);
		trumpTip.hide(d);
		cruzTip.hide(d);
		dTip.hide(d);
		rTip.hide(d);
 		portrait.attr("xlink:href", "images/hillary.png")
    });

var sanders_bar = svg_p.append("rect")
	.attr("class","partybar_bar")
	.attr("x", sandersBar.x)
	.attr("y", sandersBar.y)
	.attr("width", sandersBar.width)
	.attr("height", sandersBar.height)
	.attr("fill", "orange")
	.style("opacity", 0.8)
	.on('mouseover', function (d) {
		sandersTip.show(d);
		portrait.attr("xlink:href", "images/bernie.png")
	})
    .on('mouseout', function (d) {
    	sandersTip.hide(d);
    	portrait.attr("xlink:href", "")
    })
    .on('click',function () {  	
		trumpTip.hide();
		cruzTip.hide();
		dTip.hide();
		rTip.hide();
    	clintonTip.hide();
    	sandersTip.show();
    	portrait.attr("xlink:href", "images/bernie.png")
    });

var trump_bar = svg_p.append("rect")
	.attr("class","partybar_bar")
	.attr("x", trumpBar.x)
	.attr("y", trumpBar.y)
	.attr("width", trumpBar.width)
	.attr("height", trumpBar.height)
	.attr("fill", "red")
	.style("opacity", 0.8)
	.on('mouseover', function (d) {
		trumpTip.show(d);
		portrait.attr("xlink:href", "images/trump.png");
	})
    .on('mouseout', function (d) {
    	trumpTip.hide(d);
    	portrait.attr("xlink:href", "");
    })
    .on('click',function () {	
		cruzTip.hide();
		dTip.hide();
		rTip.hide();
    	clintonTip.hide();
    	sandersTip.hide();
    	trumpTip.show();
    	portrait.attr("xlink:href", "images/trump.png");
    });

var cruz_bar = svg_p.append("rect")
	.attr("class","partybar_bar")
	.attr("x", cruzBar.x)
	.attr("y", cruzBar.y)
	.attr("width", cruzBar.width)
	.attr("height", cruzBar.height)
	.attr("fill", "green")
	.style("opacity", 0.8)
	.on('mouseover', function (d) {
		cruzTip.show(d);
		portrait.attr("xlink:href", "images/cruz.png");
	})
    .on('mouseout', function (d) {
    	cruzTip.hide(d);
    	portrait.attr("xlink:href", "");
    })
    .on('click',function () {	
		dTip.hide();
		rTip.hide();
    	clintonTip.hide();
    	sandersTip.hide();
    	trumpTip.hide();
    	cruzTip.show();
    	portrait.attr("xlink:href", "images/cruz.png");
    });

var dOther_bar = svg_p.append("rect")
	.attr("class","partybar_bar")
	.attr("x", dOtherBar.x)
	.attr("y", dOtherBar.y)
	.attr("width", dOtherBar.width)
	.attr("height", dOtherBar.height)
	.attr("fill", "grey")
	.on('mouseover', function (d) {
		dTip.show(d);
		portrait.attr("xlink:href", "images/d.png");
	})
    .on('mouseout', function (d) {
    	dTip.hide(d);
    	portrait.attr("xlink:href", "");
    })
    .on('click',function () {			
		rTip.hide();
    	clintonTip.hide();
    	sandersTip.hide();
    	trumpTip.hide();
    	cruzTip.hide();
    	dTip.show();
    	portrait.attr("xlink:href", "images/d.png");
    });

var rOther_Bar = svg_p.append("rect")
	.attr("class","partybar_bar")
	.attr("x", rOtherBar.x)
	.attr("y", rOtherBar.y)
	.attr("width", rOtherBar.width)
	.attr("height", rOtherBar.height)
	.attr("fill", "grey")
	.on('mouseover', function (d) {
		rTip.show(d);
		portrait.attr("xlink:href", "images/r.png");
	})
    .on('mouseout', function (d) {
    	rTip.hide(d);
    	portrait.attr("");
    })
    .on('click',function () {					
    	clintonTip.hide();
    	sandersTip.hide();
    	trumpTip.hide();
    	cruzTip.hide();
    	dTip.hide();
    	rTip.show();
    	portrait.attr("xlink:href", "images/r.png");
    });


            
            
            
            
            
            }

            
            
            if (element.sm.inactive) {
                return;
            }
            if (on_click && tooltip_up) {
                tooltip.update_pos();
                if (!element.sm.on_click) {
                    popup_hide();
                    on_click = false;
                    over.call(element);
                    if (!element.sm.zoomable) {
                        return;
                    }
                }
            }
            on_click = element.sm.on_click;
            popup_off = element.sm.popup_off;
            if (element.sm.zoomable && (element.sm.type == "region" || last_destination != element || element.sm.type == "out")) {
                zoomable_click_hook(element);
                tooltip.hide();
                tooltip_up = false;
                if (last_clicked) {
                    out.call(last_clicked);
                    setTimeout(function() {
                        zoom_to(element);
                    }, fade_time);
                } else {
                    zoom_to(element);
                }
            } else if (!on_click) {
                click_hook(element);
                var link = element.sm.url;
                if (link != "") {
                    if (!new_tab) {
                        window.location.href = link;
                        return;
                    } else {
                        window.open(link, "_newtab");
                        tooltip.hide();
                        return;
                    }
                }
            } else {
                if (last_clicked != element && last_clicked) {
                    reset_appearance(last_clicked);
                }
                click_hook(element);
                tooltip.show(element.sm.content);
                tooltip_up = true;
                highlight_labels(element, "over");
                if (vml && element.sm.type == "location" && element.sm.shape_type == "image") {} else {
                    if (!element.sm.ignore_hover) {
                        element.attr(element.sm.over_attributes);
                    }
                }
                last_clicked = element;
                var close_image = document.getElementById("xpic_sm" + "_" + div);
                var close_image = document.getElementById("xpic_sm" + "_" + div);
                if (close_image) {
                    close_image.onclick = function() {
                        tooltip.hide();
                        tooltip_up = false;
                        out.call(last_clicked);
                        on_click = false;
                        if (hooks_object.close_popup) {
                            hooks_object.close_popup();
                        }
                    };
                }
            }
        };
        back_click = function() {
            if (hooks_object.back) {
                hooks_object.back();
            }
            if ((last_destination.sm.type == "out" || last_destination.sm.type == "region" && initial_zoom_solo) && initial_back) {
                window.location.href = "javascript:" + initial_back;
            } else if (incremental && last_destination.sm.type == "state" && last_destination.sm.region) {
                if (last_clicked && tooltip_up) {
                    out.call(last_clicked, true, function() {
                        zoom_to(region_array[last_destination.sm.region]);
                    });
                } else {
                    zoom_to(region_array[last_destination.sm.region]);
                }
            } else {
                if (last_clicked && tooltip_up) {
                    out.call(last_clicked, true, function() {
                        zoom_to(region_array[-1]);
                    });
                } else {
                    zoom_to(region_array[-1]);
                }
            }
        };
        background_click = function() {
            if (on_click) {
                tooltip.hide();
                if (last_clicked) {
                    reset_appearance(last_clicked);
                }
                tooltip_up = false;
                on_click = false;
            }
        };
    }

    function order() {
        all_states.toBack();
        background.toBack();
        if (all_external_borders) {
            all_external_borders.toFront();
        }
        all_labels.toFront();
        top_labels.toFront();
        all_locations.toFront();
        location_labels.toFront();
    }

    function set_up_tooltip() {
        tooltip = create_tooltip();
    }

    function set_events(refresh) {
        if (!refresh) {
            all_states.hover(over, out);
            all_states.click(click);
            background.click(background_click);
            background.hover(reset_tooltip, reset_tooltip);
            back_arrow.click(back_click);
            if (responsive) {
                set_responsive_handler();
            }
        }
        all_locations.hover(over, out);
        all_locations.click(click);
        all_labels.hover(label_over, label_out);
        all_labels.click(label_click);
    }
    var resizing = false;

    function resize_paper() {
        if (mapdiv.offsetWidth < 1) {
            return;
        }
        resizing = true;
        create_dimensions();
        paper.setSize(width, height);
        var scaled_border_size = border_size * (width / original_width) * normalizing_factor;
        if (all_states && all_locations) {
            all_states.forEach(function(state) {
                state.attr({
                    'stroke-width': scaled_border_size
                });
                state.sm.attributes['stroke-width'] = scaled_border_size;
                state.sm.over_attributes['stroke-width'] = state.sm.hover_border_size * (width / original_width) * normalizing_factor;
            });
            all_locations.forEach(function(location) {
                if (lattr[location.sm.id].type != "image") {
                    location.sm.attributes['stroke-width'] = lattr[location.sm.id].border * (width / original_width) * normalizing_factor;
                    location.sm.over_attributes['stroke-width'] = lattr[location.sm.id].hover_border * (width / original_width) * normalizing_factor;
                    location.attr({
                        'stroke-width': location.sm.attributes['stroke-width']
                    });
                }
            });
        }
        var adjusted_ratio = width / original_width;
        resizing = false;
    }

    function reveal_map(refresh) {
        if (initial_zoom != -1) {
            var region = region_array[initial_zoom];
            if (!initial_back) {
                back_arrow.hide();
            }
            if (!refresh) {
                zoom_to(region, true);
            }
            if (initial_zoom_solo) {
                background.show();
                if (!initial_back) {
                    back_arrow.hide();
                }
                for (var i = 0; i < region.sm.states.length; i++) {
                    var id = region.sm.states[i];
                    var state = state_array[id];
                    if (!state.sm.hide) {
                        state.show();
                    }
                }
                region.sm.labels.forEach(function(label) {
                    label.show();
                });
                return;
            }
        }
        background.show();
        all_visible_states.show();
        all_visible_labels.show();
    }

    function refresh_map() {
        set_attributes();
        create_states(true);
        create_regions(true);
        create_locations(true);
        create_labels();
        style_background();
        hide_and_show_before(last_destination, false);
        hide_and_show_after(last_destination, false);
        order();
        set_events(true);
        resize_paper();
        reveal_map(true);
        if (hooks_object.refresh_complete) {
            hooks_object.refresh_complete();
        }
    }
    var after_page_loads = function(manual) {
        function first() {
            get_mapdata();
            preload();
            get_client_info();
            get_map_info();
            get_refreshable_info();
            create_dom_structure();
            create_dimensions();
            create_canvas();
            if (!popup_nocss) {
                set_tt_css();
            }
            set_up_tooltip();
            create_back_button();
            set_attributes();
            style_background();
            create_states();
            create_regions();
            create_borders();
            if (vml || !manual) {
                setTimeout(second, 1);
            } else {
                second();
            }
        }

        function second() {
            create_locations();
            create_labels();
            reset_all_region_attributes();
            order();
            create_event_handlers();
            set_events();
            reveal_map();
            tooltip.create();
            if (hooks_object.complete) {
                hooks_object.complete();
            }
        }
        first();
    };
    var get_xy = function() {
        var everything = paper.set();
        everything.push(all_states, all_locations, background, all_labels);
        everything.mousedown(function(e, a, b) {
            var l = ie ? event.clientX + document.documentElement.scrollLeft : e.pageX;
            var u = ie ? event.clientY + document.documentElement.scrollTop : e.pageY;
            var find_pos = findPos(map_inner);
            var x0 = find_pos[0];
            var y0 = find_pos[1];
            var go = current_viewbox;
            var this_width = go.r * width / scale;
            var this_height = go.r * height / scale;
            var x = -1 * x_scale + go.x / scale + this_width * (l - x0) / width;
            var y = -1 * y_scale + go.y / scale + this_height * (u - y0) / height;
            x = x.toPrecision(8);
            y = y.toPrecision(8);
            var print_string = "x: " + x + "," + "\ny: " + y + ",";
            prompt("Below are your x/y coordinates", print_string);
            return;
        });
    };
    var over_hook = function(element) {
        var type = element.sm.type;
        if (type == "state" && hooks_object.over_state) {
            hooks_object.over_state(element.sm.id);
        }
        if (type == "location" && hooks_object.over_location) {
            hooks_object.over_location(element.sm.id);
        }
        if (type == "region" && hooks_object.over_region) {
            hooks_object.over_region(element.sm.id);
        }
    };
    var out_hook = function(element) {
        var type = element.sm.type;
        if (type == "state" && hooks_object.out_state) {
            hooks_object.out_state(element.sm.id);
        }
        if (type == "location" && hooks_object.out_location) {
            hooks_object.out_location(element.sm.id);
        }
        if (type == "region" && hooks_object.out_region) {
            hooks_object.out_region(element.sm.id);
        }
    };
    var click_hook = function(element) {
        var type = element.sm.type;
        if (type == "state" && hooks_object.click_state) {
            hooks_object.click_state(element.sm.id);
        }
        if (type == "region" && hooks_object.click_region) {
            hooks_object.click_region(element.sm.id);
        }
        if (type == "location" && hooks_object.click_location) {
            hooks_object.click_location(element.sm.id);
        }
    };
    var zoomable_click_hook = function(element) {
        var type = element.sm.type;
        if (type == "state" && hooks_object.zoomable_click_state) {
            hooks_object.zoomable_click_state(element.sm.id);
        }
        if (type == "region" && hooks_object.zoomable_click_region) {
            hooks_object.zoomable_click_region(element.sm.id);
        }
    };

    function load_map() {
        if (!map_inner) {
            after_page_loads(true);
        } else {
            delete paper;
            after_page_loads(true);
        }
    }

    function region_zoom(id) {
        var region = region_array[id];
        zoom_to(region);
    }

    function state_zoom(id) {
        var state = state_array[id];
        zoom_to(state);
    }

    function reset_tooltip() {
        if (last_over) {
            out.call(last_over);
        }
        if (!tooltip_manual) {
            return;
        } else {
            tooltip_manual = false;
        }
        if (on_click) {
            return;
        }
        tooltip.hide();
        setTimeout(function() {}, 100);
    }

    function popup(type, id) {
        if (type == "state") {
            var element = state_array[id];
        } else if (type == "region") {
            var element = region_array[id];
        } else {
            var element = location_array[id];
        }
        if (!element) {
            console.log(type + " " + id + " does not exist");
            return false;
        }
        var box = last_destination.sm.zooming_dimensions;
        if (type != "location") {
            var bb = element.sm.bbox;
            var x = (bb.x + bb.x2) * 0.5;
            var y = (bb.y + bb.y2) * 0.5;
            x = (x + x_scale) * scale;
            y = (y + y_scale) * scale;
        } else {
            var x = element.sm.x;
            var y = element.sm.y;
            x = (x + x_scale) * scale;
            y = (y + y_scale) * scale;
        }
        var current_x = (x - box.x) / ratio;
        var current_y = (y - box.y) / ratio;
        if (current_x > width * 1.1 || current_y > height * 1.1) {
            console.log("Not in this region");
            return false;
        }
        if (on_click) {
            click.call(element);
        } else {
            over.call(element);
        }
        tooltip_manual = true;
        tooltip.reset_pos(current_x, current_y);
        ignore_pos = true;
        tooltip_manual = false;
        return true;
    }

    function popup_hide() {
        tooltip.hide();
        tooltip_up = false;
        if (on_click) {
            out.call(last_clicked);
        } else {
            out.call(last_over);
        }
    }

    function go_back() {
        back_click();
    }
    var api_object = {
        calibrate: create_bbox_state,
        get_xy: get_xy,
        refresh: refresh_map,
        load: load_map,
        region_zoom: region_zoom,
        state_zoom: state_zoom,
        back: go_back,
        popup: popup,
        popup_hide: popup_hide,
        zoom_level: "out",
        hooks: hooks_object,
        mapdata: mapdata
    };

    function update_zoom_level() {
        api_object.zoom_level = last_destination.sm.type;
    }
    return api_object;
};
if (typeof simplemaps_countymap === "undefined") {
    if (typeof simplemaps_countymap_mapdata !== "undefined") {
        simplemaps_countymap = create_simplemaps_countymap(true);
    }
}
if (window.addEventListener) {
    window.addEventListener("load", function() {
        setTimeout(function() {
            if (typeof simplemaps_countymap === "undefined") {
                simplemaps_countymap = create_simplemaps_countymap(true);
            }
            if (simplemaps_countymap.mapdata.main_settings.auto_load != "no") {
                simplemaps_countymap.load();
            }
        }, 1);
    });
} else if (window.attachEvent) {
    window.attachEvent("onload", function() {
        setTimeout(function() {
            if (typeof simplemaps_countymap === "undefined") {
                simplemaps_countymap = create_simplemaps_countymap(true);
            }
            if (simplemaps_countymap.mapdata.main_settings.auto_load != "no") {
                simplemaps_countymap.load();
            }
        }, 1);
    });
}