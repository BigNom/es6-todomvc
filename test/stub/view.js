$on(window, 'load', function() {
  'use strict'
  window.stubs = window.stubs || {}
  window.stubs.getViewStub = function getViewStub() {
    return {
      bind: function() {}
    }
  }
})
