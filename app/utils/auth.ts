export async function fetchCurrentUser() {
    const response = await fetch('http://209.38.60.124/api/auth/session', {
      credentials: 'include',
    });
  
    if (!response.ok) {
      throw new Error('Failed to fetch current user');
    }
  
    return response.json();
  }