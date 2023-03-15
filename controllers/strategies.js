const express = require('express')
const router = express.Router()
const Strategy = require('../models/strategies.js')



//ROUTES 

// //Seed Route
// router.get('/seed', (req, res) =>{
// 	Strategy.create([
// 		{
//             title:'Walk',
//             description:'Go out for a walk.',
//             contributor: 'Willard Smithe'
//         },
//         {
//             title:'Meditate',
//             description:'Sit Quietly.',
//             contributor: 'Steve Guy'
//         },
//         {
//             title:'Journal',
//             description:'Write in your journal.',
//             contributor:'Sally Sommers'
//         }
// 	], (err, data) => {
// 		res.redirect('/strategies')
// 	})
// })

// INDEX ROUTE
router.get('/', (req, res) => {
	Strategy.find({}, (err, foundStrategy) => {
		if(err){console.log(err.message)}
		// console.log(foundStrategy[0])
		res.render('index.ejs', {
			strategies: foundStrategy
		})
	})
})



// POST  DATA TO DB
router.post('/', (req, res) => {
    // console.log(req.body, 'THIS IS Strategy ')
	Strategy.create(req.body, (error, createdStrategy) => {
        // console.log(error, "THIS IS THE ERROR")
        console.log(createdStrategy, 'CREATED Strategy')
		res.redirect('/strategies') //<--- redirect to index.ejs
		// res.redirect('/Strategys/' + createdStrategy.id); <-- redirect to a single show page
	});
});

// RENDER NEW Strategy PAGE
router.get('/new', (req,res) => {
    res.render('new.ejs')
})


//Render Show Page
router.get('/:id', (req, res) => {
	Strategy.findById(req.params.id, (err, foundStrategy) => {
		if(err){console.log(err.message)}
		res.render('show.ejs', {
			strategy: foundStrategy
		})
	})
})

// setup our DELETE route 
router.delete('/:id', (req, res) => {
	Strategy.findByIdAndDelete(req.params.id, (err, deletedStrategy) => {
		// findByIdAndDelete will delete a document with a given id 
		if(err) {
			console.log(err)
			res.send(err)
		} else {
			// redirect to the index page if the delete is successful 
			console.log(deletedStrategy)
			res.redirect('/strategies')
		}
	})
})

// make an edit page and a route to it 
// create an edit.ejs view 
// link to the edit page from each of the Strategys 
router.get('/:id/edit', (req, res) => {
	Strategy.findById(req.params.id, (err, foundStrategy) => {
		if(err) {
			console.log(err)
			res.send(err)
		} else {
			// make the edit form show the existing data 
			res.render('edit.ejs', {
				strategy: foundStrategy
			})
		}
	})
})

router.put('/:id', (req, res) => {
	// console.log(req.body)


	Strategy.findByIdAndUpdate(req.params.id, req.body, { new: true,}, 
	(err, updatedStrategy) => {
		// findByIdAndUpdate updates a Strategy with a given id
		// the new option means we wait get the updated Strategy returned 
		// without this flag, we will get the Strategy before it was modified

		if(err) {
			console.log(err)
			res.send(err)
		} else {
			console.log(updatedStrategy)
			// redirect to the index route 
			res.redirect('/strategies')
		}

	})
})

module.exports = router