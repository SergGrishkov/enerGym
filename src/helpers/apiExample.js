// import { ExercisesController } from '../api/controllers/ExercisesController';
// import { firstLetterToUpper } from './utils';

// let exerciseCntrl = new ExercisesController();

// const exercise = await exerciseCntrl.init();
// const quote = await exercise.getQuote();
// console.log(quote.json());

// const exercise1 = await exerciseCntrl.getExerciseById(
//   '64f389465ae26083f39b17b3'
// );
// console.log(exercise1.json());

// const ratingEx = await exerciseCntrl.addRating('64f389465ae26083f39b17b3', {
//   rate: 5,
//   email: 'test@gmail4.com',
//   review: 'My best exercise',
// });
// console.log(ratingEx.json());

// const exercise2 = await exerciseCntrl.getExerciseById(
//   '64f389465ae26083f39b17b3'
// );
// console.log(exercise2.json());

// const params = {
//   bodypart: 'back',
//   muscles: 'chest',
//   equipment: 'barbell',
//   keyword: 'pull',
//   page: 1,
//   limit: 100,
// };

// const listEx = await exerciseCntrl.getListExercises(params);
// console.log(listEx.json());

// const paramsSub = {
//   bodypart: 'back',
//   muscles: 'lats',
//   equipment: 'barbell',
//   keyword: 'pull',
//   page: 1,
//   limit: 100,
// };

// const listExSub = await exerciseCntrl.getListExercisesBySubspecies(paramsSub);
// console.log(listExSub.json());

// const subscrEmail = {
//   email: 'testqqaqa@gmail.com',
// };

// const subscr = await exerciseCntrl.createSubscription(subscrEmail);
// console.log(subscr.json());

// console.log(firstLetterToUpper('test qa'));
