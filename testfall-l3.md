# Testfall för Rubiks Kub Timer-applikationen

## 1. Sammanfattning

Testningen fokuserar på att säkerställa korrekt funktionalitet i applikationen, som att starta och stoppa timern, spara resultat i localStorage, generera slumpmässiga kub-sekvenser, och visualisera resultaten i diagram.

## 2. Testmiljö

* Operativsystem: Windows 11
* Webbläsare: Chrome 120.0
* Node.js: v16.3.0
* Testverktyg: Manuell testning, Mocha + Chai (för automatisering)

## 3. Testplan

### 3.1 Funktionstester

**Testfall 1: Starta timern**
* Testmål: Verifiera att timern startar när användaren klickar på Start-knappen.
* Indata: Klick på Start-knappen.
* Förväntat resultat:
    * Tiden börjar räknas upp i displayen.
    * Stop-knappen aktiveras.
    * Start-knappen inaktiveras.

**Testfall 2: Stoppa timern**
* Testmål: Verifiera att timern slutar när användaren klickar på Stop-knappen.
* Indata: Klick på Stop-knappen efter att timern startats.
* Förväntat resultat:
    * Timern slutar räkna.
    * Den uppmätta tiden visas med två decimaler.
    * Resultatet sparas i localStorage.
    * Start-knappen återaktiveras och Stop-knappen inaktiveras.

**Testfall 3: Generera en slumpmässig sekvens**
* Testmål: Verifiera att en slumpmässig sekvens av kub-moves genereras och visas.
* Indata: Applikationen laddas, eller timern stoppas.
* Förväntat resultat:
    * En ny sekvens på 25 moves genereras och visas i gränssnittet.
    * Varje move är ett giltigt värde från listan: `['F', 'B', 'L', 'R', 'U', 'D', 'F2', ...]`.

**Testfall 4: Visa sparade resultat**
* Testmål: Verifiera att tidigare sparade resultat visas korrekt i gränssnittet.
* Indata: Applikationen laddas.
* Förväntat resultat:
    * Alla sparade resultat visas i en lista med datum och tid.
    * Rätt format: `Date: YYYY-MM-DD HH:MM:SS, Time: X.XX seconds`.

**Testfall 5: Rendera ett linjediagram**
* Testmål: Verifiera att resultatdata visualiseras korrekt i ett linjediagram.
* Indata: Tidigare resultat i localStorage.
* Förväntat resultat:
    * Linjediagrammet ritas med korrekt skalning av axlar.
    * Varje resultat representeras som en punkt på diagrammet.

### 3.2 Gränsvärdestester

**Testfall 6: Hantera tom localStorage**
* Testmål: Verifiera att applikationen hanterar avsaknad av tidigare resultat.
* Indata: localStorage är tomt.
* Förväntat resultat:
    * Inga resultat visas.
    * Diagrammet visas tomt utan felmeddelanden.

**Testfall 7: Hantera stora värden i diagrammet**
* Testmål: Verifiera att stora tidsvärden visualiseras korrekt.
* Indata: Sparade resultat med höga värden (t.ex. 500 sekunder).
* Förväntat resultat:
    * Linjepunkter skalas korrekt på diagrammet.

### 3.3 Felhantering

**Testfall 8: Ogiltig data i localStorage**
* Testmål: Verifiera att applikationen hanterar korrupt data i localStorage.
* Indata: localStorage innehåller ogiltig JSON-data.
* Förväntat resultat:
    * Applikationen ignorerar korrupt data.
    * Inga fel visas i gränssnittet.
    * localStorage återställs med tom data.

## 5. Testresultatdokumentation


| Testfall |	Funktion |	Status	|Kommentar |
|----------|-------------|----------|----------|
| TC01 |	Starta timern	| Pass	| Timern startar och knappar aktiveras korrekt. |
| TC02 |	Stoppa timern	| Pass	| Tiden stoppas och sparas korrekt. |
| TC03 |	Generera slumpmässig sekvens |	Pass |	Ny korrekt sekvens genereras. |
| TC04 |	Visa sparade resultat |	Pass |	Resultaten visas som förväntat. |
| TC05 |	Rendera linjediagram |	Pass |	Diagrammet visas korrekt. |
| TC06 |	Hantera tom localStorage |	Pass |	Inga resultat visas, ingen krasch. |
| TC07 |	Stora värden i diagram |	Pass |	Diagrammet skalas korrekt. |
| TC08 |	Ogiltig data i localStorage |	Pass |	Korrupt data hanteras korrekt. |

## 6. Slutsats

Applikationens funktioner har testats noggrant med både manuell och automatisk testning. Alla huvudfunktioner fungerar som förväntat. Gränsvärdestester och felhantering visar att applikationen är robust även vid extrema eller ogiltiga data.

## 7. Rekommendationer

1. Utöka automatiska tester för att täcka fler funktioner (t.ex. generering av diagram).
2. Implementera ytterligare gränssnittstester med verktyg som Selenium eller Puppeteer för att simulera användarinteraktioner.