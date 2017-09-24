/**
 * Created by T440P on 2017/9/23.
 */

require.config(
    {
        paths: {
            "d3": "d3"
        }
    }
)

require(["d3"], function (d3) {
    var w = 600
    var h = 500

    var dataSet = [1, 2, 3, 4, 5]

    // 画饼图
    var pie = d3.pie()

    var color = d3.scaleOrdinal(d3.schemeCategory10)

    var svg = d3.select("body").append("svg")
        .attr("width", w / 2)
        .attr("height", h)

    var outerRadius = w / 4
    var innerRadius = w / 8


    var arc = d3.arc()
        .innerRadius(innerRadius)
        .outerRadius(outerRadius)


    var arcs = svg.selectAll("g.arc")
        .data(pie(dataSet))
        .enter()
        .append("g")
        .attr("class", "arc")
        .attr("transform", "translate(" + outerRadius + "," + outerRadius + ")")

    arcs.append("path")
        .attr("fill", function (d, i) {
            return color(i)
        })
        .attr("d", arc)


    // 画堆叠图
    // var dataSet = [
    //     {apples: 5, oranges: 10, grapes: 22},
    //     {apples: 4, oranges: 12, grapes: 28},
    //     {apples: 2, oranges: 19, grapes: 32},
    //     {apples: 7, oranges: 23, grapes: 35},
    //     {apples: 23, oranges: 17, grapes: 43}
    // ]
    //
    // var stack = d3.stack()
    // var groups = stack(dataSet)
    // var rects = groups.selectAll("rect").data(function (d) {
    //     return d
    // })
    //     .enter()
    //     .append("rect")
    //     .attr("x", function (d, i) {
    //         return xScale(i)
    //     })
    //     .attr("y", function (d, i) {
    //         return yScale(d.y0)
    //     })
    //     .attr("height", function (d) {
    //         return yScale(d.y)
    //     })
    //     .attr("width", xScale.rangeBand())


    // 话 力导图
    // var dataSet = {
    //     nodes: [
    //         {name: "Adam"},
    //         {name: "Bob"},
    //         {name: "Carrie"}
    //     ],
    //     edges: [
    //         {source: 0, target: 1},
    //         {source: 0, target: 2},
    //         {source: 1, target: 2}
    //     ]
    // }
    //
    // var force = d3.forceSimulation()
    //     .nodes(dataSet.nodes)
    //     .links(dataSet.edges)
    //     .size([w, h])
    //     .start()
    //
    // var edges = svg.selectAll("line")
    //     .data(dataSet.edges)
    //     .enter()
    //     .append("line")
    //     .style("stroke", "#ccc")
    //     .style("stroke-width", 1)
    //
    // var nodes = svg.selectAll("circle")
    //     .data(dataSet.nodes)
    //     .enter()
    //     .append("circle")
    //     .attr("r", 10)
    //     .style("fill", function (d, i) {
    //         return colors(i)
    //     })
    //     .call(force.drag)

    // 地图
    var svg = d3.select("body").append("svg").attr("width", w / 2).attr("height", h)
    var projection = d3.geoMercator().center([107, 31])
        .scale(w / 3)
        .translate([w / 4, h / 3])

    var path = d3.geoPath().projection(projection)

    d3.json("china.geojson", function (json) {
        svg.selectAll("path")
            .data(json.features)
            .enter()
            .append("path")
            .attr("d", path)
    })



    console.log("ok")


})