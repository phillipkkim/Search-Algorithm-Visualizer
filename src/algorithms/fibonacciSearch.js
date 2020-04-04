export function fibonacciSearch(blockList) {
  const target = blockList[0].height;
  blockList = blockList.slice(1);
  let result = [];
  let action = [];

  let fibMMm2 = 0;
  let fibMMm1 = 1;
  let fibM = fibMMm2 + fibMMm1;

  while (fibM < blockList.length) {
    fibMMm2 = fibMMm1;
    fibMMm1 = fibM;
    fibM = fibMMm2 + fibMMm1;
  }

  let offset = -1;
  while (fibM > 1) {
    let i = Math.min(offset + fibMMm2, blockList.length - 1);
    action.push("curr", i + 1);
    result.push(action);
    action = [];

    if (blockList[i].height === target) {
      action.push("result", i + 1);
      result.push(action);
      return result;
    }
    action.push("processed");

    if (blockList[i].height < target) {
      for (let j = 0; j < i + 1; j++) {
        action.push(j + 1);
      }
      fibM = fibMMm1;
      fibMMm1 = fibMMm2;
      fibMMm2 = fibM - fibMMm1;
      offset = i;
    } else {
      for (let j = i; j < blockList.length; j++) {
        action.push(j + 1);
      }
      fibM = fibMMm2;
      fibMMm1 = fibMMm1 - fibMMm2;
      fibMMm2 = fibM - fibMMm1;
    }
    result.push(action);
    action = [];
  }

  if (fibMMm1 && blockList[offset + 1].height === target) {
    action.push("result", offset + 2);
    result.push(action);
    return result;
  }

  return result;
}
