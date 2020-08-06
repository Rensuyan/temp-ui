

import BaiduMap from 'vue-baidu-map'//百度地图
let func = new Function();

func.prototype.map = null;
func.prototype.defaultCursor = '';
func.prototype.initMap = function(config, callback) {
  try {
    //初始化地图
    this.map = new BMap.Map(config.container ? config.container : 'allmap', {
      enableMapClick: false
    }); // 创建Map实例
    var point = new BMap.Point(config.center && config.center[0] ? config.center[0] : 116.497, config.center &&
      config.center[1] ? config.center[1] : 39.843);
    this.map.centerAndZoom(point, typeof(config.zoom) != "undefined" ? config.zoom : 12); // 初始化地图,设置中心点坐标和地图级别
    this.map.enableScrollWheelZoom(true);
    var myStyleJson = [{
      "featureType": "poilabel",
      "elementType": "all",
      "stylers": {
        "visibility": "off"
      }
    }, {
      "featureType": "road",
      "elementType": "labels",
      "stylers": {
        "visibility": "on"
      }
    }, {
      "featureType": "building",
      "elementType": "all",
      "stylers": {
        "visibility": "off"
      }
    }];
    this.map.setMapStyle({
      styleJson: config.styleJson ? config.styleJson : myStyleJson
    });
    defaultCursor = this.map.getDefaultCursor();
    if (callback && typeof callback == "function") callback();

  } catch (e) {
    console.log(e)
    //TODO handle the exception
  }
}

//创建标注，ifAdd是否添加到地图上，默认添加
func.prototype.createMarker = function(config, ifAdd) {
  /*config = {
    "position": [118.787724, 31.867808],//点位置
    "icon": {
      "url": "../src/style/res/monitor/station_error.png",//图片路径
      "size": [20, 20],//图片大小，默认标注大小
      "offset": [0, 0],//图片偏移，默认[0,0]
    },
    "size": [20, 20],//标注大小，默认[20,20]
    "offset": [0, 0],//标注偏移，默认[0,0]
    "anchor": "center",//锚点“enter”，“bottom”,默认‘center’
    "extData": {},//自定义数据
  }*/
  var marker;
  var pt = new BMap.Point(config.position[0], config.position[1]);
  if(config.icon && config.icon.url) {
    var width = config.size[0] ? config.size[0] : 20;
    var height = config.size[1] ? config.size[1] : 20;
    var myIcon = new BMap.Icon(config.icon.url, new BMap.Size(width, height), {
      imageOffset: config.icon.offset ? new BMap.Size(config.icon.offset[0], config.icon.offset[1]) : new BMap.Size(0, 0),
      imageSize: config.icon.size ? new BMap.Size(config.icon.size[0], config.icon.size[1]) : new BMap.Size(width, height),
    });

    marker = new BMap.Marker(pt, {
      icon: myIcon,
      offset: config.offset ? new BMap.Size(config.offset[0], config.offset[1]) : new BMap.Size(0, 0),
    });
    if(config.extData) {
      marker.extData = config.extData
    }
  } else {
    //默认标注
    marker = new BMap.Marker(pt);
    if(config.extData) {
      marker.extData = config.extData
    }
  }
  if(ifAdd != false)
    this.map.addOverlay(marker);
  return marker;
}
export default func
