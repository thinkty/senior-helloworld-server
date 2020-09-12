/**
 * Module for guides
 */

const logger = require('../utils/logger');

/**
 * Retrieve the guide corresponding to the guide number
 *
 * @param {number} guideNum Guide number
 */
async function getGuideByNum(guideNum) {
  logger.info(guideNum);
}

/**
 * Retrieve the pinned guide numbers from the database and return the
 * appropriate guides
 */
async function getPinnedGuides() {
  logger.info('Get Pinned Guides');
}

module.exports = {
  getGuideByNum,
  getPinnedGuides,
};
