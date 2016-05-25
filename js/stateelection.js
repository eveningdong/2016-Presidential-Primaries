
var width = 600,
    height = 400;

var projection = d3.geo.albersUsa()
                   .scale(700)
                   .translate([300,200]);

var path = d3.geo.path().projection(projection);

var svg = d3.select("#statesmap").append("svg")
    .attr("width", width)
    .attr("height", height);
var states;
    
d3.json("js/us.json", function(error, shapes) {
	
states = topojson.feature(shapes, shapes.objects.states).features;
	
	statePaths = svg.append("g");
	statePaths.selectAll("path").data(states).enter()
	.append("path").attr("d", path)
	.style("fill", "white").style("stroke", "black").style("stroke-width",0.1);

	d3.csv("data/stateresult2.csv", function (error, data) {
	     if (error) {console.log(error);}		
	     state_data = data;
       
         statedata = state_data.map(function(s) {
            return {
                x: s["State"],
                y: s["winnerofDemocrat"],
                z: s["winnerofRepublican"],         
            };
        })
         
         id=state_data.map(function(s) {
            
             return Number(s["ID"]);
      });
     
        d3.selectAll(".states").remove();
     statecolor=svg.selectAll("states")
                   .data(states)
                   .enter().insert("path", ".graticule")
                   .attr("class", "states")
                   .attr("d", path)
                   .style("fill", function(d,i){
           
             number=id.indexOf(d.id)

              if(number==-1)
                  return "white";
              else if (statedata[number].y=="Hillary Clinton")
              {    
                  return "#2B72D3";
              }
              else if(statedata[number].y=="Bernie Sanders")
                  return "#F0BA55";
              else return "white";
              }).style("opacity", 0.8)

    var rectangle1= svg.append("rect").attr("class", "states")
                                .attr("x", 500)
                                .attr("y", 300)
                                .attr("width", 10)
                                .attr("height", 10)
                                .attr("fill", "#2B72D3")
                                .style("opacity", 0.8);
        
    var rectangle2 = svg.append("rect").attr("class", "states")
                                .attr("x", 500)
                                .attr("y", 330)
                                .attr("width", 10)
                                .attr("height", 10)
                                .attr("fill", "#F0BA55")
                                .style("opacity", 0.8);
        
        
    var rectangle3 = svg.append("rect").attr("class", "states")
                                .attr("x", 500)
                                .attr("y", 360)
                                .attr("width", 10)
                                .attr("height", 10)
                                .attr("fill", "white")
                                .style("opacity", 0.8);
            
    var text1= svg.append("text").text("Hillary Clinton")  
                 .attr("class", "states")
                 .attr("x", 515)
                 .attr("y", 308)
                 .attr("font-family", "sans-serif")
                 .attr("font-size", "10px")
                 .attr("fill", "#2B72D3");
    var text2= svg.append("text").text("Bernie Sanders")    
                 .attr("class", "states")
                 .attr("x", 515)
                 .attr("y", 338)
                 .attr("font-family", "sans-serif")
                 .attr("font-size", "10px")
                 .attr("fill", "#F0BA55");
        
    var text3= svg.append("text").text("Data Not Available")  
                 .attr("class", "states")
                 .attr("x", 515)
                 .attr("y", 368)
                 .attr("font-family", "sans-serif")
                 .attr("font-size", "10px")
                 .attr("fill", "#F0BA55");
        
    var title= svg.append("text").text("Democratic")
                 .attr("class", "states")
                 .attr("x", 250)
                 .attr("y", 30)
                 .attr("font-family", "sans-serif")
                 .attr("font-size", "20px")
                 .attr("fill", "white");
    });
          
    });


var width = 600,
    height = 400;

var projection2 = d3.geo.albersUsa()
    .scale(700)
.translate([300,200]);

var path2 = d3.geo.path().projection(projection2);
var svg2 = d3.select("#statesmap2").append("svg")
    .attr("width", width)
    .attr("height", height);
var states2;

