import axios from "axios";
import React,{useEffect, useState} from "react";

export default function useHTTP(method, url) {
  const type = method.toUpperCase();
  const [request, setRequest] = useState({
    loading: false,
    data: null,
    error: false,
  });
  useEffect(() => {
    setRequest({
      ...request,
      loading: true,
    });
    switch (type) {
      case "GET":
        axios
          .get(url)
          .then((res) => {
            setRequest({ ...request, loading: false, data: res.data });
          })
          .catch((err) => {
            setRequest({ loading: false, error: true, data: null });
          });
        break;

      default:
        break;
    }
  }, []);
  return request;
}
