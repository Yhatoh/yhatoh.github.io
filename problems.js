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
    problems: [
      {
        url: "https://atcoder.jp/contests/abc215/tasks/abc215_f",
        title: "ATCODER - ABC215F",
        note: "binary search",
        difficulty: 2,
      }
    ],
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
      {
        url: "https://atcoder.jp/contests/abc458/tasks/abc458_d",
        title: "ATCODER - ABC458D",
        note: "ordered tree",
        difficulty: 1,
      },
      {
        url: "https://codeforces.com/problemset/problem/893/F",
        title: "CODEFORCES - 893F",
        note: "persistent segment tree",
        difficulty: 4,
      }
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

      const note = document.createElement("span");
      note.className = "spoiler";
      note.textContent = problem.note ? "(" + problem.note + ")" : "";
      note.onclick = () => note.classList.toggle("revealed");

      const stars = "*".repeat(problem.difficulty);
      link.textContent = problem.title;

      paragraph.append(link, " ", note, " " + stars);
      root.appendChild(paragraph);
    }
  }
}

renderTopics(TOPICS, document.getElementById("topics"));
