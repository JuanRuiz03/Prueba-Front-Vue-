export async function fetchUsers() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  if (!res.ok) throw new Error('Error cargando usuarios')
  return await res.json()
}
