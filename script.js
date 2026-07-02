
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

    // Shop
    if (answers.includes("Ulei de masline, smochine, struguri, cacao, miere, peste, faina.")) profile.push("Penumbra sacra si mistica a Levantului. Abundenta.");
    if (answers.includes("Varza, spanac, oua, piept de pui, branza.")) profile.push("Claritate, vitalitate. Dimineata la tara.");
    if (answers.includes("Apa minerala, lime, frunze de ceai, ciocolata neagra.")) profile.push("Contemplare, purificare, detasare, creatie.");
     if (answers.includes("Bomboane, Cola, inghetate, rosii, salam, cascaval.")) profile.push("Satisfactie, nostalgie, libertate.");

    // Activity
    if (answers.includes("Desenezi impreuna cu familia.")) profile.push("Ai un suflet cald si gasesti frumusetea in momentele simple, pline de armonie.");
    if (answers.includes("Citesti o carte.")) profile.push("Ai un spirit curios si reflexiv. Lumea ta interioara este bogata si fascinanta.");
    if (answers.includes("Planifici urmatoarea zi.")) profile.push("Esti organizata, iti pretuiesti timpul si pasesti cu incredere in viitor.");
    if (answers.includes("Joci razboi naval/fete baieti.")) profile.push("Esti o fire dinamica si competitiva, care pastreaza viu spiritul jocului si bucuria pura a copilariei.");
    if (answers.includes("Scrii ganduri/povestiri.")) profile.push("Esti un creator sensibil si profund, un observator atent al vietii care dai o forma magica propriilor tale trairi.");
    
    // Action
    if (answers.includes("La 4 dimineata te duci in mare si inoti pana obosesti.")) profile.push("Esti un spirit liber si curajos care cauta absolutul si nu se teme sa se piarda in imensitate pentru a gasi linistea interioara.");
    if (answers.includes("Seara alergi 5 km.")) profile.push("Esti o persoana hotarata si disciplinata care stie sa transforme efortul in eliberare.");
    if (answers.includes("Calaresti o zi intreaga in prerie.")) profile.push("Esti setos de aventura si autenticitate, un suflet salbatic care isi gaseste fericirea in gustul libertatii depline.");
    if (answers.includes("Cumperi un carnet si inveti pana il termini.")) profile.push("Ai o minte flamada de cunoastere si sclipitoare.");
    if (answers.includes("In fiecare zi faci 100 flotari, genoflexiuni...")) profile.push("Un caracter puternic care crede ca marile victorii ale vietii se construiesc discret , zi de zi.");

    // Part of day 
    if (answers.includes("Dimineața")) profile.push("Optimist, plin de energie, un iubitor al noilor inceputuri.");
    if (answers.includes("Amiaza")) profile.push("Un om al actiunii, pragmatic si solar. ");
    if (answers.includes("Seara")) profile.push("Pretuiesti armonia si tihna. Pentru tine adevarata magie incepe cand ritmul lumii incetineste.");
    if (answers.includes("Noaptea")) profile.push("Gasesti adevarata libertate si inspiratie in linistea deplina, ai un suflet profund, misterios si independent.");

    // Book
    if (answers.includes("Golful francezului")) profile.push("Tanjesti dupa o evadare din tiparele rigide ale cotidianului. Rebela, libera si rafinata, te atrage misterul, noptile pline de secrete si pasiunea salbatica.");
    if (answers.includes("Quo Vadis")) profile.push("Esti nobila, puternica si profund morala, atrasa de marile adevaruri ale istoriei. O persoana capabila de sacrificiu si o intensitate interioara rara, ghidata de o credinta de neclintit in dragoste si dreptate.");
    if (answers.includes("Tom Sawyer")) profile.push("Pastrezi in tine acea atmosfera calda si luminoasa a copilariei, libertatea zilelor lungi de vara, suflet vesnic tanar, plin de viata si de o curiozitate molipsitoare.");
    if (answers.includes("Stapanul inelelor")) profile.push("Personalitatea ta reflecta spiritul de loialitate, curajul in fata intunericului si frumusetea aspra, dar plina de speranta si maretie a naturii.");
     if (answers.includes("Casa de la malul marii")) profile.push("Esti o persoana profund nostalgica si romantica. La fel ca atmosfera cartii, emani acea nostalgie blanda a verilor din trecut si parfumul sarat al marii care vindeca.");


     // Vacation
    if (answers.includes("Munte")) profile.push("Ai nevoie de cer si poteci linistite pentru a-ti limpezi gandurile.");
    if (answers.includes("Mare")) profile.push("ai nevoie de libertate si miscare cuntinua. Te atrag orizonturile deschise, ritmul hipnotic al valurilor si detasarea totala.");
    if (answers.includes("Orașe istorice")) profile.push("Fascinata de povesti, arhitectura si secretele trecutului, iti place sa te plimbi pe strazi pietruite unde fiecare cladire are ceva de povestit.");
    if (answers.includes("Reliefuri impresionante")) profile.push("Ai sete vie de spectaculos si o atractie nativa fata de maretia bruta a planetei.");




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

  

