<script>
import FactualCard from '../components/FactualCard.vue'

export default {
  components: {
    FactualCard
  },
  data() {
    return {
      champions: [
        {
          id: 'aatrox.jpg',
          key: '1',
          name: 'Aatrox',
          title: 'The Darkin Blade',
          tags: ['Fighter', 'Tank']
        },
        {
          id: 'ahri',
          key: '2',
          name: 'Ahri',
          title: 'The Nine-Tailed Fox',
          tags: ['Mage', 'Assassin']
        },
        {
          id: 'akali',
          key: '3',
          name: 'Akali',
          title: 'The Rogue Assassin',
          tags: ['Assassin']
        },
        {
          id: 'akshan',
          key: '4',
          name: 'Akshan',
          title: 'The Rogue Sentinel',
          tags: ['Marksman']
        },
        {
          id: 'alistar',
          key: '5',
          name: 'Alistar',
          title: 'The Minotaur',
          tags: ['Tank', 'Support']
        },
        {
          id: 'amumu',
          key: '6',
          name: 'Amumu',
          title: 'The Sad Mummy',
          tags: ['Tank', 'Mage']
        },
        {
          id: 'anivia',
          key: '7',
          name: 'Anivia',
          title: 'The Cryophoenix',
          tags: ['Mage', 'Support']
        },
        {
          id: 'annie',
          key: '8',
          name: 'Annie',
          title: 'The Dark Child',
          tags: ['Mage']
        },
        {
          id: 'aphelios',
          key: '9',
          name: 'Aphelios',
          title: 'The Weapon of the Faithful',
          tags: ['Marksman', 'Fighter']
        },
        {
          id: 'ashe',
          key: '10',
          name: 'Ashe',
          title: 'The Frost Archer',
          tags: ['Marksman', 'Support']
        },
        {
          id: 'aurelionsol',
          key: '11',
          name: 'Aurelion Sol',
          title: 'The Star Forger',
          tags: ['Mage']
        },
        {
          id: 'azir',
          key: '12',
          name: 'Azir',
          title: 'The Emperor of the Sands',
          tags: ['Mage', 'Marksman']
        },
        {
          id: 'bard',
          key: '13',
          name: 'Bard',
          title: 'The Wander Caretaker',
          tags: ['Mage', 'Support']
        },
        {
          id: 'belveth',
          key: '14',
          name: "Bel'veth",
          title: 'The Empress of the Void',
          tags: ['Fighter']
        },
        {
          id: 'blitzcrank',
          key: '15',
          name: 'Blitzcrank',
          title: 'The Great Steam Golem',
          tags: ['Support', 'Tank']
        },
        {
          id: 'brand',
          key: '16',
          name: 'Brand',
          title: 'The Burning Vengeance',
          tags: ['Mage', 'Support']
        },
        {
          id: 'braum',
          key: '17',
          name: 'Braum',
          title: 'The Heart of the Frejlord',
          tags: ['Tank', 'Support']
        },
        {
          id: 'caitlyn',
          key: '18',
          name: 'Caitlyn',
          title: 'The Sheriff of Piltover',
          tags: ['Marksman']
        },
        {
          id: 'camille',
          key: '19',
          name: 'Camille',
          title: 'The Steel Shadow',
          tags: ['Fighter', 'Assassin']
        },
        {
          id: 'cassiopeia',
          key: '20',
          name: 'Cassiopeia',
          title: "The Serpent's Embrace",
          tags: ['Mage']
        },
        {
          id: 'chogath',
          key: '21',
          name: "Cho'gath",
          title: 'The Terror of the Void',
          tags: ['Tank']
        },
        {
          id: 'corki',
          key: '22',
          name: 'Corki',
          title: 'The Daring Bombardier',
          tags: ['Mage', 'Marksman']
        },
        {
          id: 'darius',
          key: '23',
          name: 'Darius',
          title: 'The Hand Of Noxus',
          tags: ['Fighter']
        },
        {
          id: 'diana',
          key: '24',
          name: 'Diana',
          title: 'Scorn Of The Moon',
          tags: ['Fighter']
        },
        {
          id: 'drmundo',
          key: '25',
          name: 'Dr. Mundo',
          title: 'The Madman Of Zaun',
          tags: ['Fighter', 'Tank']
        },
        {
          id: 'draven',
          key: '26',
          name: 'Draven',
          title: 'The Glorius Executioner',
          tags: ['Marksman']
        },
        {
          id: 'ekko',
          key: '27',
          name: 'Ekko',
          title: 'The Boy Who Shattered Time',
          tags: ['Assassin', 'Mage']
        },
        {
          id: 'elise',
          key: '28',
          name: 'Elise',
          title: 'The Spider Queen',
          tags: ['Assassin', 'Mage']
        },
        {
          id: 'evelynn',
          key: '29',
          name: 'Evelynn',
          title: "Agony's Embrace",
          tags: ['Assassin', 'Mage']
        },
        {
          id: 'ezreal',
          key: '30',
          name: 'Ezreal',
          title: 'The Prodical Explorer',
          tags: ['Marksman', 'Mage']
        },
        {
          id: 'fiddlesticks',
          key: '31',
          name: 'Fiddlesticks',
          title: 'The Ancient Fear',
          tags: ['Assassin', 'Mage']
        },
        {
          id: 'fiora',
          key: '32',
          name: 'Fiora',
          title: 'The Grand Duelist',
          tags: ['Fighter']
        },
        {
          id: 'fizz',
          key: '33',
          name: 'Fizz',
          title: 'The Tidal Trickster',
          tags: ['Assassin']
        },
        {
          id: 'galio',
          key: '34',
          name: 'Galio',
          title: 'The Colossus',
          tags: ['Tank', 'Support']
        },
        {
          id: 'gangplank',
          key: '35',
          name: 'Gangplank',
          title: 'The Saltwater Scourge',
          tags: ['Fighter', 'Assassin']
        },
        {
          id: 'garen',
          key: '36',
          name: 'Garen',
          title: 'The Might Of Demacia',
          tags: ['Fighter', 'Tank', 'Assassin']
        },
        {
          id: 'gwen',
          key: '37',
          name: 'Gwen',
          title: 'The Hallowed Seamstress',
          tags: ['Fighter']
        },
        {
          id: 'hecarim',
          key: '38',
          name: 'Hecarim',
          title: 'The Shadow Of War',
          tags: ['Fighter', 'Tank', 'Assassin']
        },
        {
          id: 'heimerdinger',
          key: '39',
          name: 'Heimerdinger',
          title: 'The Revered Inventor',
          tags: ['Mage', 'Support']
        },
        {
          id: 'illaoi',
          key: '40',
          name: 'Illaoi',
          title: 'The Kraken Priestess',
          tags: ['Tank', 'Fighter']
        },
        {
          id: 'irelia',
          key: '41',
          name: 'Irelia',
          title: 'The Blade Dancer',
          tags: ['Assassin', 'Fighter']
        },
        {
          id: 'ivern',
          key: '42',
          name: 'Ivern',
          title: 'The Green Father',
          tags: ['Support']
        },
        {
          id: 'janna',
          key: '43',
          name: 'Janna',
          title: "The Storm's Fury",
          tags: ['Support']
        },
        {
          id: 'jarvanIV',
          key: '44',
          name: 'Jarvan IV',
          title: 'The Exemplar of Demacia',
          tags: ['Tank', 'Figher', 'Support', 'Assassin']
        },
        {
          id: 'jayce',
          key: '45',
          name: 'Jayce',
          title: 'The Defender Of Tomorow',
          tags: ['Fighter', 'Assassin']
        },
        {
          id: 'jhin',
          key: '46',
          name: 'Jhin',
          title: 'The Virtuso',
          tags: ['Marksman']
        },
        {
          id: 'jinx',
          key: '47',
          name: 'Jinx',
          title: 'The Loose Cannon',
          tags: ['Marksman']
        },
        {
          id: 'ksante',
          key: '48',
          name: "K'Sante",
          title: 'The Pride of Nazumah',
          tags: ['Tank', 'Figher']
        },
        {
          id: 'kaisa',
          key: '49',
          name: "Kai'Sa",
          title: 'Daughter Of The Void',
          tags: ['Marksman', 'Assassin']
        },
        {
          id: 'kalista',
          key: '50',
          name: 'Kalista',
          title: 'The Spear of Vengance',
          tags: ['Marksman']
        },
        {
          id: 'karma',
          key: '51',
          name: 'Karma',
          title: 'The Enlightened One',
          tags: ['Support', 'Mage']
        },
        {
          id: 'karthus',
          key: '52',
          name: 'Karthus',
          title: 'The DeathSinger',
          tags: ['Mage', 'Assassin']
        },
        {
          id: 'kassadin',
          key: '53',
          name: 'Kassadin',
          title: 'The Void Walker',
          tags: ['Mage', 'Assassin']
        },
        {
          id: 'katarina',
          key: '54',
          name: 'Katarina',
          title: 'The Sinister Blade',
          tags: ['Assassin']
        },
        {
          id: 'kayle',
          key: '55',
          name: 'Kayle',
          title: 'The Righteous',
          tags: ['Fighter']
        },
        {
          id: 'kayn',
          key: '56',
          name: 'Kayn',
          title: 'The Shadow Reaper',
          tags: ['Fighter', 'Assassin']
        },
        {
          id: 'kennen',
          key: '57',
          name: 'kennen',
          title: 'The Heart Of The Tempest',
          tags: ['Fighter', 'Mage', 'Marksman']
        },
        {
          id: 'khazix',
          key: '58',
          name: "Kha'Zix",
          title: 'The Voidreaver',
          tags: ['Fighter', 'Assassin']
        },
        {
          id: 'kindred',
          key: '59',
          name: 'Kindred',
          title: 'The Eternal Hunters',
          tags: ['Marksman']
        },
        {
          id: 'kled',
          key: '60',
          name: 'Kled',
          title: 'The Cantankerous Cavalier',
          tags: ['Fighter', 'Tank']
        },
        {
          id: 'kogmaw',
          key: '61',
          name: "Kog'Maw",
          title: 'The Mouth Of The Abyss',
          tags: ['Marksman']
        },
        {
          id: 'leblanc',
          key: '62',
          name: 'Leblanc',
          title: 'The Deceiver',
          tags: ['Mage', 'Assassin']
        },
        {
          id: 'leesin',
          key: '63',
          name: 'Lee Sin',
          title: 'The Blind Monk',
          tags: ['Fighter', 'Assassin']
        },
        {
          id: 'leona',
          key: '64',
          name: 'Leona',
          title: 'The Radiant Dawn',
          tags: ['Tank', 'Support']
        },
        {
          id: 'lillia',
          key: '65',
          name: 'Lillia',
          title: 'The Bashful Bloom',
          tags: ['Fighter', 'Mage']
        },
        {
          id: 'lissandra',
          key: '66',
          name: 'Lissandra',
          title: 'The Ice Witch',
          tags: ['Mage', 'Assassin']
        },
        {
          id: 'lucian',
          key: '67',
          name: 'Lucian',
          title: 'The Purifier',
          tags: ['Marksman']
        },
        {
          id: 'lulu',
          key: '68',
          name: 'Lulu',
          title: 'The Fae Sorceress',
          tags: ['Support', 'Mage']
        },
        {
          id: 'lux',
          key: '69',
          name: 'Lux',
          title: 'The Lady Of Luminosity',
          tags: ['Support', 'Mage']
        },
        {
          id: 'malphite',
          key: '70',
          name: 'Malphite',
          title: 'Shard Of The Monolith',
          tags: ['Tank', 'Assassin', 'Support']
        },
        {
          id: 'malzahar',
          key: '71',
          name: 'Malzahar',
          title: 'The Prophet Of The Void',
          tags: ['Mage']
        },
        {
          id: 'maokai',
          key: '72',
          name: 'Maokai',
          title: 'The Twisted Treant',
          tags: ['Tank', 'Support']
        },
        {
          id: 'masteryi',
          key: '73',
          name: 'Master Yi',
          title: 'The Wuju Blademaster',
          tags: ['Marksman', 'Assassin', 'Fighter']
        },
        {
          id: 'missfortune',
          key: '74',
          name: 'Miss Fortune',
          title: 'The Bounty Hunter',
          tags: ['Marksman']
        },
        {
          id: 'mordekaiser',
          key: '75',
          name: 'Mordekaiser',
          title: 'The Iron Revenant',
          tags: ['Fighter', 'Tank']
        },
        {
          id: 'morgana',
          key: '76',
          name: 'Morgana',
          title: 'The Fallen ',
          tags: ['Support', 'Mage']
        },
        {
          id: 'nami',
          key: '77',
          name: 'Nami',
          title: 'The Tidecaller',
          tags: ['Support', 'Mage']
        },
        {
          id: 'nasus',
          key: '78',
          name: 'Nasus',
          title: 'The Curator Of The Sands',
          tags: ['Fighter', 'Tank']
        },
        {
          id: 'nautilus',
          key: '79',
          name: 'Nautilus',
          title: 'The Titan Of The Depth',
          tags: ['Tank', 'Support']
        },
        {
          id: 'neeko',
          key: '80',
          name: 'Neeko',
          title: 'The Curious Chameleon',
          tags: ['Support', 'Mage']
        },
        {
          id: 'nidalee',
          key: '81',
          name: 'Nidalee',
          title: 'The Beestial Huntress',
          tags: ['Assassin', 'Fighter']
        },
        {
          id: 'nilah',
          key: '82',
          name: 'Nilah',
          title: 'The Joy Unbound',
          tags: ['Marksman', 'Fighter']
        },
        {
          id: 'nocturne',
          key: '83',
          name: 'Nocturne',
          title: 'The Eternal Nightmare',
          tags: ['Assassin', 'Fighter']
        },
        {
          id: 'nunu&willump',
          key: '84',
          name: 'Nunu & Willump',
          title: 'The Boy And His Yeti',
          tags: ['Tank']
        },
        {
          id: 'olaf',
          key: '85',
          name: 'Olaf',
          title: 'The Beserker',
          tags: ['Fighter']
        },
        {
          id: 'orianna',
          key: '86',
          name: 'Orianna',
          title: 'The Lady Of Clockwork',
          tags: ['Mage']
        },
        {
          id: 'ornn',
          key: '87',
          name: 'Ornn',
          title: 'The Fire Below The Mountain',
          tags: ['Tank', 'Support']
        },
        {
          id: 'pantheon',
          key: '88',
          name: 'Pantheon',
          title: 'The Unbreakable Spear',
          tags: ['Fighter']
        },
        {
          id: 'poppy',
          key: '89',
          name: 'Poppy',
          title: 'Kepper Of The Hammer',
          tags: ['Tank', 'Support', 'Fighter']
        },
        {
          id: 'pyke',
          key: '90',
          name: 'Pyke',
          title: 'The Bloodharbor Ripper',
          tags: ['Assassin', 'Support', 'Fighter']
        },
        {
          id: 'qiyana',
          key: '91',
          name: 'Qiyana',
          title: 'Empress Of The Elements',
          tags: ['Assassin']
        },
        {
          id: 'quinn',
          key: '92',
          name: 'Quinn',
          title: "Demacia's Wings",
          tags: ['Marksman']
        },
        {
          id: 'rakan',
          key: '93',
          name: 'Rakan',
          title: 'The Charmer',
          tags: ['Support']
        },
        {
          id: 'rammus',
          key: '94',
          name: 'Rammus',
          title: 'The Armordillo',
          tags: ['Tank', 'Support']
        },
        {
          id: 'reksai',
          key: '95',
          name: "Rek'Sai",
          title: 'The Void Burrower',
          tags: ['Fighter', 'Assassin']
        },
        {
          id: 'rell',
          key: '96',
          name: 'Rell',
          title: 'The Iron Maiden',
          tags: ['Tank', 'Support']
        },
        {
          id: 'renataglasc',
          key: '97',
          name: 'Renata Glasc',
          title: 'The Chem-Baroness',
          tags: ['Support']
        },
        {
          id: 'renekton',
          key: '98',
          name: 'Renekton',
          title: 'The Butcher Of The Sands',
          tags: ['Marksman']
        },
        {
          id: 'rengar',
          key: '99',
          name: 'Rengar',
          title: 'The Pridestalker',
          tags: ['Fighter', 'Assassin']
        },
        {
          id: 'riven',
          key: '100',
          name: 'Riven',
          title: 'The Exile',
          tags: ['Fighter']
        },
        {
          id: 'rumble',
          key: '101',
          name: 'Rumble',
          title: 'The Mechanized Menance',
          tags: ['Fighter', 'Mage']
        },
        {
          id: 'ryze',
          key: '102',
          name: 'Ryze',
          title: 'The Rune Mage',
          tags: ['Mage']
        },
        {
          id: 'samira',
          key: '103',
          name: 'Samira',
          title: 'The Desert Rose',
          tags: ['Marksman']
        },
        {
          id: 'sejuani',
          key: '104',
          name: 'Sejuani',
          title: 'Fury Of The North',
          tags: ['Tank', 'Support']
        },
        {
          id: 'senna',
          key: '105',
          name: 'Senna',
          title: 'The Redeemer',
          tags: ['Marksman', 'Support']
        },
        {
          id: 'seraphine',
          key: '106',
          name: 'Seraphine',
          title: 'The Starry-Eyed Songtress',
          tags: ['Mage', 'Support']
        },
        {
          id: 'sett',
          key: '107',
          name: 'Sett',
          title: 'The Boss',
          tags: ['Fighter', 'Tank']
        },
        {
          id: 'shaco',
          key: '108',
          name: 'Shaco',
          title: 'The Demon Jester',
          tags: ['Support', 'Mage', 'Assassin', 'Fighter']
        },
        {
          id: 'shen',
          key: '109',
          name: 'Shen',
          title: 'The Eye Of Twlight',
          tags: ['Marksman']
        },
        {
          id: 'shyvana',
          key: '110',
          name: 'Shyvana',
          title: 'The Half-Dragon',
          tags: ['Tank', 'Fighter', 'Mage']
        },
        {
          id: 'singed',
          key: '111',
          name: 'Singed',
          title: 'The Mad Chemist',
          tags: ['Tank']
        },
        {
          id: 'sion',
          key: '112',
          name: 'Sion',
          title: 'The Undead Juggernaut',
          tags: ['Tank']
        },
        {
          id: 'sivir',
          key: '113',
          name: 'Sivir',
          title: 'The Battle Mitress',
          tags: ['Marksman']
        },
        {
          id: 'skarner',
          key: '114',
          name: 'Skarner',
          title: 'The Crystal Vanguard',
          tags: ['Fighter', 'Tank']
        },
        {
          id: 'sona',
          key: '115',
          name: 'Sona',
          title: 'Maven Of The Strings',
          tags: ['Support', 'Mage']
        },
        {
          id: 'soraka',
          key: '116',
          name: 'Soraka',
          title: 'The Starchild',
          tags: ['Support', 'Mage']
        },
        {
          id: 'swain',
          key: '117',
          name: 'Swain',
          title: 'The Noxian Grand General',
          tags: ['Support', 'Mage']
        },
        {
          id: 'sylas',
          key: '118',
          name: 'Sylas',
          title: 'The Unshackled',
          tags: ['Mage']
        },
        {
          id: 'syndra',
          key: '119',
          name: 'Syndra',
          title: 'The Dark Sovereign',
          tags: ['Mage']
        },
        {
          id: 'tahmkench',
          key: '120',
          name: 'Tahm Kench',
          title: 'The River King',
          tags: ['Support', 'Tank']
        },
        {
          id: 'taliyah',
          key: '121',
          name: 'Taliyah',
          title: 'The Stoneweaver',
          tags: ['Mage']
        },
        {
          id: 'talon',
          key: '122',
          name: 'Talon',
          title: "The Blade's Shadow",
          tags: ['Assassin']
        },
        {
          id: 'taric',
          key: '123',
          name: 'Taric',
          title: 'The Sheild Of Valoran',
          tags: ['Support', 'Tank']
        },
        {
          id: 'teemo',
          key: '124',
          name: 'Teemo',
          title: 'The Swift Scout',
          tags: ['Marksman', 'Mage', 'Assassin']
        },
        {
          id: 'thresh',
          key: '125',
          name: 'Thresh',
          title: 'The Chain Warden',
          tags: ['Support', 'Tank']
        },
        {
          id: 'tristana',
          key: '126',
          name: 'Teemo',
          title: 'The Yordle Gunner',
          tags: ['Marksman']
        },
        {
          id: 'trundle',
          key: '127',
          name: 'Trundle',
          title: 'The Troll King',
          tags: ['Fighter', 'Tank']
        },
        {
          id: 'tryndamere',
          key: '128',
          name: 'Trundle',
          title: 'The Barbarian King',
          tags: ['Fighter']
        },
        {
          id: 'twistedfate',
          key: '129',
          name: 'Twisted Fate',
          title: 'The Card Master',
          tags: ['Mage', 'Assassin']
        },
        {
          id: 'twitch',
          key: '130',
          name: 'Twitch',
          title: 'The Plague Rat',
          tags: ['Marksman', 'Assassin']
        },
        {
          id: 'udyr',
          key: '131',
          name: 'Udyr',
          title: 'The Spirit Walker',
          tags: ['Fighter', 'Tank']
        },
        {
          id: 'urgot',
          key: '132',
          name: 'Urgot',
          title: 'The Dreadnought',
          tags: ['Fighter', 'Tank']
        },
        {
          id: 'varus',
          key: '133',
          name: 'Varus',
          title: 'The Arrow Of Retribution',
          tags: ['Marksman']
        },
        {
          id: 'vayne',
          key: '134',
          name: 'Vayne',
          title: 'The Night Hunter',
          tags: ['Marksman']
        },
        {
          id: 'veigar',
          key: '135',
          name: 'Veigar',
          title: 'The Tiny Master Of Evil',
          tags: ['Mage', 'Assassin']
        },
        {
          id: 'velkoz',
          key: '136',
          name: "Vel'Koz",
          title: 'The Eye Of The Void',
          tags: ['Mage', 'Support']
        },
        {
          id: 'vex',
          key: '137',
          name: 'Vex',
          title: 'The Gloomist',
          tags: ['Mage', 'Assassin']
        },
        {
          id: 'vex',
          key: '160',
          name: 'Vex',
          title: 'The Gloomist',
          tags: ['Mage', 'Assassin']
        },
        {
          id: 'vex',
          key: '159',
          name: 'Vex',
          title: 'The Gloomist',
          tags: ['Mage', 'Assassin']
        },
        {
          id: 'vi',
          key: '138',
          name: 'Vi',
          title: 'The Piltover Enforcer',
          tags: ['Tank', 'Fighter']
        },
        {
          id: 'viego',
          key: '139',
          name: 'Viego',
          title: 'The Ruined King',
          tags: ['Assassin', 'Fighter']
        },
        {
          id: 'viktor',
          key: '140',
          name: 'Viktor',
          title: 'The Machin Herald',
          tags: ['Mage']
        },
        {
          id: 'vladimir',
          key: '141',
          name: 'Vladimir',
          title: 'The Crimson Reaper',
          tags: ['Mage', 'Assassin']
        },
        {
          id: 'volibaer',
          key: '142',
          name: 'Volibear',
          title: 'The Relentless Storm',
          tags: ['Tank', 'Fighter']
        },
        {
          id: 'warwick',
          key: '143',
          name: 'Warwick',
          title: 'The Uncaged Wrath Of Zaun',
          tags: ['Assassin', 'Fighter']
        },
        {
          id: 'wukong',
          key: '144',
          name: 'Wukong',
          title: 'The Monkey King',
          tags: ['Fighter']
        },
        {
          id: 'xayah',
          key: '145',
          name: 'Xayah',
          title: 'The Rebel',
          tags: ['Marksman']
        },
        {
          id: 'xerath',
          key: '146',
          name: 'Xerath',
          title: 'The Magus Ascendant',
          tags: ['Mage']
        },
        {
          id: 'xinzhao',
          key: '147',
          name: 'Xin Zhao',
          title: 'The Seneschal Of Denmacia',
          tags: ['Fighter', 'Tank']
        },
        {
          id: 'yasuo',
          key: '148',
          name: 'Yasuo',
          title: 'The Unforgiven',
          tags: ['Marksman', 'Fighter']
        },
        {
          id: 'yone',
          key: '149',
          name: 'Yone',
          title: 'The Unforgotten',
          tags: ['Marksman', 'Fighter']
        },
        {
          id: 'yorick',
          key: '150',
          name: 'Yorick',
          title: 'Shephead Of Souls',
          tags: ['Fighter']
        },
        {
          id: 'yuumi',
          key: '151',
          name: 'Yummi',
          title: 'The Magical Cat',
          tags: ['Support']
        },
        {
          id: 'zac',
          key: '152',
          name: 'Zac',
          title: 'The Secret Weapon',
          tags: ['Tank']
        },
        {
          id: 'zed',
          key: '153',
          name: 'Zed',
          title: 'The Master of Shadows',
          tags: ['Assassin']
        },
        {
          id: 'zeri',
          key: '154',
          name: 'Zeri',
          title: 'The Spark Of Zaun',
          tags: ['Marksman']
        },
        {
          id: 'ziggs',
          key: '155',
          name: 'Ziggs',
          title: 'The Hexplosives Expert',
          tags: ['Mage']
        },
        {
          id: 'zilean',
          key: '156',
          name: 'Zilean',
          title: 'The Chronokeeper',
          tags: ['Mage', 'Support']
        },
        {
          id: 'zoe',
          key: '157',
          name: 'Zoe',
          title: 'The Aspect Of Twilight',
          tags: ['Mage', 'Assassin']
        },
        {
          id: 'zyra',
          key: '158',
          name: 'Zyra',
          title: 'Rise Of The Thorns',
          tags: ['Mage', 'Support']
        }
      ]
    }
  }
}
</script>

<template>
  <main>
    <div id="container-box">
      <FactualCard
        v-for="champion in champions"
        :key="champion.name"
        :name="champion.name"
        :title="champion.title"
        :id="champion.id"
      />
    </div>
  </main>
</template>
