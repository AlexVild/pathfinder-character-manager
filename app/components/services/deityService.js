'use strict'
var fs = require('fs')

var service = function(){
    var self = this;

    var deities = JSON.parse(fs.readFileSync('app/data/deities.json', 'utf8'));
    
    console.log(deities[0]);

    return{
        getDeities: function(){
            return deities;
        }
    }
};

angular.module('PFCM').factory('DeityService', service);
