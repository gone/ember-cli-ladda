'use strict';
module.exports = {
    name: 'ember-cli-ladda',
    included: function included(app) {
        this._super.included(app);
        app.import(app.bowerDirectory + '/ladda/dist/spin.min.js');
        app.import(app.bowerDirectory + '/ladda/dist/ladda.min.css');
        app.import(app.bowerDirectory + '/ladda/dist/ladda.min.js');
        app.import(app.bowerDirectory + '/ladda/dist/ladda.jquery.min.js');
    },
};
