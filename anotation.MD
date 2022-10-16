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
