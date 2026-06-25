/*document.addEventListener("DOMContentLoaded", () => {
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
// Mică caracterizare pe baza combinațiilor de răspunsuri
/*let message = "Profilul tău: ";

// Exemplu: dacă la întrebarea despre disciplină alege "Literatură"
// și la partea zilei alege "Noaptea"
if (answers.includes("Literatură") && answers.includes("Noaptea")) {
  message += "Ești o persoană sensibilă, creativă și visătoare, atrasă de frumos și reflecție. ";
}

// Alt exemplu: Matematică + Dimineața
if (answers.includes("Matematică") && answers.includes("Dimineața")) {
  message += "Ai o minte logică și analitică, dar și foarte organizată și energică dimineața. ";
}

// Alt exemplu: Mare + Mulți oameni
if (answers.includes("Mare") && answers.includes("Mulți oameni")) {
  message += "Iubești libertatea, relaxarea și ești sociabil, plin de energie. ";
}

// Alt exemplu: Munte + Câțiva apropiați
if (answers.includes("Munte") && answers.includes("Câțiva apropiați")) {
  message += "Ai spirit aventurier, dar prețuiești intimitatea și relațiile profunde. ";
}

// Dacă nu s-a potrivit nicio combinație
if (message === "Profilul tău: ") {
  message += "Ești o persoană unică, cu preferințe variate.";
}

// Afișează rezultatul în containerul #result
const resultDiv = document.getElementById("result");
resultDiv.textContent = message;*/
document.addEventListener("DOMContentLoaded", () => {
  const options = document.querySelectorAll(".option");

  // Handle option selection
  options.forEach(option => {
    option.addEventListener("click", () => {
      const parent = option.parentElement;
      parent.querySelectorAll(".option").forEach(opt => opt.classList.remove("selected"));
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

    // Build a richer profile
    let profile = [];

    // Age
    if (answers.includes("0-10")) profile.push("Ai un suflet copilăros și plin de curiozitate.");
    if (answers.includes("20-30")) profile.push("Ești în perioada explorării și afirmării personale.");
    if (answers.includes("40+")) profile.push("Ai maturitate și experiență, dar și dorința de a te bucura de viață.");
     if (answers.includes("0-10")) profile.push("Ai un suflet copilăros și plin de curiozitate.");

    // Discipline
    if (answers.includes("Literatură")) profile.push("Esti inclinat spre reflecție.");
    if (answers.includes("Matematică")) profile.push("Ai o minte logică și analitică, orientată spre soluții clare.");
    if (answers.includes("Arte")) profile.push("Îți place să exprimi frumosul și să creezi armonie.");
    if (answers.includes("Arte")) profile.push("Îți place să exprimi frumosul și să creezi armonie.");

    // Part of day
    if (answers.includes("Dimineața")) profile.push("Ești energic, preferi începuturile proaspete.");
    if (answers.includes("Noaptea")) profile.push("Ai o latură visătoare și creativă, găsești inspirație în liniște.");
    if (answers.includes("Noaptea")) profile.push("Ai o latură visătoare și creativă, găsești inspirație în liniște.");
    if (answers.includes("Noaptea")) profile.push("Ai o latură visătoare și creativă, găsești inspirație în liniște.");

    // Vacation
    if (answers.includes("Mare")) profile.push("Îți place libertatea și relaxarea, ai inclinatii romantice.");
    if (answers.includes("Munte")) profile.push("Ai spirit aventurier și cauți provocări.");
    if (answers.includes("Orașe istorice")) profile.push("Ești curios și atras de cultură și tradiții.");
    if (answers.includes("Orașe istorice")) profile.push("Ești curios și atras de cultură și tradiții.");

    // Superpower
    if (answers.includes("Invizibilitate")) profile.push("Ai dorința de a observa lumea din umbră și de a înțelege subtilitățile.");
    if (answers.includes("Calatorie in timp")) profile.push("Ești nostalgic și curios, vrei să explorezi trecutul și viitorul.");
    if (answers.includes("Bani nelimitati")) profile.push("Îți dorești siguranță și libertate materială.");
    if (answers.includes("Calatorie in spatiu")) profile.push("Vrei sa vezi multe locuri din lume.");

    // Dinner
    if (answers.includes("Shawarma")) profile.push("Ești spontan și iubești gusturile intense.");
    if (answers.includes("Supa cu ciuperci")) profile.push("Ai un spirit calm și apreciezi confortul.");
    if (answers.includes("Frigarui")) profile.push("Îți place atmosfera de grup și distracția.");
     if (answers.includes("Sandwichuri")) profile.push("Iti place sa petreci serile bucurantude de mici placeri");

    // Childhood stories
    if (answers.includes("Hansel si Gretel")) profile.push("Ai o fire curioasă și aventuroasă.");
    if (answers.includes("Alba ca Zapada")) profile.push("Crezi în bunătate și în finaluri fericite.");
    if (answers.includes("Zorro")) profile.push("Vrei sa traiesti din plin, sa simti intensitatea momentului.");
    if (answers.includes("Zorro")) profile.push("Vrei sa traiesti din plin, sa simti intensitatea momentului.");
    


    // Special combinations
    if (answers.includes("Literatură") && answers.includes("Noaptea")) {
      profile.push("Ești un spirit artistic și visător, găsești inspirație în liniștea nopții.");
    }
    if (answers.includes("Matematică") && answers.includes("Dimineața")) {
      profile.push("Ai o minte logică și disciplinată, cu energie pentru începuturi clare.");
    }
    if (answers.includes("Mare") && answers.includes("Mulți oameni")) {
      profile.push("Îți place libertatea, dar și compania, ești sociabil și plin de energie.");
    }

    // Final message
    let message = "<h2>Rezultatul chestionarului</h2>";
    message += "<p>" + profile.join(" ") + "</p>";

    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = message;
    resultDiv.style.padding = "20px";
    resultDiv.style.background = "rgba(255,255,255,0.1)";
    resultDiv.style.borderRadius = "12px";
    resultDiv.style.fontSize = "18px";
    resultDiv.style.lineHeight = "1.6";
  });
});

  

