(function(root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['superagent-bluebird-promise','fs','lodash','path',], factory);
    } else if (typeof module === 'object' && module.exports) {
        // CommonJS-like environments that support module.exports, like Node.
        module.exports = factory(require('superagent-bluebird-promise'), require('fs'), require('lodash'), require('path'));
    }
}(this, function(superagent, fs, lodash, path) {
    'use strict';

    /**
     * @module ApiClient
     * @version 0.0.2
     */

    var exports = function() {

        this.datestarted = Date();
        this.config = this.fetchConfig();
        this.tokenInfo = this.getSoftwareAgentToken();

    };

    exports.prototype.fetchConfig = function () {
        try {
            var configFile = path.join(process.env.HOME, '.ddsnodeclient');
            var configString = fs.readFileSync(configFile);
            var json = JSON.parse(configString);
            this.validateConfigJson(json);
            return(json);
        } catch (e) {
            throw new Error(e);
        }
    };

    exports.prototype.validateConfigJson = function(json) {
        if (lodash.difference(['agent_key','user_key','api_url'],Object.keys(json)).length != 0) {
            throw new Error('Config file error. Check the file: ' + path.join(process.env.HOME, '.ddsnodeclient') +
                '.  Ensure that agent_key, user_key, and api_url keys are present.');
        }
    }

    exports.prototype.paramToString = function(param) {
        if (param == undefined || param == null) {
            return '';
        }
        if (param instanceof Date) {
            return param.toJSON();
        }
        return param.toString();
    };

    /**
     * Builds full URL by appending the given path to the base URL and replacing path parameter place-holders with parameter values.
     * NOTE: query parameters are not handled here.
     * @param {String} path The path to append to the base URL.
     * @param {Object} pathParams The parameter values to append.
     * @returns {String} The encoded path with parameter values substituted.
     */
    exports.prototype.buildUrl = function(path, pathParams) {
        if (!path.match(/^\//)) {
            path = '/' + path;
        }
        var url = this.config.api_url + path;
        var _this = this;
        url = url.replace(/\{([\w-]+)\}/g, function(fullMatch, key) {
            var value;
            if (pathParams.hasOwnProperty(key)) {
                value = _this.paramToString(pathParams[key]);
            } else {
                value = fullMatch;
            }
            return encodeURIComponent(value);
        });
        return url;
    };

    exports.prototype.getSoftwareAgentToken = function() {
        var request = superagent("POST", this.buildUrl('/api/v1/software_agents/api_token'));
        request.send({agent_key: this.config.agent_key, user_key: this.config.user_key})
        request.set('Accept', 'application/json')
        return request.promise();
    };

    return exports;
}));