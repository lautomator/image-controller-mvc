var data = {

    // adjustable params
    brightness: 10, // 0 - 10
    contrast: 5, // 0 - 10
    opacity: 80 // 0 - 100
};

var viewModel = {
    // defines dynamic values
    siteData: ko.observableArray(),
    brightness: ko.observable(),
    contrast: ko.observable(),
    opacity: ko.observable(),

    init: function() {
        // define the site data
        this.siteData(data);
        this.brightness(data.brightness);
        this.contrast(data.contrast);
        this.opacity(data.opacity);
    }
};

ko.applyBindings(viewModel);
viewModel.init();