import { getLetterMatchCount } from './';

// describe is just the way of grouping tests context
// so this help document our tests, somebody looking at our tests
// can know what we are testing in each sections & also help to document
// if anyone is looking for failure, it would tell in which one of these context
// the failure occurred in
describe('getLetterMatchCount', () => {
  // demo word to test
  const secretWord = 'party';

  test('returns correct count when there are no matching letters', () => {
    const letterMatchCount = getLetterMatchCount('bones', secretWord) // guessedWord, secretWord
    expect(letterMatchCount).toBe(0);
  });

  test('returns the correct count where there are 3 matching letters', () => {
    const letterMatchCount = getLetterMatchCount('train', secretWord) // guessedWord, secretWord
    expect(letterMatchCount).toBe(3);
  });

  test('returns correct count when there are duplicate letters in the guess', () => {
    // 'parka' - want to return answer of three even though that 'a' appears twice
    const letterMatchCount = getLetterMatchCount('parka', secretWord)
    expect(letterMatchCount).toBe(3)
  });

});
