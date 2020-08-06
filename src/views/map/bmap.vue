<template>
  <div class="map-container" v-if="mapType === 1">
    <baidu-map
      class="map"
      :center="map.center"
      :zoom="map.zoom"
      @ready="handler">
      <!--缩放-->
      <bm-navigation anchor="BMAP_ANCHOR_TOP_LEFT"></bm-navigation>
    </baidu-map>
  </div>
</template>

<script>
  import mapOpt from '@/utils/map/map-option'
  export default {
    data() {
      return {
        mapType: 1,//地图类型
        mapOpt: null,
        map: {
          center: {
            lng: 118.75727,
            lat: 32.038444
          },
          zoom: 15,
          show: true,
          dragging: true
        },
      }
    },
    created() {
      let myOpt = new mapOpt()
      
      //mapOpt.initMap(this.mapType)
    },
    methods: {
      handler({
        BMap,
        map
      }) {
        let me = this;
       // console.log(BMap, map)
        // 鼠标缩放
        map.enableScrollWheelZoom(true);
        // 点击事件获取经纬度
        map.addEventListener('click', function(e) {
          console.log(e.point.lng, e.point.lat)
        })
      }
    }
  }
</script>

<style lang="scss">
	.map-container {
    height: 600px;
    .map {
      height: 100%;
    }
  }
</style>
