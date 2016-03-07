var data = {
    /* This is the model. */
    sourceImage: 'https://upload.wikimedia.org/wikipedia/commons/d/d4/Gin_and_Tonic_with_ingredients.jpg',
    // default params
    brightness: 0, // -10 - 10
    coolness: 0, // 0 - 10
    warmness: 0, // 0 - 10
    opacity: 100, // 0 - 100
    grayscale: false,
    lastUsed: '' // the last setting adjusted
};

var viewModel = {
    /* This is the controller. */

    // adjustable user params
    brightness: ko.observable(),
    coolness: ko.observable(),
    warmness: ko.observable(),
    opacity: ko.observable(),
    grayscale: ko.observable(),
    image: ko.observable(),
    lastUsed: ko.observable(),

    setBrightness: function() {
        /*
            sets the brightness
        */

        this.lastUsed('brightness');
        this.resetOthers(this.lastUsed());

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

    setCoolness: function() {
        /*
            sets the coolness
        */

        this.lastUsed('coolness');
        this.resetOthers(this.lastUsed());

        var opacity = (10 - this.coolness()) * 0.1;

        // set the background as blue and fade the image
        // This is not really coolness but is only being
        // used for the purposes of the demo.
        $('.image_holder').css('background', 'blue');
        $('.source_image').css('opacity', opacity);
    },

    setWarmness: function() {
        /*
            sets the warmness
        */

        this.lastUsed('warmness');
        this.resetOthers(this.lastUsed());

        var opacity = (10 - this.warmness()) * 0.1;

        // set the background as blue and fade the image
        // This is not really warmness but is only being
        // used for the purposes of the demo.
        $('.image_holder').css('background', 'orange');
        $('.source_image').css('opacity', opacity);
    },

    setOpacity: function() {
        /*
            sets the opacity
        */

        this.lastUsed('opacity');
        this.resetOthers(this.lastUsed());

        // Because CSS sets opacity as a floating
        // point number bewteen 0 and 1 (ie: 0.5),
        // we need to humanize that a bit for the UI.
        // Therefore:
        var opacity = this.opacity() / 100;

        // reset the background
        $('.image_holder').css('background', 'none');
        $('.source_image').css('opacity', opacity);
    },

    setGrayscale: function() {
        /*
            set to grayscale
        */

        this.lastUsed('grayscale');

        if (!this.grayscale()) {
            $('.source_image').addClass('is_grayscale');
            this.grayscale(true);
        } else {
            $('.source_image').removeClass('is_grayscale');
            this.grayscale(false);
        }
    },

    resetOthers: function(last) {
        /*
            Resets all of the settings
            except for the current setting.
            Does not influence grayscale.
        */

        if (last !== 'opacity') {
            this.opacity(100);
        } else {
            this.brightness(0);
            this.coolness(0);
            this.warmness(0);
        }

        if (last === 'brightness') {
            this.coolness(0);
            this.warmness(0);
        } else if (last === 'warmness') {
            this.brightness(0);
            this.coolness(0);
        } else {
            this.brightness(0);
            this.warmness(0);
        }
    },

    init: function() {
        /*
            initially defines the observables
            with the default data from the model
        */
        this.brightness(data.brightness);
        this.coolness(data.coolness);
        this.warmness(data.warmness);
        this.opacity(data.opacity);
        this.grayscale(data.grayscale);
        this.image(data.sourceImage);
        this.lastUsed(data.lastUsed);
    }
};

ko.applyBindings(viewModel);
viewModel.init();
