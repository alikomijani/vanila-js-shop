import { El } from "@/utils/createElement";
import logo from "@/assets/image/logo.svg";
export function Logo() {
  return El({
    element: "img",
    src: "https://www.digikala.com/statics/img/svg/logo.svg",
    //src :logo
  });
}
