import {useEffect} from "react";

const useNotifyStatus = (
    notifyStatusFn: (flag: boolean) => void,
    statusFlag: boolean,
) => {
    useEffect(() => {
        notifyStatusFn(statusFlag);
    }, [statusFlag, notifyStatusFn]);
};

export default useNotifyStatus;
