// Função para validar formato de email
function validarEmail(email) {
  // Regex para validação básica de email
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Verificações adicionais
  const temEspaco = /\s/.test(email);
  const temArroba = email.includes('@');
  const partesArroba = email.split('@');
  const temPonto = email.includes('.');

  // Validações
  if (email.trim() === '') {
    return {
      valido: false,
      mensagem: 'Por favor, insira um email',
    };
  }

  if (temEspaco) {
    return {
      valido: false,
      mensagem: 'Email não pode conter espaços',
    };
  }

  if (!temArroba) {
    return {
      valido: false,
      mensagem: 'Email deve conter @',
    };
  }

  if (partesArroba.length !== 2) {
    return {
      valido: false,
      mensagem: 'Email deve ter apenas um @',
    };
  }

  if (partesArroba[0].length === 0) {
    return {
      valido: false,
      mensagem: 'Email deve ter texto antes do @',
    };
  }

  if (!temPonto || !partesArroba[1].includes('.')) {
    return {
      valido: false,
      mensagem: 'Email deve ter um domínio válido (.com, .br, etc)',
    };
  }

  const dominio = partesArroba[1].split('.');
  if (dominio[dominio.length - 1].length < 2) {
    return {
      valido: false,
      mensagem: 'Extensão do domínio inválida',
    };
  }

  if (!regex.test(email)) {
    return {
      valido: false,
      mensagem: 'Formato de email inválido',
    };
  }

  return {
    valido: true,
    mensagem: 'Email válido! ✓',
  };
}

// Elementos do DOM
const form = document.getElementById('emailForm');
const emailInput = document.getElementById('email');
const messageDiv = document.getElementById('message');

// Validação em tempo real
emailInput.addEventListener('input', function () {
  const resultado = validarEmail(this.value);

  // Remove classes anteriores
  emailInput.classList.remove('error', 'success');
  messageDiv.classList.remove('error', 'success');

  if (this.value.trim() !== '') {
    if (resultado.valido) {
      emailInput.classList.add('success');
      messageDiv.classList.add('success');
    } else {
      emailInput.classList.add('error');
      messageDiv.classList.add('error');
    }
    messageDiv.textContent = resultado.mensagem;
  } else {
    messageDiv.textContent = '';
  }
});

// Validação no envio do formulário
form.addEventListener('submit', function (e) {
  e.preventDefault();

  const email = emailInput.value;
  const resultado = validarEmail(email);

  // Remove classes anteriores
  emailInput.classList.remove('error', 'success');
  messageDiv.classList.remove('error', 'success');

  if (resultado.valido) {
    emailInput.classList.add('success');
    messageDiv.classList.add('success');
    messageDiv.textContent = '✓ Email cadastrado com sucesso!';

    // Aqui você pode adicionar código para enviar o email para um servidor
    console.log('Email cadastrado:', email);

    // Limpa o formulário após 2 segundos
    setTimeout(() => {
      emailInput.value = '';
      emailInput.classList.remove('success');
      messageDiv.textContent = '';
    }, 2000);
  } else {
    emailInput.classList.add('error');
    messageDiv.classList.add('error');
    messageDiv.textContent = resultado.mensagem;
  }
});
