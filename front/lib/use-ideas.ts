import { func } from "./../node_modules/@types/prop-types/index.d";
import axios from "axios";
import { useState, useEffect } from "react";

export type Idea = {
  id: number;
  title: string;
  description: string;
  deadline: string;
  createdAt: Date;
};

export const useIdeas = () => {
  const [ideas, setIdeas] = useState<Idea[]>([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const reload = () => {
    fetchIdeas();
  };

  const fetchIdeas = async () => {
    try {
      setLoading(true);
      const res = await axios.get<Idea[]>(
        `${process.env.NEXT_PUBLIC_API_ORIGIN}/ideas`
      );
      setLoading(false);
      setIdeas([...res.data]);
    } catch (e) {
      console.error(e);
      setError("データの取得に失敗しました");
      setLoading(false);
      return [];
    }
  };

  useEffect(() => {
    fetchIdeas();
  }, []);

  return {
    data: ideas,
    loading: loading || !ideas,
    error: error,
    reload: reload,
  };
};
