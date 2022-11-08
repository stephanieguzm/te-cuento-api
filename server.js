const express = require('express')
const app = express()
const cors = require('cors')
const environment = process.env.NODE_ENV || 'development'
const configuration = require('./knexfile')[environment]
const database = require('knex')(configuration)
const bodyParser = require("body-parser");

app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.locals.title = 'Te Cuento API'

app.set('port', process.env.PORT || 9000)
app.listen(app.get('port'), () => {
  console.log(`${app.locals.title} is now running on ${app.get('port')}!`)
})

/* ------------ GET ALL TEAS ------------ */
app.get('/api/v1/teas', async (request, response) => {
  try {
    const teas = await database('teas').select()
    response.status(200).json(teas)
  } catch(error) {
    response.status(500).json({ error })
  }
})

/* ------------ GET ALL COMMENTS ------------ */
app.get('/api/v1/comments', async (request, response) => {
  try {
    const comments = await database('comments').select()
    response.status(200).json(comments)
  } catch(error) {
    response.status(500).json({ error })
  }
})

/* ------------ GET SINGLE TEA ------------ */
app.get('/api/v1/teas/:id', async (request, response) => {
  try {
    const tea = await database('teas').where('id', request.params.id).select()
    if (teas.length) {
      response.status(200).json(tea)
    } else {
      response.status(404).json({
        error: `Could not find tea with id ${request.params.id}`
      })
    }
  } catch (error) {
    response.status(500).json({ error })
  }
})

/* ------------ POST SINGLE COMMENT ------------ */
app.post('/api/v1/comments', async(request, response) => {
  const comment = request.body

  for (let requiredParameter of ['id', 'tea_id', 'user_name', 'user_message']) {
    if(!comment[requiredParameter]) {
      return response 
        .status(422)
        .send({ error: `Expected format: {id: <Integer>, tea_id: <Integer>, user_name: <String>, user_message: <Text>}. You're missing a "${requiredParameter}" property.`})
    }
  }
  try {
    const id = await database('comments').insert(comment, 'id')
    response.status(201).json({ id })
  } catch (error) {
    response.status(500).json({ error })
  }
})