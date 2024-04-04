import { El } from "@/utils/createElement";

export function Footer() {
  return El({
    element: "div",
    innerText: "فروشگاه اینترنتی دیجی‌کالا، بررسی، انتخاب و خرید آنلاین",
    className: "container mx-auto py-12 bg-gray-100 px-2",
  });
}
