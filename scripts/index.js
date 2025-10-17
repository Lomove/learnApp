"use strict";

const geoYes = function (position) {
  console.log(position);
};
const geoNo = function () {
  console.error("ТЫ ШО??");
};
navigator.geolocation.getCurrentPosition(geoYes, geoNo);
