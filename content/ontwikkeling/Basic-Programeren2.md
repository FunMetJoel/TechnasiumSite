+++
title = 'Basic Programeren'
date = 2023-12-09T20:20:34+01:00
slug = "Basic-Programeren2"
draft = false
credits = "Joël"
categorie = "OTHER"
picture = "https://ds055uzetaobb.cloudfront.net/brioche/chapter/electricity_and_magnetism-rJijqR.png?width=204"
introUse = 'Programeren is een hanidge vaardigheid om te leren. Je kan er veel mee doen. Je kan bijvoorbeeld een website of app maken, lastige prosessen simuleren of een robot besturen.'
introVaardigheid = 'In deze vaaridgheid leer je de basis van programmeren. Je leert over variabelen, datatypes, if-statements en loops.'
+++
<label>
    <input type="radio" name="methodSelect" value="radioPython" checked="checked"> Python
</label>
<label>
    <input type="radio" name="methodSelect" value="radioCpp"> C++
</label>
<label>
    <input type="radio" name="methodSelect" value="radioJS"> JavaScript
</label>

{{% putInDiv class = "Python" %}}
## Variabelen in **Python**

{{< section >}}

{{< rightSide >}}
Variabelen maken en veranderen
```python
kosten = 1.0
print(kosten) #Output: 1.0

kosten = 2.0
print(kosten) #Output: 2.0

aantal = input(Aantal: )
print(aantal) #Output invoer</code>
```
{{</ rightSide >}}

Een variabele is een plek in het geheugen waar je een waarde in kan opslaan. Je kan een variabele zien als een doos waar je een waarde in kan stoppen.

In Python kan je een variabele maken door de naam van de variabele te schrijven en daarna een waarde te geven. Je kan de waarde van een variabele veranderen door de naam van de variabele te schrijven en daarna een nieuwe waarde te geven.

Je kan de waarde van een variable de input van een gebruiker maken. Dit doe je door de functie ```input()``` te gebruiken. 
Je kan de waarde van een variabele printen door de functie ```print()``` te gebruiken.
{{< /section >}}


{{< section >}}

{{< rightSide >}}
Rekenen
```python
prijs = 2.0
hoeveelheid = 3
totaal = prijs * hoeveelheid
print(totaal) #Output: 6.0
```
{{</ rightSide >}}

Je kunt ook rekenen met variabelen. Je kan bijvoorbeeld een variabele maken die de prijs van een product is. Als je dan een variabele maakt die de hoeveelheid van het product is, kan je de prijs van het product berekenen.

Dit doe door de variabele totaal te maken en de prijs te vermenigvuldigen met de hoeveelheid.
{{</ section >}}



{{< alert type = "info" >}}
### Reken Operatoren
<!-- **+** is plus: &nbsp; 75.0 + 4.0 = 79.0 &nbsp; telt waarden bij elkaar op<br>
**-** is min: &nbsp; 75.0 - 4.0 = 71.0 &nbsp; haalt waarden van elkaar af<br>
**\*** is keer: &nbsp; 75.0 * 4.0 = 300.0 &nbsp; vermenigvuldigt waarden met elkaar<br>
**/** is delen: &nbsp; 75.0 / 4.0 = 18.75 &nbsp; deelt waarden door elkaar<br>
**%** is rest: &nbsp; 75.0 % 4.0 = 3.0 &nbsp; berekent de restwaarde na deling -->
```python
print(12 + 5) # Output 16, telt waarden bij elkaar op
print(12 - 5) # Output 7, haalt waarden van elkaar af
print(12 * 5) # Output 60, vermenigvuldigt waarden met elkaar
print(12 / 5) # Output 2.4, deelt waarden door elkaar
print(12 % 5) # Output 2, berekent de restwaarde na deling
```
{{</ alert >}}

{{%/ putInDiv %}}



{{% putInDiv class = "Cpp" %}}
## Variabelen in **C++**

{{< section >}}

{{< rightSide >}}
Variabelen maken en veranderen
```cpp
#include <iostream>

int main() {
  float kosten = 1.0;
  std::cout << kosten << std::endl;
  //Output: 1.0

  kosten = 2.0;
  std::cout << kosten << std::endl;
  //Output: 2.0

  int aantal;
  std::cout << "Aantal: ";
  std::cin >> aantal;
  std::cout << aantal;
  //Output invoer
}
```
{{</ rightSide >}}

Een variabele is een plek in het geheugen waar je een waarde in kan opslaan. Je kan een variabele zien als een doos waar je een waarde in kan stoppen.

In C++ kan je een variabele maken door de naam van de variabele te schrijven en daarna een waarde te geven. Je kan de waarde van een variabele veranderen door de naam van de variabele te schrijven en daarna een nieuwe waarde te geven.

Je kan de waarde van een variable de input van een gebruiker maken. Dit doe je door ```std::cin >> [variabele]``` te gebruiken.
Je kan de waarde van een variabele printen door ```std::cout << "tekst"``` te gebruiken. Meestal doe je er een ```<< std::endl``` achter om een nieuwe regel te maken.
{{< /section >}}


{{< section >}}

{{< rightSide >}}
Rekenen
```cpp
#include &lt;iostream>

int main() {
  float prijs = 2.0;
  int hoeveelheid = 3;
  float totaal = prijs * hoeveelheid;
  std::cout << totaal << std::endl; 
  // Output: 6.0
}

```
{{</ rightSide >}}

Je kunt ook rekenen met variabelen. Je kan bijvoorbeeld een variabele maken die de prijs van een product is. Als je dan een variabele maakt die de hoeveelheid van het product is, kan je de prijs van het product berekenen.
Dit doe door de variabele totaal te maken en de prijs te vermenigvuldigen met de hoeveelheid.
{{</ section >}}



{{< alert type = "info" >}}
### Reken Operatoren
<!-- **+** is plus: &nbsp; 75.0 + 4.0 = 79.0 &nbsp; telt waarden bij elkaar op<br>
**-** is min: &nbsp; 75.0 - 4.0 = 71.0 &nbsp; haalt waarden van elkaar af<br>
**\*** is keer: &nbsp; 75.0 * 4.0 = 300.0 &nbsp; vermenigvuldigt waarden met elkaar<br>
**/** is delen: &nbsp; 75.0 / 4.0 = 18.75 &nbsp; deelt waarden door elkaar<br>
**%** is rest: &nbsp; 75.0 % 4.0 = 3.0 &nbsp; berekent de restwaarde na deling -->
```cpp
std::cout << (12 + 5) // Output 16, telt waarden bij elkaar op
std::cout << (12 - 5) // Output 7, haalt waarden van elkaar af
std::cout << (12 * 5) // Output 60, vermenigvuldigt waarden met elkaar
std::cout << (12 / 5) // Output 2.4, deelt waarden door elkaar
std::cout << (12 % 5) // Output 2, berekent de restwaarde na deling
```
{{</ alert >}}



