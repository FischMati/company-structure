import {FetchOptions, useFetch} from "react-async";
import IEmployee from "../Interfaces/Employee";
import {BASE_API} from "../routes";

const useFetchEmployeesByManager =
    (managerId: number, options?: FetchOptions<any>) =>
        useFetch<IEmployee[]>(`${BASE_API}?manager=${managerId}`, {
            headers: {
                Accept: "application/json",
            },
        }, options);

export default useFetchEmployeesByManager;
