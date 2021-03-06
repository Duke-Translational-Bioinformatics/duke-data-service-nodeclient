/**
 * Duke Data Service API.
 * REST API to the Duke Data Service. Some requests require Authentication.
 *
 * OpenAPI spec version: 0.0.2
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.DukeDataServiceApi) {
      root.DukeDataServiceApi = {};
    }
    root.DukeDataServiceApi.ActivitiesApi = factory(root.DukeDataServiceApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * Activities service.
   * @module api/ActivitiesApi
   * @version 0.0.2
   */

  /**
   * Constructs a new ActivitiesApi. 
   * @alias module:api/ActivitiesApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the deleteApiV1ActivitiesId operation.
     * @callback module:api/ActivitiesApi~deleteApiV1ActivitiesIdCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a Activity
     * Delete a Activity  Marks an activity as being deleted.
     * @param {String} id Activity UUID
     * @param {module:api/ActivitiesApi~deleteApiV1ActivitiesIdCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteApiV1ActivitiesId = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling deleteApiV1ActivitiesId";
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/api/v1/activities/{id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getApiV1Activities operation.
     * @callback module:api/ActivitiesApi~getApiV1ActivitiesCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List activities
     * List activities  Lists all activities
     * @param {module:api/ActivitiesApi~getApiV1ActivitiesCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.getApiV1Activities = function(callback) {
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/api/v1/activities', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getApiV1ActivitiesId operation.
     * @callback module:api/ActivitiesApi~getApiV1ActivitiesIdCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * View activity details
     * View activity details  Returns the activity details for a given UUID.
     * @param {String} id Activity UUID
     * @param {module:api/ActivitiesApi~getApiV1ActivitiesIdCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.getApiV1ActivitiesId = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling getApiV1ActivitiesId";
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/api/v1/activities/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the postApiV1Activities operation.
     * @callback module:api/ActivitiesApi~postApiV1ActivitiesCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a activity
     * Create a activity  Creates an activity for the given payload.
     * @param {String} name The Name of the activity
     * @param {Object} opts Optional parameters
     * @param {String} opts.description The Description of the activity
     * @param {Date} opts.startedOn DateTime when the activity started
     * @param {Date} opts.endedOn DateTime when the activity ended
     * @param {module:api/ActivitiesApi~postApiV1ActivitiesCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.postApiV1Activities = function(name, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'name' is set
      if (name == undefined || name == null) {
        throw "Missing the required parameter 'name' when calling postApiV1Activities";
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
        'name': name,
        'description': opts['description'],
        'started_on': opts['startedOn'],
        'ended_on': opts['endedOn']
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/api/v1/activities', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the putApiV1ActivitiesId operation.
     * @callback module:api/ActivitiesApi~putApiV1ActivitiesIdCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update Activity
     * Update Activity  Updates the activity details for a given UUID.
     * @param {String} id Activity UUID
     * @param {Object} opts Optional parameters
     * @param {String} opts.name The Name of the activity
     * @param {String} opts.description The Description of the activity
     * @param {Date} opts.startedOn DateTime when the activity started
     * @param {Date} opts.endedOn DateTime when the activity ended
     * @param {module:api/ActivitiesApi~putApiV1ActivitiesIdCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.putApiV1ActivitiesId = function(id, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling putApiV1ActivitiesId";
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
        'name': opts['name'],
        'description': opts['description'],
        'started_on': opts['startedOn'],
        'ended_on': opts['endedOn']
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/api/v1/activities/{id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
