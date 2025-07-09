# Gerador CLI - QR Code e Senhas Seguras

🔧 Ferramenta de linha de comando para gerar QR Codes e senhas seguras

## ✨ Funcionalidades

- ✅ Geração de QR Codes a partir de texto
- ✅ Criação de senhas seguras com:
  - Letras maiúsculas e minúsculas
  - Números
  - Caracteres especiais
- 🔄 Loop interativo para uso contínuo

## 🛠️ Tecnologias

- Node.js
- Bibliotecas:
  - `qrcode-terminal` - Geração de QR Codes no terminal
  - `prompt` - Captura de input do usuário
  - `chalk` - Estilização de texto no terminal

## 🚀 Como Executar

```bash
git clone https://github.com/seu-usuario/gerador-QrCode.git
cd gerador-QrCode
npm install
npm start
```
## 🖥️ Demonstração

```bash

=== Ferramenta CLI ===
Selecione uma opção:

1) Gerar QR Code
2) Gerar Senha
Opção: 2

Tamanho da senha (8-32 caracteres): 12

Sua senha gerada: X7@k9Lp2$qR!
```

## 📂 Estrutura do Projeto

```text

src/
├── index.js            # Ponto de entrada
├── lib/
│   ├── qrcode/        # Lógica de QR Code
│   └── password/      # Gerador de senhas
├── shared/            # Recursos compartilhados
└── utils/             # Utilitários

```

## 📌 Requisitos

### - Node.js 18+

### - npm 9+

## 🤝 Como Contribuir

### - Faça um fork do projeto### - 
### - Crie uma branch: git checkout -b feature/nova-feature### - 
### - Commit suas mudanças: git commit -m 'Adiciona nova feature'### - 
### - Push para a branch: git push origin feature/nova-feature### - 
### - Abra um Pull Request

## 📄 Licença
### MIT

