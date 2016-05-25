var height_p = 500;
var width_p = 1000;
var margin_p = {
	left:80,
	right:50,
	top:80,
	bottom:50
}


var svg_p = d3.select("#partybar").append("svg").attr("height", height_p).attr("width", width_p);

// parameter can be changed
var x_bar = 200;
var bar_height = 30;
var barLength = 600;

// Label
var bar_sq = 30;
var dist = 140;
var textDist = 8;

var portrait = svg_p.append("image")
.attr("x", 20)
.attr("y", 20)
.attr("width", 100)
.attr("height",100);

var hSq = svg_p.append("rect")
	.attr("class","partybar_label")
	.attr("x", x_bar)
	.attr("y", margin_p.top)
	.attr("width", bar_sq)
	.attr("height", bar_sq)
	.attr("fill", "blue")
	.style("opacity", 0.8)
	.on('mouseover', function () {
	portrait.attr("xlink:href", "images/hillary.png");
	})
    .on('mouseout', function () {
	portrait.attr("xlink:href", "");
	})
	.on("click", function () {
	portrait.attr("xlink:href", "images/hillary.png");
	});

var sSq = svg_p.append("rect")
	.attr("class","partybar_label")
	.attr("x", x_bar + dist)
	.attr("y", margin_p.top)
	.attr("width", bar_sq)
	.attr("height", bar_sq)
	.attr("fill", "orange")
	.style("opacity", 0.8)
	.on('mouseover', function () {
	portrait.attr("xlink:href", "images/bernie.png");
	})
    .on('mouseout', function () {
	portrait.attr("xlink:href", "");
	})
	.on("click", function () {
	portrait.attr("xlink:href", "images/bernie.png");
	});

var tSq = svg_p.append("rect")
	.attr("class","partybar_label")
	.attr("x", x_bar + 2*dist)
	.attr("y", margin_p.top)
	.attr("width", bar_sq)
	.attr("height", bar_sq)
	.attr("fill", "red")
	.style("opacity", 0.8)
	.on('mouseover', function () {
	portrait.attr("xlink:href", "images/trump.png");
	})
    .on('mouseout', function () {
	portrait.attr("xlink:href", "");
	})
	.on("click", function () {
	portrait.attr("xlink:href", "images/trump.png");
	});

var cSq = svg_p.append("rect")
	.attr("class","partybar_label")
	.attr("x", x_bar + 3 * dist)
	.attr("y", margin_p.top)
	.attr("width", bar_sq)
	.attr("height", bar_sq)
	.attr("fill", "green")
	.style("opacity", 0.8)
	.on('mouseover', function () {
	portrait.attr("xlink:href", "images/cruz.png");
	})
    .on('mouseout', function () {
	portrait.attr("xlink:href", "");
	})
	.on("click", function () {
	portrait.attr("xlink:href", "images/cruz.png");
	});

var oSq = svg_p.append("rect")
	.attr("class","partybar_label")
	.attr("x", x_bar + 4 * dist)
	.attr("y", margin_p.top)
	.attr("width", bar_sq)
	.attr("height", bar_sq)
	.attr("fill", "grey")
	.on('mouseover', function () {
	portrait.attr("xlink:href", "images/other.png");
	})
    .on('mouseout', function () {
	portrait.attr("xlink:href", "");
	})
	.on("click", function () {
	portrait.attr("xlink:href", "images/other.png");
	});

var text_p_h = svg_p.append("text")
	.attr("class","partybar_label_text")
	.attr("x", x_bar+bar_sq/2)
	.attr("y", margin_p.top - textDist)
	.attr("text-anchor","middle")
	.text("Hillary Clinton");

var text_p_s = svg_p.append("text")
	.attr("class","partybar_label_text")
	.attr("x", x_bar+ 1*dist + bar_sq/2)
	.attr("y", margin_p.top - textDist)
	.attr("text-anchor","middle")
	.text("Bernie Sanders");

var text_p_t = svg_p.append("text")
	.attr("class","partybar_label_text")
	.attr("x", x_bar+2*dist +bar_sq/2)
	.attr("y", margin_p.top - textDist)
	.attr("text-anchor","middle")
	.text("Donald Trump");

var text_p_c = svg_p.append("text")
	.attr("class","partybar_label_text")
	.attr("x", x_bar+3*dist +bar_sq/2)
	.attr("y", margin_p.top - textDist)
	.attr("text-anchor","middle")
	.text("Ted Cruz");

var text_p_o = svg_p.append("text")
	.attr("class","partybar_label_text")
	.attr("x", x_bar+4*dist +bar_sq/2)
	.attr("y", margin_p.top - textDist)
	.attr("text-anchor","middle")
	.text("Other");

var text_p_D = svg_p.append("text")
	.attr("class","partybar_text_party")
	.attr("text-anchor","middle")
	.attr("x", margin_p.left)
	.attr("y", 0.4 * height_p)
	.text("Democrats");

var text_p_R = svg_p.append("text")
	.attr("class","partybar_text_party")
	.attr("text-anchor","middle")
	.attr("x", margin_p.left)
	.attr("y", 0.6 * height_p)
	.text("Republican");



