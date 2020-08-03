import * as validations from "./validation"
import * as CONSTANTS from "./constants"

export default function processRequest(appState, eventArg){

  // clean
  if (eventArg === CONSTANTS.argClear) {
    return {
      trials: null,
      value: null,
      locked: false,
      isKeyboardVisible: true,
      areNumbersDisabled: false,
      message:null
    };
  }

  // input
  if (validations.isNumber(eventArg)) {

    // if virtual keyboard is disabled do not accept entry from real keyboard
    if (appState.areNumbersDisabled) return;
     
    const digits = getDigits();

    return {
      areNumbersDisabled: areNumberDisabled(digits),
      value: digits,
    };
  }

  // unlock
  if (eventArg === CONSTANTS.argUnlock || eventArg === CONSTANTS.argEnter) {

     // if virtual keyboard is disabled process the request
    if(!appState.areNumbersDisabled) return;

    const totalNumbersOfTrials = appState.trials + 1;
    const isCorrectCombination = (appState.value === CONSTANTS.correctCombination);

    return {
      locked: isCorrectCombination,
      trials: totalNumbersOfTrials,
      value: null,
      areNumbersDisabled: isCorrectCombination,
      isKeyboardVisible: isKeyboardVisible(isCorrectCombination,totalNumbersOfTrials),
      message: isCorrectCombination? null: getMsgForIncorrectEntry(isCorrectCombination, totalNumbersOfTrials),
    };
  }

  function getDigits() {
    return  (validations.isNumber(appState.value) ? appState.value : "") + eventArg
  }

  function areNumberDisabled(digits) {
    return digits.length >= CONSTANTS.maxNumbersOfDigits ? true : false;
  }

  function isKeyboardVisible(isCorrectCombination, totalNumbersOfTrials){
    return (!isCorrectCombination && !(totalNumbersOfTrials === CONSTANTS.maxNumbersOfTrials))
  }

  function getMsgForIncorrectEntry(isCorrectCombination, totalNumbersOfTrials) {
    return totalNumbersOfTrials === CONSTANTS.maxNumbersOfTrials &&
      !isCorrectCombination
      ? CONSTANTS.msgMaxNumbersOfTrials
      : CONSTANTS.msgUnlockNotCorrect;
  }
}

