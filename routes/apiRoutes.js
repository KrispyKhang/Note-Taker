const router = require('express').Router();
const fs = require('fs');
const { v4 } = require('uuid');



router.get('/notes', (req, res) => {
    fs.readFile('db/db.json', (err, data) => {
        if (err) {
            // Handle the error, e.g., send an error response
            res.status(500).json({ error: 'Unable to read the file.' });
            return;
        }

        try {
            const jsonData = JSON.parse(data);
            res.json(jsonData);
        } catch (parseError) {
            // Handle JSON parsing error, e.g., send an error response
            res.status(500).json({ error: 'Invalid JSONNN data.' });
        }
    });
});


router.post('/notes', (req, res) => {
    fs.readFile('db/db.json', (err, data) => {
        if (err) {
            // Handle the error, e.g., send an error response
            res.status(500).json({ error: 'Unable to read the file.' });
            return;
        }

        try {
            const jsonData = JSON.parse(data);
            const newNote = { ...req.body, id: v4() };
            jsonData.push(newNote);

            fs.writeFile('db/db.json', JSON.stringify(jsonData), 'utf-8', (err) => {
                if (err) {
                    console.error('Error writing to file:', err);
                    return;
                }
                console.log('Data has been written to the file.');
            });

            res.json(jsonData);
        } catch (parseError) {
            // Handle JSON parsing error, e.g., send an error response
            res.status(500).json({ error: 'Invalid JSON data.' });
        }
    });
});


router.delete('/notes/:id', (req, res) => {
    fs.readFile('db/db.json', (err, data) => {
        if (err) {
            // Handle the error, e.g., send an error response
            res.status(500).json({ error: 'Unable to read the file.' });
            return;
        }

        try {
            const jsonData = JSON.parse(data);
            const remainingNotes = jsonData.filter((note) => {
                return note.id !== req.params.id;

            })

            fs.writeFile('db/db.json', JSON.stringify(remainingNotes), 'utf-8', (err) => {
                if (err) {
                    console.error('Error writing to file:', err);
                    return;
                }
                console.log('data successfully deleted');
            });

            res.json(remainingNotes);
        } catch (parseError) {
            // Handle JSON parsing error, e.g., send an error response
            res.status(500).json({ error: 'Invalid JSON data.' });
        }
    });
});




module.exports = router;