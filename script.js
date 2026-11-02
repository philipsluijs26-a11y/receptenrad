const standaardRecepten = [
    { titel: "Romige Pasta Pesto met Kip", categorie: "Vlees", tijd: 20, ingredienten: ["250g penne pasta", "200g kipfilet", "100ml kookroom", "3 el groene pesto", "150g cherrytomaatjes", "30g pijnboompitten"], stappen: ["Kook de pasta volgens de verpakking.", "Snijd de kip in blokjes en bak goudbruin.", "Roer de pesto en kookroom door de kip.", "Halveer de tomaatjes en meng alles met de pasta."] },
    { titel: "Gezonde Groene Curry met Tofu", categorie: "Vega", tijd: 25, ingredienten: ["200g rijst", "250g tofu", "400ml kokosmelk", "2 el groene currypasta", "200g broccoli", "1 rode paprika"], stappen: ["Kook de rijst gaar.", "Snijd de tofu in blokjes en bak krokant.", "Voeg currypasta, kokosmelk en groenten toe.", "Laat 10 minuten pruttelen en serveer."] },
    { titel: "Klassieke Lasagne Bolognese", categorie: "Vlees", tijd: 45, ingredienten: ["250g rundergehakt", "9 lasagnebladen", "500ml pastasaus", "1 courgette", "1 ui", "125g geraspte kaas"], stappen: ["Verwarm oven op 200 graden.", "Bak gehakt met ui en courgette.", "Voeg saus toe.", "Bouw laagjes in ovenschaal en bak 30 min."] },
    { titel: "Ovenschotel met Witlof en Ham", categorie: "Vlees", tijd: 35, ingredienten: ["4 stronken witlof", "150g achterham", "500g aardappelschijfjes", "125g kaas", "100ml kookroom"], stappen: ["Kook witlof 8 min voor.", "Wikkel in ham.", "Leg aardappelen onderin, witlof erop, giet room en kaas erover en bak 20 min op 200 graden."] },
    { titel: "Frisse Poké Bowl met Zalm", categorie: "Vis", tijd: 20, ingredienten: ["200g sushirijst", "200g verse zalm", "1 avocado", "100g edamame", "1 komkommer", "3 el sojasaus"], stappen: ["Kook sushirijst.", "Snijd zalm en groenten.", "Verdeel alles over kommen en besprenkel met sojasaus."] },
    { titel: "Krokante Panini Mozzarella Pesto", categorie: "Vega", tijd: 12, ingredienten: ["2 ciabatta broodjes", "1 bol mozzarella", "2 tomaten", "2 el pesto", "40g rucola"], stappen: ["Snijd broodjes open en besmeer met pesto.", "Beleg met mozzarella, tomaat en rucola.", "Grill 5 minuten onder een tosti-ijzer."] },
    { titel: "Thaise Noedels met Pindasaus", categorie: "Vega", tijd: 15, ingredienten: ["200g eiernoedels", "350g roerbakgroenten", "4 el pindakaas", "2 el ketjap", "100ml warm water"], stappen: ["Bereid noedels.", "Wok groenten.", "Meng pindakaas, ketjap en water tot saus en roer door de noedels."] },
    { titel: "Mexicaanse Burrito's met Gehakt", categorie: "Vlees", tijd: 20, ingredienten: ["4 wraps", "250g gehakt", "1 blik kidneybonen", "150g maïs", "1 el tacokruiden", "100g zure room"], stappen: ["Rul gehakt met kruiden.", "Voeg bonen en maïs toe.", "Vul wraps en rol op."] },
    { titel: "Zoete Aardappel & Wortel Soep", categorie: "Vega", tijd: 25, ingredienten: ["450g zoete aardappel", "250g wortel", "1 ui", "800ml bouillon", "1 tl kerriepoeder"], stappen: ["Snijd aardappel en wortel.", "Fruit ui met kerrie en kook met groenten en bouillon in 15 min gaar.", "Pureer glad."] },
    { titel: "Hollandse Pannenkoeken met Spek", categorie: "Vlees", tijd: 20, ingredienten: ["300g pannenkoekenmix", "600ml melk", "2 eieren", "125g ontbijtspek", "1 fles stroop"], stappen: ["Klop beslag.", "Bak spek in de pan, schenk beslag erover en bak goudbruin."] }
];