{{%/ putInDiv %}}

{{% putInDiv class = "JS" %}}
## Variabelen in **JavaScript**

{{< section >}}

{{< rightSide >}}
Variabelen maken en veranderen
```javascript
let kosten = 1.0;
console.log(kosten); //Output: 1.0

kosten = 2.0;
console.log(kosten); //Output: 2.0

let aantal = prompt("Aantal: ");
console.log(aantal); //Output invoer
```
{{</ rightSide >}}

Een variabele is een plek in het geheugen waar je een waarde in kan opslaan. Je kan een variabele zien als een doos waar je een waarde in kan stoppen.

In JavaScript kan je een variabele maken door het woord let te schrijven en daarna de naam van de variabele te schrijven en daarna een waarde te geven. Je kan de waarde van een variabele veranderen door de naam van de variabele te schrijven en daarna een nieuwe waarde te geven.

Je kan de waarde van een variable de input van een gebruiker maken. Dit doe je door de functie ```prompt()``` te gebruiken.
Je kan de waarde van een variabele printen door de functie ```console.log()``` te gebruiken.
{{< /section >}}

{{< section >}}

{{< rightSide >}}
Rekenen
```javascript
let prijs = 2.0;
let hoeveelheid = 3;
let totaal = prijs * hoeveelheid;
console.log(totaal); //Output: 6.0
```
{{</ rightSide >}}

Je kunt ook rekenen met variabelen. Je kan bijvoorbeeld een variabele maken die de prijs van een product is. Als je dan een variabele maakt die de hoeveelheid van het product is, kan je de prijs van het product berekenen.

Dit doe door de variabele totaal te maken en de prijs te vermenigvuldigen met de hoeveelheid.
{{</ section >}}

