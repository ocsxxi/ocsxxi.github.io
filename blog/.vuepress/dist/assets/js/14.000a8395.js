(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{457:function(t,r,n){"use strict";n.r(r);var s=n(19),a=Object(s.a)({},(function(){var t=this,r=t.$createElement,n=t._self._c||r;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("p",[t._v("Git是一个简便的版本控制工具，初期使用一般是通过Git Bash来进行使用，以便于记住Git命令，后期一般通过Git GUI来进行使用，可以更加方便快捷地管理版本库。（ 版本库(repository)，也称仓库，是用于存储不同版本信息、以及文件的仓库）")]),t._v(" "),n("p",[t._v("Git环境需要进行本地安装，官网"),n("a",{attrs:{href:"https://git-scm.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://git-scm.com/"),n("OutboundLink")],1),t._v("，通过自己的操作系统来选择合适的安装包进行下载安装并进行初始配置。")]),t._v(" "),n("p",[t._v("如在windows系统下，想将桌面的test文件夹作为某次开发的仓库，可以双击打开test文件夹，在空白处右键选择“git bash here”"),n("br"),t._v(" "),n("a",{attrs:{href:"https://img-blog.csdnimg.cn/20190305211934575.png",target:"_blank",rel:"noopener noreferrer"}},[n("img",{attrs:{src:"https://img-blog.csdnimg.cn/20190305211934575.png",alt:""}}),n("OutboundLink")],1),n("br"),t._v("\n即可打开bash命令行，然后直接在bash命令行中键入")]),t._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" init\n")])])]),n("p",[t._v("如果反馈信息如下，并在下一行等待输入，即创建版本库成功")]),t._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[t._v("Initialized empty Git repository "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" C:/Users/Admin/Desktop/test/.git/\n")])])]),n("p",[t._v("在test目录内创建rd.txt文本文件，并在其中写入”hello world”"),n("br"),t._v(" "),n("a",{attrs:{href:"https://img-blog.csdnimg.cn/20190305212741806.png",target:"_blank",rel:"noopener noreferrer"}},[n("img",{attrs:{src:"https://img-blog.csdnimg.cn/20190305212741806.png",alt:""}}),n("OutboundLink")],1),n("br"),t._v("\n继续在git bash 命令行中键入命令")]),t._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" rd.txt\n")])])]),n("p",[t._v("这行命令的作用是将rd.txt作为预备提交文件进行添加"),n("br"),t._v("\n如果如下显示，则添加成功"),n("br"),t._v(" "),n("a",{attrs:{href:"https://img-blog.csdnimg.cn/20190305213045945.png",target:"_blank",rel:"noopener noreferrer"}},[n("img",{attrs:{src:"https://img-blog.csdnimg.cn/20190305213045945.png",alt:""}}),n("OutboundLink")],1)]),t._v(" "),n("p",[t._v("接下来进行第一次提交，使用命令如下")]),t._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" commit -m "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"<提交说明>"')]),t._v("\n")])])]),n("p",[t._v("<提交说明>可以更改为自己的说明，如果显示如下，则提交成功"),n("br"),t._v(" "),n("a",{attrs:{href:"https://img-blog.csdnimg.cn/20190305213313956.png",target:"_blank",rel:"noopener noreferrer"}},[n("img",{attrs:{src:"https://img-blog.csdnimg.cn/20190305213313956.png",alt:""}}),n("OutboundLink")],1)]),t._v(" "),n("p",[t._v("我们再将rd.txt进行一次修改，再进行第二次提交"),n("br"),t._v(" "),n("a",{attrs:{href:"https://img-blog.csdnimg.cn/20190305213446482.png",target:"_blank",rel:"noopener noreferrer"}},[n("img",{attrs:{src:"https://img-blog.csdnimg.cn/20190305213446482.png",alt:""}}),n("OutboundLink")],1),n("br"),t._v(" "),n("a",{attrs:{href:"https://img-blog.csdnimg.cn/20190305213653180.png",target:"_blank",rel:"noopener noreferrer"}},[n("img",{attrs:{src:"https://img-blog.csdnimg.cn/20190305213653180.png",alt:""}}),n("OutboundLink")],1),n("br"),t._v("\n然后我们现在可以键入以下命令，来查看当前仓库的日志")]),t._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" log\n")])])]),n("p",[t._v("如下所示"),n("br"),t._v(" "),n("a",{attrs:{href:"https://img-blog.csdnimg.cn/20190305213818773.png",target:"_blank",rel:"noopener noreferrer"}},[n("img",{attrs:{src:"https://img-blog.csdnimg.cn/20190305213818773.png",alt:""}}),n("OutboundLink")],1),n("br"),t._v("\n在黄色的commit后面长长的一串码是对应版本的版本号")]),t._v(" "),n("p",[t._v("我们现在假设产品经理告诉我们，第二次的修改是没有用的，那么我们就需要将版本回滚到第一版，也就是”my first commit”那一版，我们可以键入下面的命令")]),t._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" reset --hard HEAD^\n")])])]),n("p",[t._v("可以看到反馈了如下信息"),n("br"),t._v(" "),n("a",{attrs:{href:"https://img-blog.csdnimg.cn/2019030521415072.png",target:"_blank",rel:"noopener noreferrer"}},[n("img",{attrs:{src:"https://img-blog.csdnimg.cn/2019030521415072.png",alt:""}}),n("OutboundLink")],1),n("br"),t._v("\n并且rd.txt和git log命令中，均只剩下第一次提交的内容，如下所示"),n("br"),t._v(" "),n("a",{attrs:{href:"https://img-blog.csdnimg.cn/2019030521430683.png",target:"_blank",rel:"noopener noreferrer"}},[n("img",{attrs:{src:"https://img-blog.csdnimg.cn/2019030521430683.png",alt:""}}),n("OutboundLink")],1),n("br"),t._v(" "),n("a",{attrs:{href:"https://img-blog.csdnimg.cn/20190305214348780.png",target:"_blank",rel:"noopener noreferrer"}},[n("img",{attrs:{src:"https://img-blog.csdnimg.cn/20190305214348780.png",alt:""}}),n("OutboundLink")],1),n("br"),t._v("\n这样就说明了我们回滚操作成功了")]),t._v(" "),n("p",[t._v("现在再假设产品经理告诉我们，他看错了，第二次修改的内容是需要的，那么这样我们就要退回回滚操作之前，只要当前bash命令行没有关闭，并且我们还能查到第二次的版本id，那么我们就能退回回滚操作之前，命令如下")]),t._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" reset --hard "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("版本号"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),n("p",[t._v("<版本号>应该填写自己命令行中的第二次提交的版本id，如下"),n("br"),t._v(" "),n("a",{attrs:{href:"https://img-blog.csdnimg.cn/20190305214802549.png",target:"_blank",rel:"noopener noreferrer"}},[n("img",{attrs:{src:"https://img-blog.csdnimg.cn/20190305214802549.png",alt:""}}),n("OutboundLink")],1),n("br"),t._v("\n看到这里，有很多小伙伴就会迷茫了，会问：刚才显示的第二次的版本id不是116b28f9460a5a0222ef0328c0c76e3c3fc95121吗？为什么我只写了一个116b2？")]),t._v(" "),n("p",[t._v("这是因为git的控制机制来说，我们只要能够给bash一个可以辨识到独一无二的版本号的序列，那么它就可以自动为我们匹配到我们想要去使用的版本号。")]),t._v(" "),n("p",[t._v("使用退回命令后，rd.txt内容显示如下，即表明我们的退回回滚操作之前的操作成功。")]),t._v(" "),n("p",[n("a",{attrs:{href:"https://img-blog.csdnimg.cn/20190305215137960.png",target:"_blank",rel:"noopener noreferrer"}},[n("img",{attrs:{src:"https://img-blog.csdnimg.cn/20190305215137960.png",alt:""}}),n("OutboundLink")],1)]),t._v(" "),n("p",[t._v("感谢您的阅读")])])}),[],!1,null,null,null);r.default=a.exports}}]);