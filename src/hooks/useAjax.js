import { useEffect, useState } from "react";

export const useAjax = (url) => {
  const [state, setState] = useState({
    // per defecte està a null
    data: null,
    charging: true,
  });

  const getData = async () => {
    setState({
      ...state,
      charging: true,
    });

    const petition = await fetch(url);
    const { data } = await petition.json();
    // console.log(data);
    setState({
      data: data,
      charging: false,
    });
  };

  useEffect(() => {
    getData();
  }, [url]);

  return {
    data: state.data,
    charging: state.charging,
  };
};
