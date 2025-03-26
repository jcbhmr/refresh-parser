export default function parseRefresh(
  refresh: string,
  baseURL?: string | URL,
): { delay: number; url: string | null };
