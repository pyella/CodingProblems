
function Sword(desc) {
    this.weaponType = "Sword";
    this.metal = desc.metal || "Steel";
    this.style = desc.style || "LONG SWORD";
    this.hasMagic = desc.hasMagic || false;
}

function Bow(desc) {
    this.weaponType = "Bow";
    this.metal = desc.metal || "Wood";
    this.style = desc.style || "LONG BOW";
    this.hasMagic = desc.hasMagic || false;
}

function WeaponFactory() {};

WeaponFactory.prototype.makeWeapon = function(desc) {
  let weaponClass = null;

  if(desc.weaponType === "Sword") {
      weaponClass = Sword;
  }
  else if (desc.weaponType === "Bow") {
      weaponClass = Bow;
  }
  else {
      return false;
  }

  return new weaponClass(desc);
};

var myWeaponFact = new WeaponFactory();

var bladeFist = myWeaponFact.makeWeapon({
    weaponType: "Sword",
    metal : "Dark Iron",
    style: "Scythe",
    hasMagic: true
});

console.log(bladeFist.weaponType + " " + bladeFist.metal + " " + bladeFist.style + " " + bladeFist.hasMagic)