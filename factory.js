// FACTORY PATTERN
// It is used to create an interface which is used for creating objects
// and it lets the subclasses decide which classes to instantiate.

// Used in applications to manage and maintain and manipulate a collection of objects that are different.
// But at the same time have many common characteristics and a good example of that would be a member.

// It is good to have if you have different object with same properties.
function MemberFactory() {
  this.createMember = function(name, type) {
    let member;

    if (type === "general") {
      member = new SimpleMembership(name);
    } else if (type === "standard") {
      member = new StandardMembership(name);
    } else if (type === "premium") {
      member = new PremiumMembership(name);
    }

    member.type = type;
    member.define = function() {
      console.log(`${this.name} (${this.type}): ${this.cost}`);
    };
    return member;
  };
}

const SimpleMembership = function(name) {
  this.name = name;
  this.cost = "$5";
};

const StandardMembership = function(name) {
  this.name = name;
  this.cost = "$15";
};

const PremiumMembership = function(name) {
  this.name = name;
  this.cost = "$25";
};

const members = [];
const factory = new MemberFactory();

members.push(factory.createMember("John", "general"));
members.push(factory.createMember("James", "premium"));
members.push(factory.createMember("Jessica", "general"));
members.push(factory.createMember("Jordan", "standard"));

// console.log(members);

members.forEach(member => member.define());
console.log(members);
