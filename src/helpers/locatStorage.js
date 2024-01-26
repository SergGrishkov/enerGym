import { ExercisesController } from '../api/controllers/ExercisesController';
import { setTime0, compareDateWithToday } from './utils';
const exerciseCntrl = new ExercisesController();
const exercise = exerciseCntrl.init();

export const storageKeys = {
  FAVORITE_EXERCISE: 'favorite-exercise',
  QUOTE: 'quote',
};

export function addExerciseToFavorite(
  data,
  storageKey = storageKeys.FAVORITE_EXERCISE
) {
  if (!localStorage.getItem(storageKey)) {
    localStorage.setItem(storageKey, JSON.stringify([data]));
  } else {
    const localStorageArray = JSON.parse(localStorage.getItem(storageKey));
    localStorageArray.push(data);
    localStorage.setItem(storageKey, JSON.stringify(localStorageArray));
  }
}

export function removeExerciseFromFavoriteById(
  exerciseId,
  storageKey = storageKeys.FAVORITE_EXERCISE
) {
  if (!localStorage.getItem(storageKey)) return;

  let lStorage = JSON.parse(localStorage.getItem(storageKey));

  if (lStorage.length > 0) {
    let updArray = lStorage.filter(s => {
      return s._id !== exerciseId;
    });
    localStorage.setItem(storageKey, JSON.stringify(updArray));
    if (lStorage.length === 0) {
      localStorage.removeItem(storageKey);
    }
  }
}

export function isExerciseInFavorite(
  exerciseId,
  storageKey = storageKeys.FAVORITE_EXERCISE
) {
  if (!localStorage.getItem(storageKey)) return false;

  let lStorage = JSON.parse(localStorage.getItem(storageKey));
  if (lStorage.length > 0) {
    const isExercise = lStorage.filter(s => {
      return s._id === exerciseId;
    });
    return isExercise.length > 0 ? true : false;
  } else {
    return false;
  }
}

async function addQuoteToStorage() {
  const quote = (await (await exercise).getQuote()).json();
  quote.timeStamp = setTime0(new Date());
  localStorage.setItem(storageKeys.QUOTE, JSON.stringify(quote));
}

export async function getQuote() {
  if (!localStorage.getItem(storageKeys.QUOTE)) {
    await addQuoteToStorage();
  } else {
    const timeStampOldQuote = JSON.parse(
      localStorage.getItem(storageKeys.QUOTE)
    ).timeStamp;
    if (!compareDateWithToday(timeStampOldQuote)) {
      const newQuote = (await (await exercise).getQuote()).json();
      newQuote.timeStamp = setTime0(new Date());
      localStorage.setItem(storageKeys.QUOTE, JSON.stringify(newQuote));
    }
    const { author, quote } = JSON.parse(
      localStorage.getItem(storageKeys.QUOTE)
    );
    return {
      author,
      quote,
    };
  }
}
