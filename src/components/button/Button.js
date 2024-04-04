import { El } from "@/utils";
export function Button({ text, ...rest }) {
  return El({
    element: "button",
    innerText: text,
    className:
      "rounded-md text-center block w-full p-2 bg-red-500 text-white hover:bg-red-600",
    ...rest,
  });
}
