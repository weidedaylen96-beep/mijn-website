# REVE — The Capsule Edit

[Bekijk REVE](https://reve.rosy-goat-9431.chatgpt.site/shop).

De ontwerpcollectie bevat 146 originele REVE-concepten en 24 complete stylingcombinaties. De nieuwste drop bevat 100 aanvullende ontwerpen plus vier Summer Shorts, elk met een apart AI-productbeeld. Tien kleurcollecties combineren shirts, hoodies, jassen, broeken, knitwear, petten, sneakers, tassen en accessoires. Vier extra zomersetjes combineren een shirt, korte broek, sneakers en een petje. Een kleurfilter, zoeken over de hele collectie en 24 producten per pagina houden de catalogus overzichtelijk. De nieuwe stylingcombinaties openen de losse producten met maatkeuze. Productbeelden en campagnebeelden zijn AI-gegenereerd. De 104 nieuwe websitebeelden worden zonder pixelverlies als WebP geleverd; originele PNG-bestanden zijn afzonderlijk bewaard. Prijzen, materialen en pasvormen worden voor de verkoop bevestigd; afrekenen staat nog uit.

## Beheer en voorraad

In `/admin.html` kan uitsluitend het gekoppelde eigenaarsaccount producten, foto's en echte voorraadaantallen opslaan. De server controleert iedere wijziging. Foto's, producten en handmatige voorraadstanden worden in Cloudflare R2 opgeslagen. Een positief voorraadgetal verschijnt als “Nog 18 op voorraad”, nul als “Uitverkocht” en een leeg getal als onbekend. Aantallen gelden voor alle maten samen; een winkelmand reserveert of verlaagt geen voorraad.

## Reviews

In `/reviews.html` kunnen bezoekers bestaande reviews lezen en na aanmelden via ChatGPT hun eigen review plaatsen, bijwerken of intrekken. Er is één review per account. Het formulier vraagt een zelfgekozen openbare naam, 1–5 sterren, tekst en toestemming om die gegevens te publiceren. Reviews worden online opgeslagen in Cloudflare D1 en direct getoond. De openbare lijst deelt geen account-ID of e-mailadres. Het aantal en gemiddelde worden uit de zichtbare reviews berekend; er zijn geen voorbeeldreviews ingevoegd.

De eigenaar kan spam verbergen of opnieuw tonen, maar niet de naam, tekst of sterren van anderen aanpassen. Ingetrokken reviews blijven uit het openbare overzicht. Omdat de verkoop nog niet is gestart, zijn deze ervaringen met REVE en de website geen geverifieerde aankoopreviews.

## Hosting en beveiliging

Deze repository bewaart de frontend en serverbron als referentie. De complete Vinext-hostingbron, hostingconfiguratie, productafbeeldingen en gegenereerde bestanden staan in de gekoppelde Sites-bronrepository. Voor de reviews is de D1-binding `DB` nodig; voor collectie en afbeeldingen de R2-binding `BUCKET`. De schemawijziging wordt bij publicatie toegepast vanuit de Drizzle-migraties. Er worden geen tabellen bij een gewone webaanvraag aangemaakt.

Aanmelden, afmelden en de sessie worden door Sites afgehandeld. REVE bewaart geen wachtwoorden. `REVE_OWNER_EMAIL` staat uitsluitend als geheime waarde in de hostingomgeving. API's beperken wijzigingen tot de aangemelde auteur of eigenaar en controleren de herkomst van schrijfverzoeken. Tekst van reviews wordt als tekst weergegeven, zodat HTML geen scripts uitvoert.

## Verzending en bestellen

Voor producten op voorraad heeft de eigenaar 3–5 werkdagen voorbereidingstijd aangegeven voordat hij het pakket bij een DHL-punt afgeeft. Daarna volgt de bezorgtijd van DHL. Een echte trackcode moet na verzending aan de klant worden doorgegeven. Mollie, bestellen en betalen zijn nog niet geactiveerd.
