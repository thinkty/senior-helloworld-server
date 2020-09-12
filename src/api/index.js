/**
 * This module defines the basic routes for the server's APIs
 * [GET]
 * - / : send 200 status
 * - /guide : send the guide that matches the requested guide number
 * - /pinned : send the pinned guides from the database
 *
 * [POST]
 * - /search : execute the search query with algolia
 * - /feedback : save the given feedback
 */
const { Router } = require('express');
const { getGuideByNum, getPinnedGuides } = require('./guide');
const { search } = require('./search');
const { saveFeedback } = require('./feedback');

const router = Router();

router.get('/', (req, res, next) => {
  try {
    res.sendStatus(200);
  } catch (error) {
    next(error);
  }
});

router.get('/guide', (req, res, next) => {
  try {
    const { body } = req;
    const { guideNum } = body;

    getGuideByNum(guideNum)
      .then(() => {
        res.sendStatus(200);
      });
  } catch (error) {
    next(error);
  }
});

router.get('/pinned', (req, res, next) => {
  try {
    getPinnedGuides()
      .then(() => {
        res.sendStatus(200);
      });
  } catch (error) {
    next(error);
  }
});

router.post('/search', (req, res, next) => {
  try {
    const { body } = req;
    const { query } = body;

    search(query)
      .then(() => {
        res.sendStatus(200);
      });
  } catch (error) {
    next(error);
  }
});

router.post('/feedback', (req, res, next) => {
  try {
    const { body } = req;
    const { feedback } = body;

    saveFeedback(feedback)
      .then(() => {
        res.sendStatus(200);
      });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
