> Fork based on: https://github.com/dempfi/ayu

Theme focused on the Ayu Mirage variant for comfortable, all-day work.

> Note: This theme is not maintained by the original author of [Ayu](https://github.com/dempfi/ayu). Please report issues in this repository.

## Installation

- From VSIX (recommended if the extension is not published on the Marketplace):
  1. Install dependencies: `npm install`
  2. Build the theme and create the package: `npm run build && npm run package -- --no-yarn`
  3. In VS Code: Extensions > … > Install from VSIX and select the generated file.
- From the Marketplace (once published): `code --install-extension aldairzp.ayu-mirage`

Then go to `Preferences > Color Theme > Ayu Mirage`.

## Screenshots

#### Mirage

![Mirage](https://github.com/AldairZP/vscode-ayu/raw/master/assets/mirage.png)

## Development

Install dependencies:

- `npm install`

Update the theme and generate the VSIX package:

- `npm run build && npm run package -- --no-yarn`
