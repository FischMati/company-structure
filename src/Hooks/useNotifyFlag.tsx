import {useEffect} from "react";

const useNotifyFlag = (
    notifyFlagFn: (flag: boolean) => void,
    flag: boolean,
) => {
    useEffect(() => {
        notifyFlagFn(flag);
    }, [flag, notifyFlagFn]);
};

export default useNotifyFlag;
