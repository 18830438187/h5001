/**
 * Created by Mir.Li on 2017/1/13.
 */
;(function ($) {
    $.fn.table = function (options) {
        var defaules = {
            //各种参数和属性
            evenRowClass:'evenRow',
            oddRowClass:'oddRow',
            currentRowClass:'currentRow',
            eventType1:'mouseover',
            eventType2:'mouseout'
        };
        var options = $.extend(defaules,options);
        this.each(function () {
            //需要实现的功能代码
             $(this).find('tr:even').addClass(options.evenRowClass);
             $(this).find('tr:odd').addClass(options.oddRowClass);
             $(this).find('tr').bind(options.eventType1,function () {
                 $(this).addClass(options.currentRowClass)
             });
             $(this).find('tr').bind(options.eventType2,function () {
                 $(this).removeClass(options.currentRowClass)
             })
        })
    }
})(jQuery);

//table选项卡切换插件
;(function ($) {
    $.fn.tab = function (options) {
        var defaules = {
            //各种参数和属性
           currentClass:'sc',
            tabNav:'.tabnav>li',
            tabCon:'.tabcon>div',
            evenType:'click'

        };
        var options = $.extend(defaules,options);
        this.each(function () {
            //需要实现的功能代码
            var _this=$(this);
            _this.find(options.tabNav).bind(options.evenType,function () {
                $(this).addClass(options.currentClass).siblings().removeClass(options.currentClass);
                var index = $(this).index();
                _this.find(options.tabCon).eq(index).show().siblings().hide()
            })
        })
    }
})(jQuery);