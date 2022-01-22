import React from "react";

// const URL = "https://corona.lmao.ninja/v2/all";

export default function useFetch(url) {
  const [data, setData] = React.useState(null);
  const [loading, setLoading] = React.useState(true);

  let getData = async () => {
    try {
      let data = await fetch(url).then((res) => res.json());
      setData(data);
    } catch {}
    setLoading(false);
  };

  React.useEffect(() => {
    getData();
  }, []);

  return { data, loading };
}
