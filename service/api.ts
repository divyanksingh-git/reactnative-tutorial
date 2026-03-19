const TMDB_CONFIG = {
  apiKey: process.env.EXPO_PUBLIC_TMDB_API_KEY,
  token: process.env.EXPO_PUBLIC_TMDB_API_TOKEN,
  baseUrl: "https://api.themoviedb.org/3",
  headers: {
    Authorization: `Bearer ${process.env.EXPO_PUBLIC_TMDB_API_TOKEN}`,
    Accept: "application/json",
  },
};

export const fetchFromTMDB = async (endpoint: string) => {
  const response = await fetch(`${TMDB_CONFIG.baseUrl}${endpoint}`, {
    method: "GET",
    headers: TMDB_CONFIG.headers,
  });
  if (!response.ok) {
    if (response.status === 22) {
      return [];
    }
    throw new Error(response.statusText);
  }
  const data = await response.json();
  return data.results;
};