let recepten = JSON.parse(localStorage.getItem('receptenrad_pro_recepten')) || standaardRecepten;
let boodschappen = JSON.parse(localStorage.getItem('receptenrad_pro_boodschappen')) || [];
let kookArchief = JSON.parse(localStorage.getItem('receptenrad_pro_archief')) || [];
let weekplanning = JSON.parse(localStorage.getItem('receptenrad_pro_weekplanning')) || {
    Maandag: "", Dinsdag: "", Woensdag: "", Donderdag: "", Vrijdag: "", Zaterdag: "", Zondag: ""
};

let huidigRecept = null;
let aantalPersonen = 2;
let draaiHoek = 0;
let timerInterval = null;
let resterendeSeconden = 1200;

function slaOp() {
    localStorage.setItem('receptenrad_pro_recepten', JSON.stringify(recepten));
    localStorage.setItem('receptenrad_pro_boodschappen', JSON.stringify(boodschappen));
    localStorage.setItem('receptenrad_pro_archief', JSON.stringify(kookArchief));
    localStorage.setItem('receptenrad_pro_weekplanning', JSON.stringify(weekplanning));
    updateStatistieken();
}

function updateStatistieken() {
    const openBoodschappen = boodschappen.filter(b => !b.afgevinkt).length;
    document.getElementById('recipeCount').textContent = recepten.length;
    document.getElementById('groceryCount').textContent = openBoodschappen;
    document.getElementById('historyCount').textContent = kookArchief.length;

    document.getElementById('statTotalRecipes').textContent = `${recepten.length} recepten`;
    document.getElementById('statGroceries').textContent = `${openBoodschappen} te halen`;
    document.getElementById('statCooked').textContent = `${kookArchief.length} maaltijden`;
}

function schaalIngredient(tekst, personen) {
    const factor = personen / 2;
    return tekst.replace(/(\d+(?:[.,]\d+)?)/g, (match) => {
        const getal = parseFloat(match.replace(',', '.'));
        const nieuwGetal = Math.round((getal * factor) * 10) / 10;
        return nieuwGetal.toString().replace('.', ',');
    });
}

