export function jumpSearch(blockList) {
  const target = blockList[0].height;
  let result = [];
  let action = [];

  let step = Math.round(Math.sqrt(blockList.length - 1));
  let prev = 1;

  while (blockList[Math.min(step, blockList.length - 1)].height < target) {
    action.push("processed");
    for (let i = 1; i < prev; i++) {
      action.push(i);
    }
    action.push("pending", prev);
    action.push("curr", step);
    result.push(action);
    action = [];
    prev = step;
    step += Math.round(Math.sqrt(blockList.length - 1));
  }

  for (let i = 1; i <= prev; i++) {
    action.push("processed", i);
  }
  if (step < blockList.length) {
    action.push("curr", step);
    result.push(action);
    action = [];
    action.push("pending", step);
    for (let i = step + 1; i < blockList.length; i++) {
      action.push("processed", i);
    }
    result.push(action);
    action = [];
  }

  while (blockList[prev].height < target) {
    action.push("processed", prev, "curr", prev + 1);
    result.push(action);
    action = [];
    prev += 1;
  }

  action.push("result", prev);
  result.push(action);
  return result;
}

// original

// function jumpSearch() {
//   this.clear();
//   this.setState({ searching: true });
//   const blockList = [...this.state.blockList];
//   const targetBlock = this.state.blockList[0];
//   const numBlocks = this.state.numBlocks;
//   const { speed } = this.state;

//   let step = Math.round(Math.sqrt(numBlocks));
//   let prev = 1;

//   let timer = 0;
//   while (blockList[Math.min(step, numBlocks)].height < targetBlock.height) {
//     let marker = prev;
//     setTimeout(() => {
//       for (let i = 1; i < marker; i++) {
//         blockList[i].state = "processed";
//       }
//       blockList[marker].state = "pending";
//       this.setState({ blockList });
//     }, speed * timer);
//     prev = step;
//     let i = step;
//     setTimeout(() => {
//       blockList[i].state = "curr";
//       this.setState({ blockList });
//     }, speed * timer);
//     timer += 1;
//     step += Math.round(Math.sqrt(numBlocks));
//   }
//   let marker = prev;
//   setTimeout(() => {
//     for (let i = 1; i < marker; i++) {
//       blockList[i].state = "processed";
//     }
//     this.setState({ blockList });
//   }, speed * timer);

//   while (blockList[prev].height < targetBlock.height) {
//     let i = prev;
//     setTimeout(() => {
//       blockList[i].state = "processed";
//       blockList[i + 1].state = "curr";
//       this.setState({ blockList });
//     }, speed * timer);
//     timer += 1;
//     prev += 1;
//   }

//   setTimeout(() => {
//     blockList[prev].state = "result";
//     this.setState({ blockList, searching: false });
//   }, speed * timer);
// }
