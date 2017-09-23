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


在写前端的 javascript 以及 html 时，我觉得用 bower 安装以来比用 npm 方便。因为 bower install <package> 下载下来的是一个 package.js 文件，而 npm 下载下来一堆文件夹，每个文件夹中都有 .js 文件。
搞得我不知道引用本地的那个文件。

### how to distribution your product

如何发布应用，如果应用是个要被反复重用的包，那么就要遵守 AMD 和 CommonJS 的标准，使用 define 去定义包。
如果应用不计划被重用，那么就随便了。


### 测试 & 调试

JavaScript 和 其他语言一样，也有很多测试框架。

[jasmine](https://jasmine.github.io/) 是类似于 scala 中的 org.specs2 似得 BDD 测试工具。

[mocha](https://mochajs.org/)

[karma](https://karma-runner.github.io/1.0/index.html)

JavaScript 的测试框架以及其他的框架（react, VUE） 等等的特别多。


### Live Edit

使用 WebStorm 的话，非常简单就可以做到 Live Edit。在浏览器上按照 JetBrains 的插件，写 html 文件时，debug 这个文件，就可以在浏览器中动态的编辑文件。
可以在 settings -> Debugger -> Live Edit 对话框中设置刷新页面的时间间隔。WebStorm 做 debug 时，会连接浏览器这样可以动态的观察前端的变化，同时会出现
Element, Console（和 Chrome 同名窗口显示同样的内容） 等窗口，可以实时的看到当前页面的状态。


gulp 中可以定义 watch 任务，监视文件的变化，当文件变化时，可以执行自定义的 callback 函数。这种特性和上面的 Live Debug 结合起来，可以交互式的做很多操作。


### Build Tool

gulp, grunt 是 JavaScript 中最流行的两个 Build Tool。我比较熟悉的是 gulp。

在 gulpfile.js(gulpfile.js 是用 JavaScript 语言写的， gulp 是纯 JavaScript 写的 Build Tool) 定义 task。定义这些 task 之后，就可以用 gulp 执行这些 task， 就像 maven 中定义了 execution 就可以执行一样。


### WebStorm
