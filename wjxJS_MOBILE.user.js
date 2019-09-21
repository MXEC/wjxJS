// ==UserScript==
// @name         wjxJS_MOBILE
// @namespace    https://github.com/wkmyws/wjxJS
// @version      1.0
// @description  问卷星填写信息，支持input radio checkbox，支持手机端网页
// @author       wkmyws
// @match        https://www.wjx.cn/*
// @match        https://www.wjx.top/*
// @grant        none
// @require      https://code.jquery.com/jquery-1.12.4.min.js
// @updateURL    https://github.com/wkmyws/wjxJS
// @supportURL   https://github.com/wkmyws/wjxJS
// ==/UserScript==


/*
**info 第一个参数:匹配的标题（正则表达式）
**info 第二个参数:对应的填入选项（字符串）
**info 第三个参数:(可选)，当答题框为单选|多选时匹配的选项（正则表达式）
*/

(function() {
    'use strict';
    const info=[
        [/(姓名)|(名字)/,"何梦云"],
        [/性别/,"女",/女/],
        [/书院[^班]/,"润园书院",/润/],
        [/(行政)|(番号)|(书院班级)/,"180128"],
        [/(专业)|(班级)/,"数据科学与大数据技术班"],
        [/学号/,"181091039"],
        [/(联系)|(电话)|(手机)/,"17612591559"],
        [/(QQ)|(qq),"3098869797"/],
        [/年级/,"18",/18/]
    ];
    const ini={
        module:".field.ui-field-contain",//每个问题模块
        title:".field-label",//标题
        type:{
           "input_text":"input[type='text']",
           "input_tel":"input[type='tel']",
           "radio":".ui-radio",
           "checkbox":".ui-checkbox"
        }
    };
    $(document).ready(function(){
        $(ini.module).each(function(){
            let title=$(this).find(ini.title).text();
            let No;
            title=title.replace(/(\d+)\.(.+)/,function(all,num,tit){No=num-0;return tit;})
            //判断类别
            for(let i=0;i<info.length;i++){//匹配用户信息
                if(info[i][0].test(title)){//匹配到一处信息,判断答题框类型,加break！
                   for(let tp in ini.type){
                       let dom=$(this).find(ini.type[tp])
                       if(dom.length>0){
                           switch(tp){
                               case "input_text":
                               case "input_tel":
                                   $("#q"+No).val(info[i][1]);
                                   break;
                               case "radio":
                                   $(this).find(".ui-radio").each(function(){
                                       if(info[i].length>=3&&info[i][2].test($(this).text()))$(this).find(".label").click()
                                   })
                                   break;
                               case "checkbox":
                                   $(this).find(".ui-checkbox").each(function(){
                                       if(info[i].length>=3&&info[i][2].test($(this).text()))$(this).find(".label").click()
                                   })
                                   break;
                               default:alert("ini.type中没有匹配"+tp+"的键值");
                           }
                           break;
                       }
                   }
                    break;
                }
            }
        })
    });

})();










