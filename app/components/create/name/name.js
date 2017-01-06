'use strict'

var ctrl = function($scope, $rootScope, CharacterService){
    var self = this;
    var char = CharacterService.getCharacter();

    self.sex = 'male'; // Default value for sex
    self.submit = function(){
        char.name = self.name;
        char.sex = self.sex;
        char.height = self.height;
        char.weight = self.weight;
        CharacterService.updateCharacter(char);

        // Will move on to the next step
        $rootScope.$broadcast('creation-change-steps', {step: 2});
    }

    self.heights = [];
    var maxHeight = 0;
    var minHeight = 0;
    self.maxWeight = 0;
    self.minWeight = 0;

    // Call this whenever sex is changed
    self.getHeightAndWeight = function(){
        switch(char.race){
            case 'Human':
                if(self.sex == 'male'){
                    maxHeight = 78;
                    minHeight = 58;
                    self.minWeight = 120;
                    self.maxWeight = 220;
                } else{
                    maxHeight = 73;
                    minHeight = 53;
                    self.minWeight = 85;
                    self.maxWeight = 185;
                }
                break;
            case 'Half-orc':
                if(self.sex == 'male'){
                    maxHeight = 82;
                    minHeight = 58;
                    self.minWeight = 150;
                    self.maxWeight = 318;
                } else{
                    maxHeight = 77;
                    minHeight = 53;
                    self.minWeight = 110;
                    self.maxWeight = 278;
                }
                break;
            case 'Half-elf':
                if(self.sex == 'male'){
                    maxHeight = 78;
                    minHeight = 62;
                    self.minWeight = 110;
                    self.maxWeight = 190;
                } else{
                    maxHeight = 76;
                    minHeight = 60;
                    self.minWeight = 90;
                    self.maxWeight = 170;
                }
                break;
            case 'Halfling':
                if(self.sex == 'male'){
                    maxHeight = 40;
                    minHeight = 32;
                    self.minWeight = 30;
                    self.maxWeight = 38;
                } else{
                    maxHeight = 38;
                    minHeight = 30;
                    self.minWeight = 25;
                    self.maxWeight = 33;
                }
                break;
            case 'Elf':
                if(self.sex == 'male'){
                    maxHeight = 80;
                    minHeight = 64;
                    self.minWeight = 100;
                    self.maxWeight = 148;
                } else{
                    maxHeight = 76;
                    minHeight = 64;
                    self.minWeight = 90;
                    self.maxWeight = 126;
                }
                break;
            case 'Dwarf':
                if(self.sex == 'male'){
                    maxHeight = 53;
                    minHeight = 45;
                    self.minWeight = 150;
                    self.maxWeight = 206;
                } else{
                    maxHeight = 51;
                    minHeight = 43;
                    self.minWeight = 120;
                    self.maxWeight = 176;
                }
                break;
            case 'Gnome':
                if(self.sex == 'male'){
                    maxHeight = 44;
                    minHeight = 36;
                    self.minWeight = 35;
                    self.maxWeight = 43;
                } else{
                    maxHeight = 42;
                    minHeight = 34;
                    self.minWeight = 30;
                    self.maxWeight = 38;
                }
                break;
        }
        fillHeightArray();
        self.height = self.heights[0];
        self.weight = self.minWeight;
    }
    // This will generate an array of heights in the format 5'3", 5'4", etc, heights array is filled here
    var fillHeightArray = function(){
        self.heights = [];
        var feet, inches;
        for (var i = minHeight; i <= maxHeight; i++){
            feet = Math.floor(i/12);
            inches = i%12;
            var tmpString = feet + "\' " + inches + "\"";
            self.heights.push(tmpString);
        }
    }

    // Update height/weights
    $scope.$on('creation-change-steps', function(event, args){
        if(args.step == 1){
            self.getHeightAndWeight();
        }
    });
    $scope.$watch('nameEntry.sex', function(){
        self.getHeightAndWeight();
    })
}

angular.module('PFCM').controller('NameEntryCtrl', ctrl);
