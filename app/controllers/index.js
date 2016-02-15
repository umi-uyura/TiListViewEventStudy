function debugout(msg) {
  alert(msg);
  Ti.API.debug(msg);
}

function doClose() {
  $.removeListener();
}

function doItemClick(e) {
  debugout('doItemClick() - ' + JSON.stringify(e));
}

function doSwipe(e) {
  debugout('doSwipe() - ' + JSON.stringify(e));
}

function doClick(e) {
  debugout('doClick() - ' + JSON.stringify(e));
}

function doSingleClick(e) {
  debugout('doSingleClick() - ' + JSON.stringify(e));
}

function doDblClick(e) {
  debugout('doDblClick() - ' + JSON.stringify(e));
}

function doLongClick(e) {
  debugout('doLongClick() - ' + JSON.stringify(e));
}

function doLongPress(e) {
  debugout('doLongPress() - ' + JSON.stringify(e));
}

function doSingleTap(e) {
  debugout('doSingleTap() - ' + JSON.stringify(e));
}

function doDoubleTap(e) {
  debugout('doDoubleTap() - ' + JSON.stringify(e));
}

function doTwoFingerTap(e) {
  debugout('doTwoFingerTap() - ' + JSON.stringify(e));
}

$.index.open();
