// all subject
export const SUBJECTS = ['mathematics', 'science', 'social_science']

// all levels
export const LEVELS = ['level1', 'level2', 'level3', 'level4', 'level5']

// An object to store points needed to clear each level for each subject
export const POINTS_PER_LEVEL = {
    level1: 100,
    level2: 100,
    level3: 100,
    level4: 100,
    level5: 100
};

// A function to calculate earned points
// @params: elapsedTime (seconds)
// Return earned points
export const calculateEarnedPoints = (elapsedTime) => {
    let earnedPoints;
    if (elapsedTime <= 10) earnedPoints = 20;
	else if (elapsedTime <= 20) earnedPoints = 15;
	else earnedPoints = 10;
    return earnedPoints;
}