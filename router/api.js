const router = require('express').Router();
const journalController=require("../controllers/journal_controller");

router.get('/', function (req, res) {
    res.json({
        status: 'API Its Working',
        message: 'Welcome to RESTHub crafted with love!'
    });
});
router.post("/newJournal",journalController.create);
router.post('/updateJournal',journalController.update);
router.get("/journals",journalController.findAll);
router.get("/ids",journalController.findIds);
router.post('/journalByID',journalController.findJournalById)


module.exports = router;



