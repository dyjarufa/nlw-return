### Implementação do JEST
---------------------------------------------------------------
<br/>

instalação do pacote:
```
❯ npm i jest -D
```
<br>

iniciar configuração do jest:
```
❯ npx jest --init  

The following questions will help Jest to create a suitable configuration for your project

✔ Would you like to use Jest when running "test" script in "package.json"? … yes
✔ Would you like to use Typescript for the configuration file? … yes
✔ Choose the test environment that will be used for testing › node
✔ Do you want Jest to add coverage reports? … yes
✔ Which provider should be used to instrument code for coverage? › v8
✔ Automatically clear mock calls, instances, contexts and results before every test? … yes

✏️  Modified /home/jady/www/developer/ROCKETSEAT/NLW_RETURN/server/package.json

📝  Configuration file created at /home/jady/www/developer/ROCKETSEAT/NLW_RETURN/server/jest.config.ts

```
<br>

Instalar configuração do jest com extensão typescript:
```
❯ npm install ts-node -D 
```

<br>

Arquivos do jest entende apenas JavaScript, para fazer o jest entender arquivos typescript:
<https://swc.rs/docs/usage/jest>
```
❯ npm i jest @swc/jest
```

dentro do **jest.config.js** , implementar o SWC:
```tsx    

// A map from regular expressions to paths to transformers
//transform: undefined,

  transform: {
    "^.+\\.(t|j)sx?$": ["@swc/jest"],
  };
```
Instalar as tipagens do jest:
```
❯ npm i @types/jest -D                       
```
