import { useContext } from "react";
import { Loading } from "../context/loadingProvider";

export const useLoading = () => useContext(Loading);
