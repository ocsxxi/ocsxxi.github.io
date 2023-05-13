(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{472:function(t,a,s){"use strict";s.r(a);var e=s(19),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"问题背景"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#问题背景"}},[t._v("#")]),t._v(" 问题背景")]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("view")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("animation")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),t._v("{{animation}}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("image")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("…"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("mode")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),t._v("“widthFix”")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token special-attr"}},[s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("style")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token value css language-css"}},[s("span",{pre:!0,attrs:{class:"token property"}},[t._v("“width")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("100%”/")])])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("view")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("p",[t._v("如上方代码中所示，该段代码在微信开发者工具中动画显示正常且流畅，运行在"),s("code",[t._v("ios")]),t._v("设备上时发生动画卡顿，难以触发动画，且时常有图片闪烁的问题？")]),t._v(" "),s("h1",{attrs:{id:"尝试解决的思路"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#尝试解决的思路"}},[t._v("#")]),t._v(" 尝试解决的思路")]),t._v(" "),s("ol",[s("li",[t._v("把相同动画应用到文本按键上，在"),s("code",[t._v("ios")]),t._v("设备上，按键动画展示丝滑且无闪烁，考虑是内容的问题。")]),t._v(" "),s("li",[t._v("尝试将"),s("code",[t._v("image")]),t._v("组件更换为"),s("code",[t._v("cover-image")]),t._v("组件。我的外层"),s("code",[t._v("view")]),t._v("有一个圆角，并且动画是缩放动画，在更改完组件后，圆角也没了，动画变成了偏移而不是缩放，也就是说微信小程序的"),s("code",[t._v("animation")]),t._v("变形并没有作用到"),s("code",[t._v("cover")]),t._v("系列组件上，放弃这条路。（在微信官方文档中无论是在"),s("code",[t._v("cover")]),t._v("系列组件的章节，还是"),s("code",[t._v("animation")]),t._v("的章节，均未提到其是剥离文档流而存在这件事，算是个坑，也可能是官方也没想到会有人这么玩吧）")]),t._v(" "),s("li",[t._v("尝试使用"),s("code",[t._v("background-image")]),t._v("样式来替换"),s("code",[t._v("image")]),t._v("组件，成功。")])]),t._v(" "),s("h1",{attrs:{id:"最终解决方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#最终解决方法"}},[t._v("#")]),t._v(" 最终解决方法")]),t._v(" "),s("p",[t._v("把"),s("code",[t._v("image")]),t._v("的图片设置为外层"),s("code",[t._v("view")]),t._v("的"),s("code",[t._v("background-image")]),t._v("就能完美解决了，亲测有效，在"),s("code",[t._v("ios")]),t._v("设备上展示丝滑且不再会发生图片闪烁。")])])}),[],!1,null,null,null);a.default=n.exports}}]);