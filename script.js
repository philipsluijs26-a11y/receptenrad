]// 122 Complete recepten (standaard berekend op 2 personen)
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
    { titel: "Hollandse Pannenkoeken met Spek", categorie: "Vlees", tijd: 20, ingredienten: ["300g pannenkoekenmix", "600ml melk", "2 eieren", "125g ontbijtspek", "1 fles stroop"], stappen: ["Klop beslag.", "Bak spek in de pan, schenk beslag erover en bak goudbruin."] },
    { titel: "Krokante Kipburger met Ovenfriet", categorie: "Vlees", tijd: 25, ingredienten: ["2 kipburgers", "2 hamburgerbroodjes", "500g ovenfriet", "50g ijsbergsla", "1 tomaat", "2 el burgersaus"], stappen: ["Bak friet en burgers.", "Beleg broodjes met saus, sla, tomaat en burger."] },
    { titel: "Griekse Gyros met Tzatziki", categorie: "Vlees", tijd: 20, ingredienten: ["300g gyros", "200g gele rijst", "150g tzatziki", "1 komkommer", "2 tomaten", "1 rode ui"], stappen: ["Kook rijst.", "Bak gyros knapperig.", "Snijd salade en serveer met tzatziki."] },
    { titel: "Romige Risotto met Champignons", categorie: "Vega", tijd: 30, ingredienten: ["200g risottorijst", "250g champignons", "800ml bouillon", "1 ui", "60g Parmezaanse kaas", "20g roomboter"], stappen: ["Fruit ui en bak champignons.", "Voeg rijst toe en lepel geleidelijk bouillon toe tot het gaar is.", "Roer kaas en boter erdoor."] },
    { titel: "Spaghetti Carbonara", categorie: "Vlees", tijd: 18, ingredienten: ["250g spaghetti", "150g spekreepjes", "2 eieren", "75g Parmezaanse kaas", "1 teen knoflook"], stappen: ["Kook spaghetti.", "Bak spekjes met knoflook.", "Klop eieren met kaas en meng van het vuur af door de pasta."] },
    { titel: "Zalm uit de Oven met Krieltjes", categorie: "Vis", tijd: 25, ingredienten: ["2 zalmfilets", "500g krieltjes", "300g sperziebonen", "1 citroen", "2 el olijfolie"], stappen: ["Bak zalm 15 min op 180 graden.", "Bak krieltjes en kook de boontjes."] },
    { titel: "Indische Nasi Goreng met Saté", categorie: "Vlees", tijd: 20, ingredienten: ["200g rijst", "350g nasigroenten", "2 el nasikruiden", "4 satéspiesjes", "2 eieren"], stappen: ["Kook rijst.", "Wok groenten met kruiden en schep rijst erdoor.", "Verwarm saté en bak eieren."] },
    { titel: "Broodje Falafel met Knoflooksaus", categorie: "Vega", tijd: 15, ingredienten: ["4 pitabroodjes", "200g falafel", "75g sla", "1 komkommer", "3 el knoflooksaus"], stappen: ["Bak falafel rondom bruin.", "Rooster pita's en vul met sla, komkommer en falafel."] },
    { titel: "Kip Teriyaki met Broccoli", categorie: "Vlees", tijd: 20, ingredienten: ["250g kipfilet", "350g broccoli", "200g rijst", "100ml teriyakisaus", "1 el sesamzaad"], stappen: ["Kook rijst en broccoli.", "Bak kip en voeg teriyakisaus toe.", "Meng en bestrooi met sesamzaad."] },
    { titel: "Gevulde Paprika's met Couscous", categorie: "Vega", tijd: 30, ingredienten: ["3 paprika's", "150g couscous", "125g feta", "1 courgette", "200g tomatenblokjes"], stappen: ["Halveer paprika's.", "Bereid couscous met courgette en tomaat.", "Vul paprika's, top met feta en bak 20 min op 200 graden."] },
    { titel: "Snelle Tortellini met Spinazie", categorie: "Vega", tijd: 12, ingredienten: ["400g verse tortellini", "200g spinazie", "100g kruidenroomkaas", "150g cherrytomaatjes", "50g geraspte kaas"], stappen: ["Kook tortellini.", "Laat spinazie slinken met roomkaas en tomaatjes.", "Meng alles door elkaar."] },
    { titel: "Boerenstamppot Hutspot", categorie: "Vlees", tijd: 30, ingredienten: ["800g aardappelen", "500g hutspotgroenten", "1 rookworst", "50ml melk", "25g boter"], stappen: ["Kook aardappelen en groenten samen gaar.", "Stamp fijn met melk en boter en serveer met rookworst."] },
    { titel: "Vissticks met Spinazie en Aardappelen", categorie: "Vis", tijd: 20, ingredienten: ["8 vissticks", "500g aardappelen", "450g spinazie a la creme", "2 eieren"], stappen: ["Bak vissticks goudbruin.", "Kook aardappelen, verwarm spinazie en kook eieren hard."] },
    { titel: "Kapsalon Kip uit de Oven", categorie: "Vlees", tijd: 20, ingredienten: ["400g friet", "250g kipshoarma", "100g geraspte kaas", "75g ijsbergsla", "3 el knoflooksaus"], stappen: ["Bak friet en vlees.", "Schep in ovenschaal, bestrooi met kaas tot het smelt en top af met sla en saus."] },
    { titel: "Tomatensoep met Balletjes", categorie: "Vlees", tijd: 25, ingredienten: ["500ml tomatenpassata", "500ml bouillon", "150g gehaktballetjes", "1 ui", "40g vermicelli"], stappen: ["Fruit ui, voeg passata en bouillon toe.", "Voeg soepballetjes en vermicelli toe en kook 10 min."] },
    { titel: "Kipsaté met Pindasaus en Friet", categorie: "Vlees", tijd: 20, ingredienten: ["250g kipfilet", "150ml pindasaus", "500g friet", "100g atjar", "1 zak kroepoek"], stappen: ["Bak friet.", "Snijd en bak kip gaar en verwarm de pindasaus.", "Serveer samen."] },
    { titel: "Mexicaanse Quesadilla's", categorie: "Vega", tijd: 15, ingredienten: ["4 tortillawraps", "150g geraspte kaas", "200g zwarte bonen", "1 paprika", "4 el tomatensalsa"], stappen: ["Beleg wrap met bonen, paprika en kaas, dek af met tweede wrap.", "Bak in pan tot kaas smelt."] },
    { titel: "Pasta Bolognese Klassiek", categorie: "Vlees", tijd: 30, ingredienten: ["250g spaghetti", "250g gehakt", "400g tomatenblokjes", "1 ui", "1 wortel", "1 el Italiaanse kruiden"], stappen: ["Bak gehakt met ui en wortel.", "Voeg tomatenblokjes en kruiden toe.", "Kook pasta en serveer samen."] },
    { titel: "Woknoedels met Garnalen", categorie: "Vis", tijd: 15, ingredienten: ["200g noedels", "200g roze garnalen", "350g wokgroenten", "3 el sojasaus", "1 el sesamolie"], stappen: ["Kook noedels.", "Bak garnalen en groenten.", "Voeg noedels en sojasaus toe en wok kort door."] },
    { titel: "Hete Bliksem Stamppot", categorie: "Vlees", tijd: 30, ingredienten: ["750g aardappelen", "400g appels", "150g spekjes", "25g roomboter"], stappen: ["Kook aardappelen en appels samen.", "Bak spekjes.", "Stamp alles door elkaar en serveer met de spekjes."] },
    { titel: "Stamppot Boerenkool met Worst", categorie: "Vlees", tijd: 30, ingredienten: ["800g aardappelen", "400g boerenkool", "1 rookworst", "125g spekjes", "100ml jus"], stappen: ["Kook aardappelen en boerenkool.", "Bak spekjes en rookworst.", "Stamp fijn en serveer met jus."] },
    { titel: "Romige Andijviestamppot", categorie: "Vlees", tijd: 25, ingredienten: ["800g aardappelen", "400g rauwe andijvie", "150g spekjes", "1 el mosterd", "60ml melk"], stappen: ["Kook aardappelen en stamp fijn met melk.", "Roer de fijngesneden andijvie en spekjes er rauw door."] },
    { titel: "Griekse Moussaka Schotel", categorie: "Vlees", tijd: 50, ingredienten: ["2 aubergines", "300g gehakt", "400ml tomatensaus", "250ml bechamelsaus", "100g kaas"], stappen: ["Bak aubergineplakken.", "Maak gehakt-tomatensaus.", "Bouw laagjes met bechamel en kaas, bak 35 min in oven."] },
    { titel: "Spaanse Paella met Kip en Garnalen", categorie: "Vis", tijd: 35, ingredienten: ["250g paellarijst", "200g kipfilet", "150g garnalen", "700ml bouillon", "150g doperwten"], stappen: ["Bak kip, voeg rijst en bouillon toe.", "Voeg op het einde garnalen en erwtjes toe tot het drooggekookt is."] },
    { titel: "Kip Madras met Rijst", categorie: "Vlees", tijd: 25, ingredienten: ["250g kipfilet", "3 el madras currypasta", "200ml kookroom", "150g perzikstukjes", "200g rijst"], stappen: ["Kook rijst.", "Bak kip en voeg currypasta en room toe.", "Garneer met perzikstukjes."] },
    { titel: "Luxe Broodje Gezond", categorie: "Vega", tijd: 10, ingredienten: ["4 afbakbroodjes", "4 plakken kaas", "1 komkommer", "2 tomaten", "2 eieren"], stappen: ["Kook eieren hard.", "Beleg de broodjes met alle ingrediënten en een beetje saus."] },
    { titel: "Boerenomelet met Landbrood", categorie: "Vega", tijd: 15, ingredienten: ["4 eieren", "150g champignons", "1 paprika", "1 ui", "4 sneetjes brood"], stappen: ["Bak groenten.", "Klop eieren los en schenk over de groenten.", "Bak omelet en serveer met brood."] },
    { titel: "Gebakken Krieltjes met Spek en Groente", categorie: "Vlees", tijd: 25, ingredienten: ["600g krieltjes", "150g spekjes", "1 courgette", "1 paprika"], stappen: ["Bak spekjes en krieltjes in de pan.", "Voeg groenten toe en bak tot alles gaar is."] },
    { titel: "Poké Bowl met Verse Tonijn", categorie: "Vis", tijd: 20, ingredienten: ["200g sushirijst", "200g verse tonijn", "1 avocado", "50g zeewiersalade", "3 el sojasaus"], stappen: ["Kook rijst.", "Snijd tonijn en avocado.", "Bouw de bowl op en schenk sojasaus erover."] },
    { titel: "Oosterse Bami Goreng", categorie: "Vlees", tijd: 20, ingredienten: ["200g bami", "250g varkensreepjes", "350g bamigroenten", "3 el ketjap manis"], stappen: ["Kook bami.", "Bak vlees met groenten.", "Voeg ketjap en bami toe en roerbak goed."] },
    { titel: "Rode Linzensoep met Turks Brood", categorie: "Vega", tijd: 25, ingredienten: ["250g rode linzen", "1 ui", "800ml bouillon", "1 tl komijn", "1 Turks brood"], stappen: ["Fruit ui, voeg linzen en bouillon toe.", "Kook 20 min en pureer glad.", "Serveer met warm Turks brood."] },
    { titel: "Milde Kip Korma met Naanbrood", categorie: "Vlees", tijd: 25, ingredienten: ["250g kipfilet", "300ml kormasaus", "200g rijst", "2 naanbroden"], stappen: ["Bak kip gaar.", "Voeg kormasaus toe en laat pruttelen.", "Serveer met rijst en naanbrood."] },
    { titel: "Salade met Warme Geitenkaas", categorie: "Vega", tijd: 15, ingredienten: ["150g slamix", "150g geitenkaas", "2 el honing", "40g walnoten", "1 peer"], stappen: ["Verdeel sla op bord.", "Leg geitenkaas erop, besprenkel met honing, walnoten en peerstukjes."] },
    { titel: "Frisse Tonijnwrap met Komkommer", categorie: "Vis", tijd: 10, ingredienten: ["4 wraps", "1 blikje tonijn", "2 el mayonaise", "1 komkommer", "75g sla"], stappen: ["Meng tonijn met mayonaise.", "Beleg wraps met sla, komkommer en tonijn, rol strak op."] },
    { titel: "Zwarte Bonen Vega Burger", categorie: "Vega", tijd: 20, ingredienten: ["250g zwarte bonen", "50g havermout", "2 burgerbroodjes", "50g sla", "2 el burgersaus"], stappen: ["Prak bonen met havermout en kruiden tot burgers.", "Bak in pan krokant en serveer op broodje."] },
    { titel: "Italiaanse Carpaccio Maaltijdsalade", categorie: "Vlees", tijd: 15, ingredienten: ["200g runder-carpaccio", "30g pijnboompitten", "50g Parmezaanse kaas", "100g rucola", "2 el truffelmayonaise"], stappen: ["Verdeel rucola op bord.", "Leg carpaccio erop en top met pijnboompitten, kaas en truffelmayo."] },
    { titel: "Klassieke Quiche Lorraine", categorie: "Vlees", tijd: 40, ingredienten: ["5 plakjes bladerdeeg", "150g spekblokjes", "3 eieren", "150ml room", "100g geraspte kaas"], stappen: ["Bekleed vorm met bladerdeeg.", "Bak spekjes en verdeel over de bodem.", "Giet eier-roommengsel erover met kaas en bak 30 min."] },
    { titel: "Tom Kha Kai (Thaise Kippensoep)", categorie: "Vlees", tijd: 20, ingredienten: ["200g kipfilet", "400ml kokosmelk", "150g champignons", "500ml bouillon"], stappen: ["Kook bouillon met champignons.", "Voeg kipstukjes en kokosmelk toe tot de kip gaar is."] },
    { titel: "Gebakken Gnocchi met Pesto en Tomaat", categorie: "Vega", tijd: 15, ingredienten: ["500g gnocchi", "3 el groene pesto", "200g cherrytomaatjes", "50g Parmezaan"], stappen: ["Bak gnocchi goudbruin in koekenpan.", "Voeg pesto en gehalveerde tomaatjes toe en schep om."] },
    { titel: "Kip Tandoori met Gele Rijst", categorie: "Vlees", tijd: 25, ingredienten: ["250g kipfilet", "2 el tandoorikruiden", "1 paprika", "125ml zure room", "200g rijst"], stappen: ["Kook rijst.", "Bak kip met paprika en tandoorikruiden, roer zure room erdoor.", "Serveer samen."] },
    { titel: "Gepofte Aardappel met Crème Fraîche", categorie: "Vega", tijd: 40, ingredienten: ["4 grote aardappelen", "150g crème fraîche", "20g verse bieslook", "100g geraspte kaas"], stappen: ["Pof aardappelen in aluminiumfolie 40 min in oven.", "Snijd open en vul met kaas, crème fraîche en bieslook."] },
    { titel: "Zalmwrap met Kruidenroomkaas", categorie: "Vis", tijd: 10, ingredienten: ["4 wraps", "150g kruidenroomkaas", "150g gerookte zalm", "50g rucola"], stappen: ["Besmeer wraps dik met roomkaas.", "Beleg met zalm en rucola, rol strak op."] },
    { titel: "Sperziebonen Ovengerecht met Gehakt", categorie: "Vlees", tijd: 25, ingredienten: ["400g sperziebonen", "250g gehakt", "450g aardappelpuree", "100g kaas"], stappen: ["Kook sperziebonen beetgaar.", "Bak gehakt.", "Maak laagjes in ovenschaal met aardappelpuree en kaas en bak 15 min."] },
    { titel: "Spaanse Gamba's in Knoflookolie", categorie: "Vis", tijd: 12, ingredienten: ["250g gamba's", "4 tenen knoflook", "50ml olijfolie", "1 afbakstokbrood"], stappen: ["Verhit olijfolie met geperste knoflook.", "Bak gamba's erin tot ze roze zijn.", "Dip met warm stokbrood."] },
    { titel: "Krokante Kippenpootjes uit de Oven", categorie: "Vlees", tijd: 35, ingredienten: ["4 kippenpoten", "1 el paprikapoeder", "500g friet", "200g appelmoes"], stappen: ["Wrijf kippenpoten in met kruiden en olie.", "Bak 35 min in oven op 200 graden en serveer met friet en appelmoes."] },
    { titel: "Indiase Kikkererwten Curry", categorie: "Vega", tijd: 20, ingredienten: ["400g kikkererwten", "400g tomatenblokjes", "1 ui", "1 el kerriepoeder", "200g rijst"], stappen: ["Fruit ui, voeg kerrie en tomatenblokjes toe.", "Voeg kikkererwten toe en laat 15 min pruttelen, serveer met rijst."] },
    { titel: "Franse Uiensoep met Kaascroutons", categorie: "Vega", tijd: 30, ingredienten: ["4 grote uien", "800ml bouillon", "4 sneetjes stokbrood", "100g geraspte kaas"], stappen: ["Bak uien langzaam goudbruin.", "Voeg bouillon toe en kook 15 min.", "Leg stokbrood en kaas op de soep en gril kort."] },
    { titel: "Zuurkoolschotel met Ananas", categorie: "Vlees", tijd: 30, ingredienten: ["500g zuurkool", "150g spekjes", "150g ananasstukjes", "500g aardappelpuree"], stappen: ["Bak spekjes, voeg zuurkool en ananas toe.", "Dek af met aardappelpuree en bak 20 min in de oven."] },
    { titel: "Indonesische Rendang met Rijst", categorie: "Vlees", tijd: 45, ingredienten: ["300g rundvlees", "1 pakje boemboe rendang", "400ml kokosmelk", "200g rijst"], stappen: ["Bak rundvlees met boemboe.", "Voeg kokosmelk toe en laat zachtjes stoven, serveer met rijst."] },
    { titel: "Frittata met Spinazie en Feta", categorie: "Vega", tijd: 20, ingredienten: ["5 eieren", "200g spinazie", "100g feta", "1 ui"], stappen: ["Bak ui en spinazie.", "Klop eieren los en schenk erover.", "Bak op laag vuur tot ei gestold is en top met feta."] },
    { titel: "Shoarmarol met Frisse Sla", categorie: "Vlees", tijd: 15, ingredienten: ["300g shoarmavlees", "4 wraps", "100g ijsbergsla", "4 el knoflooksaus"], stappen: ["Bak shoarmavlees gaar.", "Verwarm wraps en vul met vlees, sla en knoflooksaus."] },
    { titel: "Macaroni met Ham en Kaassaus", categorie: "Vlees", tijd: 20, ingredienten: ["250g macaroni", "150g hamblokjes", "250ml kaassaus", "150g doperwten"], stappen: ["Kook macaroni en erwtjes.", "Verwarm kaassaus en voeg hamblokjes toe.", "Meng alles door elkaar."] },
    { titel: "Sissende Kip Fajita's", categorie: "Vlees", tijd: 20, ingredienten: ["250g kipfilet", "2 paprika's", "1 ui", "1 el fajitakruiden", "4 wraps"], stappen: ["Snijd kip en groenten in reepjes en bak met fajitakruiden.", "Serveer in warme wraps."] },
    { titel: "Honing-Mosterd Zalm uit de Oven", categorie: "Vis", tijd: 20, ingredienten: ["2 zalmfilets", "2 el honing", "1 el mosterd", "500g aardappelpartjes"], stappen: ["Meng honing en mosterd, smeer over zalm.", "Bak 15 min in oven op 180 graden en serveer met aardappelen."] },
    { titel: "Provençaalse Ratatouille", categorie: "Vega", tijd: 30, ingredienten: ["1 aubergine", "1 courgette", "1 paprika", "400g tomatenblokjes", "1 stokbrood"], stappen: ["Snijd groenten in blokjes en stoof met tomatenblokjes tot een rijke saus.", "Serveer met stokbrood."] },
    { titel: "Turkse Pizza met Kip en Salade", categorie: "Vlees", tijd: 15, ingredienten: ["2 Turkse pizza's", "150g gebraden kipreepjes", "100g sla", "1 komkommer", "3 el knoflooksaus"], stappen: ["Verwarm Turkse pizza in de oven.", "Beleg met kip, sla, komkommer en saus, rol op."] },
    { titel: "Spaanse Tortilla de Patatas", categorie: "Vega", tijd: 25, ingredienten: ["500g aardappelschijfjes", "5 eieren", "1 ui", "3 el olijfolie"], stappen: ["Bak aardappelschijfjes en ui zacht in olie.", "Klop eieren erover en bak tot een dikke omelet."] },
    { titel: "Kip Hawaii met Gesmolten Kaas", categorie: "Vlees", tijd: 25, ingredienten: ["2 kipfilets", "4 schijven ananas", "100g kaas", "450g friet"], stappen: ["Bak kip gaar.", "Leg ananas op kip, bedek met kaas en smelt in de oven, serveer met friet."] },
    { titel: "Spaghetti Aglio e Olio", categorie: "Vega", tijd: 12, ingredienten: ["250g spaghetti", "4 el olijfolie", "3 tenen knoflook", "1 tl chilivlokken", "50g Parmezaan"], stappen: ["Kook spaghetti.", "Bak gehakte knoflook en chili zachtjes in olijfolie.", "Meng pasta en kaas door de olie."] },
    { titel: "Lauwwarme Pastasalade Kip Pesto", categorie: "Vlees", tijd: 20, ingredienten: ["250g fusilli pasta", "3 el pesto", "200g gerookte kip", "150g cherrytomaatjes", "50g rucola"], stappen: ["Kook pasta en spoel kort af.", "Meng alles met pesto, kip, tomaatjes en rucola."] },
    { titel: "Krokante Visburger met Remoulade", categorie: "Vis", tijd: 15, ingredienten: ["2 visburgers", "2 broodjes", "3 el remouladesaus", "50g ijsbergsla"], stappen: ["Bak visburgers krokant.", "Rooster broodjes en beleg met saus, sla en burger."] },
    { titel: "Bloemkool met Kaassaus en Aardappelen", categorie: "Vega", tijd: 25, ingredienten: ["1 bloemkool", "600g aardappelen", "250ml kaassaus"], stappen: ["Kook bloemkoolroosjes en aardappelen gaar.", "Verwarm de kaassaus en schenk over de bloemkool."] },
    { titel: "Zomerse Couscous met Feta en Munt", categorie: "Vega", tijd: 15, ingredienten: ["200g couscous", "1 komkommer", "2 tomaten", "100g feta"], stappen: ["Wel couscous in kokend water.", "Meng met blokjes komkommer, tomaat en feta."] },
    { titel: "Kip Tikka Masala met Basmatirijst", categorie: "Vlees", tijd: 25, ingredienten: ["250g kipfilet", "350ml tikka masalasaus", "200g basmatirijst", "1 paprika"], stappen: ["Bak kip en paprika.", "Voeg saus toe en laat 10 min pruttelen, serveer met rijst."] },
    { titel: "Kabeljauw uit de Oven met Tomaat", categorie: "Vis", tijd: 25, ingredienten: ["2 kabeljauwfilets", "400g tomatenblokjes", "1 el Italiaanse kruiden", "500g krieltjes"], stappen: ["Leg kabeljauw in ovenschaal met tomatenblokjes en kruiden.", "Bak 20 min en serveer met krieltjes."] },
    { titel: "Biefstuk met Champignonroomsaus", categorie: "Vlees", tijd: 15, ingredienten: ["2 biefstukken", "200g champignons", "150ml kookroom", "450g friet"], stappen: ["Bak biefstuk naar wens.", "Bak champignons en voeg room toe voor saus, serveer met friet."] },
    { titel: "Sperziebonen Stamppot met Spekjes", categorie: "Vlees", tijd: 30, ingredienten: ["750g aardappelen", "400g sperziebonen", "150g spekjes", "100ml jus"], stappen: ["Kook aardappelen en sperziebonen samen gaar.", "Bak spekjes.", "Stamp grof en serveer met jus."] },
    { titel: "Oosterse Ramen Noedelsoep met Ei", categorie: "Vega", tijd: 20, ingredienten: ["200g ramen noedels", "800ml bouillon", "2 eieren", "3 bosuien", "2 el sojasaus"], stappen: ["Verwarm bouillon met sojasaus.", "Kook noedels erin gaar en serveer met een gehalveerd gekookt ei en bosui."] },
    { titel: "Vega Kipstuckjes Wrap met Honing-Mosterd", categorie: "Vega", tijd: 15, ingredienten: ["200g vega kipstuckjes", "4 wraps", "100g sla", "3 el honing-mosterdsaus"], stappen: ["Bak vega kipstuckjes goudbruin.", "Verwarm wraps en vul met sla, saus en vega kip."] },
    { titel: "Thaise Kip met Cashewnoten", categorie: "Vlees", tijd: 20, ingredienten: ["250g kipfilet", "75g cashewnoten", "1 paprika", "3 el oestersaus", "200g rijst"], stappen: ["Kook rijst.", "Bak kip en paprika.", "Voeg oestersaus en cashewnoten toe."] },
    { titel: "Kipschnitzel met Doperwten en Krieltjes", categorie: "Vlees", tijd: 15, ingredienten: ["2 kipschnitzels", "300g doperwten", "500g gebakken krieltjes"], stappen: ["Bak kipschnitzels goudbruin.", "Verwarm de doperwten en bak de krieltjes krokant."] }
];

