document.addEventListener("DOMContentLoaded", () => {
  const options = document.querySelectorAll(".option");

  options.forEach(option => {
    option.addEventListener("click", () => {
      // scoate selecția anterioară din aceeași întrebare
      const parent = option.parentElement;
      parent.querySelectorAll(".option").forEach(opt => opt.classList.remove("selected"));

      // marchează opțiunea curentă ca selectată
      option.classList.add("selected");
    });
  });

  const form = document.getElementById("quizForm");
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const answers = [];
    document.querySelectorAll(".question").forEach(question => {
      const selected = question.querySelector(".option.selected");
      if (selected) {
        answers.push(selected.dataset.value);
      } else {
        answers.push("Neselectat");
      }
    });

    // Mică caracterizare simplă pe baza răspunsurilor
    let message = "Profilul tău: ";
    if (answers.includes("Literatură") || answers.includes("Mihai Eminescu")) {
      message += "Ești o persoană sensibilă și creativă, atrasă de frumos și reflecție. ";
    }
    if (answers.includes("Matematică") || answers.includes("Științe")) {
      message += "Ai o minte logică și analitică, orientată spre descoperire și cunoaștere. ";
    }
    if (answers.includes("Mare")) {
      message += "Îți place libertatea și relaxarea, ești visător și romantic. ";
    }
    if (answers.includes("Munte")) {
      message += "Ai spirit aventurier și iubești provocările. ";
    }
    if (answers.includes("Mulți oameni")) {
      message += "Ești sociabil și plin de energie. ";
    }
    if (answers.includes("Câțiva apropiați")) {
      message += "Prețuiești intimitatea și relațiile profunde. ";
    }

    if (message === "Profilul tău: ") {
      message += "Ești o persoană unică, cu preferințe variate.";
    }

    // Afișează rezultatul în containerul #result
    const resultDiv = document.getElementById("result");
    resultDiv.textContent = message;
  });
});

