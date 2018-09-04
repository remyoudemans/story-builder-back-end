const getExampleStories = (req, res, next) =>
	res.json({
		titles: ['Introduction', "A spider's uncle", 'How many ducks do YOU see?'],
		chapters: [
			"When I was just a boy, living a boy's life in New Jersey...",
			"I don't know if I should be saying this, but at this point I may as well. I have an arachnid for a niece.",
			"That's the funny thing about ducks isn't it? Some of them might be underwater!"
		]
	})

module.exports = {
	getExampleStories
}
