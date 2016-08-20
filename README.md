# *jQuery.pager.js二次修改*

----------

`jQuery.pager.js`是一款通过回调函数进行分页处理的[jQuery](http://jquery.com/)插件，原作者是[jonpauldavies](https://github.com/jonpauldavies)，公司业务需求需要扩展这段代码，恰好jonpauldavies又没有设定禁止演绎一类的协议，所以才有了这次的二次开发。

通过改进jonpauldavies的jQuery.pager.js，增加鼠标点击当前页码变为可编辑，并绑定回车事件

通过类似如下的方式与后端进行交互：

```js
$("#pager").pager({
    pagenumber: pageIndex,
    pagecount: pageCount,
    buttonClickCallback: function (pageclickednumber) {
        loadPagination(pageclickednumber);
    }
});
function loadPagination(pageNum) {
    jQuery.ajax({
        type: "POST",
        url: baseUrl + "/interface.json",
        dataType: "json",
        data: postData,
        beforeSend: function () {
            $.modal.on("loading");
        },
        success: function (data) {
            //代码区
        }
    }
}
```

实例：[jquery.pager.js v2](http://kangcafe.com/jquery.pager.js/)
