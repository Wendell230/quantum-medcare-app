const API_URL = process.env.REACT_APP_API_URL;

export async function login(email, password) {
  const response = await fetch(`${API_URL}/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
    body: JSON.stringify({ email, password }),
  });

  if (!response.ok) {
    throw new Error('Login inválido');
  }

  return response.json();
}

export async function signup(firstName, lastName, email, password) {
  const response = await fetch(`${API_URL}/auth/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include', // para receber cookies caso o backend use sessão
    body: JSON.stringify({
      firstName,
      lastName,
      email,
      password,
    }),
  });

  if (!response.ok) {
    throw new Error('Erro ao cadastrar');
  }

  return response.json(); // normalmente retorna o usuário cadastrado ou status
}
