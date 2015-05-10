/**
 * @author Kate
 */
if (typeof define !== 'function') { var define = require('amdefine')(module) }

define(["../utilities.js"], function(tracery) {

    //tracery = require('tracery');
    
    


    var Rule = function(raw) {
        this.raw = raw;
        this.sections = tracery.parseRule(raw);

    };

    Rule.prototype.getParsed = function() {
        if (!this.sections)
            this.sections = tracery.parseRule(raw);

        return this.sections;
    };

    Rule.prototype.toString = function() {
        return this.raw;
    };

    Rule.prototype.toJSONString = function() {
        return this.raw;
    };

    return Rule;

});
