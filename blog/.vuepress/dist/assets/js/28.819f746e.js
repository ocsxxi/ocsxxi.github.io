(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{470:function(t,s,a){"use strict";a.r(s);var e=a(19),v=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v("页面访问慢，架了"),a("code",[t._v("cdn")]),t._v("也没用？试试"),a("code",[t._v("http2")]),t._v("吧。")]),t._v(" "),a("p",[t._v("以前的"),a("code",[t._v("http")]),t._v("连接，单次连接都是访问单个资源，"),a("code",[t._v("http2")]),t._v("就是在"),a("code",[t._v("http")]),t._v("连接的基础上，直接复用第一次建立"),a("code",[t._v("http")]),t._v('连接时的网络通路，不用每一次都要"三次挥手"啦。')]),t._v(" "),a("h1",{attrs:{id:"配置方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置方法"}},[t._v("#")]),t._v(" 配置方法")]),t._v(" "),a("p",[t._v("原"),a("code",[t._v("server")]),t._v("的监听端口配置如下")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("    listen 443 ssl;\n")])])]),a("p",[t._v("将其更改为如下")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("    listen 443 ssl http2;\n")])])]),a("p",[t._v("即可开启"),a("code",[t._v("http2")]),t._v("的使用之旅啦。")]),t._v(" "),a("h1",{attrs:{id:"注"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#注"}},[t._v("#")]),t._v(" 注")]),t._v(" "),a("p",[t._v("记得保证使用的"),a("code",[t._v("nginx")]),t._v("编译包含了"),a("code",[t._v("with-http_v2_module")]),t._v("模块，并且一定要保证是在开启"),a("code",[t._v("ssl")]),t._v("的同时开启的"),a("code",[t._v("http2")]),t._v("。\n如果你是通过")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" nginx\n")])])]),a("p",[t._v("方式安装的"),a("code",[t._v("nginx")]),t._v("，那么通常来说已经默认编译包含了"),a("code",[t._v("http2")]),t._v("这个模块，可以使用")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("nginx -V\n")])])]),a("p",[t._v("这个命令来查看自己使用的"),a("code",[t._v("nginx")]),t._v("是否编译包含了这个模块。")])])}),[],!1,null,null,null);s.default=v.exports}}]);