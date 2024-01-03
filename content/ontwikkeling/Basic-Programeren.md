+++
title = 'Basic Programeren'
date = 2023-12-09T20:20:34+01:00
slug = "Basic-Programeren"
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

Een variabele is een plek in het geheugen waar je een waarde in kan opslaan. Je kan een variabele zien als een doos waar je een waarde in kan stoppen.

In Python kan je een variabele maken door de naam van de variabele te schrijven en daarna een waarde te geven. Je kan de waarde van een variabele veranderen door de naam van de variabele te schrijven en daarna een nieuwe waarde te geven.

Je kan de waarde van een variable de input van een gebruiker maken. Dit doe je door de functie ```input()``` te gebruiken. 
Je kan de waarde van een variabele printen door de functie ```print()``` te gebruiken.

```python
# Dit is een commentaar. Dit wordt niet uitgevoerd.
kosten = 1.0
print(kosten) #Output: 1.0

kosten = 2.0
print(kosten) #Output: 2.0

aantal = input(Aantal: )
print(aantal) #Output invoer van gebruiker
```

Je kunt ook rekenen met variabelen. Je kan bijvoorbeeld een variabele maken die de prijs van een product is. Als je dan een variabele maakt die de hoeveelheid van het product is, kan je de prijs van het product berekenen.

Dit doe door de variabele totaal te maken en de prijs te vermenigvuldigen met de hoeveelheid.
    
```python
prijs = 2.0
hoeveelheid = 3
totaal = prijs * hoeveelheid
print(totaal) #Output: 6.0
```

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

## Datatypes in **Python**

Een datatype is een type waarde. Er zijn verschillende datatypes. De meest gebruikte datatypes zijn: ```int```, ```float```, ```string``` en ```boolean```.

Een **Integer (int)** is een heel getal. <br>&emsp;Bijvoorbeeld: 1, 2, 3, 4, 5, 6, 7, 8, 9 en 10<br>
Een **Float (float)** is een kommagetal. <br>&emsp;Bijvoorbeeld: 1.0, 2.3, 3.64 en 4.234<br>
Een **String (str)** is een stuk tekst. <br>&emsp;Bijvoorbeeld: "Hallo", "Dit is een string" en "123"<br>
Een **Boolean (bool)** is een Ja of Nee. <br>&emsp;Bijvoorbeeld: True en False<br>
Een **List (list)** is een lijst met waarden. <br>&emsp;Bijvoorbeeld: [1, 2, 6, 9]<br>

```python
aantal = 5 #int
kosten = 2.0 #float
productNaam = "Koekje" #str
uitverkocht = False #bool
sterren = [4, 5, 3, 4, 5] #list
```

Datatypes kan je omzetten naar een ander datatype. Dit doe je door de naam van het datatype te schrijven en daarna de waarde tussen haakjes te zetten. Je kan bijvoorbeeld een string omzetten naar een integer. Dit doe je door ```int()``` te gebruiken. Je kan ook een integer omzetten naar een string. Dit doe je door ```str()``` te gebruiken.

Je kan de datatype van een variabele opvragen door de functie ```type()``` te gebruiken.
```python
aantal = "5"
print(type(aantal)) #Output: <class 'str'>

aantal = int(aantal)
print(type(aantal)) #Output: <class 'int'>
```
## If-statements in **Python**

Een if-statement is een stuk code dat alleen wordt uitgevoerd als een voorwaarde waar is. De voorwaarde is een stuk code dat een Boolean waarde geeft. Als de waarde True is, wordt de code uitgevoerd. Als de waarde False is, wordt de code niet uitgevoerd.

Je kan een if-statement maken door het woord if te schrijven en daarna een voorwaarde te zetten. Daarna moet je een dubbele punt schrijven en een tab gebruiken om de code te schrijven die wordt uitgevoerd als de voorwaarde waar is. <br> Als je de code wil schrijven die wordt uitgevoerd als de voorwaarde niet waar is, moet je na de if-statement else schrijven. Daarna moet je weer een dubbele punt schrijven en een tab gebruiken om de code te schrijven die wordt uitgevoerd als de voorwaarde niet waar is.

```python
aantal = 5
if aantal > 0:
  print("Je hebt er" + str(aantal) + " gekocht!")
else:
  print("Je moet er minimaal 1 kopen!")
```

