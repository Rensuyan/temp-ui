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
export default func
