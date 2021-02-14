module.exports = {
  before : function(browser) {
    browser.globals.waitForConditionTimeout = 5000;
  },

  'Demo test landingpage' : function (browser) {
    browser
      .url('https://musclemate.app')
      .waitForElementVisible('#app')
      .click('.btn-gradient')
      .expect.element('.workoutcard').text.to.contain('Basic Workout')
  },

  after : function(browser) {
    browser.end();
  }
};
