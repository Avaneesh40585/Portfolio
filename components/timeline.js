const timelineData = {
  kicker: 'Education',
  number: '05',
  entries: [
    {
      year: "2024 - Present",
      title: "B.Tech in CSE",
      organization: "IIT Indore",
      status: "present",
      grade: "CPI: 8.98/10",
    },
    {
      year: "2022 - 2024",
      title: "Senior Secondary Education (11th & 12th)",
      organization: "Narayana Junior College",
      status: "past",
      grade: "Percentage: 97.7%",
    },
    {
      year: "2021 - 2022",
      title: "Secondary Education (10th)",
      organization: "Narayana High School",
      status: "past",
      grade: "CGPA: 10/10",
    },
  ],
};

function renderRecordItem(item) {
  const present = item.status === "present" ? " is-present" : "";
  return `
    <div class="record-item reveal${present}">
      <div class="record-year">${item.year}</div>
      <div>
        <div class="record-title">${item.title}</div>
        <div class="record-org">${item.organization}</div>
      </div>
      ${item.grade ? `<div class="record-grade">${item.grade}</div>` : ""}
    </div>
  `;
}

function renderTimeline() {
  const timelineHTML = `
    <div class="wrap">
      <h2 class="kicker"><i>${timelineData.number}</i> — ${timelineData.kicker}</h2>
      <div class="record">
        ${timelineData.entries.map(renderRecordItem).join("")}
      </div>
    </div>
  `;

  document.getElementById("timeline").innerHTML = timelineHTML;
  document.getElementById("timeline").classList.add("timeline-section");
}

renderTimeline();
