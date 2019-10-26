import {useEffect} from "react";

const useForceFlag = (
    condition: boolean,
    setFlag: (value: boolean) => void,
) => {
    useEffect(() => {
        if (condition) {
            setFlag(true);
        }
    });
};

export default useForceFlag;
