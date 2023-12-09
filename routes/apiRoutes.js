const router = require('express').Router();
const fs = require('fs');



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
        res.status(500).json({ error: 'Invalid JSON data.' });
      }
    });
  });
  

module.exports = router;