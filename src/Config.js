const Messages = {
  INPUT_CAR_NAMES:
    '경주할 자동차 이름을 입력하세요(이름은 쉼표(,)를 기준으로 구분).\n',
  INPUT_ATTEMPTS: '시도할 회수는 몇회인가요?\n',
  PRINT_WINNER: '가 최종 우승했습니다.',
  MOVING_TRACE: '-',
  ERROR_RANGE: '[ERROR] 길이가 잘못되었습니다.',
  ERROR_NUMBER: '[ERROR] 입력값이 자연수가 아닙니다.',
  ERROR_TOO_MANY: '[ERROR] 연속된 오입력이 감지되어 강제 종료합니다.',
  RESULT: '실행 결과',
  WINNER_SEPARATOR: ', ',
};

const Settings = {
  SEPARATOR: ',',
  MIN_NAME_LENGTH: 1,
  MAX_NAME_LENGTH: 5,
  MIN_ATTEMPTS: 1,
  MAX_ATTEMPTS: 1000,
  MIN_RANDOM_VALUE: 0,
  MAX_RANDOM_VALUE: 10,
  MOVING_POWER: 4,
  WRONG_INPUT_PATIENCE: 100,
};

module.exports = { Messages, Settings };