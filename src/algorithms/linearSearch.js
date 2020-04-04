export function linearSearch(blockList) {
  const target = blockList[0].height;
  let result = [];
  let action = [];
  for (let i = 1; i < blockList.length; i++) {
    action.push("curr", i);
    result.push(action);
    action = [];
    if (blockList[i].height === target) {
      action.push("result", i);
      result.push(action);
      return result;
    }
    action.push("processed", i);
  }
}

//original

// linearSearch() {
//     this.clear();
//     this.setState({ searching: true });
//     const blockList = [...this.state.blockList];
//     const targetBlock = this.state.blockList[0];
//     const { speed } = this.state;

//     let timer = 0;
//     // loop from beginning one by one
//     for (let i = 1; i <= blockList.length - 1; i++) {
//       //update to show curr block
//       setTimeout(() => {
//         blockList[i].state = "curr";
//         this.setState({ blockList });
//       }, speed * timer);
//       timer += 1;
//       // block is found
//       if (blockList[i].height === targetBlock.height) {
//         setTimeout(() => {
//           blockList[i].state = "result";
//           this.setState({ blockList, searching: false });
//         }, speed * timer);
//         return;
//       }
//       // mark block as processed
//       setTimeout(() => {
//         blockList[i].state = "processed";
//         this.setState({ blockList });
//       }, speed * timer);
//     }
//   }
