/********************
*  PSGO ~ Made by   *
* Fender, Nineage   *
*    and Naten      *
********************/

'use strict';
 
let cards = require('../card-data.js');
 
let colors = {
    Mythic: '#D82A2A',
    Legendary: '#E8AB03',
    Epic: '#73DF14',
    Rare: '#2DD1B6',
    Uncommon: '#2D3ED1',
    Common: '#000',
};
 
let shop = [ //Actual shop display
    ['XY-Base', 'Get three cards from the first pack released in the Pokemon XY set.', 5],
    ['XY-Flashfire', 'Get three cards from the Flashfire pack released in the Pokemon XY set.', 5],
    ['XY-Furious Fists', 'Get three cards from the Furious Fists pack released in the Pokemon XY set.', 5],
    ['XY-Phantom Forces', 'Get three cards from the Phantom Forces pack released in the Pokemon XY set.', 5],
    ['XY-Primal Clash', 'Get three cards from the Primal Clash pack released in the Pokemon XY set.', 5],
    ['XY-Roaring Skies', 'Get three cards from the Roaring Skies pack released in the Pokemon XY set.', 5],
    //['UU-Pack', 'Get three cards from the UU tier.', 10]
];
//Shop used in cardCache to reduce RAM usage of card caching
var packShop = ['XY-Base', 'XY-Flashfire', 'XY-Furious Fists', 'XY-Phantom Forces', 'XY-Primal Clash', 'XY-Roaring Skies', 'Double Crisis', 'Water', 'Fire', 'Fighting', 'Fairy', 'Dragon', 'Colorless', 'Psychic', 'Lightning', 'Darkness', 'Grass', 'OU-Pack', 'UU-Pack', 'Uber-Pack', 'PU-Pack', 'NU-Pack', 'RU-Pack', 'LC-Pack', 'BL-Pack', 'BL2-Pack', 'BL3-Pack', 'Gen1', 'Gen2', 'Gen3', 'Gen4', 'Gen5', 'Gen6', 'Metal', 'Trainer', 'Supporter', 'Item', 'Stadium', 'EX-Pack', 'Legendary', 'Full', 'Event'];
var tourCardRarity = ['No Card', 'Common', 'Uncommon', 'Rare', 'Epic', 'Epic', 'Legendary', 'Legendary', 'Mythic'];
var cardRarity = ['Common', 'Uncommon', 'Rare', 'Epic', 'Legendary', 'Mythic'];
var allCards = ['Absol', 'Accelgor', 'Acetrainer', 'Acrobike', 'Aegislash', 'Aegislash2', 'Aegislash3', 'Aegislashex', 'Aggronex', 'Aggronexfull', 'Aggronmagma', 'Aggronspiritlink', 'Alakazambaseset', 'Alomomola', 'Altaria', 'Altariadelta', 'Altariafull', 'Amaura', 'Aquadiffuser', 'Arbok', 'Archiesaceinthehole', 'Archiesaceintheholefull', 'Aromatisse', 'Aronmagma', 'Articuno', 'Articunodelta', 'Aurorus', 'Avalugg', 'Az', 'Azfull', 'Azumarill', 'Azumarilldelta', 'Bagon', 'Bagon2', 'Baltoymagma', 'Banette', 'Banettedelta', 'Barbaracle', 'Barboach', 'Battlecompressor', 'Battlereporter', 'Battlereporterfull', 'Beartic', 'Beautifly', 'Beedrill', 'Beedrill2', 'Bellsprout', 'Bergmite', 'Bibarel', 'Bibarel2', 'Bidoof', 'Bidoof2', 'Bidoof3', 'Bidoofdelta', 'Binacle', 'Binacle2', 'Bisharp', 'Bisharp2', 'Blacksmith', 'Blastoisebaseset', 'Blastoiseex', 'Blastoiseex2', 'Blastoiseexfull', 'Blaziken', 'Blaziken2', 'Blazikenex', 'Blissey', 'Boldore', 'Bouffalant', 'Braixen', 'Braixen2', 'Breloom', 'Breloom2', 'Bronzong', 'Bronzong2', 'Bronzor', 'Buizel', 'Buneary', 'Bunnelby', 'Bunnelby2', 'Bunnelby3', 'Bunnelby4', 'Bunnelbydelta', 'Butterfree', 'Cameruptex', 'Cameruptexfull', 'Cameruptmagma', 'Carbink', 'Carbink2', 'Carvahnaaqua', 'Cascoon', 'Cassius', 'Caterpie', 'Championsfestival', 'Chandelure', 'Chansey', 'Chanseybaseset', 'Charizardbaseset', 'Charizardex', 'Charizardex2', 'Charizardex3', 'Charizardex4', 'Charizardexfull', 'Chesnaught', 'Chesnaught2', 'Chesnaughtex', 'Chespin', 'Chespin2', 'Chespin3', 'Chinchou', 'Clamperl', 'Clauncher', 'Clauncher2', 'Clawitzer', 'Claydolmagma', 'Clefable', 'Clefairy', 'Clefairy2', 'Clefairybaseset', 'Cloyster', 'Combusken', 'Combusken2', 'Conkeldurr', 'Corphish', 'Corsola', 'Crawdaunt', 'Crobat', 'Croconaw', 'Crushinghammer', 'Cubchoo', 'Darknessenergy', 'Darkrai', 'Dedenne', 'Dedenne2', 'Deino', 'Delcatty', 'Delcatty2', 'Delphox', 'Delphox2', 'Delphoxex', 'Deoxys', 'Dialgaex', 'Diancie', 'Diancieex', 'Diggersby', 'Diggersby2', 'Diggersby3', 'Diglett', 'Dimensionvalley', 'Ditto', 'Diveball', 'Dodrio', 'Doduo', 'Doublade', 'Doublade2', 'Doubleaquaenergy', 'Doublecolorlessenergy', 'Doubledragonenergy', 'Doublemagmaenergy', 'Dragalge', 'Dragalge2', 'Dragonair', 'Dragonite', 'Dragonitedelta', 'Dragoniteex', 'Dragoniteexfull', 'Drapion', 'Dratini', 'Drillbur', 'Drowzee', 'Druddigon', 'Dugtrio', 'Dunsparce', 'Dunsparce2', 'Durant', 'Dusclops', 'Dusknoir', 'Duskull', 'Dustox', 'Dustoxdelta', 'Eelektrik', 'Eelektrikdelta', 'Eelektross', 'Eevee', 'Ekans', 'Electabuzz', 'Electivire', 'Electrike', 'Electrike2', 'Electrikedelta', 'Electrode', 'Electrode2', 'Emolgaex', 'Emolgaexfull', 'Enhancedhammer', 'Energyretrieval', 'Energyswitch', 'Escaperope', 'Escavalier', 'Espurr', 'Evosoda', 'Excadrill', 'Excadrilldelta', 'Exeggcute', 'Exeggutor', 'Exploud', 'Expshare', 'Fairyenergy', 'Fairygarden', 'Farfetchd', 'Fearow', 'Fearow2', 'Feebas', 'Feebas2', 'Fennekin', 'Fennekin2', 'Fennekin3', 'Feraligatr', 'Fierytorch', 'Fightingenergy', 'Fightingstadium', 'Finneon', 'Fireenergy', 'Flabebe', 'Flabebe2', 'Fletchinder', 'Fletchinder2', 'Fletchinder3', 'Fletchinder4', 'Fletchling', 'Fletchling2', 'Fletchling3', 'Fletchling4', 'Fletchling5', 'Floatzel', 'Floette', 'Floette2', 'Florges', 'Florgesex', 'Florgesexfull', 'Flygon', 'Flygon2', 'Focussash', 'Forretress', 'Fossilresearcher', 'Fossilresearcherfull', 'Freshwaterset', 'Frillish', 'Froakie', 'Froakie2', 'Froakie3', 'Frogadier', 'Frogadier2', 'Fullheal', 'Furfrou', 'Furfrou2', 'Furfrou3', 'Furfrou4', 'Furfrou5', 'Furret', 'Galladeex', 'Galladeexfull', 'Galladespiritlink', 'Galvantula', 'Garchompex', 'Gardevoirex', 'Gardevoirexfull', 'Gardevoirspiritlink', 'Gengarex', 'Gengarexfull', 'Gengarspiritlink', 'Geodude', 'Gigalith', 'Girafarig', 'Glaceon', 'Gligar', 'Gligar2', 'Gliscor', 'Gliscor2', 'Gogoat', 'Gogoat2', 'Golbat', 'Golem', 'Golett', 'Golurk', 'Goodra', 'Goodra2', 'Goomy', 'Goomy2', 'Gorebyss', 'Gorebyssdelta', 'Gothita', 'Gothitelle', 'Gothorita', 'Gourgeist', 'Gourgeist2', 'Granbull', 'Grassenergy', 'Graveler', 'Greatball', 'Greninja', 'Greninja2', 'Greninja3', 'Greninjaex', 'Grimeraqua', 'Groudon', 'Groudonex', 'Groudonex2', 'Groudonexfull', 'Groudonexmagmafull', 'Groudonspiritlink', 'Grovyle', 'Grumpig', 'Gulpin', 'Gurdurr', 'Gyaradosbaseset', 'Handscope', 'Hardcharm', 'Hariyama', 'Hawlucha', 'Hawlucha2', 'Hawluchaex', 'Headringer', 'Healingscarf', 'Heatran', 'Heliolisk', 'Heliolisk2', 'Heliolisk3', 'Helioptile', 'Helioptile2', 'Helioptile3', 'Heracrossex', 'Heracrossexfull', 'Herbalenergy', 'Herdier', 'Hippopotas', 'Hippowdon', 'Hitmonchan', 'Hitmonchanbaseset', 'Hitmonlee', 'Hitmontop', 'Honchkrow', 'Honedge', 'Honedge2', 'Honedge3', 'Honedge4', 'Hoopaex', 'Horsea', 'Huntail', 'Hydreigon', 'Hydreigonex', 'Hydreigonexfull', 'Hypno', 'Illumise', 'Illumise2', 'Inkay', 'Inkay2', 'Inkay3', 'Inkay4', 'Jammingnet', 'Jawfossil', 'Jellicent', 'Jigglypuff', 'Jigglypuff2', 'Jirachi', 'Joltik', 'Jynx', 'Kakuna', 'Kakuna2', 'Kangaskhanex', 'Kangaskhanexfull', 'Karrablast', 'Kingdra', 'Kingdradelta', 'Kingdrafull', 'Kingler', 'Klefki', 'Klefki2', 'Klefki3', 'Korrina', 'Korrinafull', 'Krabby', 'Krokorok', 'Krokorok2', 'Krookodile', 'Krookodileex', 'Kyogre', 'Kyogreex', 'Kyogreex2', 'Kyogreexaquafull', 'Kyogreexfull', 'Laironmagma', 'Lampent', 'Landorus', 'Lanturn', 'Lapras', 'Latiosex', 'Latiosexfull', 'Latiosspiritlink', 'Leafeon', 'Leavanny', 'Ledian', 'Ledyba', 'Lickilicky', 'Lickitung', 'Liepard', 'Lightningenergy', 'Lillipup', 'Linoone', 'Litleo', 'Litleo2', 'Litleo3', 'Litwick', 'Lombre', 'Lopunny', 'Lotad', 'Loudred', 'Lucarioex', 'Lucarioexfull', 'Ludicolo', 'Ludicolodelta', 'Lumineon', 'Lunatone', 'Luvdisc', 'Luxio', 'Luxray', 'Lysandre', 'Lysandrestrumpcard', 'Lysandrestrumpcardfull', 'Machamp', 'Machamp2', 'Machampbaseset', 'Machoke', 'Machop', 'Magcargo', 'Magcargo2', 'Magcargodelta', 'Magmapointer', 'Magmar', 'Magmortar', 'Magnetonbaseset', 'Magnezoneex', 'Magnezoneexfull', 'Maintenance', 'Makuhita', 'Malamar', 'Malamar2', 'Malamarex', 'Malamarexfull', 'Manaphy', 'Manectric', 'Manectric2', 'Manectricex', 'Manectricexfull', 'Manectricspiritlink', 'Maractus', 'Marill', 'Marshtomp', 'Masquerain', 'Maxieshiddenballtrick', 'Maxieshiddenballtrickfull', 'Maxrevive', 'Medicham', 'Medichamdelta', 'Meditite', 'Megaaggronex', 'Megaaggronexfull', 'Megablastoiseex', 'Megacharizardex', 'Megacharizardexa', 'Megacharizardexb', 'Megadiancieex', 'Megagalladeex', 'Megagalladeexfull', 'Megagardevoirex', 'Megagardevoirexfull', 'Megagengarex', 'Megaheracrossex', 'Megaheracrossex2', 'Megakangaskhanex', 'Megakangaskhanex2', 'Megalatiosex', 'Megalatiosexfull', 'Megalucarioex', 'Megalucarioex2', 'Megamanectricex', 'Megametagrossex', 'Megarayquazaex', 'Megarayquazaex2', 'Megarayquazaex3', 'Megarayquazaexfull', 'Megaturbo', 'Megavenusaurex', 'Meowstic', 'Meowstic2', 'Meowth', 'Metagrossex', 'Metalenergy', 'Metapod', 'Mewancient', 'Mewtwobaseset', 'Mienfoo', 'Mienshao', 'Mightyena', 'Mightyena2', 'Mightyenaaqua', 'Mightyenamagma', 'Milotic', 'Milotic2', 'Miltank', 'Miltank2', 'Minun', 'Mountainring', 'Mrmime', 'Mrmime2', 'Mudkip', 'Mudkip2', 'Mukaqua', 'Munna', 'Murkrow', 'Muscleband', 'Musharna', 'Mysteryenergy', 'Natu', 'Natudelta', 'Nidokingbaseset', 'Nidoqueen', 'Nidoqueendelta', 'Nidoranf', 'Nidorina', 'Nincanda', 'Ninetales', 'Ninetalesbaseset', 'Ninjask', 'Noibat', 'Noivern', 'Nosepass', 'Numelmagma', 'Nuzleaf', 'Pachirisu', 'Palpad', 'Pancham', 'Pancham2', 'Pangoro', 'Pangoro2', 'Panpour', 'Panpour2', 'Pansage', 'Pansage2', 'Pansear', 'Pansear2', 'Patrat', 'Pawniard', 'Pawniard2', 'Pelipper', 'Phantump', 'Pidgeot', 'Pidgeotto', 'Pidgey', 'Pidove', 'Pikachu', 'Pikachu2', 'Pikachu3', 'Pineco', 'Plusle', 'Pokeball', 'Pokemoncatcher', 'Pokemoncenterlady', 'Pokemonfanclub', 'Politoed', 'Poliwag', 'Poliwhirl', 'Poliwrath', 'Poliwrathbaseset', 'Ponyta', 'Poochyena', 'Poochyena2', 'Poochyenaaqua', 'Poochyenamagma', 'Potion', 'Primalgroudonex', 'Primalgroudonex2', 'Primalgroudonex3', 'Primalkyogreex', 'Primalkyogreex2', 'Primalkyogreex3', 'Probopass', 'Professorbirchsobservations', 'Professorbirchsobservationsfull', 'Professorsletter', 'Professorsycamore', 'Protectioncube', 'Psychicenergy', 'Pumpkaboo', 'Pumpkaboo2', 'Purrloin', 'Pyroar', 'Pyroar2', 'Quilladin', 'Quilladin2', 'Qwilfish', 'Raichu', 'Raichu2', 'Raichubaseset', 'Rainbowenergy', 'Rapidash', 'Rarecandy', 'Rayquazaex', 'Rayquazaex2', 'Rayquazaex3', 'Rayquazaexfull', 'Rayquazaspiritlink', 'Redcard', 'Regigigas', 'Regirockdelta', 'Repeatball', 'Reshiram', 'Revive', 'Rhydon', 'Rhydon2', 'Rhyhorn', 'Rhyhorn2', 'Rhyperior', 'Rhyperior2', 'Rhyperiordelta', 'Robosubstitute', 'Roggenrola', 'Rollerskates', 'Roselia', 'Roserade', 'Roughseas', 'Sableye', 'Sacredash', 'Salamence', 'Sandfossil', 'Sandile', 'Sandile2', 'Scatterbug', 'Sceptile', 'Sceptiledelta', 'Sceptileex', 'Scolipede', 'Scorchedearth', 'Scrafty', 'Scrafty2', 'Scraggy', 'Scraggy2', 'Seadra', 'Sealeo', 'Sealeo2', 'Sealeoaqua', 'Seedot', 'Seismitoadex', 'Seismitoadexfull', 'Sentret', 'Seviperaqua', 'Sewaddle', 'Shadowcircle', 'Sharpedoaqua', 'Sharpedoex', 'Sharpedoexfull', 'Shauna', 'Shayminskyex', 'Shayminskyexfull', 'Shedinja', 'Shelgon', 'Shellder', 'Shelmet', 'Shieldenergy', 'Shiftry', 'Shiftry2', 'Shinx', 'Shrineofmemories', 'Shroomish', 'Shroomish2', 'Shuppet', 'Silcoon', 'Silentlab', 'Simipour', 'Simisage', 'Simisear', 'Skarmory', 'Skarmory2', 'Skarmoryex', 'Skarmoryexfull', 'Skiddo', 'Skiddo2', 'Skitty', 'Skitty1', 'Skitty2', 'Skorupi', 'Skrelp', 'Skuntank', 'Skyfield', 'Slaking', 'Slakoth', 'Sliggoo', 'Sliggoo2', 'Slugma', 'Slugma2', 'Slugma3', 'Slurpuff', 'Slurpuff2', 'Slurpuff3', 'Sneasel', 'Sneasel2', 'Snorlax', 'Snorlax2', 'Snubbull', 'Solrock', 'Sparklingrobe', 'Spearow', 'Spearow2', 'Spewpa', 'Spheal', 'Spheal2', 'Spheal3', 'Sphealaqua', 'Spinda', 'Spiritomb', 'Spoink', 'Spritzee', 'Spritzee2', 'Starmie', 'Starmie2', 'Startlingmegaphone', 'Staryu', 'Staryu2', 'Steelshelter', 'Steven', 'Stoutland', 'Strongenergy', 'Stunky', 'Stunky2', 'Superpotion', 'Superscoopup', 'Surskit', 'Swablu', 'Swadloon', 'Swalot', 'Swampert', 'Swampertdelta', 'Swampertex', 'Swellow', 'Swellow2', 'Swellowdelta', 'Swirlix', 'Swirlix2', 'Swirlix3', 'Switch', 'Sylveon', 'Sylveon2', 'Taillow', 'Taillow2', 'Talonflame', 'Talonflame2', 'Talonflame3', 'Tangela', 'Tangrowth', 'Targetwhistle', 'Tauros', 'Teamaquaadmin', 'Teamaquagrunt', 'Teamaquasgreatball', 'Teamaquassecretbase', 'Teamflaregrunt', 'Teammagmaadmin', 'Teammagmagrunt', 'Teammagmasgreatball', 'Teammagmassecretbase', 'Teammates', 'Teammatesfull', 'Tentacool', 'Tentacooldelta', 'Tentacruel', 'Thundurus', 'Thundurusex', 'Thundurusexfull', 'Tierno', 'Timburr', 'Togekiss', 'Togekissdelta', 'Togepi', 'Togetic', 'Toolretriever', 'Torchic', 'Torchic2', 'Torchic3', 'Torchicdelta', 'Torkoal', 'Tornadus', 'Totodile', 'Toxicroakex', 'Toxicroakexfull', 'Trainersmail', 'Trainingcenter', 'Tranquill', 'Trapinch', 'Trapinch2', 'Treecko', 'Treecko2', 'Trevenant', 'Trevenant2', 'Trevenantex', 'Trevenantexfull', 'Trevor', 'Trickcoin', 'Trickshovel', 'Tropius', 'Tynamo', 'Tyrantrum', 'Tyrunt', 'Ultraball', 'Unfezant', 'Unfezantdelta', 'Venipede', 'Venomoth', 'Venonat', 'Venusaurbaseset', 'Venusaurex', 'Venusaurex2', 'Venusaurexfull', 'Vibrava', 'Vibrava2', 'Victini', 'Victreebel', 'Vigoroth', 'Vivillon', 'Volbeat', 'Volbeat2', 'Voltorb', 'Voltorb2', 'Vsseeker', 'Vulpix', 'Wailordex', 'Wailordexfull', 'Wally', 'Wallyfull', 'Walrein', 'Walrein2', 'Walreinaqua', 'Watchog', 'Waterenergy', 'Weaknesspolicy', 'Weavile', 'Weedle', 'Weedle2', 'Weedle3', 'Weepinbell', 'Whirlipede', 'Whiscash', 'Whiscashdelta', 'Whismur', 'Widelens', 'Wigglytuff', 'Wigglytuff2', 'Wingull', 'Winona', 'Winonafull', 'Wobbuffet', 'Wonderenergy', 'Wurmple', 'Xatu', 'Xerneas', 'Xerneas2', 'Xerneas3', 'Xerneasex', 'Xerneasex2', 'Xerneasex3', 'Xerosic', 'Xerosicfull', 'Yanma', 'Yanmega', 'Yveltal', 'Yveltal2', 'Yveltal3', 'Yveltalex', 'Yveltalex2', 'Yveltalex3', 'Zangoosemagma', 'Zapdos', 'Zapdosbaseset', 'Zekrom', 'Zigzagoon', 'Zoroark', 'Zorua', 'Zubat', 'Zweilous',];
//System Command: you should prolly never put anything in here
var cleanShop = [];
var cleanCard = [];
 
