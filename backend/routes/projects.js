const router = require('express').Router();
const db = require('../config/db');

// GET all projects
router.get('/', async (req, res) => {
  try {
    const result = await db.query(
      'SELECT * FROM projects ORDER BY id ASC'
    );

    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET single project
router.get('/:id', async (req, res) => {
  try {
    const result = await db.query(
      'SELECT * FROM projects WHERE id = $1',
      [req.params.id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Project not found' });
    }

    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST create project
router.post('/', async (req, res) => {
  try {
    const {
      title,
      technologies,
      description,
      github_link
    } = req.body;

    const result = await db.query(
      `INSERT INTO projects
      (title, technologies, description, github_link)
      VALUES ($1, $2, $3, $4)
      RETURNING id`,
      [
        title,
        technologies,
        description,
        github_link
      ]
    );

    res.status(201).json({
      message: 'Project created',
      id: result.rows[0].id
    });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// PUT update project
router.put('/:id', async (req, res) => {
  try {
    const {
      title,
      technologies,
      description,
      github_link
    } = req.body;

    await db.query(
      `UPDATE projects
       SET title=$1,
           technologies=$2,
           description=$3,
           github_link=$4
       WHERE id=$5`,
      [
        title,
        technologies,
        description,
        github_link,
        req.params.id
      ]
    );

    res.json({ message: 'Project updated' });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// DELETE project
router.delete('/:id', async (req, res) => {
  try {
    await db.query(
      'DELETE FROM projects WHERE id = $1',
      [req.params.id]
    );

    res.json({ message: 'Project deleted' });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;