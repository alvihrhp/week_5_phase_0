function attack (damage) {
    let serangan = damage - 2;
    return serangan;
}

function damageCalculation (numberOfAttacks, damagePerAttack) {
    let total = numberOfAttacks * attack(damagePerAttack);
    return total;
}

// TEST CASE
console.log(damageCalculation(9, 25)); // 207

console.log(damageCalculation(10, 4)); // 20

console.log(damageCalculation(5, 20)); // 90