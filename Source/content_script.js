walk(document.body);

function walk(node) 
{
	// I stole this function from here:
	// http://is.gd/mwZp7E
	
	var child, next;

	switch ( node.nodeType )  
	{
		case 1:  // Element
		case 9:  // Document
		case 11: // Document fragment
			child = node.firstChild;
			while ( child ) 
			{
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;

		case 3: // Text node
			handleText(node);
			break;
	}
}

function handleText(textNode) 
{
	var v = textNode.nodeValue;

	v = v.replace(/\bWalk\b/g, "Wank");
	v = v.replace(/\bwalk\b/g, "wank");
	v = v.replace(/\bWalker\b/g, "Wanker");
	v = v.replace(/\bwalker\b/g, "wanker");
	v = v.replace(/\bWalking\b/g, "Wanking");
	v = v.replace(/\bwalking\b/g, "wanking");
	v = v.replace(/\bWalked\b/g, "Wanked");
	v = v.replace(/\bwalked\b/g, "wanked");
	v = v.replace(/\bWalks\b/g, "Wanks");
	v = v.replace(/\bwalks\b/g, "wanks");
	v = v.replace(/\bWalkers\b/g, "Wankers");
	v = v.replace(/\bwalkers\b/g, "wankers");
	
	textNode.nodeValue = v;
}