{{< alert type = "info" >}}
### Reken Operatoren
<!-- **+** is plus: &nbsp; 75.0 + 4.0 = 79.0 &nbsp; telt waarden bij elkaar op<br>
**-** is min: &nbsp; 75.0 - 4.0 = 71.0 &nbsp; haalt waarden van elkaar af<br>
**\*** is keer: &nbsp; 75.0 * 4.0 = 300.0 &nbsp; vermenigvuldigt waarden met elkaar<br>
**/** is delen: &nbsp; 75.0 / 4.0 = 18.75 &nbsp; deelt waarden door elkaar<br>
**%** is rest: &nbsp; 75.0 % 4.0 = 3.0 &nbsp; berekent de restwaarde na deling -->
```javascript
console.log(12 + 5) // Output 16, telt waarden bij elkaar op
console.log(12 - 5) // Output 7, haalt waarden van elkaar af
console.log(12 * 5) // Output 60, vermenigvuldigt waarden met elkaar
console.log(12 / 5) // Output 2.4, deelt waarden door elkaar
console.log(12 % 5) // Output 2, berekent de restwaarde na deling
```
{{</ alert >}}

{{%/ putInDiv %}}

{{% putInDiv class = "Python" %}}
## Datatypes in **Python**

{{< section >}}

{{< rightSide >}}
Gebruik datatypes
```python
aantal = 5 #int
kosten = 2.0 #float
productNaam = "Koekje" #str
uitverkocht = False #bool
sterren = [4, 5, 3, 4, 5] #list
```
{{</ rightSide >}}

Een datatype is het soort waarde. Er zijn verschillende datatypes. De meest gebruikte datatypes zijn:<br>
Een **Integer (int)** is een heel getal. <br>&emsp;Bijvoorbeeld: 1, 2, 3, 4, 5, 6, 7, 8, 9 en 10<br>
Een **Float (float)** is een kommagetal. <br>&emsp;Bijvoorbeeld: 1.0, 2.3, 3.64 en 4.234<br>
Een **String (str)** is een stuk tekst. <br>&emsp;Bijvoorbeeld: "Hallo", "Dit is een string" en "123"<br>
Een **Boolean (bool)** is een Ja of Nee. <br>&emsp;Bijvoorbeeld: True en False<br>
Een **List (list)** is een lijst met waarden. <br>&emsp;Bijvoorbeeld: [1, 2, 6, 9]<br>

{{< /section >}}

{{< section >}}

{{< rightSide >}}
Datatype veranderen
```python
prijs = 5.0 #float
print(type(prijs)) #Output: float
text = "De prijs: €" + str(prijs)

print(text)
#Output: De prijs: €5.0

print(type(str(prijs)))
#Output: str
```
{{</ rightSide >}}

Datatypes zijn handig om het verschil aan te geven tussen de tekst "prijs" en de variabele prijs.

Soms moet je de datatype van een variabele veranderen. Bijvoorbeeld als je de waarde van een variabele in een stuk tekst wil noemen. Dan moet het getal een stukje tekst worden.

Je kan de datatype van een variabele opvragen door de functie ```type()``` te gebruiken. Je kan de datatype van een variabele veranderen door de datatype te gebruiken als functie. Je moet dan de variabele tussen de haakjes zetten.
{{</ section >}}

{{%/ putInDiv %}}

{{% putInDiv class = "Cpp" %}}
## Datatypes in **C++**

{{< section >}}

{{< rightSide >}}
Gebruik datatypes
```cpp
int aantal = 5;
double kosten = 2.0;
std::string productNaam = "Koekje";
bool uitverkocht = false;

//array van int's met lengte 5
int sterren[5] = {4, 5, 3, 4, 5}
```
{{</ rightSide >}}

Een datatype is het soort waarde. Er zijn verschillende datatypes. De meest gebruikte datatypes zijn:<br>
Een **Integer (int)** is een heel getal. <br>&emsp;Bijvoorbeeld: 1, 2, 3, 4, 5, 6, 7, 8, 9 en 10<br>
Een **Float (float)** is een kommagetal. <br>&emsp;Bijvoorbeeld: 1.0, 2.3, 3.64 en 4.234<br>
Een **String (str)** is een stuk tekst. <br>&emsp;Bijvoorbeeld: "Hallo", "Dit is een string" en "123"<br>
Een **Boolean (bool)** is een Ja of Nee. <br>&emsp;Bijvoorbeeld: True en False<br>

Van elk datatype is er een **Array**. Dit is een lijst met meerdere dezelfde datatypes in 1 variabele. <br>&emsp;Bijvoorbeeld: {1, 2, 6, 9}<br>

{{< /section >}}

{{< section >}}

{{< rightSide >}}
Datatype veranderen
```cpp
#include &lt;iostream>

int main() {
  float prijs = 5.0;
  std::cout << typeid(prijs).name() << std::endl;
  //Output: f (van float)

  std::string text = "De prijs: €" + std::to_string(prijs);
  std::cout << text << std::endl;
  //Output: De prijs: €5.000000

  std::cout << typeid(std::to_string(prijs)).name() << std::endl;
  //Output: NSt7__cxx1112basic_stringIcSt11char_traitsIcESaIcEEE (van string)
}
```
{{</ rightSide >}}

Datatypes zijn handig om het verschil aan te geven tussen de tekst "prijs" en de variabele prijs.

Soms moet je de datatype van een variabele veranderen. Bijvoorbeeld als je de waarde van een variabele in een stuk tekst wil noemen. Dan moet het getal een stukje tekst worden.

Je kan de datatype van een variabele opvragen door de functie ```typeid(...).name()``` te gebruiken. Je kan de datatype van een variabele veranderen door de datatype te gebruiken als functie. Je moet dan de variabele tussen de haakjes zetten.
{{</ section >}}

{{%/ putInDiv %}}

{{% putInDiv class = "JS" %}}
## Variabelen in **JavaScript**

{{< section >}}

{{< rightSide >}}
Variabelen maken en veranderen
```javascript
let kosten = 1.0;
console.log(kosten); //Output: 1.0

kosten = 2.0;
console.log(kosten); //Output: 2.0

let aantal = prompt("Aantal: ");
console.log(aantal); //Output invoer
```
{{</ rightSide >}}

Een variabele is een plek in het geheugen waar je een waarde in kan opslaan. Je kan een variabele zien als een doos waar je een waarde in kan stoppen.

In JavaScript kan je een variabele maken door het woord let te schrijven en daarna de naam van de variabele te schrijven en daarna een waarde te geven. Je kan de waarde van een variabele veranderen door de naam van de variabele te schrijven en daarna een nieuwe waarde te geven.

Je kan de waarde van een variable de input van een gebruiker maken. Dit doe je door de functie ```prompt()``` te gebruiken.
Je kan de waarde van een variabele printen door de functie ```console.log()``` te gebruiken.
{{< /section >}}

{{< section >}}

{{< rightSide >}}
Rekenen
```javascript
let prijs = 2.0;
let hoeveelheid = 3;
let totaal = prijs * hoeveelheid;
console.log(totaal); //Output: 6.0
```
{{</ rightSide >}}

Je kunt ook rekenen met variabelen. Je kan bijvoorbeeld een variabele maken die de prijs van een product is. Als je dan een variabele maakt die de hoeveelheid van het product is, kan je de prijs van het product berekenen.

Dit doe door de variabele totaal te maken en de prijs te vermenigvuldigen met de hoeveelheid.
{{</ section >}}

{{< alert type = "info" >}}
### Reken Operatoren
<!-- **+** is plus: &nbsp; 75.0 + 4.0 = 79.0 &nbsp; telt waarden bij elkaar op<br>
**-** is min: &nbsp; 75.0 - 4.0 = 71.0 &nbsp; haalt waarden van elkaar af<br>
**\*** is keer: &nbsp; 75.0 * 4.0 = 300.0 &nbsp; vermenigvuldigt waarden met elkaar<br>
**/** is delen: &nbsp; 75.0 / 4.0 = 18.75 &nbsp; deelt waarden door elkaar<br>
**%** is rest: &nbsp; 75.0 % 4.0 = 3.0 &nbsp; berekent de restwaarde na deling -->
```javascript
console.log(12 + 5) // Output 16, telt waarden bij elkaar op
console.log(12 - 5) // Output 7, haalt waarden van elkaar af
console.log(12 * 5) // Output 60, vermenigvuldigt waarden met elkaar
console.log(12 / 5) // Output 2.4, deelt waarden door elkaar
console.log(12 % 5) // Output 2, berekent de restwaarde na deling
```
{{</ alert >}}