// linked to county and state
var state_p = "Mississippi";
var county_p = "Yalobusha";
var fractions = {
	t: results[state_p][county_p]["Donald Trump"].Fraction,
	c: results[state_p][county_p]["Ted Cruz"].Fraction,
	h: results[state_p][county_p]["Hillary Clinton"].Fraction,
	s: results[state_p][county_p]["Bernie Sanders"].Fraction,
	d: 1 - results[state_p][county_p]["Hillary Clinton"].Fraction - results[state_p][county_p]["Bernie Sanders"].Fraction,
	r: 1 - results[state_p][county_p]["Donald Trump"].Fraction - results[state_p][county_p]["Ted Cruz"].Fraction
}

var trumpBar = {
	x:x_bar,
	y:300 - bar_height/2,
	width: fractions.t * barLength,
	height: bar_height,
	votes: results[state_p][county_p]["Donald Trump"].Votes
}

var cruzBar = {
	x:trumpBar.x+trumpBar.width,
	y:300- bar_height/2, 
	width:  fractions.c * barLength,
	height: bar_height,
	votes: results[state_p][county_p]["Ted Cruz"].Votes
}

var clintonBar = {
	x:x_bar,
	y:200- bar_height/2, 
	width: fractions.h * barLength,
	height: bar_height,
	votes: results[state_p][county_p]["Hillary Clinton"].Votes
}

var sandersBar = {
	x:clintonBar.x+clintonBar.width,
	y:200- bar_height/2,
	width: fractions.s * barLength,
	height: bar_height,
	votes: results[state_p][county_p]["Bernie Sanders"].Votes
}

// other democrats
var dOtherBar = {
	x:sandersBar.x+sandersBar.width,
	y:200- bar_height/2,
	width: fractions.d * barLength,
	height: bar_height,
	votes: Math.round(clintonBar.votes / fractions.h * fractions.d)
}

// other republican 
var rOtherBar = {
	x:cruzBar.x + cruzBar.width,
	y:300- bar_height/2,
	width: fractions.r * barLength,
	height: bar_height,
	votes: Math.round(trumpBar.votes / fractions.t * fractions.r)
}

// total republican and democrats votes
var rTotalVotes = trumpBar.votes + cruzBar.votes + rOtherBar.votes;
var dTotalVotes = clintonBar.votes + sandersBar.votes + dOtherBar.votes;

var trumpTip = d3.tip()
  .attr('class', 'd3-tip')
  .offset([-10, 0])
  .html(function(d) {
    return "<strong style='color:white'>Donald Trump:</strong> <span style='color:red'>" + trumpBar.votes + " votes " + "</span>" +
    "<strong style='color:white'> Total Republican:</strong><span style='color:red'>" + rTotalVotes + " votes" + "</span>";
  });

var cruzTip = d3.tip()
  .attr('class', 'd3-tip')
  .offset([-10, 0])
  .html(function(d) {
    return "<strong style='color:white'>Ted Cruz:</strong> <span style='color:green'>" + cruzBar.votes + " votes" + "</span>" + 
    "<strong style='color:white'> Total Republican:</strong><span style='color:green'>" + rTotalVotes + " votes" + "</span>";
  });

var clintonTip = d3.tip()
  .attr('class', 'd3-tip')
  .offset([-10, 0])
  .html(function(d) {
    return "<strong style='color:white'>Hillary Clinton:</strong> <span style='color:blue'>" + clintonBar.votes + " votes" + "</span>" +
    "<strong style='color:white'> Total Democrats:</strong><span style='color:blue'>" + dTotalVotes + " votes" + "</span>";
  });

var sandersTip = d3.tip()
  .attr('class', 'd3-tip')
  .offset([-10, 0])
  .html(function(d) {
    return "<strong style='color:white'>Bernie Sanders:</strong> <span style='color:orange'>" + sandersBar.votes + " votes" + "</span>"+
    "<strong style='color:white'> Total Democrats:</strong><span style='color:orange'>" + dTotalVotes + " votes" + "</span>";
  });

var rTip = d3.tip()
  .attr('class', 'd3-tip')
  .offset([-10, 0])
  .html(function(d) {
    return "<strong style='color:white'>Other Republican:</strong> <span style='color:grey'>" + rOtherBar.votes + " votes" + "</span>"+
    "<strong style='color:white'> Total Republican:</strong><span style='color:grey'>" + rTotalVotes + " votes" + "</span>";
  });

var dTip = d3.tip()
  .attr('class', 'd3-tip')
  .offset([-10, 0])
  .html(function(d) {
    return "<strong style='color:white'>Other Democrats:</strong><span style='color:grey'>" + dOtherBar.votes + " votes" + "</span>"+
    "<strong style='color:white'> Total Democrats:</strong><span style='color:grey'>" + dTotalVotes + " votes" + "</span>";
  });

