import useFetchEmployeesByManager from "./useFetchEmployessByManager";

const useDeferredFetchEmployeesByManager =
    (managerId: number) =>
        useFetchEmployeesByManager(managerId, {
            defer: true,
        });

export default useDeferredFetchEmployeesByManager;
