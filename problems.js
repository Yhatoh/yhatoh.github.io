// Add problems here. Each category renders in the order given below.
// A problem is { url, title, note (optional), difficulty (1..4) }.
const TOPICS = [
  {
    title: "0. Implementation",
    problems: [],
  },
  {
    title: "1. Greedy",
    problems: [],
  },
  {
    title: "2. Search and sorting",
    problems: [],
  },
  {
    title: "3. Data structures",
    problems: [
      {
        url: "https://codeforces.com/problemset/problem/816/B",
        title: "CODEFORCES - 816B",
        note: "segment tree lazy",
        difficulty: 1,
      },
    ],
  },
  {
    title: "4. Graphs",
    problems: [
      {
        url: "https://atcoder.jp/contests/arc226/tasks/arc226_a",
        title: "ATCODER - ARC226A",
        note: "implicit graph",
        difficulty: 3,
      },
    ],
  },
  {
    title: "5. Dynamic Programming",
    problems: [
      {
        url: "https://atcoder.jp/contests/abc468/tasks/abc468_f",
        title: "ATCODER - ARC226F",
        note: "DP + optimization",
        difficulty: 3,
      },
      {
        url: "https://atcoder.jp/contests/abc466/tasks/abc466_e",
        title: "ATCODER - ABC466E",
        note: "2D",
        difficulty: 1,
      },
    ],
  },
  {
    title: "6. Math",
    problems: [],
  },
  {
    title: "7. String",
    problems: [],
  },
];

function renderTopics(topics, root) {
  for(const topic of topics) {
    const heading = document.createElement("h2");
    heading.className = "font-bold text-xl";
    heading.textContent = topic.title;
    root.appendChild(heading);

    for(const problem of topic.problems) {
      const paragraph = document.createElement("p");
      paragraph.className = "text-left";

      const link = document.createElement("a");
      link.className = "text-blue-600";
      link.href = problem.url;

      const note = problem.note ? " (" + problem.note + ")" : "";
      const stars = "*".repeat(problem.difficulty);
      link.textContent = problem.title + note + " " + stars;

      paragraph.appendChild(link);
      root.appendChild(paragraph);
    }
  }
}

renderTopics(TOPICS, document.getElementById("topics"));
