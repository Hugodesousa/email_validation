# 📧 Validador de Email

Um projeto simples e elegante para validação de email em tempo real, desenvolvido com HTML, CSS e JavaScript puro.

## 🎯 Sobre o Projeto

Este projeto consiste em um formulário de cadastro de email com validação completa do formato. A validação ocorre em tempo real enquanto o usuário digita, proporcionando feedback instantâneo sobre a validade do email inserido.

## ✨ Funcionalidades

- ✅ Validação de email em tempo real
- ✅ Feedback visual (cores verde e vermelha)
- ✅ Mensagens descritivas de erro
- ✅ Design moderno e responsivo
- ✅ Verificação de múltiplos critérios:
  - Presença do símbolo @
  - Domínio válido com extensão
  - Ausência de espaços
  - Apenas um @ no email
  - Texto antes e depois do @
  - Extensão de domínio válida

## 🚀 Como Usar

### Pré-requisitos

- Navegador web moderno (Chrome, Firefox, Safari, Edge)
- Nenhuma dependência externa necessária

### Instalação

1. Clone ou baixe este repositório
2. Certifique-se de que os arquivos estão na mesma pasta:
   ```
   projeto-email/
   ├── index.html
   └── validador.js
   ```

3. Abra o arquivo `index.html` no seu navegador

### Uso

1. Digite um email no campo de entrada
2. A validação ocorre automaticamente enquanto você digita
3. Mensagens de erro ou sucesso aparecem abaixo do campo
4. Clique em "Cadastrar" para enviar o formulário
5. Se o email for válido, uma mensagem de sucesso aparece e o formulário é limpo após 2 segundos

## 📁 Estrutura do Projeto

```
projeto-email/
│
├── index.html          # Página principal com o formulário
├── validador.js        # Lógica de validação do email
└── README.md          # Documentação do projeto
```

## 🛠️ Tecnologias Utilizadas

- **HTML5** - Estrutura da página
- **CSS3** - Estilização e animações
- **JavaScript (ES6)** - Lógica de validação

## 📝 Exemplos de Validação

### Emails Válidos ✅
- usuario@exemplo.com
- contato@empresa.com.br
- nome.sobrenome@dominio.co

### Emails Inválidos ❌
- usuario@exemplo (sem extensão)
- @exemplo.com (sem texto antes do @)
- usuario@.com (sem domínio)
- usuario exemplo@site.com (com espaços)
- usuario@@exemplo.com (dois @)

## 🎨 Personalização

Você pode personalizar facilmente:

- **Cores**: Modifique o gradiente no CSS (propriedade `background`)
- **Mensagens**: Altere os textos de erro no arquivo `validador.js`
- **Validação**: Adicione ou remova regras na função `validarEmail()`

## 💡 Melhorias Futuras

- [ ] Integração com backend para salvar emails
- [ ] Validação de domínios descartáveis
- [ ] Suporte a múltiplos idiomas
- [ ] Animações mais elaboradas
- [ ] Lista de emails cadastrados
- [ ] Exportação de dados

## 📄 Licença

Este projeto é livre para uso pessoal e educacional.

## 👨‍💻 Autor

Desenvolvido como exemplo de validação de formulários em JavaScript.

## 🤝 Contribuições

Sinta-se livre para fazer fork, sugerir melhorias ou reportar bugs!

---

**Dica**: Use este projeto como base para aprender sobre validação de formulários e manipulação do DOM em JavaScript! 🚀
