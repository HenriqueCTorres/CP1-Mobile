# CP1-Mobile

Aplicativo React Native para cadastro e exibição de dados de um aluno.

## Descrição
Este projeto é um app simples de formulário desenvolvido em React Native, utilizando Expo, que permite ao usuário cadastrar seu nome, curso, disciplina e uma breve apresentação. Após o envio, os dados preenchidos são exibidos na tela.

## Funcionalidades
- Formulário com campos para Nome, Curso, Disciplina e Apresentação
- Exibição dos dados preenchidos após envio
- Uso de hooks (`useState`, `useEffect`)
- Estilização básica com `StyleSheet`
- Componentização para exibição dos dados

## Estrutura do Projeto
```
App.js                  # Componente principal do app
components/
  RenderizarDados.jsx   # Componente para exibir os dados enviados
assets/
  user.png              # Imagem de usuário exibida no topo do app
```

## Como Executar
1. Certifique-se de ter o [Node.js](https://nodejs.org/) e o [Expo CLI](https://docs.expo.dev/get-started/installation/) instalados.
2. Clone este repositório e acesse a pasta do projeto.
3. Instale as dependências:
   ```
   npm install
   ```
4. Inicie o projeto:
   ```
   npx expo start
   ```
5. Use o aplicativo Expo Go no seu dispositivo ou um emulador para visualizar o app.

## Componentes Utilizados
- `SafeAreaView` para o container principal
- `View` para organização dos elementos
- `Text` para rótulos e exibição de informações
- `TextInput` para entrada de dados
- `Button` para envio do formulário
- `Image` para exibir o avatar do usuário

## Hooks Utilizados
- `useState` para controlar os campos do formulário
- `useEffect` para ação ao carregar o app (mensagem no console)

## Estilização
A estilização é feita com `StyleSheet`, incluindo tamanhos de texto, espaçamentos, bordas arredondadas e organização dos campos.

## Observações
- O botão de envio exibe os dados preenchidos e uma mensagem de sucesso.
- O componente `RenderizarDados` é responsável por mostrar os dados organizados na tela.

---
Desenvolvido para fins acadêmicos.
