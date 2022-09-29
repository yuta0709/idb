import { number } from "./../node_modules/@types/prop-types/index.d";
import axios from "axios";
import { useState, useEffect, useCallback } from "react";

export type IdeaResponse = {
  id: number;
  title: string;
  description: string;
  deadline: string;
  created_at: Date;
  comments: Comment[];
};

export type Comment = {
  id: number;
  ideaId: number;
  comment: number;
  created_at: Date;
};

export type Idea = IdeaResponse;

export const useIdea = (id: string | undefined) => {
  const [idea, setIdea] = useState<Idea>();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchIdea = async () => {
    try {
      setLoading(true);
      const res = await axios.get<IdeaResponse>(
        `${process.env.NEXT_PUBLIC_API_ORIGIN}/ideas/${id}`
      );
      setIdea(res.data);
      setLoading(false);
    } catch (e) {
      console.error(e);
      setError("データの取得に失敗しました");
      setLoading(false);
    }
  };

  const load = () => {
    if (id) {
      fetchIdea();
    }
  };

  useEffect(() => {
    load();
  }, [id]);

  return {
    data: idea,
    loading: loading || !idea,
    error: error,
    reload: load,
  };
};
