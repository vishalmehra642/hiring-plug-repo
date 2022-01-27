import { useQuery } from "react-query";
import { endpoints } from "../utils/endpoints";
import http from "../utils/http";

const fetchData = () => {
  const newEndpoints = endpoints;
  return http().get(newEndpoints);
};

export function useFetchData(id) {
  return useQuery(["fetchData", id], () => fetchData());
}
