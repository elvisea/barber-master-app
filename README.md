# Barber Master Mobile

Barber Master Mobile é um aplicativo móvel desenvolvido com React Native e Expo, projetado para gerenciar e otimizar o agendamento de serviços em barbearias.

## 🚀 Tecnologias

- React Native
- Expo
- TypeScript
- Styled Components
- React Navigation
- Zustand (Gerenciamento de Estado)
- i18next (Internacionalização)
- React Hook Form + Yup (Formulários e Validação)
- Axios (Requisições HTTP)

## ⚡ Por que Bun?

O Bun foi escolhido como gerenciador de pacotes e runtime JavaScript para este projeto devido aos seus benefícios significativos:

- **Performance Superior**: Até 30x mais rápido que npm na instalação de pacotes
- **Baixo Consumo de Memória**: Utiliza menos recursos do sistema
- **Compatibilidade com Node.js**: Suporta APIs Node.js nativas
- **Bundler Integrado**: Possui transpilador e bundler nativos
- **Hot Reloading Otimizado**: Recarregamento mais rápido durante o desenvolvimento
- **Cache Inteligente**: Sistema de cache eficiente para dependências
- **Suporte TypeScript Nativo**: Executa TypeScript sem necessidade de configuração adicional
- **Melhor Gerenciamento de Dependências**: Resolução de dependências mais eficiente

## 📥 Instalando o Bun

Antes de começar o projeto, você precisa instalar o Bun. Escolha o método de acordo com seu sistema operacional:

### Linux e macOS
```bash
curl -fsSL https://bun.sh/install | bash
```

### Windows (via WSL)
1. Instale o WSL2 se ainda não tiver:
```bash
wsl --install
```

2. Dentro do WSL, execute:
```bash
curl -fsSL https://bun.sh/install | bash
```

### Verificando a Instalação
```bash
bun --version
```

## 📱 Funcionalidades

- Interface moderna e responsiva
- Suporte a múltiplos idiomas
- Navegação intuitiva com drawer e stack navigation
- Gerenciamento de estado eficiente
- Validação de formulários
- Armazenamento local com AsyncStorage
- Design system próprio com tema customizado

## 🛠️ Pré-requisitos

- Node.js
- Bun (Gerenciador de pacotes)
- Expo CLI
- iOS Simulator (para desenvolvimento iOS)
- Android Studio (para desenvolvimento Android)

## 🔧 Instalação

1. Clone o repositório:
```bash
git clone [url-do-repositorio]
```

2. Instale as dependências:
```bash
bun install
```

3. Inicie o projeto:
```bash
bun start
```

## 📦 Scripts Disponíveis

- `bun start`: Inicia o servidor de desenvolvimento
- `bun android`: Inicia o aplicativo no Android
- `bun ios`: Inicia o aplicativo no iOS
- `bun web`: Inicia o aplicativo na web

## 📁 Estrutura do Projeto

```
src/
├── assets/         # Recursos estáticos
├── components/     # Componentes reutilizáveis
├── constants/      # Constantes e configurações
├── enums/         # Enumerações
├── errors/        # Tratamento de erros
├── routes/        # Configuração de rotas
├── screens/       # Telas do aplicativo
├── services/      # Serviços e APIs
├── storage/       # Gerenciamento de armazenamento
├── store/         # Gerenciamento de estado
├── theme/         # Configurações de tema
├── translations/  # Arquivos de tradução
├── typings/       # Definições de tipos
└── utils/         # Funções utilitárias
```

## 🔄 Migrando do Bun

Se você precisar migrar do Bun para outro gerenciador de pacotes (npm ou yarn), siga os passos abaixo:

### Migrando para NPM

1. Remova o arquivo `bun.lock`:
```bash
rm bun.lock
```

2. Instale as dependências com npm:
```bash
npm install
```

3. Atualize os scripts no `package.json`:
```json
{
  "scripts": {
    "start": "expo start",
    "android": "expo start --android",
    "ios": "expo start --ios",
    "web": "expo start --web"
  }
}
```

4. Use os novos comandos:
- `npm start` (ao invés de `bun start`)
- `npm run android` (ao invés de `bun android`)
- `npm run ios` (ao invés de `bun ios`)
- `npm run web` (ao invés de `bun web`)

### Migrando para Yarn

1. Remova o arquivo `bun.lock`:
```bash
rm bun.lock
```

2. Instale o Yarn globalmente (se ainda não tiver):
```bash
npm install -g yarn
```

3. Instale as dependências com yarn:
```bash
yarn install
```

4. Use os novos comandos:
- `yarn start` (ao invés de `bun start`)
- `yarn android` (ao invés de `bun android`)
- `yarn ios` (ao invés de `bun ios`)
- `yarn web` (ao invés de `bun web`)

## 📄 Licença

Este projeto está sob a licença [inserir tipo de licença]. Veja o arquivo `LICENSE` para mais detalhes. 