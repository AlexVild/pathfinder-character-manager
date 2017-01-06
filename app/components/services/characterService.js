'use strict'

var service = function(){
    var character = new Object();
    return{
        getCharacter: function(){
            return character;
        },

        updateCharacter: function(prop, param){
            switch (prop){
                case 'race': character.race = param;
                    break;
                default: console.log('invalid parameter was sent to update character');
            }
        }
    }
};

angular.module('PFCM').factory('CharacterService', service);