Je kan ook een if-statement maken die meerdere uitgangen heeft. Dit doe je door het woord elif te schrijven en daarna een voorwaarde te zetten. Daarna moet je een dubbele punt schrijven en een tab gebruiken om de code te schrijven die wordt uitgevoerd als de voorwaarde waar is. <br> Als je de code wil schrijven die wordt uitgevoerd als de voorwaarde niet waar is, kun je ook hierna else schrijven. Daarna moet je weer een dubbele punt schrijven en een tab gebruiken om de code te schrijven die wordt uitgevoerd als bijde voorwaarden niet waar zijn.

```python
aantal = input("Aantal: ")
if aantal > 0:
  print("Je hebt er" + str(aantal) + " gekocht!")
elif aantal == 0:
  print("Je moet er minimaal 1 kopen!")
else:
  print("Je kan er niet minder dan 0 kopen!")
```

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

## Loops in **Python**

Een while-loop is een stuk code dat wordt uitgevoerd zolang een voorwaarde waar is. De voorwaarde is een stuk code dat een Boolean waarde geeft. Als de waarde True is, wordt de code uitgevoerd. Als de waarde False is, wordt de code niet uitgevoerd.

Je kan een while-loop maken door het woord while te schrijven en daarna een voorwaarde te zetten. Daarna moet je een dubbele punt schrijven en een tab gebruiken om de code te schrijven die wordt uitgevoerd als de voorwaarde waar is. <br> Als je de code wil schrijven die wordt uitgevoerd als de voorwaarde niet waar is, moet je na de while-loop else schrijven. Daarna moet je weer een dubbele punt schrijven en een tab gebruiken om de code te schrijven die wordt uitgevoerd als de voorwaarde niet waar is.

```python
aantal = 5
while aantal > 0:
  print("Je hebt er" + str(aantal) + " gekocht!")
  aantal = aantal - 1
```

Je kan ook een for-loop maken. Dit is een loop die een aantal keer wordt uitgevoerd. Je kan een for-loop maken door het woord for te schrijven en daarna een variabele te zetten. Daarna moet je het woord in schrijven en daarna range() schrijven. Tussen de haakjes moet je het aantal keer schrijven dat de loop wordt uitgevoerd. Daarna moet je een dubbele punt schrijven en een tab gebruiken om de code te schrijven die wordt uitgevoerd als de voorwaarde waar is. <br> Als je de code wil schrijven die wordt uitgevoerd als de voorwaarde niet waar is, moet je na de for-loop else schrijven. Daarna moet je weer een dubbele punt schrijven en een tab gebruiken om de code te schrijven die wordt uitgevoerd als de voorwaarde niet waar is.

```python
for i in range(5):
  print("Je hebt er" + str(i) + " gekocht!")
```
{{%/ putInDiv %}}
{{% putInDiv class = "Cpp" %}}
## Variabelen in **C++**

Een variabele is een plek in het geheugen waar je een waarde in kan opslaan. Je kan een variabele zien als een doos waar je een waarde in kan stoppen.

In C++ kan je een variabele maken door de naam van de variabele te schrijven en daarna een waarde te geven. Je kan de waarde van een variabele veranderen door de naam van de variabele te schrijven en daarna een nieuwe waarde te geven.

Je kan de waarde van een variable de input van een gebruiker maken. Dit doe je door de functie ```cin``` te gebruiken.
Je kan de waarde van een variabele printen door de functie ```cout``` te gebruiken.

```cpp
// Dit is een commentaar. Dit wordt niet uitgevoerd.
float kosten = 1.0;
cout << kosten << endl; //Output: 1.0

kosten = 2.0;
cout << kosten << endl; //Output: 2.0

int aantal;
cin >> aantal;
cout << aantal << endl; //Output invoer van gebruiker
```

Je kunt ook rekenen met variabelen. Je kan bijvoorbeeld een variabele maken die de prijs van een product is. Als je dan een variabele maakt die de hoeveelheid van het product is, kan je de prijs van het product berekenen.

Dit doe door de variabele totaal te maken en de prijs te vermenigvuldigen met de hoeveelheid.
    
```cpp
float prijs = 2.0;
int hoeveelheid = 3;
float totaal = prijs * hoeveelheid;
cout << totaal << endl; //Output: 6.0
```