svg_p.call(trumpTip);
svg_p.call(cruzTip);
svg_p.call(sandersTip);
svg_p.call(clintonTip);
svg_p.call(rTip);
svg_p.call(dTip);

var clinton_bar = svg_p.append("rect")
	.attr("class","partybar_bar")
	.attr("x", clintonBar.x)
	.attr("y", clintonBar.y)
	.attr("width", clintonBar.width)
	.attr("height", clintonBar.height)
	.attr("fill", "blue")
	.style("opacity", 0.8)
	.on('mouseover', function (d){
		clintonTip.show(d);
		portrait.attr("xlink:href", "images/hillary.png")
	})
    .on('mouseout', function (d) {
    	clintonTip.hide(d);
    	portrait.attr("xlink:href", "")
    })
    .on('click',function (d) {
    	clintonTip.show(d);
    	sandersTip.hide(d);
		trumpTip.hide(d);
		cruzTip.hide(d);
		dTip.hide(d);
		rTip.hide(d);
 		portrait.attr("xlink:href", "images/hillary.png")
    });

var sanders_bar = svg_p.append("rect")
	.attr("class","partybar_bar")
	.attr("x", sandersBar.x)
	.attr("y", sandersBar.y)
	.attr("width", sandersBar.width)
	.attr("height", sandersBar.height)
	.attr("fill", "orange")
	.style("opacity", 0.8)
	.on('mouseover', function (d) {
		sandersTip.show(d);
		portrait.attr("xlink:href", "images/bernie.png")
	})
    .on('mouseout', function (d) {
    	sandersTip.hide(d);
    	portrait.attr("xlink:href", "")
    })
    .on('click',function () {  	
		trumpTip.hide();
		cruzTip.hide();
		dTip.hide();
		rTip.hide();
    	clintonTip.hide();
    	sandersTip.show();
    	portrait.attr("xlink:href", "images/bernie.png")
    });

var trump_bar = svg_p.append("rect")
	.attr("class","partybar_bar")
	.attr("x", trumpBar.x)
	.attr("y", trumpBar.y)
	.attr("width", trumpBar.width)
	.attr("height", trumpBar.height)
	.attr("fill", "red")
	.style("opacity", 0.8)
	.on('mouseover', function (d) {
		trumpTip.show(d);
		portrait.attr("xlink:href", "images/trump.png");
	})
    .on('mouseout', function (d) {
    	trumpTip.hide(d);
    	portrait.attr("xlink:href", "");
    })
    .on('click',function () {	
		cruzTip.hide();
		dTip.hide();
		rTip.hide();
    	clintonTip.hide();
    	sandersTip.hide();
    	trumpTip.show();
    	portrait.attr("xlink:href", "images/trump.png");
    });

var cruz_bar = svg_p.append("rect")
	.attr("class","partybar_bar")
	.attr("x", cruzBar.x)
	.attr("y", cruzBar.y)
	.attr("width", cruzBar.width)
	.attr("height", cruzBar.height)
	.attr("fill", "green")
	.style("opacity", 0.8)
	.on('mouseover', function (d) {
		cruzTip.show(d);
		portrait.attr("xlink:href", "images/cruz.png");
	})
    .on('mouseout', function (d) {
    	cruzTip.hide(d);
    	portrait.attr("xlink:href", "");
    })
    .on('click',function () {	
		dTip.hide();
		rTip.hide();
    	clintonTip.hide();
    	sandersTip.hide();
    	trumpTip.hide();
    	cruzTip.show();
    	portrait.attr("xlink:href", "images/cruz.png");
    });

var dOther_bar = svg_p.append("rect")
	.attr("class","partybar_bar")
	.attr("x", dOtherBar.x)
	.attr("y", dOtherBar.y)
	.attr("width", dOtherBar.width)
	.attr("height", dOtherBar.height)
	.attr("fill", "grey")
	.on('mouseover', function (d) {
		dTip.show(d);
		portrait.attr("xlink:href", "images/d.png");
	})
    .on('mouseout', function (d) {
    	dTip.hide(d);
    	portrait.attr("xlink:href", "");
    })
    .on('click',function () {			
		rTip.hide();
    	clintonTip.hide();
    	sandersTip.hide();
    	trumpTip.hide();
    	cruzTip.hide();
    	dTip.show();
    	portrait.attr("xlink:href", "images/d.png");
    });

var rOther_Bar = svg_p.append("rect")
	.attr("class","partybar_bar")
	.attr("x", rOtherBar.x)
	.attr("y", rOtherBar.y)
	.attr("width", rOtherBar.width)
	.attr("height", rOtherBar.height)
	.attr("fill", "grey")
	.on('mouseover', function (d) {
		rTip.show(d);
		portrait.attr("xlink:href", "images/r.png");
	})
    .on('mouseout', function (d) {
    	rTip.hide(d);
    	portrait.attr("");
    })
    .on('click',function () {					
    	clintonTip.hide();
    	sandersTip.hide();
    	trumpTip.hide();
    	cruzTip.hide();
    	dTip.hide();
    	rTip.show();
    	portrait.attr("xlink:href", "images/r.png");
    });

