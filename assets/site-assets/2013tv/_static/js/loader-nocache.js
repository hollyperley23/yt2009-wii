var _____WB$wombat$assign$function_____ = function (name) {
  return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name];
};
if (!self.__WB_pmw) {
  self.__WB_pmw = function (obj) {
      this.__WB_source = obj;
      return this;
  };
}
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

  window.labels = {
      live: "f4d170b4",
      aa: "a0000000",
      ac: "a0000002",
      ab: "a0000001",
      ae: "a0000004",
      ad: "a0000003",
      ag: "a0000006",
      af: "a0000005",
      ai: "a0000008",
      ah: "a0000007",
      aj: "a0000009"
  };

  (function () {
      var a = window.labels;
      window.jstiming && window.jstiming.load && window.jstiming.load.tick("ld_s");

      var b = window.devjs,
          c = /[?&]debugjs=1/.exec(window.location.href),
          e = /[?&]localPlayer=1/.exec(window.location.href),
          g = /[?&]mediaDiagnostics=1/.exec(window.location.href),
          h = /[?&]prodjs=1/.exec(window.location.href),
          k = /[?&]label=([a-f0-9]{8}|[a-z]+)(?:[&#].*)?$/.exec(window.location.href);

      k && 2 === k.length && (k = k[1]);
      window.label = b || h ? "current" : a ? (k in a ? a[k] : /^[a-f0-9]{8}$/.test(k) ? k : a.live) : window.label;

      var l = window.appRoot + window.label;

      function n(d) {
          document.write('<script src="' + d + '">\x3c/script>');
      }

      function p(d) {
          document.write("<script>" + d + "\x3c/script>");
      }

      function q(d) {
          var f = document.createElement("link");
          f.setAttribute("rel", "stylesheet");
          f.setAttribute("type", "text/css");
          f.setAttribute("href", d);
          d = document.getElementsByTagName("head")[0];
          d.insertBefore(f, d.lastChild);
      }

      // New Code to Load CSI Script
      var csiUrl = "http://192.168.1.184/assets/site-assets/2013tv/_static/js/csi-tail.js"; // Update your CSI URL here
      var csiScript = document.createElement("script");
      csiScript.src = csiUrl;
      csiScript.type = "text/javascript";
      document.getElementsByTagName("head")[0].appendChild(csiScript);

      window.removeAngularCss = function () {
          if (angular && angular.element) {
              for (var d = angular.element(document).find("style"), f, r = d.length, m = 0; m < r; ++m) {
                  f = d[m];
                  0 <= f.innerText.indexOf("ng-cloak") && angular.element(f).remove();
              }
          }
      };

      window.initializeOrRedirect = function (d) {
          window.jstiming.load.tick("js_r");
          yt && yt.tv && yt.tv.initializer ? yt.tv.initializer(d) : (window.location = "https://web.archive.org/web/20131008034020/http://www.youtube.com/error?src=404");
      };

      b
          ? ((window.CLOSURE_BASE_PATH = "/javascript/closure/"),
            n(l + "/angular.js"),
            n(l + "/lasagna-parse.js"),
            n(CLOSURE_BASE_PATH + "base.js"),
            n("/i18n/t13n/javascript/deps.js"),
            n("/video/youtube/src/web/javascript/deps-runfiles.js"),
            n(l + "/deps.js"),
            n(l + "/js/initializer.js"),
            n(l + "/js/preload_templates.js"),
            p("yt.tv.preloadTemplates.appPath = '" + l + "';"),
            n(l + "/html-list.js"),
            q(l + "/css/main.css"),
            q(l + "/css/search.css"),
            q(l + "/css/browse.css"),
            q(l + "/css/watch.css"),
            q(l + "/css/pair.css"),
            q(l + "/css/toasts.css"),
            q(l + "/css/dialog.css"),
            q(l + "/css/lang.css"),
            q(l + "/css/devices.css"),
            q(l + "/css/media_queries.css"),
            q(l + "/css/experiments.css"),
            q(l + "/css/call_to_cast.css"))
          : c
          ? ((window.CLOSURE_NO_DEPS = !0), q("/app-padadarod.css"), n("/app-conadaadcat-bundle.js"))
          : (q("/assets/site-assets/2013tv/_static/css/app-prod.css"), n("/assets/site-assets/2013tv/_static/js/app-prod.js"));

      window.checkBrokenLabel = function () {
          "undefined" == typeof yt && k && (window.location.href = window.location.href.replace(/([?&])label=[^&]+&?/, "$1stick=0&"));
      };

      p("checkBrokenLabel()");
      p("removeAngularCss()");

      e && (window.environment.player_url = c || b ? "/video/youtube/src/web/javascript/debug-tv-player.js" : "/video/youtube/src/web/javascript/tv-player.js");

      0 <= window.navigator.userAgent.indexOf("SmartHub") &&
          (n("$MANAGER_WIDGET/Common/API/Widget.js"), n("$MANAGER_WIDGET/Common/API/Plugin.js"), n("$MANAGER_WIDGET/Common/API/TVKeyValue.js"));

      g && (c || b ? n(l + "/modules/media-diagnostics-debug.js") : n(l + "/modules/media-diagnostics.js"));

      b || p("initializeOrRedirect('" + l + "');");
  })();
}
