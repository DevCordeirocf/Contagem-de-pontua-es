# 🎮 Sistema de Pontuação - Top 100

Um sistema web interativo para gerenciar pontuações em jogos de Top 100. Perfeito para jogar com amigos onde a pontuação é baseada na classificação do item escolhido.

## 🎯 Como Funciona

O sistema segue uma mecânica simples e divertida:

1. **Defina o limite de vitória** — Escolha quantos pontos são necessários para vencer (ex: 500 pontos)
2. **Adicione os jogadores** — Registre o nome de cada participante
3. **Registre as pontuações** — Para cada item que um jogador menciona, insira sua classificação no Top 100
4. **Ganhe pontos automaticamente** — A pontuação é igual à classificação (1º lugar = 1 ponto, 90º lugar = 90 pontos)
5. **Vença o jogo** — O primeiro jogador a atingir o limite de pontos vence automaticamente

## 🚀 Recursos Principais

- ✅ **Adicionar múltiplos jogadores** — Suporte para quantos jogadores quiser
- ✅ **Cálculo automático de pontos** — Baseado na classificação (1-100)
- ✅ **Placar em tempo real** — Visualize a pontuação de todos os jogadores ordenada
- ✅ **Limite de vitória configurável** — Defina o limite no início do jogo
- ✅ **Detecção automática de vencedor** — Tela de celebração quando alguém vence
- ✅ **Reset do jogo** — Comece uma nova partida a qualquer momento
- ✅ **Interface responsiva** — Funciona em desktop, tablet e celular
- ✅ **Design limpo e intuitivo** — Fácil de usar para todos

## 💻 Tecnologias Utilizadas

- **React 19** — Framework JavaScript para a interface
- **TypeScript** — Tipagem estática para maior segurança
- **Tailwind CSS 4** — Estilização moderna e responsiva
- **shadcn/ui** — Componentes UI de alta qualidade
- **Vite** — Build tool rápido e eficiente
- **Lucide React** — Ícones bonitos e minimalistas

## 🛠️ Instalação e Uso

### Pré-requisitos

- Node.js 18+ instalado
- npm ou pnpm como gerenciador de pacotes

### Passos para Instalar

1. Clone o repositório:
```bash
git clone https://github.com/DevCordeirocf/Contagem-de-pontua-es.git
cd Contagem-de-pontua-es
```

2. Instale as dependências:
```bash
pnpm install
# ou
npm install
```

3. Inicie o servidor de desenvolvimento:
```bash
pnpm dev
# ou
npm run dev
```

4. Abra seu navegador e acesse:
```
http://localhost:5173
```

## 📖 Como Jogar

### Passo 1: Configurar o Jogo
Na primeira tela, você verá um formulário para definir o **limite de pontos para vencer**. Por exemplo, se você digitar 500, o primeiro jogador a atingir 500 pontos vencerá automaticamente.

### Passo 2: Adicionar Jogadores
Após confirmar o limite, use a seção "Adicionar Jogador" para registrar o nome de cada participante. Clique no botão "Adicionar" ou pressione Enter.

### Passo 3: Registrar Pontuações
Para cada item que um jogador menciona:
1. Selecione o jogador no dropdown
2. Digite a classificação do item no Top 100 (número de 1 a 100)
3. Clique em "Adicionar Pontos"

**Exemplo:** Se Superman está no 1º lugar no Top 100 de super-heróis e o jogador fala "Superman", você digita 1 e ele ganha 1 ponto.

### Passo 4: Acompanhe o Placar
O placar é atualizado em tempo real, mostrando todos os jogadores ordenados do maior para o menor score.

### Passo 5: Celebre a Vitória
Quando alguém atingir o limite de pontos, uma tela de celebração aparece automaticamente com o nome do vencedor!

### Resetar o Jogo
Use o botão "Resetar Jogo" para começar uma nova partida do zero.

## 📱 Exemplos de Uso

