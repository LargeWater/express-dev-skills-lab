import { Router } from 'express'
import * as skillsCtrl from "../data/skill-data.js"

const router = Router()

/* GET users listing. */
router.get('/', skillsCtrl.index)

export {
  router
}
