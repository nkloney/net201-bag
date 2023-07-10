dragElement(document.getElementById('item1'));
dragElement(document.getElementById('item2'));
dragElement(document.getElementById('item3'));
dragElement(document.getElementById('item4'));
dragElement(document.getElementById('item5'));
dragElement(document.getElementById('item6'));
dragElement(document.getElementById('item7'));
dragElement(document.getElementById('item8'));

let max_Z_Index = 2

function dragElement(bagElement) {
	//set 4 positions for positioning on the screen
	let pos1 = 0,
		pos2 = 0,
		pos3 = 0,
		pos4 = 0;
	bagElement.onpointerdown = pointerDrag;

function pointerDrag(e) {
	//increments the z index by 1
	//edited out - max_Z_Index += 1;
	//sets the current element's z index to the new top index
	bagElement.style.zIndex = max_Z_Index;
	e.preventDefault();
	console.log(e);
	pos3 = e.clientX;
	pos4 = e.clientY;

    document.onpointermove = elementDrag;
    document.onpointerup = stopElementDrag;
}

function elementDrag(e) {
	pos1 = pos3 - e.clientX;
	pos2 = pos4 - e.clientY;
	pos3 = e.clientX;
	pos4 = e.clientY;
	console.log(pos1, pos2, pos3, pos4);
	bagElement.style.top = bagElement.offsetTop - pos2 + 'px';
	bagElement.style.left = bagElement.offsetLeft - pos1 + 'px';
}

function stopElementDrag() {
	document.onpointerup = null;
	document.onpointermove = null;
}
}