d3.json("js/us.json", function(error, shapes) {
	
states2 = topojson.feature(shapes, shapes.objects.states).features;
	
	statePaths2 = svg2.append("g");

    statePaths2.selectAll("path").data(states2).enter()
	.append("path").attr("d", path2)
	.style("fill", "white").style("stroke", "black").style("stroke-width",1);

	d3.csv("data/stateresult2.csv", function (error, data) {
	
		if (error) {console.log(error);}		
	     state_data2 = data;
         statedata2 = state_data2.map(function(s) {
            return {
                x: s["State"],
                y: s["winnerofDemocrat"],
                z: s["winnerofRepublican"],
              
            };
        })
         
         id2=state_data2.map(function(s) {
            
             return Number(s["ID"]);   
         
         });
        
        statePaths.style("fill","white").style("stoke-width",10)
		
          statecolor2=svg2.selectAll("states")
                .data(states2)
                .enter().insert("path", ".graticule")
                .attr("class", "states")
                .attr("d", path2)
                .style("fill", function(d,i){
            
             number2=id.indexOf(d.id)
          
             if(number2==-1)
                  return "white";
              else if (statedata2[number2].z=="Ted Cruz")
                  return "#0D972B";
              else if(statedata2[number2].z=="Donald Trump")
                  return "#F77563";
             else if(statedata2[number2].z=="John Kasich")
                  return "#F7C2B4";
              else if(statedata2[number2].z=="Marco Rubio")
                 return "#B4F7CB";
              else return "white";
          })
    var rectangle5= svg2.append("rect").attr("class", "states")
                                .attr("x", 495)
                                .attr("y", 310)
                                .attr("width", 10)
                                .attr("height", 10)
                                .attr("fill", "#0D972B")
                                .style("opacity", 0.8);
        
    var rectangle6 = svg2.append("rect").attr("class", "states")
                                .attr("x", 495)
                                .attr("y", 330)
                                .attr("width", 10)
                                .attr("height", 10)
                                .attr("fill", "#F77563")
                                .style("opacity", 0.8);
       
     var rectangle3 = svg2.append("rect").attr("class", "states")
                                .attr("x", 495)
                                .attr("y", 350)
                                .attr("width", 10)
                                .attr("height", 10)
                                .attr("fill", "#F7C2B4")
                                .style("opacity", 0.8);
       
     var rectangle4 = svg2.append("rect").attr("class", "states")
                                .attr("x", 495)
                                .attr("y", 370)
                                .attr("width", 10)
                                .attr("height", 10)
                                .attr("fill", "#B4F7CB")
                                .style("opacity", 0.8);
        
        
     var rectangle5 = svg2.append("rect").attr("class", "states")
                                .attr("x", 495)
                                .attr("y", 390)
                                .attr("width", 10)
                                .attr("height", 10)
                                .attr("fill", "white")
                                .style("opacity", 0.8);
       
    var text5= svg2.append("text").text("Ted Cruz")     
                 .attr("class", "states")
                 .attr("x", 510)
                 .attr("y", 320)
                 .attr("font-family", "sans-serif")
                 .attr("font-size", "10px")
                 .attr("fill", "#0D972B");
    var text6= svg2.append("text").text("Donald Trump") 
                 .attr("class", "states")
                 .attr("x", 510)
                 .attr("y", 340)
                 .attr("font-family", "sans-serif")
                 .attr("font-size", "10px")
                 .attr("fill", "#F77563");
   
    var text3= svg2.append("text").text("John Kasich")  
                 .attr("class", "states")
                 .attr("x", 510)
                 .attr("y", 360)
                 .attr("font-family", "sans-serif")
                 .attr("font-size", "10px")
                 .attr("fill", "#F7C2B4");
    var text4= svg2.append("text").text("Marco Rubio") 
                 .attr("class", "states")
                 .attr("x", 510)
                 .attr("y", 380)
                 .attr("font-family", "sans-serif")
                 .attr("font-size", "10px")
                 .attr("fill", "#B4F7CB");
           
    var text4= svg2.append("text").text("Data Not Available")
                 .attr("class", "states")
                 .attr("x", 510)
                 .attr("y", 400)
                 .attr("font-family", "sans-serif")
                 .attr("font-size", "10px")
                 .attr("fill", "white");
        
   var title2= svg2.append("text").text("Republican")
                 .attr("class", "states")
                 .attr("x", 250)
                 .attr("y", 30)
                 .attr("font-family", "sans-serif")
                 .attr("font-size", "20px")
                 .attr("fill", "white");

    });
          
    });



