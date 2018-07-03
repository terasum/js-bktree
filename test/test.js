import assert from "assert";
import BKTree from "../lib/bktree";

// --------------------
// BKTree tests
// --------------------
const words = [
  "浙大", "浙江大学", "浙江大学软件学院", "浙大软院",
  "accommodate", "accommodation", "achieve", "across",
  "aggression", "aggressive", "apparently", "appearance",
  "argument", "assassination", "basically", "beginning",
  "believe", "bizarre", "business", "calendar",
  "caribbean", "cemetery", "chauffeur", "colleague",
  "coming", "committee", "completely", "conscious",
  "curiosity", "definitely", "dilemma", "disappear",
  "disappoint", "ecstasy", "embarrass", "environment",
  "existence", "fahrenheit", "familiar", "finally",
  "fluorescent", "foreign", "foreseeable", "forty",
  "forward", "friend", "further", "gist",
  "glamorous", "government", "guard", "happened",
  "harass", "harassment", "honorary", "humorous",
  "idiosyncrasy", "immediately", "incidentally", "independent",
  "interrupt", "irresistible", "knowledge", "liaise",
  "liaison", "lollipop", "millennia", "millennium",
  "neanderthal", "necessary", "noticeable", "occasion",
  "occurred", "occurrence", "occurring", "pavilion",
  "persistent", "pharaoh", "piece", "politician",
  "portuguese", "possession", "preferred", "preferring",
  "propaganda", "publicly", "really", "receive",
  "referred", "referring", "religious", "remember",
  "resistance", "sense", "separate", "siege",
  "successful", "supersede", "surprise", "tattoo",
  "tendency", "therefore", "threshold", "tomorrow",
  "tongue", "truly", "unforeseen", "unfortunately",
  "until", "weird", "wherever", "which",
];


describe("simWord", () => {
  const bktree = new BKTree(words.length);
  bktree.add(words);
  it("should return the same word list", () => {
    assert.equal(bktree.simWords("浙大", 3)[0], "浙大");
    assert.equal(bktree.simWords("浙大", 3)[1], "浙江大学");
    assert.equal(bktree.simWords("浙大", 3)[2], "浙大软院");
  });
});
