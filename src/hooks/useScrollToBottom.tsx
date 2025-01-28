import {useEffect, RefObject} from "react";

const useScrollToBottom = <T, >(
    ref: RefObject<HTMLDivElement>,
    dependencies: T[]
) => {
    useEffect(() => {
        if (ref.current) {
            ref.current.scrollTop = ref.current.scrollHeight;
        }
    }, dependencies);
};

export default useScrollToBottom;
