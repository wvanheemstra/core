(function($) {
    $.fn.visualLightbox = function(options) {
        var activeImage = null,
        badObjects = ["select", "object", "embed"],
        groupName = null,
        imageArray = [],
        slideShowTimer = null,
        startImage = null,
        B = 50,
        imgPreloader,
        showTimer;
        if (!document.getElementsByTagName) {
            return;
        }
        options = $.extend({
            animate: true,
            autoPlay: true,
            borderSize: 39,
            containerID: document,
            enableSlideshow: true,
            googleAnalytics: false,
            descSliding: true,
            imageDataLocation: "south",
            shadowLocation: "",
            closeLocation: "",
            initImage: "",
            loop: true,
            overlayDuration: 0.2,
            overlayOpacity: 0.7,
            prefix: "",
            classNames: "vlightbox",
            resizeSpeed: 7,
            showGroupName: false,
            slideTime: 4,
            strings: {
                closeLink: "",
                loadingMsg: "loading",
                nextLink: "",
                prevLink: "",
                startSlideshow: "",
                stopSlideshow: "",
                numDisplayPrefix: "",
                numDisplaySeparator: "/"
            },
            enableRightClick: false,
            featBrowser: true,
            breathingSize: 20,
            startZoom: false,
            floating: true
        },
        options);
        if (options.animate) {
            var overlayDuration = Math.max(options.overlayDuration, 0);
            options.resizeSpeed = Math.max(Math.min(options.resizeSpeed, 10), 1);
            var resizeDuration = (11 - options.resizeSpeed) * 0.15;
        } else {
            var overlayDuration = 0;
            var resizeDuration = 0;
        }
        var enableSlideshow = options.enableSlideshow;
        options.overlayOpacity = Math.max(Math.min(options.overlayOpacity, 1), 0);
        var playSlides = options.autoPlay;
        var container = $(options.containerID);
        var classNames = options.classNames;
        updateImageList();
        var objBody = container.length && container.get(0) != document ? container.get(0) : document.getElementsByTagName("body").item(0);
        if (objBody.childNodes.length) {
            $(objBody.childNodes[0]).before($("<div></div>"));
            objBody = objBody.childNodes[0];
        }
        function connectEvent(obj, name, func) {
            $("#" + obj).unbind()[name](func);
        }
        if (!document.getElementById(getID("overlay"))) {
            var objOverlay = document.createElement("div");
            objOverlay.setAttribute("id", getID("overlay"));
            objOverlay.style.display = "none";
            objBody.appendChild(objOverlay);
            var objLightbox = document.createElement("div");
            objLightbox.setAttribute("id", getID("lightbox"));
            objLightbox.style.display = "none";
            objBody.appendChild(objLightbox);
            var objImageDataContainer = document.createElement("div");
            objImageDataContainer.setAttribute("id", getID("imageDataContainer"));
            objImageDataContainer.className = getID("clearfix");
            var g = document.createElement("table");
            g.setAttribute("id", getID("outerImageContainer"));
            g.cellSpacing = 0;
            objLightbox.appendChild(g);
            var k = g.insertRow( - 1);
            var l = k.insertCell( - 1);
            l.className = "tl";
            var j = k.insertCell( - 1);
            j.className = "tc";
            var h = k.insertCell( - 1);
            h.className = "tr";
            var U = g.insertRow( - 1);
            var d = U.insertCell( - 1);
            d.className = "ml";
            var T = U.insertCell( - 1);
            T.setAttribute("id", getID("lightboxFrameBody"));
            var R = U.insertCell( - 1);
            R.className = "mr";
            var J = g.insertRow( - 1);
            var G = J.insertCell( - 1);
            G.className = "bl";
            var H = J.insertCell( - 1);
            H.className = "bc";
            var F = J.insertCell( - 1);
            F.className = "br";
            if (options.imageDataLocation == "north") {
                T.appendChild(objImageDataContainer);
            }
            var objImageData = document.createElement("div");
            objImageData.setAttribute("id", getID("imageData"));
            objImageDataContainer.appendChild(objImageData);
            var a = document.createElement("div");
            a.setAttribute("id", getID("imageDetails"));
            objImageData.appendChild(a);
            var b = document.createElement("div");
            b.setAttribute("id", getID("caption"));
            a.appendChild(b);
            var Z = document.createElement("span");
            Z.setAttribute("id", getID("numberDisplay"));
            a.appendChild(Z);
            var V = document.createElement("span");
            V.setAttribute("id", getID("detailsNav"));
            a.appendChild(V);
            var W = document.createElement("a");
            W.setAttribute("id", getID("prevLinkDetails"));
            W.setAttribute("href", "javascript:void(0);");
            W.innerHTML = options.strings.prevLink;
            V.appendChild(W);
            var c = document.createElement("a");
            c.setAttribute("id", getID("slideShowControl"));
            c.setAttribute("href", "javascript:void(0);");
            V.appendChild(c);
            var O = document.createElement("a");
            O.setAttribute("id", getID("closeLink"));
            O.setAttribute("href", "javascript:void(0);");
            O.innerHTML = options.strings.closeLink;
            if (options.closeLocation == "nav") {
                V.appendChild(O);
            } else {
                var Q = document.createElement("div");
                Q.setAttribute("id", getID("close"));
                if (options.closeLocation == "top") {
                    h.appendChild(Q);
                } else {
                    objImageData.appendChild(Q);
                }
                Q.appendChild(O);
            }
            var i = document.createElement("a");
            i.setAttribute("id", getID("nextLinkDetails"));
            i.setAttribute("href", "javascript:void(0);");
            i.innerHTML = options.strings.nextLink;
            V.appendChild(i);
            var objImageContainerMain = document.createElement("div");
            objImageContainerMain.setAttribute("id", getID("imageContainerMain"));
            T.appendChild(objImageContainerMain);
            var C = document.createElement("div");
            C.setAttribute("id", getID("imageContainer"));
            objImageContainerMain.appendChild(C);
            var D = document.createElement("img");
            D.setAttribute("id", getID("lightboxImage"));
            C.appendChild(D);
            if (!options.enableRightClick) {
                var I = document.createElement("div");
                I.setAttribute("id", getID("hoverNav"));
                I.style.background = "white";
                I.style.opacity = 0;
                I.style.filter = "alpha(opacity=0)";
                C.appendChild(I);
            }
            var K = document.createElement("a");
            K.setAttribute("id", getID("prevLinkImg"));
            K.setAttribute("href", "javascript:void(0);");
            objImageContainerMain.appendChild(K);
            var N = document.createElement("a");
            N.setAttribute("id", getID("nextLinkImg"));
            N.setAttribute("href", "javascript:void(0);");
            objImageContainerMain.appendChild(N);
            var L = document.createElement("div");
            L.setAttribute("id", getID("loading"));
            C.appendChild(L);
            var P = document.createElement("a");
            P.setAttribute("id", getID("loadingLink"));
            P.setAttribute("href", "javascript:void(0);");
            P.innerHTML = options.strings.loadingMsg;
            L.appendChild(P);
            if (options.imageDataLocation != "north") {
                T.appendChild(objImageDataContainer);
            }
            var objShadow = document.createElement("div");
            objShadow.setAttribute("id", getID("shadow")); (options.shadowLocation ? document.getElementById(getID(options.shadowLocation)) : H).appendChild(objShadow);
        }
        function reconect() {
            connectEvent(getID("overlay"), "click", end);
            connectEvent(getID("lightbox"), "click", end);
            connectEvent(getID("prevLinkDetails"), "click", showPrev);
            connectEvent(getID("slideShowControl"), "click", f);
            connectEvent(getID("closeLink"), "click", end);
            connectEvent(getID("nextLinkDetails"), "click", showNext);
            if (!options.enableRightClick) {
                connectEvent(getID("hoverNav"), "mousemove", hoverNav);
                connectEvent(getID("hoverNav"), "mouseout", outNav);
            }
            connectEvent(getID("prevLinkImg"), "click", showPrev);
            connectEvent(getID("nextLinkImg"), "click", showNext);
            connectEvent(getID("loadingLink"), "click", end);
        }
        if (options.initImage != "") {
            start("#" + options.initImage);
        }
        function getHref(Node) {
            if (Node.tagName.toLowerCase() != "a") {
                Node = $("A:first", Node);
            }
            return $(Node).attr("href");
        }
        function getTitle(Node) {
            if (Node.tagName.toLowerCase() == "a") {
                return $(Node).attr("title") || Node.title;
            }
            return $(">*:last", Node).html();
        }
        function updateImageList() {
            $("." + classNames.replace(/\,/g, ",."), container).each(function() {
                if (getHref(this)) {
                    $(this).click(function(event) {
                        event.preventDefault();
                        start(this);
                        return false;
                    });
                }
            });
        }
/*
        var t = "VisualLightBox.com";
        if (t) {
            var c = $("<div></div>");
            c.css({
                position: "absolute",
                right: "0px",
                bottom: "0px",
                padding: "2px 3px",
                'background-color': "#EEE",
                'z-index': 10
            });
            $(C).append(c);
            var d = $(document.createElement("A"));
            d.css({
                color: "#555",
                font: "11px Arial,Verdana,sans-serif",
                padding: "3px 6px",
                width: "auto",
                height: "auto",
                margin: "0 0 0 0",
                outline: "none"
            });
            d.attr({
                href: "http://" + t.toLowerCase()
            });
            d.html(t);
            d.bind("contextmenu",
            function(eventObject) {
                return false;
            });
            c.append(d);
        }
*/
        var start = this.start = function(M) {
            S();
            M = $(M);
            $$("overlay").css({
                height: docWH()[1] + "px",
                left: getPageScroll().x + "px"
            });
            if (options.descSliding) {
                $$("imageDataContainer").hide();
            }
            $$("lightboxImage").hide().attr({
                src: ""
            });
            if (options.startZoom) {
                $$("imageContainer").css({
                    width: M.width() + "px",
                    height: M.height() + "px"
                });
                if (!document.all) {
                    $$("outerImageContainer").css({
                        opacity: 0.1
                    });
                }
                $$("lightbox").css({
                    left: M.offset().left - options.borderSize + "px",
                    top: M.offset().top - options.borderSize + "px",
                    width: M.width() + options.borderSize * 2 + "px",
                    height: "auto"
                });
            } else {
                $$("overlay").css({
                    opacity: 0
                }).show().fadeTo(overlayDuration * 1000, options.overlayOpacity);
                $$("lightbox").css({
                    left: 0,
                    width: "100%"
                });
            }
            reconect();
            $$("lightbox").show();
            imageArray = [];
            groupName = null;
            startImage = 0;
            $("." + (M.attr("className") || M.get(0).className), container).each(function() {
                if (getHref(this)) {
                    imageArray.push({
                        link: getHref(this),
                        title: getTitle(this)
                    });
                    if (this == M.get(0)) {
                        startImage = imageArray.length - 1;
                    }
                }
            });
            if (imageArray.length > 1) {
                groupName = M.attr("className");
            }
            if (options.featBrowser) {
                $(window).resize(adjustImageSizeNoEffect);
            }
            if (options.floating) {
                $(window).scroll(adjustImageSizeNoEffect);
            }
            $(window).resize(adjustOverlay);
            $(window).scroll(adjustOverlay);
            changeImage(startImage);
        };
        function changeImage(imageNum) {
            activeImage = imageNum;
            disableKeyboardNav();
            pauseSlideShow();
            showLoading();
            if (!options.startZoom) {
                $$("lightboxImage").hide();
            }
            $$("prevLinkImg").hide();
            $$("nextLinkImg").hide();
            if (options.descSliding) {
                $$("imageDataContainer").hide();
            }
            imgPreloader = new Image;
            imgPreloader.onload = function() {
                imageArray[activeImage].link = imgPreloader.src;
                imageArray[activeImage].width = imgPreloader.width;
                imageArray[activeImage].height = imgPreloader.height;
                adjustImageSize(false);
            };
            if (options.startZoom && !$$("lightboxImage").attr("src")) {
                imageArray[activeImage].width = 320;
                imageArray[activeImage].height = 240;
                adjustImageSize(false, true);
            }
            imgPreloader.src = imageArray[activeImage].link;
            if (options.googleAnalytics) {
                urchinTracker(imageArray[activeImage].link);
            }
        }
        function adjustImageSize(recall, noImage) {
            var imgWidth = imageArray[activeImage].width;
            var imgHeight = imageArray[activeImage].height;
            var arrayPageSize = m();
            var imageProportion = imgWidth / imgHeight;
            if (options.featBrowser) {
                var winProportion = arrayPageSize.winWidth / arrayPageSize.winHeight;
                if (imageProportion > winProportion) {
                    var maxWidth = arrayPageSize.winWidth - options.borderSize * 2 - options.breathingSize * 2;
                    var maxHeight = Math.round(maxWidth / imageProportion);
                } else {
                    var maxHeight = arrayPageSize.winHeight - options.borderSize * 2 - options.breathingSize * 2 - B;
                    var maxWidth = Math.round(maxHeight * imageProportion);
                }
                if (imgWidth > maxWidth || imgHeight > maxHeight) {
                    imgWidth = maxWidth;
                    imgHeight = maxHeight;
                }
            }
            var imgTop = getPageScroll().y + (m().winHeight - (imgHeight + B + options.borderSize * 2)) / 2;
            var imgLeft = getPageScroll().x;
            var imageContainer = $$("imageContainer");
            if (recall == true) {
                imageContainer.css({
                    height: imgHeight + "px",
                    width: imgWidth + "px"
                });
                if (options.floating) {
                    moveEffect($$("lightbox"), imgLeft, imgTop);
                } else {
                    $$("lightbox").css({
                        top: imgTop + "px",
                        left: imgLeft + "px"
                    });
                }
            } else {
                var lightboxImage = $$("lightboxImage");
                imageContainer.stop(true, false);
                lightboxImage.stop(true, false);
                var lightboxImage2;
                if (options.startZoom && lightboxImage.attr("src")) {
                    lightboxImage2 = lightboxImage;
                    lightboxImage2.attr({
                        id: getID("lightboxImage2")
                    });
                } else {
                    lightboxImage.remove();
                }
                if (!noImage) {
                    lightboxImage = $(imgPreloader);
                    lightboxImage.hide();
                    lightboxImage.attr({
                        id: getID("lightboxImage")
                    });
                    imageContainer.append(lightboxImage);
                }
                var resizeFactor = imageProportion / (imageContainer.width() / imageContainer.height());
                if (!noImage) {
                    if (options.startZoom) {
                        if (lightboxImage2) {
                            $$("lightboxImage2").stop(true, true);
                        }
                        var zoomF = lightboxImage2 ? 120: 100;
                        if (lightboxImage2) {
                            lightboxImage2.css({
                                width: 1 > resizeFactor ? "auto": lightboxImage2.width() / lightboxImage2.parent().width() * 100 + "%",
                                height: 1 > resizeFactor ? lightboxImage2.height() / lightboxImage2.parent().height() * 100 + "%": "auto",
                                left: 0,
                                top: 0
                            });
                        }
                        lightboxImage.css({
                            opacity: 0,
                            display: "block",
                            position: "absolute",
                            width: 1 > resizeFactor ? zoomF + "%": "auto",
                            height: 1 > resizeFactor ? "auto": zoomF + "%",
                            left: (100 - zoomF * (1 > resizeFactor ? 1: resizeFactor)) / 2 + "%",
                            top: (100 - zoomF * (1 > resizeFactor ? 1 / resizeFactor: 1)) / 2 + "%"
                        });
                    }
                    if (options.startZoom) {
                        hideLoading();
                    }
                }
                resizeImageContainer(imgLeft, imgTop, imgWidth, imgHeight, resizeFactor, noImage);
            }
            if (document.all) {
                $$("imageDataContainer").css({
                    width: imgWidth + "px"
                });
            }
            if (options.enableRightClick) {
                $$("lightboxImage").mousemove(hoverNav);
                $$("lightboxImage").mouseout(outNav);
            }
        }
        function resizeImageContainer(imgLeft, imgTop, imgWidth, imgHeight, resizeFactor, noImage) {
            var imageContainer = $$("imageContainer");
            var lightboxImage = $$("lightboxImage");
            var lightbox = $$("lightbox");
            if (!noImage) {
                var lightboxImage2 = $$("lightboxImage2");
            }
            if (options.startZoom) {
                lightboxImage.fadeTo(resizeDuration * 1000, 1);
                if (!document.all) {
                    $$("outerImageContainer").fadeTo(resizeDuration * 1000, 1);
                }
            }
            moveEffect(lightbox, imgLeft, imgTop);
            if (options.startZoom && !noImage) {
                lightboxImage2.animate($.extend({
                    opacity: 0
                },
                resizeFactor < 1 ? {
                    height: "120%",
                    top: "-10%",
                    left: (100 - 120 / resizeFactor) / 2 + "%"
                }: {
                    width: "120%",
                    left: "-10%",
                    top: (100 - resizeFactor * 120) / 2 + "%"
                }), {
                    queue: false,
                    duration: resizeDuration * 1000,
                    complete: function() {
                        $(this).remove();
                    }
                });
                lightboxImage.animate($.extend({
                    left: 0,
                    top: 0
                },
                resizeFactor < 1 ? {
                    width: "100%"
                }: {
                    height: "100%"
                }), {
                    queue: false,
                    duration: resizeDuration * 1000
                });
            }
            imageContainer.animate({
                width: imgWidth + "px",
                height: imgHeight + "px"
            },
            {
                queue: false,
                duration: resizeDuration * 1000,
                complete: !noImage ?
                function() {
                    showImage();
                }: null
            });
        }
        function moveEffect(lightbox, imgLeft, imgTop) {
            lightbox.stop(true, false);
            lightbox.animate({
                width: "100%",
                left: 0,
                top: imgTop,
                left: imgLeft
            },
            {
                queue: false,
                duration: resizeDuration * 1000
            });
        }
        function showLoading() {
            clearTimeout(showTimer);
            var loading = $$("loading");
            loading.show();
            loading.css({
                visibility: "hidden"
            });
            showTimer = setTimeout(function() {
                $$("loading").css({
                    visibility: "visible"
                });
            },
            300);
        }
        function hideLoading() {
            clearTimeout(showTimer);
            $$("loading").hide();
        }
        function showImage() {
            hideLoading();
            if (options.startZoom) {
                $$("overlay:hidden").css({
                    opacity: 0
                }).show().fadeTo(overlayDuration * 1000, options.overlayOpacity);
                showDetails();
            } else {
                $$("lightboxImage").css({
                    opacity: 0
                }).show().fadeTo(500, 1,
                function() {
                    showDetails();
                });
            }
            preloadNeighborImages();
        }
        function updateDetails() {
            $$("caption").html(imageArray[activeImage].title || "");
            if (imageArray.length > 1) {
                var num_display = options.strings.numDisplayPrefix + " " + eval(activeImage + 1) + " " + options.strings.numDisplaySeparator + " " + imageArray.length;
                if (options.showGroupName && groupName) {
                    num_display += " " + options.strings.numDisplaySeparator + " " + groupName;
                }
                $$("numberDisplay").text(num_display);
                $$("slideShowControl").css({
                    display: enableSlideshow ? "": "none"
                });
            }
        }
        function showDetails() {
            updateDetails();
            if (options.descSliding) {
                $$("imageDataContainer").animate({
                    height: "show",
                    opacity: "show"
                },
                650, null,
                function() {
                    updateNav();
                });
            } else {
                updateNav();
            }
        }
        function updateNav() {
            var d = 1 / imageArray.length;
            B = B * (1 - d) + $$("imageDataContainer").height() * d;
            if (imageArray.length > 1) {
                $$("prevLinkImg").show();
                $$("nextLinkImg").show();
                if (enableSlideshow) {
                    if (playSlides) {
                        startSlideShow();
                    } else {
                        stopSlideShow();
                    }
                }
            }
            enableKeyboardNav();
        }
        function startSlideShow() {
            if ($$("lightbox:hidden").length) {
                return;
            }
            pauseSlideShow();
            playSlides = true;
            slideShowTimer = setTimeout(function() {
                showNext();
            },
            options.slideTime * 1000);
            $$("slideShowControl").text(options.strings.stopSlideshow);
            $$("slideShowControl").addClass("started");
        }
        function stopSlideShow() {
            playSlides = false;
            pauseSlideShow();
            $$("slideShowControl").text(options.strings.startSlideshow);
            $$("slideShowControl").removeClass("started");
        }
        function f() {
            if (playSlides) {
                stopSlideShow();
            } else {
                startSlideShow();
            }
        }
        function pauseSlideShow() {
            if (slideShowTimer) {
                slideShowTimer = clearTimeout(slideShowTimer);
            }
        }
        function showNext() {
            if (imageArray.length > 1) {
                pauseSlideShow();
                if (!options.loop && (activeImage == imageArray.length - 1 && startImage == 0 || activeImage + 1 == startImage)) {
                    end();
                    return;
                }
                if (activeImage == imageArray.length - 1) {
                    changeImageWithData(0);
                } else {
                    changeImageWithData(activeImage + 1);
                }
            }
        }
        function changeImageWithData(imageNum) {
            if (options.descSliding) {
                $$("imageDataContainer").animate({
                    height: "hide",
                    opacity: "hide"
                },
                650, null,
                function() {
                    changeImage(imageNum);
                });
            } else {
                changeImage(imageNum);
            }
        }
        function showPrev() {
            if (imageArray.length > 1) {
                if (activeImage == 0) {
                    changeImageWithData(imageArray.length - 1);
                } else {
                    changeImageWithData(activeImage - 1);
                }
            }
        }
        function showFirst() {
            if (imageArray.length > 1) {
                changeImageWithData(0);
            }
        }
        function showLast() {
            if (imageArray.length > 1) {
                changeImageWithData(imageArray.length - 1);
            }
        }
        function enableKeyboardNav() {
            document.onkeydown = keyboardAction;
        }
        function disableKeyboardNav() {
            document.onkeydown = "";
        }
        function keyboardAction(e) {
            if (e == null) {
                keycode = event.keyCode;
            } else {
                keycode = e.which;
            }
            key = String.fromCharCode(keycode).toLowerCase();
            if (key == "x" || key == "o" || key == "c" || keycode == 27) {
                end();
            } else if (key == "p" || key == "%") {
                showPrev();
            } else if (key == "n" || key == "'") {
                showNext();
            } else if (key == "f") {
                showFirst();
            } else if (key == "l") {
                showLast();
            } else if (key == "s") {
                if (imageArray.length > 0 && options.enableSlideshow) {
                    f();
                }
            }
        }
        function preloadNeighborImages() {
            var nextImageID = imageArray.length - 1 == activeImage ? 0: activeImage + 1; (new Image).src = imageArray[nextImageID].link;
            var prevImageID = activeImage == 0 ? imageArray.length - 1: activeImage - 1; (new Image).src = imageArray[prevImageID].link;
        }
        function end(Event) {
            if (Event) {
                var id = $(Event.target).attr("id");
                if (getID("closeLink") != id && getID("lightbox") != id && getID("overlay") != id) {
                    return;
                }
            }
            $$("imageContainer").stop(true, false);
            $$("lightboxImage").stop(true, false);
            imgPreloader.onload = null;
            disableKeyboardNav();
            pauseSlideShow();
            $$("lightbox").hide();
            showBadObjects();
            if (options.overlayOpacity) {
                $$("overlay").fadeOut(overlayDuration * 1000);
            } else {
                $$("overlay").hide();
            }
            $(window).unbind("resize", adjustImageSizeNoEffect);
            $(window).unbind("scroll", adjustImageSizeNoEffect);
            $(window).unbind("resize", adjustOverlay);
            $(window).unbind("scroll", adjustOverlay);
        }
        function hoverNav(event) {
            if (event.pageX - $$("imageContainer").offset().left < $$("imageContainer").width() / 2) {
                $$("prevLinkImg").addClass("hover");
                $$("nextLinkImg").removeClass("hover");
            } else {
                $$("prevLinkImg").removeClass("hover");
                $$("nextLinkImg").addClass("hover");
            }
        }
        function outNav() {
            $$("prevLinkImg").removeClass("hover");
            $$("nextLinkImg").removeClass("hover");
        }
        function adjustImageSizeNoEffect() {
            adjustImageSize(true);
        }
        function adjustOverlay() {
            $$("overlay").css({
                left: getPageScroll().x + "px",
                top: 0,
                width: "100%",
                height: docWH()[1] + "px"
            });
        }
        function showBadObjects() {
            var els;
            var tags = badObjects;
            for (var i = 0; i < tags.length; i++) {
                els = document.getElementsByTagName(tags[i]);
                for (var j = 0; j < els.length; j++) {
                    $(els[j]).css({
                        visibility: "visible"
                    });
                }
            }
        }
        function S() {
            var tags = badObjects;
            for (var i = 0; i < tags.length; i++) {
                $(tags[i]).css({
                    visibility: "hidden"
                });
            }
        }
        function getPageScroll() {
            var x,
            y;
            if (self.pageYOffset || self.pageXOffset) {
                x = self.pageXOffset;
                y = self.pageYOffset;
            } else if (document.documentElement && (document.documentElement.scrollTop || document.documentElement.scrollLeft)) {
                x = document.documentElement.scrollLeft;
                y = document.documentElement.scrollTop;
            } else if (document.body) {
                x = document.body.scrollLeft;
                y = document.body.scrollTop;
            }
            return {
                x: x,
                y: y
            };
        }
        function m() {
            var windowX,
            windowY;
            if (self.innerHeight) {
                windowX = self.innerWidth;
                windowY = self.innerHeight;
            } else if (document.documentElement && document.documentElement.clientHeight) {
                windowX = document.documentElement.clientWidth;
                windowY = document.documentElement.clientHeight;
            } else if (document.body) {
                windowX = document.body.clientWidth;
                windowY = document.body.clientHeight;
            }
            return {
                winWidth: windowX,
                winHeight: windowY
            };
        }
        function docWH() {
            var b = document.body,
            e = document.documentElement,
            w = 0,
            h = 0;
            if (e) {
                w = Math.max(w, e.scrollWidth, e.offsetWidth);
                h = Math.max(h, e.scrollHeight, e.offsetHeight);
            }
            if (b) {
                w = Math.max(w, b.scrollWidth, b.offsetWidth);
                h = Math.max(h, b.scrollHeight, b.offsetHeight);
                if (window.innerWidth) {
                    w = Math.max(w, window.innerWidth);
                    h = Math.max(h, window.innerHeight);
                }
            }
            return [w, h];
        }
        function getID(id) {
            return options.prefix + id;
        }
        function $$(name) {
            return $("#" + getID(name));
        }
        return this;
    };
})(jQuery);