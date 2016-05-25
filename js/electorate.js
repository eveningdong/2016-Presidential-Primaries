function drawBarChart(state, county, type) {

    var stateName = abbreviationToState[state];
    var state_data = county_data["states"][stateName];
    var state_abbr = state;
    var county_info = county_data[state_abbr][county];
    var categories = groupings[type];
    var data = [];
    var x_labels = [];
    var variables = [county, state, "USA"];

    //Creating the JSON structure for the grouped bar chart
    for (var i = 0; i < categories.length; i++) {
        category = categories[i];                    
        values = [county_info[category], state_data[category], usa_average[category]];
        data.push({
            "County": county_info[category],
            "State": state_data[category],
            "Country": usa_average[category],
            "Category": county_facts[category],
            "max": d3.max(values, function(d) { return d} ),
            "ages" : [  {"name": county, "value" : county_info[category]}, 
                        {"name": state , "value" : state_data[category]}, 
                        {"name": "USA" , "value" : usa_average[category]} ]
        });
        x_labels.push(county_facts[category]);
    }            

    var margin = {
        top: 50,
        right: 150,
        bottom: 50,
        left: 50
    };
    var width = 800 - margin.left - margin.right;
    var height = 500 - margin.top - margin.bottom;

    var x0 = d3.scale.ordinal()
                        .rangeRoundBands([0, width], .1);
    var x1 = d3.scale.ordinal();
    var xAxis = d3.svg.axis()
                        .scale(x0)
                        .orient("bottom");
    var y = d3.scale.linear()
                        .range([height, 0]);
    var yAxis = d3.svg.axis()
                        .scale(y)
                        .orient("left")
                        .tickFormat(d3.format(".2s"));
    var color = d3.scale.ordinal()
                            .range(["#ff7f0e", "#2ca02c", "#1f77b4"]);

    var barchart = d3.select("#barchart").append("svg")
                                .attr("width", width + margin.left + margin.right)
                                .attr("height", height + margin.top + margin.bottom)
                                .append("g")
                                .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    //Setting the domain of the x and y axis
    x0.domain(data.map(function(d) { return d.Category; }));
    x1.domain(variables).rangeRoundBands([10, x0.rangeBand()]);
    y.domain([0, d3.max(data, function(d) { return d.max; })]);

    //Drawing the x axis
    barchart.append("g")
            .attr("class", "x axis")
            .attr("transform", "translate(0," + height + ")")
            .call(xAxis);

    yaxisTitle = "Percent"
    if (type == "Income"){
        yaxisTitle = "Income in $"
    }

    //Drawing the y axis
    barchart.append("g")
            .attr("class", "y axis")
            .call(yAxis)
            .append("text")
            .attr("transform", "rotate(-90)")
            .attr("y", 6)
            .attr("dy", ".71em")
            .style("text-anchor", "end")
            .text(yaxisTitle);

    var category = barchart.selectAll(".category")
                            .data(data)
                            .enter().append("g")
                            .attr("class", "category")
                            .attr("transform", function(d) {
                                return "translate(" + x0(d.Category) + ",0)";
                            });

    var barTip = d3.tip()
                    .attr('class', 'd3-tip')
                    .offset([-10, -10])
                    .html(function(d) {
                        return "<span style='color:red'>" + d.name + " : " + d.value + "</span>";
                    });

    barchart.call(barTip);

    category.selectAll("rect")
                .data(function(d) { return d.ages; })
                .enter().append("rect")
                .attr("width", x1.rangeBand())
                .attr("x", function(d) { return x1(d.name); })
                .attr("y", function(d) { return y(d.value); })
                .attr("height", function(d) { return height - y(d.value); })
                .style("fill", function(d) { return color(d.name); })
                .on("mouseover",function(d){    
                                                d3.select(this).style('fill-opacity',0.7),
                                                barTip.show(d);
                                            })
                .on("mouseout",function(d){
                                                d3.select(this).style('fill-opacity',1),
                                                barTip.hide(d);
                });

    

    barchart.append("text")
            .attr("x", (width / 2))             
            .attr("y", 0 - (margin.top / 2))
            .attr("text-anchor", "middle")  
            .style("font-size", "16px") 
            .text("How does " + type + " affect the results?");

    var legend = barchart.selectAll(".legend")
                            .data(variables.slice().reverse())
                            .enter().append("g")
                            .attr("class", "legend")
                            .attr("transform", function(d, i) {
                                return "translate(0," + i * 20 + ")";
                            });

    legend.append("rect")
            .attr("x", width + 135)
            .attr("width", 15)
            .attr("height", 15)
            .style("fill", color);

    legend.append("text")
            .attr("x", width + 120)
            .attr("y", 9)
            .attr("dy", ".35em")
            .style("text-anchor", "end")
            .text(function(d) {
                return d;
            });

}

//Listening for changes in button selected
$('input[type="radio"]').on('click change', updateMaps);

function updateMaps(){
    d3.select("svg").remove();
    var type = $('input[type="radio"]:checked').val();
    drawBarChart(state_p, county_p, type);
}

var state_p = "TX";
var county_p = "Hidalgo";
drawBarChart(state_p, county_p, "Race");

