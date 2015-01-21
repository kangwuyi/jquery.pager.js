#*jQuery.pager.js二次修改*

----------

jQuery.pager.js是一款通过回调函数进行分页处理的jquery插件，原作者是jonpauldavies

通过改进jonpauldavies的jQuery.pager.js，增加鼠标点击当前页码变为可编辑，并绑定回车事件

通过类似如下的方式与后端进行交互：

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

----------

附上原作者信息如下：
/*
* jQuery pager plugin
* Version 1.0 (12/22/2008)
* @requires jQuery v1.2.6 or later
*
* Example at: http://jonpauldavies.github.com/JQuery/Pager/PagerDemo.html
*
* Copyright (c) 2008-2009 Jon Paul Davies
* Dual licensed under the MIT and GPL licenses:
* http://www.opensource.org/licenses/mit-license.php
* http://www.gnu.org/licenses/gpl.html
*
* You can always find me on Twitter @jonpauldavies
*
* Read the related blog post and contact the author at http://www.j-dee.com/2008/12/22/jquery-pager-plugin/
*
* This version is far from perfect and doesn't manage it's own state, therefore contributions are more than welcome!
*
* Usage: .pager({ pagenumber: 1, pagecount: 15, buttonClickCallback: PagerClickTest });
*
* Where pagenumber is the visible page number
*       pagecount is the total number of pages to display
*       buttonClickCallback is the method to fire when a pager button is clicked.
*
* buttonClickCallback signiture is PagerClickTest = function(pageclickednumber)
* Where pageclickednumber is the number of the page clicked in the control.
*
* The included Pager.CSS file is a dependancy but can obviously tweaked to your wishes
* Tested in IE6 IE7 Firefox & Safari. Any browser strangeness, please report.
*/
