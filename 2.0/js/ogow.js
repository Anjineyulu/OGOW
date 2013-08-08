/* ===================================================
 * Copyright 2013 ZathraC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ========================================================== */
(function ($) {

    $.fn.fbfeed = function (options) {
    	
    	
        var info = "https://graph.facebook.com/" + options.id + "/"
        var feed = "https://graph.facebook.com/" + options.id + "/feed?access_token=170597049775092|Z5gUnx7kDEfGqucCJTGXT-L_QYA";
        $("#post").addClass('media ')

$.getJSON(info, function (fbresults) {
	
            $("#post").append("<h3>" + fbresults.name + "</h3>");
        });

        $.getJSON(feed, function (fbresults) {
            $("#loading").hide();

            $.each(fbresults.data, function (key, value) {
                if (value.comments) {
                    var comments = value.comments.data;
                } else {
                    comments = '';
                }
                if (value.likes) {
                    var likes = value.likes.data;
                    var like_count = value.likes.count;
                } else {
                    likes = '0';
					like_count='0';
                }
				 if (value.message) {
                   
                } else {
                    value.message='';
                }
                var id = value.id;

                if (value.type == 'status') {
                    $("#post").append("<img class='media-object pull-left img-thumbnail' src='http://graph.facebook.com/" + value.from.id + "/picture'>")
                    $("#post").append("<div class='media-body'><h5 class=' media-heading'><a href='http://facebook.com/" + value.from.id + "'>" + value.from.name + "</a></h5><p >"+ value.message + "</p></div>")
                     
                     if(options.comment=='yes'){
                        $("#post").append("<h5 class='com' id='" + id + "show_com'><img src='http://s23.postimg.org/yyohcmyef/2013_08_06_22_59_50_Facebook.png'> Comments </h5>")
                       
                    if (likes !== '')
                        $("#post").append("<h5 class='like'>Likes " + like_count + " </h5>")
                        }
                        else{
                        if (likes !== '')
                        $("#post").append("<h5 class='com'><img src='http://s23.postimg.org/yyohcmyef/2013_08_06_22_59_50_Facebook.png'>  Likes " + like_count + " </h5>")
                        }
if(options.comment=='yes'){
                    $.each(comments, function (key, value) {

                       $("#post").append("<div class='comment media'><img class='media-object pull-left img-thumbnail' src='http://graph.facebook.com/" + value.from.id + "/picture'><div class='media-body'><h5 class='media-heading'><a href='http://facebook.com/" + value.from.id + "'>" + value.from.name + "</a></h5>&nbsp;<p>" + value.message + "</p><p><img class='like' src='http://leetcode.com/wp-content/uploads/2012/09/facebook-like-icon.png'> " + value.like_count + "</p></div>")

                    });
                   }
                    $("#post").append("<hr/>")
					 $("#post").append("<br/>")
					


                } else if (value.type == 'photo') {
                    var lar_puic = value.picture;
                    lar_puic = lar_puic.replace("_s", "_n");
                    $("#post").append("<img  class='media-object pull-left img-thumbnail' src='http://graph.facebook.com/" + value.from.id + "/picture'>")
                    $("#post").append("<div class='media-body'><h5 class=' media-heading' ><a href='http://facebook.com/" + value.from.id + "'>" + value.from.name + "</a></h5><p >" + value.message + "</p><a href=" + lar_puic + "><img class='pic' src=" + value.picture + "></a></div>")
                     
                     if(options.comment=='yes'){
                        $("#post").append("<h5 class='com' id='" + id + "show_com'><img src='http://s23.postimg.org/yyohcmyef/2013_08_06_22_59_50_Facebook.png'> Comments </h5></div>")
                       if (likes !== '')
                        $("#post").append("<h5 class='like'>Likes " + like_count + " </h5>")
                        }
                        else{
                        if (likes !== '')
                        $("#post").append("<h5 class='com'><img src='http://s23.postimg.org/yyohcmyef/2013_08_06_22_59_50_Facebook.png'>  Likes " + like_count + " </h5>")
                        }
                   
if(options.comment=='yes'){
                    $.each(comments, function (key, value) {

                       $("#post").append("<div class='comment media'><img class='media-object pull-left img-thumbnail' src='http://graph.facebook.com/" + value.from.id + "/picture'><div class='media-body'><h5 class='media-heading'><a href='http://facebook.com/" + value.from.id + "'>" + value.from.name + "</a></h5>&nbsp;<p>" + value.message + "</p><p><img class='like' src='http://leetcode.com/wp-content/uploads/2012/09/facebook-like-icon.png'> " + value.like_count + "</p></div>")

                    });
                   }

                    $("#post").append("<hr/>")
$("#post").append("<br/>")
                } 
				
				else if (value.type == 'link') {
                    $("#post").append("<img class='media-object pull-left img-thumbnail' src='http://graph.facebook.com/" + value.from.id + "/picture'>")
                    $("#post").append("<div class='media-body'><h5 class='media-heading'><a href='http://facebook.com/" + value.from.id + "'>" + value.from.name + "</a></h5><p >" + value.message + "</p><p><a  href='" + value.link + "'>"+ value.name + "</a></p><p class='description'>"+value.description+"</p></div>")
                    
                     if(options.comment=='yes'){
                        $("#post").append("<h5 class='com' id='" + id + "show_com'><img src='http://s23.postimg.org/yyohcmyef/2013_08_06_22_59_50_Facebook.png'> Comments </h5></div>")
                     if (likes !== '')
                        $("#post").append("<h5 class='like'>Likes " + like_count + " </h5>")
                        }
                        else{
                        if (likes !== '')
                        $("#post").append("<h5 class='com'><img src='http://s23.postimg.org/yyohcmyef/2013_08_06_22_59_50_Facebook.png'> Likes " + like_count + " </h5>")
                        }
                        
if(options.comment=='yes'){
                    $.each(comments, function (key, value) {

                       $("#post").append("<div class='comment media'><img class='media-object pull-left img-thumbnail' src='http://graph.facebook.com/" + value.from.id + "/picture'><div class='media-body'><h5 class='media-heading'><a href='http://facebook.com/" + value.from.id + "'>" + value.from.name + "</a></h5>&nbsp;<p>" + value.message + "</p><p><img class='like' src='http://leetcode.com/wp-content/uploads/2012/09/facebook-like-icon.png'> " + value.like_count + "</p></div>")

                    });
                   }

                    $("#post").append("<hr/>")
					$("#post").append("<br/>")
                }
				
			else if (value.type == 'video') {
                    
                    $("#post").append("<img  class='media-object pull-left img-thumbnail' src='http://graph.facebook.com/" + value.from.id + "/picture'>")
                    $("#post").append("<div class='media-body'><h5 class=' media-heading' ><a href='http://facebook.com/" + value.from.id + "'>" + value.from.name + "</a></h5><p><a  href='" + value.link + "'>"+ value.name + "</a></p><p >" + value.description +"</p></div>")
                     
                        if(options.comment=='yes'){
                        $("#post").append("<h5 class='com' id='" + id + "show_com'><img src='http://s23.postimg.org/yyohcmyef/2013_08_06_22_59_50_Facebook.png'> Comments </h5></div>")
                        
                       if (likes !== '')
                        $("#post").append("<h5 class='like'>Likes " + like_count + " </h5>")
                        }
                        else{
                        if (likes !== '')
                        $("#post").append("<h5 class='com'><img src='http://s23.postimg.org/yyohcmyef/2013_08_06_22_59_50_Facebook.png'> Likes " + like_count + " </h5>")
                        }
                   
if(options.comment=='yes'){
                    $.each(comments, function (key, value) {

                       $("#post").append("<div class='comment media'><img class='media-object pull-left img-thumbnail' src='http://graph.facebook.com/" + value.from.id + "/picture'><div class='media-body'><h5 class='media-heading'><a href='http://facebook.com/" + value.from.id + "'>" + value.from.name + "</a></h5>&nbsp;<p>" + value.message + "</p><p><img class='like' src='http://leetcode.com/wp-content/uploads/2012/09/facebook-like-icon.png'> " + value.like_count + "</p></div>")

                    });
                   }

                    $("#post").append("<hr/>")
$("#post").append("<br/>")
                } 

            });


        });

    }
  
    
    
    
        
      
      
      

	
	 $.fn.members_main = function (object) {
        var info = "https://graph.facebook.com/" + object.id + "/";
		$("#members").addClass('media')
        var members = "https://graph.facebook.com/" + object.id + "/members?access_token=170597049775092|Z5gUnx7kDEfGqucCJTGXT-L_QYA";
        $.getJSON(members, function (fbresults) {
   
            $.each(fbresults.data, function (key, value) {
    
                $("#members").append("<div id='members_block'><img class='media-object pull-left img-thumbnail' src='http://graph.facebook.com/" + value.id + "/picture'><div class='media-body'><a class='h5 media-heading' href='http://facebook.com/" + value.id + "'>" + value.name + "</a></div></div>")
                $("#members").append("<hr/>")
                return key<object.limit;
            });
            // Increment i

            
        });
    }



}(jQuery));