!function(t,$,e){"use strict";$(function(){var t=$(window).width();$("p.testp").text("Screen width is currently: "+t+"px."),$(window).resize(function(){var t=$(window).width();t<=576?$("p.testp").text("Screen width is less than or equal to 576px. Width is currently: "+t+"px."):t<=680?$("p.testp").text("Screen width is between 577px and 680px. Width is currently: "+t+"px."):t<=1024?$("p.testp").text("Screen width is between 681px and 1024px. Width is currently: "+t+"px."):t<=1500?$("p.testp").text("Screen width is between 1025px and 1499px. Width is currently: "+t+"px."):$("p.testp").text("Screen width is greater than 1500px. Width is currently: "+t+"px.")}),$("ul.seniorteam,ul.department").on("click touchend",".js__bio",function(t){t.preventDefault();var e=$(this).attr("id"),i=$("div.biocontent#staff-"+e).html();$.magnificPopup.open({items:{src:'<div class="popupbio">'+i+"</div>",type:"inline"}})}),$("section.filternav > select").change(function(t){t.preventDefault();var e="//"+window.location.hostname+(""!=$(this).val()?"/staff?filter="+$(this).val():"/staff");window.location.href=e}),$(".js__rotate-homepage").on("click touchend","li > div",function(t){var e=Array($(this).attr("data-id"),$(this).attr("data-sid"));$("section.stories > ul > li[id=story-"+e[0]+"] > a").css({display:"none"}),$("ul.js__rotate-homepage > li > div[data-id="+e[0]+"]").removeClass("active"),$("section.stories > ul > li[id=story-"+e[0]+"] > a[id=story-"+e[0]+"-"+e[1]+"]").css({display:"block"}),$(this).addClass("active")}),$("nav").on("click touchend","ul > li:first-child",function(t){t.preventDefault(),$("nav > ul").height()>50?($("nav > ul").css({height:"50px"}),$("nav > ul > li:first-child > a").html("&#xf0c9;")):($("nav > ul").css({height:"auto"}),$("nav > ul > li:first-child > a").html("&#xf00d;"))}),$("ul.gallery").each(function(){$(this).magnificPopup({delegate:"a",gallery:{enabled:!0},image:{titleSrc:function(t){return t.el.attr("data-title")}}})}),$("div#secondarynav ul li:nth-of-type(1) a").click(function(t){t.preventDefault(),$("div#secondarynav ul").hasClass("open")?($("div#secondarynav ul").removeClass("open"),$("div#secondarynav ul li:nth-of-type(1) a span").html("&#xf0d9;")):($("div#secondarynav ul").addClass("open"),$("div#secondarynav ul li:nth-of-type(1) a span").html("&#xf0d7;"))}),$("div.searchpanel").on("change","select",function(){var t=$(this).attr("id"),e=window.location.href,i=e.split("?"),n=new Array,a=new Array,o=!1;if(i.length>1)for(var s=i[1].split("&"),c=0;c<s.length;c++){var l=s[c].split("=");l[0]!=t?(n.push(l[0]),a.push(l[1])):"all"===$("select[id="+l[0]+"]").val()?(n.splice(c,1),a.splice(c,1),o=-1):o=c}o?o>=0&&(a[o]=$("select[id="+t+"]").val()):(n.push(t),a.push($("select[id="+t+"]").val()));for(var r="",c=0;c<n.length;c++)r+=""===r?"?"+n[c]+"="+a[c]:"&"+n[c]+"="+a[c];e=i[0]+r,window.location.href=e}),$(window).on("scroll resize",function(){function t(t){var e=Math.max(0,($(window).height()-$(t).outerHeight())/1+$(window).scrollTop()),i=$(t).offset().top,n=i+$(t).height();return i<=e&&n>=e}"relative"!==$("#contentarea:not(.multimedia):not(.staticcontent)").css("position")?$(".title img").height()<$(window).height()?$("#contentarea:not(.multimedia):not(.staticcontent)").css({top:$(".title img").height()-$("header").height()-40,opacity:1}):$("#contentarea:not(.multimedia):not(.staticcontent)").css({top:$(window).height()-$("header").height()-40,opacity:1}):$("#contentarea:not(.multimedia):not(.staticcontent)").css({top:0,opacity:1}),$("#title").length&&($("#contentarea:not(.multimedia):not(.staticcontent)").offset().top-$(document).scrollTop()<=0?$("#title").hide():$("#title").show()),$("div#secondarynav ul").removeClass("open"),$(".sidenote, blockquote").each(function(e,i){t(i)&&$(i).animate({opacity:1},500)})})})}(this,jQuery),$(window).load(function(){$("#title").animate({opacity:1},750),"relative"!==$("#contentarea:not(.multimedia):not(.staticcontent)").css("position")?$(".title img").height()<$(window).height()?$("#contentarea:not(.multimedia):not(.staticcontent)").css({top:$(".title img").height()-$("header").height()-40,opacity:1}):$("#contentarea:not(.multimedia):not(.staticcontent)").css({top:$(window).height()-$("header").height()-40,opacity:1}):$("#contentarea:not(.multimedia):not(.staticcontent)").css({top:0,opacity:1})});