var data = {
    /* This is the model. */
    sourceImage: 'https://upload.wikimedia.org/wikipedia/commons/d/d4/Gin_and_Tonic_with_ingredients.jpg',
    // default params
    brightness: 50, // 0 - 100
    contrast: 50, // 0 - 100
    opacity: 10 // 0 - 10
};

var viewModel = {
    /* This is the controller. */

    // adjustable user params
    siteData: ko.observableArray(),
    brightness: ko.observable(),
    contrast: ko.observable(),
    opacity: ko.observable(),
    image: ko.observable(),

    // note: only one filter will work at a time
    setBrightness: function() {
        /*
            sets the brightness
        */
        console.log('brightness:', this.brightness());
    },

    setContrast: function() {
        /*
            sets the contrast
        */
        console.log('contrast:', this.contrast());
    },

    setOpacity: function() {
        /*
            sets the opacity
        */

        // Because CSS sets opacity as a floating
        // point number bewteen 0 and 1 (ie: 0.5),
        // we need to humanize that a bit for the UI.
        // Therefore:
        var opacity = this.opacity() / 10;

        $('.source_image').css('opacity', opacity);
    },

    init: function() {
        /*
            initially defines the observables
            with the default data from the model
        */
        this.brightness(data.brightness);
        this.contrast(data.contrast);
        this.opacity(data.opacity);
        this.image(data.sourceImage);
    }
};

ko.applyBindings(viewModel);
viewModel.init();