{{%/ putInDiv %}}

{{% putInDiv class = "Python" %}}
## If-statements in **Python**

{{< section >}}

{{< rightSide >}}
If-statement
```python
aantal = 5
if aantal > 0:
  print("Je hebt er" + str(aantal) + " gekocht!")
else:
  print("Je moet er minimaal 1 kopen!")
```
{{</ rightSide >}}

Een if-statement is een stuk code dat alleen wordt uitgevoerd als een voorwaarde waar is. De voorwaarde is een stuk code dat een Boolean waarde geeft. Als de waarde True is, wordt de code uitgevoerd. Als de waarde False is, wordt de code niet uitgevoerd.

Je kan een if-statement maken door het woord if te schrijven en daarna een voorwaarde te zetten. Daarna moet je een dubbele punt schrijven en een tab gebruiken om de code te schrijven die wordt uitgevoerd als de voorwaarde waar is. <br> Als je de code wil schrijven die wordt uitgevoerd als de voorwaarde niet waar is, moet je na de if-statement else schrijven. Daarna moet je weer een dubbele punt schrijven en een tab gebruiken om de code te schrijven die wordt uitgevoerd als de voorwaarde niet waar is.

{{< /section >}}

{{< section >}}

{{< rightSide >}}

Elif-statement
```python
aantal = input("Aantal: ")
if aantal > 0:
  print("Je hebt er" + str(aantal) + " gekocht!")
elif aantal == 0:
  print("Je moet er minimaal 1 kopen!")
else:
  print("Je kan er niet minder dan 0 kopen!")
```
{{</ rightSide >}}

Je kan ook een if-statement maken die meerdere uitgangen heeft. Dit doe je door het woord elif te schrijven en daarna een voorwaarde te zetten. Daarna moet je een dubbele punt schrijven en een tab gebruiken om de code te schrijven die wordt uitgevoerd als de voorwaarde waar is. <br> Als je de code wil schrijven die wordt uitgevoerd als de voorwaarde niet waar is, kun je ook hierna else schrijven. Daarna moet je weer een dubbele punt schrijven en een tab gebruiken om de code te schrijven die wordt uitgevoerd als bijde voorwaarden niet waar zijn.

