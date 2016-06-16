var Controller = window.app.Controller
var getModelStub = window.stubs.getModelStub
var getViewStub = window.stubs.getViewStub

describe('controller', () => {
  it('can be created', () => {
    var view = getViewStub()
    var model = getModelStub()
    var controller = new Controller(model, view)
    expect(controller).to.exist
  })
})
