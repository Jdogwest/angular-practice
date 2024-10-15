interface IHeader {
  characterName: string;
  classAndLevel: string;
  origin: string;
  playerName: string;
  species: string;
  worldView: string;
  expirience: string;
}
interface IInventory {
  copperCoins: number | undefined;
  silverCoins: number | undefined;
  electrumCoins: number | undefined;
  goldenCoins: number | undefined;
  platinumCoins: number | undefined;
  otherItems: string;
}
interface IDescription{
  personality: string;
  ideals: string;
  bonds: string;
  flaws: string;
}
interface ICombat{
  armorClass: string;
  initiative: string;
  speed: string;
  maxHP: string;
  currentHP: string;
  temporaryHP: string;
  totalHD: string;
  diceName: string;
  successFirst: boolean;
  successSecond: boolean;
  successThird: boolean;
  failureFirst: boolean;
  failureSecond: boolean;
  failureThird: boolean;
}
interface IAttacksSpells{
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
interface IStats {
  strength: number;
  dexterity: number;
  constitution: number;
  intelligence: number;
  wisdom: number;
  charisma: number;

  inspiration: number;
  profienceBonus: string;

  strengthChalChb: boolean;
  dexterityChalChb: boolean;
  constitutionChalChb: boolean;
  intelligenceChalChb: boolean;
  wisdomChalChb: boolean;
  charismaChalChb: boolean;

  strengthChalVal: number;
  dexterityChalVal: number;
  constitutionChalVal: number;
  intelligenceChalVal: number;
  wisdomChalVal: number;
  charismaChalVal: number;

  acrobaticsChb: boolean;
  athleticsChb: boolean;
  perceptionChb: boolean;
  survivalChb: boolean;
  handlingChb: boolean;
  intimidationChb: boolean;
  perfomanceChb: boolean;
  historyChb: boolean;
  sleightOfHandChb: boolean;
  arcanaChb: boolean;
  medicineChb: boolean;
  deceptionChb: boolean;
  natureChb: boolean;
  insightChb: boolean;
  investigationChb: boolean;
  religionChb: boolean;
  stealthChb: boolean;
  persuasionChb: boolean;

  acrobaticsVal: number;
  athleticsVal: number;
  perceptionVal: number;
  survivalVal: number;
  handlingVal: number;
  intimidationVal: number;
  perfomanceVal: number;
  historyVal: number;
  sleightOfHandVal: number;
  arcanaVal: number;
  medicineVal: number;
  deceptionVal: number;
  natureVal: number;
  insightVal: number;
  investigationVal: number;
  religionVal: number;
  stealthVal: number;
  persuasionVal: number;
}
