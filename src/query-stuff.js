const getQueryStuff = (req, res, next) => {
	const response = req.query.keys
		? ['bible', 'tree', 'oscar'].map(key => {
				if (req.query.keys.includes(key)) {
					switch (key) {
						case 'bible':
							return 'My father was a disc jockey'
						case 'tree':
							return "For God's sake! Get down!"
						default:
							return "I wouldn't ask that if I were you"
					}
				}
				return 'Ew'
		  })
		: null
	return res.json(response)
}

module.exports = {
	getQueryStuff
}
