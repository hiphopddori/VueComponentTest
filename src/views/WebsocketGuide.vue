<template>

    <div class="wrapper">
        <div>
            <v-btn color="info"  v-on:click="connect">Connect</v-btn>
            <v-btn color="info"  v-on:click="disconnect">Disconnect</v-btn>
        </div>
        <div>
            <input type="text"  v-model="send_message" class="w250" placeholder="Message..."/>
            <v-btn color="info"  v-on:click="send">Send</v-btn>
            
            
        </div>
    </div>
</template>

<script>


import SockJS from "sockjs-client";
import Stomp from "webstomp-client";

export default {
    data() {
        return {
            received_messages: [],
            send_message: null,
            connected: false
        };
    },
    mounted(){
        this.connect();
    },
    methods: {
        send() {
            console.log("Send message:" + this.send_message);
            if (this.stompClient && this.stompClient.connected) {
                const msg = { name: this.send_message };
                console.log(JSON.stringify(msg));
                this.stompClient.send("/app/hello", JSON.stringify(msg), {});
            }
        },
        connect(){
            this.socket = new SockJS("http://localhost:8080/gs-guide-websocket");
            this.stompClient = Stomp.over(this.socket);
            this.stompClient.connect({},
                frame => {
                    this.connected = true;
                    console.log(frame);
                    this.stompClient.subscribe("/topic/greetings", tick => {
                        console.log(tick);
                        this.received_messages.push(JSON.parse(tick.body).content);
                    });
                },
                error => {
                    console.log(error);
                    this.connected = false;
                }
            );
        },
        disconnect() {
            if (this.stompClient) {
                this.stompClient.disconnect();
            }
            this.connected = false;
        },
        tickleConnection() {
            this.connected ? this.disconnect() : this.connect();
        }
    },
}
</script>

<style>
    .w250{width:250px;}
    .wrapper{display: grid}
    input[type="text"] {height:35px;border-style:groove;margin-left:5px;}
</style>
