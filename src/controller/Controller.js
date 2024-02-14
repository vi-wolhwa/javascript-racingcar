import CarGame from '../model/CarGame.js';
import Preprocessor from '../utils/Preprocessor.js';
import InputView from '../view/InputView.js';
import OutputView from '../view/OutputView.js';

class Controller {
  #carGame;

  constructor() {
    this.#carGame = new CarGame();
  }

  // TODO: 예외처리 모듈화
  async inputCarNames() {
    while (1) {
      try {
        const namesInput = await InputView.readCarNames();
        const carsNames = Preprocessor.filterOutEmptyStrings(
          namesInput.split(',')
        );

        return this.#carGame.setCars(carsNames);
      } catch (error) {
        OutputView.printErrorMessage(error.message);
      }
    }
  }

  // TODO: 예외처리 모듈화
  async inputTryCount() {
    while (1) {
      try {
        const tryCountInput = await InputView.readTryCount();
        return this.#carGame.setTryCount(tryCountInput);
      } catch (error) {
        OutputView.printErrorMessage(error.message);
      }
    }
  }

  playGame() {
    const tryCount = this.#carGame.getTryCount();

    for (let i = 0; i < tryCount; i++) {
      this.#carGame.moveCars();
    }
  }
}

export default Controller;
