
const students = [
  { name: "Amina", marks: [78, 82, 91, 66] },
  { name: "Brian", marks: [55, 49, 61, 58] },
  { name: "Cynthia", marks: [88, 90, 84, 92] },
  { name: "David", marks: [40, 35, 52, 47] },
  { name: "Elsa", marks: [70, 73, 68, 75] }
];

function generateReport() {
  const reportDiv = document.getElementById("report");
  const summaryDiv = document.getElementById("summary");

  reportDiv.innerHTML = "<h2>Class Report</h2>";
  summaryDiv.innerHTML = "<h2>Summary</h2>";

  let passCount = 0;
  let failCount = 0;
  let topStudent = null;
  let lowestStudent = null;

  for (let i = 0; i < students.length; i++) {
    let sum = 0;

    for (let j = 0; j < students[i].marks.length; j++) {
      sum += students[i].marks[j];
    }

    let average = sum / students[i].marks.length;
    let grade = "";

    if (average >= 80) {
      grade = "A";
    } else if (average >= 70) {
      grade = "B";
    } else if (average >= 60) {
      grade = "C";
    } else if (average >= 50) {
      grade = "D";
    } else {
      grade = "E";
    }

    let status = "";
    if (average >= 60) {
      status = "PASS";
      passCount++;
    } else {
      status = "FAIL";
      failCount++;
    }

    if (topStudent === null || average > topStudent.average) {
      topStudent = { name: students[i].name, average: average };
    }

    if (lowestStudent === null || average < lowestStudent.average) {
      lowestStudent = { name: students[i].name, average: average };
    }

    reportDiv.innerHTML += `
      <div class="student">
        ${students[i].name}: Avg ${average.toFixed(2)} | Grade ${grade} | ${status}
      </div>
    `;
  }

  summaryDiv.innerHTML += `
    <p>Students: ${students.length}</p>
    <p>Pass: ${passCount}</p>
    <p>Fail: ${failCount}</p>
    <p>Top Student: ${topStudent.name} (${topStudent.average.toFixed(2)})</p>
    <p>Lowest Student: ${lowestStudent.name} (${lowestStudent.average.toFixed(2)})</p>
  `;
}