{{< alert type = "info" >}}
### Reken Operatoren
<!-- **+** is plus: &nbsp; 75.0 + 4.0 = 79.0 &nbsp; telt waarden bij elkaar op<br>
**-** is min: &nbsp; 75.0 - 4.0 = 71.0 &nbsp; haalt waarden van elkaar af<br>
**\*** is keer: &nbsp; 75.0 * 4.0 = 300.0 &nbsp; vermenigvuldigt waarden met elkaar<br>
**/** is delen: &nbsp; 75.0 / 4.0 = 18.75 &nbsp; deelt waarden door elkaar<br>
**%** is rest: &nbsp; 75.0 % 4.0 = 3.0 &nbsp; berekent de restwaarde na deling -->
```cpp
cout << 12 + 5 << endl; // Output 16, telt waarden bij elkaar op
cout << 12 - 5 << endl; // Output 7, haalt waarden van elkaar af
cout << 12 * 5 << endl; // Output 60, vermenigvuldigt waarden met elkaar
cout << 12 / 5 << endl; // Output 2, deelt waarden door elkaar
cout << 12 % 5 << endl; // Output 2, berekent de restwaarde na deling
```
{{</ alert >}}

## Datatypes in **C++**

Een datatype is een type waarde. Er zijn verschillende datatypes. De meest gebruikte datatypes zijn: ```int```, ```float```, ```string``` en ```bool```.

Een **Integer (int)** is een heel getal. <br>&emsp;Bijvoorbeeld: 1, 2, 3, 4, 5, 6, 7, 8, 9 en 10<br>
Een **Float (float)** is een kommagetal. <br>&emsp;Bijvoorbeeld: 1.0, 2.3, 3.64 en 4.234<br>
Een **String (string)** is een stuk tekst. <br>&emsp;Bijvoorbeeld: "Hallo", "Dit is een string" en "123"<br>
Een **Boolean (bool)** is een Ja of Nee. <br>&emsp;Bijvoorbeeld: true en false<br>
Een **Array (array)** is een lijst met waarden. <br>&emsp;Bijvoorbeeld: {1, 2, 6, 9}<br>

```cpp
int aantal = 5; //int
float kosten = 2.0; //float
string productNaam = "Koekje"; //string
bool uitverkocht = false; //bool
int sterren[] = {4, 5, 3, 4, 5}; //array
```

Datatypes kan je omzetten naar een ander datatype. Dit doe je door de naam van het datatype te schrijven en daarna de waarde tussen haakjes te zetten. Je kan bijvoorbeeld een string omzetten naar een integer. Dit doe je door ```stoi()``` te gebruiken. Je kan ook een integer omzetten naar een string. Dit doe je door ```to_string()``` te gebruiken.

Je kan de datatype van een variabele opvragen door de functie ```typeid()``` te gebruiken.
```cpp
string aantal = "5";
cout << typeid(aantal).name() << endl; //Output: Ss

aantal = stoi(aantal);
cout << typeid(aantal).name() << endl; //Output: i
```
## If-statements in **C++**

Een if-statement is een stuk code dat alleen wordt uitgevoerd als een voorwaarde waar is. De voorwaarde is een stuk code dat een Boolean waarde geeft. Als de waarde true is, wordt de code uitgevoerd. Als de waarde false is, wordt de code niet uitgevoerd.

Je kan een if-statement maken door het woord if te schrijven en daarna een voorwaarde te zetten. Daarna moet je een accolade openen en een tab gebruiken om de code te schrijven die wordt uitgevoerd als de voorwaarde waar is. <br> Als je de code wil schrijven die wordt uitgevoerd als de voorwaarde niet waar is, moet je na de if-statement else schrijven. Daarna moet je weer een accolade openen en een tab gebruiken om de code te schrijven die wordt uitgevoerd als de voorwaarde niet waar is.

```cpp
int aantal = 5;
if (aantal > 0) {
  cout << "Je hebt er" << aantal << " gekocht!" << endl;
} else {
  cout << "Je moet er minimaal 1 kopen!" << endl;
}
```

Je kan ook een if-statement maken die meerdere uitgangen heeft. Dit doe je door het woord else if te schrijven en daarna een voorwaarde te zetten. Daarna moet je een accolade openen en een tab gebruiken om de code te schrijven die wordt uitgevoerd als de voorwaarde waar is. <br> Als je de code wil schrijven die wordt uitgevoerd als de voorwaarde niet waar is, kun je ook hierna else schrijven. Daarna moet je weer een accolade openen en een tab gebruiken om de code te schrijven die wordt uitgevoerd als bijde voorwaarden niet waar zijn.

```cpp
int aantal = 5;
if (aantal > 0) {
  cout << "Je hebt er" << aantal << " gekocht!" << endl;
} else if (aantal == 0) {
  cout << "Je moet er minimaal 1 kopen!" << endl;
} else {
  cout << "Je kan er niet minder dan 0 kopen!" << endl;
}
```

{{< alert type = "info" >}}
### Vergelijking en Logische Operatoren
<!-- **==** is gelijk aan: true als links gelijk is aan rechts<br>
**>** is groter dan: true als links meer is dan rechts<br>
**>=** is groter of gelijk aan: true als links meer of gelijk is aan rechts<br>
**!=** is niet gelijk aan: true als links niet gelijk is aan rechts<br>
<br>
**&** en<br>
**|** of<br>
**!** niet -->
```cpp
cout << (75.0 == 4.0) << endl; // Output false, links is niet gelijk aan rechts
cout << (75.0 > 4.0) << endl; // Output true, links is groter dan rechts
cout << (75.0 >= 4.0) << endl; // Output true, links is groter of gelijk aan rechts
cout << (75.0 != 4.0) << endl; // Output true, links is niet gelijk aan rechts

cout << (true & false) << endl; // Output false, links en rechts zijn niet allebij true
cout << (true | false) << endl; // Output true, links of rechts is true
cout << (!true) << endl; // Output false, links is niet true
```
{{</ alert >}}

## Loops in **C++**

Een while-loop is een stuk code dat wordt uitgevoerd zolang een voorwaarde waar is. De voorwaarde is een stuk code dat een Boolean waarde geeft. Als de waarde true is, wordt de code uitgevoerd. Als de waarde false is, wordt de code niet uitgevoerd.

Je kan een while-loop maken door het woord while te schrijven en daarna een voorwaarde te zetten. Daarna moet je een accolade openen en een tab gebruiken om de code te schrijven die wordt uitgevoerd als de voorwaarde waar is. <br> Als je de code wil schrijven die wordt uitgevoerd als de voorwaarde niet waar is, moet je na de while-loop else schrijven. Daarna moet je weer een accolade openen en een tab gebruiken om de code te schrijven die wordt uitgevoerd als de voorwaarde niet waar is.

```cpp
int aantal = 5;
while (aantal > 0) {
  cout << "Je hebt er" << aantal << " gekocht!" << endl;
  aantal = aantal - 1;
}
```

Je kan ook een for-loop maken. Dit is een loop die een aantal keer wordt uitgevoerd. Je kan een for-loop maken door het woord for te schrijven en daarna een variabele te zetten. Daarna moet je het woord in schrijven en daarna accolades openen. Tussen de accolades moet je het aantal keer schrijven dat de loop wordt uitgevoerd. Daarna moet je een accolade openen en een tab gebruiken om de code te schrijven die wordt uitgevoerd als de voorwaarde waar is. <br> Als je de code wil schrijven die wordt uitgevoerd als de voorwaarde niet waar is, moet je na de for-loop else schrijven. Daarna moet je weer een accolade openen en een tab gebruiken om de code te schrijven die wordt uitgevoerd als de voorwaarde niet waar is.

```cpp
for (int i = 0; i < 5; i++) {
  cout << "Je hebt er" << i << " gekocht!" << endl;
}
```
{{%/ putInDiv %}}
{{% putInDiv class = "JS" %}}
## Variabelen in **JavaScript**

Een variabele is een plek in het geheugen waar je een waarde in kan opslaan. Je kan een variabele zien als een doos waar je een waarde in kan stoppen.

In JavaScript kan je een variabele maken door het woord var te schrijven en daarna de naam van de variabele te schrijven. Daarna moet je een is-teken schrijven en daarna een waarde geven. Je kan de waarde van een variabele veranderen door de naam van de variabele te schrijven en daarna een nieuwe waarde te geven.

Je kan de waarde van een variable de input van een gebruiker maken. Dit doe je door de functie ```prompt()``` te gebruiken.
Je kan de waarde van een variabele printen door de functie ```console.log()``` te gebruiken.

```javascript
// Dit is een commentaar. Dit wordt niet uitgevoerd.
var kosten = 1.0;
console.log(kosten); //Output: 1.0

kosten = 2.0;
console.log(kosten); //Output: 2.0

var aantal = prompt("Aantal: ");
console.log(aantal); //Output invoer van gebruiker
```

Je kunt ook rekenen met variabelen. Je kan bijvoorbeeld een variabele maken die de prijs van een product is. Als je dan een variabele maakt die de hoeveelheid van het product is, kan je de prijs van het product berekenen.

Dit doe door de variabele totaal te maken en de prijs te vermenigvuldigen met de hoeveelheid.
    
```javascript
var prijs = 2.0;
var hoeveelheid = 3;
var totaal = prijs * hoeveelheid;
console.log(totaal); //Output: 6.0
```

{{< alert type = "info" >}}
### Reken Operatoren
<!-- **+** is plus: &nbsp; 75.0 + 4.0 = 79.0 &nbsp; telt waarden bij elkaar op<br>
**-** is min: &nbsp; 75.0 - 4.0 = 71.0 &nbsp; haalt waarden van elkaar af<br>
**\*** is keer: &nbsp; 75.0 * 4.0 = 300.0 &nbsp; vermenigvuldigt waarden met elkaar<br>
**/** is delen: &nbsp; 75.0 / 4.0 = 18.75 &nbsp; deelt waarden door elkaar<br>
**%** is rest: &nbsp; 75.0 % 4.0 = 3.0 &nbsp; berekent de restwaarde na deling -->
```javascript
console.log(12 + 5); // Output 16, telt waarden bij elkaar op
console.log(12 - 5); // Output 7, haalt waarden van elkaar af
console.log(12 * 5); // Output 60, vermenigvuldigt waarden met elkaar
console.log(12 / 5); // Output 2, deelt waarden door elkaar
console.log(12 % 5); // Output 2, berekent de restwaarde na deling
```
{{</ alert >}}

