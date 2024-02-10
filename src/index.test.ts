import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { getQuotes } from './index';

describe('getQuotes function', () => {
  let mock: MockAdapter;

  beforeEach(() => {
    mock = new MockAdapter(axios);
  });

  afterEach(() => {
    mock.restore();
  });

  it('should fetch random quotes from the API', async () => {
    const mockQuotes = [
      { sentence: 'Quote 1', character: { name: 'Character 1' } },
      { sentence: 'Quote 2', character: { name: 'Character 2' } },
    ];
    mock.onGet('https://api.oss117quotes.xyz/v1/random').reply(200, mockQuotes);

    const consoleSpy = jest.spyOn(console, 'log');

    await getQuotes();

    expect(consoleSpy).toHaveBeenCalledWith('"Quote 1" - Character 1');
    expect(consoleSpy).toHaveBeenCalledWith('"Quote 2" - Character 2');
  });

  it('should fetch quotes by character from the API', async () => {
    const characterSlug = 'hubert';
    const mockQuotes = [
      { sentence: 'Quote 1', character: { name: 'Character 1' } },
      { sentence: 'Quote 2', character: { name: 'Character 2' } },
    ];
    mock.onGet(`https://api.oss117quotes.xyz/v1/author/${characterSlug}`).reply(200, mockQuotes);

    const consoleSpy = jest.spyOn(console, 'log');

    await getQuotes(characterSlug);

    expect(consoleSpy).toHaveBeenCalledWith('"Quote 1" - Character 1');
    expect(consoleSpy).toHaveBeenCalledWith('"Quote 2" - Character 2');
  });

  it('should fetch quotes by keyword from the API', async () => {
    const keyword = 'quote';
    const mockQuotes = [
      { sentence: 'This is a quote', character: { name: 'Character 1' } },
      { sentence: 'Another quote here', character: { name: 'Character 2' } },
      { sentence: 'A third quote', character: { name: 'Character 3' } },
    ];
    mock.onGet('https://api.oss117quotes.xyz/v1/random').reply(200, mockQuotes);

    const consoleSpy = jest.spyOn(console, 'log');

    await getQuotes(undefined, undefined, keyword);

    expect(consoleSpy).toHaveBeenCalledWith('"This is a quote" - Character 1');
    expect(consoleSpy).toHaveBeenCalledWith('"Another quote here" - Character 2');
    expect(consoleSpy).toHaveBeenCalledWith('"A third quote" - Character 3');
  });

  it('should handle errors when fetching quotes', async () => {
    mock.onGet('https://api.oss117quotes.xyz/v1/random').reply(500);

    const consoleErrorSpy = jest.spyOn(console, 'error');

    await getQuotes();

    expect(consoleErrorSpy).toHaveBeenCalledWith(expect.any(Error));
  });
});
