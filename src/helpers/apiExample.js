// import { ExercisesController } from '../api/controllers/ExercisesController';
// import { firstLetterToUpper } from './utils';

// import {
//   addExerciseToFavorite,
//   storageKeys,
//   removeExerciseFromFavoriteById,
//   getQuote,
//   isExerciseInFavorite,
//   getFavoritCardsFromLocalStorage,
//   getFavoritCardFromLocalStorageById,
// } from './locatStorage';

// let exerciseCntrl = new ExercisesController();
// let exercise = await exerciseCntrl.init();

// const quote = await exercise.getQuote();
// // const q = Object.assign(quote.json());
// // q.timeStamp = new Date().setHours(0, 0, 0, 0);
// // q.timeStamp = 1706715557368;
// console.log(quote.json());

// console.log(await getQuote());

// const exercise1 = await exerciseCntrl.getExerciseById(
//   '64f389465ae26083f39b17b3'
// );
// console.log(exercise1.json());

// const ratingEx = await exerciseCntrl.addRating('64f389465ae26083f39b17b3', {
//   rate: 5,
//   email: 'te77s777878t@gmail4.com',
//   review: 'My best exercise',
// });
// console.log(ratingEx.json());
// console.log(ratingEx.info());

// const exercise2 = await exerciseCntrl.getExerciseById(
//   '64f389465ae26083f39b17b3'
// );
// console.log(exercise2.json());

// const params = {
//   //   bodypart: 'back',
//   //   muscles: 'chest',
//   //   equipment: 'barbell',
//   //   keyword: 'pull',
//   filter: 'Muscles',
//   page: 1,
//   limit: 100,
// };

// const listEx = await exerciseCntrl.getListExercises(params);
// console.log(listEx.json());

// const paramsSub = {
//   // bodypart: 'back',
//   muscles: 'abs',
//   // equipment: 'barbell',
//   // keyword: 'pull',
//   page: 1,
//   limit: 100,
// };

// paramsSub.keyword = input

// const listExSub = await exercise.getListExercisesBySubspecies(paramsSub);
// console.log(listExSub.json());

// const subscrEmail = {
//   email: 'testqqaqa@gmail.com',
// };

// const subscr = await exerciseCntrl.createSubscription(subscrEmail);
// console.log(subscr.json());

// console.log(firstLetterToUpper('test qa'));

// addExerciseToFavorite({
//   _id: '64f389465ae26083f39b17a4',
//   bodyPart: 'waist',
//   equipment: 'body weight',
//   gifUrl: 'https://ftp.goit.study/img/power-pulse/gifs/0001.gif',
//   name: 'Dumbbell Seated One Leg Calf Raise - Palm Up',
//   target: '2222222222',
//   description:
//     "This refers to your core muscles, which include the rectus abdominis, obliques, and transverse abdominis. They're essential for maintaining posture, stability, and generating force in many movements. Exercises that target the abs include crunches, leg raises, and planks.",
//   rating: 3.18,
//   burnedCalories: 220,
//   time: 3,
//   popularity: 7640,
// });

// removeExerciseFromFavoriteById('64f389465ae26083f39b5');

// console.log(isExerciseInFavorite('64f389465ae26083f39b1'));

// console.log(getFavoritCardsFromLocalStorage());

// console.log(getFavoritCardFromLocalStorageById('64f389465ae26083f39b17a4'));
