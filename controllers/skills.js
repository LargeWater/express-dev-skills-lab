import { Skill } from '../models/skill.js'

function index(req, res) {
  Skill.find({})
  .then(skills => {
    res.render('todos/index', {
      skills
    })
  })
  .catch(error => {
    console.log(error)
    res.redirect('/')
  })
}

export {
  index
}