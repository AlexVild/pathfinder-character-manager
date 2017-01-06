'use strict'

var ctrl = function($scope, $rootScope, CharacterService){
    var self = this;

    self.currentIndex = 0;

    self.races = [
        {
            name: 'Human',
            description: 'Humans possess exceptional drive and a great capacity to endure and expand, and as such are currently the dominant race in the world. Their empires and nations are vast, sprawling things, and the citizens of these societies carve names for themselves with the strength of their sword arms and the power of their spells. Humanity is best characterized by its tumultuousness and diversity, and human cultures run the gamut from savage but honorable tribes to decadent, devil-worshiping noble families in the most cosmopolitan cities. Humans\' curiosity and ambition often triumph over their predilection for a sedentary lifestyle, and many leave their homes to explore the innumerable forgotten corners of the world or lead mighty armies to conquer their neighbors, simply because they can.',
            img: 'assets/races/human.jpg'
        },
        {
            name: 'Dwarf',
            description: 'Dwarves are a stoic but stern race, ensconced in cities carved from the hearts of mountains and fiercely determined to repel the depredations of savage races like orcs and goblins.',
            img: 'assets/races/dwarf.jpg'
        },
        {
            name: 'Elf',
            description: 'The long-lived elves are children of the natural world, similar in many superficial ways to fey creatures, yet different as well. Elves value their privacy and traditions, and while they are often slow to make friends, at both the personal and national levels, once an outsider is accepted as a comrade, such alliances can last for generations.',
            img: 'assets/races/elf.jpg'
        },
        {
            name: 'Half-elf',
            description: 'Elves have long drawn the covetous gazes of other races. Their generous lifespans, magical affinity, and inherent grace each contribute to the admiration or bitter envy of their neighbors. Of all their traits, however, none so entrance their human associates as their beauty. Since the two races first came into contact with each other, humans have held up elves as models of physical perfection, seeing in these fair folk idealized versions of themselves. For their part, many elves find humans attractive despite their comparatively barbaric ways, and are drawn to the passion and impetuosity with which members of the younger race play out their brief lives. Sometimes this mutual infatuation leads to romantic relationships. Though usually short-lived, even by human standards, such trysts may lead to the birth of half-elves, a race descended from two cultures yet inheritor of neither. Half-elves can breed with one another, but even these “pureblood” half-elves tend to be viewed as bastards by humans and elves alike. Caught between destiny and derision, half-elves often view themselves as the middle children of the world.',
            img: 'assets/races/half-elf.jpg'
        },
        {
            name: 'Gnome',
            description: 'Gnomes trace their lineage back to the mysterious realm of the fey, a place where colors are brighter, the wildlands wilder, and emotions more primal. Unknown forces drove the ancient gnomes from the realm long ago, forcing them to seek refuge io this world; despite this, the gnomes have never completely abandoned their fey roots or adapted to mortal culture. As a result, gnomes are widely regarded by the other races as alien and strange.',
            img: 'assets/races/gnome.jpg'
        },
        {
            name: 'Halfling',
            description: 'Optimistic and cheerful by nature, blessed with uncanny luck, and driven by a powerful wanderlust, halflings make up for their short stature with an abundance of bravado and curiosity. At once excitable and easy-going, halflings like to keep an even temper and a steady eye on opportunity, and are not as prone to violent or emotional outbursts as some of the more volatile races. Even in the jaws of catastrophe, halflings almost never lose their sense of humor. Their ability to find humor in the absurd, no matter how dire the situation, often allows halflings to distance themselves ever so slightly from the dangers that surround them. This sense of detachment can also help shield them from terrors that might immobilize their allies.',
            img: 'assets/races/halfling.jpg'
        },
        {
            name: 'Half-orc',
            description: 'As seen by civilized races, half-orcs are monstrosities, the result of perversion and violence—whether or not this is actually true. Half-orcs are rarely the result of loving unions, and as such are usually forced to grow up hard and fast, constantly fighting for protection or to make names for themselves. Half-orcs as a whole resent this treatment, and rather than play the part of the victim, they tend to lash out, unknowingly confirming the biases of those around them. A few feared, distrusted, and spat-upon half-orcs manage to surprise their detractors with great deeds and unexpected wisdom—though sometimes it\'s easier just to crack a few skulls. Some half-orcs spend their entire lives proving to full-blooded orcs that they are just as fierce. Others opt for trying to blend into human society, constantly demonstrating that they aren\'t monsters. Their need to always prove themselves worthy encourages half-orcs to strive for power and greatness within the society around them.',
            img: 'assets/races/half-orc.jpg'
        }
    ];

    self.submit = function(){
        CharacterService.updateCharacter('race', self.races[self.currentIndex].name);
        var char = CharacterService.getCharacter();
        console.log(char.race);

        $rootScope.$broadcast('creation-change-steps', {step: 1});
    }

}

angular.module('PFCM').controller('RaceSelectCtrl', ctrl);
