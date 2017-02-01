'use strict';

var ctrl = function($scope, $rootScope, CharacterService){
    var self = this;
    var char = CharacterService.getCharacter();

    self.classWarn = false;
    self.currentIndex = 0;

    self.checkClasses = function(){
        switch(char.class){
        case 'Barbarian': self.alignments = ['Neutral Good', 'Chaotic Good', 'Neutral', 'Chaotic Neutral', 'Neutral Evil', 'Chaotic Evil'];
            self.classWarn = true;
            break;
        case 'Cleric':
            self.classWarn = true;
            break;
        case 'Druid': self.alignments = ['Neutral Good', 'Lawful Neutral', 'Neutral', 'Chaotic Neutral', 'Neutral Evil'];
            self.classWarn = true;
            break;
        case 'Monk': self.alignments = ['Lawful Good', 'Lawful Neutral', 'Lawful Evil'];
            self.classWarn = true;
            break;
        case 'Paladin': self.alignments = ['Lawful Good'];
            self.classWarn = true;
            break;
        default: self.classWarn = false;
            self.alignments = ['Lawful Good', 'Neutral Good', 'Chaotic Good', 'Lawful Neutral', 'Neutral', 'Chaotic Neutral', 'Lawful Evil', 'Neutral Evil', 'Chaotic Evil'];
        }
    };

    // TODO Cleric's stuff here and on class page
    self.submit = function(){
        char.alignment = self.alignment;
        CharacterService.updateCharacter(char);
        // Will move on to the next step
        $rootScope.$broadcast('creation-change-steps', {step: 4});
    };

    $scope.$on('creation-change-steps', function(event, args){
        if(args.step === 3){
            self.checkClasses();
        }
    });
};

angular.module('PFCM').controller('AlignmentCtrl', ctrl);
