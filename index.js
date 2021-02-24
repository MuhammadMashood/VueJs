var app = new Vue({
    el: '#app',

    data: {
        status: true,
        
        
    },
    methods: {

    }

    
})

var app = new Vue({
    el: '#box',

    data: {
        temp: 0,
        message: 'Hi I am a message',

    },
    methods: {
        inc:function(){
            this.temp++;
        },
        dec:function(){
            this.temp--;
        },
        
    }

})