document.getElementById("studentForm").addEventListener("submit", function(event) {

    event.preventDefault();

    // Student details
    let name = document.getElementById("name").value;
    let rollNo = document.getElementById("rollNo").value;
    let email = document.getElementById("email").value;
    let course = document.getElementById("course").value;

    // Marks
    let html = Number(document.getElementById("html").value);
    let css = Number(document.getElementById("css").value);
    let javascript = Number(document.getElementById("javascript").value);

    // Calculate
    let total = html + css + javascript;
    let percentage = total / 3;

    // Pass or Fail
    let result;

    if (html >= 40 && css >= 40 && javascript >= 40) {
        result = "PASS";
    } else {
        result = "FAIL";
    }

    // Student object
    let student = {
        name: name,
        rollNo: rollNo,
        email: email,
        course: course,
        html: html,
        css: css,
        javascript: javascript,
        total: total,
        percentage: percentage,
        result: result
    };

    // Convert object to JSON
    let studentJSON = JSON.stringify(student);

    // Store in Local Storage
    localStorage.setItem("studentResult", studentJSON);

    // Display result
    document.getElementById("resultName").textContent = name;
    document.getElementById("resultRoll").textContent = rollNo;
    document.getElementById("resultCourse").textContent = course;
    document.getElementById("totalMarks").textContent = total + " / 300";
    document.getElementById("percentage").textContent =
        percentage.toFixed(2) + "%";
    document.getElementById("resultStatus").textContent = result;

    document.getElementById("resultBox").style.display = "block";
});