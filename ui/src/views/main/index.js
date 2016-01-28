'use strict';
module.exports = function (ngModule) {
    require('./main.ctrl')(ngModule);
    require('./main.svc')(ngModule);
};