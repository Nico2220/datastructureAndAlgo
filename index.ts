export function tournamentWinner(competitions: string[][], results: number[]) {
  // Write your code here.
  const resutlCompetions: { [key: string]: number } = {};
  for (let i = 0; i < results.length; i++) {
    const teams = competitions[i];
    const resultValue = results[i];

    if (resultValue === 0) {
      resutlCompetions[teams[1]] = resutlCompetions[teams[1]] + 3;
    }

    if (resultValue === 1) {
      resutlCompetions[teams[0]] = resutlCompetions[teams[0]] + 3;
    }
  }

  console.log("resutlCompetions=", resutlCompetions);

  let currentWiner = 0;
  let teamName: string = "";
  for (const el in resutlCompetions) {
    if (resutlCompetions[el] >= currentWiner) {
      currentWiner = resutlCompetions[el];
      teamName = el;
    }
  }

  console.log(teamName);
  return teamName;
}

const competitions = [
  ["HTML", "C#"],
  ["C#", "Python"],
  ["Python", "HTML"],
];

const results = [0, 0, 1];

tournamentWinner(competitions, results);
