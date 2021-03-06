const calculateStylePoints = (styleNotes) => {

	let sum = 0;
	const max = Math.max(...styleNotes);
	const min = Math.min(...styleNotes);

	for (let i=0; i<styleNotes.length; i++) {
		sum = sum + styleNotes[i]
	}

	const result = sum - max - min; 

	return result;  

};

module.exports = calculateStylePoints;