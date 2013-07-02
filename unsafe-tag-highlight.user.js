// ---------------------------------------------------------------------
// ==UserScript==
// @name Unsafe Tag Highlight
// @description Highlights NWS, NLS, and Spoiler tags
// @grant none
// @include http://endoftheinter.net/*
// @include http://*.endoftheinter.net/*
// ==/UserScript==

prefix = parent.location.protocol;

//PROGRAM START
var allLinks, thisLink, match;
allLinks = document.evaluate('//a[@href]',document,null,XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE,null);

for (var i = 0; i < allLinks.snapshotLength; i++) {
  thisLink = allLinks.snapshotItem(i);

		if(thisLink.innerHTML.match(/NWS|NLS|Spoiler/)&&thisLink.href.match(/topics/))
		{
			thisLink.style.color="#AA0000";
		}
}
