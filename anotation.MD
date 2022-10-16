# Storybook #

## Instalação 
 - Executar comando: npx sb init --builder @storybook/builder-vite --use-npm
 - Rodar: npm run storybook

## Configuração
 - Tema Dark: criar um arquivo manager.js;
 -- Importar: @storybook/addon e @storybook/theming;
 -- Adicionar no arquivo preview o tema (seguindo a documentação);

 - Typescript: importar os types Meta e StoryObj;
 -- Meta: utilizar no export default do componente;
 -- StoryObj: utilizar nas variantes;
 -- Importar também a tipagem do próprio componente e utilizar como generics no Meta e StoryObj.

## Plugins (Addons)
 - Instalar e configurar no arquivo main.cjs (storybook);
 - plugin: a11y (Acessibilidade), oferece informações de acessibilidade de todos os componentes no qual estamos desenvolvendo;

# Tailwind CSS #
- Configurar os tokens:
-- Substituir os tokens ja existentes ou extender (file: tailwind.config.js)
-- Tokens: Cores, Espaçamento, Tamanho de Fonte etc.

- Importar o arquivo global.css no preview.cjs (Fold: storybook);
-- Utilizar o tailwind no storybook.

# StoryBook Componentes #
- File: <nome_do_componente>.stories.tsx;
-- Configuração global: titulo, component e criar ao menos 1 variante do componente. 

- children: ReactNode
- ArgTypes;
- Desabilitar arg asChild;

# Componentes # 
- Text;
- Heading;
- Button;
- TextInput (Pattern Composição);
- Checkbox (Decorators);

# Pacote CLSX (Trabalhar com classes) #
- Criar variações de classe com o tailwind
- Instalação: npm install --save clsx

# Radix UI #
## Slot
- Definição: Assumir diferentes tags do HTML;
- Pega todas as propriedades que o componentes recebe e repassa para o primeiro componente que vem no children;
- Instalação: npm install @radix-ui/react-slot;

# React #
- Pattern de composição;
-- Radix UI utiliza.

# Deploy #
## Storybook Deployer
- Instalar: npm i @storybook/storybook-deployer --save-dev;
- Lembrete: para realizar o deploy, é necessário ter um repositório git.

## Workflow (github)
- Criar uma pasta .github > workflows > deploy-docs.yml (file);
- Muita atenção ao preencher este arquivo;
- Configuração Storybook: no main.js informar viteFinal a url base.

## CD/CI
- Integração contínua;
- Disparar ações toda vez que o código recebe atualizações;


# Testes #
## Storybook (Addons)
- Jest | Testing Library | Test Runner;
- 1.Instalação: npm i @storybook/addon-interactions @storybook/jest @storybook/testing-library @storybook/test-runner -D;
- 2. Adicionar o Addon no arquivo main.cjs (storybook) e a feature;
- Executar o passo 1 e 2 antes de iniciar os testes.

- Testando a página de Sign In;
- Jest: waitFor, expect;
- Package.json: criar script "test-storybook": "test-storybook";
-- npm run test-storybook -- --watch | Fica monitando enquanto fazemos alterações no código.

- Axios.
- Instalação: npm i axios;

- Mocks: Simulação / Imitação;
- MSW - Mock Service Work;
- Possui integração nativa com o Storybook;
-- Instalação: npm i msw msw-storybook-addon -D;
-- Executar comando: npx msw init public/;
--- public - pasta publica do projeto, pode mudar dependendo do framework.
-- Adicionar configuração no main.cjs: staticDirs: ['../public']
