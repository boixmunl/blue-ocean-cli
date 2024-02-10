import { Command } from 'commander';
import axios from 'axios';

const program = new Command();
program.version('0.1.0');

export const getQuotes = async (characterSlug?: string, number?: number, keyword?: string) => {
  try {
    let url: string;

    if (characterSlug) {
      url = number ?
          `https://api.oss117quotes.xyz/v1/author/${characterSlug}/${number}` :
          `https://api.oss117quotes.xyz/v1/author/${characterSlug}`;
    } else {
      url = number ?
          `https://api.oss117quotes.xyz/v1/random/${number}`:
          `https://api.oss117quotes.xyz/v1/random`;
    }

    const response = await axios.get(url);

    let quotes: any[] = Array.isArray(response.data) ? response.data : [response.data];

    if (keyword) {
      quotes = quotes.filter((quote: any) =>
          quote.sentence.toLowerCase().includes(keyword.toLowerCase())
      );
    }

    quotes.forEach((quote: any) => {
      console.log(`"${quote.sentence}" - ${quote.character.name}`);
    });
  } catch (error) {
    console.error(`Error fetching quotes`, error);
  }
};

program
    .description('Fetch random quotes from OSS 117')
    .option('-n, --number <number>', 'Number of quotes to display', parseInt)
    .option('-c, --character <character>', 'Filter quotes by character')
    .option('-k, --keyword <keyword>', 'Filter quotes by keyword')
    .action((options) => {
      const { number, character, keyword } = options;
      getQuotes(character, number, keyword);
    });

program.parse(process.argv);