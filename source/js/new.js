$(function () {

    $("button.btn").on("click", function (e) {

        e.preventDefault();

        $(this).closest("div").find("button.btn").removeClass("-on");
        $(this).addClass("-on");

        $("ul.list").removeClass("-on");
        $("ul.list." + $(this).attr("data-target")).addClass("-on");

    });

    var list = $(".list .new");

    list.on("click", onClick);

    function onClick(e) {

        var title = e.currentTarget.id;
        var name;

        //發送請求 -> 返回res物件
        $.getJSON("./source/json/data.json", function (res) {

            //返回物件名稱(i)、物件內容(json)
            $.each(res, function (i, json) {

                data = json[title];

                var show =

                    "<div id='newBox' class=new-box>" +
                    "<div class=new-content>" +
                    "<p class=title>" + data["title"] + "</p>" +
                    "<div class=content-box>" +
                    "<div class=content>" +
                    "<p class=text>" + data["text"] + "</p>" +
                    "<img src=./source/img/" + data["img"] + ">" +
                    "</div></div></div></div>";

                name = "#" + title;

                //新增燈箱的點擊事件
                $(name).append(show).click(function (e) {

                    //如果被按到的是燈箱黑色部分(newBox)
                    if( e.target.id == "newBox"){
                        
                        //刪除燈箱的點擊事件
                        $(name).off("click");
                        
                        //刪除燈箱
                        $(e.target).remove();
                        
                        //恢復list的點擊事件
                        list.on("click", onClick);
                    }
                });
            });
        });

        //取消點擊事件
        list.off("click");
    }
});
