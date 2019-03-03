<template>
    <div ref="map" class="mapView"></div>
</template>

<script>

import loadScriptOnce from 'load-script-once';

export default {
    data(){
        return{
            apiKey:'4ed139e6903b4acaeab4880ad1cde904'
            ,libraries:['services','clusterer','drawing']
            ,map:null
        }
    }
    
    , mounted() {

        loadScriptOnce(`//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=${this.apiKey}&libraries=${this.libraries.join(',')}`, (err) => {
            if (err) {
                console.error(err);
                return;
            }
            daum.maps.load(() => {
                
                //var container = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스
                var options = { //지도를 생성할 때 필요한 기본 옵션
                    center: new daum.maps.LatLng(33.450701, 126.570667), //지도의 중심좌표.
                    level: 3 //지도의 레벨(확대, 축소 정도)
                };
                //this.map = new daum.maps.Map(container, options); //지도 생성 및 객체 리턴
                this.map = new daum.maps.Map(this.$refs.map, options); //지도 생성 및 객체 리턴

                this.drawMaker();

            });
        });
    }
    ,methods:{
        drawMaker(){
            var markerPosition  = new daum.maps.LatLng(33.450701, 126.570667); 
            // 마커를 생성합니다
            var marker = new daum.maps.Marker({
                position: markerPosition
            });

            // 마커가 지도 위에 표시되도록 설정합니다
            marker.setMap(this.map);
        }
    }
}
</script>

<style>
    .mapView{
        width:100%;
        height:850px;
        /*
        height: -moz-calc(100% - (20px + 30px));
        height: -webkit-calc(100% - (20px + 30px));
        height: calc(100% - (20px + 30px));
        */
    }

</style>
