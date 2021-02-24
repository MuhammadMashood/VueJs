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
        text: '',
        gate: false,
        students: ['Muhammad', 'Arshad', 'qasim', 'Yaseen'],
        players:[
            {name:'Qasim' ,age:22},
            {name:"Fahad" ,age:18},
            {name:'Murtazaa' ,age: 50},
        ]

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