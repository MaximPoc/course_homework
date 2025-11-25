var services = {
  "стрижка": "60 грн",
  "гоління": "80 грн",
  "Миття голови": "100 грн"
};

services["Розбити скло"] = "200 грн";

// Загальна сума
function price() {
  var sum = 0;

  for (var key in services) {
    var num = parseInt(services[key]);
    sum += num;
  }

  return sum;
}

// Мінімальна ціна
function minPrice() {
  var prices = [];
  var i = 0;

  for (var key in services) {
    var num = parseInt(services[key]);
    prices[i] = num;
    i++;
  }

  return Math.min(...prices);
}

// Максимальна ціна
function maxPrice() {
  var prices = [];
  var i = 0;

  for (var key in services) {
    var num = parseInt(services[key]);
    prices[i] = num;
    i++;
  }

  return Math.max(...prices);
}

console.log("Загальна вартість:", price(), "грн");
console.log("Мінімальна ціна:", minPrice(), "грн");
console.log("Максимальна ціна:", maxPrice(), "грн");