document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('receptenrad_dark') === 'true') {
        document.body.classList.add('dark-mode');
    }

    // Direct app starten (geen inlogscherm nodig)
    updateStatistieken();
    renderAlleRecepten();
    renderMaandArchief();
    renderBoodschappen();
    renderKalender();

    // Donkere Modus
    document.getElementById('darkModeBtn').addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        localStorage.setItem('receptenrad_dark', document.body.classList.contains('dark-mode'));
    });

    // Navigatie
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
            document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
            btn.classList.add('active');
            document.getElementById(btn.dataset.tab).classList.add('active');
        });
    });

    function haalGefilterdeRecepten() {
        const cat = document.getElementById('categoryFilter').value;
        const maxTijd = parseInt(document.getElementById('timeFilter').value);
        return recepten.filter(r => {
            const catMatch = (cat === "Alles") || (r.categorie === cat);
            const tijdMatch = r.tijd <= maxTijd;
            return catMatch && tijdMatch;
        });
    }

    // Rad draaien
    document.getElementById('spinBtn').addEventListener('click', () => {
        const lijst = haalGefilterdeRecepten();
        if (lijst.length === 0) {
            alert('Geen recepten gevonden met deze filters!');
            return;
        }

        document.getElementById('threeChoicesBox').style.display = 'none';
        draaiHoek += 1080 + Math.floor(Math.random() * 360);
        document.getElementById('wheel').style.transform = `rotate(${draaiHoek}deg)`;

        setTimeout(() => {
            const gekozen = lijst[Math.floor(Math.random() * lijst.length)];
            toonReceptOpScherm(gekozen);
        }, 850);
    });

    document.getElementById('surpriseThreeBtn').addEventListener('click', () => {
        const lijst = haalGefilterdeRecepten();
        if (lijst.length === 0) return;

        const box = document.getElementById('threeChoicesBox');
        box.innerHTML = "";
        box.style.display = 'flex';

        const geschud = [...lijst].sort(() => 0.5 - Math.random()).slice(0, 3);
        geschud.forEach(rec => {
            const btn = document.createElement('button');
            btn.className = 'mini-card';
            btn.style.textAlign = 'left';
            btn.innerHTML = `<strong>👉 ${rec.titel}</strong><br><span>${rec.categorie} • ⏱️ ${rec.tijd} min</span>`;
            btn.onclick = () => toonReceptOpScherm(rec);
            box.appendChild(btn);
        });
    });

    document.getElementById('portionMinus').addEventListener('click', () => {
        if (aantalPersonen > 1) {
            aantalPersonen--;
            document.getElementById('portionCount').textContent = aantalPersonen;
            if (huidigRecept) toonReceptOpScherm(huidigRecept);
        }
    });

    document.getElementById('portionPlus').addEventListener('click', () => {
        if (aantalPersonen < 20) {
            aantalPersonen++;
            document.getElementById('portionCount').textContent = aantalPersonen;
            if (huidigRecept) toonReceptOpScherm(huidigRecept);
        }
    });

    document.getElementById('addAllGroceriesBtn').addEventListener('click', () => {
        if (!huidigRecept) return;
        huidigRecept.ingredienten.forEach(ing => {
            const geschaald = schaalIngredient(ing, aantalPersonen);
            boodschappen.push({ tekst: `${geschaald} (${huidigRecept.titel})`, afgevinkt: false });
        });
        slaOp();
        renderBoodschappen();
        alert(`🛒 Ingrediënten voor ${aantalPersonen} personen op boodschappenlijst gezet!`);
    });

    document.getElementById('logHistoryBtn').addEventListener('click', () => {
        if (!huidigRecept) return;
        const nu = new Date();
        const maandNamen = ["Januari", "Februari", "Maart", "April", "Mei", "Juni", "Juli", "Augustus", "September", "Oktober", "November", "December"];
        const maandJaar = `${maandNamen[nu.getMonth()]} ${nu.getFullYear()}`;
        const datumTekst = `${nu.getDate()} ${maandNamen[nu.getMonth()]}`;

        kookArchief.unshift({ titel: huidigRecept.titel, categorie: huidigRecept.categorie, maand: maandJaar, datum: datumTekst });
        slaOp();
        renderMaandArchief();
        alert(`✅ "${huidigRecept.titel}" is opgeslagen in je archief!`);
    });

    document.getElementById('quickPlanBtn').addEventListener('click', () => {
        if (!huidigRecept) return;
        const dag = document.getElementById('quickDaySelect').value;
        weekplanning[dag] = huidigRecept.titel;
        slaOp();
        renderKalender();
        alert(`📅 Ingepland op ${dag}!`);
    });

    document.getElementById('autoFillWeekBtn').addEventListener('click', () => {
        Object.keys(weekplanning).forEach(dag => {
            const willekeurig = recepten[Math.floor(Math.random() * recepten.length)];
            weekplanning[dag] = willekeurig.titel;
        });
        slaOp();
        renderKalender();
    });

    document.getElementById('saveNewRecipeBtn').addEventListener('click', () => {
        const titel = document.getElementById('newTitle').value.trim();
        const categorie = document.getElementById('newCategory').value;
        const tijd = parseInt(document.getElementById('newTime').value) || 25;
        const ingText = document.getElementById('newIngredients').value.trim();
        const stepText = document.getElementById('newSteps').value.trim();

        if (!titel || !ingText || !stepText) {
            alert('Vul alle velden in.');
            return;
        }

        recepten.unshift({
            titel,
            categorie,
            tijd,
            ingredienten: ingText.split(',').map(s => s.trim()).filter(Boolean),
            stappen: stepText.split('.').map(s => s.trim()).filter(Boolean)
        });

        slaOp();
        renderAlleRecepten();
        document.getElementById('newTitle').value = "";
        document.getElementById('newIngredients').value = "";
        document.getElementById('newSteps').value = "";
        alert(`🎉 "${titel}" is toegevoegd!`);
    });

    document.getElementById('searchInput').addEventListener('input', renderAlleRecepten);
    document.getElementById('bookCategoryFilter').addEventListener('change', renderAlleRecepten);

    document.getElementById('addCustomGroceryBtn').addEventListener('click', () => {
        const input = document.getElementById('customGroceryInput');
        if (input.value.trim()) {
            boodschappen.push({ tekst: input.value.trim(), afgevinkt: false });
            input.value = "";
            slaOp();
            renderBoodschappen();
        }
    });

    document.getElementById('clearGroceriesBtn').addEventListener('click', () => {
        boodschappen = [];
        slaOp();
        renderBoodschappen();
    });

    document.getElementById('shareWhatsappBtn').addEventListener('click', () => {
        const openItems = boodschappen.filter(b => !b.afgevinkt).map(b => `- ${b.tekst}`).join('\n');
        if (!openItems) {
            alert('Lijst is leeg!');
            return;
        }
        const tekst = encodeURIComponent(`🛒 *Mijn ReceptenRad Boodschappenlijst:*\n\n${openItems}`);
        window.open(`https://wa.me/?text=${tekst}`, '_blank');
    });

    document.getElementById('clearHistoryBtn').addEventListener('click', () => {
        kookArchief = [];
        slaOp();
        renderMaandArchief();
    });

    function updateKlokWeergave() {
        const m = String(Math.floor(resterendeSeconden / 60)).padStart(2, '0');
        const s = String(resterendeSeconden % 60).padStart(2, '0');
        document.getElementById('liveTimerDisplay').textContent = `${m}:${s}`;
    }

    function speelAlarmGeluid() {
        try {
            const ctx = new (window.AudioContext || window.webkitAudioContext)();
            const osc = ctx.createOscillator();
            osc.type = 'sine';
            osc.frequency.setValueAtTime(880, ctx.currentTime);
            osc.connect(ctx.destination);
            osc.start();
            osc.stop(ctx.currentTime + 0.8);
        } catch (e) {}
    }

    document.getElementById('timerStartBtn').addEventListener('click', () => {
        if (timerInterval) return;
        timerInterval = setInterval(() => {
            if (resterendeSeconden > 0) {
                resterendeSeconden--;
                updateKlokWeergave();
            } else {
                clearInterval(timerInterval);
                timerInterval = null;
                speelAlarmGeluid();
                alert('⏰ TIJD IS OM!');
            }
        }, 1000);
    });

    document.getElementById('timerPauseBtn').addEventListener('click', () => {
        clearInterval(timerInterval);
        timerInterval = null;
    });

    document.getElementById('timerResetBtn').addEventListener('click', () => {
        clearInterval(timerInterval);
        timerInterval = null;
        const min = parseInt(document.getElementById('prepTimeInput').value) || 20;
        resterendeSeconden = min * 60;
        updateKlokWeergave();
    });

    document.getElementById('calcReminderBtn').addEventListener('click', () => {
        const eatTime = document.getElementById('eatTimeInput').value;
        const prep = parseInt(document.getElementById('prepTimeInput').value) || 25;
        if (!eatTime) return;

        const [h, m] = eatTime.split(':').map(Number);
        const d = new Date();
        d.setHours(h, m - prep, 0, 0);

        const sh = String(d.getHours()).padStart(2, '0');
        const sm = String(d.getMinutes()).padStart(2, '0');

        const box = document.getElementById('reminderResult');
        box.style.display = 'block';
        box.textContent = `🔔 Start om ${sh}:${sm} uur in de keuken!`;
    });
});

