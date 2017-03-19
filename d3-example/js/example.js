/**
 * Created by wangmeng on 2017/3/19.
 */

/**
 * 选择出的元素.data(data_to_bind).enter().修改html
 * 选择出的元素.data(data_to_bind).修改html
 *
 * data方法绑定 data 之前 选择出的元素 和 data 参数中的数据 data_to_bind
 * data() 返回的是 一一对应出的 元素和绑定数据对。比如选择出的元素有 3 个， 要绑定的数据有 10 个，那么 data() 返回
 * 3 个这样的对， 修改html 操作也会被执行 3 次。比如选择出的元素有 10 个， 要绑定的数据有 3 个，那么 data() 返回出 3
 * 个这样的对，修改html 操作也会被执行 3 次
 * data().enter() 返回没有被绑定上的数据，比如选择出的元素有 3 个或者多余三个， 要绑定的数据有 3 个，那么 data().enter()
 * 返回 0 个要绑定的数据，data().enter() 之后的修改html 操作也一次都不会执行。
 * 如果 选择出的元素有 3 个，要绑定的数据有 10 个，那么 data().enter() 返回 7 个（10-3=7）要绑定的数据，data().enter() 之后的修改
 * html操作也会被执行 7 次
 */
function bind_data() {
    var test_data = [1, 2, 3, 4, 3, 2, 1];
    console.log(test_data)
    d3.select("body").selectAll("div").data([0]).enter().append("div");
    d3.select("div").selectAll("p").data(test_data).enter().
    append("p").text("data is used to bind data");
}


function datamorethanelement(a) {
    var test_data = [1, 2, 3, 4, 3, 2, 1];
    d3.select("body").selectAll("div").data([0, 1]).enter().append("div");
    if (a) {
        d3.select("div + div").selectAll("p").data(test_data).enter().append("p").text("data is used to bind data");
    }
    else
    {
        d3.select("div + div").selectAll("p").data(test_data).append("p").text("data is used to bind data");
    }
}

function drawDataedGraph() {
    var test_data = [1, 2, 3, 4, 3, 2, 1];
    d3.select("body").selectAll("svg").data([0]).enter().append("svg").attr("width", 400).attr("height", 400);
    // 如果 function 有两个参数 (i, d) 那么 i 表示是第几个 数据， d 表示实际的数据值。如果只有一个参数 (d) 那么 d 表示
    // 实际的数据值
    d3.select("svg").selectAll("circle").data(test_data).enter().append("circle").attr("cx", function (i, d) {
        return 5 * i * 10;
    })
        .attr("cy", function (d) {
            return 2 * 10 * 10;
        })
        .attr("r", function (d) {
            return d * 2 * 10;
        })
}
