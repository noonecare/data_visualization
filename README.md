## Data Visualization

很早我就学会了 JavaScript 的语法，但是开发效率非常低。感觉很别扭。为了解决开发效率低的问题，着重研究了以下问题。

### 管理依赖（安装依赖）

npm, bower 是 JavaScript 的 包管理工具。用 JavaScript 写后台脚本，需要引用某个第三方包了，直接执行 npm install ${package} （会下载 pacakge）， 然后在脚本中执行 var package = require("${package}") 就行。

但是问题来到前端，你写的脚本是要客户使用浏览器去执行的（不能指望用户用 node 去执行你写的脚本）， npm, bower 不再能够使用。所以在写前端的 javascript 时， 引用其他包是在 html 文件中写的。这造成了 JavaScript 代码 和 html 文件的耦合，使得 JavaScript
脚本不一定能在其他 Html 文件中使用。我特别反感这一点，感觉非常别扭。

如果包管理工具是纯 JavaScript 写的，那么只要在 Html 文件中引用了这个包管理工具，在这样的 Html 文件中，我们就可以按照 npm,
bower 的引用包的方式去引用包。RequireJs 就是这个思路。只要 Hmtl 中引用了 RequireJs 包，那么就可以按照 npm, bower 的方式（require
的方式）去引用包，就可以解除 JavaScript 和 html 的耦合。

[RequireJs 教程](http://www.ruanyifeng.com/blog/2012/11/require_js.html)

在读上面的教程时，我发现前端脚本和后台脚本还有一个明显区别： 后台脚本引用一个本地的包都很快，几乎不耗时，所以我们在写后台脚本时，引用包是同步的。
而在前端，引用包，都是从 服务器 上下载下来的，速度慢（取决于网速，网速可能会很慢），所以前端引包都是异步执行的，对于开发人员，会写很多的回调函数。
[AMD](http://www.ruanyifeng.com/blog/2012/10/asynchronous_module_definition.html) 是前端引用发布包（Module）的标准。


在写前端的 javascript 以及 html 时，我觉得用 bower 安装比用 npm 方便。因为 bower install <package> 下载下来的是一个 ${package}.js 文件，而 npm 下载下来的是一堆 XXX.js 文件。
搞得我不知道引用本地的那个文件。

### 发布包(写 module)

和其他语言一样，发布一般都是要把程序写成一个 module，然后打成一个压缩包。JavaScript 也不例外，也是写成 module 然后发布。

不过至今还没有一种些包的方式，能一统 JavaScript 的天下。现在有两种方式去定义 module： CommonJs 和 AMD。

不过话说回来，对于我这样一个不常常写 JavaScript 的用户，写出可执行的 JavaScript 脚本就足够了。


### 测试 & 调试

JavaScript 和其他语言一样有很多测试框架。下面三个框架是主流，和其他语言的测试框架大同小异。主要不同在于 JavaScript
对于异步非常关注（应该说所有网络相关的编程都对异步比较关注），所以测试框架也做了改进方便对异步进行测试。

[jasmine](https://jasmine.github.io/)

[mocha](https://mochajs.org/)

[karma](https://karma-runner.github.io/1.0/index.html)



### Live Edit

使用 WebStorm 的话，非常简单就可以做到 Live Edit。在 Chrome 上安装 JetBrains Chrome Support 插件，写 html 文件时，debug 这个文件，就可以在浏览器中动态的编辑文件。
可以在 settings -> Debugger -> Live Edit 对话框中设置刷新页面的时间间隔。WebStorm 的 debug 界面和 Chrome 的开发者工具（按 F12 弹出）非常相像。


gulp 中可以定义 watch 任务，监视文件的变化，当文件变化时，可以执行自定义的 callback 函数。这种特性和上面的 Live Edit 结合起来，可以交互式的做很多操作。


### Build Tool

gulp, grunt 是 JavaScript 中最流行的两个 Build Tool。我比较熟悉的是 gulp。

在 gulpfile.js(gulpfile.js 是用 JavaScript 语言写的， gulp 是纯 JavaScript 写的 Build Tool) 定义 task。定义这些 task 之后，就可以用 gulp 执行这些 task， 就像 maven 中定义了 execution 就可以执行一样。


### WebStorm


### CSS Layout

[文章](http://web.jobbole.com/91779/)讲得非常好。不过还要知道有很多前端框架自定义了布局的方式，比如最有名的 Bootstrap 定义了一种 Responsive 的布局方式。