function toonReceptOpScherm(recept) {
    huidigRecept = recept;
    document.getElementById('emptyRecipeState').style.display = 'none';
    document.getElementById('activeRecipeCard').style.display = 'block';

    document.getElementById('recTitle').textContent = recept.titel;
    document.getElementById('recCategory').textContent = recept.categorie;
    document.getElementById('recTime').textContent = `⏱️ ${recept.tijd} min`;
    document.getElementById('prepTimeInput').value = recept.tijd;

    if (!timerInterval) {
        resterendeSeconden = recept.tijd * 60;
        document.getElementById('liveTimerDisplay').textContent = `${String(recept.tijd).padStart(2, '0')}:00`;
    }

    const ingUl = document.getElementById('recIngredients');
    ingUl.innerHTML = "";
    recept.ingredienten.forEach(i => {
        const li = document.createElement('li');
        li.textContent = schaalIngredient(i, aantalPersonen);
        ingUl.appendChild(li);
    });

    const stepOl = document.getElementById('recSteps');
    stepOl.innerHTML = "";
    recept.stappen.forEach(s => {
        const li = document.createElement('li');
        li.textContent = s;
        stepOl.appendChild(li);
    });
}

function renderAlleRecepten() {
    const container = document.getElementById('allRecipesContainer');
    const zoekterm = (document.getElementById('searchInput').value || "").toLowerCase();
    const catFilter = document.getElementById('bookCategoryFilter').value;
    container.innerHTML = "";

    recepten.filter(r => {
        const matchTekst = r.titel.toLowerCase().includes(zoekterm) || r.ingredienten.some(i => i.toLowerCase().includes(zoekterm));
        const matchCat = (catFilter === "Alles") || (r.categorie === catFilter);
        return matchTekst && matchCat;
    }).forEach(r => {
        const div = document.createElement('div');
        div.className = 'mini-card';
        div.innerHTML = `<h4>${r.titel}</h4><span>${r.categorie} • ⏱️ ${r.tijd} min</span>`;
        div.addEventListener('click', () => {
            toonReceptOpScherm(r);
            document.querySelector('[data-tab="tab-rad"]').click();
        });
        container.appendChild(div);
    });
}