### Exemplo 1: Top 100 Super-Heróis Mais Famosos
- Superman está no 1º lugar → 1 ponto
- Batman está no 2º lugar → 2 pontos
- Homem-Aranha está no 5º lugar → 5 pontos
- Capitão América está no 50º lugar → 50 pontos

### Exemplo 2: Top 100 Filmes de Ação
- Homem de Ferro está no 10º lugar → 10 pontos
- Vingadores está no 3º lugar → 3 pontos
- Matrix está no 45º lugar → 45 pontos

## 🎨 Design e Interface

A aplicação foi desenvolvida com foco em:

- **Usabilidade** — Interface intuitiva e fácil de navegar
- **Responsividade** — Funciona perfeitamente em qualquer dispositivo
- **Feedback visual** — Cores e animações para melhor experiência
- **Acessibilidade** — Controles claros e bem identificados

## 🚀 Build para Produção

Para criar uma versão otimizada para produção:

```bash
pnpm build
# ou
npm run build
```

Os arquivos compilados estarão na pasta `dist/`.

## 📦 Estrutura do Projeto

```
contagem-pontuacoes/
├── client/
│   ├── public/           # Arquivos estáticos
│   ├── src/
│   │   ├── pages/        # Páginas da aplicação
│   │   │   └── Home.tsx  # Página principal do jogo
│   │   ├── components/   # Componentes reutilizáveis
│   │   ├── contexts/     # Contextos React
│   │   ├── hooks/        # Hooks customizados
│   │   ├── lib/          # Utilitários
│   │   ├── App.tsx       # Componente raiz
│   │   ├── main.tsx      # Ponto de entrada
│   │   └── index.css     # Estilos globais
│   └── index.html        # HTML principal
├── package.json          # Dependências do projeto
├── tsconfig.json         # Configuração TypeScript
├── vite.config.ts        # Configuração Vite
└── README.md             # Este arquivo
```

## 🔧 Configuração

### Customizar o Título
Edite o arquivo `client/src/const.ts` para mudar o título da aplicação:

```typescript
export const APP_TITLE = "Sistema de Pontuação - Top 100";
```

### Customizar Cores e Temas
Edite o arquivo `client/src/index.css` para ajustar as cores e temas da aplicação.

## 🐛 Solução de Problemas

### Porta 5173 já está em uso
Se a porta padrão estiver ocupada, o Vite usará automaticamente a próxima porta disponível.

### Dependências não instalam
Tente limpar o cache e reinstalar:
```bash
rm -rf node_modules pnpm-lock.yaml
pnpm install
```

### Aplicação não carrega
Verifique se o servidor de desenvolvimento está rodando:
```bash
pnpm dev
```

## 📝 Licença

Este projeto está licenciado sob a Licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 🤝 Contribuições

Contribuições são bem-vindas! Se você tem ideias para melhorar o sistema, sinta-se à vontade para:

1. Fazer um fork do repositório
2. Criar uma branch para sua feature (`git checkout -b feature/MinhaFeature`)
3. Fazer commit das suas mudanças (`git commit -m 'Adiciona MinhaFeature'`)
4. Fazer push para a branch (`git push origin feature/MinhaFeature`)
5. Abrir um Pull Request

## 💡 Ideias para Futuras Melhorias

- 📊 Histórico de rodadas e estatísticas dos jogadores
- 🔄 Modo multiplayer em tempo real com WebSockets
- 🎨 Temas customizáveis e modo escuro
- 📱 Aplicativo mobile nativo
- 🏆 Sistema de rankings e badges
- ⏱️ Timer para limitar o tempo de resposta
- 🎵 Efeitos sonoros e música de fundo
- 🌐 Suporte a múltiplos idiomas

## 📞 Suporte

Se encontrar algum problema ou tiver dúvidas, abra uma [issue](https://github.com/DevCordeirocf/Contagem-de-pontua-es/issues) no repositório.

---

**Desenvolvido com ❤️ para tornar seus jogos com amigos ainda mais divertidos!**

Divirta-se jogando! 🎮
