import useFetchEmployeesByManager from "./useFetchEmployeesByManager";

const useDeferredFetchEmployeesByManager =
    (managerId: number) =>
        useFetchEmployeesByManager(managerId, {
            defer: true,
        });

export default useDeferredFetchEmployeesByManager;
