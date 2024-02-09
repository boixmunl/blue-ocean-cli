import { Command } from 'commander';
import axios from 'axios';

const program = new Command();
program.version('0.1.0');

export const getQuotes = async (number: number = 1, character?: string, keyword?: string) => {
  let url = `https://api.oss117quotes.xyz/v1/random`;

  if (character) {
    url += `/character/${character}`;
  } else {
    url += `/${number}`;
  }

  if (keyword) {
    url += `?keyword=${keyword}`;
  }

  try {
    const response = await axios.get(url);
    const responseData = response.data;

    if (Array.isArray(responseData)) {
      responseData.forEach((quote: any) => {
        console.log(`"${quote.sentence}" - ${quote.character.name}`);
      });
    } else {
      console.log(`"${responseData.sentence}" - ${responseData.character.name}`);
    }
  } catch (error) {
    console.error('Error fetching quotes:', error);
  }
};

program
    .description('Fetch random quotes from OSS 117')
    .option('-n, --number <number>', 'Number of quotes to display', parseInt)
    .option('-c, --character <character>', 'Filter quotes by character')
    .option('-k, --keyword <keyword>', 'Filter quotes by keyword')
    .action((options) => {
      getQuotes(options.number, options.character, options.keyword);
    });

program.parse(process.argv);