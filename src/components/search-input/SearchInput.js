import { El } from "@/utils";

export function SearchInput() {
  return El({
    element: "input",
    type: "search",
    className: "block bg-gray-100 rounded px-2 py-1",
    placeholder: "جست و جو",
  });
}
