import { El } from "@/utils";

export function SearchInput() {
  return El({
    element: "input",
    type: "search",
    className: "block bg-gray-100 rounded px-4 py-2 w-[500px]",
    placeholder: "جست و جو",
  });
}
