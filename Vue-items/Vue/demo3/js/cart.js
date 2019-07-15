var vm = new Vue({
    el: '#app',
    data: {
    },
    fliters: {

    },
    mounted: function () {
        this.cartView();
    },
    methods: {
        cartView: function () {
           // var _this = this;
            this.$http.get("cartData.json").then(function (res) {

            });
        }
    }
});