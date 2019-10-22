import IEmployee from "../Interfaces/Employee";

const BASE_API = "https://2jdg5klzl0.execute-api.us-west-1.amazonaws.com/default/EmployeesChart-Api";

export const fetchByManager: ({managerId}: {managerId: number}) => Promise<IEmployee[]> = ({managerId}) =>
    fetch(`${BASE_API}?manager=${managerId}`, {
        headers: {
            Accept: "application/json",
        },
    }).then((response) => response.json());
