# Burkhard-Keller Tree (BK-Tree) JavaScript implements

The BK-tree is a simillar words fuzzy search algorithm,
you can use this package search the simillar words from a
long terms list.

The edit distance calc algorithm is [Damerau–Levenshtein distance](https://en.wikipedia.org/wiki/Damerau%E2%80%93Levenshtein_distance)

## USAGE

```js
import assert from "assert";
import BKTree from "../lib/bktree";

const words = [
"Aani", "aardvark", "aardwolf", "Aaron", "Aaronic",
"Aaronical", "Aaronite", "Aaronitic", "Aaru", "Ab",  "aba", "Ababdeh", "Ababua", "abac",
"abaca", "abacate", "abacay", "abacinate", "abacination", "abaciscus", "abacist", "aback",
"abactinal", "abactinally", "abaction", "abactor","abaculus", "abacus", "Abadite", "abaff",
"abaft", "abaisance", "abaiser", "abaissed", "abalienate", "abalienation", "abalone",
"Abama", "abampere", "abandon", "abandonable","abandoned", "abandonedly", "abandonee",
"abandoner", "abandonment","Abanic", "Abantes","abaptiston", "Abarambo", "Abaris",
"abarthrosis", "abarticular","abarticulation", "abas", "abase", "abased", "abasedly",
"abasedness", "abasement","abaser", "Abasgi", "abash", "abashed", "abashedly", "abashedness",
"abashless","abashlessly", "abashment", "abasia", "abasic", "abask", "Abassin",
"abastardize","abatable", "abate", "abatement", "abater", "abatis", "abatised", "abaton",
"abator","abattoir", "Abatua", "abature", "abave", "abaxial", "abaxile", "abaze", "abb",
"Abba","abbacomes", "abbacy", "Abbadide" ] ;


const bktree = new BKTree(words.length);
bktree.add(words);
console.log(bktree.simWords("anic", 2));
// [ 'Aani', 'Abanic' ]
```