# Hiking Groups of Alberta

## Setup

1. Follow [asdf setup instructions](https://asdf-vm.com/guide/getting-started.html#_3-install-asdf)
2. Install NodeJS using NodeJS

    ```bash
    asdf plugin add nodejs
    asdf install nodejs
    asdf reshim
    npm install -g npm@9.5.0
    npm install -g pnpm
    ```
3. Install dependencies

    Install dependencies with npm install or yarn install or pnpm install                                                                                                                                                                                              16:09:04

    ```bash
    cd app && pnpm install
    ````
4. Start development server

    Start development server with npm run dev or yarn dev or pnpm run dev 

    ```bash
    cd app && pnpm run dev
    ```

## The project was initially setup using

```bash
pnpm dlx nuxi init app -t doc-driven

# todo: recreate with 
# https://github.com/Atinux/content-wind
#
# other themes: https://github.com/nuxt-themes
# 
# https://docus.dev/
# https://github.com/nuxt-themes/alpine
```

## License

Shield: [![CC BY-SA 4.0][cc-by-sa-shield]][cc-by-sa]

This work is licensed under a
[Creative Commons Attribution-ShareAlike 4.0 International License][cc-by-sa].

[![CC BY-SA 4.0][cc-by-sa-image]][cc-by-sa]

[cc-by-sa]: http://creativecommons.org/licenses/by-sa/4.0/
[cc-by-sa-image]: https://licensebuttons.net/l/by-sa/4.0/88x31.png
[cc-by-sa-shield]: https://img.shields.io/badge/License-CC%20BY--SA%204.0-lightgrey.svg
