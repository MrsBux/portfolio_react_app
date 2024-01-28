// utils/hooks/index.jsx
import { useState, useEffect } from "react";

export function useFetch(url, options) {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchData = async () => {
    try {
      const response = await fetch(url, options);
      const fetchedData = await response.json();
      setData(fetchedData);
    } catch (err) {
      console.error(err);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!url) return;
    setLoading(true);
    fetchData();
  }, [url, options]);

  return { isLoading, data, error, fetchData };
}

export function useFilePreview(file) {
  const fileInput = file[0] ?? [];
  const [imgSrc, setImgSrc] = useState(null);

  useEffect(() => {
    if (file && file[0]?.length > 0) {
      const newUrl = URL.createObjectURL(file[0][0]);

      if (newUrl !== imgSrc) {
        setImgSrc(newUrl);
      }
    }
  }, [fileInput[0]?.name]);

  return [imgSrc, setImgSrc];
}
