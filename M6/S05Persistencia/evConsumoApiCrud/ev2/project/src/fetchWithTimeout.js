import fetch from 'node-fetch';

export async function fetchWithTimeout(url, options, timeout = 10000) {
  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), timeout);
  try {
    const response = await fetch(url, { ...options, signal: controller.signal });
    return response;
  } catch (error) {
    throw new Error('Solicitud agotada por tiempo de espera');
  } finally {
    clearTimeout(id);
  }
}
