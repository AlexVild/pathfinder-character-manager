'use strict'

var service = function(){
    var character = new Object();
    return{
        getCharacter: function(){
            return character;
        },

        updateCharacter: function(newChar){
            character = newChar;
            console.log(character);
        }
    }
};

angular.module('PFCM').factory('CharacterService', service);
