function josIterative(n, k) {
    let soldiers = [];
    for (let i = 1; i <= n; i++) soldiers.push(i);
    
    let deathOrder = [];
    
    while (soldiers.length !== 1) {
        for (let skip = 1; skip < k; skip++) soldiers.push(soldiers.shift());
        deathOrder.push(soldiers.shift());
    }
    
    console.log("Death order is " + deathOrder.join(" "));
    return soldiers[0]; 
    }
    
    console.log(josIterative(7, 2) + " is survivor");