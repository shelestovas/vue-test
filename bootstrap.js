
window._ = require('lodash');

try {
    window.$ = window.jQuery = require('./admin/jquery.min');

    require('./admin/bootstrap.bundle.min');
    require('./admin/blockui.min');
    require('./admin/uniform.min');
} catch (e) {}

window.axios = require('axios');

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

/*
if (token) {
    window.axios.defaults.headers.common['X-CSRF-TOKEN'] = token.content;
} else {
    console.error('CSRF token not found: https://laravel.com/docs/csrf#csrf-x-csrf-token');
}*/

