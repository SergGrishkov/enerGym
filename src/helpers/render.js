import { firstLetterToUpper } from './utils';

export function renderFavoriteCards(arrayCards) {
  if (arrayCards) {
    return arrayCards.reduce((acc, prev) => {
      return (
        acc +
        `
    <li class="favorite-item" data-exerciseId="${prev._id}">
                <div class="favorite-label-drop-start">
                    <p class="favorite-label-workout">WORKOUT</p>
                    <button class="favorite-remove-btn">
                        <svg class="remove-favorites" width="16" height="16" aria-label="icon-bucket">
                          <use href="./sprite.svg#icon-remove-favorites"></use>
                        </svg>
                    </button>
                    <button class="favorite-start-btn">Start
                        <svg class="favorites-icon" width="14" height="14" aria-label="start-arrow">
                            <use href="./sprite.svg#icon-exercises-arrow"></use>
                        </svg>
                    </button>
                </div>
                <div class="favorite-label-icon-run">
                    <svg class="favorite-icon-run" width="24" height="24" aria-label="icon-bucket">
                        <use href="./sprite.svg#icon-exercises-man"></use>
                    </svg>
                    <p>${firstLetterToUpper(prev.name)}</p>
                </div>
                <div class="favorite-label-burn">
                    <p>Burned calories:</p>
                    <span>${prev.burnedCalories} / ${prev.time} min</span>
                    <p>Body part:</p>
                    <span>${firstLetterToUpper(prev.bodyPart)}</span>
                    <p>Target:</p>
                    <span>${firstLetterToUpper(prev.target)}</span>
                </div>
            </li>
    `
      );
    }, '');
  } else {
    return `
    <div class="missing-cards">
            <img src="./dumbbell@1x.png" alt="dumbbell-img">
            <p>It appears that you haven't added any exercises to your favorites yet. To get started, you can add
                exercises that you
                like to your favorites for easier access in the future.</p>
        </div>
    `;
  }
}
