var height = 300;
var width = 300;

var svg_county = d3.select("#county").append("svg").attr("height", height).attr("width", width);
var countyText = svg_county.append("text")
.attr("x", 30)
.attr("y", 30)
.text("state or state + county");