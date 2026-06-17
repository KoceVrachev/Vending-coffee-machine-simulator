function coffeeMachine(milk, kgcoffee, kgSugar, litersWater, stick, teabag, cup )
{
let milkTankCapacityInMl=milk
let maxGrammOfCoffeeCapacity=kgcoffee
let maxGrammSugarCapacity=kgSugar
let maxTankWaterInMl=litersWater
let sticks=stick
let teaBags=teabag
let cups=cup

let espressoPrice=0.50
let doubleEspressoPrice=0.60
let regularCoffeeprice=0.60
let cappucchinoPrice=0.80
let latteMacchiatoPrice=0.90
let hotMilkPrice=0.50
let teaPrice=0.50
let cupPrice=0.20

let totalRevenue=0

const prompt= require(`prompt-sync`)()

while (milkTankCapacityInMl>=20&&maxGrammOfCoffeeCapacity>0.2&&maxGrammSugarCapacity>0.2&&maxTankWaterInMl>20&&sticks>1&&teaBags>1&&cups>1)
{
let insertedCoin=0
let change=0
let coinCounter=0
let sugarSelection=0

console.log("")
console.log("")
console.log (`HELLO!`)
console.log("")

console.log (`Menu`)
console.log(`1. Espresso - 0.50 Cents`)
console.log(`2. Double Espresso - 0.60 Cents`)
console.log(`3. Regular Coffee - 0.60 Cents`)
console.log(`4. Cappucchino - 0.80 Cents`)
console.log(`5. Latte Macchiato - 0.90 Cents`)
console.log(`6. Hot Milk - 0.50 Cents`)
console.log(`7. Tea - 0.50 Cents`)
console.log(`8. Cup - 0.20 Cents`)
console.log(`9. Admin Panel`)
console.log("")

let menuChoice=prompt(`Please, select the desired drink`)
console.log("")

if (menuChoice===`1`)
{
    console.log(`1. With sugar?`)
    console.log(`2. With double sugar?`)
    console.log(`3. Without sugar?`)
    console.log("")

    sugarSelection=Number(prompt(`Choose: `))
    console.log("")

    let coinInserted=Number(prompt(`Please, insert a coin`))
    console.log("")

    while (coinInserted<espressoPrice)
    {
        console.log(`Please, insert ${(espressoPrice-coinInserted).toFixed(2)} more.`)
        console.log("")
        coinInserted+=Number(prompt(`Insert another coin:`))
        console.log("")
    }
    coinInserted=Number(coinInserted.toFixed(2))
    console.log (`Preparing Espresso.....`)
    console.log("")

        if (sugarSelection===1)
        {
          maxGrammOfCoffeeCapacity-=0.2
          maxGrammSugarCapacity-=0.2
          maxTankWaterInMl-=20
          sticks-=1
          cups-=1
        }
        else if (sugarSelection===2)
        {
          maxGrammOfCoffeeCapacity-=0.2
          maxGrammSugarCapacity-=0.4
          maxTankWaterInMl-=20
          sticks-=1
          cups-=1
        }
        else if (sugarSelection===3)
        {
          maxGrammOfCoffeeCapacity-=0.2 
          maxTankWaterInMl-=20
          sticks-=1
          cups-=1
        }

    change=coinInserted-espressoPrice
    console.log(`Change: ${change.toFixed(2)}`)
    console.log("")
    totalRevenue+=espressoPrice
}

else if (menuChoice===`2`)
{
    console.log(`1. With sugar?`)
    console.log(`2. With extra sugar?`)
    console.log(`3. Without sugar?`)
    console.log("")

    sugarSelection=Number(prompt(`Choose: `))
    console.log("")

    let coinInserted=Number(prompt(`Please, insert a coin`))
    console.log("")

    while (coinInserted<doubleEspressoPrice)
    {
        console.log(`Please, insert ${(doubleEspressoPrice-coinInserted).toFixed(2)} more.`)
        console.log("")
        coinInserted+=Number(prompt(`Insert another coin:`))
        console.log("")
    }
    coinInserted=Number(coinInserted.toFixed(2))
    console.log (`Preparing Double Espresso.....`)
    console.log("")

        if (sugarSelection===1)
        {
          maxGrammOfCoffeeCapacity-=0.4
          maxGrammSugarCapacity-=0.2    
          maxTankWaterInMl-=40
          sticks-=1
          cups-=1
        }
        else if (sugarSelection===2)
        {
          maxGrammOfCoffeeCapacity-=0.4
          maxGrammSugarCapacity-=0.4    
          maxTankWaterInMl-=40
          sticks-=1
          cups-=1
        }
        else 
        {
           maxGrammOfCoffeeCapacity-=0.2 
           maxTankWaterInMl-=20
           sticks-=1
           cups-=1
        }

    change=coinInserted-doubleEspressoPrice
    console.log(`Change: ${change.toFixed(2)}`)
    console.log("")
    totalRevenue+=doubleEspressoPrice
}

else if (menuChoice===`3`)
{
    console.log(`1. With sugar?`)
    console.log(`2. With extra sugar?`)
    console.log(`3. Without sugar?`)
    console.log("")

    sugarSelection=Number(prompt(`Choose: `))
    console.log("")

    let coinInserted=Number(prompt(`Please, insert a coin`))
    console.log("")

    while (coinInserted<regularCoffeeprice)
    {
        console.log(`Please, insert ${(regularCoffeeprice-coinInserted).toFixed(2)} more.`)
        console.log("")
        coinInserted+=Number(prompt(`Insert another coin:`))
        console.log("")
    }
    coinInserted=Number(coinInserted.toFixed(2))
    console.log (`Preparing Regular Coffee.....`)
    console.log("")

        if (sugarSelection===1)
        {
          maxGrammOfCoffeeCapacity-=0.2
          maxGrammSugarCapacity-=0.2     
          maxTankWaterInMl-=40
          sticks-=1
          cups-=1
        }
        else if (sugarSelection===2)
        {
          maxGrammOfCoffeeCapacity-=0.2
          maxGrammSugarCapacity-=0.4     
          maxTankWaterInMl-=40
          sticks-=1
          cups-=1
        }
        else 
        {
           maxGrammOfCoffeeCapacity-=0.2
           maxTankWaterInMl-=40
           sticks-=1
           cups-=1
        }

    change=coinInserted-regularCoffeeprice
    console.log(`Change: ${change.toFixed(2)}`)
    console.log("")
    totalRevenue+=regularCoffeeprice
}

else if (menuChoice===`4`)
{
    console.log(`1. With sugar?`)
    console.log(`2. With extra sugar?`)
    console.log(`3. Without sugar?`)
    console.log("")

    sugarSelection=Number(prompt(`Choose: `))
    console.log("")

    let coinInserted=Number(prompt(`Please, insert a coin`))
    console.log("")

    while (coinInserted<cappucchinoPrice)
    {
        console.log(`Please, insert ${(cappucchinoPrice-coinInserted).toFixed(2)} more.`)
        console.log("")
        coinInserted+=Number(prompt(`Insert another coin:`))
        console.log("")
    }
    coinInserted=Number(coinInserted.toFixed(2))
    console.log (`Preparing Cappucchino.....`)
    console.log("")

        if (sugarSelection===1)
        {
          maxGrammOfCoffeeCapacity-=0.2
          maxGrammSugarCapacity-=0.2    
          maxTankWaterInMl-=20
          milkTankCapacityInMl-=30
          sticks-=1
          cups-=1
        }
        else if (sugarSelection===2)
        {
          maxGrammOfCoffeeCapacity-=0.2
          maxGrammSugarCapacity-=0.4    
          maxTankWaterInMl-=20
          milkTankCapacityInMl-=30
          sticks-=1
          cups-=1
        }
        else 
        {
           maxGrammOfCoffeeCapacity-=0.2 
           maxTankWaterInMl-=20
           milkTankCapacityInMl-=30
           sticks-=1
           cups-=1
        }

    change=coinInserted-cappucchinoPrice
    console.log(`Change: ${change.toFixed(2)}`)
    console.log("")
    totalRevenue+=cappucchinoPrice
}

else if (menuChoice===`5`)
{
    console.log(`1. With sugar?`)
    console.log(`2. With extra sugar?`)
    console.log(`3. Without sugar?`)
    console.log("")

    sugarSelection=Number(prompt(`Choose: `))
    console.log("")

    let coinInserted=Number(prompt(`Please, insert a coin`))
    console.log("")

    while (coinInserted<latteMacchiatoPrice)
    {
        console.log(`Please, insert ${(latteMacchiatoPrice-coinInserted).toFixed(2)} more.`)
        console.log("")
        coinInserted+=Number(prompt(`Insert another coin:`))
        console.log("")
    }
    coinInserted=Number(coinInserted.toFixed(2))
    console.log (`Preparing Latte Macchiato.....`)
    console.log("")

        if (sugarSelection===1)
        {
          maxGrammOfCoffeeCapacity-=0.2
          maxGrammSugarCapacity-=0.2    
          maxTankWaterInMl-=20
          milkTankCapacityInMl-=40
          sticks-=1
          cups-=1
        }
        else if (sugarSelection===2)
        {
          maxGrammOfCoffeeCapacity-=0.2
          maxGrammSugarCapacity-=0.4    
          maxTankWaterInMl-=20
          milkTankCapacityInMl-=40
          sticks-=1
          cups-=1
        }
        else 
        {
           maxGrammOfCoffeeCapacity-=0.2 
           maxTankWaterInMl-=20
           milkTankCapacityInMl-=40
           sticks-=1
           cups-=1
        }

    change=coinInserted-latteMacchiatoPrice
    console.log(`Change: ${change.toFixed(2)}`)
    console.log("")
    totalRevenue+=latteMacchiatoPrice
}

else if (menuChoice===`6`)
{
    console.log(`1. With sugar?`)
    console.log(`2. With extra sugar?`)
    console.log(`3. Without sugar?`)
    console.log("")

    sugarSelection=Number(prompt(`Choose: `))
    console.log("")

        let coinInserted=Number(prompt(`Please, insert a coin`))
        console.log("")

    while (coinInserted<hotMilkPrice)
    {
        console.log(`Please, insert ${(hotMilkPrice-coinInserted).toFixed(2)} more.`)
        console.log("")
        coinInserted+=Number(prompt(`Insert another coin:`))
        console.log("")
    }
    coinInserted=Number(coinInserted.toFixed(2))
    console.log (`Preparing Hot Milk.....`)
    console.log("")

        if (sugarSelection===1)
        {
          milkTankCapacityInMl-=70
          maxGrammSugarCapacity-=0.2
          sticks-=1
          cups-=1
        }
        else if (sugarSelection===2)
        {
          milkTankCapacityInMl-=70
          maxGrammSugarCapacity-=0.4
          sticks-=1
          cups-=1
        }
        else 
        {
           milkTankCapacityInMl-=70
           sticks-=1
           cups-=1
        }

    change=coinInserted-hotMilkPrice
    console.log(`Change: ${change.toFixed(2)}`)
    console.log("")
    totalRevenue+=hotMilkPrice
}

else if (menuChoice===`7`)
{
    console.log(`1. With sugar?`)
    console.log(`2. With extra sugar?`)
    console.log(`3. Without sugar?`)
    console.log("")

    sugarSelection=Number(prompt(`Choose: `))
    console.log("")

    let coinInserted=Number(prompt(`Please, insert a coin`))
    console.log("")

    while (coinInserted<teaPrice)
    {
        console.log(`Please, insert ${(teaPrice-coinInserted).toFixed(2)} more.`)
        console.log("")
        coinInserted+=Number(prompt(`Insert another coin:`))
        console.log("")
    }
    coinInserted=Number(coinInserted.toFixed(2))
    console.log (`Preparing Tea.....`)
    console.log("")

        if (sugarSelection===1)
        {
          teaBags-=1
          maxGrammSugarCapacity-=0.2
          maxTankWaterInMl-=70
          sticks-=1
          cups-=1
        }
        else if (sugarSelection===2)
        {
          teaBags-=1
          maxGrammSugarCapacity-=0.4
          maxTankWaterInMl-=70
          sticks-=1
          cups-=1
        }
        else 
        {
           teaBags-=1
           maxTankWaterInMl-=70
           sticks-=1
           cups-=1
        }

    change=coinInserted-teaPrice
    console.log(`Change: ${change.toFixed(2)}`)
    console.log("")
    totalRevenue+=teaPrice
}

else if (menuChoice===`8`)
{

    let coinInserted=Number(prompt(`Please, insert a coin`))
    console.log("")

    while (coinInserted<cupPrice)
    {
        console.log(`Please, insert ${(cupPrice-coinInserted).toFixed(2)} more.`)
        console.log("")
        coinInserted+=Number(prompt(`Insert another coin:`))
        console.log("")
    }
    coinInserted=Number(coinInserted.toFixed(2))
    console.log (`Giving Cup.....`)
    console.log("")
    cups-=1
    change=coinInserted-cupPrice
    console.log(`Change: ${change.toFixed(2)}`)
    console.log("")
    totalRevenue+=cupPrice
}

else if (menuChoice===`9`)
{
    console.log(`Please, fill in password! `)
    console.log("")
    let password=Number(prompt(`password: `))
    console.log("")

    if (password===1234)
    {
        console.log(`Welcome! `)
        console.log(`Below, you will find the current resources left: `)
        console.log(`Milk: ${milkTankCapacityInMl.toFixed(2)}`);
        console.log(`Coffee: ${maxGrammOfCoffeeCapacity.toFixed(2)}`);
        console.log(`Sugar: ${maxGrammSugarCapacity.toFixed(2)}`);
        console.log(`Water: ${maxTankWaterInMl.toFixed(2)}`);
        console.log(`Sticks: ${sticks.toFixed(2)}`);
        console.log(`Tea Bags: ${teaBags.toFixed(2)}`);
        console.log(`Cups: ${cups.toFixed(2)}`);
        console.log(`Total revenue: ${totalRevenue} Euro`)
        console.log("")

        let refilChoice=0
        
        while (refilChoice!==8)
        {

        console.log (`Please, choose which resources would you like to refil ?`)
        console.log(`1. Milk`)
        console.log(`2. Coffee`)
        console.log(`3. Sugar`)
        console.log(`4. Water`)
        console.log(`5. Sticks`)
        console.log(`6. Tea Bags`)
        console.log(`7. Cups`)
        console.log(`8. Exit Admin Panel`)
        console.log("")

        refilChoice=Number(prompt(`Choose: `))
        console.log("")
        let refilAmount=0

        if (refilChoice===1)
        {
            if (milkTankCapacityInMl===5000)
            {
                console.log(`Milk tank is already full! `)
                console.log("")
            }
            else 
            {

            while (milkTankCapacityInMl<5000)
            {
               console.log(`Current Milk: ${milkTankCapacityInMl} ml. Do NOT exceed 5000 ml!`)
               console.log("")
               refilAmount=Number(prompt(`Place amount in ml.: `))
               console.log("")

               milkTankCapacityInMl+=refilAmount

               if (milkTankCapacityInMl<5000)
               {
                console.log(`New milk quantity: ${milkTankCapacityInMl} ml. Would you like to add more ?`)
                console.log(`1. Yes`)
                console.log(`2. No`)
                console.log("")
                let toAddMoreOrNot=Number(prompt(`Choose: `))
                console.log("")

                    if (toAddMoreOrNot===1)
                    {
                        refilAmount=Number(prompt(`Place amount in ml.: `))
                        console.log("")
                        milkTankCapacityInMl+=refilAmount
                    }
                    else 
                    {
                        break
                    }
               }
               else 
               {
                console.log(`Milk capacity exceeded! Please remove ${(milkTankCapacityInMl-5000).toFixed(2)} ml.`)
                console.log("")
                let removeAmount=Number(prompt(`Remove Amount: `))
                console.log("")
                milkTankCapacityInMl-=removeAmount

                     while(milkTankCapacityInMl>5000)
                     {
                        console.log(`Milk capacity exceeded! Please remove ${(milkTankCapacityInMl-5000).toFixed(2)} ml.`)
                        console.log("")
                        let additionalRemoveAmount=Number(prompt(`Remove Amount: `))
                        console.log("")
                        milkTankCapacityInMl-=additionalRemoveAmount
                     }
               }
            }
        }
            
        }

        else if (refilChoice===2)
        {

            if (maxGrammOfCoffeeCapacity===5000)
            {
                console.log(`Coffee container is already full! `)
                console.log("")
            }
            else 
            {
            while (maxGrammOfCoffeeCapacity<5000)
            {
               console.log(`Current Coffee: ${maxGrammOfCoffeeCapacity} gramms. Do NOT exceed 5000 gramms!`)
               console.log("")
               refilAmount=Number(prompt(`Place amount in gramms.: `))
               console.log("")

               maxGrammOfCoffeeCapacity+=refilAmount

               if (maxGrammOfCoffeeCapacity<5000)
               {
                console.log(`New coffee quantity: ${maxGrammOfCoffeeCapacity} gramms. Would you like to add more ?`)
                console.log(`1. Yes`)
                console.log(`2. No`)
                console.log("")
                let toAddMoreOrNot=Number(prompt(`Choose: `))
                console.log("")

                    if (toAddMoreOrNot===1)
                    {
                        refilAmount=Number(prompt(`Place amount in gramms.: `))
                        console.log("")
                        maxGrammOfCoffeeCapacity+=refilAmount
                    }
                    else 
                    {
                        break
                    }
               }
               else 
               {
                console.log(`Coffee capacity exceeded! Please remove ${(maxGrammOfCoffeeCapacity-5000).toFixed(2)} gramms.`)
                console.log("")
                let removeAmount=Number(prompt(`Remove Amount: `))
                console.log("")
                maxGrammOfCoffeeCapacity-=removeAmount

                     while(maxGrammOfCoffeeCapacity>5000)
                     {
                        console.log(`Coffee capacity exceeded! Please remove ${(maxGrammOfCoffeeCapacity-5000).toFixed(2)} gramms.`)
                        console.log("")
                        let additionalRemoveAmount=Number(prompt(`Remove Amount: `))
                        console.log("")
                        maxGrammOfCoffeeCapacity-=additionalRemoveAmount
                     }
               }
            }
        }
        }

        else if (refilChoice===3)
        {
            if (maxGrammSugarCapacity===500)
            {
                console.log(`Sugar container is alrady full!`)
                console.log("")
            }
            else
            {
            while (maxGrammSugarCapacity<500)
            {
               console.log(`Current sugar: ${maxGrammSugarCapacity} gramms. Do NOT exceed 500 gramms!`)
               console.log("")
               refilAmount=Number(prompt(`Place amount in gramms.: `))
               console.log("")

               maxGrammSugarCapacity+=refilAmount

               if (maxGrammSugarCapacity<500)
               {
                console.log(`New sugar quantity: ${maxGrammSugarCapacity} gramms. Would you like to add more ?`)
                console.log(`1. Yes`)
                console.log(`2. No`)
                console.log("")
                let toAddMoreOrNot=Number(prompt(`Choose: `))
                console.log("")

                    if (toAddMoreOrNot===1)
                    {
                        refilAmount=Number(prompt(`Place amount in gramms.: `))
                        console.log("")
                        maxGrammSugarCapacity+=refilAmount
                    }
                    else 
                    {
                        break
                    }
               }
               else 
               {
                console.log(`Sugar capacity exceeded! Please remove ${(maxGrammSugarCapacity-500).toFixed(2)} gramms.`)
                console.log("")
                let removeAmount=Number(prompt(`Remove Amount: `))
                console.log("")
                maxGrammSugarCapacity-=removeAmount

                     while(maxGrammSugarCapacity>500)
                     {
                        console.log(`Sugar capacity exceeded! Please remove ${(maxGrammSugarCapacity-500).toFixed(2)} gramms.`)
                        console.log("")
                        let additionalRemoveAmount=Number(prompt(`Remove Amount: `))
                        console.log("")
                        maxGrammSugarCapacity-=additionalRemoveAmount
                     }
               }
            }
        }
            
        }

        else if (refilChoice===4)
        {
            if (maxTankWaterInMl===5000)
            {
                console.log(`The water tank is already full! `)
                console.log("")
            }
            else 
            {
            while (maxTankWaterInMl<5000)
            {
               console.log(`Current water: ${maxTankWaterInMl} ml. Do NOT exceed 5000 ml!`)
               console.log("")
               refilAmount=Number(prompt(`Place amount in ml.: `))
               console.log("")

               maxTankWaterInMl+=refilAmount

               if (maxTankWaterInMl<5000)
               {
                console.log(`New water quantity: ${maxTankWaterInMl} ml. Would you like to add more ?`)
                console.log(`1. Yes`)
                console.log(`2. No`)
                console.log("")
                let toAddMoreOrNot=Number(prompt(`Choose: `))
                console.log("")

                    if (toAddMoreOrNot===1)
                    {
                        refilAmount=Number(prompt(`Place amount in ml.: `))
                        console.log("")
                        maxTankWaterInMl+=refilAmount
                    }
                    else 
                    {
                        break
                    }
               }
               else 
               {
                console.log(`Water capacity exceeded! Please remove ${(maxTankWaterInMl-5000).toFixed(2)} ml.`)
                console.log("")
                let removeAmount=Number(prompt(`Remove Amount: `))
                console.log("")
                maxTankWaterInMl-=removeAmount

                     while(maxTankWaterInMl>5000)
                     {
                        console.log(`Water capacity exceeded! Please remove ${(maxTankWaterInMl-5000).toFixed(2)} ml.`)
                        console.log("")
                        let additionalRemoveAmount=Number(prompt(`Remove Amount: `))
                        console.log("")
                        maxTankWaterInMl-=additionalRemoveAmount
                     }
               }
            }
        }
        }

        else if (refilChoice===5)
        {
            if (sticks===500)
            {
                console.log(`Sticks are already full! `)
                console.log("")
            }
            else 
            {
            while (sticks<500)
            {
               console.log(`Current sticks: ${sticks} pieces. Do NOT exceed 500 pieces!`)
               console.log("")
               refilAmount=Number(prompt(`Place amount in number.: `))
               console.log("")

               sticks+=refilAmount

               if (sticks<500)
               {
                console.log(`New sticks quantity: ${sticks} pieces. Would you like to add more ?`)
                console.log(`1. Yes`)
                console.log(`2. No`)
                console.log("")
                let toAddMoreOrNot=Number(prompt(`Choose: `))
                console.log("")

                    if (toAddMoreOrNot===1)
                    {
                        refilAmount=Number(prompt(`Place amount in number.: `))
                        console.log("")
                        sticks+=refilAmount
                    }
                    else 
                    {
                        break
                    }
               }
               else 
               {
                console.log(`Sticks capacity exceeded! Please remove ${(sticks-500).toFixed(2)} pieces.`)
                console.log("")
                let removeAmount=Number(prompt(`Remove Amount: `))
                console.log("")
                sticks-=removeAmount

                     while(sticks>500)
                     {
                        console.log(`Sticks capacity exceeded! Please remove ${(sticks-500).toFixed(2)} pieces.`)
                        console.log("")
                        let additionalRemoveAmount=Number(prompt(`Remove Amount: `))
                        console.log("")
                        sticks-=additionalRemoveAmount
                     }
               }
            }
        }
        }

        else if (refilChoice===6)
        {
            if (teaBags===100)
            {
                console.log(`Tea bags are already full! `)
                console.log("")
            }
            else 
            {
            while (teaBags<100)
            {
               console.log(`Current tea bags: ${teaBags} pieces. Do NOT exceed 100 pieces!`)
               console.log("")
               refilAmount=Number(prompt(`Place amount in number.: `))
               console.log("")

               teaBags+=refilAmount

               if (teaBags<100)
               {
                console.log(`New tea bags quantity: ${teaBags} pieces. Would you like to add more ?`)
                console.log(`1. Yes`)
                console.log(`2. No`)
                console.log("")
                let toAddMoreOrNot=Number(prompt(`Choose: `))
                console.log("")

                    if (toAddMoreOrNot===1)
                    {
                        refilAmount=Number(prompt(`Place amount in number.: `))
                        console.log("")
                        teaBags+=refilAmount
                    }
                    else 
                    {
                        break
                    }
               }
               else 
               {
                console.log(`Tea bags capacity exceeded! Please remove ${(teaBags-100).toFixed(2)} pieces.`)
                console.log("")
                let removeAmount=Number(prompt(`Remove Amount: `))
                console.log("")
                teaBags-=removeAmount

                     while(teaBags>100)
                     {
                        console.log(`Tea bags capacity exceeded! Please remove ${(teaBags-100).toFixed(2)} pieces.`)
                        console.log("")
                        let additionalRemoveAmount=Number(prompt(`Remove Amount: `))
                        console.log("")
                        teaBags-=additionalRemoveAmount
                     }
               }
            }
        }
        }

        else if (refilChoice===7)
        {
            if (cups===500)
            {
                console.log(`Cups are already full! `)
                console.log("")
            }
            else 
            {
            while (cups<500)
            {
               console.log(`Current cups: ${cups} pieces. Do NOT exceed 500 pieces!`)
               console.log("")
               refilAmount=Number(prompt(`Place amount in number.: `))
               console.log("")

               cups+=refilAmount

               if (cups<500)
               {
                console.log(`New cups quantity: ${cups} pieces. Would you like to add more ?`)
                console.log(`1. Yes`)
                console.log(`2. No`)
                console.log("")
                let toAddMoreOrNot=Number(prompt(`Choose: `))
                console.log("")

                    if (toAddMoreOrNot===1)
                    {
                        refilAmount=Number(prompt(`Place amount in number.: `))
                        console.log("")
                        cups+=refilAmount
                    }
                    else 
                    {
                        break
                    }
               }
               else 
               {
                console.log(`Cups capacity exceeded! Please remove ${(cups-500).toFixed(2)} pieces.`)
                console.log("")
                let removeAmount=Number(prompt(`Remove Amount: `))
                console.log("")
                cups-=removeAmount

                     while(cups>500)
                     {
                        console.log(`Cups capacity exceeded! Please remove ${(cups-500).toFixed(2)} pieces.`)
                        console.log("")
                        let additionalRemoveAmount=Number(prompt(`Remove Amount: `))
                        console.log("")
                        cups-=additionalRemoveAmount
                     }
               }
            }
        }
        }

        else if (refilChoice===8)
        {
            console.log(`See you soon Admin!`)
            console.log("")
        }

        else 
        {
            console.log(`Invalid choice! `)
            console.log("")
        }
    }
    }
    else 
    {
        console.log(`Wrong Password!`)
    }

}

else 
{
    console.log(`Invalid choice !`)
    console.log("")
}
}
}
coffeeMachine(5000, 5000, 500, 5000, 500, 100, 500)