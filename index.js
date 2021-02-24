var app = new Vue({
    el: '#app',

    data: {
        temp: 0,
        
    },

    methods: {
        inc:function(d){
            this.temp++
        },
        dec:function(){
            this.temp--;
        },
    }
})