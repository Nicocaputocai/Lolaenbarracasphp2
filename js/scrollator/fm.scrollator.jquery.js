Scrollator = {
    scrollatorElementsStack: [],
    refreshAll: function() {
        var i = Scrollator.scrollatorElementsStack.length;
        while (i--) {
            if (!Scrollator.scrollatorElementsStack[i].jQuerysourceElement.closest('body').length > 0) {
                Scrollator.scrollatorElementsStack[i].destroy();
            } else {
                Scrollator.scrollatorElementsStack[i].refresh();
            }
        }
    }
};

(function(jQuery) {
	"use strict";
    jQuery.scrollator = function(sourceElement, options) {
        var defaults = {
            customClass: '',
            appendTo: 'body',
            preventPropagation: false,
            minHandleHeightPercent: 10,
            zIndex: ''
        };
        var plugin = this;
        plugin.settings = {};
        var jQueryhtml = jQuery('html');
        var jQuerysourceElement = jQuery(sourceElement);
        plugin.jQuerysourceElement = jQuerysourceElement;
        var jQuerymainScrollatorHolder = null;
        var jQuerythisScrollatorLaneHolder = null;
        var jQuerythisScrollatorLane = null;
        var jQuerythisScrollatorHandleHolder = null;
        var jQuerythisScrollatorHandle = null;
        var timerVisibility = null;
        var isDraggingHandle = false;
        var dragStartY = 0;
        var dragStartScrollTop = 0;
        var dragHandleOffsetY = 0;


        // INITIALIZE PLUGIN
        plugin.init = function() {
            plugin.settings = jQuery.extend({}, defaults, options);
            jQuerymainScrollatorHolder = jQuery('#scrollator_holder');
            jQuerysourceElement.addClass('scrollator');
            // initialize scrollator lane holder
            jQuerythisScrollatorLaneHolder = jQuery(document.createElement('div')).addClass('scrollator_lane_holder');
            jQuerythisScrollatorLaneHolder.addClass(plugin.settings.customClass);
            jQuerythisScrollatorLaneHolder.css('z-index', jQuerysourceElement.css('z-index'));
            plugin.settings.zIndex !== '' && jQuerythisScrollatorLaneHolder.css('z-index', plugin.settings.zIndex);
            jQuerysourceElement.is('body') && jQuerythisScrollatorLaneHolder.addClass('scrollator_on_body');
            // initialize scrollator lane
            jQuerythisScrollatorLane = jQuery(document.createElement('div')).addClass('scrollator_lane');
            // initialize scrollator handle holder
            jQuerythisScrollatorHandleHolder = jQuery(document.createElement('div')).addClass('scrollator_handle_holder');
            // initialize scrollator handle
            jQuerythisScrollatorHandle = jQuery(document.createElement('div')).addClass('scrollator_handle');
            initializeMainScrollatorsHolder();
            if (jQuerysourceElement.prop('tagName') == 'BODY') {
                jQueryhtml.bind('mousewheel DOMMouseScroll', mouseWheelEvent);
                jQueryhtml.bind('scroll', refreshScrollatorPosition);
                jQueryhtml.bind('mousemove', mouseMoveEvent);
            } else {
                jQuerysourceElement.bind('mousewheel DOMMouseScroll', mouseWheelEvent);
                jQuerysourceElement.bind('scroll', refreshScrollatorPosition);
                jQuerysourceElement.bind('mousemove', mouseMoveEvent);
            }
            jQuerythisScrollatorLaneHolder.bind('mousewheel DOMMouseScroll', mouseWheelEvent);
            jQuerythisScrollatorLane.bind('mousewheel DOMMouseScroll', mouseWheelEvent);
            jQuerythisScrollatorHandleHolder.bind('mousewheel DOMMouseScroll', mouseWheelEvent);
            jQuerythisScrollatorHandle.bind('mousewheel DOMMouseScroll', mouseWheelEvent);
            jQuerythisScrollatorLaneHolder.bind('mousemove', mouseMoveEvent);
            jQuerythisScrollatorLane.bind('mousemove', mouseMoveEvent);
            jQuerythisScrollatorHandleHolder.bind('mousemove', mouseMoveEvent);
            jQuerythisScrollatorHandle.bind('mousemove', mouseMoveEvent);
            jQuerythisScrollatorHandleHolder.bind('mousedown', mouseDownEvent);
            jQuerythisScrollatorHandle.bind('mousedown', mouseDownEvent);
            jQuery(window).bind('mouseup', windowMouseUpEvent);
            jQuery(window).bind('mousemove', windowMouseMoveEvent);
            jQuery(window).bind('keydown', windowKeyDownEvent);
            jQuerythisScrollatorHandleHolder.append(jQuerythisScrollatorHandle);
            jQuerythisScrollatorLane.append(jQuerythisScrollatorHandleHolder);
            jQuerythisScrollatorLaneHolder.append(jQuerythisScrollatorLane);
            jQuerymainScrollatorHolder.append(jQuerythisScrollatorLaneHolder);
            refreshScrollatorPosition();
            // refresh/resize/position all scrollators on window resize
            if (!document.body.hasScrollatorPageResizeEventHandler) {
                document.body.hasScrollatorPageResizeEventHandler = true;
                jQuery(window).bind('resize', function() {
                    Scrollator.refreshAll();
                });
            }
            mouseMoveEvent();
        };


        var mouseWheelEvent = function(e) {
            if (!e.ctrlKey && !e.metaKey) {
                if (!jQuery(e.currentTarget).hasClass('scrollator_noscroll') &&
                    (
                        jQuery(e.target).css('overflow-y') != 'auto' ||
                        jQuery(e.target).css('position') == 'fixed' ||
                        jQuery(e.target).prop('tagName') == 'PRE'
                    )
                ) {
                    var scrollTop = (jQuerysourceElement.is('body') ? jQuery(window) : jQuerysourceElement).scrollTop();
                    var scrollTopBefore = scrollTop;
                    var scrollAdjust = 0;
                    if (e.originalEvent.wheelDeltaY !== undefined && e.originalEvent.wheelDeltaY !== 0) { // Chrome
                        scrollAdjust = e.originalEvent.wheelDeltaY / 1.2;
                    } else if (e.originalEvent.wheelDelta !== undefined && e.originalEvent.wheelDelta !== 0) { // IE, Opera
                        scrollAdjust = e.originalEvent.wheelDelta / 1.2;
                    } else if (e.originalEvent.detail !== undefined && e.originalEvent.detail !== 0) { // Firefox
                        scrollAdjust = e.originalEvent.detail * -33.33;
                    }
                    scrollTop += scrollAdjust * -1;
                    (jQuerysourceElement.is('body') ? jQuery(window) : jQuerysourceElement).scrollTop(scrollTop);
                    scrollTop = (jQuerysourceElement.is('body') ? jQuery(window) : jQuerysourceElement).scrollTop();
                    Scrollator.refreshAll();

                    if (scrollTopBefore != scrollTop || plugin.settings.preventPropagation || jQuery(e.currentTarget).hasClass('scrollator_nopropagation')) {
                        e.preventDefault();
                        e.stopPropagation();
                    }
                }
            }
        };
        var mouseMoveEvent = function(e) {
            if (typeof e !== 'undefined') {
                if (jQuery(e.currentTarget).hasClass('scrollator_noscroll')) {
                    jQuerythisScrollatorLaneHolder.css('opacity', 0);
                    return;
                }
            }
            clearTimeout(timerVisibility);
            if (jQuerysourceElement[0].scrollHeight > (jQuerysourceElement.is('body') ? jQuery(window).height() : jQuerysourceElement.innerHeight())) {
                jQuerythisScrollatorLaneHolder.css('opacity', 1);
                timerVisibility = setTimeout(function() {
                    jQuerythisScrollatorLaneHolder.css('opacity', 0);
                }, 1500);
            } else {
                jQuerythisScrollatorLaneHolder.css('opacity', 0);
            }
        };
        var mouseDownEvent = function(e) {
            e.preventDefault();
            isDraggingHandle = true;
            dragStartY = e.clientY;
            dragStartScrollTop = (jQuerysourceElement.is('body') ? jQuery(window) : jQuerysourceElement).scrollTop();
            dragHandleOffsetY = e.offsetY;
            jQuerythisScrollatorLaneHolder.addClass('hover');
        };
        var windowMouseMoveEvent = function(e) {
            if (isDraggingHandle) {
                var draggedY = e.clientY - dragStartY;
                var multiplier = jQuerysourceElement[0].scrollHeight / (jQuerysourceElement.is('body') ? jQuery(window).height() : jQuerysourceElement.innerHeight());
                (jQuerysourceElement.is('body') ? jQuery(window) : jQuerysourceElement).scrollTop(dragStartScrollTop + (draggedY * multiplier));
                Scrollator.refreshAll();
                mouseMoveEvent();
            }
        };
        var windowMouseUpEvent = function() {
            isDraggingHandle = false;
            jQuerythisScrollatorLaneHolder.removeClass('hover');
        };
        var windowKeyDownEvent = function(e) {
            if (jQuerysourceElement.is(':visible')) {
                var key = {
                    pageUp: 33,
                    pageDown: 34,
                    left: 37,
                    up: 38,
                    right: 39,
                    down: 40
                };
                if ((e.keyCode == key.pageUp || e.keyCode == key.pageDown || e.keyCode == key.up || e.keyCode == key.down) && jQuery(document.activeElement).prop('tagName') != 'TEXTAREA') {
                    var scrollTop = (jQuerysourceElement.is('body') ? jQuery(window) : jQuerysourceElement).scrollTop();
                    var scrollAdjust = 0;
                    if (e.keyCode == key.pageUp || e.keyCode == key.pageDown) {
                        scrollAdjust = (jQuerysourceElement.is('body') ? jQuery(window).height() : jQuerysourceElement.innerHeight()) * 0.9;
                    } else if (e.keyCode == key.up || e.keyCode == key.down) {
                        scrollAdjust = 0; //40
                    }
                    if (e.keyCode == key.pageUp || e.keyCode == key.up) {
                        scrollTop -= scrollAdjust;
                    } else if (e.keyCode == key.pageDown || e.keyCode == key.down) {
                        scrollTop += scrollAdjust;
                    }
                    (jQuerysourceElement.is('body') ? jQuery(window) : jQuerysourceElement).scrollTop(scrollTop);
                    Scrollator.refreshAll();
                    mouseMoveEvent();
                }
            }
        };


        plugin.refresh = function() {
            refreshScrollatorPosition();
        };
        var refreshScrollatorPosition = function() {
            if (jQuerysourceElement.is(':visible')) {
                var boundingClientRect = jQuerysourceElement[0].getBoundingClientRect();
                var jQuerywindow = jQuery(window);
                var sourceBounds = {
                    left: boundingClientRect.left + jQuerywindow.scrollLeft(),
                    top: boundingClientRect.top + jQuerywindow.scrollTop(),
                    right: boundingClientRect.right + jQuerywindow.scrollLeft(),
                    bottom: boundingClientRect.bottom + jQuerywindow.scrollTop(),
                    width: boundingClientRect.width,
                    height: boundingClientRect.height
                };
                var paddingTop = parseInt(jQuerysourceElement.css('border-top-width'), 10);
                var paddingRight = parseInt(jQuerysourceElement.css('border-right-width'), 10);
                var paddingBottom = parseInt(jQuerysourceElement.css('border-bottom-width'), 10);
                var paddingLeft = parseInt(jQuerysourceElement.css('border-left-width'), 10);
                var contentHeight = jQuerysourceElement.prop('scrollHeight');
                var laneHeight = jQuerysourceElement.is('body') ? jQuerywindow.height() : jQuerysourceElement.innerHeight();
                var handleHeight = (laneHeight / contentHeight) * 100;
                var handlePosition = ((jQuerysourceElement.is('body') ? jQuerywindow : jQuerysourceElement).scrollTop() / contentHeight) * 100;
                var handlePosition100 = handlePosition / ((100 - handleHeight) / 100);
                var handlePositionSubtract = 0;
                if (handleHeight < plugin.settings.minHandleHeightPercent) {
                    handlePositionSubtract = (plugin.settings.minHandleHeightPercent - handleHeight) * (handlePosition100 / 100);
                    handleHeight = plugin.settings.minHandleHeightPercent;
                }
                if (!jQuerysourceElement.is('body')) {
                    jQuerythisScrollatorLaneHolder.css({
                        top: sourceBounds.top + paddingTop,
                        right: -sourceBounds.right + paddingRight,
                        bottom: -sourceBounds.bottom + paddingBottom
                    });
                }
                jQuerythisScrollatorHandleHolder.css({
                    height: handleHeight + '%',
                    top: handlePosition - handlePositionSubtract + '%'
                });
            }
        };


        // INITIALIZE SCROLLATORS HOLDER IF NEEDED
        var initializeMainScrollatorsHolder = function() {
            if (jQuerymainScrollatorHolder.length === 0) {
                jQuerymainScrollatorHolder = jQuery(document.createElement('div')).attr('id', 'scrollator_holder');
                jQuery(plugin.settings.appendTo).append(jQuerymainScrollatorHolder);
            }
        };


        // HIDE SCROLLATOR
        plugin.hide = function() {
            jQuerythisScrollatorLaneHolder.hide();
        };

        // SHOW SCROLLATOR
        plugin.show = function() {
            jQuerythisScrollatorLaneHolder.show();
        };


        // REMOVE PLUGIN AND REVERT INPUT ELEMENT TO ORIGINAL STATE
        plugin.destroy = function() {
            jQuerysourceElement.removeClass('scrollator');
            jQuery.removeData(sourceElement, 'scrollator');
            if (jQuerysourceElement.prop('tagName') == 'BODY') {
                jQueryhtml.unbind('mousewheel DOMMouseScroll', mouseWheelEvent);
                jQueryhtml.unbind('mousemove', mouseMoveEvent);
            } else {
                jQuerysourceElement.unbind('mousewheel DOMMouseScroll', mouseWheelEvent);
                jQuerysourceElement.unbind('mousemove', mouseMoveEvent);
            }
            jQuery(window).unbind('mouseup', windowMouseUpEvent);
            jQuery(window).unbind('mousemove', windowMouseMoveEvent);
            jQuery(window).unbind('keydown', windowKeyDownEvent);
            jQuerythisScrollatorLaneHolder.remove();
            var i = Scrollator.scrollatorElementsStack.length;
            while (i--) {
                if (Scrollator.scrollatorElementsStack[i] === plugin) {
                    Scrollator.scrollatorElementsStack.splice(i, 1);
                }
            }
            if (jQuerymainScrollatorHolder.children().length === 0) {
                jQuerymainScrollatorHolder.remove();
                jQuerymainScrollatorHolder = null;
            }
        };

        // Initialize plugin
        plugin.init();
    };

    jQuery.fn.scrollator = function(options) {
        options = options !== undefined ? options : {};
        return this.each(function() {
            if (!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|ARM|Touch|Opera Mini/i.test(navigator.userAgent)) {
                if (typeof(options) === 'object') {
                    if (jQuery(this).data('scrollator') === undefined) {
                        var plugin = new jQuery.scrollator(this, options);
                        Scrollator.scrollatorElementsStack.push(plugin);
                        jQuery(this).data('scrollator', plugin);
                    }
                } else if (jQuery(this).data('scrollator')[options]) {
                    jQuery(this).data('scrollator')[options].apply(this, Array.prototype.slice.call(arguments, 1));
                } else {
                    jQuery.error('Method ' + options + ' does not exist in jQuery.scrollator');
                }
            }
        });
    };
	
	  jQuery('.scrollator').each(function() {
        var jQuerythis = jQuery(this);
        var options = {};
        jQuery.each(jQuerythis.data(), function(key, value) {
            if (key.substring(0, 10) == 'scrollator') {
                options[key.substring(10, 11).toLowerCase() + key.substring(11)] = value;
            }
        });
        jQuerythis.scrollator(options);
    });

}(jQuery));

jQuery(window).load(function() {
    Scrollator.refreshAll();
});