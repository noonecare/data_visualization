客户端 JavaScript 指的是运行在浏览器上的 JavaScript

在HTML中嵌入JavaScript脚本?

    ```javascript
    // 直接在 script 标签中写 JavaScript 脚本
    <script type="text/javascript">
    function greet() {
        alter("Hello World");
    }
    </script>
    // 引用外部 JavaScript 脚本
    <script type="text/javascript" src="demo.javascript"/>
    // 调用事件处理函数，比如 onClick 后面
    <button onclick="greet();"></button>
    // 放置在 URL 中
    <a href="javascript:alter(new Date().toLocalTimeString());"></a>
    ```


window,document等全局元素?

    window 代表窗口。
    ```javascript
    window.location = "http://www.xxx.com";
    alter("hello world");
    // 一定时间后回调
    setTimeout(function() {alter("Hello World");}, 2000);
    // Document 代表文档，操作 DOM 树时，会用到，所以到后面再给实例代码
    // onload 处理函数，当现实在窗口中的文档内容稳定并可以操作时触发它
    window.onload = function() {
        //do some thing;
    };
    ```

HTML 中的JavaScript是如何执行的，比如说，执行的先后顺序，加载的先后顺序？

    首先加载 HTML 文档， 按照 HTML 标签的顺序加载，如果加载的 JavaScript 脚本，会执行这些 JavaScript 脚本。
    HTML 文档加载好了，之后触发 onload 事件，文档中定义了 onload 事件的回调函数，会执行回调函数。
    最后进入事件驱动的阶段。这时候触发一个事件，会执行定义好的回调函数。

操作DOM?

    要让HTML页面动起来，做的操作主要就是操作DOM。各个浏览器提供了大同小异的DOM操作API。除了浏览器提供的API之外，JQuery 浏览器原生API之上抽象出了统一的一套DOM操作的API。不同是那种API, 概念上都是一样的，都包含如下这些操作：
    - 定位元素（css selector）
    - 创建元素
    - 添加子元素
    - 在指定的元素后面，添加元素
    - 删除子元素
    - 删除指定的元素后面的元素
    - 修改指定元素的属性值



JavaScript 如何发送http请求， ajax 和 XmlHttpRequest 概念?

    JavaScript 中 XmlHttpRequest 类（所有浏览器都支持）代表一个 request/response。在发送 request ,接受 request 时，有很多事件，针对这些事件，定义回调函数，实现异步（前端的代码很多都需要异步执行，这是与后台代码明显的不同）。

    ```javascript
    function postMessage(msg) {
        var request = new XmlHttpRequest();
        request.open("POST", "log.php");
        request.setRequestHeader("Content-Type", "text/plain;charset=UTF-8");
        request.send(msg)
    }

    function getMessage() {
        var request = new XmlHttpRequest();
        request.open("GET", "http://www.baidu.com")
        request.setRequestHeader("Content-Type", "text/html;charset=UTF-8");
        request.send(null)
    }
    ```

    readyState 属性

    |常量|值|含义|
    |----|--|----|
    |UNSET|0|open() 尚未调用|
    |OPENED|1|open() 已经调用|
    |HEADERS_RECEIVED|2|接受到头消息|
    |LOADING|3|接收到响应body|
    |DONE|4|响应完成|

    readyState 属性值每次改变理论上都会触发 readystatechange 事件，但是实际上不同浏览器可能有不同的行为。但是不论哪种浏览器，readyState 取值变成 DONE 时，一定会触发 readystatechange 事件。

    ```javascript
    // 给 readystatechange 事件绑定回调函数
    function getText(url, callback) {
        var request = new XMLHttpRequest();
        request.open("GET", url);
        // 给 readystatechange 事件绑定回调函数
        request.onreadystatechange = function() {
            if (request.readyState === 4 && request.status == 200) {
                var type = request.getResponseHeader("Content-Type");
                if (type.match(/^text/)) {
                    callback(request.responseText);
                }
            }
        };
        request.send(null);
    }
    ```

    ajax 的概念指的就是异步的发送 request 接收 response。
    这是 XmlHttpRequest 类的默认行为，在很少见的情形下，可以如此同步的请求接收资源。
    ```javascript
    var xmlHttpRequest = new XmlHttpRequest();
    // 同步的请求资源
    xmlHttpRequest.open("GET", "http://www.baidu.com", false);
    xmlHttpRequest.send(null);
    ```

事件处理？事件冒泡，阻止事件冒泡？

    前端的操作（比如鼠标点击）会产生事件，如果我们事先注册了事件处理函数，那么事件就会触发事件处理函数。

    事件冒泡指的是，子元素上发生的事件默认会冒泡到父亲元素。当然可以显式地控制事件是否冒泡。代码如下：
    ```javascript
    // 停止事件冒泡，但是当前元素注册的所有事件回调函数还是会全部执行
    event.stopPropagation()
    // 立即停止事件传播，当前元素注册的尚未执行的回调函数将不再执行
    event.stopImmediatePropagation()
    ```




为什么常常要把 JavaScript 代码放到HTML文档的底部？
    还是说不明白

同源策略以及如何跨域？
    同源策略指的是，XmlHttpRequest 请求的不是同一个域下的脚本不能执行。同源策略是浏览器的安全策略。

    常用的跨域方式有：
        - jsonp
            src 属性是可以请求脚本的，所以可以动态生成个 <script src="xxx"></script> 的元素来跨域。xxx 是个 jsonp 文件，就是一段 javascript 代码。
        - 代理
            可以先把跨域的脚本，下载当前域中，再从当前域请求当前域中保存的脚本。
        - 设置
            Access-Control-Allow-Origin: *




