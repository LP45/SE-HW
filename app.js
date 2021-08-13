/*
1.Understand the Problem
2.Devise a plan
3.Carry Out the plan
4.Look Back
*/

//There are six alien ships.THEY attack one at a time. they will wait to see the outcome of a battle before deploying another alien ship.

//USER(USS Schwarzenegger) gets to attack first. USER can only attack the aliens in order. After you have destroyed a ship, you have the option to make a hasty retreat. A game round would look like this: - You attack the first alien ship - If the ship survives, it attacks you - If you survive, you attack the ship again - If it survives, it attacks you again - Etc.
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//1.Ask user to either attack or retreat. If user retreats THE GAME is OVER. If user eneter attack. THE GAME BEGINS

//1. Create Class Spaceships With Attributes of  hull - between `3` and `6` * firepower - between `2` and `4` * accuracy - between `.6` and `.8` You could be battling six alien ships each with unique values. 

//2. create Object for USER = USS Schwarzenegger. It should have the following properties: * **hull** - `20` * **firepower** - `5` * **accuracy** - `.7` **

//3.****accuracy**** is the chance between 0 and 1 that the ship will HIT! its target. - Every time the ship will attack, calculate the chance that the damage will hit the opposing ship using `Math.random()` - If the ship's accuracy is `0.8` - then if the number generated from `Math.random()` is less than or equal to `0.8` then the attack will be successful. If the value is greater than `0.8` then the attack has missed. 

//4.Create Methods in USER classes to attack, and reatreat

//4.create method in ALIENS to attack

//EX. You are attcking alein
//You hit alien
//You have done 5 damage
//Alien has 1 hull remaining
//ALIENS' turn.



class Spaceships {
    constructor(hull, firepower, accuracy) {
        this.hull = hull;
        this.firepower = firepower;
        this.accuracy = accuracy

    }


    //Indentify the alien to attack before shooting!
    //If your accuracy FAILS it is the alien's TURN to SHOOT
    //If accuracy is sucessfull SHOOT alien
    //Shoot the alien until it has died before going to the next 1.
    // How to get the program to attack again if missed - loop LINES 65 - 72 so that it can attack multiple times
    //BOSS ALIEN is the last alien

    //Start a loop to(FOR) attack each alien 1 by 1.
    //Then through each alien



    //turn =1 ==user
    //turn = 2 ==aliens
    //while loop(if turn == 1 user will attack){
    //user attacks
    //flip turn
    //}
    attackAlien() {
        let attack = Math.random();
        console.log(attack);
        if (attack >= 0.01 && attack <= user.accuracy) {

            for (let i = 0; i < aliens.length; i++) {
                if (aliens[i].hull >= 0) {
                    let health = aliens[i].hull - user.firepower;//what are these actual numbers
                    //if successfull loop through the next alien

                    if (health <= 0) {
                        console.log(`alien${i} has been terminated!`);
                        break;

                    }


                    else if (health > 0) {

                        console.log("THE ALIEN Ship has been hit! Please take them down")
                        console.log("The alien's health is now " + health)

                        //attackUser();
                    }

                }

            }


        }
        else {
            console.log('You have missed');
            //attackUser()
        }



    }


    attackUser() {
        let attack = Math.random();
        console.log(attack);


        if (attack >= 0 && attack <= .8) {
            for (let i = 0; i < user.hull; i++) {
                let health = user.hull - aliens[i].firepower;
                if (health <= 0) {
                    console.log('user has been terminated!')

                }


                else if (health > 0) {

                    console.log("THE USSR Ship has been hit!")
                    console.log("The user's health is now " + health)
                    console.log("USSR DO NOT GIVE UP! FIGHT LIKE HELL!")

                }



            }


        }
        else {
            console.log('Alien have missed');
            
        }

   

        // retreat() {
          //  console.log(userAnswer + " You took he coward way out!")
    }


}


const alien1 = new Spaceships(4, 2, .6)
const alien2 = new Spaceships(6, 4, .8)
const alien3 = new Spaceships(6, 3, .7)
const alien4 = new Spaceships(5, 2, .8)
const alien5 = new Spaceships(5, 4, .6)
const alien6 = new Spaceships(4, 2, .6)
const bossAlien = new Spaceships(6, 4, .6)
const aliens = [{alien1}, {alien2}, {alien3}, {alien4}, {alien5}, {alien6}, {bossAlien}];



alert("Welcome to Humans vs Aliens! ")

const user = new Spaceships(20, 5, .7)

question();




function question() {
    let userAnswer = prompt("Attack or Retreat")
    userAnswer = userAnswer.toLowerCase();
    if (userAnswer === 'retreat') {
        alert("You have retreat! The game is over")
    }
    else if (userAnswer === 'attack') {
        console.log("FIGHT!")
        let turn = 1;
        while (turn > 0) {
            if (turn === 1) {
                //user attack alien
                //If user defeats 1st alien ask question

                aliens.attackAlien()
                turn = 2

            }
            if (turn === 2) {
                //aliem attack user
                user.attackUser()
                turn = 1;

            }
        }
    }
}














/*for (let i = 0; i <aliens.length; i++) {
    console.log(aliens[i])
    if(attack >= 0 && attack<= .8){
            if (aliens[i].hull <= 0) {
                console.log('Alien has been terminated!')
            }

            if(aliens[i].hull > 0) {
                    console.log("THE ALIEN Ship has been hit! Please take them down")
                    aliens[i].hull =-user.firepower;
                    console.log("The alien's health is now " +aliens[i].hull )
            }
    }
            else{
                console.log('You have missed')
                attackUser();
            }


}*/






////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


























//1. Create Class Aliens With Attributes of  hull - between `3` and `6` * firepower - between `2` and `4` * accuracy - between `.6` and `.8` You could be battling six alien ships each with unique values. 




/*  user={
  name: "USS Schwarzenegger",
  hull: 20,
  firepower:5,
  accuracy:.7,
  attack:function attack(){
              //attack aliens with math.random
              },
  retreat: function retreat(){

  }

  }*/






/* let attack = Math.floor(Math.random() * 2);

        for (let i = 0; i <aliens.length ; i++) {

            if (aliens[i].hull <= 0) {
                console.log('Alien has been terminated!')
            }

                else if(attack >=0 && attack<=.8) {
                    console.log("THE ALIEN has been hit! Please take them down")
                    aliens[i].hull =-user.firepower;
                    console.log("The alien's health is now " +aliens[i].hull )
                }
                else{
                    console.log('You have missed')
                    return attackUser()
                }
        }
 */