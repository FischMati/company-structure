import {useState} from "react";

const useCollapse = () => {
    const [isCollapsed, setCollapsed] = useState(true);

    const toggleCollapsed = () => {
        const willCollapse = !isCollapsed;

        setCollapsed(willCollapse);

        return willCollapse;
    };

    return {isCollapsed, setCollapsed, toggleCollapsed};
};

export default useCollapse;
