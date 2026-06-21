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

    alert("Ai ales: \n" + answers.join("\n"));
  });
});
