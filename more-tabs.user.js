// ==UserScript==
// @name MoreTags 
// @namespace Sunblood
// @description Adds links to more tags 
// @include http://endoftheinter.net/* 
// @include http://*.endoftheinter.net/* 
// @include https://endoftheinter.net/* 
// @include https://*.endoftheinter.net/* 
// ==/UserScript==

var tags = {};

//****** EDIT HERE ******

//syntax is
//tags['**DisplayName**'] = '//boards.endoftheinter.net/topics/**END OF TAG URL**';
//only change the text between the asterisks

tags['CD'] = '//boards.endoftheinter.net/topics/Complaints';
tags['Tags'] = '//boards.endoftheinter.net/topics/Tags';
tags['Site Suggestions'] = '//boards.endoftheinter.net/topics/Site Suggestions';

lastLink = "Subscribed" //Change this to your rightmost saved tab text to add the new links to the right of it

//****** STOP EDITING ******



prefix = parent.location.protocol;
function insertAfter(newNode, target) { 
  var parent = target.parentNode;
  var refChild = target.nextSibling;
  if(refChild != null) 
      parent.insertBefore(newNode, refChild);
  else 
      parent.appendChild(newNode); 
};
      
var a=document.getElementsByTagName("a");
for (var i=0; i<a.length; i++) {
  if (a[i].innerHTML==lastLink) {
    var m = document.createElement("a");
    for (var x in tags) {
      var temp = "<a href=\"" + prefix + tags[x] +"\">" + x + "</a>";
      m.innerHTML += " | " + temp;
    }
    insertAfter(m, a[i]);
    break;
    }
}
