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
    instance = new CherwellRestApi.SearchesApi();
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

  describe('SearchesApi', function() {
    describe('searchesGetQuickSearchConfigurationForBusObsV1', function() {
      it('should call searchesGetQuickSearchConfigurationForBusObsV1 successfully', function(done) {
        //uncomment below and update the code to test searchesGetQuickSearchConfigurationForBusObsV1
        //instance.searchesGetQuickSearchConfigurationForBusObsV1(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('searchesGetQuickSearchConfigurationForBusObsWithViewRightsV1', function() {
      it('should call searchesGetQuickSearchConfigurationForBusObsWithViewRightsV1 successfully', function(done) {
        //uncomment below and update the code to test searchesGetQuickSearchConfigurationForBusObsWithViewRightsV1
        //instance.searchesGetQuickSearchConfigurationForBusObsWithViewRightsV1(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('searchesGetQuickSearchResultsV1', function() {
      it('should call searchesGetQuickSearchResultsV1 successfully', function(done) {
        //uncomment below and update the code to test searchesGetQuickSearchResultsV1
        //instance.searchesGetQuickSearchResultsV1(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('searchesGetQuickSearchSpecificResultsV1', function() {
      it('should call searchesGetQuickSearchSpecificResultsV1 successfully', function(done) {
        //uncomment below and update the code to test searchesGetQuickSearchSpecificResultsV1
        //instance.searchesGetQuickSearchSpecificResultsV1(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('searchesGetQuickSearchSpecificResultsV2', function() {
      it('should call searchesGetQuickSearchSpecificResultsV2 successfully', function(done) {
        //uncomment below and update the code to test searchesGetQuickSearchSpecificResultsV2
        //instance.searchesGetQuickSearchSpecificResultsV2(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('searchesGetSearchItemsByAssociationScopeScopeOwnerFolderV1', function() {
      it('should call searchesGetSearchItemsByAssociationScopeScopeOwnerFolderV1 successfully', function(done) {
        //uncomment below and update the code to test searchesGetSearchItemsByAssociationScopeScopeOwnerFolderV1
        //instance.searchesGetSearchItemsByAssociationScopeScopeOwnerFolderV1(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('searchesGetSearchItemsByAssociationScopeScopeOwnerFolderV2', function() {
      it('should call searchesGetSearchItemsByAssociationScopeScopeOwnerFolderV2 successfully', function(done) {
        //uncomment below and update the code to test searchesGetSearchItemsByAssociationScopeScopeOwnerFolderV2
        //instance.searchesGetSearchItemsByAssociationScopeScopeOwnerFolderV2(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('searchesGetSearchItemsByAssociationScopeScopeOwnerV1', function() {
      it('should call searchesGetSearchItemsByAssociationScopeScopeOwnerV1 successfully', function(done) {
        //uncomment below and update the code to test searchesGetSearchItemsByAssociationScopeScopeOwnerV1
        //instance.searchesGetSearchItemsByAssociationScopeScopeOwnerV1(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('searchesGetSearchItemsByAssociationScopeScopeOwnerV2', function() {
      it('should call searchesGetSearchItemsByAssociationScopeScopeOwnerV2 successfully', function(done) {
        //uncomment below and update the code to test searchesGetSearchItemsByAssociationScopeScopeOwnerV2
        //instance.searchesGetSearchItemsByAssociationScopeScopeOwnerV2(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('searchesGetSearchItemsByAssociationScopeV1', function() {
      it('should call searchesGetSearchItemsByAssociationScopeV1 successfully', function(done) {
        //uncomment below and update the code to test searchesGetSearchItemsByAssociationScopeV1
        //instance.searchesGetSearchItemsByAssociationScopeV1(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('searchesGetSearchItemsByAssociationScopeV2', function() {
      it('should call searchesGetSearchItemsByAssociationScopeV2 successfully', function(done) {
        //uncomment below and update the code to test searchesGetSearchItemsByAssociationScopeV2
        //instance.searchesGetSearchItemsByAssociationScopeV2(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('searchesGetSearchItemsByAssociationV1', function() {
      it('should call searchesGetSearchItemsByAssociationV1 successfully', function(done) {
        //uncomment below and update the code to test searchesGetSearchItemsByAssociationV1
        //instance.searchesGetSearchItemsByAssociationV1(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('searchesGetSearchItemsByAssociationV2', function() {
      it('should call searchesGetSearchItemsByAssociationV2 successfully', function(done) {
        //uncomment below and update the code to test searchesGetSearchItemsByAssociationV2
        //instance.searchesGetSearchItemsByAssociationV2(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('searchesGetSearchItemsV1', function() {
      it('should call searchesGetSearchItemsV1 successfully', function(done) {
        //uncomment below and update the code to test searchesGetSearchItemsV1
        //instance.searchesGetSearchItemsV1(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('searchesGetSearchItemsV2', function() {
      it('should call searchesGetSearchItemsV2 successfully', function(done) {
        //uncomment below and update the code to test searchesGetSearchItemsV2
        //instance.searchesGetSearchItemsV2(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('searchesGetSearchResultsAdHocV1', function() {
      it('should call searchesGetSearchResultsAdHocV1 successfully', function(done) {
        //uncomment below and update the code to test searchesGetSearchResultsAdHocV1
        //instance.searchesGetSearchResultsAdHocV1(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('searchesGetSearchResultsByIdV1', function() {
      it('should call searchesGetSearchResultsByIdV1 successfully', function(done) {
        //uncomment below and update the code to test searchesGetSearchResultsByIdV1
        //instance.searchesGetSearchResultsByIdV1(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('searchesGetSearchResultsByNameV1', function() {
      it('should call searchesGetSearchResultsByNameV1 successfully', function(done) {
        //uncomment below and update the code to test searchesGetSearchResultsByNameV1
        //instance.searchesGetSearchResultsByNameV1(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('searchesGetSearchResultsExportAdHocV1', function() {
      it('should call searchesGetSearchResultsExportAdHocV1 successfully', function(done) {
        //uncomment below and update the code to test searchesGetSearchResultsExportAdHocV1
        //instance.searchesGetSearchResultsExportAdHocV1(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('searchesGetSearchResultsExportByIdV1', function() {
      it('should call searchesGetSearchResultsExportByIdV1 successfully', function(done) {
        //uncomment below and update the code to test searchesGetSearchResultsExportByIdV1
        //instance.searchesGetSearchResultsExportByIdV1(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('searchesGetSearchResultsExportByNameV1', function() {
      it('should call searchesGetSearchResultsExportByNameV1 successfully', function(done) {
        //uncomment below and update the code to test searchesGetSearchResultsExportByNameV1
        //instance.searchesGetSearchResultsExportByNameV1(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));