'use strict'

var ctrl = function($scope, $rootScope, CharacterService){
    var self = this;

    self.sex = 'male'; // Default value for sex

    self.submit = function(){
        CharacterService.updateCharacter('name', self.name);
        CharacterService.updateCharacter('sex', self.sex);
        var char = CharacterService.getCharacter();
        console.log(char);
        // Will move on to the next step
        $rootScope.$broadcast('creation-change-steps', {step: 2});
    }

}

angular.module('PFCM').controller('NameEntryCtrl', ctrl);
