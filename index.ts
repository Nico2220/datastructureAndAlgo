import { longestPeak } from "./longestPeak";
import { monotonicArray } from "./monotonicArray";
import { arrayOfProducts } from "./arrayOfProducts";
import { fourNumberSum } from "./fourSum";
import { mergeOverlappingIntervals } from "./merge_overlapping_Intervals";
import { threeNumberSum } from "./threeNumberSum";
import { spiralTraverse } from "./spiralTraverse";
// export function tournamentWinner(competitions: string[][], results: number[]) {
//   // Write your code here.
//   const resutlCompetions: { [key: string]: number } = {};
//   for (let i = 0; i < results.length; i++) {
//     const teams = competitions[i];
//     const resultValue = results[i];

//     if (resultValue === 0) {
//       resutlCompetions[teams[1]] = resutlCompetions[teams[1]] + 3;
//     }

//     if (resultValue === 1) {
//       resutlCompetions[teams[0]] = resutlCompetions[teams[0]] + 3;
//     }
//   }

//   console.log("resutlCompetions=", resutlCompetions);

//   let currentWiner = 0;
//   let teamName: string = "";
//   for (const el in resutlCompetions) {
//     if (resutlCompetions[el] >= currentWiner) {
//       currentWiner = resutlCompetions[el];
//       teamName = el;
//     }
//   }

//   console.log(teamName);
//   return teamName;
// }

// const competitions = [
//   ["HTML", "C#"],
//   ["C#", "Python"],
//   ["Python", "HTML"],
// ];

// const results = [0, 0, 1];

// tournamentWinner(competitions, results);

// longestPeak([1, 2, 3, 3, 4, 0, 10, 6, 5, -1, -3, 2, 3]);
// const resultmonotonicArray2 = monotonicArray([
//   1, 1, 2, 3, 4, 5, 5, 5, 6, 7, 8, 7, 9, 10, 11,
// ]);

// console.log("resultmonotonicArray2=", resultmonotonicArray2);

// const r = arrayOfProducts([5, 1, 4, 2]);
// const r = mergeOverlappingIntervals([
//   [1, 2],
//   [3, 5],
//   [4, 7],
//   [6, 8],
//   [9, 10],
// ]);

const r = spiralTraverse([
  [1, 2, 3, 4],
  [12, 13, 14, 5],
  [11, 16, 15, 6],
  [10, 9, 8, 7],
]);
console.log(r);
