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
