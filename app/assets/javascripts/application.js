// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
// = require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .
/*!
 * Bootstrap v3.3.2 (http://getbootstrap.com)
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */

//for Google Maps Api
function getGoogleMap(info, callback){

 var edited_street = info['str'].replace(" ", "+");
 var data = {
   num  : info['num'],
   str  : edited_street,
   apt  : info['apt'],
   city : info['city'],
   state: info['state'],
   zip  : info['zip']
 }

 var api_key = "AIzaSyCm5KqD2-sVqIMbQMnWkf6eKc3upQCVqpM";
 var iframe_url = "https://www.google.com/maps/embed/v1/place?key="+api_key+"&q=";
 var zoom = "&zoom=13";

 var  iframe_html = "<iframe id='imap' src='";
      iframe_html += iframe_url;
      iframe_html += data['num']+"+";
      iframe_html += data['str']+"+";
      iframe_html += data['city']+"+";
      iframe_html += data['state']+"+";
      iframe_html += data['zip']+"+";
      iframe_html += zoom;
      iframe_html += "' allowfullscreen>";
      iframe_html += "</iframe>";

  if (typeof(callback) == 'function'){
    callback(iframe_html);
  }
}
// end for google maps api

//for index page -> all services -> show service
function selectService(serviceId) {
  $.get("/services/"+serviceId+"/ajax_show/", function(response){

    if (response){
      //to update map

      // todo: convert ruby hash into useable JSON for service hours
        // console.log(typeof(JSON.parse(response.service.hours)));
        // console.log(typeof($.parseJSON(response.service.hours)));
        // console.log($.parseJSON(response.service.hours));
        // response.service.hours = JSON.parse(response.service.hours);

      if (response.address != null){
        var serviceAddressNumber  = response.address.number;
        var serviceAddressStreet  = response.address.street;
        var serviceAddressApt     = response.address.apt ? response.address.apt : " ";
        var serviceAddressCity    = response.address.city;
        var serviceAddressState   = response.state.name;
        var serviceAddressZip     = response.zip.code;

        var data = {
          num   :   serviceAddressNumber,
          str   :   serviceAddressStreet,
          apt   :   serviceAddressApt,
          city  :   serviceAddressCity,
          state :   serviceAddressState,
          zip   :   serviceAddressZip
        }

        getGoogleMap(data, function(iframe_html){
          $('#map').html(iframe_html);
        });
      }

      //to show info

      //todo: table html once successfully converted service hours from RUBY hash to JSON
          // var hoursTableHtml = "<table>";
          //       hoursTableHtml += "<thead>";
          //         hoursTableHtml += "<tr>";
          //           hoursTableHtml += "<td>Day</td>";
          //           hoursTableHtml += "<td>Open</td>";
          //           hoursTableHtml += "<td>Close</td";
          //         hoursTableHtml += "</tr>";
          //       hoursTableHtml += "</thead>";
          //
          //       hoursTableHtml += "<tbody>";
          //         hoursTableHtml += "<tr>";
          //           hoursTableHtml += "<td>Sunday</td>";
          //           hoursTableHtml += "<td>";
          //           hoursTableHtml += response.service.hours.sunday.open;
          //           hoursTableHtml += "</td>";
          //           hoursTableHtml += "<td>";
          //           hoursTableHtml += response.service.hours.sunday.close;
          //           hoursTableHtml += "</td>";
          //         hoursTableHtml += "</tr>";
          //
          //         hoursTableHtml += "<tr>";
          //           hoursTableHtml += "<td>Monday</td>";
          //           hoursTableHtml += "<td>";
          //           hoursTableHtml += response.service.hours.monday.open;
          //           hoursTableHtml += "</td>";
          //           hoursTableHtml += "<td>";
          //           hoursTableHtml += response.service.hours.monday.close;
          //           hoursTableHtml += "</td>";
          //         hoursTableHtml += "</tr>";
          //
          //         hoursTableHtml += "<tr>";
          //           hoursTableHtml += "<td>Tuesday</td>";
          //           hoursTableHtml += "<td>";
          //           hoursTableHtml += response.service.hours.tuesday.open;
          //           hoursTableHtml += "</td>";
          //           hoursTableHtml += "<td>";
          //           hoursTableHtml += response.service.hours.tuesday.close;
          //           hoursTableHtml += "</td>";
          //         hoursTableHtml += "</tr>";
          //
          //         hoursTableHtml += "<tr>";
          //           hoursTableHtml += "<td>Wednesday</td>";
          //           hoursTableHtml += "<td>";
          //           hoursTableHtml += response.service.hours.wednesday.open;
          //           hoursTableHtml += "</td>";
          //           hoursTableHtml += "<td>";
          //           hoursTableHtml += response.service.hours.wednesday.close;
          //           hoursTableHtml += "</td>";
          //         hoursTableHtml += "</tr>";
          //
          //         hoursTableHtml += "<tr>";
          //           hoursTableHtml += "<td>Thursday</td>";
          //           hoursTableHtml += "<td>";
          //           hoursTableHtml += response.service.hours.thursday.open;
          //           hoursTableHtml += "</td>";
          //           hoursTableHtml += "<td>";
          //           hoursTableHtml += response.service.hours.thursday.close;
          //           hoursTableHtml += "</td>";
          //         hoursTableHtml += "</tr>";
          //
          //         hoursTableHtml += "<tr>";
          //           hoursTableHtml += "<td>Friday</td>";
          //           hoursTableHtml += "<td>";
          //           hoursTableHtml += response.service.hours.friday.open;
          //           hoursTableHtml += "</td>";
          //           hoursTableHtml += "<td>";
          //           hoursTableHtml += response.service.hours.friday.close;
          //           hoursTableHtml += "</td>";
          //         hoursTableHtml += "</tr>";
          //
          //         hoursTableHtml += "<tr>";
          //           hoursTableHtml += "<td>Saturday</td>";
          //           hoursTableHtml += "<td>";
          //           hoursTableHtml += response.service.hours.saturday.open;
          //           hoursTableHtml += "</td>";
          //           hoursTableHtml += "<td>";
          //           hoursTableHtml += response.service.hours.saturday.close;
          //           hoursTableHtml += "</td>";
          //         hoursTableHtml += "</tr>";
          //
          //       hoursTableHtml += "</tbody";
          //     hoursTableHtml += "</table>";

      $('#serviceName').text(response.service.name);
      $('#serviceDescription').text(response.service.description);
      $('#serviceWebsite').html("<a href='"+response.service.website+"'>"+response.service.website+"</a>");
      // $('#serviceHours').html(hoursTableHtml);

      if (typeof(response.contact[0]) !== 'undefined'){
        $('#contactName').text("Name: "+response.contact[0].name);
        $('#contactEmail').text("Email: "+response.contact[0].email);
        $('#contactPhone').text("Phone: "+response.contact[0].phone);
      } else if (typeof(response.contact[0]) == 'undefined') {
        $('#contactName').text("Name:");
        $('#contactEmail').text("Email:");
        $('#contactPhone').text("Phone:");
      }
    }

    return false;
  }, 'json')
}
//end for index page


