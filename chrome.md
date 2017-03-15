# **chrome** 发现hidden information

chrome 开发者工具(F12调用)（由前端开发 IDE 之称）, 主要由以下几大部分：
> - Network, 查看发送了那些 **request**, 收到那些 **response**. 显示所有 *request* 和 **response**.
> - Element, 显示 Dom 数结构。？ 查看的是哪个 html 的 目录数据结构。？是加载了 js 之后的 Dom 数结构，还是 没有 加载 js 之前的 HTML 结构？可不可以查看加载 js之前的 HTML 的 Dom 树结构。
>> - 审阅元素，在左上角。鼠标 hover 有提示的。
>> - toggle device toolbar, 图标是手机和电脑屏幕。这个可以改变 网页的显示。
>> - Ctrl+F, 用于查找，查找既可以用 string 查找，也可以用 css, xpath 查找。
>> - Element 是加载过 js 之后的 HTML 网页。就是你当前在浏览器中看到的网页。

> - Console, 运行 js 脚本的控制台。可以在这个 console 中写 js 脚本。查看 js 脚步通过 console.log(), console.error(), console.warning() 等等打印到 console 控制台的信息。
> - Sources, 应该是源码吧，没用过。
>> - 应该就是，每个请求得到的response, 形成的文件。也就是说没有加载 js 之前的网页可以在这里看到。（不是这样的， sources 中都找不到 html 文件）
>> - 不过上面的功能，还是可以在这个面板实现，你找到 || 这个图标（表示禁止运行 js）然后点击，刷新一下网页。这是 开发者 Element 面板显示的就是 未运行 js 时的 html 文件。也就是查看网页源代码时看到的文件。同理是你使用 python request 时得到的网页。
>> - 不光如此，你还可以单步执行一个 javasript 文件，看看这个 javascript 文件的每一步都对html 文件做了什么。
>> - 显示网页加载的脚本文件：例如 css， js 等资源文件（不包括 cookie 和 img 等静态资源文件）
>> - 左边的面板中有 snippet, 可以新建 js 文件。 你会发现运行文件的结果会显示在 resource 下方的 console 上
>> - Sources 主要用于 debug  js 代码。有很多 断点，单步执行 的操作。

> - Resources, 貌似保存着所有的 文件。在 Resources 中可以找到 查看网页源代码时看到的网页，不过貌似 Resources 查找不太方便。