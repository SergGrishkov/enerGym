import { BaseController } from './core/BaseController';

export class ExercisesController extends BaseController {
  #API_GET_LIST_EXERCISES = 'filters';
  #API_GET_LIST_SUB_EXERCISES = 'exercises';
  #API_GET_EXERCISE = 'exercises/{exerciseID}';
  #API_ADD_EXERCISE_RATING = 'exercises/{exerciseID}/rating';
  #API_QUOTE = 'quote/';
  #API_SUBSCRIPTION = 'subscription';

  async init() {
    const instance = new ExercisesController();
    return instance;
  }

  async getListExercises(searchParams) {
    return await this.get(this.#API_GET_LIST_EXERCISES, {
      params: searchParams,
    });
  }

  async getListExercisesBySubspecies(searchParams) {
    return await this.get(this.#API_GET_LIST_SUB_EXERCISES, {
      params: searchParams,
    });
  }

  async getQuote() {
    return await this.get(this.#API_QUOTE);
  }

  async getExerciseById(exerciseID) {
    return await this.get(
      this.setPathParameters(this.#API_GET_EXERCISE, { exerciseID })
    );
  }

  async addRating(exerciseID, body) {
    return await this.patch(
      this.setPathParameters(this.#API_ADD_EXERCISE_RATING, { exerciseID }),
      JSON.stringify(body)
    );
  }

  async createSubscription(email) {
    return await this.post(this.#API_SUBSCRIPTION, JSON.stringify(email));
  }
}
