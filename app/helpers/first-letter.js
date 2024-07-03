import { helper } from "@ember/component/helper";

export function firstLetter(params /*, hash*/) {
  let [str] = params;
  if (typeof str === "string" && str.length > 0) {
    return str.charAt(0);
  } else {
    return "";
  }
}

export default helper(firstLetter);
