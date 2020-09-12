/**
 * Module for feedbacks from the user
 */

const logger = require('../utils/logger');

/**
 * Function to save feedback to the database
 *
 * @param {string} feedback Feedback from the user
 */
async function saveFeedback(feedback) {
  // TODO: save feedback
  logger.info(feedback);
}

module.exports = {
  saveFeedback,
};
