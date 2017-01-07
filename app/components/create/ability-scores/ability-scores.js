'use strict'

var ctrl = function($scope, $rootScope, CharacterService){
    var self = this;
    var char = CharacterService.getCharacter();
    self.statPoints = []
    self.displayRolls = false;
    // Player ability scores
    self.str = 0;
    self.dex = 0;
    self.con = 0;
    self.int = 0;
    self.wis = 0;
    self.cha = 0;

    var abilityRoll = function(){
        var rolls = [];
        var total = 0;
        var min = 7;

        // Roll 4d6
        for(var i = 0; i < 4; i++){
            rolls.push(CharacterService.diceRoll(1, 6));
        }
        // Get rid of lowest value
        for(var i = 0; i < 4; i++){
            if(rolls[i] < min){
                min = rolls[i];
            }
        }
        var minFound = false;
        for(var i = 0; i < 4; i++){
            if(rolls[i] == min && !minFound){
                minFound = true;
            } else{
                total = rolls[i] + total;
            }
        }

        return total;
    }

    self.generateStatPoints = function(){
        self.statPoints = [];
        for(var i = 0; i < 6; i++){
            self.statPoints.push({
                value: abilityRoll(),
                inUse: false
            });
        }
        self.resetSkills();
        self.displayRolls = true;
    }

    self.resetSkills = function(){
        self.str = 0;
        self.dex = 0;
        self.con = 0;
        self.int = 0;
        self.wis = 0;
        self.cha = 0;
    }

    self.submit = function(){
        char.str = self.str;
        char.dex = self.dex;
        char.con = self.con;
        char.int = self.int;
        char.wis = self.wis;
        char.cha = self.cha;

        CharacterService.updateCharacter(char);
        // Will move on to the next step
        $rootScope.$broadcast('creation-change-steps', {step: 4});
    };
}

angular.module('PFCM').controller('AbilityScoreGenCtrl', ctrl);
