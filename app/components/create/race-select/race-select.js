'use strict'

var ctrl = function($scope, $rootScope, CharacterService){
    var self = this;

    self.currentIndex = 0;

    self.races = [
        {
            name: 'Human',
            description: 'Ambitious, sometimes heroic, and always confident, humans have an ability to work together toward common goals that makes them a force to be reckoned with. Though short-lived compared to other races, their boundless energy and drive allow them to accomplish much in their brief lifetimes.',
            img: 'assets/races/human.jpg'
        },
        {
            name: 'Dwarf',
            description: 'These short and stocky defenders of mountain fortresses are often seen as stern and humorless. Known for mining the earth’s treasures and crafting magnificent items from ore and gemstones, they have an unrivaled affinity for the bounties of the deep earth. Dwarves also have a tendency toward traditionalism and isolation that sometimes manifests as xenophobia.',
            img: 'assets/races/dwarf.jpg'
        },
        {
            name: 'Elf',
            description: 'Tall, noble, and often haughty, elves are long-lived and subtle masters of the wilderness. Elves excel in the arcane arts. Often they use their intrinsic link to nature to forge new spells and create wondrous items that, like their creators, seem nearly impervious to the ravages of time. A private and often introverted race, elves can give the impression they are indifferent to the plights of others.',
            img: 'assets/races/elf.jpg'
        },
        {
            name: 'Half-elf',
            description: 'Often caught between the worlds of their progenitor races, half-elves are a race of both grace and contradiction. Their dual heritage and natural gifts often create brilliant diplomats and peacemakers, but half-elves are often susceptible to an intense and even melancholic isolation, realizing that they are never truly part of elven or human society.',
            img: 'assets/races/half-elf.jpg'
        },
        {
            name: 'Gnome',
            description: 'Expatriates of the strange land of fey, these small folk have a reputation for flighty and eccentric behavior. Many gnomes are whimsical artisans and tinkers, creating strange devices powered by magic, alchemy, and their quirky imagination. Gnomes have an insatiable need for new experiences that often gets them in trouble.',
            img: 'assets/races/gnome.jpg'
        },
        {
            name: 'Halfling',
            description: 'Members of this diminutive race find strength in family, community, and their own innate and seemingly inexhaustible luck. While their fierce curiosity is sometimes at odds with their intrinsic common sense, half lings are eternal optimists and cunning opportunists with an incredible knack for getting out the worst situations.',
            img: 'assets/races/halfling.jpg'
        },
        {
            name: 'Half-orc',
            description: 'Often fierce and savage, sometimes noble and resolute, half-orcs can manifest the best and worst qualities of their parent races. Many half-orcs struggle to keep their more bestial natures in check in order to epitomize the most heroic values of humanity. Unfortunately, many outsiders see half-orcs as hopeless abominations devoid of civility, if not monsters unworthy of pity or parley.',
            img: 'assets/races/half-orc.jpg'
        }
    ];

    self.submit = function(){
        var char = CharacterService.getCharacter();
        char.race = self.races[self.currentIndex].name;
        CharacterService.updateCharacter(char);
        $rootScope.$broadcast('creation-change-steps', {step: 1});
    }

}

angular.module('PFCM').controller('RaceSelectCtrl', ctrl);