if ("undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery"); + function(a) {
    "use strict";
    var b = a.fn.jquery.split(" ")[0].split(".");
    if (b[0] < 2 && b[1] < 9 || 1 == b[0] && 9 == b[1] && b[2] < 1) throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher")
}(jQuery), + function(a) {
    "use strict";


    function b(b) {
        b && 3 === b.which || (a(e).remove(), a(f).each(function() {
            var d = a(this),
                e = c(d),
                f = {
                    relatedTarget: this
                };
            e.hasClass("open") && (e.trigger(b = a.Event("hide.bs.dropdown", f)), b.isDefaultPrevented() || (d.attr("aria-expanded", "false"), e.removeClass("open").trigger("hidden.bs.dropdown", f)))
        }))
    }

    function c(b) {
        var c = b.attr("data-target");
        c || (c = b.attr("href"), c = c && /#[A-Za-z]/.test(c) && c.replace(/.*(?=#[^\s]*$)/, ""));
        var d = c && a(c);
        return d && d.length ? d : b.parent()
    }

    function d(b) {
        return this.each(function() {
            var c = a(this),
                d = c.data("bs.dropdown");
            d || c.data("bs.dropdown", d = new g(this)), "string" == typeof b && d[b].call(c)
        })
    }
    var e = ".dropdown-backdrop",
        f = '[data-toggle="dropdown"]',
        g = function(b) {
            a(b).on("click.bs.dropdown", this.toggle)
        };
    g.VERSION = "3.3.2", g.prototype.toggle = function(d) {
        var e = a(this);
        if (!e.is(".disabled, :disabled")) {
            var f = c(e),
                g = f.hasClass("open");
            if (b(), !g) {
                "ontouchstart" in document.documentElement && !f.closest(".navbar-nav").length && a('<div class="dropdown-backdrop"/>').insertAfter(a(this)).on("click", b);
                var h = {
                    relatedTarget: this
                };
                if (f.trigger(d = a.Event("show.bs.dropdown", h)), d.isDefaultPrevented()) return;
                e.trigger("focus").attr("aria-expanded", "true"), f.toggleClass("open").trigger("shown.bs.dropdown", h)
            }
            return !1
        }
    }, g.prototype.keydown = function(b) {
        if (/(38|40|27|32)/.test(b.which) && !/input|textarea/i.test(b.target.tagName)) {
            var d = a(this);
            if (b.preventDefault(), b.stopPropagation(), !d.is(".disabled, :disabled")) {
                var e = c(d),
                    g = e.hasClass("open");
                if (!g && 27 != b.which || g && 27 == b.which) return 27 == b.which && e.find(f).trigger("focus"), d.trigger("click");
                var h = " li:not(.divider):visible a",
                    i = e.find('[role="menu"]' + h + ', [role="listbox"]' + h);
                if (i.length) {
                    var j = i.index(b.target);
                    38 == b.which && j > 0 && j--, 40 == b.which && j < i.length - 1 && j++, ~j || (j = 0), i.eq(j).trigger("focus")
                }
            }
        }
    };
    var h = a.fn.dropdown;
    a.fn.dropdown = d, a.fn.dropdown.Constructor = g, a.fn.dropdown.noConflict = function() {
        return a.fn.dropdown = h, this
    }, a(document).on("click.bs.dropdown.data-api", b).on("click.bs.dropdown.data-api", ".dropdown form", function(a) {
        a.stopPropagation()
    }).on("click.bs.dropdown.data-api", f, g.prototype.toggle).on("keydown.bs.dropdown.data-api", f, g.prototype.keydown).on("keydown.bs.dropdown.data-api", '[role="menu"]', g.prototype.keydown).on("keydown.bs.dropdown.data-api", '[role="listbox"]', g.prototype.keydown)
}(jQuery), + function(a) {
    "use strict";


}(jQuery);
