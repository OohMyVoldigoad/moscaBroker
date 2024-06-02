// Berperan sebagai MQTT publisher
var mqtt = require('mqtt')
var client = mqtt.connect('mqtt://localhost:1234')
var topic = 'building/temperature'
var message = 'Hello World!'

client.on('connect', ()=>{
    setInterval(()=>{
        client.publish(topic, message)
        console.log('Message sent!', message)
    }, 5000)
})