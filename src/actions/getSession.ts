'use server'

export async function getCurrentUser(req?: any) {
  const baseURL='https://ingress-nginx-controller.ingress-nginx.svc.cluster.local'
  const url = `${baseURL}/api/auth/session`
  const options: RequestInit = {
    method: 'GET',
    credentials: 'include',
  };

  if (req) {
    options.headers = req.headers;
  }

  try {
    const response = await fetch(url, options);

    if (!response.ok) {
      throw new Error(`Failed to fetch current user: ${response.statusText}`);
    }

    const data = await response.json();
    console.log('Current User:', data.currentUser); // Log the current user
    return data.currentUser || null; // Return the user if present, otherwise null
  } catch (error) {
    console.error('Error fetching current user:', error);
    throw error;
  }
}