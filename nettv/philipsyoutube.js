function $() {
	for (var a = [], c = arguments, b = 0; b < c.length; b++)
		a.push(document.getElementById(c[b]));
	return 1 == a.length ? a[0] : a
}
function $T() {
	return ("string" == typeof arguments[0] ? document : arguments[0]).getElementsByTagName(arguments[arguments.length - 1])
}
function $E(a) {
	function c(a) {
		return a && "undefined" != typeof a ? !0 : !1
	}
	var b = document.createElement(a.tag);
	if (c(a.attrs))
		for (var d in a.attrs) {
			var e = a.attrs[d],
			e = {
				"for" : "htmlFor",
				"class" : "className"
			}
			[e] || e;
			b.setAttribute(d, e)
		}
	c(a.text) && b.appendChild(document.createTextNode(a.text));
	if (c(a.children))
		for (d = 0; d < a.children.length; d++)
			b.appendChild(NetAnttila.create(a.children[d]));
	return b
}
function getHTTPObject() {
	var a = !1;
	return a = new XMLHttpRequest
}
var Base64 = {
	_keyStr : "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
	encode : function (a) {
		for (var c = "", b, d, e, f, j, h, g = 0, a = Base64._utf8_encode(a); g < a.length; )
			b = a.charCodeAt(g++), d = a.charCodeAt(g++), e = a.charCodeAt(g++), f = b >> 2, b = (b & 3) << 4 | d >> 4, j = (d & 15) << 2 | e >> 6, h = e & 63, isNaN(d) ? j = h = 64 : isNaN(e) && (h = 64), c = c + this._keyStr.charAt(f) + this._keyStr.charAt(b) + this._keyStr.charAt(j) + this._keyStr.charAt(h);
		return c
	},
	decode : function (a) {
		for (var c = "", b, d, e, f, j, h = 0, a = a.replace(/[^A-Za-z0-9\+\/\=]/g, ""); h <
			a.length; )
			b = this._keyStr.indexOf(a.charAt(h++)), d = this._keyStr.indexOf(a.charAt(h++)), f = this._keyStr.indexOf(a.charAt(h++)), j = this._keyStr.indexOf(a.charAt(h++)), b = b << 2 | d >> 4, d = (d & 15) << 4 | f >> 2, e = (f & 3) << 6 | j, c += String.fromCharCode(b), 64 != f && (c += String.fromCharCode(d)), 64 != j && (c += String.fromCharCode(e));
		return c = Base64._utf8_decode(c)
	},
	_utf8_encode : function (a) {
		for (var a = a.replace(/\r\n/g, "\n"), c = "", b = 0; b < a.length; b++) {
			var d = a.charCodeAt(b);
			128 > d ? c += String.fromCharCode(d) : (127 < d && 2048 > d ? c += String.fromCharCode(d >>
					6 | 192) : (c += String.fromCharCode(d >> 12 | 224), c += String.fromCharCode(d >> 6 & 63 | 128)), c += String.fromCharCode(d & 63 | 128))
		}
		return c
	},
	_utf8_decode : function (a) {
		for (var c = "", b = 0, d = c1 = c2 = 0; b < a.length; )
			d = a.charCodeAt(b), 128 > d ? (c += String.fromCharCode(d), b++) : 191 < d && 224 > d ? (c2 = a.charCodeAt(b + 1), c += String.fromCharCode((d & 31) << 6 | c2 & 63), b += 2) : (c2 = a.charCodeAt(b + 1), c3 = a.charCodeAt(b + 2), c += String.fromCharCode((d & 15) << 12 | (c2 & 63) << 6 | c3 & 63), b += 3);
		return c
	}
};
function GetGETParameter(a) {
	a = a.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
	a = RegExp("[\\?&]" + a + "=([^&#]*)").exec(window.location.href);
	return null == a ? "" : a[1]
}
var Initializers = {
	callbacks : [],
	windowLoaded : !1,
	add : function (a) {
		"function" == typeof a && Initializers.callbacks.push(a)
	},
	run : function (a) {
		for (var c = 0; c < Initializers.callbacks.length; c++)
			try {
				Initializers.callbacks[c](a)
			} catch (b) {
				alert("An error occured when calling an initializer. Reason: " + b.message + "\n\nInitializer code:\n\n" + Initializers.callbacks[c])
			}
	},
	Events : {
		onWindowLoad : function (a) {
			Initializers.windowLoaded || (Initializers.windowLoaded = !0, Initializers.run(a))
		}
	}
};
window.onload = Initializers.Events.onWindowLoad;
document.addEventListener && document.addEventListener("DOMContentLoaded", Initializers.Events.onWindowLoad, null);
var PHILIPS = {
	PAGE_ID : "",
	LOCALE : "Worldwide (All)",
	LOCALE_CODE : "",
	USER_LIST_LENGTH : 0,
	VIDEO : null,
	VIDEO_CONTAINER : null,
	VIDEO_LOADER_IMAGE : "",
	VIDEO_DURATION : 0,
	REPEAT_VIDEO : !1,
	AUTOPLAY : !1,
	AUTOPLAY_PLAYING_ITEM : 0,
	VIDEO_IS_PLAYING : !1,
	VIDEO_PAUSED_ON_DIALOG_OPEN : !1,
	DATASTORAGE : {},
	SIGNIN_CALLBACK : "",
	FULLSCREEN : !1,
	PROGRESSBAR : null,
	PROGRESSBAR_WIDTH : 0,
	AUTHENTICATION : !1,
	USERNAME : "",
	PASSWORD : "",
	AUTHTOKEN : "",
	STARTINDEX : 1,
	ACTIVELIST : "",
	ACTIVELIST_URL : "",
	DONEFLAG : !1,
	ui : {
		loadingFunctions : function () {
			PHILIPS.PAGE_ID =
				document.getElementsByTagName("body")[0].id;
			PHILIPS.ui.setTextAreaMaxLength();
			var a = document.cookie.indexOf("session="),
			c,
			b,
			d;
			-1 != a && (c = -1 != document.cookie.indexOf(";", a) ? document.cookie.indexOf(";", a) : document.cookie.length, b = document.cookie.substring(a, c), c = b.indexOf("=") + 1, a = -1 != b.indexOf(";") ? b.indexOf(";") : b.length, c = b.substring(c, b.indexOf("|")), d = b.substring(b.indexOf("|") + 1, a), b = d.substring(0, d.indexOf("|")), a = d.substring(d.indexOf("|") + 1, a), PHILIPS.AUTHENTICATION = !0, PHILIPS.USERNAME = c, PHILIPS.PASSWORD =
					a, PHILIPS.AUTHTOKEN = b);
			-1 != document.cookie.indexOf("locale=") && (a = document.cookie.substring(document.cookie.indexOf("locale=") + 7, document.cookie.indexOf("||")), PHILIPS.LOCALE_CODE = a.substring(0, a.indexOf("|")), PHILIPS.LOCALE = a.substring(a.indexOf("|") + 1), $("locale").textContent = PHILIPS.LOCALE);
			switch (PHILIPS.PAGE_ID) {
			case "home":
				$("search_query").focus();
				(a = GetGETParameter("tag")) ? (a = a.replace(/%20/g, " "), $("search_query").value = a, $("searchOn").value = "on", PHILIPS.ui.searchYoutube()) : PHILIPS.ui.getFeeds();
				"" !== PHILIPS.USERNAME && (a = $("signin"), a.textContent = PHILIPS.ui.editStr(PHILIPS.USERNAME, 8), a.title = "userNavi");
				//if (parseInt(flag)) {
					PHILIPS.ui.openOverlayMessage();
				//}
				break;
			case "videoPage":
				$("btn_fullscreen").focus(),
				"" !== PHILIPS.USERNAME && ($("username").textContent = PHILIPS.ui.editStr(PHILIPS.USERNAME, 8)),
				PHILIPS.AUTHENTICATION || ($("share").id = "signin_share", $("add_favorite").id = "signin_add_favorite", $("playlistsAddTo").id = "signin_playlistsAddTo", $("flag").id = "signin_flag", $("commentary").id = "signin_commentary", $("rating").id = "signin_rating"),
				PHILIPS.ui.getVideoInfo(),
				PHILIPS.ui.getRelatedVideos(),
				$("btn_fullscreen").focus()
			}
		},
		handlePlayButtons : function (a) {
			if (a == VK_PLAY)
				PHILIPS.ui.playVideo();
			else if (a == VK_STOP)
				PHILIPS.ui.stopVideo(), PHILIPS.FULLSCREEN && PHILIPS.ui.toggleFullScreen();
			else if (a == VK_PAUSE)
				PHILIPS.ui.pauseVideo();
			else if ((a == VK_BACK || 8 == a) && PHILIPS.FULLSCREEN)
				event.preventDefault(), PHILIPS.ui.toggleFullScreen()
		},
		openOverlayMessage : function () {
			var b = document.getElementById("overlay"),
			d = document.getElementById("overlay_content"),
			m = document.getElementById("overlay_error"),
			e = document.getElementById("overlay_basic");
			PHILIPS.ui.disableWrapper();


			flag = false;
		},
		makeVideoInvisible : function () {
			if (null !== PHILIPS.VIDEO) {
				var a = PHILIPS.DATASTORAGE.video.media$group.media$thumbnail[3].url || null,
				c = $("video-thumb");
				c && c.parentNode.removeChild(c);
				null !== a && (a = document.createElement("a"), a.id = "video-thumb", a.href = "#", a.onkeydown = function () {
					return !1
				}, $("wrapper").insertBefore(a, PHILIPS.VIDEO_CONTAINER));
				PHILIPS.VIDEO_CONTAINER.className.match("visible") ? (PHILIPS.VIDEO_CONTAINER.className = PHILIPS.VIDEO_CONTAINER.className.replace("visible", "hidden"), $("video").className = $("video").className.replace("visible", "hidden")) : (PHILIPS.VIDEO_CONTAINER.className = "hidden", $("video").className = "hidden");
				PHILIPS.VIDEO_IS_PLAYING &&
				(PHILIPS.VIDEO_PAUSED_ON_DIALOG_OPEN = !0, PHILIPS.ui.pauseVideo())
			}
		},
		makeVideoVisible : function () {
			if (null !== PHILIPS.VIDEO) {
				var a = $("video-thumb");
				a && a.parentNode.removeChild(a);
				PHILIPS.VIDEO_CONTAINER.className.match("hidden") && (PHILIPS.VIDEO_CONTAINER.className = PHILIPS.VIDEO_CONTAINER.className.replace("hidden", "visible"), $("video").className = $("video").className.replace("hidden", "visible"));
				!PHILIPS.VIDEO_IS_PLAYING && PHILIPS.VIDEO_PAUSED_ON_DIALOG_OPEN && setTimeout(PHILIPS.ui.playVideo, 1)
			}
		},
		playVideo : function () {
			null !==
			PHILIPS.VIDEO && !PHILIPS.VIDEO_IS_PLAYING && (PHILIPS.VIDEO_IS_PLAYING = !0, PHILIPS.VIDEO_PAUSED_ON_DIALOG_OPEN ? PHILIPS.VIDEO_PAUSED_ON_DIALOG_OPEN = !1 : PHILIPS.ui.makeVideoVisible(), "undefined" != typeof PHILIPS.VIDEO.play && PHILIPS.VIDEO.play(1), PHILIPS.ui.startProgressBar(), PHILIPS.ui.togglePlayPauseButton(), PHILIPS.ui.updateElapsedTime(), PHILIPS.INTERVAL_ID_FOR_ELAPSED_TIME = setInterval(PHILIPS.ui.checkPlayState, 500))
		},
		pauseVideo : function () {
			null !== PHILIPS.VIDEO && PHILIPS.VIDEO_IS_PLAYING && ("undefined" != typeof PHILIPS.VIDEO.play &&
				PHILIPS.VIDEO.play(0), PHILIPS.ui.stopProgressBar(), PHILIPS.VIDEO_IS_PLAYING = !1, PHILIPS.ui.updateElapsedTime(), PHILIPS.ui.togglePlayPauseButton(), clearInterval(PHILIPS.INTERVAL_ID_FOR_ELAPSED_TIME))
		},
		stopVideo : function () {
			null !== PHILIPS.VIDEO && PHILIPS.VIDEO_IS_PLAYING && (PHILIPS.VIDEO_IS_PLAYING = !1, "undefined" != typeof PHILIPS.VIDEO.stop && PHILIPS.VIDEO.stop(), PHILIPS.ui.resetProgressBar(), PHILIPS.ui.updateElapsedTime(), PHILIPS.ui.togglePlayPauseButton(), clearInterval(PHILIPS.INTERVAL_ID_FOR_ELAPSED_TIME))
		},
		togglePlayPauseButton : function () {
			null !== PHILIPS.VIDEO && ($("play").style.backgroundPosition = PHILIPS.VIDEO_IS_PLAYING ? "-429px -50px" : "-393px -50px", $("btn_play").onkeydown = function (a) {
				a.keyCode == VK_ENTER && (PHILIPS.VIDEO_IS_PLAYING ? PHILIPS.ui.pauseVideo() : PHILIPS.ui.playVideo())
			})
		},
		getPlayState : function () {
			return "undefined" != typeof PHILIPS.VIDEO.playState ? PHILIPS.VIDEO.playState : null
		},
		checkPlayState : function () {
			PHILIPS.ui.updateElapsedTime();
			if ("undefined" != typeof PHILIPS.VIDEO.playState)
				switch (PHILIPS.VIDEO.playState) {
				case 5:
					PHILIPS.ui.stopVideo(),
					PHILIPS.AUTOPLAY ? PHILIPS.ui.autoPlay() : (PHILIPS.FULLSCREEN && PHILIPS.ui.toggleFullScreen(), PHILIPS.ui.showRepeatVideoDialog())
				}
		},
		updateElapsedTime : function () {
			"undefined" != typeof PHILIPS.VIDEO.stop && ($("elapsed").innerHTML = PHILIPS.ui.convertSecondsToMinutes(PHILIPS.VIDEO.playPosition / 1E3))
		},
		repeatVideo : function () {
			PHILIPS.ui.stopVideo();
			setTimeout(PHILIPS.ui.playVideo, 10)
		},
		showRepeatVideoDialog : function () {
			$("video") && (PHILIPS.ui.makeVideoInvisible(), $("video-thumb").insertBefore($E({
						tag : "span",
						attrs : {
							id : "repeat-video"
						}
					}),
					$("video-thumb").firstChild), PHILIPS.FULLSCREEN && ($("repeat-video").className = "repeat-video-fullscreen"), $("video-thumb").onkeydown = function () {
				$("repeat-video").parentNode.removeChild($("repeat-video"));
				PHILIPS.ui.makeVideoVisible();
				PHILIPS.ui.repeatVideo();
				return !1
			})
		},
		toggleAutoPlay : function () {
			PHILIPS.AUTOPLAY = !PHILIPS.AUTOPLAY;
			$("autoplay_status").innerHTML = PHILIPS.AUTOPLAY ? "Autoplay: On" : "Autoplay: Off";
			PHILIPS.VIDEO_IS_PLAYING || PHILIPS.ui.playVideo()
		},
		autoPlay : function () {
			if (PHILIPS.AUTOPLAY) {
				var a =
					PHILIPS.DATASTORAGE.relatedVideos.feed.entry;
				PHILIPS.AUTOPLAY_PLAYING_ITEM < a.length && (PHILIPS.AUTOPLAY_PLAYING_ITEM == a.length - 1 && (PHILIPS.ui.getRelatedVideos(a[a.length - 1]), a = PHILIPS.DATASTORAGE.relatedVideos.feed.entry, PHILIPS.AUTOPLAY_PLAYING_ITEM = 0), PHILIPS.ui.getVideoInfo(a[PHILIPS.AUTOPLAY_PLAYING_ITEM]), PHILIPS.AUTOPLAY_PLAYING_ITEM++)
			}
		},
		createProgressBar : function () {
			if (null === PHILIPS.PROGRESSBAR && "videoPage" == PHILIPS.PAGE_ID) {
				var a = document.createElement("div");
				a.id = "bar";
				a.innerHTML = '<div id="progressbar"></div>';
				$("player").parentNode.insertBefore(a, $("player").nextSibling);
				PHILIPS.PROGRESSBAR = $("progressbar")
			}
		},
		updateProgressBar : function () {
			null !== PHILIPS.PROGRESSBAR && (PHILIPS.PROGRESSBAR_WIDTH += 100 / PHILIPS.VIDEO_DURATION, PHILIPS.PROGRESSBAR.style.width = PHILIPS.PROGRESSBAR_WIDTH + "%", 100 <= PHILIPS.PROGRESSBAR_WIDTH && clearInterval(PHILIPS.PROGRESSBAR_UPDATE_INTERVAL))
		},
		stopProgressBar : function () {
			null !== PHILIPS.PROGRESSBAR && clearInterval(PHILIPS.PROGRESSBAR_UPDATE_INTERVAL)
		},
		startProgressBar : function () {
			null !==
			PHILIPS.PROGRESSBAR && (PHILIPS.PROGRESSBAR_UPDATE_INTERVAL = setInterval(PHILIPS.ui.updateProgressBar, 1E3))
		},
		resetProgressBar : function () {
			null !== PHILIPS.PROGRESSBAR && (clearInterval(PHILIPS.PROGRESSBAR_UPDATE_INTERVAL), PHILIPS.PROGRESSBAR_WIDTH = 0, PHILIPS.PROGRESSBAR.style.width = 0)
		},
		okCatcher : function (a, c) {
			if ("signin" == a.id && c == VK_LEFT)
				setTimeout(function () {
					$("tab_home").focus()
				}, 1);
			else if ("tab_home" == a.id && c == VK_RIGHT)
				setTimeout(function () {
					$("signin").focus()
				}, 1);
			else if (c == VK_ENTER) {
				var b;
				"tab_home" !=
				a.id && "signin" != a.id && ($("playlists") && $("subscriptions")) && ($("playlists").innerHTML = "Playlists", $("subscriptions").innerHTML = "Subscriptions");
				b = a.id;
				"star" == b.substring(0, 4) ? b = "star" : "share_user" == b.substring(0, 10) ? b = "share_user" : "flag" == b.substring(0, 4) && (b = "flag");
				switch (b) {
				case "search_query":
					"" !== a.value && PHILIPS.ui.searchYoutube();
					break;
				case "search_submit":
					"" !== $("search_query").value && PHILIPS.ui.searchYoutube();
					break;
				case "btn_play":
					PHILIPS.ui.playVideo();
					break;
				case "btn_stop":
					PHILIPS.ui.stopVideo();
					break;
				case "btn_replay":
					PHILIPS.ui.repeatVideo();
					break;
				case "autoplay":
					PHILIPS.ui.toggleAutoPlay();
					break;
				case "favorites":
					PHILIPS.ui.showLoading();
					PHILIPS.ACTIVELIST = "favorites";
					PHILIPS.ACTIVELIST_URL = "";
					PHILIPS.ui.request("/feeds/api/users/default/favorites?alt=json&start-index=1&max-results=15", "parse");
					break;
				case "my_videos":
					PHILIPS.ui.showLoading();
					PHILIPS.ACTIVELIST = "my_videos";
					PHILIPS.ACTIVELIST_URL = "";
					PHILIPS.ui.request("/feeds/api/users/default/uploads?alt=json&start-index=1&max-results=15",
						"parse");
					break;
				case "logout":
					PHILIPS.ui.logout();
					break;
				case "tab_home":
					"active" != a.className && (a.className = "active", $("signin").className = "", $("tab2_contents").style.display = "none", $("tab1_contents").style.display = "block");
					break;
				case "signin_btn":
					PHILIPS.ui.login(a, c);
					break;
				case "star":
					b = parseInt(a.id.substring(4), 10);
					PHILIPS.ui.addRating($("player").title, b);
					$("overlay_giveRating").style.display = "none";
					$("star0").className = "rating_star";
					$("star1").className = "rating_star";
					$("star2").className = "rating_star";
					$("star3").className = "rating_empty";
					$("star4").className = "rating_empty";
					$("rating_title").className = "Worth watching";
					$("overlay_error").textContent = "Thank you for rating this video";
					$("overlay_error").style.display = "block";
					break;
				case "comment_send":
					"" != $("comment_text").value ? ($("comment_preview_title").textContent = "Your comment is waiting for approval:", $("comment_preview").textContent = $("comment_text").value, $("comment_text").style.display = "none", $("comment_preview").style.display = "block", $("comment_preview_title").style.display =
							"block", $("comment_send").textContent = "Ok", $("comment_send").id = "comment_ok", $("comment_char_container").style.display = "none", $("comment_back").style.display = "block") : ($("comment_preview_title").textContent = "Error: Comment field is empty", $("comment_preview_title").style.display = "block", $("comment_text").focus(), setTimeout("$('comment_text').value = ''", 1));
					break;
				case "comment_back":
					$("comment_preview_title").style.display = "none";
					$("comment_preview").style.display = "none";
					$("comment_back").style.display =
						"none";
					$("comment_text").style.display = "block";
					$("comment_char_container").style.display = "block";
					$("comment_ok").textContent = "Send";
					$("comment_ok").id = "comment_send";
					break;
				case "comment_ok":
					PHILIPS.ui.addComment($("player").title, $("comment_preview").textContent);
					PHILIPS.ui.closeComments(a, c);
					break;
				case "share_user":
					$("shareTo_name").value = a.textContent;
					break;
				case "share_send":
					"" != $("shareTo_name").value ? (PHILIPS.ui.sendShareMessage($("shareTo_name").value, $("share_message").value, $("player").title),
						$("share_left").style.display = "none", $("share_right").style.display = "none", $("overlay_share").className = "small", $("share_info").style.display = "block", $("share_small_close").focus(), b = $("overlay_content"), b.style.marginTop = "-" + b.clientHeight / 2 + "px", b.style.marginLeft = "-" + b.clientWidth / 2 + "px") : ($("share_user_error").textContent = "Error: User field is empty", $("share_user_error").style.display = "block", $("shareTo_name").focus());
					break;
				case "flag":
					PHILIPS.ui.addFlag(a.textContent, $("player").title);
					PHILIPS.DONEFLAG =
						!0;
					$("flag_left").style.display = "none";
					$("flag_right").style.display = "none";
					$("overlay_flag").className = "small";
					$("flag_info").style.display = "block";
					b = $("overlay_content");
					b.style.marginTop = "-" + b.clientHeight / 2 + "px";
					b.style.marginLeft = "-" + b.clientWidth / 2 + "px";
					break;
				case "createPlaylist":
					b = $("newPlaylistName").value;
					var d = $("newPlaylistDescription").value;
					"" !== b && "" !== d ? ($("newPlaylistError").style.display = "none", $("newPlaylistError").textContent = "", $("createPlaylistLeft").style.display = "none", $("createPlaylistInfo").style.display =
							"block", $("playlistDone_close").focus(), PHILIPS.ui.createPlaylist("add", b, d)) : ($("newPlaylistError").textContent = "You did not give name or description to new playlist", $("newPlaylistError").style.display = "block");
					break;
				case "createSubscription":
					b = $("newSubscriptionName").value;
					"" !== b ? (PHILIPS.ui.addSubscription(b), PHILIPS.ui.closeOverlay(a, c)) : ($("overlay_error").textContent = "You did not enter new subscription", $("overlay_error").style.display = "block");
					break;
				case "comments_tab_read":
					$("comments").style.display =
						"block";
					$("comment_form").style.display = "none";
					break;
				case "comments_tab_post":
					$("comment_form").style.display = "block";
					$("comments").style.display = "none";
					PHILIPS.ui.setOverLayPosition($("overlay_content"));
					break;
				case "prev_comments":
					b = $("comments_startIndex").value;
					b = parseInt(b, 10) - 3;
					$("comments_startIndex").value = b;
					1 == b && ($("prev_comments").style.display = "none");
					b = "/feeds/api/videos/" + $("player").title + "/comments?alt=json&start-index=" + b + "&max-results=3";
					PHILIPS.ui.request(b, "parseComments");
					"none" !=
					$("prev_comments").style.display ? $("prev_comments").focus() : $("more_comments").focus();
					break;
				case "more_comments":
					b = $("comments_startIndex").value;
					b = parseInt(b, 10) + 3;
					$("comments_startIndex").value = b;
					1 < b && ($("prev_comments").style.display = "block");
					b = "/feeds/api/videos/" + $("player").title + "/comments?alt=json&start-index=" + b + "&max-results=3";
					PHILIPS.ui.request(b, "parseComments");
					$("more_comments").focus();
					break;
				case "btn_fullscreen":
					PHILIPS.ui.makeVideoInvisible(),
					b = $("overlay_content"),
					b.style.top =
						"0",
					b.style.left = "0",
					b.style.height = "720",
					b.style.width = "1280",
					b.style.borderColor = "#000000 #000000",
					$("overlay").style.visibility = "visible",
					setTimeout(function () {
						$("overlay").style.visibility = "hidden";
						PHILIPS.ui.makeVideoVisible();
						PHILIPS.ui.toggleFullScreen()
					}, 1)
				}
			}
		},
		loadOverlayFunctions : function (a, c) {
			if ("signin" == a.id && c == VK_LEFT)
				setTimeout(function () {
					$("tab_home").focus()
				}, 1);
			else if (c == VK_ENTER) {
				var b = [],
				d = a.id;
				"signin_" == d.substring(0, 7) && (PHILIPS.SIGNIN_CALLBACK = d.substring(7), d = "signin");
				switch (d) {
				case "feed":
					b =
						[["top_rated", "Top rated"], ["top_favorites", "Top favorites"], ["most_viewed", "Most viewed"], ["most_popular", "Most popular"], ["most_recent", "Most recent"], ["most_discussed", "Most discussed"], ["most_linked", "Most linked"], ["most_responded", "Most responded"], ["recently_featured", "Recently featured"]];
					PHILIPS.ui.openOverlay(d, b);
					$("overlay_close").focus();
					break;
				case "time":
					b = [["today", "Today"], ["this_week", "This week"], ["this_month", "This month"], ["all_time", "All time"]];
					PHILIPS.ui.openOverlay(d, b);
					$("overlay_close").focus();
					break;
				case "category":
					b = [["All", "All categories"], ["Autos", "Autos &amp; Vehicles"], ["Comedy", "Comedy"], ["Education", "Education"], ["Entertainment", "Entertainment"], ["Film", "Film &amp; Animation"], ["Howto", "Howto &amp; Style"], ["Music", "Music"], ["News", "News &amp; Politics"], ["Nonprofit", "Nonprofits &amp; Activism"], ["People", "People &amp; Blogs"], ["Animals", "Pets &amp; Animals"], ["Tech", "Science &amp; Technology"], ["Sports", "Sports"], ["Travel", "Travel &amp; Events"]];
					PHILIPS.ui.openOverlay(d, b);
					$("overlay_close").focus();
					break;
				case "orderby":
					b = [["relevance", "Relevance"], ["published", "Date added"], ["viewCount", "View count"], ["rating", "Rating"]];
					PHILIPS.ui.openOverlay(d, b);
					$("overlay_close").focus();
					break;
				case "signin":
					if (PHILIPS.AUTHENTICATION)
						$("signin").className = "active", $("tab_home").className = "", $("tab1_contents").style.display = "none", $("tab2_contents").style.display = "block";
					else if (-1 == document.cookie.indexOf("login"))
						PHILIPS.ui.disableWrapper(), PHILIPS.ui.openSigninOverlay(a, c);
					else {
						var e = PHILIPS.ui.setCookieArray(),
						f = [],
						j,
						h,
						g;
						for (g = PHILIPS.USER_LIST_LENGTH = 0; g < e.length; g++)
							 - 1 != e[g].indexOf("login") && (f.push(e[g]), PHILIPS.USER_LIST_LENGTH++);
						for (g = 0; g < PHILIPS.USER_LIST_LENGTH; g++)
							e = f[g].length, "=" == f[g].charAt(e - 1) && (h = f[g].indexOf("="), j = f[g].substring(6, h), h = f[g].substring(h + 1)), b.push([h, j]);
						b.push(["", "Add new user"]);
						PHILIPS.ui.openOverlay(d, b)
					}
					break;
				case "playlists":
					PHILIPS.ui.request("/feeds/api/users/default/playlists?alt=json", "playlists");
					break;
				case "share":
					PHILIPS.ui.openShareVideo(a, c);
					break;
				case "playlistsAddTo":
					PHILIPS.ui.request("/feeds/api/users/default/playlists?alt=json",
						"playlistsAddTo");
					break;
				case "subscriptions":
					b = PHILIPS.ui.request("/feeds/api/users/default/subscriptions?alt=json", "subscriptions");
					break;
				case "add_favorite":
					PHILIPS.ui.openOverlay(d, "");
					break;
				case "flag":
					PHILIPS.DONEFLAG ? PHILIPS.ui.openOverlay(d, "") : PHILIPS.ui.openFlagVideo(a, c);
					break;
				case "commentary":
					PHILIPS.ui.showComments(a, c);
					break;
				case "rating":
					$("overlay_giveRating").style.display = "block";
					PHILIPS.ui.openOverlay(d, "");
					$("star2")();
					break;
				case "contacts":
					PHILIPS.ui.request("/feeds/api/users/default/contacts?alt=json",
						"contacts");
					break;
				case "locale":
					b = [["", "Worldwide (All)"], ["AU", "Australia"], ["BR", "Brazil"], ["CA", "Canada"], ["FR", "France"], ["DE", "Germany"], ["HK", "Hong Kong"], ["IN", "India"], ["IE", "Ireland"], ["IT", "Italy"], ["JP", "Japan"], ["MX", "Mexico"], ["NL", "Netherlands"], ["NZ", "New Zealand"], ["PL", "Poland"], ["RU", "Russia"], ["KR", "South Korea"], ["ES", "Spain"], ["TW", "Taiwan"], ["GB", "United Kingdom"]];
					PHILIPS.ui.openOverlay(d, b);
					$("overlay_close").focus();
					break;
				case "terms_of_use":
					PHILIPS.ui.openTermsOfUse(a, c)
				}
			}
		},
		setOverLayPosition : function (a) {
			a.style.marginTop = "-" + a.clientHeight / 2 + "px";
			a.style.marginLeft = "-" + a.clientWidth / 2 + "px"
		},
		openOverlay : function (a, c) {
			var b = $("overlay"),
			d = $("overlay_content"),
			e = $("overlay_basic"),
			f = $("overlay_title"),
			j = $("overlay_links"),
			h = $("overlay_error"),
			g,
			k,
			l;
			PHILIPS.ui.makeVideoInvisible();
			e.className = "signin" == a ? "small userList" : "category" == a || "locale" == a ? "double" : "small";
			f.textContent = "Select " + a;
			j.style.display = "block";
			j.title = a;
			PHILIPS.ui.disableWrapper();
			for (j = 0; j < c.length; j++)
				k =
					c[j], g = k[0], l = k[1], k = $("link" + j), "new_playlist" == g ? k.setAttribute("onkeydown", "PHILIPS.ui.newPlaylist(this, event.keyCode);") : "new_subscription" == g ? k.setAttribute("onkeydown", "PHILIPS.ui.newSubscription(this, event.keyCode);") : k.setAttribute("onkeydown", "PHILIPS.ui.closeOverlay(this, event.keyCode);"), k.setAttribute("onfocus", ""), k.setAttribute("title", g), k.innerHTML = PHILIPS.ui.editStr(l, 30), g = $("linkC" + j), g.setAttribute("class", ""), "signin" == a && (k.setAttribute("class", "saved_user"), k.setAttribute("onkeydown",
						"PHILIPS.ui.openSigninOverlay(this, event.keyCode);"), g = document.createElement("span"), g.setAttribute("class", "linkImg"), k.appendChild(g));
			"add_favorite" == a && (PHILIPS.ui.addFavorite($("player").title), f.textContent = "Favorite added", h.textContent = "You have added this video to your favorites", h.style.display = "block");
			"flag" == a && (f.textContent = "Flagging not available ", h.textContent = "You have already flagged this video", h.style.display = "block");
			"rating" == a && (f.textContent = "Add rating", setTimeout(function () {
					$("rate_close").focus()
				},
					10));
			"no_videos" == a && ($("home") ? (f.textContent = "No results", h.textContent = "You don't have any videos in this feature") : $("videoPage") && (f.textContent = "Video is unavailable", h.textContent = "This video is not available in Youtube", $("overlay_close").setAttribute("href", "index.php")), h.style.display = "block");
			"playlistsAddTo" == a && (f.textContent = "Select playlist", h.textContent = "");
			"locale" == a && (f.textContent = "Select Your Country-Content Preference");
			e.style.display = "block";
			b.style.display = "block";
			PHILIPS.ui.setOverLayPosition(d);
			b.style.visibility = "visible"
		},
		closeOverlay : function (a, c) {
			if (c == VK_ENTER) {
				var b = $("overlay_links").title,
				d = $("overlay_links"),
				e = $("overlay_title"),
				f = $("overlay_content"),
				j = $("overlay_error");
				$("overlay_close");
				if ("overlay_close" != a.id) {
					"tab_home" != a.id && "signin" != a.id && ($("playlists") && $("subscriptions")) && ($("playlists").innerHTML = "Playlists", $("subscriptions").innerHTML = "Subscriptions");
					var h = a.title,
					g = a.textContent;
					$("startIndex").value = "1";
					if ($("home"))
						if ("playlists" == b || "subscriptions" == b)
							"" !==
							$("newSubscriptionName").value && (h = "/feeds/api/videos?vq=" + escape($("newSubscriptionName").value) + "&start-index=1&max-results=15&alt=json", PHILIPS.ui.request(h, "parse")), "subscriptions" == b ? PHILIPS.ACTIVELIST = "subscription" : "playlists" == b && (PHILIPS.ACTIVELIST = "playlist"), a.title = a.title.replace(/ /g, "+"), PHILIPS.ACTIVELIST_URL = a.title, $("search_query").value = "", PHILIPS.ui.startRequest(a.title, "parse"), null !== $(b) && ("createSubscription" == a.id ? $(b).innerHTML = $(b).textContent + ": " + $("newSubscriptionName").value.substr($("newSubscriptionName").value,
										6) + " (<span id='pl_length'></span>)" : $(b).innerHTML = $(b).textContent + ": " + a.textContent.substr(a.textContent.indexOf(":") + 1, 6) + " (<span id='pl_length'></span>)");
						else {
							switch (b) {
							case "locale":
								PHILIPS.LOCALE = g;
								PHILIPS.LOCALE_CODE = h;
								PHILIPS.ui.cookieHandler("locale", h + "|" + g + "||", "");
								$("locale").textContent = g;
								break;
							case "feed":
								$("currentFeed").value = h;
								$("currentFeed").alt = g;
								if ("most_recent" == h || "recently_featured" == h)
									$("timeFilter").value = "all_time", $("timeFilter").alt = "All time";
								break;
							case "time":
								$("timeFilter").value =
									h;
								$("timeFilter").alt = g;
								if ("most_recent" == $("currentFeed").value || "recently_featured" == $("currentFeed").value)
									$("currentFeed").value = "most_viewed", $("currentFeed").alt = "Most viewed";
								break;
							case "category":
								$("currentCategory").value = h;
								$("currentCategory").alt = g;
								"today" != $("timeFilter").value && ($("timeFilter").value = "today", $("timeFilter").alt = "Today");
								break;
							case "orderby":
								$("orderByFilter").value = h,
								$("orderByFilter").alt = g
							}
							"" !== $("search_query").value ? PHILIPS.ui.searchYoutube() : PHILIPS.ui.getFeeds()
						}
					else
						$("videoPage") &&
						("playlistsAddTo" == b && ("none" !== $("overlay_newPlaylist").style.display && 0 !== $("overlay_newPlaylist").style.display.length && ($("overlay_newPlaylist").style.display = "none", $("overlay").style.display = "none"), PHILIPS.ui.addVideoToPlaylist(PHILIPS.VIDEO_CONTAINER.title, a.title), d.style.display = "none", e.textContent = "The video has been added.", j.textContent = "The video has been added to your playlist.", j.style.display = "block"), "locale" == b && (PHILIPS.LOCALE = g, PHILIPS.LOCALE_CODE = h, PHILIPS.ui.cookieHandler("locale",
									h + "|" + g + "||", ""), $("locale").textContent = g))
				}
				PHILIPS.ui.activateWrapper();
				$("overlay").style.visibility = "hidden";
				"playlistsAddTo" == b && (j.style.display = "none", j.textContent = "", e.textContent = "", d.style.display = "block");
				"rating" == b && ($("overlay_giveRating").style.display = "none");
				"addToPlaylist" == b && ($("overlay_newPlaylist").style.display = "none", d.style.display = "block");
				"subscriptions" == b && ($("overlay_newSubscription").style.display = "none", $("newSubscriptionName").value = "");
				for (h = 0; 20 > h; h++)
					g = $("link" +
							h), g.setAttribute("onkeydown", ""), g.setAttribute("title", ""), g.innerHTML = "", g = $("linkC" + h), g.setAttribute("class", "linkOff");
				f.style.marginTop = "";
				f.style.marginLeft = "";
				e.textContent = "";
				d.title = "";
				j.style.display = "none";
				j.textContent = "";
				$("overlay_basic").style.display = "none";
				$("overlay").style.display = "none";
				"no_videos" == b && PHILIPS.ui.getFeeds();
				null !== $(b) && setTimeout(function () {
					$(b).focus()
				}, 1);
				PHILIPS.ui.makeVideoVisible()
			}
		},
		openSigninOverlay : function (a, c) {
			if (c == VK_ENTER) {
				PHILIPS.ui.makeVideoInvisible();
				var b = a.title,
				d = a.textContent,
				e = a.id;
				$("save_username").checked = !1;
				$("save_password").checked = !1;
				"signin" == e.substring(0, 6) && (e = "signin");
				if ("signin" == e || "Add new user" == d)
					d = b = "";
				"signin" != e && (e = $("overlay_links"), $("overlay_title").textContent = "", e.title = "", e.style.display = "none", $("overlay_basic").className = "small", $("overlay_basic").style.display = "none");
				var e = $("overlay"),
				f = $("overlay_content");
				$("overlay_signin").style.display = "block";
				e.style.display = "block";
				$("login_form").style.display = "block";
				f.style.marginTop = "-" + f.clientHeight / 2 + "px";
				f.style.marginLeft = "-" + f.clientWidth / 2 + "px";
				"" !== d && ($("login_name").value = d, $("save_username").checked = !0, "" !== b && ($("login_pwd").value = Base64.decode(b), $("save_password").checked = !0));
				e.style.visibility = "visible";
				$("login_name").focus()
			}
		},
		closeSigninOverlay : function (a, c) {
			if (c == VK_ENTER) {
				var b,
				d;
				if ("" === PHILIPS.SIGNIN_CALLBACK || "signin_close" == a.id) {
					PHILIPS.ui.makeVideoVisible();
					PHILIPS.ui.activateWrapper();
					$("overlay").style.visibility = "hidden";
					$("overlay_content").style.marginTop =
						"";
					$("overlay_content").style.marginLeft = "";
					$("login_name").value = "";
					$("login_pwd").value = "";
					$("loginError").style.display = "none";
					$("loginError").textContent = "";
					for (d = 0; 15 > d; d++)
						b = $("link" + d), b.setAttribute("onkeydown", ""), b.setAttribute("title", ""), b.innerHTML = "", b = $("linkC" + d), b.setAttribute("class", "linkOff");
					$("overlay_signin").style.display = "none";
					$("overlay").style.display = "none";
					$("home") ? $("signin").focus() : $("player").focus()
				} else {
					$("overlay_signin").style.display = "none";
					$("overlay_links").style.display =
						"none";
					for (d = 0; 15 > d; d++)
						b = $("link" + d), b.setAttribute("onkeydown", ""), b.setAttribute("title", ""), b.innerHTML = "", b = $("linkC" + d), b.setAttribute("class", "linkOff");
					$("signin_share").id = "share";
					$("signin_add_favorite").id = "add_favorite";
					$("signin_playlistsAddTo").id = "playlistsAddTo";
					$("signin_flag").id = "flag";
					$("signin_commentary").id = "commentary";
					$("signin_rating").id = "rating";
					PHILIPS.ui.loadOverlayFunctions($(PHILIPS.SIGNIN_CALLBACK), 13)
				}
			}
		},
		cookieHandler : function (a, c, b) {
			if (-1 == (document.cookie != document.cookie ?
					document.cookie.indexOf(a) : -1))
				document.cookie = a + "=" + c + ";expires=" + b
		},
		setCookieArray : function () {
			for (var a = [], c = document.cookie.length, b = 0, d = 0; -1 != document.cookie.indexOf(";", b); )
				d = document.cookie.indexOf(";", b), a.push(document.cookie.substring(b, d)), b = d + 2;
			a.push(document.cookie.substring(b, c));
			return a
		},
		login : function () {
			var a = $("login_form"),
			c = $("login_load"),
			b = $("loginError"),
			d = $("login_name").value,
			e = $("login_pwd").value,
			d = "login.php?username=" + d + "&pwd=" + e,
			f = getHTTPObject();
			f && (a.style.display =
					"none", c.style.display = "block", f.onreadystatechange = function () {
				if (4 == f.readyState && (200 == f.status || 304 == f.status)) {
					var d = f.responseText;
					if (-1 != d.indexOf("Error=BadAuthentication"))
						c.style.display = "none", a.style.display = "block", b.innerHTML = "Username and/or password not found.", b.style.display = "block";
					else if (-1 != d.indexOf("Error=Unknown"))
						c.style.display = "none", a.style.display = "block", b.innerHTML = "Unknown error with Youtube login. Please try again later.", b.style.display = "block";
					else if (-1 != d.indexOf("Error=NotVerified"))
						c.style.display =
							"none", a.style.display = "block", b.innerHTML = "Your account is not verified. Please check your email.", b.style.display = "block";
					else {
						var h = d.substring(d.indexOf("Auth") + 5, d.indexOf("YouTubeUser") - 1),
						d = d.substring(d.indexOf("YouTubeUser") + 12, d.length - 1);
						PHILIPS.AUTHENTICATION = !0;
						PHILIPS.USERNAME = d;
						PHILIPS.PASSWORD = e;
						PHILIPS.AUTHTOKEN = h;
						var g;
						$("home") ? (g = $("signin"), g.innerHTML = d.substring(0, 10), g.title = "userNavi", g.className = "active", $("tab_home").className = "") : ($("username").innerHTML = d, $("user-controls-signin").style.display =
								"none", $("user-controls-features").style.display = "block");
						PHILIPS.ui.cookieHandler("session", d + "|" + h + "|" + e, "");
						d = "login_" + d;
						!0 === $("save_username").checked ? !0 === $("save_password").checked ? (e = Base64.encode(e), PHILIPS.ui.cookieHandler(d, e, "Saturday, 01-Aug-2020 01:00:00 GMT")) : PHILIPS.ui.cookieHandler(d, "", "Saturday, 01-Aug-2020 01:00:00 GMT") : -1 != document.cookie.indexOf("login_" + d) && PHILIPS.ui.cookieHandler(d, "", "Thu, 01-Jan-1970 00:00:01 GMT");
						$("home") && ($("tab1_contents").style.display = "none", $("tab2_contents").style.display =
								"block", g.focus());
						c.style.display = "none";
						PHILIPS.ui.closeSigninOverlay($("signin_btn"), 13)
					}
				}
			}, f.open("GET", d, !0), f.send(null))
		},
		logout : function () {
			PHILIPS.ui.cookieHandler("session", "", "Thu, 01-Jan-1970 00:00:01 GMT");
			PHILIPS.AUTHENTICATION = !1;
			PHILIPS.USERNAME = "";
			PHILIPS.AUTHTOKEN = "";
			$("signin").textContent = "Sign in";
			$("signin").setAttribute("onfocus", "");
			$("signin").setAttribute("title", "signin");
			$("tab2_contents").style.display = "none";
			$("tab1_contents").style.display = "block";
			PHILIPS.ui.getFeeds()
		},
		paginateOverLayContent : function (a, c, b) {
			function d(a) {
				a.style.display = "block"
			}
			function e(a) {
				a.style.display = "none"
			}
			function f() {
				0 === h ? e($("prev_page")) : d($("prev_page"));
				h === g - 1 ? (e($("next_page")), c.focus()) : (d($("next_page")), $("next_page").focus())
			}
			function j(a) {
				e(k[h]);
				h += a;
				d(k[h]);
				f();
				PHILIPS.ui.setOverLayPosition($("overlay_content"))
			}
			var h = b || 0,
			g = 0,
			k = [],
			a = a.getElementsByTagName("div") || null,
			l;
			if (null !== a) {
				for (l = 0; l < a.length; l++)
					a[l].className.match("page") && (g += 1, k.push(a[l]), e(a[l]));
				0 !== g &&
				(b > g && (h = 0), d(k[h]), 0 < g && (b = document.createElement("div"), b.id = "overlay_pagination_links", b.innerHTML = '<a href="#" id="prev_page" class="overlay_pagination_link">Prev</a><a href="#" class="overlay_pagination_link" id="next_page">Next</a>', c.parentNode.insertBefore(b, c), f(), $("prev_page").onkeydown = function (a) {
						a.keyCode === VK_ENTER && j(-1)
					}, $("next_page").onkeydown = function (a) {
						a.keyCode === VK_ENTER && j(1);
						a.keyCode === VK_UP && $("prev_page").focus()
					}))
			}
		},
		addFavorite : function (a) {
			var a = "addFavorites.php?username=" +
				PHILIPS.USERNAME + "&pwd=" + PHILIPS.PASSWORD + "&videoID=" + a,
			c = getHTTPObject();
			c && (c.open("GET", a, !0), c.send(null))
		},
		addRating : function (a, c) {
			var b = "addRating.php?username=" + PHILIPS.USERNAME + "&pwd=" + PHILIPS.PASSWORD + "&videoID=" + a + "&rating=" + c,
			d = getHTTPObject();
			d && (d.open("GET", b, !0), d.send(null))
		},
		addComment : function (a, c) {
			var b = "addComment.php?username=" + PHILIPS.USERNAME + "&pwd=" + PHILIPS.PASSWORD + "&videoID=" + a + "&comment=" + Base64.encode(c),
			d = getHTTPObject();
			d && (d.open("GET", b, !0), d.send(null))
		},
		addVideoToPlaylist : function (a,
			c) {
			var b = "addVideoToPlaylist.php?username=" + PHILIPS.USERNAME + "&pwd=" + PHILIPS.PASSWORD + "&videoID=" + a + "&playlistURL=" + Base64.encode(c),
			d = getHTTPObject();
			d && (d.open("GET", b, !0), d.send(null))
		},
		sendShareMessage : function (a, c, b) {
			a = "sendShareMessage.php?username=" + PHILIPS.USERNAME + "&pwd=" + PHILIPS.PASSWORD + "&userTo=" + a + "&message=" + c + "&videoID=" + b;
			if (c = getHTTPObject())
				c.open("GET", a, !0), c.send(null)
		},
		addFlag : function (a, c) {
			var b = "addFlag.php?username=" + PHILIPS.USERNAME + "&pwd=" + PHILIPS.PASSWORD + "&videoID=" + c +
				"&message=" + a,
			d = getHTTPObject();
			d && (d.open("GET", b, !0), d.send(null))
		},
		showComments : function (a, c) {
			if (c == VK_ENTER) {
				PHILIPS.ui.makeVideoInvisible();
				var b = $("overlay"),
				d = $("overlay_content"),
				e = $("overlay_comments");
				PHILIPS.ui.disableWrapper();
				e.style.display = "block";
				b.style.display = "block";
				PHILIPS.ui.setOverLayPosition(d);
				PHILIPS.ui.request("/feeds/api/videos/" + PHILIPS.VIDEO_CONTAINER.title + "/comments?alt=json&start-index=1&max-results=3", "parseComments");
				$("comments_startIndex").value = 1;
				$("overlay").style.visibility =
					"visible";
				$("comments_tab_read").focus()
			}
		},
		parseComments : function (a) {
			var c = $("comments"),
			b;
			c.style.display = "none";
			c.style.visibility = "hidden";
			if ("undefined" != typeof a.feed.entry)
				for (b = 0; 3 > b; b++)
					$("comment" + b + "_title").textContent = "undefined" != typeof a.feed.entry[b] ? a.feed.entry[b].author[0].name.$t : "", $("comment" + b + "_body").textContent = "undefined" != typeof a.feed.entry[b] ? a.feed.entry[b].media$group.media$description.$t : "";
			c.style.display = "block";
			PHILIPS.ui.setOverLayPosition($("overlay_content"));
			c.style.visibility = "visible"
		},
		closeComments : function (a, c) {
			if (c == VK_ENTER) {
				var b = $("overlay"),
				d = $("overlay_content"),
				e = $("overlay_comments");
				PHILIPS.ui.activateWrapper();
				b.style.visibility = "hidden";
				e.style.display = "";
				b.style.display = "";
				d.style.marginTop = "";
				d.style.marginLeft = "";
				$("comment_form").style.display = "";
				$("comment_preview_title").style.display = "";
				$("comment_preview").style.display = "";
				$("comment_preview").textContent = "";
				$("comment_back").style.display = "";
				$("comment_text").style.display =
					"block";
				$("comment_text").value = "";
				$("comment_char_container").style.display = "block";
				$("comment_chars").textContent = "500";
				$("comment_ok") && ($("comment_ok").textContent = "Send", $("comment_ok").id = "comment_send");
				for (b = 0; 3 > b; b++)
					$("comment" + b + "_title").textContent = "", $("comment" + b + "_body").textContent = "";
				PHILIPS.ui.makeVideoVisible();
				setTimeout(function () {
					$("commentary").focus()
				}, 1)
			}
		},
		openShareVideo : function (a, c) {
			if (c == VK_ENTER) {
				PHILIPS.ui.makeVideoInvisible();
				var b = $("overlay"),
				d = $("overlay_content"),
				e = $("overlay_share");
				PHILIPS.ui.disableWrapper();
				PHILIPS.ui.request("/feeds/api/users/default/contacts?alt=json", "contacts");
				e.style.display = "block";
				b.style.display = "block";
				d.style.marginTop = "-" + d.clientHeight / 2 + "px";
				d.style.marginLeft = "-" + d.clientWidth / 2 + "px";
				b.style.visibility = "visible";
				$("shareTo_name").focus()
			}
		},
		closeShareVideo : function (a, c) {
			if (c == VK_ENTER) {
				var b = $("overlay"),
				d = $("overlay_content"),
				e = $("overlay_share");
				PHILIPS.ui.activateWrapper();
				b.style.visibility = "hidden";
				e.style.display = "none";
				b.style.display = "none";
				d.style.marginTop = "";
				d.style.marginLeft = "";
				e.className = "large";
				$("share_left").style.display = "block";
				$("share_right").style.display = "block";
				$("share_info").style.display = "none";
				$("shareTo_name").value = "";
				$("share_message").value = "";
				$("share_user_error").textContent = "";
				$("share_char_container").style.display = "block";
				for ($("share_chars").textContent = "500"; $("share_user_links").hasChildNodes(); )
					$("share_user_links").removeChild($("share_user_links").lastChild);
				PHILIPS.ui.makeVideoVisible();
				setTimeout(function () {
					$("share").focus()
				}, 1)
			}
		},
		openFlagVideo : function (a, c) {
			if (c == VK_ENTER) {
				PHILIPS.ui.makeVideoInvisible();
				var b = $("overlay"),
				d = $("overlay_content"),
				e = $("overlay_flag");
				PHILIPS.ui.disableWrapper();
				e.style.display = "block";
				b.style.display = "block";
				d.style.marginTop = "-" + d.clientHeight / 2 + "px";
				d.style.marginLeft = "-" + d.clientWidth / 2 + "px";
				b.style.visibility = "visible";
				$("flag0").focus()
			}
		},
		closeFlagVideo : function (a, c) {
			if (c == VK_ENTER) {
				var b = $("overlay"),
				d = $("overlay_content"),
				e = $("overlay_flag");
				PHILIPS.ui.activateWrapper();
				b.style.visibility = "hidden";
				e.style.display = "none";
				b.style.display = "none";
				d.style.marginTop = "";
				d.style.marginLeft = "";
				e.className = "large";
				$("flag_left").style.display = "block";
				$("flag_right").style.display = "block";
				$("flag_info").style.display = "none";
				PHILIPS.ui.makeVideoVisible();
				setTimeout(function () {
					$("flag").focus()
				}, 1)
			}
		},
		openTermsOfUse : function (a, c) {
			if (c == VK_ENTER) {
				var b = $("overlay"),
				d = $("overlay_content"),
				e = $("overlay_terms_of_use");
				PHILIPS.ui.disableWrapper();
				e.style.display =
					"block";
				b.style.display = "block";
				PHILIPS.ui.setOverLayPosition(d);
				b.style.visibility = "visible";
				$("terms_of_use_close").focus();
				PHILIPS.ui.paginateOverLayContent(e, $("terms_of_use_close"))
			}
		},
		closeTermsOfUse : function (a, c) {
			if (c == VK_ENTER) {
				var b = $("overlay");
				$("overlay_content");
				var d = $("overlay_terms_of_use"),
				e = $("overlay_pagination_links");
				PHILIPS.ui.activateWrapper();
				e && e.parentNode.removeChild(e);
				d.style.display = "none";
				b.style.display = "none";
				b.style.visibility = "hidden";
				setTimeout(function () {
					$("terms_of_use").focus()
				},
					1)
			}
		},
		newPlaylist : function (a, c) {
			var b = $("overlay_content");
			if (c == VK_ENTER) {
				$("overlay_links").style.display = "none";
				$("overlay_basic").style.display = "none";
				for (i = 0; 20 > i; i++)
					$("linkC" + i).className = "linkOff";
				$("overlay_newPlaylist").style.display = "block";
				$("createPlaylistLeft").style.display = "block";
				$("createPlaylistInfo").style.display = "none";
				b.style.marginTop = "-" + b.clientHeight / 2 + "px";
				b.style.marginLeft = "-" + b.clientWidth / 2 + "px";
				$("newPlaylistName").focus()
			}
		},
		closeNewPlaylist : function (a, c) {
			if (c == VK_ENTER) {
				var b =
					$("overlay"),
				d = $("overlay_content"),
				e = $("overlay_newPlaylist");
				PHILIPS.ui.activateWrapper();
				e.style.display = "none";
				b.style.display = "none";
				d.style.marginTop = "";
				d.style.marginLeft = "";
				e.className = "large";
				$("createPlaylistLeft").style.display = "block";
				$("createPlaylistInfo").style.display = "none";
				$("newPlaylistName").value = "";
				$("newPlaylistDescription").value = "";
				PHILIPS.ui.makeVideoVisible();
				setTimeout(function () {
					$("playlistsAddTo").focus()
				}, 1)
			}
		},
		newSubscription : function (a, c) {
			c == VK_ENTER && ($("overlay_error").textContent =
					"", $("overlay_error").style.display = "none", $("overlay_title").textContent = "Type word which you wish to subscribe to", $("overlay_links").style.display = "none", $("overlay_newSubscription").style.display = "block", $("newSubscriptionName").focus())
		},
		createPlaylist : function (a, c, b) {
			var c = "createPlaylist.php?username=" + PHILIPS.USERNAME + "&pwd=" + PHILIPS.PASSWORD + "&playlistName=" + c + "&playlistDesc=" + b + "&callback=" + a,
			d = getHTTPObject();
			d && (d.onreadystatechange = function () {
				4 == d.readyState && (200 == d.status || 304 == d.status) &&
				"add" == a && PHILIPS.ui.request("/feeds/api/users/default/playlists?alt=json", "addToNewPlaylist")
			}, d.open("GET", c, !0), d.send(null))
		},
		addVideoToNewPlaylist : function (a) {
			var c,
			b = $("createPlaylist"),
			d;
			for (d = 0; d < a.feed.entry.length; d++)
				a.feed.entry[d].title.$t == $("newPlaylistName").value && (c = a.feed.entry[d].gd$feedLink[0].href, c = c.substring(24) + "&alt=json");
			PHILIPS.ui.addVideoToPlaylist($("player").title, c);
			PHILIPS.ui.closeNewPlaylist(b, 13)
		},
		addSubscription : function (a) {
			var a = "addSubscription.php?username=" +
				PHILIPS.USERNAME + "&pwd=" + PHILIPS.PASSWORD + "&subscriptionName=" + a,
			c = getHTTPObject();
			c && (c.open("GET", a, !0), c.send(null))
		},
		changeRating : function (a) {
			switch (a.id) {
			case "star0":
				$("star0").className = "rating_star";
				$("star1").className = "rating_empty";
				$("star2").className = "rating_empty";
				$("star3").className = "rating_empty";
				$("star4").className = "rating_empty";
				$("rating_title").textContent = "Poor";
				break;
			case "star1":
				$("star0").className = "rating_star";
				$("star1").className = "rating_star";
				$("star2").className = "rating_empty";
				$("star3").className = "rating_empty";
				$("star4").className = "rating_empty";
				$("rating_title").textContent = "Nothing special";
				break;
			case "star2":
				$("star0").className = "rating_star";
				$("star1").className = "rating_star";
				$("star2").className = "rating_star";
				$("star3").className = "rating_empty";
				$("star4").className = "rating_empty";
				$("rating_title").textContent = "Worth watching";
				break;
			case "star3":
				$("star0").className = "rating_star";
				$("star1").className = "rating_star";
				$("star2").className = "rating_star";
				$("star3").className =
					"rating_star";
				$("star4").className = "rating_empty";
				$("rating_title").textContent = "Pretty cool";
				break;
			case "star4":
				$("star0").className = "rating_star",
				$("star1").className = "rating_star",
				$("star2").className = "rating_star",
				$("star3").className = "rating_star",
				$("star4").className = "rating_star",
				$("rating_title").textContent = "Awesome!"
			}
		},
		createLinkArray : function (a, c) {
			var b = [],
			d,
			e,
			f;
			if ("contacts" != c) {
				if (0 < a.feed.openSearch$totalResults.$t) {
					e = "subscriptions" == c && 10 < a.feed.openSearch$totalResults.$t ? 10 : a.feed.entry.length;
					for (f = 0; f < e; f++)
						if (d = a.feed.entry[f].gd$feedLink[0].href, a.feed.entry[f].yt$queryString && "undefined" !== a.feed.entry[f].yt$queryString) {
							var j = a.feed.entry[f].yt$queryString.$t || "";
							b.push([d.substring(24, d.indexOf("?")) + "?vq=" + j + "&start-index=1&max-results=15&alt=json", a.feed.entry[f].title.$t])
						} else
							b.push([d.substring(24, d.indexOf("?")) + "?start-index=1&max-results=15&alt=json", a.feed.entry[f].title.$t])
				} else
					$("overlay_error").textContent = "You don't have any " + c + " in your account", $("overlay_error").style.display =
						"block";
				"playlistsAddTo" == c ? b.push(["new_playlist", "Add new playlist"]) : "subscriptions" == c && b.push(["new_subscription", "Add new subscription"]);
				"addToNewPlaylist" != c && PHILIPS.ui.openOverlay(c, b)
			} else {
				if (0 < a.feed.openSearch$totalResults.$t)
					for (f = 0; f < a.feed.entry.length; f++)
						e = a.feed.entry[f].title.$t, d = "http://192.168.1.184/feeds/api/users/" + e + "?alt=json", b.push([d, e]);
				else
					$("overlay_error").textContent = "There are no " + c + " in user " + PHILIPS.USERNAME + "'s account", $("overlay_error").style.display =
						"block";
				PHILIPS.ui.parseContactList(b)
			}
		},
		parseContactList : function (a) {
			var c = $("share_user_links"),
			b,
			d,
			e,
			f;
			for (f = 0; f < a.length; f++)
				b = a[f], d = b[0], e = b[1], b = document.createElement("a"), b.setAttribute("id", "share_user" + f), b.setAttribute("href", "#"), b.setAttribute("onkeydown", "PHILIPS.ui.okCatcher(this, event.keyCode);"), b.setAttribute("title", d), b.innerHTML = e, c.appendChild(b), d = document.createElement("span"), d.setAttribute("class", "divider"), c.appendChild(d)
		},
		startRequest : function (a, c) {

		},
		readAuthenticationCookie : function (a, c) {
			var b = getHTTPObject();
			b && (b.onreadystatechange = function () {
				if (4 == b.readyState && (200 == b.status || 304 == b.status)) {
					var d = b.responseText,
					e = d.substring(d.indexOf("DeviceId") + 9, d.indexOf("DeviceKey"));
					e.match("\n") && (e = e.split("\n")[0]);
					var e = encodeURIComponent(e),
					f = d.substring(d.indexOf("DeviceKey") + 10, d.indexOf("Country"));
					f.match("\n") && (f = f.split("\n")[0]);
					f = encodeURIComponent(f);
					d = d.substring(d.indexOf("Country") +
							8);
					d.match("\n") && (d = d.split("\n")[0]);
					encodeURIComponent(d);
				}
			});
			b.send(null)
		},
		getSignature : function (a, c, b, d) {
			var e = getHTTPObject(),
			a = "decrypt_deviceKey.php?deviceKey=" + a + "&url=" + Base64.encode(b);
			e && (e.onreadystatechange = function () {
				4 == e.readyState && (200 == e.status || 304 == e.status) && PHILIPS.ui.secureRequest(c, e.responseText, b, d)
			});
			e.open("GET", a, !0);
		},
		request : function (a, c) {
			 (b.onreadystatechange = function () {
				if (4 == b.readyState && (200 == b.status || 304 == b.status)) {
					var a = eval("(" + b.responseText + ")");
					switch (c) {
					case "parse":
						PHILIPS.ui.parseResponse(a);
						break;
					case "playlists":
						PHILIPS.ui.createLinkArray(a, "playlists");
						break;
					case "playlistsAddTo":
						PHILIPS.ui.createLinkArray(a, "playlistsAddTo");
						break;
					case "subscriptions":
						PHILIPS.ui.createLinkArray(a, "subscriptions");
						break;
					case "contacts":
						PHILIPS.ui.createLinkArray(a,
							"contacts");
						break;
					case "addToNewPlaylist":
						PHILIPS.ui.addVideoToNewPlaylist(a);
						break;
					case "parseComments":
						PHILIPS.ui.parseComments(a)
					}
					$("overlay_close").focus()
				}
			});
			b.open("GET", d, !0);
			b.send(null)
		},
		secureRequest : function (a, c, b, d) {
			var e = getHTTPObject(),
			f = PHILIPS.AUTHTOKEN,
			a = "secure_request.php?url=" + Base64.encode(b) + "&authToken=" + Base64.encode(f) + "&deviceId=" + Base64.encode(a) + "&signature=" + Base64.encode(c);
			e && (e.onreadystatechange = function () {
				if (4 == e.readyState && (200 == e.status || 304 == e.status)) {
					"Video not found" ==
					e.responseText && (PHILIPS.ui.openOverlay("no_videos", ""), $("overlay_close").focus());
					var a = eval("(" + e.responseText + ")");
					switch (d) {
					case "parse":
						PHILIPS.DATASTORAGE.relatedVideos = a;
						PHILIPS.ui.parseResponse(a);
						break;
					case "parseVideo":
						PHILIPS.DATASTORAGE.video = a;
						PHILIPS.ui.parseVideoEntry(a);
						break;
					case "links":
						PHILIPS.ui.createLinkList(a)
					}
				}
			});
			e.open("GET", a, !0);
			e.send(null)
		},
		getFeeds : function () {
			var a = $("currentFeed"),
			c = $("currentCategory"),
			b = $("timeFilter").value,
			d = $("startIndex").value,
			e = "http://192.168.1.184/feeds/api/standardfeeds/";
			"" !== PHILIPS.LOCALE_CODE && (e += PHILIPS.LOCALE_CODE + "/");
			e += escape(a.value);
			"All" != c.value && (e += escape("_" + c.value));
			e = e + ("?start-index=" + d) + "&max-results=15";
			e += "&alt=json";
			e += "&format=3";
			"most_recent" == a.value || "recently_featured" == a.value || (e += "&time=" + b);
			PHILIPS.ui.startRequest(e, "parse")
		},
		searchYoutube : function () {
			var a = $("startIndex").value,
			c = $("search_query").value,
			b = $("orderByFilter").value;
			$("timeFilter");
			var d = $("currentCategory").value;
			PHILIPS.ACTIVELIST = "";
			PHILIPS.ACTIVELIST_URL = "";
			c = "/feeds/api/videos?vq=" +
				encodeURIComponent(c);
			"All" != d && (c += "&category=" + d);
			c = c + ("&start-index=" + a) + "&max-results=15";
			c += "&orderby=" + b;
			"" !== PHILIPS.LOCALE_CODE && (c += "&restriction=" + PHILIPS.LOCALE_CODE);
			c += "&alt=json";
			c += "&format=3";
			PHILIPS.ui.startRequest(c, "parse")
		},
		getRelatedVideos : function () {
			var a = arguments;
			0 === a.length ? (a = parseInt(location.href.indexOf("?"), 10) + 7, a = decodeURI(location.href).substring(a)) : (a = a[0].link[1].href, a = a.substring(0, a.lastIndexOf("/")));
			a.match("#") && (a = a.split("#")[0]);
			78 !== a.length ? (a += "/related?alt=json&format=3&start-index=" +
				$("startIndex").value + "&max-results=7", "" !== PHILIPS.LOCALE_CODE && (a += "&restriction=" + PHILIPS.LOCALE_CODE), PHILIPS.ui.startRequest(a, "parse"), PHILIPS.DONEFLAG = !1) : $("loading").style.display = "none"
		},
		getVideoInfo : function () {
			var a = arguments,
			c;
			0 === a.length ? (a = location.href, a.match("#") && (a = a.split("#")[0]), c = parseInt(a.indexOf("?"), 10) + 7, a = a.substring(c), PHILIPS.ui.startRequest(a + "?alt=json&format=3", "parseVideo")) : PHILIPS.ui.parseVideoEntry(a)
		},
		showVideoDetails : function (a) {
			function c(a, b) {
				return a.length >=
				b ? a.substring(0, b) + "..." : a
			}
			if ("home" == PHILIPS.PAGE_ID) {
				$("video_title").innerHTML = c($("hidden_title" + a).value, 30);
				$("video_description").innerHTML = c($("hidden_description" + a).value, 50);
				$("duration").innerHTML = $("hidden_duration" + a).value;
				$("totalViews").innerHTML = $("hidden_totalViews" + a).value;
				var a = $("hidden_rating" + a).value,
				b;
				for (b = $("rating") ? $("rating") : $("signin_rating"); b.hasChildNodes(); )
					b.removeChild(b.lastChild);
				var d,
				e;
				if ("no_rating" != a) {
					for (e = 1; e <= a; e++)
						d = document.createElement("span"),
						d.setAttribute("class", "rating_star"), b.appendChild(d);
					".5" == a.substring(1, 3) && (d = document.createElement("span"), d.setAttribute("class", "rating_half"), b.appendChild(d), a++);
					for (e = a; 5 > e; e++)
						d = document.createElement("span"), d.setAttribute("class", "rating_empty"), b.appendChild(d)
				} else
					d = document.createElement("span"), d.textContent = "No rating", b.appendChild(d)
			} else
				$("video_title").innerHTML = c($("hidden_title" + a).value, 50), $("video_duration").innerHTML = $("hidden_duration" + a).value;
			$("video_info_box").style.visibility =
				"visible"
		},
		hideVideoDetails : function () {
			$("video_info_box").style.visibility = "hidden"
		},
		parseResponse : function (a) {
			flag = false;
			if ($("home")) {
				var c;
				"" !== $("search_query").value ? ($("searchOn").value = "on", $("feed") ? (c = $("currentCategory"), c.value = "All", c.alt = "All categories", c = $("orderByFilter"), c.value = "relevance", c.alt = "Relevance", c = $("timeFilter"), c.value = "all_time", c.alt = "All time", c = $("feed")) : c = $("orderby"), c.id = "orderby", c.innerHTML = $("orderByFilter").alt, c.title = $("orderByFilter").title, $("orderby").title =
						$("orderByFilter").title, $("orderby").textContent = $("orderByFilter").alt) : ($("search_query").focus(), $("searchOn").value = "off", c = $("feed") ? $("feed") : $("orderby"), c.id = "feed", c.innerHTML = $("currentFeed").alt, c.title = $("currentFeed").title);
				$("time").innerHTML = $("timeFilter").alt;
				$("time").title = $("timeFilter").title;
				$("category").innerHTML = $("currentCategory").alt;
				$("category").title = $("currentCategory").title;
				if(triggerGoogleMessage) $("overlay_close").focus();
			}
			$("pl_length") && ($("pl_length").textContent = a.feed.openSearch$totalResults.$t);
			var b = $("startIndex");
			null !== b && (b.value = a.feed.openSearch$startIndex.$t);
			c = $("startIndex").value;
			var d = $("videocontainer"),
			e = a.feed.id.$t,
			f = $("title");
			null !== f && (f.innerHTML = a.feed.title.$t.substring(31) + ", Video results " + b.value + "-" + (parseInt(b.value, 10) + 13) + " of about " + a.feed.openSearch$totalResults.$t);
			e.substring(49);
			for (b = 0; b < document.getElementsByClassName("entry").length; b++) {
				for (e = $("entry" + b + "_input"); e.hasChildNodes(); )
					e.removeChild(e.lastChild);
				for (e = $("video" + b); e.hasChildNodes(); )
					e.removeChild(e.lastChild)
			}
			d.style.visibility =
				"hidden";
			if (0 < a.feed.openSearch$totalResults.$t)
				for (b = 0; b < a.feed.entry.length; b++) {
					try {
						$("video" + b);
						var j = a.feed.entry[b].id.$t,
						h = a.feed.entry[b].title.$t.substr(0, 30),
						g = a.feed.entry[b].media$group.media$description.$t.substr(0, 50),
						k = a.feed.entry[b].media$group.media$thumbnail[1].url,
						l = PHILIPS.ui.convertSecondsToMinutes(a.feed.entry[b].media$group.yt$duration.seconds),
						m = "undefined" != typeof a.feed.entry[b].gd$rating ? PHILIPS.ui.ratingConverter(a.feed.entry[b].gd$rating.average) : "no_rating",
						n = "undefined" !=
							typeof a.feed.entry[b].yt$statistics ? a.feed.entry[b].yt$statistics.viewCount : 0
					} catch (p) {
						b++
					}
					e = $("entry" + b + "_input");
					f = document.createElement("input");
					f.setAttribute("type", "hidden");
					f.setAttribute("id", "hidden_title" + b);
					f.setAttribute("value", h);
					e.appendChild(f);
					f = document.createElement("input");
					f.setAttribute("type", "hidden");
					f.setAttribute("id", "hidden_description" + b);
					f.setAttribute("value", g);
					e.appendChild(f);
					f = document.createElement("input");
					f.setAttribute("type", "hidden");
					f.setAttribute("id",
						"hidden_duration" + b);
					f.setAttribute("value", l);
					e.appendChild(f);
					f = document.createElement("input");
					f.setAttribute("type", "hidden");
					f.setAttribute("id", "hidden_totalViews" + b);
					f.setAttribute("value", n);
					e.appendChild(f);
					f = document.createElement("input");
					f.setAttribute("type", "hidden");
					f.setAttribute("id", "hidden_rating" + b);
					f.setAttribute("value", m);
					e.appendChild(f);
					e = $("video" + b);
					e.innerHTML = "&nbsp;";
					e.setAttribute("href", "player.php?video=" + j);
					e.setAttribute("id", "video" + b);
					e.setAttribute("onblur", "PHILIPS.ui.hideVideoDetails()");
					e.setAttribute("onfocus", "PHILIPS.ui.showVideoDetails(" + b + ")");
					"home" != PHILIPS.PAGE_ID ? (e.setAttribute("onkeydown", "PHILIPS.ui.navigateVids(this, event.keyCode);"), e.setAttribute("onkeypress", "if(event.keyCode == VK_ENTER) return false;")) : e.setAttribute("onkeydown", "PHILIPS.ui.navigateVids(this, event.keyCode);");
					f = $E({
							tag : "img",
							attrs : {
								src : k
							}
						});
					e.appendChild(f)
				}
			else
				PHILIPS.ui.openOverlay("no_videos", ""), $("overlay_close").focus();
			$("loading").style.display = "none";
			"home" == PHILIPS.PAGE_ID ? "undefined" !=
			typeof a.feed.entry && (15 == a.feed.entry.length || a.feed.openSearch$totalResults != c + 15 && 15 < a.feed.openSearch$totalResults) ? $("next_vid").style.display = "block" : $("next_vid").style.display = "none" : "videoPage" == PHILIPS.PAGE_ID && ("undefined" != typeof a.feed.entry && (7 == a.feed.entry.length || a.feed.openSearch$totalResults != c + 7) ? $("next_vid").style.display = "block" : $("next_vid").style.display = "none");
			$("prev_vid").style.display = 1 < parseInt(c, 10) ? "block" : "none";
			d.style.visibility = "visible"
		},
		parseVideoEntry : function (a) {
			a =
				a.entry || a[0];
			PHILIPS.DATASTORAGE.video = a;
			$("videoTitle").textContent = a.title.$t;
			"undefined" != typeof a.gd$rating && ($("ratingValue").value = PHILIPS.ui.ratingConverter(a.gd$rating.average));
			for (var c = $("ratingValue").value, b = $("rating") ? $("rating") : $("signin_rating"); b.hasChildNodes(); )
				b.removeChild(b.lastChild);
			var d,
			e;
			if ("no_rating" != c) {
				for (e = 1; e <= c; e++)
					d = document.createElement("span"), d.setAttribute("class", "rating_star"), b.appendChild(d);
				".5" == c.substring(1, 3) && (d = document.createElement("span"),
					d.setAttribute("class", "rating_half"), b.appendChild(d), c++);
				for (e = c; 5 > e; e++)
					d = document.createElement("span"), d.setAttribute("class", "rating_empty"), b.appendChild(d)
			} else
				d = document.createElement("span"), d.textContent = "No rating", b.appendChild(d);
			$("rateCount").textContent = "undefined" != typeof a.gd$rating ? a.gd$rating.numRaters : 0;
			c = document.getElementsByClassName("author");
			for (e = 0; e < c.length; e++)
				0 === e && (b = a.author[0].name.$t.length, a.author[0].name.$t.substring(b - 1, b)), c[e].textContent = a.author[0].name.$t;
			e = $("published");
			c = "undefined" != typeof a.published ? a.published.$t : "unknown";
			b = c.substring(8, 10);
			10 > b && (b = b.substring(1));
			d = c.substring(5, 7);
			10 > d && (d = d.substring(1));
			var f = c.substring(0, 4);
			e.textContent = "unknown" != c ? (b + "." + d + "." + f).substring(0, 10) : c;
			var j;
			"undefined" != typeof a.media$group && (j = $("category"), j.textContent = a.media$group.media$category[0].$t);
			"undefined" != typeof a.yt$statistics && (e = $("viewCount"), e.textContent = a.yt$statistics.viewCount);
			c = [];
			b = a.category;
			for (e = 0; e < b.length; e++)
				 - 1 == b[e].term.indexOf("http://192.168.1.184/") &&
				b[e].term != j.textContent && c.push(b[e].term);
			for (e = 0; 5 > e && e < c.length; )
				$("tag" + e).textContent = c[e], $("tag" + e).href = "index.php?tag=" + c[e], e++;
			PHILIPS.VIDEO_CONTAINER = $("player");
			PHILIPS.VIDEO_CONTAINER.setAttribute("title", a.id.$t.substring(a.id.$t.lastIndexOf("/") + 1));
			null !== PHILIPS.VIDEO && PHILIPS.VIDEO_CONTAINER.removeChild(PHILIPS.VIDEO);
			j = document.createElement("object");
			PHILIPS.FULLSCREEN ? (j.setAttribute("width", "1270"), j.setAttribute("height", "710")) : (j.setAttribute("width", "450"), j.setAttribute("height",
					"380"));
			j.setAttribute("id", "video");
			j.setAttribute("data", a.media$group.media$content[0].url);
			j.setAttribute("type", "video/h264");
			j.setAttribute("align", "middle");
			j.setAttribute("autostart", "false");
			PHILIPS.VIDEO_CONTAINER.appendChild(j);
			PHILIPS.VIDEO = $("video");
			PHILIPS.VIDEO.focus();
			PHILIPS.VIDEO_DURATION = parseInt(a.media$group.yt$duration.seconds, 10);
			$("total").innerHTML = PHILIPS.ui.convertSecondsToMinutes(PHILIPS.VIDEO_DURATION);
			PHILIPS.ui.createProgressBar();
			PHILIPS.ui.playVideo()
		},
		ratingConverter : function (a) {
			return 0 <=
			a && 0.75 >= a ? 0.5 : 0.76 <= a && 1.25 >= a ? 1 : 1.26 <= a && 1.75 >= a ? 1.5 : 1.76 <= a && 2.25 >= a ? 2 : 2.26 <= a && 2.75 >= a ? 2.5 : 2.76 <= a && 3.25 >= a ? 3 : 3.26 <= a && 3.75 >= a ? 3.5 : 3.76 <= a && 4.25 >= a ? 4 : 4.26 <= a && 4.75 >= a ? 4.5 : 5
		},
		navigateVids : function (a, c) {
			var b = parseInt(a.id.substring(5, 7), 10),
			d = $("startIndex");
			"home" == PHILIPS.PAGE_ID ? 4 >= b && c == VK_UP && 1 != d.value ? (PHILIPS.ui.showLoading(), d.value = parseInt(d.value, 10) - 15, "on" == $("searchOn").value ? PHILIPS.ui.searchYoutube() : "" != PHILIPS.ACTIVELIST ? (b = PHILIPS.ACTIVELIST_URL, "" != b && -1 != b.indexOf("?vq=") ?
					b = b.substring(0, b.indexOf("&")) : "" != b && (b = b.substring(0, b.indexOf("?"))), "my_videos" == PHILIPS.ACTIVELIST ? PHILIPS.ui.request("/feeds/api/users/default/uploads?alt=json&start-index=" + d.value + "&max-results=15", "parse") : "favorites" == PHILIPS.ACTIVELIST ? PHILIPS.ui.request("/feeds/api/users/default/favorites?alt=json&start-index=" + d.value + "&max-results=15", "parse") : "subscription" == PHILIPS.ACTIVELIST ? PHILIPS.ui.startRequest(b + "&start-index=" + d.value + "&max-results=15&alt=json", "parse") : "playlist" == PHILIPS.ACTIVELIST &&
					PHILIPS.ui.startRequest(b + "?start-index=" + d.value + "&max-results=15&alt=json", "parse")) : PHILIPS.ui.getFeeds(), setTimeout("$('video14').focus()", 10)) : 10 <= b && c == VK_DOWN && (10 == b && ($("video_info_box").style.visibility = "hidden", $("video14").focus()), 15 == PHILIPS.DATASTORAGE.relatedVideos.feed.entry.length ? ($("video_info_box").style.visibility = "hidden", PHILIPS.ui.showLoading(), d.value = parseInt(d.value, 10) + 15, "on" == $("searchOn").value ? PHILIPS.ui.searchYoutube() : "" != PHILIPS.ACTIVELIST ? (b = PHILIPS.ACTIVELIST_URL,
						"" != b && -1 != b.indexOf("?vq=") ? b = b.substring(0, b.indexOf("&") + 1) : "" != b && (b = b.substring(0, b.indexOf("?") + 1)), "my_videos" == PHILIPS.ACTIVELIST ? PHILIPS.ui.request("/feeds/api/users/default/uploads?alt=json&start-index=" + d.value + "&max-results=15", "parse") : "favorites" == PHILIPS.ACTIVELIST ? PHILIPS.ui.request("/feeds/api/users/default/favorites?alt=json&start-index=" + d.value + "&max-results=15", "parse") : "subscription" == PHILIPS.ACTIVELIST ? PHILIPS.ui.startRequest(b + "start-index=" + d.value + "&max-results=15&alt=json",
							"parse") : "playlist" == PHILIPS.ACTIVELIST && PHILIPS.ui.startRequest(b + "start-index=" + d.value + "&max-results=15&alt=json", "parse")) : PHILIPS.ui.getFeeds(), setTimeout("$('video0').focus()", 10)) : a.focus()) : "videoPage" == PHILIPS.PAGE_ID && (c !== VK_ENTER ? 6 === b && c === VK_RIGHT ? (d.value = parseInt(d.value, 10) + 7, PHILIPS.ui.getRelatedVideos(), setTimeout("$('video0').focus()", 10)) : 0 === b && (c === VK_LEFT && 1 != d.value) && (d.value = parseInt(d.value, 10) - 7, PHILIPS.ui.getRelatedVideos(), setTimeout("$('video6').focus()", 10)) : (PHILIPS.ui.stopVideo(),
					d = PHILIPS.DATASTORAGE.relatedVideos.feed.entry[b], PHILIPS.ui.getVideoInfo(d), PHILIPS.ui.getRelatedVideos(d), $("btn_fullscreen").focus()))
		},
		toggleFullScreen : function () {
			if ("undefined" != typeof PHILIPS.VIDEO) {
				var a = $("overlay"),
				c = $("overlay_content");
				PHILIPS.FULLSCREEN = !PHILIPS.FULLSCREEN;
				PHILIPS.FULLSCREEN ? (a.style.zIndex = 1E4, a.style.background = "transparent", a.style.display = "block", a.style.visibility = "visible", c.style.display = "none", PHILIPS.VIDEO_CONTAINER.setAttribute("style", "position: fixed; z-index: 100; top: -5px; left: -5px; width: 1280px; height: 720px;"),
					PHILIPS.VIDEO.setAttribute("style", "z-index: 1000;"), PHILIPS.VIDEO.setAttribute("width", "1280"), PHILIPS.VIDEO.setAttribute("height", "720"), PHILIPS.ui.disableWrapper(), PHILIPS.VIDEO_CONTAINER.focus(), PHILIPS.ui.playVideo()) : (a.style.zIndex = "", a.style.background = "", a.style.display = "none", a.style.visibility = "hidden", c.style.display = "block", PHILIPS.VIDEO_CONTAINER.removeAttribute("style"), PHILIPS.VIDEO.setAttribute("width", "450"), PHILIPS.VIDEO.setAttribute("height", "380"), PHILIPS.VIDEO_CONTAINER.setAttribute("style",
						"overflow: hidden"), PHILIPS.ui.activateWrapper(), $("btn_fullscreen").focus())
			}
		},
		editStr : function (a, c) {
			return "undefined" !== typeof a ? a.length >= c ? a.substring(0, c) + "..." : a : ""
		},
		convertSecondsToMinutes : function (a) {
			var c = a;
			if (null === c || "" === c || "undefined" === c || isNaN(c))
				return "0:00";
			"number" !== typeof c && (c = parseInt(c, 10));
			a = Math.floor(c / 60);
			c = Math.floor(c - 60 * a);
			10 > c && (c = "0" + c);
			return a + ":" + c
		},
		disableWrapper : function () {
			var a = $("wrapper").getElementsByTagName("a"),
			c;
			for (c = 0; c < a.length; c++)
				a[c].rel = a[c].href,
				a[c].removeAttribute("href");
			$("search_query") && ($("search_query").readOnly = !0, $("search_query").disabled = !0)
		},
		activateWrapper : function () {
			var a = $("wrapper").getElementsByTagName("a"),
			c;
			for (c = 0; c < a.length; c++)
				a[c].href = a[c].rel, a[c].removeAttribute("rel");
			$("search_query") && ($("search_query").readOnly = !1, $("search_query").disabled = !1)
		},
		setTextAreaMaxLength : function () {
			var a = document.getElementsByTagName("textarea"),
			c;
			for (c = 0; c < a.length; c++)
				a[c].getAttribute("maxlength") && (a[c].onkeyup = a[c].onchange =
						PHILIPS.ui.checkMaxLength, a[c].onkeyup())
		},
		checkMaxLength : function () {
			var a = this.getAttribute("maxlength"),
			c = this.value.length,
			b = $("comment_chars");
			shareCounter = $("share_chars");
			c >= a && (this.value = this.value.substring(0, a));
			b && (b.innerHTML = a - this.value.length);
			shareCounter && (shareCounter.innerHTML = a - this.value.length)
		},
		showLoading : function () {
			$("loading").style.display = "block";
			$("videocontainer").style.visibility = "hidden"
		}
	}
};
Initializers.add(PHILIPS.ui.loadingFunctions);
function getXmlHttpRequestObject() {
	return window.XMLHttpRequest ? new XMLHttpRequest : new ActiveXObject("Microsoft.XMLHTTP")
}
var receiveReq = getXmlHttpRequestObject();
function sayHello(a) {
	if (a.keyCode == VK_ENTER && (4 == receiveReq.readyState || 0 == receiveReq.readyState))
		receiveReq.open("GET", "termsofuse.html", !0), receiveReq.onreadystatechange = handleSayHello, receiveReq.send(null)
}
function handleSayHello() {
	4 == receiveReq.readyState && (document.getElementById("overlay_terms_of_use").innerHTML = receiveReq.responseText, PHILIPS.ui.loadOverlayFunctions(document.getElementById("terms_of_use"), VK_ENTER))
}
var receiveReq2 = getXmlHttpRequestObject();
function sayHello2(a) {
	if (a.keyCode == VK_ENTER && (4 == receiveReq2.readyState || 0 == receiveReq2.readyState))
		receiveReq2.open("GET", "signin.html", !0), receiveReq2.onreadystatechange = handleSayHello2, receiveReq2.send(null)
}
function handleSayHello2() {
	4 == receiveReq2.readyState && (document.getElementById("overlay_signin").innerHTML = receiveReq2.responseText, PHILIPS.ui.loadOverlayFunctions(document.getElementById("signin"), VK_ENTER))
};