{{< /section >}}

{{< alert type = "info" >}}
### Vergelijking en Logische Operatoren
<!-- **==** is gelijk aan: True als links gelijk is aan rechts<br>
**>** is groter dan: True als links meer is dan rechts<br>
**>=** is groter of gelijk aan: True als links meer of gelijk is aan rechts<br>
**!=** is niet gelijk aan: True als links niet gelijk is aan rechts<br>
<br>
**&** en<br>
**|** of<br>
**!** niet -->
```python
print(75.0 == 4.0) # Output False, links is niet gelijk aan rechts
print(75.0 > 4.0) # Output True, links is groter dan rechts
print(75.0 >= 4.0) # Output True, links is groter of gelijk aan rechts
print(75.0 != 4.0) # Output True, links is niet gelijk aan rechts

print(True & False) # Output False, links en rechts zijn niet allebij true
print(True | False) # Output True, links of rechts is true
print(!True) # Output False, links is niet true
```
{{</ alert >}} 

{{%/ putInDiv %}}

{{% putInDiv class = "Cpp" %}}
## If-statements in **C++**

{{< section >}}

{{< rightSide >}}
If-statement
```cpp
#include &lt;iostream>

int main() {
  int aantal = 5;
  if (aantal > 0) {
    std::cout << "Je hebt er" << aantal << " gekocht!" << std::endl;
  } else {
    std::cout << "Je moet er minimaal 1 kopen!" << std::endl;
  }
}
```
{{</ rightSide >}}

Een if-statement is een stuk code dat alleen wordt uitgevoerd als een voorwaarde waar is. De voorwaarde is een stuk code dat een Boolean waarde geeft. Als de waarde True is, wordt de code uitgevoerd. Als de waarde False is, wordt de code niet uitgevoerd.

Je kan een if-statement maken door het woord if te schrijven en daarna een voorwaarde te zetten. Daarna moet je een dubbele punt schrijven en een tab gebruiken om de code te schrijven die wordt uitgevoerd als de voorwaarde waar is. <br> Als je de code wil schrijven die wordt uitgevoerd als de voorwaarde niet waar is, moet je na de if-statement else schrijven. Daarna moet je weer een dubbele punt schrijven en een tab gebruiken om de code te schrijven die wordt uitgevoerd als de voorwaarde niet waar is.

{{< /section >}}

{{< section >}}

{{< rightSide >}}

Elif-statement
```cpp
#include &lt;iostream>

int main() {
  int aantal = 5;
  if (aantal > 0) {
    std::cout << "Je hebt er" << aantal << " gekocht!" << std::endl;
  } else if (aantal == 0) {
    std::cout << "Je moet er minimaal 1 kopen!" << std::endl;
  } else {
    std::cout << "Je kan er niet minder dan 0 kopen!" << std::endl;
  }
}
```
{{</ rightSide >}}

Je kan ook een if-statement maken die meerdere uitgangen heeft. Dit doe je door het woord elif te schrijven en daarna een voorwaarde te zetten. Daarna moet je een dubbele punt schrijven en een tab gebruiken om de code te schrijven die wordt uitgevoerd als de voorwaarde waar is. <br> Als je de code wil schrijven die wordt uitgevoerd als de voorwaarde niet waar is, kun je ook hierna else schrijven. Daarna moet je weer een dubbele punt schrijven en een tab gebruiken om de code te schrijven die wordt uitgevoerd als bijde voorwaarden niet waar zijn.

{{< /section >}}

{{< alert type = "info" >}}
### Vergelijking en Logische Operatoren
<!-- **==** is gelijk aan: True als links gelijk is aan rechts<br>
**>** is groter dan: True als links meer is dan rechts<br>
**>=** is groter of gelijk aan: True als links meer of gelijk is aan rechts<br>
**!=** is niet gelijk aan: True als links niet gelijk is aan rechts<br>
<br>
**&** en<br>
**|** of<br>
**!** niet -->
```cpp
std::cout << (75.0 == 4.0) // Output False, links is niet gelijk aan rechts
std::cout << (75.0 > 4.0) // Output True, links is groter dan rechts
std::cout << (75.0 >= 4.0) // Output True, links is groter of gelijk aan rechts
std::cout << (75.0 != 4.0) // Output True, links is niet gelijk aan rechts

std::cout << (true & false) // Output False, links en rechts zijn niet allebij true
std::cout << (true | false) // Output True, links of rechts is true
std::cout << (!true) // Output False, doet het omgekeerde
```
{{</ alert >}}

{{%/ putInDiv %}}

{{% putInDiv class = "JS" %}}
## If-statements in **JavaScript**

