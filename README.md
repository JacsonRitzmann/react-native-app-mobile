# Dev Mobile

Aplicação escrita em React-Native utilizando api https://api.themoviedb.org/.

### Objetivo
Utilizando a ​The Movie DB API produza um aplicativo mobile que liste e traga as informações dos filmes.
Na página principal, você deve ter as seguintes categorias: 
- Em cartaz​ (/movie/now_playing)
- Populares​ (/movie/popular)
- Melhores avaliados​ (/movie/top_rated)
- Em breve (​ /movie/upcoming)

### Requisitos

- [NodeJS](https://nodejs.org/en/) - Aplicação foi testada na versão v13.8.0
- [Yarn](https://yarnpkg.com/pt-BR/) - (Opcional) para gerenciar a pacotes foi utilizado a versão 1.22.0
- [react-native-cli](https://facebook.github.io/react-native/) - Aplicação foi testada na versão v2.0.1
- [react-native](https://facebook.github.io/react-native/) - Aplicação foi testada na versão v0.61.5

Emulador IOS (obs: caso seja emulado para android, pode ser necessário algumas correções de dependências).

## Instalação

No local desejado realize o clone do repositório com o comando:

`git clone https://github.com/JacsonRitzmann/react-native-app-mobile.git`

Dentro do diretório 'react-native-app-mobile' execute o comando `yarn install`

Em seguinda o comando `react-native run-ios`

Caso ocorra algum erro, execute o comando `cd ios/ && pod install` e `react-native start --reset-cache`.


<img src="https://github.com/JacsonRitzmann/react-native-app-mobile/blob/master/screenshot1.png" width="250" height="500" /> 
<img src="https://github.com/JacsonRitzmann/react-native-app-mobile/blob/master/screenshot2.png" width="250" height="500" /> 

Versão

1.0.0

Autor

Jacson ritzmann - jacson.ritzmann@hotmail.com

Licença

Este projeto está licenciado sob a licença MIT.
