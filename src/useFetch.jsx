import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null); // Ma'lumotlar uchun state
  const [loading, setLoading] = useState(true); // Yuklanish holati uchun state
  const [error, setError] = useState(null); // Xatoliklarni saqlash uchun state

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP Error! Status: ${response.status}`);
        }
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]); // URL o'zgarsa, qayta ishga tushadi

  return { data, loading, error };
};

export default useFetch;