var rareCache = []; //Used to cache cards for tours
var cardCache = []; //Used to cache cards in packs
var userPacks = {}; //Used to store users unopened packs
 
function cachePacks() {
    for (var i = 0; i < packShop.length; i++) {
        cardCache.push(new Array());
        for (var key in cards) {
            if (cards.hasOwnProperty(key)) {
                var obj = cards[key];
                if (obj.hasOwnProperty('collection') && obj.collection.indexOf(packShop[i]) > -1) cardCache[i].push(key);
            }
        }
    }
    for (i = 0; i < packShop.length; i++) {
        cleanShop.push(toId(packShop[i]));
    }
}
 
function cacheRarity() {
    for (var i = 0; i < cardRarity.length; i++) {
        rareCache.push(new Array());
        for (var key in cards) {
            if (cards.hasOwnProperty(key)) {
                var obj = cards[key];
                if (obj.hasOwnProperty('rarity') && obj.rarity.indexOf(cardRarity[i]) > -1) rareCache[i].push(key);
            }
        }
    }
    for (i = 0; i < cardRarity.length; i++) {
        cleanCard.push(toId(cardRarity[i]));
    }
}
 
global.tourCard = function (tourSize, userid) {
    if (tourSize > 32) tourSize = 32;
    var tourRarity = tourCardRarity[Math.floor(tourSize / 4)];
    var cacheValue = rareCache[cleanCard.indexOf(toId(tourRarity))];
    var card = cacheValue[Math.round(Math.random() * (cacheValue.length - 1))];
    if (tourRarity === 'No Card') return;
    addCard(userid, card);
    return [cards[card].rarity, cards[card].title, cards[card].name];
};
 
