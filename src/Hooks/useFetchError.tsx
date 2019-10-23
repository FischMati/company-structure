import {useState} from "react";

const useFetchError = () => {
    const [fetchError, setFetchError]: [Error | undefined, any] = useState(undefined);

    const fetchOptions = {
        onResolve: () => setFetchError(undefined),
        onReject: (error: Error) => {
            setFetchError(error);
        },
    };

    return {fetchError, fetchOptions};
};

export default useFetchError;
