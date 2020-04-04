export function binarySearch(blockList) {
  const target = blockList[0].height;
  let result = [];
  let action = [];

  let l = 1;
  let r = blockList.length - 1;

  while (l <= r) {
    let mid = Math.floor(l + (r - l) / 2);
    action.push("curr", mid);
    result.push(action);
    action = [];

    if (blockList[mid].height === target) {
      action.push("result", mid);
      result.push(action);
      return result;
    }

    action.push("processed");
    if (blockList[mid].height < target) {
      for (let i = 1; i < mid + 1; i++) {
        action.push(i);
      }
      l = mid + 1;
    } else {
      for (let i = mid; i < blockList.length; i++) {
        action.push(i);
      }
      r = mid - 1;
    }
    result.push(action);
    action = [];
  }
}

//original

// binarySearch() {
//     this.clear();
//     this.setState({ searching: true });
//     const blockList = [...this.state.blockList];
//     const target = this.state.blockList[0].height;
//     const { speed } = this.state;

//     let l = 1;
//     let r = blockList.length - 1;

//     let timer = 0;

//     while (l <= r) {
//       let mid = Math.floor(l + (r - l) / 2);
//       setTimeout(() => {
//         blockList[mid].state = "curr";
//         this.setState({ blockList });
//       }, speed * timer);
//       timer += 1;
//       if (blockList[mid].height === target) {
//         setTimeout(() => {
//           blockList[mid].state = "result";
//           this.setState({ blockList, searching: false });
//         }, speed * timer);
//         return;
//       } else if (blockList[mid].height < target) {
//         setTimeout(() => {
//           for (let i = 1; i < mid + 1; i++) {
//             blockList[i].state = "processed";
//           }
//           this.setState({ blockList });
//         }, speed * timer);
//         l = mid + 1;
//       } else {
//         setTimeout(() => {
//           for (let i = mid; i < blockList.length; i++) {
//             blockList[i].state = "processed";
//           }
//           this.setState({ blockList });
//         }, speed * timer);
//         r = mid - 1;
//       }
//       timer += 1;
//     }
//   }
