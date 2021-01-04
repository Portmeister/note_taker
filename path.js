const router = require("express").Router();
const store = require("./db/db.json");

router.get("/note", function(req, res) {
    store
        .getNotes()
        .then((notes) => {
            res.json(notes);
        })
        .catch((err) => {
            res.status(500).json(err);
    });
});

router.post("/note", function(req, res) {
    store
        .addNote(res.body)
        .then((note) => {
            res.json(note);
        })
        .catch((err) => {
            res.status(500).json(err);
        });
});

router.delete("/note/id:", function(req, res) {
    store
        .removeNote(req.params.id)
        .then(() => {
            res.json({ ok: true });
        })
        .catch((err) => {
            res.status(500).json(err);
        });
});

module.exports = router;