// Laad gegevens uit localStorage
let recepten = JSON.parse(localStorage.getItem('receptenrad_pro_recepten')) || standaardRecepten;
let favorieten = JSON.parse(localStorage.getItem('receptenrad_pro_favorieten')) || [];
let boodschappen = JSON.parse(localStorage.getItem('receptenrad_pro_boodschappen')) || [];
let kookArchief = JSON.parse(localStorage.getItem('receptenrad_pro_archief')) || [];
let weekplanning = JSON.parse(localStorage.getItem('receptenrad_pro_weekplanning')) || {
    Maandag: "", Dinsdag: "", Woensdag: "", Donderdag: "", Vrijdag: "", Zaterdag: "", Zondag: ""
};

let huidigRecept = null;
let aantalPersonen = 2; // Standaard 2 personen
let draaiHoek = 0;

// Timer variabelen
let timerInterval = null;
let resterendeSeconden = 1200; // 20 min standaard

function slaOp() {
    localStorage.setItem('receptenrad_pro_recepten', JSON.stringify(recepten));
    localStorage.setItem('receptenrad_pro_favorieten', JSON.stringify(favorieten));
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
    document.getElementById('statFavs').textContent = `${favorieten.length} opgeslagen`;
    document.getElementById('statGroceries').textContent = `${openBoodschappen} te halen`;
    document.getElementById('statCooked').textContent = `${kookArchief.length} maaltijden`;
}