## Datatypes in **JavaScript**

Een datatype is een type waarde. Er zijn verschillende datatypes. De meest gebruikte datatypes zijn: ```int```, ```float```, ```string``` en ```bool```.

Een **Integer (int)** is een heel getal. <br>&emsp;Bijvoorbeeld: 1, 2, 3, 4, 5, 6, 7, 8, 9 en 10<br>
Een **Float (float)** is een kommagetal. <br>&emsp;Bijvoorbeeld: 1.0, 2.3, 3.64 en 4.234<br>
Een **String (string)** is een stuk tekst. <br>&emsp;Bijvoorbeeld: "Hallo", "Dit is een string" en "123"<br>
Een **Boolean (bool)** is een Ja of Nee. <br>&emsp;Bijvoorbeeld: true en false<br>
Een **Array (array)** is een lijst met waarden. <br>&emsp;Bijvoorbeeld: [1, 2, 6, 9]<br>

```javascript
var aantal = 5; //int
var kosten = 2.0; //float
var productNaam = "Koekje"; //string
var uitverkocht = false; //bool
var sterren = [4, 5, 3, 4, 5]; //array
```

Datatypes kan je omzetten naar een ander datatype. Dit doe je door de naam van het datatype te schrijven en daarna de waarde tussen haakjes te zetten. Je kan bijvoorbeeld een string omzetten naar een integer. Dit doe je door ```parseInt()``` te gebruiken. Je kan ook een integer omzetten naar een string. Dit doe je door ```toString()``` te gebruiken.