function addCard(name, card) {
    var newCard = {};
    newCard.title = cards[card].title;
    newCard.card = cards[card].card;
    newCard.name = cards[card].name;
    newCard.rarity = cards[card].rarity;
    newCard.points = cards[card].points;
 
    var userid = toId(name);
    Db('cards').set(userid, Db('cards').get(userid, []).concat([newCard]));
    Db('points').set(userid, Db('points').get(userid, 0) + newCard.points);
}
 
function getShopDisplay(shop) {
    var display = "<table width='100%' border='1' style='border-collapse: collapse; color: #444; box-shadow: 2px 3px 5px rgba(0, 0, 0, 0.2);' cellpadding='5'>" +
        "<tr><th class='card-th' style='background-image: -moz-linear-gradient(center top , #EBF3FC, #DCE9F9); box-shadow: 0px 1px 0px rgba(255, 255, 255, 0.8) inset;'>Command</th><th class='card-th' style='background-image: -moz-linear-gradient(center top , #EBF3FC, #DCE9F9); box-shadow: 0px 1px 0px rgba(255, 255, 255, 0.8) inset;'>Description</th><th class='card-th' style='background-image: -moz-linear-gradient(center top , #EBF3FC, #DCE9F9); box-shadow: 0px 1px 0px rgba(255, 255, 255, 0.8) inset;'>Cost</th></tr>";
    var start = 0;
    while (start < shop.length) {
        display += "<tr>" + "<td class='card-td'><button name='send' value='/buypack " + shop[start][0] + "' style='border-radius: 12px; box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2) inset;'><b>" + shop[start][0] + "</b></button></td>" +
            "<td class='card-td'>" + shop[start][1] + "</td>" +
            "<td class='card-td'>" + shop[start][2] + "</td>" +
            "</tr>";
        start++;
    }
    display += "</table><center>To buy a pack from the shop, use /buypack <em>pack</em>.</center>";
    return display;
}
 
