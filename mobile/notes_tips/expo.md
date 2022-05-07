## Como instalar e iniciar projeto expo
--------------------------------------------------------------

```
❯ yarn global add expo-cli // instala globalmente
❯ expo --version //verifica versão instalada
5.4.3

❯ expo init mobile // iniciar projeto
```
<br>

### Aguardar instalação:

```
❯ expo init mobile
✔ Choose a template: › blank (TypeScript)  same as blank but with TypeScript configuration
✔ Downloaded template.
🧶 Using Yarn to install packages. Pass --npm to use npm instead.
✔ Installed JavaScript dependencies.

✅ Your project is ready!

To run your project, navigate to the directory and run one of the following yarn commands.

- cd mobile
- yarn start # you can open iOS, Android, or web from here, or run them directly with the commands below.
- yarn android
- yarn ios # requires an iOS device or macOS for access to an iOS simulator
- yarn web
Project is already inside of a git repo, skipping git init.
```

------------------------------------
<br>

### Executar o Expo:

```
❯ expo start  
Starting project at /home/jady/www/developer/ROCKETSEAT/NLW_RETURN/mobile
Developer tools running on http://localhost:19002
Starting Metro Bundler
▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
█ ▄▄▄▄▄ █▀▄█▀ ▄█ ▄█ ▄▄▄▄▄ █
█ █   █ █▄   ▄█▄▀ █ █   █ █
█ █▄▄▄█ █ ▀█▀█ ▀ ██ █▄▄▄█ █
█▄▄▄▄▄▄▄█ ▀▄█ █▄█▄█▄▄▄▄▄▄▄█
█  █▄▀▀▄ ██ ▀█▄▀▄▄▀  ▄▀▄▄▀█
█  ▀ ▀█▄▄█▄▄██▀ █▄▄▀ ▀▀█▄▄█
█▄█▀▀▀█▄█ ▀▀▀ ▄ █▀█ ▄█ ██▀█
█▄▀██▄ ▄███▀█ ▀▀▀▀▄▄▄▄▀██▄█
█▄▄██▄█▄▄▀█ ▄▄█▄█ ▄▄▄ █ ▄ █
█ ▄▄▄▄▄ █▄▄▄▀▄█   █▄█  ▀▄▄█
█ █   █ █▀ █▄█ ▀▀  ▄▄ █▀▄██
█ █▄▄▄█ █▀█ █▄     █▄  ▄█▄█
█▄▄▄▄▄▄▄█▄▄███▄▄█▄▄██▄▄█▄▄█

› Metro waiting on exp://172.17.53.190:19000
› Scan the QR code above with Expo Go (Android) or the Camera app (iOS)

› Press a │ open Android
› Press w │ open web

› Press r │ reload app
› Press m │ toggle menu
› Press d │ show developer tools
› shift+d │ toggle auto opening developer tools on startup (disabled)

› Press ? │ show all commands

Logs for your project will appear below. Press Ctrl+C to exit.
Started Metro Bundler
```