<template>
  <div class="app-container" v-if="mapType === 1">
    <div class="map-container" style="height:868px">
      <el-row :gutter="5">
        <el-col :xs="24" :sm="12" :md="8" :lg="6" :xl="6">
          <div class="map-list-div">
            <list-bar v-for="item in listParams" :key="item.title" :params="item" @itemClick="listClick"></list-bar>
          </div>
        </el-col>

        <el-col :xs="24" :sm="12" :md="16" :lg="18" :xl="18">
          <div class="map-div">
            <baidu-map class="map" :center="map.center" :zoom="map.zoom" @ready="handler">
              <!--缩放-->
              <bm-navigation anchor="BMAP_ANCHOR_TOP_LEFT"></bm-navigation>
            </baidu-map>
          </div>
        </el-col>

      </el-row>
    </div>

  </div>
</template>

<script>
  import mapOpt from '@/utils/map/map-option'
  import ListBar from "@/components/List/ListBar"
  export default {
    components: {
      ListBar
    },
    data() {
      return {
        mapType: 1, //地图类型
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
        mapData: [],
        listData: [],
        listParams: [],
      }
    },
    created() {
      this.mapOpt = new mapOpt()
      this.mapOpt.init(this.mapType)
      this.fetchData()
    },
    methods: {
      fetchData() {
        this.mapData = [{
          "stationId": 2,
          "stationName": "ceshi1",
          "serialNo": "000000000000",
          "groupName": "测试分组",
          "lonX": 118.75727,
          "latY": 32.038444
        }, {
          "stationId": 3,
          "stationName": "ceshi2",
          "serialNo": "120000000000",
          "groupName": "分组",
          "lonX": 118.786129,
          "latY": 31.862183
        }]
        this.listData = [{
          "stationId": 2,
          "stationName": "ceshi1",
          "serialNo": "000000000000",
          "groupName": "测试分组",
          "lonX": 118.75727,
          "latY": 32.038444
        }, {
          "stationId": 3,
          "stationName": "ceshi2",
          "serialNo": "120000000000",
          "groupName": "分组",
          "lonX": 118.786129,
          "latY": 31.862183
        }]
        for (let i = 0, len = this.listData.length; i < len; i++) {
          this.listParams.push({
            title: this.listData[i].stationId + "#" + this.listData[i].stationName,
            texts: ["串号：" + this.listData[i].serialNo, "分组：" + this.listData[i].groupName, "2020-08-06 12:00:00"],
            btns: ["详情"],
            //img: "https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg",
            data: this.listData[i]
          })
        }
        //this.mapMarker()
      },
      mapMarker() {
        for (let i = 0, len = this.mapData.length; i < len; i++) {
          var marker = this.mapOpt.createMarker({
            position: [this.mapData[i].lonX, this.mapData[i].latY],
          });
        }
      },
      listClick(data) {
        console.log(data.data)
      },
      handler({
        BMap,
        map
      }) {
        /* let me = this;
        // console.log(BMap, map)
        // 鼠标缩放
        map.enableScrollWheelZoom(true);
        // 点击事件获取经纬度
        map.addEventListener('click', function(e) {
          console.log(e.point.lng, e.point.lat)
        }) */
      }
    }
  }
</script>

<style lang="scss">
  .map-container {

    .el-row,
    .el-col {
      height: 100%;
    }

    .map-list-div {
      height: 100%;
      overflow: auto;

      .list-bar-item {
        cursor: pointer;
      }
    }
  }

  .map-div {
    height: 100%;

    .map {
      height: 100%;
    }
  }
</style>
