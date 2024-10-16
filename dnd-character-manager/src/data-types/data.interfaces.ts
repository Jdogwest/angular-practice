interface IHeader {
  characterName: string;
  classAndLevel: string;
  expirience: string;
  origin: string;
  playerName: string;
  species: string;
  worldView: string;
}
interface IInventory {
  copperCoins: number | undefined;
  electrumCoins: number | undefined;
  goldenCoins: number | undefined;
  otherItems: string;
  platinumCoins: number | undefined;
  silverCoins: number | undefined;
}
interface IDescription{
  bonds: string;
  flaws: string;
  ideals: string;
  personality: string;
}
interface ICombat{
  armorClass: string;
  currentHP: string;
  diceName: string;
  failureFirst: boolean;
  failureSecond: boolean;
  failureThird: boolean;
  initiative: string;
  maxHP: string;
  speed: string;
  successFirst: boolean;
  successSecond: boolean;
  successThird: boolean;
  temporaryHP: string;
  totalHD: string;
}
interface IAttacksSpells{
  firstWeaponBonus: string;
  firstWeaponDamage: string;
  firstWeaponName: string;
  otherWeaponSpells: string;
  secondWeaponBonus: string;
  secondWeaponDamage: string;
  secondWeaponName: string;
  thirdWeaponBonus: string;
  thirdWeapondamage: string;
  thirdWeaponName: string;
}
interface IStats {
  charisma: number;
  constitution: number;
  dexterity: number;
  inspiration: number;
  intelligence: number;
  profienceBonus: string;
  strength: number;
  wisdom: number;

  charismaChalChb: boolean;
  constitutionChalChb: boolean;
  dexterityChalChb: boolean;
  intelligenceChalChb: boolean;
  strengthChalChb: boolean;
  wisdomChalChb: boolean;

  charismaChalVal: number;
  constitutionChalVal: number;
  dexterityChalVal: number;
  intelligenceChalVal: number;
  strengthChalVal: number;
  wisdomChalVal: number;

  acrobaticsChb: boolean;
  arcanaChb: boolean;
  athleticsChb: boolean;
  deceptionChb: boolean;
  handlingChb: boolean;
  historyChb: boolean;
  insightChb: boolean;
  intimidationChb: boolean;
  investigationChb: boolean;
  medicineChb: boolean;
  natureChb: boolean;
  perceptionChb: boolean;
  perfomanceChb: boolean;
  persuasionChb: boolean;
  religionChb: boolean;
  sleightOfHandChb: boolean;
  stealthChb: boolean;
  survivalChb: boolean;

  acrobaticsVal: number;
  arcanaVal: number;
  athleticsVal: number;
  deceptionVal: number;
  handlingVal: number;
  historyVal: number;
  insightVal: number;
  intimidationVal: number;
  investigationVal: number;
  medicineVal: number;
  natureVal: number;
  perceptionVal: number;
  perfomanceVal: number;
  persuasionVal: number;
  religionVal: number;
  sleightOfHandVal: number;
  stealthVal: number;
  survivalVal: number;
}
