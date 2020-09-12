/**
 * Module for searching
 */

const logger = require('../utils/logger');

/**
 * Execute a search operation on Algolia with the user-provided query
 *
 * @param {string} query Query from the user
 */
async function search(query) {
  // TODO: execute search
  logger.info(query);
}

module.exports = {
  search,
};
