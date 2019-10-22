import {FetchOptions, useFetch} from "react-async";
import IEmployee from "../Interfaces/Employee";

const BASE_API = "https://2jdg5klzl0.execute-api.us-west-1.amazonaws.com/default/EmployeesChart-Api";

const useFetchEmployeesByManager =
    (managerId: number, options?: FetchOptions<any>) =>
        useFetch<IEmployee[]>(`${BASE_API}?manager=${managerId}`, {
            headers: {
                Accept: "application/json",
            },
        }, options);

export default useFetchEmployeesByManager;