{{< section >}}

{{< rightSide >}}
If-statement
```javascript
let aantal = 5;
if (aantal > 0) {
  console.log("Je hebt er" + aantal + " gekocht!");
} else {
  console.log("Je moet er minimaal 1 kopen!");
}
```
{{</ rightSide >}}

Een if-statement is een stuk code dat alleen wordt uitgevoerd als een voorwaarde waar is. De voorwaarde is een stuk code dat een Boolean waarde geeft. Als de waarde True is, wordt de code uitgevoerd. Als de waarde False is, wordt de code niet uitgevoerd.

Je kan een if-statement maken door het woord if te schrijven en daarna een voorwaarde te zetten. Daarna moet je een dubbele punt schrijven en een tab gebruiken om de code te schrijven die wordt uitgevoerd als de voorwaarde waar is. <br> Als je de code wil schrijven die wordt uitgevoerd als de voorwaarde niet waar is, moet je na de if-statement else schrijven. Daarna moet je weer een dubbele punt schrijven en een tab gebruiken om de code te schrijven die wordt uitgevoerd als de voorwaarde niet waar is.

{{< /section >}}

{{< section >}}

{{< rightSide >}}

Elif-statement
```javascript
let aantal = 5;
if (aantal > 0) {
  console.log("Je hebt er" + aantal + " gekocht!");
} else if (aantal == 0) {
  console.log("Je moet er minimaal 1 kopen!");
} else {
  console.log("Je kan er niet minder dan 0 kopen!");
}
```
{{</ rightSide >}}

Je kan ook een if-statement maken die meerdere uitgangen heeft. Dit doe je door het woord elif te schrijven en daarna een voorwaarde te zetten. Daarna moet je een dubbele punt schrijven en een tab gebruiken om de code te schrijven die wordt uitgevoerd als de voorwaarde waar is. <br> Als je de code wil schrijven die wordt uitgevoerd als de voorwaarde niet waar is, kun je ook hierna else schrijven. Daarna moet je weer een dubbele punt schrijven en een tab gebruiken om de code te schrijven die wordt uitgevoerd als bijde voorwaarden niet waar zijn.

{{< /section >}}

{{< alert type = "info" >}}
### Vergelijking en Logische Operatoren
<!-- **==** is gelijk aan: True als links gelijk is aan rechts<br>
**>** is groter dan: True als links meer is dan rechts<br>
**>=** is groter of gelijk aan: True als links meer of gelijk is aan rechts<br>
**!=** is niet gelijk aan: True als links niet gelijk is aan rechts<br>
<br>
**&** en<br>
**|** of<br>
**!** niet -->
```javascript
console.log(75.0 == 4.0) // Output False, links is niet gelijk aan rechts
console.log(75.0 > 4.0) // Output True, links is groter dan rechts
console.log(75.0 >= 4.0) // Output True, links is groter of gelijk aan rechts
console.log(75.0 != 4.0) // Output True, links is niet gelijk aan rechts

console.log(true & false) // Output False, links en rechts zijn niet allebij true
console.log(true | false) // Output True, links of rechts is true
console.log(!true) // Output False, doet het omgekeerde
```
{{</ alert >}}

{{%/ putInDiv %}}

{{% putInDiv class = "Python" %}}
## Loops in **Python**

{{< section >}}

{{< rightSide >}}
While-loop
```python
aantal = 5
while aantal > 0:
  print("Je hebt er" + str(aantal) + " gekocht!")
  aantal = aantal - 1
```
{{</ rightSide >}}

Een while-loop is een stuk code dat wordt uitgevoerd zolang een voorwaarde waar is. De voorwaarde is een stuk code dat een Boolean waarde geeft. Als de waarde True is, wordt de code uitgevoerd. Als de waarde False is, wordt de code niet uitgevoerd.

Je kan een while-loop maken door het woord while te schrijven en daarna een voorwaarde te zetten. Daarna moet je een dubbele punt schrijven en een tab gebruiken om de code te schrijven die wordt uitgevoerd als de voorwaarde waar is. <br> Als je de code wil schrijven die wordt uitgevoerd als de voorwaarde niet waar is, moet je na de while-loop else schrijven. Daarna moet je weer een dubbele punt schrijven en een tab gebruiken om de code te schrijven die wordt uitgevoerd als de voorwaarde niet waar is.

{{< /section >}}

{{< section >}}

{{< rightSide >}}

For-loop
```python
for i in range(5):
  print("Je hebt er" + str(i) + " gekocht!")
```
{{</ rightSide >}}

