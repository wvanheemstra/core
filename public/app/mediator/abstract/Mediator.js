/*
 Copyright (c) 2013 [FlowMVC Contributors](mailto:admin@webappsolution.com)

 WASI FlowMVC is free software: you can redistribute it and/or modify
 it under the terms of the GNU General Public License as published by
 the Free Software Foundation, either version 3 of the License, or
 (at your option) any later version.

 WASI FlowMVC is distributed in the hope that it will be useful,
 but WITHOUT ANY WARRANTY; without even the implied warranty of
 MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 GNU General Public License for more details.

 You should have received a copy of the GNU General Public License
 along with WASI FlowMVC.  If not, see <http://www.gnu.org/licenses/>.
 */

/**
 * The abstract mediator provides base functionality for all CafeTownsend mediators.
 *
 * Most notable is the navigate method which broadcasts a navigate event that dives the screen/view creation
 * and show/hide.
 */
Ext.define("Core.mediator.abstract.Mediator", {
    extend: "FlowMVC.mvc.mediator.AbstractMediator",

    requires: [
        "Core.event.navigation.Event"
    ],

    inject: [
        "logger"
    ],

    /**
     * Broadcasts a navigate event on application-level event bus.
     *
     * @param {String} action   The action used to map the next navigation sequence.
     */
    navigate: function(action) {
        this.logger.debug("navigate");

        var evt = Ext.create("Core.event.navigation.Event", Core.event.navigation.Event.NAVIGATE, action);
        this.eventBus.dispatchGlobalEvent(evt);
    }

});

