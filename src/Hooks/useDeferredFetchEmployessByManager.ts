import {FetchOptions} from "react-async";
import useFetchEmployeesByManager from "./useFetchEmployeesByManager";

const useDeferredFetchEmployeesByManager =
    (managerId: number, options?: FetchOptions<any>) =>
        useFetchEmployeesByManager(managerId, {
            defer: true,
            ...options,
        });

export default useDeferredFetchEmployeesByManager;