Je kan ook een for-loop maken. Dit is een loop die een aantal keer wordt uitgevoerd. Je kan een for-loop maken door het woord for te schrijven en daarna een variabele te zetten. Daarna moet je het woord in schrijven en daarna range() schrijven. Tussen de haakjes moet je het aantal keer schrijven dat de loop wordt uitgevoerd. Daarna moet je een dubbele punt schrijven en een tab gebruiken om de code te schrijven die wordt uitgevoerd als de voorwaarde waar is. <br> Als je de code wil schrijven die wordt uitgevoerd als de voorwaarde niet waar is, moet je na de for-loop else schrijven. Daarna moet je weer een dubbele punt schrijven en een tab gebruiken om de code te schrijven die wordt uitgevoerd als de voorwaarde niet waar is.

{{< /section >}}

{{%/ putInDiv %}}

{{% putInDiv class = "Cpp" %}}
## Loops in **C++**

{{< section >}}

{{< rightSide >}}
While-loop
```cpp
#include &lt;iostream>

int main() {
  int aantal = 5;
  while (aantal > 0) {
    std::cout << "Je hebt er" << aantal << " gekocht!" << std::endl;
    aantal = aantal - 1;
  }
}
```
{{</ rightSide >}}

Een while-loop is een stuk code dat wordt uitgevoerd zolang een voorwaarde waar is. De voorwaarde is een stuk code dat een Boolean waarde geeft. Als de waarde True is, wordt de code uitgevoerd. Als de waarde False is, wordt de code niet uitgevoerd.

Je kan een while-loop maken door het woord while te schrijven en daarna een voorwaarde te zetten. Daarna moet je een dubbele punt schrijven en een tab gebruiken om de code te schrijven die wordt uitgevoerd als de voorwaarde waar is. <br> Als je de code wil schrijven die wordt uitgevoerd als de voorwaarde niet waar is, moet je na de while-loop else schrijven. Daarna moet je weer een dubbele punt schrijven en een tab gebruiken om de code te schrijven die wordt uitgevoerd als de voorwaarde niet waar is.

{{< /section >}}

{{< section >}}

{{< rightSide >}}

For-loop
```cpp
#include &lt;iostream>

int main() {
  for (int i = 0; i < 5; i++) {
    std::cout << "Je hebt er" << i << " gekocht!" << std::endl;
  }
}	
```
{{</ rightSide >}}

Je kan ook een for-loop maken. Dit is een loop die een aantal keer wordt uitgevoerd. Je kan een for-loop maken door het woord for te schrijven en daarna een variabele te zetten. Daarna moet je het woord in schrijven en daarna range() schrijven. Tussen de haakjes moet je het aantal keer schrijven dat de loop wordt uitgevoerd. Daarna moet je een dubbele punt schrijven en een tab gebruiken om de code te schrijven die wordt uitgevoerd als de voorwaarde waar is. <br> Als je de code wil schrijven die wordt uitgevoerd als de voorwaarde niet waar is, moet je na de for-loop else schrijven. Daarna moet je weer een dubbele punt schrijven en een tab gebruiken om de code te schrijven die wordt uitgevoerd als de voorwaarde niet waar is.

{{< /section >}}

{{%/ putInDiv %}}

{{% putInDiv class = "JS" %}}
## Loops in **JavaScript**

{{< section >}}

{{< rightSide >}}
While-loop
```javascript
let aantal = 5;
while (aantal > 0) {
  console.log("Je hebt er" + aantal + " gekocht!");
  aantal = aantal - 1;
}
```
{{</ rightSide >}}

Een while-loop is een stuk code dat wordt uitgevoerd zolang een voorwaarde waar is. De voorwaarde is een stuk code dat een Boolean waarde geeft. Als de waarde True is, wordt de code uitgevoerd. Als de waarde False is, wordt de code niet uitgevoerd.

Je kan een while-loop maken door het woord while te schrijven en daarna een voorwaarde te zetten. Daarna moet je een dubbele punt schrijven en een tab gebruiken om de code te schrijven die wordt uitgevoerd als de voorwaarde waar is. <br> Als je de code wil schrijven die wordt uitgevoerd als de voorwaarde niet waar is, moet je na de while-loop else schrijven. Daarna moet je weer een dubbele punt schrijven en een tab gebruiken om de code te schrijven die wordt uitgevoerd als de voorwaarde niet waar is.

{{< /section >}}

{{< section >}}

{{< rightSide >}}

For-loop
```javascript
for (let i = 0; i < 5; i++) {
  console.log("Je hebt er" + i + " gekocht!");
}
```
{{</ rightSide >}}

Je kan ook een for-loop maken. Dit is een loop die een aantal keer wordt uitgevoerd. Je kan een for-loop maken door het woord for te schrijven en daarna een variabele te zetten. Daarna moet je het woord in schrijven en daarna range() schrijven. Tussen de haakjes moet je het aantal keer schrijven dat de loop wordt uitgevoerd. Daarna moet je een dubbele punt schrijven en een tab gebruiken om de code te schrijven die wordt uitgevoerd als de voorwaarde waar is. <br> Als je de code wil schrijven die wordt uitgevoerd als de voorwaarde niet waar is, moet je na de for-loop else schrijven. Daarna moet je weer een dubbele punt schrijven en een tab gebruiken om de code te schrijven die wordt uitgevoerd als de voorwaarde niet waar is.

