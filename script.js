
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
    if (answers.includes("Mare")) profile.push("Ai nevoie de libertate si miscare cuntinua. Te atrag orizonturile deschise, ritmul hipnotic al valurilor si detasarea totala.");
    if (answers.includes("Orașe istorice")) profile.push("Fascinata de povesti, arhitectura si secretele trecutului, iti place sa te plimbi pe strazi pietruite unde fiecare cladire are ceva de povestit.");
    if (answers.includes("Reliefuri impresionante")) profile.push("Ai sete vie de spectaculos si o atractie nativa fata de maretia bruta a planetei.");




    // Superpower
    if (answers.includes("Invizibilitate")) profile.push("Iti place sa descoperii lumea fara piedici, de a intelege adevaruri ascunse si de a te bucura de o libertate totala.");
    if (answers.includes("Calatorie in timp")) profile.push("Te atrage posibilitatea de a rescrie regrete, de a retrai momente de epoca, pentru tine prezentul e doar o mica parte dintr o poveste mult mai mare.");
    if (answers.includes("Calatorie in spatiu")) profile.push("Setea de necunoscut te indeamna catre orizonturi noi, fara sa cunosti limitele.");
    if (answers.includes("Bani nelimitati")) profile.push("Ai o minte pragmatica si un puternic simt al controlului. Ai vrea siguranta pentru cei dragi si sa controlezi lumea dupa propriile reguli.");
   

    // Dinner
    if (answers.includes("Shawarma")) profile.push("Iti place ritmul alert, esti spontana, adaptabila. ");
    if (answers.includes("Supa cu ciuperci")) profile.push("Pretuiesti momentele de tihna, ai nevoie de timp pentru a te reincarca, si o inclinatie naturala spre confort, echilibru si introspectie.");
    if (answers.includes("Sandwichuri")) profile.push("Nu iti place sa complici lucrurile inutil, pui mare pret pe libertatea de miscare si preferi simplitatea si eficienta.");
     if (answers.includes("Saleamca")) profile.push("Nu te multumesti cu jumatati de masura, iubesti intensitatea. Aduci impreuna elemente complet diferite pentru a crea ceva memorabil.");

    // Childhood stories
    if (answers.includes("Zorro")) profile.push("Lupti pentru valorile in care crezi, ai atractie pentru dreptate, mister si eleganta in actiunile tale.");
    if (answers.includes("Cu Fat Frumos")) profile.push("Te defineste o rezistenta interioara rara , invaluita in parfumul mitic al codrilor seculari , unde lumina si perseverenta triumfa intotdeauana.");
    if (answers.includes("Craiasa zapezii")) profile.push("Emani o frumusete austera, clara si de o rara finete, combinata cu o loialitate  capabila sa topeasca cele mai reci distante.");
    if (answers.includes("Alba ca Zapada")) profile.push("Personalitatea ta respira atmosfera luminoasa a unei poieni linistite de padure, plina de armonie si speranta blanda ca bunatatea invinge mereu. Dezvalui o sensibilitate calda, o inocenta ocrotitoare si o mare putere de empatie.");
    


    // Special combinations
    if (answers.includes("La 4 dimineata te duci in mare si inoti pana obosesti.") && answers.includes("Noaptea") && answers.includes("Invizibilitate")) {
      profile.push(" Iti place neimblazirea, darzenia, cutezanta fara de margini?");
    }
    if (answers.includes("Mare") && answers.includes("Noaptea")) {
      profile.push("Danuta?");
    }
    if (answers.includes("Dimineata") && answers.includes("Casa de la malul marii")) {
      profile.push("Mama?");
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

  