// Schaal hoeveelheden op basis van aantal personen (standaard = 2)
function schaalIngredient(tekst, personen) {
    const factor = personen / 2;
    return tekst.replace(/(\d+(?:[.,]\d+)?)/g, (match) => {
        const getal = parseFloat(match.replace(',', '.'));
        const nieuwGetal = Math.round((getal * factor) * 10) / 10;
        return nieuwGetal.toString().replace('.', ',');
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const usernameInput = document.getElementById('usernameInput');
    const emailInput = document.getElementById('emailInput');
    const passwordInput = document.getElementById('passwordInput');
    const rememberMeCheckbox = document.getElementById('rememberMeCheckbox');
    const loginError = document.getElementById('loginError');
    const togglePassBtn = document.getElementById('togglePassBtn');

    // Donkere modus herstellen
    if (localStorage.getItem('receptenrad_dark') === 'true') {
        document.body.classList.add('dark-mode');
    }

    let accounts = JSON.parse(localStorage.getItem('receptenrad_accounts')) || {};
    const opgeslagenSessie = localStorage.getItem('receptenrad_ingelogd_als') || sessionStorage.getItem('receptenrad_ingelogd_als');
    const laatstGebruikteEmail = localStorage.getItem('receptenrad_laatste_email');

    if (laatstGebruikteEmail && accounts[laatstGebruikteEmail]) {
        emailInput.value = laatstGebruikteEmail;
        usernameInput.value = accounts[laatstGebruikteEmail].naam;
    }

    if (opgeslagenSessie && accounts[opgeslagenSessie]) {
        startApp(accounts[opgeslagenSessie].naam);
    }

    // Oogje voor wachtwoord
    togglePassBtn.addEventListener('click', () => {
        passwordInput.type = passwordInput.type === 'password' ? 'text' : 'password';
        togglePassBtn.textContent = passwordInput.type === 'password' ? '👁️' : '🙈';
    });

    // Inloggen / Registreren
    document.getElementById('loginBtn').addEventListener('click', () => {
        const naam = usernameInput.value.trim();
        const email = emailInput.value.trim().toLowerCase();
        const password = passwordInput.value;
        const onthoudMij = rememberMeCheckbox.checked;

        loginError.style.display = 'none';

        if (!naam || !email || !password) {
            loginError.textContent = 'Vul je voornaam, e-mailadres én een wachtwoord in!';
            loginError.style.display = 'block';
            return;
        }

        if (password.length < 4) {
            loginError.textContent = 'Kies een wachtwoord van minimaal 4 tekens.';
            loginError.style.display = 'block';
            return;
        }

        if (accounts[email]) {
            if (accounts[email].wachtwoord !== password) {
                loginError.textContent = '❌ Verkeerd wachtwoord voor dit e-mailadres!';
                loginError.style.display = 'block';
                return;
            }
            accounts[email].naam = naam;
        } else {
            accounts[email] = { naam, wachtwoord: password };
        }

        localStorage.setItem('receptenrad_accounts', JSON.stringify(accounts));
        localStorage.setItem('receptenrad_laatste_email', email);

        if (onthoudMij) {
            localStorage.setItem('receptenrad_ingelogd_als', email);
        } else {
            localStorage.removeItem('receptenrad_ingelogd_als');
            sessionStorage.setItem('receptenrad_ingelogd_als', email);
        }

        startApp(accounts[email].naam);
    });

    // Uitloggen
    document.getElementById('logoutBtn').addEventListener('click', () => {
        localStorage.removeItem('receptenrad_ingelogd_als');
        sessionStorage.removeItem('receptenrad_ingelogd_als');
        location.reload();
    });

    // Donkere Modus schakelaar
    document.getElementById('darkModeBtn').addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        localStorage.setItem('receptenrad_dark', document.body.classList.contains('dark-mode'));
    });

    // Zijbalk Navigatie
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
            document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
            btn.classList.add('active');
            document.getElementById(btn.dataset.tab).classList.add('active');
        });
    });

    // Filter hulpfunctie
    function haalGefilterdeRecepten() {
        const cat = document.getElementById('categoryFilter').value;
        const maxTijd = parseInt(document.getElementById('timeFilter').value);
        return recepten.filter(r => {
            const catMatch = (cat === "Alles") || (r.categorie === cat);
            const tijdMatch = r.tijd <= maxTijd;
            return catMatch && tijdMatch;
        });
    }

    // Draai aan het Rad
    document.getElementById('spinBtn').addEventListener('click', () => {
        const lijst = haalGefilterdeRecepten();
        if (lijst.length === 0) {
            alert('Geen recepten gevonden met deze combinatie van filters!');
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

    // Geef mij 3 keuzes knop
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

    // Portie knoppen (- en +)
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

    // Favoriet opslaan
    document.getElementById('favBtn').addEventListener('click', () => {
        if (!huidigRecept) return;
        if (!favorieten.includes(huidigRecept.titel)) {
            favorieten.push(huidigRecept.titel);
            slaOp();
            renderFavorieten();
            alert(`⭐ "${huidigRecept.titel}" staat nu in je favorieten!`);
        } else {
            alert('Dit gerecht staat al in je favorieten.');
        }
    });

    // Alle ingrediënten (geschaald op personen!) op boodschappenlijst
    document.getElementById('addAllGroceriesBtn').addEventListener('click', () => {
        if (!huidigRecept) return;
        huidigRecept.ingredienten.forEach(ing => {
            const geschaald = schaalIngredient(ing, aantalPersonen);
            boodschappen.push({ tekst: `${geschaald} (${huidigRecept.titel})`, afgevinkt: false });
        });
        slaOp();
        renderBoodschappen();
        alert(`🛒 Ingrediënten voor ${aantalPersonen} personen zijn op je boodschappenlijst gezet!`);
    });

    // Loggen in Maandelijks Kookarchief
    document.getElementById('logHistoryBtn').addEventListener('click', () => {
        if (!huidigRecept) return;
        const nu = new Date();
        const maandNamen = ["Januari", "Februari", "Maart", "April", "Mei", "Juni", "Juli", "Augustus", "September", "Oktober", "November", "December"];
        const maandJaar = `${maandNamen[nu.getMonth()]} ${nu.getFullYear()}`;
        const datumTekst = `${nu.getDate()} ${maandNamen[nu.getMonth()]}`;

        kookArchief.unshift({
            titel: huidigRecept.titel,
            categorie: huidigRecept.categorie,
            maand: maandJaar,
            datum: datumTekst
        });

        slaOp();
        renderMaandArchief();
        alert(`✅ "${huidigRecept.titel}" is opgeslagen in je archief onder ${maandJaar}!`);
    });

    // Inplannen op dag
    document.getElementById('quickPlanBtn').addEventListener('click', () => {
        if (!huidigRecept) return;
        const dag = document.getElementById('quickDaySelect').value;
        weekplanning[dag] = huidigRecept.titel;
        slaOp();
        renderKalender();
        alert(`📅 Ingepland op ${dag}!`);
    });

    // Hele week automatisch vullen
    document.getElementById('autoFillWeekBtn').addEventListener('click', () => {
        Object.keys(weekplanning).forEach(dag => {
            const willekeurig = recepten[Math.floor(Math.random() * recepten.length)];
            weekplanning[dag] = willekeurig.titel;
        });
        slaOp();
        renderKalender();
    });

    // Eigen recept toevoegen
    document.getElementById('saveNewRecipeBtn').addEventListener('click', () => {
        const titel = document.getElementById('newTitle').value.trim();
        const categorie = document.getElementById('newCategory').value;
        const tijd = parseInt(document.getElementById('newTime').value) || 25;
        const ingText = document.getElementById('newIngredients').value.trim();
        const stepText = document.getElementById('newSteps').value.trim();

        if (!titel || !ingText || !stepText) {
            alert('Vul alle velden in om je recept op te slaan.');
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
        alert(`🎉 "${titel}" is toegevoegd aan het ReceptenRad!`);
    });

    // Zoeken en filteren in receptenboek
    document.getElementById('searchInput').addEventListener('input', renderAlleRecepten);
    document.getElementById('bookCategoryFilter').addEventListener('change', renderAlleRecepten);

    // Boodschappen toevoegen & wissen
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

    // Deel boodschappenlijst via WhatsApp
    document.getElementById('shareWhatsappBtn').addEventListener('click', () => {
        const openItems = boodschappen.filter(b => !b.afgevinkt).map(b => `- ${b.tekst}`).join('\n');
        if (!openItems) {
            alert('Je boodschappenlijst is nog leeg!');
            return;
        }
        const tekst = encodeURIComponent(`🛒 *Mijn ReceptenRad Boodschappenlijst:*\n\n${openItems}`);
        window.open(`https://wa.me/?text=${tekst}`, '_blank');
    });

    // Archief wissen
    document.getElementById('clearHistoryBtn').addEventListener('click', () => {
        kookArchief = [];
        slaOp();
        renderMaandArchief();
    });

    // Digitale Kookwekker met Web Audio API piepje
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
                alert('⏰ TIJD IS OM! Je gerecht is klaar!');
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

    // Bereken hoe laat je moet beginnen
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
        box.textContent = `🔔 Ga om ${sh}:${sm} uur de keuken in om precies om ${eatTime} uur aan tafel te zitten!`;
    });
});

