function rgbToHex(r, g, b) {
  r = Math.max(0, Math.min(255, r));
  g = Math.max(0, Math.min(255, g));
  b = Math.max(0, Math.min(255, b));

  var hexR = r.toString(16).padStart(2, "0").toUpperCase();
  var hexG = g.toString(16).padStart(2, "0").toUpperCase();
  var hexB = b.toString(16).padStart(2, "0").toUpperCase();

  return "#" + hexR + hexG + hexB;
}

let hxe = (255).toString(16).toUpperCase();
console.log(hxe);

console.log(rgbToHex(255, 255, 255));
