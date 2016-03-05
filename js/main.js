var data = {
    /* This is the model. */
    sourceImage: 'https://upload.wikimedia.org/wikipedia/commons/d/d4/Gin_and_Tonic_with_ingredients.jpg',
    // default params
    brightness: 0, // -10 - 10
    contrast: 0, // -10 - 10
    opacity: 100, // 0 - 100
    grayscale: false
};

var viewModel = {
    /* This is the controller. */

    // adjustable user params
    brightness: ko.observable(),
    contrast: ko.observable(),
    opacity: ko.observable(),
    grayscale: ko.observable(),
    image: ko.observable(),

    setBrightness: function() {
        /*
            sets the brightness
        */
        // reset the opacity to 100%
        this.opacity(100);
        this.setOpacity();

        var opacity;

        // determine tint or shade:
        // tint is > 0; shade is < 0
        if (this.brightness() > 0) {
            opacity = (10 - this.brightness()) * 0.1;

            // set the background as white and fade the image
            $('.image_holder').css('background', 'white');
            $('.source_image').css('opacity', opacity);

        } else {
            opacity = 1 + (this.brightness() * 0.1);

            // set the background as black and fade the image
            $('.image_holder').css('background', 'black');
            $('.source_image').css('opacity', opacity);
        }
    },

    setContrast: function() {
        /*
            sets the contrast
        */
        // TODO
        console.log(this.contrast());
    },

    setOpacity: function() {
        /*
            sets the opacity
        */

        // Because CSS sets opacity as a floating
        // point number bewteen 0 and 1 (ie: 0.5),
        // we need to humanize that a bit for the UI.
        // Therefore:
        var opacity = this.opacity() / 100;

        $('.image_holder').removeClass('has_brightness');
        $('.source_image').css('opacity', opacity);
    },

    setGrayscale: function() {
        /*
            set to grayscale
        */
        if (!this.grayscale()) {
            $('.source_image').addClass('is_grayscale');
            this.grayscale(true);
        } else {
            $('.source_image').removeClass('is_grayscale');
            this.grayscale(false);
        }
    },

    init: function() {
        /*
            initially defines the observables
            with the default data from the model
        */
        this.brightness(data.brightness);
        this.contrast(data.contrast);
        this.opacity(data.opacity);
        this.grayscale(data.grayscale);
        this.image(data.sourceImage);
    }
};

ko.applyBindings(viewModel);
viewModel.init();