function startApp(naam) {
    document.getElementById('loginSection').style.display = 'none';
    document.getElementById('appSection').style.display = 'grid';
    document.getElementById('welcomeUser').textContent = `Chef ${naam}`;
    updateStatistieken();
    renderFavorieten();
    renderAlleRecepten();
    renderMaandArchief();
    renderBoodschappen();
    renderKalender();
}

function toonReceptOpScherm(recept) {
    huidigRecept = recept;
    document.getElementById('emptyRecipeState').style.display = 'none';
    document.getElementById('activeRecipeCard').style.display = 'block';

    document.getElementById('recTitle').textContent = recept.titel;
    document.getElementById('recCategory').textContent = recept.categorie;
    document.getElementById('recTime').textContent = `⏱️ ${recept.tijd} min`;
    document.getElementById('prepTimeInput').value = recept.tijd;

    // Zet ook direct de digitale kookwekker klaar op de tijd van dit recept
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

function renderFavorieten() {
    const ul = document.getElementById('favoritesList');
    ul.innerHTML = "";
    if (favorieten.length === 0) {
        ul.innerHTML = "<li>Nog geen favorieten opgeslagen.</li>";
        return;
    }
    favorieten.forEach((fav, idx) => {
        const li = document.createElement('li');
        li.innerHTML = `
            <span style="cursor:pointer;" onclick="openReceptOpNaam('${fav.replace(/'/g, "\\'")}')">⭐ ${fav}</span>
            <button onclick="verwijderFav(${idx})" style="border:none;background:none;cursor:pointer;">❌</button>
        `;
        ul.appendChild(li);
    });
}

window.openReceptOpNaam = function(titel) {
    const gevonden = recepten.find(r => r.titel === titel);
    if (gevonden) {
        toonReceptOpScherm(gevonden);
        document.querySelector('[data-tab="tab-rad"]').click();
    }
};

window.verwijderFav = function(idx) {
    favorieten.splice(idx, 1);
    slaOp();
    renderFavorieten();
};

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
        container.innerHTML = "<p>Je hebt nog geen gekookte maaltijden gearchiveerd. Klik bij een recept op <strong>'✅ Vandaag Gekookt'</strong> om je maandoverzicht op te bouwen!</p>";
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
            <div style="cursor:pointer;" onclick="openReceptOpNaam('${gerecht.replace(/'/g, "\\'")}')">
                <strong>${dag}:</strong> ${gerecht}
            </div>
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