{{< /section >}}

{{%/ putInDiv %}}

{{% putInDiv class = "Python" %}}
## Winkel script in **Python**

{{< section >}}
Met wat je nu weet, kan je een basic winkel script maken. <br>
Bij het maken van een project moet je eerst bedenken wat het script moet doen<br>
In dit geval moet het: <br>
- De gebruiker welkom heten<br>
- De gebruiker het product en de prijs laten zien<br>
- De gebruiker vragen hoeveel hij/zij wil kopen<br>
- De prijs van een product berekenen<br>
Ditalles doen we in het script hieronder<br>

{{< rightSide >}}
Winkel script
```python
aantal = input("Aantal: ")
if aantal > 0:
  print("Je hebt er" + str(aantal) + " gekocht!")
elif aantal == 0:
  print("Je moet er minimaal 1 kopen!")
else:
  print("Je kan er niet minder dan 0 kopen!")
```
{{</ rightSide >}}

```python
print("Welkom bij de winkel")

productNaam = "Koekje" #str
kosten = 2.0 #float
uitverkocht = False #bool

print("Een " + str(productNaam) + " kost €" + str(kosten))

if uitverkocht:
  print("Dit product is uitverkocht")
else:
  print("Dit product is op voorraad")

print("")

print("Hoeveel wil je er kopen?")
aantal = int(input("Aantal: "))
while aantal <= 0:
  print("Je moet er minimaal 1 kopen!")
  aantal = int(input("Aantal: "))
print("")

tekst = "Je wilt " + str(aantal) 
tekst = tekst + " keer een " + str(productNaam)
tekst += " kopen."
print(tekst)

totKosten = kosten * aantal
print("Dit kost €" + str(totKosten))
```
{{< /section >}}

{{%/ putInDiv %}}

    <section id="Winkel-script">
      <div class="content Python">
        <h2>Winkel script in <strong>Python</strong></h2>
        <div class="text">
          <p>
            Met wat je nu weet, kan je een basic winkel script maken. <br>
            Bij het maken van een project moet je eerst bedenken wat het script moet doen<br>
            In dit geval moet het: <br>
            - De gebruiker welkom heten<br>
            - De gebruiker het product en de prijs laten zien<br>
            - De gebruiker vragen hoeveel hij/zij wil kopen<br>
            - De prijs van een product berekenen<br>
            Ditalles doen we in het script hieronder<br>
          </p>
          <br>
          <div class="rightSide">
            <p>
              Basic Winkelwebsite
            </p>
            <pre>
              <code class="language-python">
print("Welkom bij de winkel")

productNaam = "Koekje" #str
kosten = 2.0 #float
uitverkocht = False #bool

print("Een " + str(productNaam) + " kost €" + str(kosten))

if uitverkocht:
  print("Dit product is uitverkocht")
else:
  print("Dit product is op voorraad")

print("")

print("Hoeveel wil je er kopen?")
aantal = int(input("Aantal: "))
while aantal <= 0:
  print("Je moet er minimaal 1 kopen!")
  aantal = int(input("Aantal: "))
print("")

tekst = "Je wilt " + str(aantal) 
tekst = tekst + " keer een " + str(productNaam)
tekst += " kopen."
print(tekst)

totKosten = kosten * aantal
print("Dit kost €" + str(totKosten))</code>
            </pre>
          </div>
          
          <div class="rightSide">
            <p>Terminal</p>
            <pre>
              <code class="language-text">
Welkom bij de winkel
Een Koekje kost €2.0
Dit product is op voorraad

Hoeveel wil je er kopen?
Aantal: -2
Je moet er minimaal 1 kopen!
Aantal: -3
Je moet er minimaal 1 kopen!
Aantal: 0
Je moet er minimaal 1 kopen!
Aantal: 5

Je wilt 5 keer een Koekje kopen.
Dit kost €10.0</code>
            </pre>

            <p>
              Test het script op:<br>
              <a href="https://replit.com/@FunMetJoel/Basic-Winkel" target="_blank" rel="noopener noreferrer">replit.com/@FunMetJoel/Basic-Winkel</a>
            </p>

          </div>
        </div>
      </div>
      <div class="content Cpp">
        <h2>Winkel script in <strong>C++</strong></h2>
      </div>
      <div class="content JS">
        <h2>Winkel script in <strong>JavaScript</strong></h2>
      </div>
    </section>
  </main>

  <div id="credits" class="content">
    Deze pagina is geschreven door Joël
  </div>
  
  <div id="footer-placeholder"></div>
</body>

</html>
