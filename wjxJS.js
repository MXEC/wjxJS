// ==UserScript==
// @name         �ʾ���
// @namespace    none
// @version      0.1
// @description  �Զ���д�ʾ���
// @author       NAU �������
// @match        https://www.wjx.top/*/*.aspx
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    if($("div1")==null){setTimeout(function(){location.reload()},100);return;}
    var hash=[
        ["�������",/(����)|(����)/],
        ["���ѧ��",/(ѧ��)/],
        ["��ĵ绰",/(�绰)|(��ϵ)/],
        ["��İ༶",/(��)/],
        ["���QQ",/(QQ)|(qq)/],
        ["��������Ժ",/(��Ժ)/],
        ["��",/(�Ա�)/]
             ]
    function $(a){return document.getElementById(a)}
    for(var i=1;;i++){
        if($("div"+i)==null)break;
        if(!$("q"+i))continue;//��Ϊ<input>����������
        var tit=$("div"+i).innerHTML;
        for(var j=0;j<hash.length;j++){
            if(hash[j][1].test(tit)){$("q"+i).value=hash[j][0];break;}
        }
    }
    
})();