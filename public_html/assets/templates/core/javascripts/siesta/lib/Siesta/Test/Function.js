/*

Siesta 1.1.8
Copyright(c) 2009-2013 Bryntum AB
http://bryntum.com/contact
http://bryntum.com/products/siesta/license

*/
/**
@class Siesta.Test.Function

This is a mixin, with helper methods for testing functionality relating to DOM elements. This mixin is consumed by {@link Siesta.Test}

*/
Role('Siesta.Test.Function', {
    
    methods : {
         /**
         * This assertion passes if the function is called at least one time during the test life span.
         * 
         * @param {Function/String} fn The function itself or the name of the function on the host object (2nd argument)
         * @param {Object} host The "owner" of the method
         * @param {String} desc The description of the assertion.
         */
        isCalled : function(fn, obj, desc) {
            this.isCalledNTimes(fn, obj, 1, desc, true);
        },

        /**
         * This assertion passes if the function is called exactly (n) times during the test life span.
         * 
         * @param {Function/String} fn The function itself or the name of the function on the host object (2nd argument)
         * @param {Object} host The "owner" of the method
         * @param {Number} n The expected number of calls
         * @param {String} desc The description of the assertion.
         */
        isCalledNTimes : function(fn, obj, n, desc, isGreaterEqual) {
            var me      = this,
                prop    = typeof fn === "string" ? fn : me.getPropertyName(obj, fn);
            desc = desc ? (desc + ' ') : '';

            this.on('beforetestfinalizeearly', function () {
                if (counter === n || (isGreaterEqual && counter > n)) {
                    me.pass(desc || (prop + ' method was called exactly ' + n + ' times'));
                } else {
                    me.fail(desc || prop, {
                        assertionName       : 'isCalledNTimes ' + prop, 
                        got                 : counter, 
                        need                : n ,
                        needDesc            : ("Need " + (isGreaterEqual ? 'at least ' : 'exactly '))
                    });
                }
            });

            var counter = 0;
            fn = obj[prop];
            obj[prop] = function () { counter++; fn.apply(obj, arguments); };
        },

        /**
         * This assertion passes if the function is not called during the test life span.
         * 
         * @param {Function/String} fn The function itself or the name of the function on the host object (2nd argument)
         * @param {Object} host The "owner" of the method
         * @param {Number} n The expected number of calls
         * @param {String} desc The description of the assertion.
         */
        isntCalled : function(fn, obj, desc) {
            this.isCalledNTimes(fn, obj, 0, desc);
        },

        getPropertyName : function(host, obj) {
            for (var o in host) {
                if (host[o] === obj) return o;
            }
        },

        /**
         * This assertion passes when the supplied function is called exactly (n) times during the test life span.
         * The `className` parameter can be supplied as a class constructor function or as a string, representing the class
         * name. In the latter case the `class` will be eval'ed to get a reference to the class constructor.
         *
         * This assertion is useful when testing for example an Ext JS class where event listeners are added during
         * class instantiation time, which means you need to observe the prototype method before instantiation.
         *
         * @param {Function/String} fn The function itself or the name of the function on the class (2nd argument)
         * @param {Function/String} className The constructor function or the name of the class that contains the method
         * @param {Number} n The expected number of calls
         * @param {String} desc The description of the assertion
         */
        methodIsCalledNTimes: function(fn, className, n, desc, isGreaterEqual){
            var me = this,
                prop,
                obj,
                counter = 0;

            desc = desc ? (desc + ' ') : '';
            try {
                if (me.typeOf(className) == 'String') className = me.global.eval(className)
            } catch (e) {
                me.fail(desc, {
                    assertionName       : 'isMethodCalled',
                    annotation          : "Exception [" + e + "] caught, while evaluating the class name [" + className + "]"
                })

                return
            }

            obj = className.prototype;
            prop = typeof fn === "string" ? fn : me.getPropertyName(obj, fn);

            me.on('beforetestfinalizeearly', function () {
                if (counter === n || (isGreaterEqual && counter > n)) {
                    me.pass(desc || (prop + ' method was called exactly ' + n + ' times'));
                } else {
                    me.fail(desc || prop, {
                        assertionName       : 'isCalledNTimes ' + prop,
                        got                 : counter,
                        need                : n ,
                        needDesc            : ("Need " + (isGreaterEqual ? 'at least ' : 'exactly '))
                    });
                }
            });

            fn = obj[prop];
            obj[prop] = function () { counter++; fn.apply(obj, arguments); };
        },

        /**
         * This assertion passes if the class method is called at least one time during the test life span.
         *
         * @param {Function/String} fn The function itself or the name of the function on the class (2nd argument)
         * @param {Function/String} className The class constructor function or name of the class that contains the method
         * @param {String} desc The description of the assertion.
         */
        methodIsCalled : function(fn, className, desc) {
            this.methodIsCalledNTimes(fn, className, 1, desc, true);
        },

        /**
         * This assertion passes if the class method is not called during the test life span.
         *
         * @param {Function/String} fn The function itself or the name of the function on the class (2nd argument)
         * @param {Function/String} className The class constructor function or name of the class that contains the method
         * @param {String} desc The description of the assertion.
         */
        methodIsntCalled : function(fn, className, desc) {
            this.methodIsCalledNTimes(fn, className, 0, desc);
        }
    }
});
