const calculateDistancePoints = (distance, hillSize, kPoint) => {
  
  switch (hillSize) {
  	case 'normal':
		return (60 + (distance - kPoint)*2)
		break;
    case 'big':
		return  (60 + (distance - kPoint)*1.8);
		break;
    case 'mamut':
		return  (120 + (distance - kPoint)*1.2);
		break;
	default:
		return "Please, write normal, big or mamut"
  }
};

module.exports = calculateDistancePoints;