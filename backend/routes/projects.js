const router = require('express').Router();
const db = require('../config/db');

// GET all projects
router.get('/', (req, res) => {
db.query(
'SELECT * FROM projects ORDER BY featured DESC, id ASC',
(err, results) => {
if (err) return res.status(500).json({ error: err.message });
res.json(results);
}
);
});

// GET single project
router.get('/:id', (req, res) => {
db.query(
'SELECT * FROM projects WHERE id = ?',
[req.params.id],
(err, results) => {
if (err) return res.status(500).json({ error: err.message });

```
  if (results.length === 0) {
    return res.status(404).json({ error: 'Project not found' });
  }

  res.json(results[0]);
}
```

});
});

// POST create project
router.post('/', (req, res) => {
const {
title,
description,
techStack,
githubUrl,
liveUrl,
featured
} = req.body;

db.query(
`INSERT INTO projects
    (title, description, techStack, githubUrl, liveUrl, featured)
    VALUES (?, ?, ?, ?, ?, ?)`,
[
title,
description,
techStack,
githubUrl,
liveUrl,
featured || false
],
(err, result) => {
if (err) return res.status(500).json({ error: err.message });

```
  res.status(201).json({
    message: 'Project created',
    id: result.insertId
  });
}
```

});
});

// PUT update project
router.put('/:id', (req, res) => {
const {
title,
description,
techStack,
githubUrl,
liveUrl,
featured
} = req.body;

db.query(
`UPDATE projects
     SET title=?, description=?, techStack=?,
         githubUrl=?, liveUrl=?, featured=?
     WHERE id=?`,
[
title,
description,
techStack,
githubUrl,
liveUrl,
featured,
req.params.id
],
(err) => {
if (err) return res.status(500).json({ error: err.message });

```
  res.json({ message: 'Project updated' });
}
```

});
});

// DELETE project
router.delete('/:id', (req, res) => {
db.query(
'DELETE FROM projects WHERE id=?',
[req.params.id],
(err) => {
if (err) return res.status(500).json({ error: err.message });

```
  res.json({ message: 'Project deleted' });
}
```

});
});

module.exports = router;
