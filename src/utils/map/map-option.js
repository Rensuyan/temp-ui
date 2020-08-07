import bmap from '@/utils/map/b-map'

let func = new Function();
func.prototype.mObj = null;
func.prototype.init = function(type, m, bm) {
  switch (type) {
    case 1:
      //百度
      this.mObj = new bmap()
      break;
    case 0:
      //高德
      break;
    case -1:
      //百度3D
      break;
    default:
      this.mObj = new bmap()
  }
  if(m) this.mObj.setMap(m);
  if(bm) this.mObj.setMapObj(bm);
  this.mObj.initMap();
}
//获得地图
func.prototype.getMap = function() {
  return this.mObj.getMap();
}
//获得地图边界
func.prototype.getMapBound = function() {
  return this.mObj.getMapBound();
}
//获得地图缩放比例
func.prototype.getMapZoom = function() {
  return this.mObj.getMapZoom();
}
//设置地图缩放比例
func.prototype.setMapZoom = function(zoom) {
  this.mObj.setMapZoom(zoom);
}
//设置地图最大缩放比例
func.prototype.setMapMaxZoom = function(zoom) {
  this.mObj.setMapMaxZoom(zoom);
}
//设置地图最小缩放比例
func.prototype.setMapMinZoom = function(zoom) {
  this.mObj.setMapMinZoom(zoom);
}
//设置地图视图范围
func.prototype.setViewport = function(points) {
  this.mObj.setViewport(points);
}
//设置地图样式
func.prototype.setMapStyle = function(styleJson) {
  this.mObj.setMapStyle(styleJson);
}
//设置地图中心点
func.prototype.setMapCenter = function(lonX, latY) {
  this.mObj.setMapCenter(lonX, latY);
}
//获取中心点
func.prototype.getMapCenter = function() {
  return this.mObj.getMapCenter();
}
//map绑定事件
func.prototype.bindEvent = function(eventName, handler) {
  this.mObj.bindEvent(eventName, handler);
}
//map取消绑定事件
func.prototype.removeEvent = function(eventName, handler) {
  this.mObj.removeEvent(eventName, handler);
}
//map绑定拖拽事件
func.prototype.dragendEvent = function(handler) {
  this.mObj.dragendEvent(handler);
}
//map绑定缩放事件
func.prototype.zoomendEvent = function(handler) {
  this.mObj.zoomendEvent(handler);
}
//map绑定click事件
func.prototype.clickEvent = function(handler) {
  this.mObj.clickEvent(handler);
}
//map取消绑定click事件
func.prototype.clickRemoveEvent = function(handler) {
  this.mObj.clickRemoveEvent(handler);
}
//map click获得的经纬度
func.prototype.clickEventPosition = function(e) {
  return this.mObj.clickEventPosition(e);
}
//设置中心和缩放比例
func.prototype.setCenterAndZoom = function(lonX, latY, zoom) {
  this.mObj.setCenterAndZoom(lonX, latY, zoom);
}
//判断点是否在视野范围内
func.prototype.boundContainsPoint = function(lonX, latY) {
  return this.mObj.boundContainsPoint(lonX, latY);
}
//设置marker位置
func.prototype.setMarkerPosition = function(marker, lonX, latY) {
  this.mObj.setMarkerPosition(marker, lonX, latY);
}
//获取所有覆盖物,百度地图不支持type
func.prototype.getOverlays = function(type) {
  return this.mObj.getOverlays(type);
}
//添加覆盖物
func.prototype.addOverlay = function(overlay) {
  this.mObj.addOverlay(overlay);
}
//删除覆盖物
func.prototype.removeOverlay = function(overlay) {
  this.mObj.removeOverlay(overlay);
}
//删除多个覆盖物
func.prototype.removeOverlays = function(overlays) {
  this.mObj.removeOverlays(overlays);
}
//清空覆盖物
func.prototype.clearOverlays = function() {
  this.mObj.clearOverlays();
}
//设置鼠标样式
func.prototype.setDefaultCursor = function(v) {
  this.mObj.setDefaultCursor(v);
}
//创建标注，ifAdd是否添加到地图上，默认添加
func.prototype.createMarker = function(config, ifAdd) {
  return this.mObj.createMarker(config);
}
//设置标注icon
func.prototype.setIcon = function(marker, config) {
  this.mObj.setIcon(marker, config);
}
//获取markers的extData
func.prototype.getMarkersExtData = function(markers) {
  return this.mObj.getMarkersExtData(markers);
}
//获取markers的经纬度
func.prototype.getMarkerLnglat = function(marker) {
  return this.mObj.getMarkerLnglat(marker);
}
//创建Label，ifAdd是否添加到地图上，默认添加
func.prototype.createLabel = function(config, ifAdd) {
  return this.mObj.createLabel(config);
}
//给marker添加点击事件
func.prototype.markerClickEvent = function(marker, clickHandler) {
  this.mObj.markerClickEvent(marker, clickHandler);
}
//手动点击marker
func.prototype.clickMarker = function(marker) {
  this.mObj.clickMarker(marker);
}
//弹出infoWindow,callback弹出框open回调
func.prototype.openInfoWindow = function(marker, config, callback) {
  this.mObj.openInfoWindow(marker, config, callback);
}
//marker数组中找到对应经纬度并显示弹出框
func.prototype.showInfoWindowWithCoordinates = function(markers, lonX, latY) {
  this.mObj.showInfoWindowWithCoordinates(markers, lonX, latY);
}
//标注拖拽移动位置
func.prototype.drugMarkerToMove = function(marker, callback) {
  this.mObj.drugMarkerToMove(marker, callback);
}
//将经纬度解析成行政区域
func.prototype.pointToAddress = function(lonX, latY, callback) {
  this.mObj.pointToAddress(lonX, latY, callback);
}
//将行政区域解析成经纬度
func.prototype.addressToPoint = function(address, callback) {
  this.mObj.addressToPoint(address, callback);
}
//画折线，并返回折线对象
func.prototype.drawPolyline = function(points, callback) {
  return this.mObj.drawPolyline(points, callback);
}
//获取折线点集合
func.prototype.getPolylinePath = function(polyline) {
  return this.mObj.getPolylinePath(polyline);
}
//画圆
func.prototype.drawCircle = function(callback) {
  this.mObj.drawCircle(callback);
}
//获取圆圈覆盖物中包含的marker覆盖物
func.prototype.getCircleContains = function(circle) {
  return this.mObj.getCircleContains(circle);
}
//批量移动markers，操作点在circle范围中
func.prototype.batchMoveMarkersByCircle = function(markers, circle, callback) {
  this.mObj.batchMoveMarkersByCircle(markers, circle, callback);
}
//画多边形
func.prototype.drawPolygon = function(callback) {
  this.mObj.drawPolygon(callback);
}
//获取多边形覆盖物中包含的marker覆盖物
func.prototype.getPolygonContains = function(polygon) {
  return this.mObj.getPolygonContains(polygon);
}
//批量移动markers，操作点在circle范围中
func.prototype.batchMoveMarkersByPolygon = function(markers, polygon, callback) {
  this.mObj.batchMoveMarkersByPolygon(markers, polygon, callback);
}

//添加自定义DOM元素的工具，element DOM元素
func.prototype.addDOMControl = function(element) {
  this.mObj.addDOMControl(element);
}
export default func
