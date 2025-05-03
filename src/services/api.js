const API_URL = process.env.REACT_APP_API_URL;

export async function login(user, password) {
  const response = await fetch(`${API_URL}/api/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ user, password }),
  });
  return response.json();
}
