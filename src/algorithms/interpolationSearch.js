// original

// interpolationSearch() {
//   this.clear();
//   this.setState({ searching: true });
//   const blockList = [...this.state.blockList];
//   const target = this.state.blockList[0].height;
//   const { speed } = this.state;

//   let l = 1;
//   let r = blockList.length - 1;

//   let timer = 0;

//   while (l <= r) {
//     if (l === r) {
//       setTimeout(() => {
//         blockList[l].state = "result";
//         this.setState({ blockList, searching: false });
//       }, speed * timer);
//       return;
//     }
//     let mid =
//       l +
//       Math.floor(
//         ((r - l) / (blockList[r].height - blockList[l].height)) *
//           (target - blockList[l].height)
//       );
//     setTimeout(() => {
//       blockList[mid].state = "curr";
//       this.setState({ blockList });
//     }, speed * timer);
//     timer += 1;
//     if (blockList[mid].height === target) {
//       setTimeout(() => {
//         blockList[mid].state = "result";
//         this.setState({ blockList, searching: false });
//       }, speed * timer);
//       return;
//     } else if (blockList[mid].height < target) {
//       setTimeout(() => {
//         for (let i = 1; i < mid + 1; i++) {
//           blockList[i].state = "processed";
//         }
//         this.setState({ blockList });
//       }, speed * timer);
//       l = mid + 1;
//     } else {
//       setTimeout(() => {
//         for (let i = mid; i < blockList.length; i++) {
//           blockList[i].state = "processed";
//         }
//         this.setState({ blockList });
//       }, speed * timer);
//       r = mid - 1;
//     }
//     timer += 1;
//   }
// }
