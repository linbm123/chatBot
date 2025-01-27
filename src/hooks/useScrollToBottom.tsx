import { useEffect, RefObject } from "react";

const useScrollToBottom = (
  ref: RefObject<HTMLDivElement>,
  dependencies: any[]
) => {
  useEffect(() => {
    if (ref.current) {
      ref.current.scrollTop = ref.current.scrollHeight;
    }
  }, dependencies);
};

export default useScrollToBottom;
