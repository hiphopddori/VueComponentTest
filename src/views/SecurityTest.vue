<template>
    
    <div>
        <v-card>
            <v-btn color="info"  v-on:click="login">Login</v-btn>
            <v-btn color="info"  v-on:click="restCall('ADMIN')">AdminRestCall</v-btn>
            <v-btn color="info"  v-on:click="restCall('USER')">UserRestCall</v-btn>
            <v-btn color="info"  v-on:click="restCall('ALL')">PermitAllRestCall</v-btn>
            <v-spacer></v-spacer>
            <v-btn color="info" v-on:click="logout" v-show="isLogind=true">Logout</v-btn>
        </v-card>

    </div>

</template>

<script>
export default {
    data(){
        return{
            isLogind:false
        }
    }

    ,methods:{
        login(){
            let param = {loginId:'kox501',password:'2002ek78'};
            this.$http.post('/api/user/login',param,{ headers:{'Content-type': 'application/json'}}).then(function(response) {	
                
                if (response.data.flag == 1){
                    alert('로그인 성공');
                }else{
                    alert(response.data.desc);    
                }
            })
            .catch(function(e) {
                alert('error');
            });

        },
        logout(){
            
            this.$http.get('api/user/logout').then(function(response){
                if (response.data.flag == 1){
                    alert('로그아웃 성공');
                }else{
                    alert(response.data.desc);    
                }
            }).catch(function(e){
                alert('error');
            });
        }
        ,restCall(author){
            
            let url='';
            
            if (author == "ADMIN"){
                url = '/api/admin/adminTest';
            }else if (author == "USER"){
                url = 'api/user/userInfos';
            }

            let param = {loginId:'sunsee78',password:'2002ek78'};
            this.$http.post(url,param,{ headers:{'Content-type': 'application/json'}}).then(function(response) {	
                alert(response.data.result);
            }).catch(function(e) {
                
                if (e.response.status  == 401){
                    alert('인증되지 않았습니다.');
                }else if(e.response.status==403){
                    alert('접근 권한이 없습니다.');
                }else{
                    alert('error');
                }
            });


        }
        
    }

}
</script>

<style>

</style>
