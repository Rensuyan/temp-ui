
let BMap;
let func = new Function();

func.prototype.map = null;
func.prototype.defaultCursor = '';
func.prototype.initMap = function() {
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
    styleJson: myStyleJson
  });
  this.defaultCursor = this.map.getDefaultCursor();
}
//设置map对象
func.prototype.setMapObj = function(bm) {
  BMap = bm;
}
//设置map对象
func.prototype.setMap = function(m) {
  this.map = m;
}
//获得地图
func.prototype.getMap = function() {
  return this.map;
}
//获得地图边界
func.prototype.getMapBound = function() {
  var bs = this.map.getBounds();
  var nE = bs.getNorthEast();
  var sW = bs.getSouthWest();
  return {
    leftDownLon: sW.lng,
    leftDownLat: sW.lat,
    rightUpLat: nE.lat,
    rightUpLon: nE.lng
  }
}
//获得地图缩放比例
func.prototype.getMapZoom = function() {
  return this.map.getZoom();
}
//设置地图缩放比例
func.prototype.setMapZoom = function(zoom) {
  this.map.setZoom(typeof(zoom) != "undefined" ? zoom : 12);
}
//设置地图最大缩放比例
func.prototype.setMapMaxZoom = function(zoom) {
  this.map.setMaxZoom(zoom);
}
//设置地图最小缩放比例
func.prototype.setMapMinZoom = function(zoom) {
  this.map.setMinZoom(zoom);
}
//设置地图视图范围
func.prototype.setViewport = function(points) {
  var pts = [];
  for (var i = 0; i < points.length; i++) {
    pts.push(new BMap.Point(points[i].lonX, points[i].latY))
  }
  this.map.setViewport(pts);
}
//设置地图样式
func.prototype.setMapStyle = function(styleJson) {
  this.map.setMapStyle({
    styleJson: styleJson,
  });
}
//设置地图中心点
func.prototype.setMapCenter = function(lonX, latY) {
  this.map.setCenter(new BMap.Point(lonX, latY));
}
//获取中心点
func.prototype.getMapCenter = function() {
  return {
    lonX: this.map.getCenter().lng,
    latY: this.map.getCenter().lat,
  };
}
//map绑定事件
func.prototype.bindEvent = function(eventName, handler) {
  this.map.addEventListener(eventName, handler);
}
//map取消绑定事件
func.prototype.removeEvent = function(eventName, handler) {
  this.map.removeEventListener(eventName, handler);
}
//绑定拖拽事件
func.prototype.dragendEvent = function(handler) {
  this.map.addEventListener("dragend", handler);
}
//绑定缩放事件
func.prototype.zoomendEvent = function(handler) {
  this.map.addEventListener("zoomend", handler);
}
//map绑定click事件
func.prototype.clickEvent = function(handler) {
  this.map.addEventListener("click", handler);
}
//map取消绑定click事件
func.prototype.clickRemoveEvent = function(handler) {
  this.map.removeEventListener("click", handler);
}
//map click获得的经纬度
func.prototype.clickEventPosition = function(e) {
  return {
    lonX: e.point.lng,
    latY: e.point.lat,
  }
}
//设置中心和缩放比例
func.prototype.setCenterAndZoom = function(lonX, latY, zoom) {
  this.map.centerAndZoom(new BMap.Point(lonX, latY), (zoom ? zoom : this.map.getZoom()));
}
//判断点是否在视野范围内
func.prototype.boundContainsPoint = function(lonX, latY) {
  var bound = this.map.getBounds(); //地图可视区域
  if (bound.containsPoint(new BMap.Point(lonX, latY)) == true) {
    return true;
  }
  return false;
}
//设置marker位置
func.prototype.setMarkerPosition = function(marker, lonX, latY) {
  marker.setPosition(new BMap.Point(lonX, latY));
}
//获取所有覆盖物
func.prototype.getOverlays = function(type) {
  return this.map.getOverlays();
}
//添加覆盖物
func.prototype.addOverlay = function(overlay) {
  this.map.addOverlay(overlay);
}
//删除覆盖物
func.prototype.removeOverlay = function(overlay) {
  this.map.removeOverlay(overlay);
}
//清空覆盖物
func.prototype.clearOverlays = function() {
  this.map.clearOverlays();
}
//删除多个覆盖物
func.prototype.removeOverlays = function(overlays) {
  for (var i = 0, len = overlays.length; i < len; i++) {
    this.map.removeOverlay(overlays[i]);
  }
}
//设置鼠标样式
func.prototype.setDefaultCursor = function(v) {
  if (v) {
    this.map.setDefaultCursor(v);
  } else {
    this.map.setDefaultCursor(this.defaultCursor);
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
  if (config.icon && config.icon.url) {
    var width = config.size[0] ? config.size[0] : 20;
    var height = config.size[1] ? config.size[1] : 20;
    var myIcon = new BMap.Icon(config.icon.url, new BMap.Size(width, height), {
      imageOffset: config.icon.offset ? new BMap.Size(config.icon.offset[0], config.icon.offset[1]) : new BMap.Size(
        0, 0),
      imageSize: config.icon.size ? new BMap.Size(config.icon.size[0], config.icon.size[1]) : new BMap.Size(width,
        height),
    });

    marker = new BMap.Marker(pt, {
      icon: myIcon,
      offset: config.offset ? new BMap.Size(config.offset[0], config.offset[1]) : new BMap.Size(0, 0),
    });
    if (config.extData) {
      marker.extData = config.extData
    }
  } else {
    //默认标注
    marker = new BMap.Marker(pt);
    if (config.extData) {
      marker.extData = config.extData
    }
  }
  if (ifAdd != false)
    this.map.addOverlay(marker);
  return marker;
}
//设置标注icon
func.prototype.setIcon = function(marker, config) {
  marker.setIcon(new BMap.Icon(config.url, new BMap.Size(config.size[0], config.size[1])));
}
//获取markers的extData
func.prototype.getMarkersExtData = function(markers) {
  var extData = [];
  for (var i = 0, len = markers.length; i < len; i++) {
    extData.push(markers[i].extData);
  }
  return extData;
}
//获取markers的经纬度
func.prototype.getMarkerLnglat = function(marker) {
  return {
    lng: marker.point.lng,
    lat: marker.point.lat,
  };
}
//创建Label，ifAdd是否添加到地图上，默认添加
func.prototype.createLabel = function(config, ifAdd) {
  var labelMarker = new BMap.Label(config.content ? config.content : "", {
    position: new BMap.Point(config.lonX, config.latY),
    offset: config.offset ? new BMap.Size(config.offset[0], config.offset[1]) : new BMap.Size(0, 0),
  });
  labelMarker.setStyle({
    border: 'none',
    backgroundColor: 'rgba(0,0,0,0)',
  });
  if (ifAdd != false)
    this.map.addOverlay(labelMarker);
  return labelMarker;
}
//给marker添加点击事件
func.prototype.markerClickEvent = function(marker, clickHandler) {
  marker.addEventListener("click", clickHandler);
}
//手动点击marker
func.prototype.clickMarker = function(marker) {
  if (marker.V) {
    marker.V.click();
  } else if (marker.ba) {
    marker.ba.click();
  }
}
//弹出infoWindow,callback弹出框open回调
func.prototype.openInfoWindow = function(marker, config, callback) {
  var infoWindow = new BMap.InfoWindow(config.content ? config.content : "", {
    enableMessage: true,
    title: config.title ? config.title : "",
    width: config.width ? config.width : 0,
    height: config.height ? config.height : 0,
    maxWidth: config.maxWidth ? config.maxWidth : 300,
    offset: config.offset ? new BMap.Size(config.offset[0], config.offset[1]) : new BMap.Size(0, 0),
  });
  marker.openInfoWindow(infoWindow, new BMap.Point(config.lonX, config.latY));
  /*if(callback && typeof callback == "function")
  	infoWindow.addEventListener("open", callback);*/
}
//marker数组中找到对应经纬度并显示弹出框
func.prototype.showInfoWindowWithCoordinates = function(markers, lonX, latY) {
  for (var i = 0, len = markers.length; i < len; i++) {
    if (markers[i].point.lng == lonX && markers[i].point.lat == latY) {
      if (markers[i].V) {
        markers[i].V.click();
      } else if (markers[i].ba && typeof(markers[i].ba) != "string") {
        markers[i].ba.click();
      }
      return false;
    }
  }
}
//标注拖拽移动位置
func.prototype.drugMarkerToMove = function(marker, callback) {
  marker.closeInfoWindow();
  marker.enableDragging(); //允许标注拖拽移动
  marker.setLabel(new BMap.Label("拖拽移动", {
    offset: new BMap.Size(10, -15)
  })); //标注右上方显示可拖拽提示
  marker.addEventListener("dragend", handler); //添加事件句柄

  window.addEventListener("click", winClick);

  function winClick(e) {
    marker.disableDragging(); //禁止标注拖拽移动
    this.map.removeOverlay(marker.getLabel()); //清除标注右上方可拖拽提示
    window.removeEventListener("click", winClick);
  }

  function handler() {
    var curPoint = marker.getPosition(); //拖拽后位置
    marker.disableDragging();
    marker.removeEventListener("dragend", handler);
    this.map.removeOverlay(marker.getLabel());
    if (callback && typeof callback == "function") callback(curPoint);
  }
}
//将经纬度解析成行政区域
func.prototype.pointToAddress = function(lonX, latY, callback) {
  var myGeo = new BMap.Geocoder();
  myGeo.getLocation(new BMap.Point(lonX, latY), function(rs) {
    var addressComponents = rs.addressComponents;
    if (callback && typeof callback == "function") callback(addressComponents);
  });
}
//将行政区域解析成经纬度
func.prototype.addressToPoint = function(address, callback) {
  var myGeo = new BMap.Geocoder();
  myGeo.getPoint(address.county, function(point) {
    if (callback && typeof callback == "function") callback({
      lonX: point.lng,
      latY: point.lat,
    });
  }, address.city);
}
//画折线
func.prototype.drawPolyline = function(points, callback) {
  var pts = [];
  var polyline = new BMap.Polyline([], {
    strokeColor: "#1a6d09",
    strokeWeight: 3,
    strokeOpacity: 1
  });
  for (var i = 0, len = points.length; i < len; i++) {
    pts.push(new BMap.Point(points[i].lonX, points[i].latY));
    /*var marker = new BMap.Marker(new BMap.Point(points[i].lonX, points[i].latY));
    map.addOverlay(marker);*/
  }
  polyline.setPath(pts);
  this.map.addOverlay(polyline);
  return polyline;
}
//获取折线点集合
func.prototype.getPolylinePath = function(polyline) {
  var path = polyline.getPath();
  var pts = [];
  for (var i = 0, len = path.length; i < len; i++) {
    pts.push({
      lonX: path[i].lng,
      latY: path[i].lat,
    });
  }
  return pts;
}
//画圆
func.prototype.drawCircle = function(callback) {
  this.map.disableDragging();
  this.map.addEventListener("mousedown", mapMousedown);
  var circle;
  var centerPoint;

  function mapMousedown(e) {
    this.map.addEventListener("mousemove", mapMousemove);
    this.map.addEventListener("mouseup", removeEvent);
    centerPoint = new BMap.Point(e.point.lng, e.point.lat);
    circle = new BMap.Circle(centerPoint, 1, {
      fillColor: "#1791fc",
      strokeWeight: 2,
      fillOpacity: 0.3,
      strokeOpacity: 0.3,
      strokeColor: "#1a6d09",
      //enableEditing: true
    });
    this.map.addOverlay(circle);
  }

  function mapMousemove(e) {
    var dis = this.map.getDistance(centerPoint, new BMap.Point(e.point.lng, e.point.lat));
    circle.setRadius(dis);
  }

  function removeEvent() {
    this.map.removeEventListener("mousedown", mapMousedown);
    this.map.removeEventListener("mousemove", mapMousemove);
    this.map.removeEventListener("mouseup", removeEvent);
    this.map.enableDragging();
    if (callback && typeof callback == "function")
      callback(circle)
  }
}
//获取圆圈覆盖物中包含的marker覆盖物
func.prototype.getCircleContains = function(circle) {
  var overlays = this.map.getOverlays();
  var center = circle.getCenter();
  var radius = circle.getRadius();
  var markers = [];
  for (var i = 0, len = overlays.length; i < len; i++) {
    if (overlays[i].V && overlays[i].V.className == "BMap_Marker BMap_noprint" && this.map.getDistance(new BMap.Point(
        center.lng, center.lat), new BMap.Point(overlays[i].point.lng, overlays[i].point.lat)) < radius) {
      markers.push(overlays[i]);
    }
  }
  return markers;
}
//批量移动markers，操作点在circle范围中
func.prototype.batchMoveMarkersByCircle = function(markers, circle, callback) {
  var markerPos = []; //提前获取markers的经纬度，否则鼠标移动耗时，导致卡顿
  var center = circle.getCenter(); //圆开始圆心坐标
  var startPos; //鼠标开始坐标
  for (var i = 0, len = markers.length; i < len; i++) {
    markerPos.push({
      lng: markers[i].point.lng,
      lat: markers[i].point.lat,
    })
  }
  this.map.disableDragging();
  circle.addEventListener("mousedown", mapMousedown);
  document.addEventListener("mouseup", removeEvent);

  function mapMousedown(e) {
    circle.addEventListener("mousemove", mapMousemove);
    startPos = e.point;
  }

  function mapMousemove(e) {
    cal = calculate(startPos, e.point);

    var newP = getNewPosition(center, cal);
    circle.setCenter(new BMap.Point(newP.lng, newP.lat));
    for (var i = 0, len = markers.length; i < len; i++) {
      var newPos = getNewPosition(markerPos[i], cal);
      markers[i].setPosition(new BMap.Point(newPos.lng, newPos.lat));
    }

  }

  function removeEvent() {
    circle.removeEventListener("mousedown", mapMousedown);
    circle.removeEventListener("mousemove", mapMousemove);
    document.removeEventListener("mouseup", removeEvent);
    this.map.enableDragging();
    if (callback && typeof callback == "function")
      callback(markers)

  }

  function calculate(startLnglat, endLnglat) {
    var r = Math.sqrt(Math.pow(endLnglat.lng - startLnglat.lng, 2) + Math.pow(endLnglat.lat - startLnglat.lat, 2));
    return {
      cos: (endLnglat.lng - startLnglat.lng) / r,
      sin: (endLnglat.lat - startLnglat.lat) / r,
      r: r,
    }
  }

  function getNewPosition(position, cal) {
    return {
      lng: cal.cos * cal.r + position.lng,
      lat: cal.sin * cal.r + position.lat
    }

  }
}
//画多边形
func.prototype.drawPolygon = function(callback) {
  var polygon = new BMap.Polygon([], {
    strokeColor: "blue",
    strokeWeight: 2,
    strokeOpacity: 0.5,
    fillOpacity: 0.2,
    fillColor: "#fff", //填充色
  });
  this.map.addOverlay(polygon);
  var points = [];

  this.map.disableDoubleClickZoom();
  this.map.disableDragging();
  //this.setDefaultCursor("crosshair");
  this.map.addEventListener("click", mapClick);
  this.map.addEventListener("dblclick", removeEvent);
  this.map.addEventListener("rightclick", removeEvent);
  this.map.addEventListener("mousemove", mouseMove);

  function mapClick(e) {
    points.push(new BMap.Point(e.point.lng, e.point.lat));
    polygon.setPath(points);
  }

  function mouseMove(e) {
    if (points.length) {
      polygon.setPath(points.concat([new BMap.Point(e.point.lng, e.point.lat)]));
    }
  }

  function removeEvent(e) {
    this.map.setDefaultCursor(this.defaultCursor)
    this.map.removeEventListener("click", mapClick);
    this.map.removeEventListener("dblclick", removeEvent);
    this.map.removeEventListener("rightclick", removeEvent);
    this.map.removeEventListener("mousemove", mouseMove);
    this.map.enableDoubleClickZoom();
    if (e.type == "ondblclick") {
      if (callback && typeof callback == "function") callback(polygon)
    } else if (e.type == "onrightclick") {
      this.map.removeOverlay(polygon);
      this.map.enableDragging();
      if (callback && typeof callback == "function") callback(false)
    }
  }

}
//获取多边形覆盖物中包含的marker覆盖物
func.prototype.getPolygonContains = function(polygon) {
  var overlays = this.map.getOverlays();
  var path = polygon.getPath();
  var markers = [];
  for (var i = 0, len = overlays.length; i < len; i++) {
    if (overlays[i].V && overlays[i].V.className == "BMap_Marker BMap_noprint") {
      if (BMapLib.GeoUtils.isPointInPolygon(overlays[i].getPosition(), polygon)) {
        markers.push(overlays[i]);
      }
    }
  }
  return markers;
}
//批量移动markers，操作点在circle范围中
func.prototype.batchMoveMarkersByPolygon = function(markers, polygon, callback) {
  var markerPos = []; //提前获取markers的经纬度，否则鼠标移动耗时，导致卡顿
  var polygonPath = polygon.getPath();
  var startPos; //鼠标开始坐标
  for (var i = 0, len = markers.length; i < len; i++) {
    markerPos.push({
      lng: markers[i].point.lng,
      lat: markers[i].point.lat,
    })
  }
  this.map.disableDragging();
  polygon.addEventListener("mousedown", mapMousedown);
  this.map.addEventListener("rightclick", removeEvent);

  function mapMousedown(e) {
    polygon.addEventListener("mousemove", mapMousemove);
    document.addEventListener("mouseup", removeEvent);
    startPos = e.point;
  }

  function mapMousemove(e) {
    cal = calculate(startPos, e.point);

    var newPath = [];
    for (var i = 0, len = polygonPath.length; i < len; i++) {
      var newPos = getNewPosition(polygonPath[i], cal);
      newPath.push(new BMap.Point(newPos.lng, newPos.lat));
    }
    polygon.setPath(newPath);

    for (var i = 0, len = markers.length; i < len; i++) {
      var newPos = getNewPosition(markerPos[i], cal);
      markers[i].setPosition(new BMap.Point(newPos.lng, newPos.lat));
    }

  }

  function removeEvent(e) {
    polygon.removeEventListener("mousedown", mapMousedown);
    polygon.removeEventListener("mousemove", mapMousemove);
    document.removeEventListener("mouseup", removeEvent);
    this.map.enableDragging();

    if (e.type == "onrightclick") {
      this.map.removeOverlay(polygon);
      this.map.removeEventListener("rightclick", removeEvent);
      this.map.enableDragging();
      if (callback && typeof callback == "function") callback(false)
    } else {
      if (callback && typeof callback == "function") callback(markers)
    }

  }

  function calculate(startLnglat, endLnglat) {
    var r = Math.sqrt(Math.pow(endLnglat.lng - startLnglat.lng, 2) + Math.pow(endLnglat.lat - startLnglat.lat, 2));
    return {
      cos: (endLnglat.lng - startLnglat.lng) / r,
      sin: (endLnglat.lat - startLnglat.lat) / r,
      r: r,
    }
  }

  function getNewPosition(position, cal) {
    return {
      lng: cal.cos * cal.r + position.lng,
      lat: cal.sin * cal.r + position.lat
    }

  }
}
//添加自定义DOM元素的工具，element DOM元素
func.prototype.addDOMControl = function(element) {
  // 定义一个控件类,即function
  function magnifyControl() {
    // 默认停靠位置和偏移量
    this.defaultAnchor = BMAP_ANCHOR_BOTTOM_RIGHT;
    this.defaultOffset = new BMap.Size(10, 10);
  }
  magnifyControl.prototype = new BMap.Control();
  magnifyControl.prototype.initialize = function(map) {
    return element
  }
  this.map.getContainer().appendChild(element);
  var mymagnifyControl = new magnifyControl();
  // 添加到地图当中
  this.map.addControl(mymagnifyControl);
}

export default func
