interface headerDT {
  characterName: string;
  classAndLevel: string;
  origin: string;
  playerName: string;
  species: string;
  worldView: string;
  expirience: string;
}
interface inventoryDT {
  copperCoins: any;
  silverCoins: any;
  electrumCoins: any;
  goldenCoins: any;
  platinumCoins: any;
  otherItems: string;
}
interface descriptionDT{
  personality: string;
  ideals: string;
  bonds: string;
  flaws: string;
}
interface combatDT{
  armorClass: string;
  initiative: string;
  speed: string;
  maxHP: string;
  currentHP: string;
  temporaryHP: string;
  totalHD: string;
  diceName: string;
  successFirst: any;
  successSecond: any;
  successThird: any;
  failureFirst: any;
  failureSecond: any;
  failureThird: any;
}
interface attacksSpellsDT{
  firstWeaponName: string;
  secondWeaponName: string;
  thirdWeaponName: string;
  firstWeaponBonus: string;
  secondWeaponBonus: string;
  thirdWeaponBonus: string;
  firstWeaponDamage: string;
  secondWeaponDamage: string;
  thirdWeapondamage: string;
  otherWeaponSpells: string;
}
interface statsDT {
  strength: any;
  dexterity: any;
  constitution: any;
  intelligence: any;
  wisdom: any;
  charisma: any;

  inspiration: any;
  profienceBonus: string;

  strengthChalChb: any;
  dexterityChalChb: any;
  constitutionChalChb: any;
  intelligenceChalChb: any;
  wisdomChalChb: any;
  charismaChalChb: any;

  strengthChalVal: any;
  dexterityChalVal: any;
  constitutionChalVal: any;
  intelligenceChalVal: any;
  wisdomChalVal: any;
  charismaChalVal: any;

  acrobaticsChb: any;
  athleticsChb: any;
  perceptionChb: any;
  survivalChb: any;
  handlingChb: any;
  intimidationChb: any;
  perfomanceChb: any;
  historyChb: any;
  sleightOfHandChb: any;
  arcanaChb: any;
  medicineChb: any;
  deceptionChb: any;
  natureChb: any;
  insightChb: any;
  investigationChb: any;
  religionChb: any;
  stealthChb: any;
  persuasionChb: any;

  acrobaticsVal: any;
  athleticsVal: any;
  perceptionVal: any;
  survivalVal: any;
  handlingVal: any;
  intimidationVal: any;
  perfomanceVal: any;
  historyVal: any;
  sleightOfHandVal: any;
  arcanaVal: any;
  medicineVal: any;
  deceptionVal: any;
  natureVal: any;
  insightVal: any;
  investigationVal: any;
  religionVal: any;
  stealthVal: any;
  persuasionVal: any;
}
