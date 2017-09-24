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



    // var svg = d3.select("body").append("svg")
    //
    // svg.append("circle")
    //     .attr("cx", 25)
    //     .attr("cy", 25)
    //     .attr("r", 20)
    //     .attr("fill", "blue")
    //
    // svg.append("rect")
    //     .attr("width", 20)
    //     .attr("height", 20)
    //     .attr("color", "red")
    //
    //
    var w = 500
    var h = 300

    function randomDraw() {
        d3.select("body").selectAll("svg").remove()

        var svg = d3.select('body').append("svg")
            .attr("width", w)
            .attr("height", h / 2)

        // todo: 为什么有一个 bar 没有显示出来
        var dataSet = []
        for (var i = 0; i < 5; i++) {
            dataSet.push(Math.random() * 10)
        }

        var padding = 0.5

        var xScale = d3.scaleLinear().domain([0, dataSet.length]).range([0, w])
        var yScale = d3.scaleLinear().domain([d3.min(dataSet), d3.max(dataSet)]).range([h, 0])


        svg.selectAll("rect").data(dataSet).enter()
            .append("rect")
            .transition()
            .delay(function (d, i) {
                return i * 100
            })
            .duration(1000)
            .attr("y", function (d, i) {
                return yScale(5 - d + padding)
            })
            .attr("x", function (d, i) {
                return xScale(i)
            })
            .attr("width", xScale(0.5))
            .attr("height", function (d) {
                return yScale(d + padding)
            })
            .attr("fill", "blue")

        console.log("ok")

        var xAxis = d3.axisBottom()
            .scale(xScale)
            .ticks(5)

        var yAxis = d3.axisLeft()
            .scale(yScale)
            .ticks(dataSet.length)

        svg.append("g")
            .attr("class", "axis")
            .attr("transform", "translate(0," + yScale(0 + 1.5) + ")")
            .call(xAxis)

        svg.append("g")
            .attr("class", "axis")
            .call(yAxis)
    }


    d3.select("body").append("p").text("Let's Play")
        .on("click", randomDraw)
        .transition()
        .duration(2000)




})