Je kan de datatype van een variabele opvragen door de functie ```typeof()``` te gebruiken.
```javascript
var aantal = "5";
console.log(typeof(aantal)); //Output: string

aantal = parseInt(aantal);
console.log(typeof(aantal)); //Output: number
```
## If-statements in **JavaScript**

Een if-statement is een stuk code dat alleen wordt uitgevoerd als een voorwaarde waar is. De voorwaarde is een stuk code dat een Boolean waarde geeft. Als de waarde true is, wordt de code uitgevoerd. Als de waarde false is, wordt de code niet uitgevoerd.

Je kan een if-statement maken door het woord if te schrijven en daarna een voorwaarde te zetten. Daarna moet je een accolade openen en een tab gebruiken om de code te schrijven die wordt uitgevoerd als de voorwaarde waar is. <br> Als je de code wil schrijven die wordt uitgevoerd als de voorwaarde niet waar is, moet je na de if-statement else schrijven. Daarna moet je weer een accolade openen en een tab gebruiken om de code te schrijven die wordt uitgevoerd als de voorwaarde niet waar is.

```javascript
var aantal = 5;
if (aantal > 0) {
  console.log("Je hebt er" + aantal + " gekocht!");
} else {
  console.log("Je moet er minimaal 1 kopen!");
}
```

