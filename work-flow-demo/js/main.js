/**
 * Created by T440P on 2017/9/23.
 */

require.config(
    {
        paths: {
            "d3": "d3"
        }
    }
);

require(["d3"], function (d3) {

    var w = 500
    var h = 300
    var alpha = 0.9

    var svg = d3.select('body').append("svg")
        .attr("width", w)
        .attr("height", h)

    function initialDraw() {
        var dataSet = []
        for (var i = 0; i < 5; i++) {
            dataSet.push(Math.random() * 10)
        }

        var left = (1 - alpha) * w
        var bottom = alpha * h

        var xScale = d3.scaleLinear().domain([0, dataSet.length]).range([left, w])
        var yScale = d3.scaleLinear().domain([0, d3.max(dataSet)]).range([0, bottom])

        var band = ( w - left ) / ( dataSet.length * 2 )

        svg.selectAll("rect").data(dataSet).enter()
            .append("rect")
            .attr("y", function (d, i) {
                return bottom - yScale(d)
            })
            .attr("x", function (d, i) {
                return xScale(i)
            })
            .attr("width", band)
            .attr("height", function (d) {
                return yScale(d)
            })
            .attr("fill", "blue")

        var xAxis = d3.axisBottom()
            .scale(xScale)
            .ticks(5)

        var yAxis = d3.axisLeft()
            .scale(yScale)
            .ticks(dataSet.length)

        svg.append("g")
            .attr("class", "axis")
            .attr("transform", "translate(0," + bottom  + ")")
            .call(xAxis)

        svg.append("g")
            .attr("class", "axis")
            .attr("transform", "translate(" + left + ", 0)")
            .call(yAxis)
    }

    initialDraw()

    function randomDraw() {

        var dataSet = []
        for (var i = 0; i < 5; i++) {
            dataSet.push(Math.random() * 10)
        }


        var bottom = alpha * h


        var yScale = d3.scaleLinear().domain([0, d3.max(dataSet)]).range([0, bottom])

        svg.selectAll("rect").data(dataSet)
            .transition()
            .delay(function (d, i) {
                return i * 100
            })
            .duration(1000)
            .attr("y", function (d, i) {
                return bottom - yScale(d)
            })
            .attr("height", function (d) {
                return yScale(d)
            })
            .attr("fill", "blue")

    }



    d3.select("body").append("p").text("Let's Play")
        .on("click", randomDraw)





})