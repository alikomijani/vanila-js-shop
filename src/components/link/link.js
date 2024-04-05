import { El } from "@/utils";
import { router } from "@/routes/router";
export function Link({ href, ...rest }) {
  return El({
    element: "a",
    href,
    eventListener: [
      {
        event: "click",
        callback: (event) => {
          event.preventDefault();
          router.navigate(href);
        },
      },
    ],
    ...rest,
  });
}