Je kan ook een if-statement maken die meerdere uitgangen heeft. Dit doe je door het woord else if te schrijven en daarna een voorwaarde te zetten. Daarna moet je een accolade openen en een tab gebruiken om de code te schrijven die wordt uitgevoerd als de voorwaarde waar is. <br> Als je de code wil schrijven die wordt uitgevoerd als de voorwaarde niet waar is, kun je ook hierna else schrijven. Daarna moet je weer een accolade openen en een tab gebruiken om de code te schrijven die wordt uitgevoerd als bijde voorwaarden niet waar zijn.

```javascript
var aantal = 5;
if (aantal > 0) {
  console.log("Je hebt er" + aantal + " gekocht!");
} else if (aantal == 0) {
  console.log("Je moet er minimaal 1 kopen!");
} else {
  console.log("Je kan er niet minder dan 0 kopen!");
}
```

{{< alert type = "info" >}}
### Vergelijking en Logische Operatoren
<!-- **==** is gelijk aan: true als links gelijk is aan rechts<br>
**>** is groter dan: true als links meer is dan rechts<br>
**>=** is groter of gelijk aan: true als links meer of gelijk is aan rechts<br>
**!=** is niet gelijk aan: true als links niet gelijk is aan rechts<br>
<br>
**&** en<br>
**|** of<br>
**!** niet -->
```javascript
console.log(75.0 == 4.0); // Output false, links is niet gelijk aan rechts
console.log(75.0 > 4.0); // Output true, links is groter dan rechts
console.log(75.0 >= 4.0); // Output true, links is groter of gelijk aan rechts
console.log(75.0 != 4.0); // Output true, links is niet gelijk aan rechts

console.log(true & false); // Output false, links en rechts zijn niet allebij true
console.log(true | false); // Output true, links of rechts is true
console.log(!true); // Output false, links is niet true
```
{{</ alert >}}

## Loops in **JavaScript**

Een while-loop is een stuk code dat wordt uitgevoerd zolang een voorwaarde waar is. De voorwaarde is een stuk code dat een Boolean waarde geeft. Als de waarde true is, wordt de code uitgevoerd. Als de waarde false is, wordt de code niet uitgevoerd.

Je kan een while-loop maken door het woord while te schrijven en daarna een voorwaarde te zetten. Daarna moet je een accolade openen en een tab gebruiken om de code te schrijven die wordt uitgevoerd als de voorwaarde waar is. <br> Als je de code wil schrijven die wordt uitgevoerd als de voorwaarde niet waar is, moet je na de while-loop else schrijven. Daarna moet je weer een accolade openen en een tab gebruiken om de code te schrijven die wordt uitgevoerd als de voorwaarde niet waar is.

```javascript
var aantal = 5;
while (aantal > 0) {
  console.log("Je hebt er" + aantal + " gekocht!");
  aantal = aantal - 1;
}
```

Je kan ook een for-loop maken. Dit is een loop die een aantal keer wordt uitgevoerd. Je kan een for-loop maken door het woord for te schrijven en daarna een variabele te zetten. Daarna moet je het woord in schrijven en daarna accolades openen. Tussen de accolades moet je het aantal keer schrijven dat de loop wordt uitgevoerd. Daarna moet je een accolade openen en een tab gebruiken om de code te schrijven die wordt uitgevoerd als de voorwaarde waar is. <br> Als je de code wil schrijven die wordt uitgevoerd als de voorwaarde niet waar is, moet je na de for-loop else schrijven. Daarna moet je weer een accolade openen en een tab gebruiken om de code te schrijven die wordt uitgevoerd als de voorwaarde niet waar is.

```javascript
for (var i = 0; i < 5; i++) {
  console.log("Je hebt er" + i + " gekocht!");
}
```
{{%/ putInDiv %}}