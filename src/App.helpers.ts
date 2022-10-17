import { Comment } from "./App.types";

export const mappedGraphData = (inputArray: Comment[]) =>
  inputArray.reduce((total: Record<string, Comment[]>, obj) => {
    let key = obj["rating"];
    if (!total[key]) {
      total[key] = [];
    }
    total[key].push(obj);
    return total;
  }, {});
