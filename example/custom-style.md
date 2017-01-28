# Custom style

If you want to completely customize the style,you need a reference [lib/index.css](../lib/index.css),and using the props.className props.prefixClassName.

````css
html .m-switch--s {
    width:35px;
    border-top-right-radius: 16px;
    border-top-left-radius: 16px;
    border-bottom-right-radius: 16px;
    border-bottom-left-radius: 16px;
    height: 16px;
    line-height: 16px;
    font-size:12px;
}
html .m-switch--s.r-switch--checked .r-switch-mark {
    left:auto;
    right:2px;
}
html .m-switch--s .r-switch-mark {
    left:2px;top:2px;
    width:12px;
    height:12px;
}
html .m-switch--s .r-switch-checked-symbol {
    border: 2px solid white;
    border-top-width: 0;
    border-right-width: 0;
    width: 7px;
    height: 3px;
    position: relative;
    top:-3px;
    left:0px;
}

html .m-switch--m {
    width:40px;
    border-top-right-radius: 20px;
    border-top-left-radius: 20px;
    border-bottom-right-radius: 20px;
    border-bottom-left-radius: 20px;
    height: 20px;
    line-height: 20px;
    font-size:14px;
}
html .m-switch--m.r-switch--checked .r-switch-mark {
    left:auto;
    right:2px;
}
html .m-switch--m .r-switch-mark {
    left:2px;top:2px;
    width:16px;
    height:16px;
}
html .m-switch--m .r-switch-checked-symbol {
    border: 2px solid white;
    border-top-width: 0;
    border-right-width: 0;
    width: 9px;
    height: 4px;
    position: relative;
    top:-3px;
    left:0px;
}

html .m-switch--l {
    width:52px;
    border-top-right-radius: 26px;
    border-top-left-radius: 26px;
    border-bottom-right-radius: 26px;
    border-bottom-left-radius: 26px;
    height: 26px;
    line-height: 26px;
    font-size:16px;
}
html .m-switch--l.r-switch--checked .r-switch-mark {
    left:auto;
    right:2px;
}
html .m-switch--l .r-switch-mark {
    left:2px;top:2px;
    width:22px;
    height:22px;
}
html .m-switch--l .r-switch-checked-symbol {
    border: 2px solid white;
    border-top-width: 0;
    border-right-width: 0;
    width: 12px;
    height: 6px;
    position: relative;
    top:-4px;
    left:0px;
}
````

<div id="example__custom-style_node" class="fast-flow-demo">loading...</div>

<!--MR-R {
    type: "pre",
    file: './custom-style.demo.js'
} -->
[./custom-style.demo.js](./custom-style.demo.js)
