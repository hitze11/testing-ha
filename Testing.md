# Testing Documentation

## 1. Screenshot des Test-Coverage-Reports (mind. 90%)


<img src="https://github.com/hitze11/testing-ha/blob/master/src/test.png"/>
*Der Coverage-Bericht zeigt, dass alle wichtigen Teile des Codes getestet wurden und eine Testabdeckung von mindestens 90% erreicht wurde.*

## 2. Entdeckte Fehler oder Edge-Cases

### Fehler 1: Ungültige Punktzahl unter 0
Wenn eine Punktzahl unter 0 eingegeben wird, ist die Validierung fehlerhaft und gibt eine falsche Fehlermeldung zurück. In solchen Fällen wurde die Eingabe als ungültig markiert, aber keine detaillierte Nachricht zu den spezifischen Fehlern geliefert.

### Fehler 2: Bonuspunkte werden nicht korrekt angewendet
Wenn keine Bonuskategorien angegeben sind, wurde der Score korrekt validiert. Wenn jedoch Bonuspunkte angewendet werden sollten, gab es Fälle, in denen der Bonus nicht richtig berechnet wurde (insbesondere bei Überschreitung des Bonus-Limits von 10 Punkten).

### Fehler 3: Nicht ganzzahlige Punktzahlen bei `strictMode`
Im `strictMode` wird erwartet, dass Punktzahlen nur ganze Zahlen sind. Es gab jedoch Fälle, in denen Dezimalzahlen (z. B. `75.5`) nicht korrekt invalidiert wurden, was zu falschen Validierungsfehlern führte.

## 3. Erklärung der Test-Struktur

Die Tests für die `validateScore`-Funktion sind in verschiedene Teile unterteilt:

- **Basisvalidierung**: Überprüfung der Validität von Punktzahlen (z. B. ob die Zahl im Bereich von 0 bis 100 liegt, ob es sich um eine Zahl handelt).
- **Strikte Validierung**: Tests, die sicherstellen, dass im `strictMode` nur gültige ganze Zahlen akzeptiert werden.
- **Bonuspunkte**: Überprüfung, ob Bonuskategorien korrekt berücksichtigt und Punkte korrekt angewendet werden.
- **Notenberechnung**: Tests zur Bestimmung
