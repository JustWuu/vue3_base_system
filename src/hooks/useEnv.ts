export function useEnv() {
  const { MODE, VITE_BASE_API, VITE_ENCRYP_KEY, VITE_ENCRYP_IV, VITE_TIME_ZONE, VITE_MAP_API_KEY } =
    import.meta.env

  return {
    MODE,
    VITE_BASE_API,
    VITE_ENCRYP_KEY,
    VITE_ENCRYP_IV,
    VITE_TIME_ZONE,
    VITE_MAP_API_KEY
  }
}
