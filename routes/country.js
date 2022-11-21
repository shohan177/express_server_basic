const express = require('express');
const router = express.Router();

const { handelGet, handelPost, handelPut, handelPatch, handelDelete } = require('../controllers/countryController')

router.get('/', handelGet);
router.post('/', handelPost);
router.put('/:id', handelPut);
// router.patch('/:id', handelPatch);
// router.delete('/:id', handelDelete);
router.route('/:id').patch(handelPatch).delete(handelDelete)

module.exports = router;  