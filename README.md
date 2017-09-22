## Data Visualization

很早我就学会了 JavaScript 的语法，但是开发效率非常低。感觉很别扭。为了解决开发效率低的问题的着重研究一下三个问题

### dependency manage

npm, bower 是 JavaScript 的 包管理工具。写后台 JavaScript（比如用 node 执行） 和用 Python 写脚本（用 python 执行）
没有不同，可以方便的用 npm, bower 解决包依赖的问题。

但是问题来到前端，你写的脚本是要客户使用浏览器去执行这些脚本的（不能指望用户用 node 去执行你写的脚本）， npm, bower 不再能够使用。所以在写前端的 javascript 时， 引用其他包是在 html 文件中写的。这造成了 JavaScript 代码 和 html 文件的耦合，使得 JavaScript
脚本不一定能在其他 Html 文件中使用。我是特别反感这一点，感觉非常别扭。


如果包管理工具是纯 JavaScript 写的，那么只要在 Html 文件中引用了这个包管理工具的包，在这样的 Html 文件中，我们就可以按照 npm,
bower 的引用包的方式去引用包。RequireJs 就是这个思路。只要 Hmtl 中引用了 RequireJs 包，那么就可以按照 npm, bower 的方式（require
的方式）去引用包，就可以解除 JavaScript 和 html 的耦合。

[RequireJs 教程](http://www.ruanyifeng.com/blog/2012/11/require_js.html)

在读上面的教程时，我发现了前端脚本和后台脚本的另外一个区别： 后台脚本引用一个本地的包都很快，几乎不好时，所以我们在写后台脚本时，引用包是同步的。
而在前端，引用包，都是从 服务器 上下载下来的，速度慢（取决于网速，网速可能会很慢），所以前端引包都是异步执行的，对于开发人员，会写很多的回调函数。
JavaScript 有两个标准 CommonJs 和 AMD， AMD 是针对前端引用发布包（Module）的标准。

[AMD](http://www.ruanyifeng.com/blog/2012/10/asynchronous_module_definition.html)


### how to distribution your product

如何发布应用，如果应用是个要被反复重用的包，那么就要遵守 AMD 和 CommonJS 的标准，使用 define 去定义包。
如果应用不计划被重用，那么就随便了。


### 测试 & 调试




### Live Edit

### Build Tool


### WebStorm
