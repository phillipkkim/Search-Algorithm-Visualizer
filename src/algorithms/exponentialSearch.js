export function exponentialSearch(blockList) {
  const target = blockList[0].height;
  let result = [];
  let action = [];

  let bound = 1;
  while (bound < blockList.length && blockList[bound].height < target) {
    action.push("processed");
    for (let i = 1; i < bound; i++) {
      action.push(i);
    }
    action.push("curr", bound);
    result.push(action);
    action = [];
    bound = bound * 2;
  }
  if (Math.floor(bound / 2) > 0) {
    action.push("pending", Math.floor(bound / 2));
  }
  if (bound < blockList.length - 1) {
    action.push("processed");
    for (let i = bound + 1; i < blockList.length; i++) {
      action.push(i);
    }
  }

  let l = Math.floor(bound / 2);
  let r = Math.min(bound, blockList.length - 1);
  if (l === 0) {
    l += 1;
  }

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

//   exponentialSearch() {
//     this.clear();
//     this.setState({ searching: true });
//     const blockList = [...this.state.blockList];
//     const target = this.state.blockList[0].height;
//     const { speed } = this.state;

//     let timer = 0;
//     let bound = 1;
//     while (bound < blockList.length && blockList[bound].height < target) {
//       let temp = bound;
//       setTimeout(() => {
//         for (let i = 1; i < temp; i++) {
//           blockList[i].state = "processed";
//         }
//         blockList[temp].state = "curr";
//         this.setState({ blockList });
//       }, speed * timer);
//       timer += 1;
//       bound = bound * 2;
//     }
//     if (Math.floor(bound / 2) > 0) {
//       setTimeout(() => {
//         blockList[Math.floor(bound / 2)].state = "pending";
//         this.setState({ blockList });
//       }, speed * timer);
//     }

//     if (bound < blockList.length - 1) {
//       setTimeout(() => {
//         for (let i = bound + 1; i < blockList.length; i++) {
//           blockList[i].state = "processed";
//         }
//         this.setState({ blockList });
//       }, speed * timer);
//     }

//     let l = Math.floor(bound / 2);
//     let r = Math.min(bound, blockList.length - 1);
//     if (l === 0) {
//       l += 1;
//     }

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
