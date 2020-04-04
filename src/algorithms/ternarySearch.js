export function ternarySearch(blockList) {
  const target = blockList[0].height;
  let result = [];
  let action = [];

  let l = 1;
  let r = blockList.length - 1;

  while (l <= r) {
    let mid1 = Math.floor(l + (r - l) / 3);
    let mid2 = Math.floor(r - (r - l) / 3);

    action.push("curr", mid1, mid2);
    result.push(action);
    action = [];

    if (blockList[mid1].height === target) {
      action.push("processed", mid2);
      action.push("result", mid1);
      result.push(action);
      return result;
    }

    if (blockList[mid2].height === target) {
      action.push("processed", mid1);
      action.push("result", mid2);
      result.push(action);
      return result;
    }

    action.push("processed");
    if (blockList[mid1].height > target) {
      for (let i = mid1; i < blockList.length; i++) {
        action.push(i);
      }
      r = mid1 - 1;
    } else if (blockList[mid2].height < target) {
      for (let i = 1; i < mid2 + 1; i++) {
        action.push(i);
      }
      l = mid2 + 1;
    } else {
      for (let i = 1; i < mid1 + 1; i++) {
        action.push(i);
      }
      for (let i = mid2; i < blockList.length; i++) {
        action.push(i);
      }
      l = mid1 + 1;
      r = mid2 - 1;
    }
    result.push(action);
    action = [];
  }
}