function renderMaandArchief() {
    const container = document.getElementById('monthlyArchiveContainer');
    container.innerHTML = "";

    if (kookArchief.length === 0) {
        container.innerHTML = "<p>Nog geen gekookte maaltijden. Klik bij een recept op <strong>'✅ Vandaag Gekookt'</strong>!</p>";
        return;
    }

    const perMaand = {};
    kookArchief.forEach(item => {
        if (!perMaand[item.maand]) perMaand[item.maand] = [];
        perMaand[item.maand].push(item);
    });

    Object.keys(perMaand).forEach(maand => {
        const block = document.createElement('div');
        block.className = 'month-block';
        const itemsHtml = perMaand[maand].map(i => `<li><span>🍴 <strong>${i.titel}</strong> (${i.categorie})</span> <small>${i.datum}</small></li>`).join('');
        block.innerHTML = `<h4>📅 ${maand} (${perMaand[maand].length}x gekookt)</h4><ul class="styled-list">${itemsHtml}</ul>`;
        container.appendChild(block);
    });
}

function renderBoodschappen() {
    const ul = document.getElementById('groceriesList');
    ul.innerHTML = "";
    if (boodschappen.length === 0) {
        ul.innerHTML = "<li>Je boodschappenlijst is leeg.</li>";
        return;
    }
    boodschappen.forEach((item, index) => {
        const li = document.createElement('li');
        if (item.afgevinkt) li.classList.add('checked');
        li.innerHTML = `
            <label style="display:flex;align-items:center;gap:12px;cursor:pointer;width:100%;">
                <input type="checkbox" style="width:18px;height:18px;" ${item.afgevinkt ? 'checked' : ''} onchange="wisselBoodschap(${index})">
                <span>${item.tekst}</span>
            </label>
        `;
        ul.appendChild(li);
    });
}

window.wisselBoodschap = function(index) {
    boodschappen[index].afgevinkt = !boodschappen[index].afgevinkt;
    slaOp();
    renderBoodschappen();
};

function renderKalender() {
    const grid = document.getElementById('calendarGrid');
    grid.innerHTML = "";
    Object.keys(weekplanning).forEach(dag => {
        const gerecht = weekplanning[dag] || "Nog niets gepland";
        const row = document.createElement('div');
        row.className = 'day-row';
        row.innerHTML = `
            <div><strong>${dag}:</strong> ${gerecht}</div>
            ${weekplanning[dag] ? `<button onclick="wisDag('${dag}')" style="border:none;background:none;cursor:pointer;">🗑️</button>` : ''}
        `;
        grid.appendChild(row);
    });
}

window.wisDag = function(dag) {
    weekplanning[dag] = "";
    slaOp();
    renderKalender();
};