//your JS code here. If required.
const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

const sortedBands = bands.sort((a,b)=>{
	// const articleLess=(bandName)=>bandName.replace(/^(A |An |The)/,''); //gives out all the 'The' names on top somehow
	const articleLess=(bandName)=>bandName.replace(/^(A |An |The )/,'');
	
	const bandA = articleLess(a).toLowerCase();
	const bandB = articleLess(b).toLowerCase();

	// return bandA>bandB
	// if(bandA>bandB) return -1
	if(bandA<bandB) return -1;
	if(bandA>bandB) return 1;
	// else return 0;
	return 0;
});
let list = document.getElementById("bands")
for(let s of sortedBands){
let item = document.createElement("li")
item.innerText=s
list.append(item)
}