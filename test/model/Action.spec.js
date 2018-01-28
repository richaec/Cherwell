/**
 * Cherwell Rest API
 * <a href=\"../../index.html\">Cherwell Rest API Documentation</a><br>Select version options from the header drop-down list (to the left of the Client Key box). Then, click Explore to view different versions of operations.
 *
 * OpenAPI spec version: 9.2.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.0-SNAPSHOT
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.CherwellRestApi);
  }
}(this, function(expect, CherwellRestApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new CherwellRestApi.Action();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('Action', function() {
    it('should create an instance of Action', function() {
      // uncomment below and update the code to test Action
      //var instance = new CherwellRestApi.Action();
      //expect(instance).to.be.a(CherwellRestApi.Action);
    });

    it('should have the property actionCommand (base name: "actionCommand")', function() {
      // uncomment below and update the code to test the property actionCommand
      //var instance = new CherwellRestApi.Action();
      //expect(instance).to.be();
    });

    it('should have the property actionType (base name: "actionType")', function() {
      // uncomment below and update the code to test the property actionType
      //var instance = new CherwellRestApi.Action();
      //expect(instance).to.be();
    });

    it('should have the property alwaysTextAndImage (base name: "alwaysTextAndImage")', function() {
      // uncomment below and update the code to test the property alwaysTextAndImage
      //var instance = new CherwellRestApi.Action();
      //expect(instance).to.be();
    });

    it('should have the property beginGroup (base name: "beginGroup")', function() {
      // uncomment below and update the code to test the property beginGroup
      //var instance = new CherwellRestApi.Action();
      //expect(instance).to.be();
    });

    it('should have the property childActions (base name: "childActions")', function() {
      // uncomment below and update the code to test the property childActions
      //var instance = new CherwellRestApi.Action();
      //expect(instance).to.be();
    });

    it('should have the property dependencies (base name: "dependencies")', function() {
      // uncomment below and update the code to test the property dependencies
      //var instance = new CherwellRestApi.Action();
      //expect(instance).to.be();
    });

    it('should have the property displayText (base name: "displayText")', function() {
      // uncomment below and update the code to test the property displayText
      //var instance = new CherwellRestApi.Action();
      //expect(instance).to.be();
    });

    it('should have the property enabled (base name: "enabled")', function() {
      // uncomment below and update the code to test the property enabled
      //var instance = new CherwellRestApi.Action();
      //expect(instance).to.be();
    });

    it('should have the property galleryImage (base name: "galleryImage")', function() {
      // uncomment below and update the code to test the property galleryImage
      //var instance = new CherwellRestApi.Action();
      //expect(instance).to.be();
    });

    it('should have the property helpText (base name: "helpText")', function() {
      // uncomment below and update the code to test the property helpText
      //var instance = new CherwellRestApi.Action();
      //expect(instance).to.be();
    });

    it('should have the property loginEnabledMode (base name: "loginEnabledMode")', function() {
      // uncomment below and update the code to test the property loginEnabledMode
      //var instance = new CherwellRestApi.Action();
      //expect(instance).to.be();
    });

    it('should have the property loginVisibilityMode (base name: "loginVisibilityMode")', function() {
      // uncomment below and update the code to test the property loginVisibilityMode
      //var instance = new CherwellRestApi.Action();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new CherwellRestApi.Action();
      //expect(instance).to.be();
    });

    it('should have the property parameters (base name: "parameters")', function() {
      // uncomment below and update the code to test the property parameters
      //var instance = new CherwellRestApi.Action();
      //expect(instance).to.be();
    });

    it('should have the property visible (base name: "visible")', function() {
      // uncomment below and update the code to test the property visible
      //var instance = new CherwellRestApi.Action();
      //expect(instance).to.be();
    });

  });

}));