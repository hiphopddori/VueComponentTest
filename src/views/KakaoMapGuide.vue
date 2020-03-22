<template>
    <div>
        <div ref="map" class="mapView"></div>
    </div>
    
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
                
                var options = { //지도를 생성할 때 필요한 기본 옵션
                    center: new daum.maps.LatLng(33.450701, 126.570667), //지도의 중심좌표.
                    level: 3 //지도의 레벨(확대, 축소 정도)
                };
                this.map = new daum.maps.Map(this.$refs.map, options); 
                //this.drawMaker();
                this.drawCircle();
                this.drawCustomOveray();

            });
        });
    }
    ,methods:{
        eventTest(e){
            debugger;
            alert('Test 입니다.');
        }
        ,drawMaker(){
            var markerPosition  = new daum.maps.LatLng(33.450701, 126.570667); 
            // 마커를 생성합니다
            var marker = new daum.maps.Marker({
                position: markerPosition
            });

            // 마커가 지도 위에 표시되도록 설정합니다
            marker.setMap(this.map);
        },
        drawCircle(){
            const circle = new kakao.maps.Circle({
                //map: map,
                center : new kakao.maps.LatLng(33.450701, 126.570667),
                radius: 50,
                strokeWeight: 2,
                strokeColor: '#FF00FF',
                strokeOpacity: 0.8,
                strokeStyle: 'dashed',
                fillColor: '#00EEEE',
                fillOpacity: 0.5 
            });      
            circle.setMap(this.map);  
        },
        drawCustomOveray(){
            
            // const eventTest = function(){
            //     alert('Test 입니다.');
            // }
            
            var content = '<div id="divTest" class="label""><span class="left"></span><span class="center">카카오!</span><span class="right"></span></div>';
            //var content = '<div id="divTest" class="label" onClick="alert(this.parent.eventTest();"><span class="left"></span><span class="center">카카오!</span><span class="right"></span></div>';
            // 커스텀 오버레이가 표시될 위치입니다 
            var position = new daum.maps.LatLng(33.450601, 126.570667);  

            // 커스텀 오버레이를 생성합니다
            var customOverlay = new daum.maps.CustomOverlay({
                position: position,
                content: content
            });

            // 커스텀 오버레이를 지도에 표시합니다
            customOverlay.setMap(this.map);

            var dom = document.getElementById('divTest');
            document.getElementById("divTest").addEventListener("click", this.eventTest);
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

    .label {margin-bottom: 96px;}
    .label * {display: inline-block;vertical-align: top;}
    .label .left {background: url("http://t1.daumcdn.net/localimg/localimages/07/2011/map/storeview/tip_l.png") no-repeat;display: inline-block;height: 24px;overflow: hidden;vertical-align: top;width: 7px;}
    .label .center {background: url(http://t1.daumcdn.net/localimg/localimages/07/2011/map/storeview/tip_bg.png) repeat-x;display: inline-block;height: 24px;font-size: 12px;line-height: 24px;}
    .label .right {background: url("http://t1.daumcdn.net/localimg/localimages/07/2011/map/storeview/tip_r.png") -1px 0  no-repeat;display: inline-block;height: 24px;overflow: hidden;width: 6px;}

</style>
