window.onload = function() {
    function calculateGrade() {
      
      let studentScore = document.getElementById("studentScore").value;
      let maxScore = document.getElementById("maxScore").value;
      
      
      studentScore = Number(studentScore);
      maxScore = Number(maxScore);
      
      let result;
      
      
      if (maxScore > 0) {
        result = (studentScore / maxScore) * 100;
      } else {
        document.getElementById("gradeResult").innerText = "Maximum score must be greater than 0.";
        return;
      }
      
      let grade;
      switch (true) {
        case (result >= 90):
          grade = 5;
          break;
        case (result >= 80):
          grade = 4;
          break;
        case (result >= 70):
          grade = 3;
          break;
        case (result >= 60):
          grade = 2;
          break;
        case (result > 50):
          grade = 1;
          break;
        default:
          grade = 0; // Student failed
      }
      
      // Display result
      document.getElementById("gradeResult").innerText = `The student's grade is: ${grade}`;
    }
    window.calculateGrade = calculateGrade;
  };
  