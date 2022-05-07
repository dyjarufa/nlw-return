## Lib para manipular gestos
----------------------------------------------------------------
<br>

>https://gorhom.github.io/react-native-bottom-sheet/

<br>

instalação:
```
❯ yarn add @gorhom/bottom-sheet@^4
❯ yarn add react-native-reanimated react-native-gesture-handler
```

<br>

Dependências para lidar com animação:
>https://docs.expo.dev/versions/latest/sdk/reanimated/
```
❯ expo install react-native-reanimated
❯ expo install react-native-gesture-handler
```

<br>

Adcionar plugin dentro do babel:
```tsx

module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: ['react-native-reanimated/plugin'], // reanimated
  };
};

```

Importar depencia em ***App.tsx***
```tsx
import 'react-native-gesture-handler';
```