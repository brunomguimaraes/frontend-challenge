import { RefObject } from "react";

import useEventListener from "hooks/useEventListener";

function useOnClickOutside<T extends HTMLElement = HTMLElement>(
  ref: RefObject<T>,
  handler: (event: MouseEvent) => void
): void {
  useEventListener("mousedown", (event) => {
    const elem = ref?.current;

    if (!elem || elem.contains(event.target as Node)) {
      return;
    }

    handler(event as unknown as MouseEvent);
  });
}

export default useOnClickOutside;