function toTitleCase(str) {

    return str.replace(/\w\S*/g, function (txt) {return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
 }
 
cachePacks();
cacheRarity();
 
exports.commands = {
    buypacks: 'buypack',
    buypack: function (target, room, user) {
        if (!target) return this.sendReply('/buypack - Buys a pack from the pack shop. Alias: /buypacks');
        var self = this;
        var packId = toId(target);
        var amount = Db('money').get(user.userid, 0);
        if (cleanShop.indexOf(packId) < 0) return self.sendReply('This is not a valid pack. Use /packshop to see all packs.');
        var shopIndex = cleanShop.indexOf(toId(target));
        if (packId !== 'xybase' && packId !== 'xyfuriousfists' && packId !== 'xyflashfire' && packId !== 'xyphantomforces' && packId !== 'xyroaringskies' && packId !== 'xyprimalclash') return self.sendReply('This pack is not currently in circulation.  Please use /packshop to see the current packs.');
        var cost = shop[shopIndex][2];
        if (cost > amount) return self.errorReply('You need ' + (cost - amount) + ' more bucks to buy this pack.');
        var total = Db('money').set(user.userid, amount - cost).get(user.userid);
        var pack = toId(target);
        self.sendReply('|raw|You have bought ' + target + ' pack for ' + cost +
            ' bucks. Use <button name="send" value="/openpack ' +
            pack + '"><b>/openpack ' + pack + '</b></button> to open your pack.');
        self.sendReply('You have until the server restarts to open your pack.');
        if (!userPacks[user.userid]) userPacks[user.userid] = [];
        userPacks[user.userid].push(pack);
        if (room.id !== 'lobby') room.addRaw(user.name + ' has bought <b>' + target + ' pack </b> from the shop.');
        room.update();
    },
 
    packshop: function (target, room, user) {
        if (!this.runBroadcast()) return;
        return this.sendReply('|raw|' + getShopDisplay(shop));
    },
 
    open: 'openpack',
    openpacks: 'openpack',
    openpack: function (target, room, user) {
        if (!this.canBroadcast()) return;
        if (!target) {
            this.sendReply('/openpack [pack] - Open a Pokemon Card Pack. Alias: /open, /openpacks');
            return this.parse('/packs');
        }
        if (cleanShop.indexOf(toId(target)) < 0) return this.sendReply('This pack does not exist.');
        if (!userPacks[user.userid] || userPacks[user.userid].length === 0) return this.sendReply('You have no packs.');
        if (userPacks[user.userid].indexOf(toId(target)) < 0) return this.sendReply('You do not have this pack.');
        for (var i = 0; i < 3; i++) {
            var pack = toId(target);
            var cacheValue = cardCache[cleanShop.indexOf(toId(target))];
            var card = cacheValue[Math.round(Math.random() * (cacheValue.length - 1))];
            addCard(user.userid, card);
            var cardName = cards[card].name;
            var packName = packShop[cleanShop.indexOf(toId(target))];
            this.sendReplyBox(user.name + ' got <font color="' + colors[cards[card].rarity] + '">' + cards[card].rarity + '</font>\
            <button name="send" value="/card ' + card  + '"><b>' + cardName + '</b></button> from a \
            <button name="send" value="/buypack ' + packName + '">' + packName + ' Pack</button>.');
        }
        var usrIndex = userPacks[user.userid].indexOf(pack);
        userPacks[user.userid].splice(usrIndex, 1);
    },
 
    givepacks: 'givepack',
    givepack: function (target, room, user) {
        if (!user.can('declare')) return this.errorReply('/givepack - Access denied.');
        if (!target) return this.sendReply('/givepack [user], [pack] - Give a user a pack. Alias: /givepacks');
        var parts = target.split(',');
        this.splitTarget(parts[0]);
        if (!parts[1]) return this.sendReply('/givepack [user], [pack] - Give a user a pack. Alias: /givepacks');
        var pack = toId(parts[1]);
        var userid = toId(this.targetUsername);
        if (cleanShop.indexOf(pack) < 0) return this.sendReply('This pack does not exist.');
        if (!this.targetUser) return this.sendReply('User ' + this.targetUsername + ' not found.');
        if (!userPacks[userid]) userPacks[userid] = [];
        userPacks[userid].push(pack);
        this.sendReply(this.targetUsername + ' was given ' + pack + ' pack. This user now has ' + userPacks[userid].length + ' pack(s).');
        Users.get(this.targetUsername).connections[0].sendTo(room.id,
            '|raw|' + user.name + ' has given you ' + pack + ' pack. You have until the server restarts to open your pack. \
            Use <button name="send" value="/openpack ' + pack + '"><b>/openpack ' + pack + '</b></button> to open your pack.');
    },

    takepacks: 'takepack',
    takepack: function (target, room, user) {
        if (!user.can('takepack')) return this.errorReply('/takepack - Access denied.');
        if (!target) return this.sendReply('/takepack [user], [pack] - Take a pack from a user. Alias: /takepacks');
        var parts = target.split(',');
        this.splitTarget(parts[0]);
        if (!parts[1]) return this.sendReply('/takepack [user], [pack] - Take a pack from a user. Alias: /takepacks');
        var pack = toId(parts[1]);
        var packIndex = userPacks[userid].indexOf(pack);
        var userid = toId(this.targetUsername);
        if (packsKeys.indexOf(pack) < 0) return this.sendReply('This pack does not exist.');
        if (!this.targetUser) return this.sendReply('User ' + this.targetUsername + ' not found.');
        if (!userPacks[userid]) userPacks[userid] = [];
        if (packIndex < 0) return this.sendReply('This user does not have this pack.');
        userPacks[userid].splice(packIndex, 1);
        this.sendReply(this.targetUsername + ' lost ' + pack + ' pack. This user now has ' + users[userid].length + ' pack(s).');
        Users.get(this.targetUsername).send('|raw|' + user.name + ' has taken ' + pack + ' pack from you. You now have ' +  users[userid].length + ' pack(s).');
    },


    showcards: 'showcase',
    showcard: 'showcase',
    showcase: function (target, room, user) {
        if (!this.runBroadcast()) return;
 
        let page = 1;
        let userid = user.userid;
        const parts = target.split(',');
        if (parts.length === 2) {
            userid = toId(parts[0]);
            page = isNaN(parts[1]) ? 1 : Number(parts[1]);
        } else if (parts.length === 1 && toId(parts[0])) {
            userid = toId(parts[0]);
        }
 
        const cards = Db('cards').get(userid, []);
        const points = Db('points').get(userid, 0);
 
        if (!cards.length) return this.sendReplyBox(userid + " has no cards.");
 
        const cardsMapping = cards.map(function (card) {
            return '<button name="send" value="/card ' + card.title + '" style="border-radius: 12px; box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2) inset;" class="card-button"><img src="' + card.card + '" width="50" title="' + card.name + '"></button>';
        });
 
        const start = (page - 1) * 10;
        const end = page * 10;
        const bottom = '<br><br>' + userid + ' has ' + points + ' points.<br><br><b>Showing cards: ' + start + ' through ' + end + ' of ' + cards.length + '</b>';
        const display = cardsMapping.slice(start, end);
 
        if (!display.length) return this.sendReplyBox("Too many pages.");
 
        this.sendReplyBox(display.join('') + bottom);
    },
 
    card: function (target, room, user) {
        if (!target) return this.sendReply('/card [name] - Shows information about a card.');
        if (!this.runBroadcast()) return;
        let cardName = toId(target);
        if (!cards.hasOwnProperty(cardName)) return this.sendReply(target + ': card not found.');
        let card = cards[cardName];
        const html = '<div style=""><img src="' + card.card + '" height="220" title="'  + card.title +  '" align="right">' +
            '<center><span style="border-bottom-right-radius: 2px; border-bottom-left-radius: 2px; background-image: -moz-linear-gradient(center top , #EBF3FC, #DCE9F9);  box-shadow: 0px 1px 0px rgba(255, 255, 255, 0.8) inset, 0px 0px 2px rgba(0, 0, 0, 0.2);"><h1>'  + card.name +   '</h1></span></center>' +
            '<br /><br /><center><h1><font color="' + colors[card.rarity] + '">' + card.rarity + '</font></h1></center>' +
            '<center><h3><font color="black"><i>Points: </i></b></font> ' + card.points + '</h3>' +
            '</center><center><h3><b><font color="black"><i>Found in Packs: </h3></i></b></font></center><center>' + card.collection.join(', ') +
            '</center><br /></div>';
        this.sendReplyBox(' ' + html);
    },
 
    cardladder: function (target, room, user) {
        if (!this.runBroadcast()) return;
        var display = '<center><u><b>Card Ladder</b></u></center><br><table border="1" cellspacing="0" cellpadding="5" width="100%"><tbody><tr><th>Rank</th><th>Username</th><th>Points</th></tr>';
        var keys = Object.keys(Db('points').object()).map(function (name) {
            return {name: name, points: Db('points').get(name)};
        });
        if (!keys.length) return this.sendReplyBox("Card ladder is empty.");
        keys = keys.sort(function (a, b) {
            if (b.points > a.points) return 1;
            return -1;
        });
        keys.slice(0, 10).forEach(function (user, index) {
            display += "<tr><td>" + (index + 1) + "</td><td>" + user.name + "</td><td>" + user.points + "</td></tr>";
        });
        if (this.broadcasting && Number(target) > 10) target = null;
        if (!isNaN(target)) {
            if (Number(target) > 100) target = 100;
            keys.slice(10, target).forEach(function (user, index) {
                display += "<tr><td>" + (index + 11) + "</td><td>" + user.name + "</td><td>" + user.points + "</td></tr>";
            });
        }
        display += "</tbody></table>";
        this.sendReply("|raw|" + display);
    },
 
    psgo: 'cardshelp',
    cardshelp: function (target, room, user) {
        if (!this.canBroadcast()) return;
        return this.sendReplyBox('\
            <center><b><u>Alpha Trading Card Game:</u></b></center><br>\
            <b>/buypack</b> - Buys a pack from the pack shop.<br>\
            <b>/packshop</b> - Shows the shop for buying packs.<br>\
            <b>/openpack</b> - Opens a pack that has been purchased from the shop.<br>\
            <b>/showcase</b> - Shows a display of all cards that you have. Specify a page number to see more cards.<br>\
            <b>/card</b> - Shows data and information on any specifc card.<br>\
            <b>/cardladder</b> - Shows the leaderboard of the users with the most card points.<br>\
        ');
    

   },
 
    searchcards: function (target, room, user) {
        if (!this.runBroadcast()) return;
        if (!target) return this.errorReply('you need a search term');
        if (target === "ALL" && user.name === 'AuraStormLucario') {
            for (var x = 0; x < 888; x++) {
                this.parse('/card ' + allCards[x]);
            }
        } else {
            var j = 0;
            for (var i = 0; i < 900; i++) {
                if (allCards[i].slice(0, target.length) === target/*&& j <= 50*/) {
                    this.parse('/card ' + allCards[i]);
                    j++;
                }
            }
        }
    },
  };
