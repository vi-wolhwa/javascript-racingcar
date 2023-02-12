const { RL, ConsoleMessage } = require('../constants/constants');

const OutputView = {
  printMoveDistance(name, distance) {
    console.log(ConsoleMessage.moveDistance(name, '-'.repeat(distance)));
  },

  printEmptyLine() {
    console.log();
  },

  printWinner(winners) {
    console.log(ConsoleMessage.result(winners.join(', ')));
    RL.close();
  },
};

module.exports = OutputView;