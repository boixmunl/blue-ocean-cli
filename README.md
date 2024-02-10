```plaintext
# Blue Ocean CLI

[![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)](https://example.com)
[![License](https://img.shields.io/badge/license-MIT-green.svg)](https://opensource.org/licenses/MIT)

A command-line interface (CLI) tool for fetching random quotes from the OSS 117 API.

## Features

- Fetch random quotes from OSS 117 API.
- Filter quotes by character or keyword.
- Customize the number of quotes to display.

## Installation

Ensure you have Node.js and npm installed on your system.

1. Clone the repository:

```bash
git clone https://github.com/your-username/blue-ocean-cli.git
```

2. Navigate to the project directory:

```bash
cd blue-ocean-cli
```

3. Install dependencies:

```bash
npm install
```

## Usage

### Fetching Random Quotes

To fetch a single random quote, simply run:

```bash
npm start
```

#### Options

- `-n, --number <number>`: Number of quotes to display.
- `-c, --character <character>`: Filter quotes by character.
- `-k, --keyword <keyword>`: Filter quotes by keyword.

Example:

```bash
npm start -- -n 3 -c hubert
```

This command will fetch 3 quotes from the character "Hubert Bonnisseur de La Bath".

## Testing

To run tests, use:

```bash
npm test
```

## Contributing

Contributions are welcome! Please read the [CONTRIBUTING.md](CONTRIBUTING.md) file for guidelines.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
```
