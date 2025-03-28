import { useQuery } from "@tanstack/react-query";

export function useDesserts() {
  const { isPending, data, error } = useQuery({
    queryKey: ["desserts"],
    queryFn: async () => {
      try {
        const res = await fetch("/data/data.json");

        if (!res.ok) throw new Error("Failed to fetch Data");

        const data = await res.json();

        return data;
      } catch (err) {
        console.error(err.message);
      }
    },
  });

  return { isPending, data, error };
}
