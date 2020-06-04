require('./bootstrap');

window.Vue = require('vue');

require('admin-lte/plugins/overlayScrollbars/js/jquery.overlayScrollbars.min.js');

const app = new Vue({
    el: '#app',
    router,               // <-- register router with Vue
    render: (h) => h(App) // <-- render App component
});
