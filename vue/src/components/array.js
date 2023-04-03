const champions= [
    {
      id: 'aatrox.jpg',
      link: `https://www.leagueoflegends.com/en-us/champions/aatrox`,
      link2: 'https://u.gg/lol/champions/aatrox/build',
      key: '1',
      name: 'Aatrox',
      title: 'The Darkin Blade',
      tags: ['Fighter', 'Tank', 'All']
    },
    {
      id: 'ahri.jpg',
      link: 'https://www.leagueoflegends.com/en-us/champions/ahri/',
      link2: 'https://u.gg/lol/champions/ahri/build',
      key: '2',
      name: 'Ahri',
      title: 'The Nine-Tailed Fox',
      tags: ['Mage', 'Assassin', 'All']
    },
    {
      id: 'akali.jpg',
      key: '3',
      link: 'https://www.leagueoflegends.com/en-us/champions/akali/',
      link2: 'https://u.gg/lol/champions/akali/build',
      name: 'Akali',
      title: 'The Rogue Assassin',
      tags: ['Assassin', 'All']
    },
    {
      id: 'akshan.jpg',
      key: '4',
      link: 'https://www.leagueoflegends.com/en-us/champions/akshan/',
      link2: 'https://u.gg/lol/champions/akshan/build',
      name: 'Akshan',
      title: 'The Rogue Sentinel',
      tags: ['Marksman', 'All']
    },
    {
      id: 'alistar.jpg',
      key: '5',
      link: 'https://www.leagueoflegends.com/en-us/champions/alistar/',
      link2: 'https://u.gg/lol/champions/alistar/build',
      name: 'Alistar',
      title: 'The Minotaur',
      tags: ['Tank', 'Support', 'All']
    },
    {
      id: 'amumu.jpg',
      key: '6',
      link: 'https://www.leagueoflegends.com/en-us/champions/amumu/',
      link2: 'https://u.gg/lol/champions/amumu/build',
      name: 'Amumu',
      title: 'The Sad Mummy',
      tags: ['Tank', 'Mage', 'All']
    },
    {
      id: 'anivia.jpg',
      key: '7',
      link: 'https://www.leagueoflegends.com/en-us/champions/anivia/',
      link2: 'https://u.gg/lol/champions/anivia/build',
      name: 'Anivia',
      title: 'The Cryophoenix',
      tags: ['Mage', 'Support', 'All']
    },
    {
      id: 'annie.jpg',
      key: '8',
      link: 'https://www.leagueoflegends.com/en-us/champions/annie/',
      link2: 'https://u.gg/lol/champions/annie/build',
      name: 'Annie',
      title: 'The Dark Child',
      tags: ['Mage', 'All']
    },
    {
      id: 'aphelios.jpg',
      key: '9',
      link: 'https://www.leagueoflegends.com/en-us/champions/aphelios/',
      link2: 'https://u.gg/lol/champions/aphelios/build',
      name: 'Aphelios',
      title: 'The Weapon of the Faithful',
      tags: ['Marksman', 'Fighter', 'All']
    },
    {
      id: 'ashe.jpg',
      key: '10',
      link: 'https://www.leagueoflegends.com/en-us/champions/ashe/',
      link2: 'https://u.gg/lol/champions/ashe/build',
      name: 'Ashe',
      title: 'The Frost Archer',
      tags: ['Marksman', 'Support', 'All']
    },
    {
      id: 'aurelionsol.jpg',
      key: '11',
      link: 'https://www.leagueoflegends.com/en-us/champions/aurelionsol/',
      link2: 'https://u.gg/lol/champions/aurelionsol/build',
      name: 'Aurelion Sol',
      title: 'The Star Forger',
      tags: ['Mage', 'All']
    },
    {
      id: 'azir.jpg',
      key: '12',
      link: 'https://www.leagueoflegends.com/en-us/champions/azir/',
      link2: 'https://u.gg/lol/champions/azir/build',
      name: 'Azir',
      title: 'The Emperor of the Sands',
      tags: ['Mage', 'Marksman', 'All']
    },
    {
      id: 'bard.jpg',
      key: '13',
      link: 'https://www.leagueoflegends.com/en-us/champions/bard/',
      link2: 'https://u.gg/lol/champions/bard/build',
      name: 'Bard',
      title: 'The Wander Caretaker',
      tags: ['Mage', 'Support', 'All']
    },
    {
      id: 'belveth.jpg',
      key: '14',
      link: 'https://www.leagueoflegends.com/en-us/champions/bel-veth/',
      link2: 'https://u.gg/lol/champions/belveth/build',
      name: "Bel'veth",
      title: 'The Empress of the Void',
      tags: ['Fighter', 'All']
    },
    {
      id: 'blitzcrank.jpg',
      key: '15',
      link: 'https://www.leagueoflegends.com/en-us/champions/blitzcrank/',
      link2: 'https://u.gg/lol/champions/blitzcrank/build',
      name: 'Blitzcrank',
      title: 'The Great Steam Golem',
      tags: ['Support', 'Tank', 'All']
    },
    {
      id: 'brand.jpg',
      key: '16',
      link: 'https://www.leagueoflegends.com/en-us/champions/brand/',
      link2: 'https://u.gg/lol/champions/brand/build',
      name: 'Brand',
      title: 'The Burning Vengeance',
      tags: ['Mage', 'Support', 'All']
    },
    {
      id: 'braum.jpg',
      key: '17',
      link: 'https://www.leagueoflegends.com/en-us/champions/braum/',
      link2: 'https://u.gg/lol/champions/braum/build',
      name: 'Braum',
      title: 'The Heart of the Frejlord',
      tags: ['Tank', 'Support', 'All']
    },
    {
      id: 'caitlyn.jpg',
      key: '18',
      link: 'https://www.leagueoflegends.com/en-us/champions/caitlyn/',
      link2: 'https://u.gg/lol/champions/caitlyn/build',
      name: 'Caitlyn',
      title: 'The Sheriff of Piltover',
      tags: ['Marksman', 'All']
    },
    {
      id: 'camille.jpg',
      key: '19',
      link: 'https://www.leagueoflegends.com/en-us/champions/camille/',
      link2: 'https://u.gg/lol/champions/camille/build',
      name: 'Camille',
      title: 'The Steel Shadow',
      tags: ['Fighter', 'Assassin', 'All']
    },
    {
      id: 'cassiopeia.jpg',
      key: '20',
      link: 'https://www.leagueoflegends.com/en-us/champions/cassiopeia/',
      link2: 'https://u.gg/lol/champions/cassiopeia/build',
      name: 'Cassiopeia',
      title: "The Serpent's Embrace",
      tags: ['Mage', 'All']
    },
    {
      id: 'chogath.jpg',
      key: '21',
      link: 'https://www.leagueoflegends.com/en-us/champions/cho-gath/',
      link2: 'https://u.gg/lol/champions/chogath/build',
      name: "Cho'gath",
      title: 'The Terror of the Void',
      tags: ['Tank', 'All']
    },
    {
      id: 'corki.jpg',
      key: '22',
      link: 'https://www.leagueoflegends.com/en-us/champions/corki/',
      link2: 'https://u.gg/lol/champions/corki/build',
      name: 'Corki',
      title: 'The Daring Bombardier',
      tags: ['Mage', 'Marksman', 'All']
    },
    {
      id: 'darius.jpg',
      key: '23',
      link: 'https://www.leagueoflegends.com/en-us/champions/darius/',
      link2: 'https://u.gg/lol/champions/darius/build',
      name: 'Darius',
      title: 'The Hand Of Noxus',
      tags: ['Fighter', 'All']
    },
    {
      id: 'diana.jpg',
      key: '24',
      link: 'https://www.leagueoflegends.com/en-us/champions/diana/',
      link2: 'https://u.gg/lol/champions/diana/build',
      name: 'Diana',
      title: 'Scorn Of The Moon',
      tags: ['Fighter', 'All']
    },
    {
      id: 'drmundo.jpg',
      key: '25',
      link: 'https://www.leagueoflegends.com/en-us/champions/dr-mundo/',
      link2: 'https://u.gg/lol/champions/drmundo/build',
      name: 'Dr. Mundo',
      title: 'The Madman Of Zaun',
      tags: ['Fighter', 'Tank', 'All']
    },
    {
      id: 'draven.jpg',
      key: '26',
      link: 'https://www.leagueoflegends.com/en-us/champions/draven/',
      link2: 'https://u.gg/lol/champions/draven/build',
      name: 'Draven',
      title: 'The Glorius Executioner',
      tags: ['Marksman', 'All']
    },
    {
      id: 'ekko.jpg',
      key: '27',
      link: 'https://www.leagueoflegends.com/en-us/champions/ekko/',
      link2: 'https://u.gg/lol/champions/ekko/build',
      name: 'Ekko',
      title: 'The Boy Who Shattered Time',
      tags: ['Assassin', 'Mage', 'All']
    },
    {
      id: 'elise.jpg',
      key: '28',
      link: 'https://www.leagueoflegends.com/en-us/champions/elise/',
      link2: 'https://u.gg/lol/champions/elise/build',
      name: 'Elise',
      title: 'The Spider Queen',
      tags: ['Assassin', 'Mage', 'All']
    },
    {
      id: 'evelynn.jpg',
      key: '29',
      link: 'https://www.leagueoflegends.com/en-us/champions/evelynn/',
      link2: 'https://u.gg/lol/champions/evelynn/build',
      name: 'Evelynn',
      title: "Agony's Embrace",
      tags: ['Assassin', 'Mage', 'All']
    },
    {
      id: 'ezreal.jpg',
      key: '30',
      link: 'https://www.leagueoflegends.com/en-us/champions/ezreal/',
      link2: 'https://u.gg/lol/champions/ezreal/build',
      name: 'Ezreal',
      title: 'The Prodical Explorer',
      tags: ['Marksman', 'Mage', 'All']
    },
    {
      id: 'fiddlesticks.jpg',
      key: '31',
      link: 'https://www.leagueoflegends.com/en-us/champions/fiddlesticks/',
      link2: 'https://u.gg/lol/champions/fiddlesticks/build',
      name: 'Fiddlesticks',
      title: 'The Ancient Fear',
      tags: ['Assassin', 'Mage', 'All']
    },
    {
      id: 'fiora.jpg',
      key: '32',
      link: 'https://www.leagueoflegends.com/en-us/champions/fiora/',
      link2: 'https://u.gg/lol/champions/fiora/build',
      name: 'Fiora',
      title: 'The Grand Duelist',
      tags: ['Fighter', 'All']
    },
    {
      id: 'fizz.jpg',
      key: '33',
      link: 'https://www.leagueoflegends.com/en-us/champions/fizz/',
      link2: 'https://u.gg/lol/champions/fizz/build',
      name: 'Fizz',
      title: 'The Tidal Trickster',
      tags: ['Assassin', 'All']
    },
    {
      id: 'galio.jpg',
      key: '34',
      link: 'https://www.leagueoflegends.com/en-us/champions/galio/',
      link2: 'https://u.gg/lol/champions/galio/build',
      name: 'Galio',
      title: 'The Colossus',
      tags: ['Tank', 'Support', 'All']
    },
    {
      id: 'gangplank.jpg',
      key: '35',
      link: 'https://www.leagueoflegends.com/en-us/champions/gangplank/',
      link2: 'https://u.gg/lol/champions/gangplank/build',
      name: 'Gangplank',
      title: 'The Saltwater Scourge',
      tags: ['Fighter', 'Assassin', 'All']
    },
    {
      id: 'garen.jpg',
      key: '36',
      link: 'https://www.leagueoflegends.com/en-us/champions/garen/',
      link2: 'https://u.gg/lol/champions/garen/build',
      name: 'Garen',
      title: 'The Might Of Demacia',
      tags: ['Fighter', 'Tank', 'Assassin', 'All']
    },
    {
      id: 'gnar.jpg',
      key: '159',
      link: 'https://www.leagueoflegends.com/en-us/champions/gnar/',
      link2: 'https://u.gg/lol/champions/gnar/build',
      name: 'Gnar',
      title: 'The Missing Link',
      tags: ['Fighter', 'Tank', 'All']
    },
    {
      id: 'gragas.jpg',
      key: '160',
      link: 'https://www.leagueoflegends.com/en-us/champions/gragas/',
      link2: 'https://u.gg/lol/champions/gragas/build',
      name: 'Gragas',
      title: 'The Rabble Rouser',
      tags: ['Fighter', 'Mage', 'All']
    },
    {
      id: 'graves.jpg',
      key: '161',
      link: 'https://www.leagueoflegends.com/en-us/champions/graves/',
      link2: 'https://u.gg/lol/champions/graves/build',
      name: 'Graves',
      title: 'The Outlaw',
      tags: ['Fighter', 'Marksman', 'All']
    },
    {
      id: 'gwen.jpg',
      key: '37',
      link: 'https://www.leagueoflegends.com/en-us/champions/gwen/',
      link2: 'https://u.gg/lol/champions/gwen/build',
      name: 'Gwen',
      title: 'The Hallowed Seamstress',
      tags: ['Fighter', 'All']
    },
    {
      id: 'hecarim.jpg',
      key: '38',
      link: 'https://www.leagueoflegends.com/en-us/champions/hecarim/',
      link2: 'https://u.gg/lol/champions/hecarim/build',
      name: 'Hecarim',
      title: 'The Shadow Of War',
      tags: ['Fighter', 'Tank', 'Assassin', 'All']
    },
    {
      id: 'heimerdinger.jpg',
      key: '39',
      link: 'https://www.leagueoflegends.com/en-us/champions/heimerdinger/',
      link2: 'https://u.gg/lol/champions/heimerdinger/build',
      name: 'Heimerdinger',
      title: 'The Revered Inventor',
      tags: ['Mage', 'Support', 'All']
    },
    {
      id: 'illaoi.jpg',
      key: '40',
      link: 'https://www.leagueoflegends.com/en-us/champions/illaoi/',
      link2: 'https://u.gg/lol/champions/illaoi/build',
      name: 'Illaoi',
      title: 'The Kraken Priestess',
      tags: ['Tank', 'Fighter', 'All']
    },
    {
      id: 'irelia.jpg',
      key: '41',
      link: 'https://www.leagueoflegends.com/en-us/champions/irelia/',
      link2: 'https://u.gg/lol/champions/irelia/build',
      name: 'Irelia',
      title: 'The Blade Dancer',
      tags: ['Assassin', 'Fighter', 'All']
    },
    {
      id: 'ivern.jpg',
      key: '42',
      link: 'https://www.leagueoflegends.com/en-us/champions/ivern/',
      link2: 'https://u.gg/lol/champions/ivern/build',
      name: 'Ivern',
      title: 'The Green Father',
      tags: ['Support', 'All']
    },
    {
      id: 'janna.jpg',
      key: '43',
      link: 'https://www.leagueoflegends.com/en-us/champions/janna/',
      link2: 'https://u.gg/lol/champions/janna/build',
      name: 'Janna',
      title: "The Storm's Fury",
      tags: ['Support', 'All']
    },
    {
      id: 'jarvanIV.jpg',
      key: '44',
      link: 'https://www.leagueoflegends.com/en-us/champions/jarvan-iv/',
      link2: 'https://u.gg/lol/champions/jarvanIV/build',
      name: 'Jarvan IV',
      title: 'The Exemplar of Demacia',
      tags: ['Tank', 'Figher', 'Support', 'Assassin', 'All']
    },
    {
      id: 'jayce.jpg',
      key: '45',
      link: 'https://www.leagueoflegends.com/en-us/champions/jayce/',
      link2: 'https://u.gg/lol/champions/jayce/build',
      name: 'Jayce',
      title: 'The Defender Of Tomorow',
      tags: ['Fighter', 'Assassin', 'All']
    },
    {
      id: 'jhin.jpg',
      key: '46',
      link: 'https://www.leagueoflegends.com/en-us/champions/jhin/',
      link2: 'https://u.gg/lol/champions/jhin/build',
      name: 'Jhin',
      title: 'The Virtuso',
      tags: ['Marksman', 'All']
    },
    {
      id: 'jinx.jpg',
      key: '47',
      link: 'https://www.leagueoflegends.com/en-us/champions/jinx/',
      link2: 'https://u.gg/lol/champions/jinx/build',
      name: 'Jinx',
      title: 'The Loose Cannon',
      tags: ['Marksman', 'All']
    },
    {
      id: 'ksante.jpg',
      key: '48',
      link: 'https://www.leagueoflegends.com/en-us/champions/k-sante/',
      link2: 'https://u.gg/lol/champions/ksante/build',
      name: "K'Sante",
      title: 'The Pride of Nazumah',
      tags: ['Tank', 'Figher', 'All']
    },
    {
      id: 'kaisa.jpg',
      key: '49',
      link: 'https://www.leagueoflegends.com/en-us/champions/kai-sa/',
      link2: 'https://u.gg/lol/champions/kaisa/build',
      name: "Kai'Sa",
      title: 'Daughter Of The Void',
      tags: ['Marksman', 'Assassin', 'All']
    },
    {
      id: 'kalista.jpg',
      key: '50',
      link: 'https://www.leagueoflegends.com/en-us/champions/kalista/',
      link2: 'https://u.gg/lol/champions/kalista/build',
      name: 'Kalista',
      title: 'The Spear of Vengance',
      tags: ['Marksman', 'All']
    },
    {
      id: 'karma.jpg',
      key: '51',
      link: 'https://www.leagueoflegends.com/en-us/champions/karma/',
      link2: 'https://u.gg/lol/champions/karma/build',
      name: 'Karma',
      title: 'The Enlightened One',
      tags: ['Support', 'Mage', 'All']
    },
    {
      id: 'karthus.jpg',
      key: '52',
      link: 'https://www.leagueoflegends.com/en-us/champions/karthus/',
      link2: 'https://u.gg/lol/champions/karthus/build',
      name: 'Karthus',
      title: 'The DeathSinger',
      tags: ['Mage', 'Assassin', 'All']
    },
    {
      id: 'kassadin.jpg',
      key: '53',
      link: 'https://www.leagueoflegends.com/en-us/champions/kassadin/',
      link2: 'https://u.gg/lol/champions/kassadin/build',
      name: 'Kassadin',
      title: 'The Void Walker',
      tags: ['Mage', 'Assassin', 'All']
    },
    {
      id: 'katarina.jpg',
      key: '54',
      link: 'https://www.leagueoflegends.com/en-us/champions/katarina/',
      link2: 'https://u.gg/lol/champions/katarina/build',
      name: 'Katarina',
      title: 'The Sinister Blade',
      tags: ['Assassin', 'All']
    },
    {
      id: 'kayle.jpg',
      key: '55',
      link: 'https://www.leagueoflegends.com/en-us/champions/kayle/',
      link2: 'https://u.gg/lol/champions/kayle/build',
      name: 'Kayle',
      title: 'The Righteous',
      tags: ['Fighter', 'All']
    },
    {
      id: 'kayn.jpg',
      key: '56',
      link: 'https://www.leagueoflegends.com/en-us/champions/kayn/',
      link2: 'https://u.gg/lol/champions/kayn/build',
      name: 'Kayn',
      title: 'The Shadow Reaper',
      tags: ['Fighter', 'Assassin', 'All']
    },
    {
      id: 'kennen.jpg',
      key: '57',
      link: 'https://www.leagueoflegends.com/en-us/champions/kennen/',
      link2: 'https://u.gg/lol/champions/kennen/build',
      name: 'Kennen',
      title: 'The Heart Of The Tempest',
      tags: ['Fighter', 'Mage', 'Marksman', 'All']
    },
    {
      id: 'khazix.jpg',
      key: '58',
      link: 'https://www.leagueoflegends.com/en-us/champions/kha-zix/',
      link2: 'https://u.gg/lol/champions/khazix/build',
      name: "Kha'Zix",
      title: 'The Voidreaver',
      tags: ['Fighter', 'Assassin', 'All']
    },
    {
      id: 'kindred.jpg',
      key: '59',
      link: 'https://www.leagueoflegends.com/en-us/champions/kindred/',
      link2: 'https://u.gg/lol/champions/kindred/build',
      name: 'Kindred',
      title: 'The Eternal Hunters',
      tags: ['Marksman', 'All']
    },
    {
      id: 'kled.jpg',
      key: '60',
      link: 'https://www.leagueoflegends.com/en-us/champions/kled/',
      link2: 'https://u.gg/lol/champions/kled/build',
      name: 'Kled',
      title: 'The Cantankerous Cavalier',
      tags: ['Fighter', 'Tank', 'All']
    },
    {
      id: 'kogmaw.jpg',
      key: '61',  
      link: 'https://www.leagueoflegends.com/en-us/champions/kog-maw/',
      link2: 'https://u.gg/lol/champions/kogmaw/build',
      name: "Kog'Maw",
      title: 'The Mouth Of The Abyss',
      tags: ['Marksman', 'All']
    },
    {
      id: 'leblanc.jpg',
      key: '62',
      link: 'https://www.leagueoflegends.com/en-us/champions/leblanc/',
      link2: 'https://u.gg/lol/champions/leblanc/build',
      name: 'Leblanc',
      title: 'The Deceiver',
      tags: ['Mage', 'Assassin', 'All']
    },
    {
      id: 'leesin.jpg',
      key: '63',
      link: 'https://www.leagueoflegends.com/en-us/champions/lee-sin/',
      link2: 'https://u.gg/lol/champions/leesin/build',
      name: 'Lee Sin',
      title: 'The Blind Monk',
      tags: ['Fighter', 'Assassin', 'All']
    },
    {
      id: 'leona.jpg',
      key: '64',
      link: 'https://www.leagueoflegends.com/en-us/champions/leona/',
      link2: 'https://u.gg/lol/champions/leona/build',
      name: 'Leona',
      title: 'The Radiant Dawn',
      tags: ['Tank', 'Support', 'All']
    },
    {
      id: 'lillia.jpg',
      key: '65',
      link: 'https://www.leagueoflegends.com/en-us/champions/lillia/',
      link2: 'https://u.gg/lol/champions/lillia/build',
      name: 'Lillia',
      title: 'The Bashful Bloom',
      tags: ['Fighter', 'Mage', 'All']
    },
    {
      id: 'lissandra.jpg',
      key: '66',
      link: 'https://www.leagueoflegends.com/en-us/champions/lissandra/',
      link2: 'https://u.gg/lol/champions/lissandra/build',
      name: 'Lissandra',
      title: 'The Ice Witch',
      tags: ['Mage', 'Assassin', 'All']
    },
    {
      id: 'lucian.jpg',
      key: '67',
      link: 'https://www.leagueoflegends.com/en-us/champions/lucian/',
      link2: 'https://u.gg/lol/champions/lucian/build',
      name: 'Lucian',
      title: 'The Purifier',
      tags: ['Marksman', 'All']
    },
    {
      id: 'lulu.jpg',
      key: '68',
      link: 'https://www.leagueoflegends.com/en-us/champions/lulu/',
      link2: 'https://u.gg/lol/champions/lulu/build',
      name: 'Lulu',
      title: 'The Fae Sorceress',
      tags: ['Support', 'Mage', 'All']
    },
    {
      id: 'lux.jpg',
      key: '69',
      link: 'https://www.leagueoflegends.com/en-us/champions/lux/',
      link2: 'https://u.gg/lol/champions/lux/build',
      name: 'Lux',
      title: 'The Lady Of Luminosity',
      tags: ['Support', 'Mage', 'All']
    },
    {
      id: 'malphite.jpg',
      key: '70',
      link: 'https://www.leagueoflegends.com/en-us/champions/malphite/',
      link2: 'https://u.gg/lol/champions/malphite/build',
      name: 'Malphite',
      title: 'Shard Of The Monolith',
      tags: ['Tank', 'Assassin', 'Support', 'All']
    },
    {
      id: 'malzahar.jpg',
      key: '71',
      link: 'https://www.leagueoflegends.com/en-us/champions/malzahar/',
      link2: 'https://u.gg/lol/champions/malzahar/build',
      name: 'Malzahar',
      title: 'The Prophet Of The Void',
      tags: ['Mage', 'All']
    },
    {
      id: 'maokai.jpg',
      key: '72',
      link: 'https://www.leagueoflegends.com/en-us/champions/maokai/',
      link2: 'https://u.gg/lol/champions/maokai/build',
      name: 'Maokai',
      title: 'The Twisted Treant',
      tags: ['Tank', 'Support', 'All']
    },
    {
      id: 'masteryi.jpg',
      key: '73',
      link: 'https://www.leagueoflegends.com/en-us/champions/master-yi/',
      link2: 'https://u.gg/lol/champions/masteryi/build',
      name: 'Master Yi',
      title: 'The Wuju Blademaster',
      tags: ['Marksman', 'Assassin', 'Fighter', 'All']
    },
    {
      id: 'milo.jpg',
      key: '162',
      link: 'https://www.leagueoflegends.com/en-us/champions/milo/',
      link2: 'https://u.gg/lol/champions/milo/build',
      name: 'Milo',
      title: 'The Gentle Flame',
      tags: ['Support', 'All']
    },

    {
      id: 'missfortune.jpg',
      key: '74',
      link: 'https://www.leagueoflegends.com/en-us/champions/miss-fortune/',
      link2: 'https://u.gg/lol/champions/missfortune/build',
      name: 'Miss Fortune',
      title: 'The Bounty Hunter',
      tags: ['Marksman', 'All']
    },
    {
      id: 'mordekaiser.jpg',
      key: '75',
      link: 'https://www.leagueoflegends.com/en-us/champions/mordekaiser/',
      link2: 'https://u.gg/lol/champions/mordekaiser/build',
      name: 'Mordekaiser',
      title: 'The Iron Revenant',
      tags: ['Fighter', 'Tank', 'All']
    },
    {
      id: 'morgana.jpg',
      key: '76',
      link: 'https://www.leagueoflegends.com/en-us/champions/morgana/',
      link2: 'https://u.gg/lol/champions/morgana/build',
      name: 'Morgana',
      title: 'The Fallen ',
      tags: ['Support', 'Mage', 'All']
    },
    {
      id: 'nami.jpg',
      key: '77',
      link: 'https://www.leagueoflegends.com/en-us/champions/nami/',
      link2: 'https://u.gg/lol/champions/nami/build',
      name: 'Nami',
      title: 'The Tidecaller',
      tags: ['Support', 'Mage', 'All']
    },
    {
      id: 'nasus.jpg',
      key: '78',
      link: 'https://www.leagueoflegends.com/en-us/champions/nasus/',
      link2: 'https://u.gg/lol/champions/nasus/build',
      name: 'Nasus',
      title: 'The Curator Of The Sands',
      tags: ['Fighter', 'Tank', 'All']
    },
    {
      id: 'nautilus.jpg',
      key: '79',
      link: 'https://www.leagueoflegends.com/en-us/champions/nautilus/',
      link2: 'https://u.gg/lol/champions/nautilus/build',
      name: 'Nautilus',
      title: 'The Titan Of The Depth',
      tags: ['Tank', 'Support', 'All']
    },
    {
      id: 'neeko.jpg',
      key: '80',
      link: 'https://www.leagueoflegends.com/en-us/champions/neeko/',     
       link2: 'https://u.gg/lol/champions/neeko/build',
      name: 'Neeko',
      title: 'The Curious Chameleon',
      tags: ['Support', 'Mage', 'All']
    },
    {
      id: 'nidalee.jpg',
      key: '81',
      link: 'https://www.leagueoflegends.com/en-us/champions/nidalee/',
      link2: 'https://u.gg/lol/champions/nidalee/build',
      name: 'Nidalee',
      title: 'The Beestial Huntress',
      tags: ['Assassin', 'Fighter', 'All']
    },
    {
      id: 'nilah.jpg',
      key: '82',
      link: 'https://www.leagueoflegends.com/en-us/champions/nilah/',
      link2: 'https://u.gg/lol/champions/nilah/build',
      name: 'Nilah',
      title: 'The Joy Unbound',
      tags: ['Marksman', 'Fighter', 'All']
    },
    {
      id: 'nocturne.jpg',
      key: '83',
      link: 'https://www.leagueoflegends.com/en-us/champions/nocturne/',
      link2: 'https://u.gg/lol/champions/nocturne/build',
      name: 'Nocturne',
      title: 'The Eternal Nightmare',
      tags: ['Assassin', 'Fighter', 'All']
    },
    {
      id: 'nunu&willump.jpg',
      key: '84',
      link: 'https://www.leagueoflegends.com/en-us/champions/nunu/',
      link2: 'https://u.gg/lol/champions/nunu/build',
      name: 'Nunu & Willump',
      title: 'The Boy And His Yeti',
      tags: ['Tank', 'All']
    },
    {
      id: 'olaf.jpg',
      key: '85',
      link: 'https://www.leagueoflegends.com/en-us/champions/olaf/',
      link2: 'https://u.gg/lol/champions/olaf/build',
      name: 'Olaf',
      title: 'The Beserker',
      tags: ['Fighter', 'All']
    },
    {
      id: 'orianna.jpg',
      key: '86',
      link: 'https://www.leagueoflegends.com/en-us/champions/orianna/',
      link2: 'https://u.gg/lol/champions/orianna/build',
      name: 'Orianna',
      title: 'The Lady Of Clockwork',
      tags: ['Mage', 'All']
    },
    {
      id: 'ornn.jpg',
      key: '87',
      link: 'https://www.leagueoflegends.com/en-us/champions/ornn/',
      link2: 'https://u.gg/lol/champions/ornn/build',
      name: 'Ornn',
      title: 'The Fire Below The Mountain',
      tags: ['Tank', 'Support', 'All']
    },
    {
      id: 'pantheon.jpg',
      key: '88',
      link: 'https://www.leagueoflegends.com/en-us/champions/pantheon/',
      link2: 'https://u.gg/lol/champions/pantheon/build',
      name: 'Pantheon',
      title: 'The Unbreakable Spear',
      tags: ['Fighter', 'All']
    },
    {
      id: 'poppy.jpg',
      key: '89',
      link: 'https://www.leagueoflegends.com/en-us/champions/poppy/',
      link2: 'https://u.gg/lol/champions/poppy/build',
      name: 'Poppy',
      title: 'Kepper Of The Hammer',
      tags: ['Tank', 'Support', 'Fighter', 'All']
    },
    {
      id: 'pyke.jpg',
      key: '90',
      link: 'https://www.leagueoflegends.com/en-us/champions/pyke/',
      link2: 'https://u.gg/lol/champions/pyke/build',
      name: 'Pyke',
      title: 'The Bloodharbor Ripper',
      tags: ['Assassin', 'Support', 'Fighter', 'All']
    },
    {
      id: 'qiyana.jpg',
      key: '91',
      link: 'https://www.leagueoflegends.com/en-us/champions/qiyana/',
      link2: 'https://u.gg/lol/champions/qiyana/build',
      name: 'Qiyana',
      title: 'Empress Of The Elements',
      tags: ['Assassin', 'All']
    },
    {
      id: 'quinn.jpg',
      key: '92',
      link: 'https://www.leagueoflegends.com/en-us/champions/quinn/',
      link2: 'https://u.gg/lol/champions/quinn/build',
      name: 'Quinn',
      title: "Demacia's Wings",
      tags: ['Marksman', 'All']
    },
    {
      id: 'rakan.jpg',
      key: '93',
      link: 'https://www.leagueoflegends.com/en-us/champions/rakan/',
      link2: 'https://u.gg/lol/champions/rakan/build',
      name: 'Rakan',
      title: 'The Charmer',
      tags: ['Support', 'All']
    },
    {
      id: 'rammus.jpg',
      key: '94',
      link: 'https://www.leagueoflegends.com/en-us/champions/rammus/',
      link2: 'https://u.gg/lol/champions/rammus/build',
      name: 'Rammus',
      title: 'The Armordillo',
      tags: ['Tank', 'Support', 'All']
    },
    {
      id: 'reksai.jpg',
      key: '95',
      link: 'https://www.leagueoflegends.com/en-us/champions/rek-sai/',
      link2: 'https://u.gg/lol/champions/reksai/build',
      name: "Rek'Sai",
      title: 'The Void Burrower',
      tags: ['Fighter', 'Assassin', 'All']
    },
    {
      id: 'rell.jpg',
      key: '96',
      link: 'https://www.leagueoflegends.com/en-us/champions/rell/',
      link2: 'https://u.gg/lol/champions/rell/build',
      name: 'Rell',
      title: 'The Iron Maiden',
      tags: ['Tank', 'Support', 'All']
    },
    {
      id: 'renataglasc.jpg',
      key: '97',
      link: 'https://www.leagueoflegends.com/en-us/champions/renata/',
      link2: 'https://u.gg/lol/champions/renata/build',
      name: 'Renata Glasc',
      title: 'The Chem-Baroness',
      tags: ['Support', 'All']
    },
    {
      id: 'renekton.jpg',
      key: '98',
      link: 'https://www.leagueoflegends.com/en-us/champions/renekton/',
      link2: 'https://u.gg/lol/champions/renekton/build',
      name: 'Renekton',
      title: 'The Butcher Of The Sands',
      tags: ['Marksman', 'All']
    },
    {
      id: 'rengar.jpg',
      key: '99',
      link: 'https://www.leagueoflegends.com/en-us/champions/rengar/',
      link2: 'https://u.gg/lol/champions/rengar/build',
      name: 'Rengar',
      title: 'The Pridestalker',
      tags: ['Fighter', 'Assassin', 'All']
    },
    {
      id: 'riven.jpg',
      key: '100',
      link: 'https://www.leagueoflegends.com/en-us/champions/riven/',
      link2: 'https://u.gg/lol/champions/riven/build',
      name: 'Riven',
      title: 'The Exile',
      tags: ['Fighter', 'All']
    },
    {
      id: 'rumble.jpg',
      key: '101',
      link: 'https://www.leagueoflegends.com/en-us/champions/rumble/',
      link2: 'https://u.gg/lol/champions/rumble/build',
      name: 'Rumble',
      title: 'The Mechanized Menance',
      tags: ['Fighter', 'Mage', 'All']
    },
    {
      id: 'ryze.jpg',
      key: '102',
      link: 'https://www.leagueoflegends.com/en-us/champions/ryze/',
      link2: 'https://u.gg/lol/champions/ryze/build',
      name: 'Ryze',
      title: 'The Rune Mage',
      tags: ['Mage', 'All']
    },
    {
      id: 'samira.jpg',
      key: '103',
      link: 'https://www.leagueoflegends.com/en-us/champions/samira/',
      link2: 'https://u.gg/lol/champions/samira/build',
      name: 'Samira',
      title: 'The Desert Rose',
      tags: ['Marksman', 'All']
    },
    {
      id: 'sejuani.jpg',
      key: '104',
      link: 'https://www.leagueoflegends.com/en-us/champions/sejuani/',
      link2: 'https://u.gg/lol/champions/sejuani/build',
      name: 'Sejuani',
      title: 'Fury Of The North',
      tags: ['Tank', 'Support', 'All']
    },
    {
      id: 'senna.jpg',
      key: '105',
      link: 'https://www.leagueoflegends.com/en-us/champions/senna/',
      link2: 'https://u.gg/lol/champions/senna/build',
      name: 'Senna',
      title: 'The Redeemer',
      tags: ['Marksman', 'Support', 'All']
    },
    {
      id: 'seraphine.jpg',
      key: '106',
      link: 'https://www.leagueoflegends.com/en-us/champions/seraphine/',
      link2: 'https://u.gg/lol/champions/seraphine/build',
      name: 'Seraphine',
      title: 'The Starry-Eyed Songtress',
      tags: ['Mage', 'Support', 'All']
    },
    {
      id: 'sett.jpg',
      key: '107',
      link: 'https://www.leagueoflegends.com/en-us/champions/sett/',
      link2: 'https://u.gg/lol/champions/sett/build',
      name: 'Sett',
      title: 'The Boss',
      tags: ['Fighter', 'Tank', 'All']
    },
    {
      id: 'shaco.jpg',
      key: '108',
      link: 'https://www.leagueoflegends.com/en-us/champions/shaco/',
      link2: 'https://u.gg/lol/champions/shaco/build',
      name: 'Shaco',
      title: 'The Demon Jester',
      tags: ['Support', 'Mage', 'Assassin', 'All']
    },
    {
      id: 'shen.jpg',
      key: '109',
      link: 'https://www.leagueoflegends.com/en-us/champions/shen/',
      link2: 'https://u.gg/lol/champions/shen/build',
      name: 'Shen',
      title: 'The Eye Of Twlight',
      tags: ['Marksman', 'All']
    },
    {
      id: 'shyvana.jpg',
      key: '110',
      link: 'https://www.leagueoflegends.com/en-us/champions/shyvana/',
      link2: 'https://u.gg/lol/champions/shyvana/build',
      name: 'Shyvana',
      title: 'The Half-Dragon',
      tags: ['Tank', 'Fighter', 'Mage', 'All']
    },
    {
      id: 'singed.jpg',
      key: '111',
      link: 'https://www.leagueoflegends.com/en-us/champions/singed/',
      link2: 'https://u.gg/lol/champions/singed/build',
      name: 'Singed',
      title: 'The Mad Chemist',
      tags: ['Tank', 'All']
    },
    {
      id: 'sion.jpg',
      key: '112',
      link: 'https://www.leagueoflegends.com/en-us/champions/sion/',
      link2: 'https://u.gg/lol/champions/sion/build',
      name: 'Sion',
      title: 'The Undead Juggernaut',
      tags: ['Tank', 'All']
    },
    {
      id: 'sivir.jpg',
      key: '113',
      link: 'https://www.leagueoflegends.com/en-us/champions/sivir/',
      link2: 'https://u.gg/lol/champions/sivir/build',
      name: 'Sivir',
      title: 'The Battle Mitress',
      tags: ['Marksman', 'All']
    },
    {
      id: 'skarner.jpg',
      key: '114',
      link: 'https://www.leagueoflegends.com/en-us/champions/skarner/',
      link2: 'https://u.gg/lol/champions/skarner/build',
      name: 'Skarner',
      title: 'The Crystal Vanguard',
      tags: ['Fighter', 'Tank', 'All']
    },
    {
      id: 'sona.jpg',
      key: '115',
      link: 'https://www.leagueoflegends.com/en-us/champions/sona/',
      link2: 'https://u.gg/lol/champions/sona/build',

      name: 'Sona',
      title: 'Maven Of The Strings',
      tags: ['Support', 'Mage', 'All']
    },
    {
      id: 'soraka.jpg',
      key: '116',
      link: 'https://www.leagueoflegends.com/en-us/champions/soraka/',
      link2: 'https://u.gg/lol/champions/soraka/build',
      name: 'Soraka',
      title: 'The Starchild',
      tags: ['Support', 'Mage', 'All']
    },
    {
      id: 'swain.jpg',
      key: '117',
      link: 'https://www.leagueoflegends.com/en-us/champions/swain/',
      link2: 'https://u.gg/lol/champions/swain/build',
      name: 'Swain',
      title: 'The Noxian Grand General',
      tags: ['Support', 'Mage', 'All']
    },
    {
      id: 'sylas.jpg',
      key: '118',
      link: 'https://www.leagueoflegends.com/en-us/champions/sylas/',
      link2: 'https://u.gg/lol/champions/sylas/build',
      name: 'Sylas',
      title: 'The Unshackled',
      tags: ['Mage', 'All']
    },
    {
      id: 'syndra.jpg',
      key: '119',
      link: 'https://www.leagueoflegends.com/en-us/champions/syndra/',
      link2: 'https://u.gg/lol/champions/syndra/build',
      name: 'Syndra',
      title: 'The Dark Sovereign',
      tags: ['Mage', 'All']
    },
    {
      id: 'tahmkench.jpg',
      key: '120',
      link: 'https://www.leagueoflegends.com/en-us/champions/tahm-kench',
      link2: 'https://u.gg/lol/champions/tahmkench/build',
      name: 'Tahm Kench',
      title: 'The River King',
      tags: ['Support', 'Tank', 'All']
    },
    {
      id: 'taliyah.jpg',
      key: '121',
      link: 'https://www.leagueoflegends.com/en-us/champions/taliyah/',
      link2: 'https://u.gg/lol/champions/taliyah/build',
      name: 'Taliyah',
      title: 'The Stoneweaver',
      tags: ['Mage', 'All']
    },
    {
      id: 'talon.jpg',
      key: '122',
      link: 'https://www.leagueoflegends.com/en-us/champions/talon/',
      link2: 'https://u.gg/lol/champions/talon/build',
      name: 'Talon',
      title: "The Blade's Shadow",
      tags: ['Assassin', 'All']
    },
    {
      id: 'taric.jpg',
      key: '123',
      link: 'https://www.leagueoflegends.com/en-us/champions/taric/',
      link2: 'https://u.gg/lol/champions/taric/build',
      name: 'Taric',
      title: 'The Sheild Of Valoran',
      tags: ['Support', 'Tank', 'All']
    },
    {
      id: 'teemo.jpg',
      key: '124',
      link: 'https://www.leagueoflegends.com/en-us/champions/teemo/',
      link2: 'https://u.gg/lol/champions/teemo/build',
      name: 'Teemo',
      title: 'The Swift Scout',
      tags: ['Marksman', 'Mage', 'Assassin', 'All']
    },
    {
      id: 'thresh.jpg',
      key: '125',
      link: 'https://www.leagueoflegends.com/en-us/champions/thresh/',
      link2: 'https://u.gg/lol/champions/thresh/build',
      name: 'Thresh',
      title: 'The Chain Warden',
      tags: ['Support', 'Tank', 'All']
    },
    {
      id: 'tristana.jpg',
      key: '126',
      link: 'https://www.leagueoflegends.com/en-us/champions/tristana/',
      link2: 'https://u.gg/lol/champions/tristana/build',
      name: 'Teemo',
      title: 'The Yordle Gunner',
      tags: ['Marksman', 'All']
    },
    {
      id: 'trundle.jpg',
      key: '127',
      link: 'https://www.leagueoflegends.com/en-us/champions/trundle/',
      link2: 'https://u.gg/lol/champions/trundle/build',
      name: 'Trundle',
      title: 'The Troll King',
      tags: ['Fighter', 'Tank', 'All']
    },
    {
      id: 'tryndamere.jpg',
      key: '128',
      link: 'https://www.leagueoflegends.com/en-us/champions/tryndamere/',
      link2: 'https://u.gg/lol/champions/tryndamere/build',
      name: 'Trundle',
      title: 'The Barbarian King',
      tags: ['Fighter', 'All']
    },
    {
      id: 'twistedfate.jpg',
      key: '129',
      link: 'https://www.leagueoflegends.com/en-us/champions/twisted-fate/',
      link2: 'https://u.gg/lol/champions/twistedfate/build',
      name: 'Twisted Fate',
      title: 'The Card Master',
      tags: ['Mage', 'Assassin', 'Marksmen', 'All']
    },
    {
      id: 'twitch.jpg',
      key: '130',
      link: 'https://www.leagueoflegends.com/en-us/champions/twitch/',
      link2: 'https://u.gg/lol/champions/twitch/build',
      name: 'Twitch',
      title: 'The Plague Rat',
      tags: ['Marksman', 'Assassin', 'All']
    },
    {
      id: 'udyr.jpg',
      key: '131',
      link: 'https://www.leagueoflegends.com/en-us/champions/udyr/',
      link2: 'https://u.gg/lol/champions/udyr/build',
      name: 'Udyr',
      title: 'The Spirit Walker',
      tags: ['Fighter', 'Tank', 'All']
    },
    {
      id: 'urgot.jpg',
      key: '132',
      link: 'https://www.leagueoflegends.com/en-us/champions/urgot/',
      link2: 'https://u.gg/lol/champions/urgot/build',
      name: 'Urgot',
      title: 'The Dreadnought',
      tags: ['Fighter', 'Tank', 'All']
    },
    {
      id: 'varus.jpg',
      key: '133',
      link: 'https://www.leagueoflegends.com/en-us/champions/varus/',
      link2: 'https://u.gg/lol/champions/varus/build',
      name: 'Varus',
      title: 'The Arrow Of Retribution',
      tags: ['Marksman', 'All']
    },
    {
      id: 'vayne.jpg',
      key: '134',
      link: 'https://www.leagueoflegends.com/en-us/champions/vayne/',
      link2: 'https://u.gg/lol/champions/vayne/build',
      name: 'Vayne',
      title: 'The Night Hunter',
      tags: ['Marksman', 'All']
    },
    {
      id: 'veigar.jpg',
      key: '135',
      link: 'https://www.leagueoflegends.com/en-us/champions/veigar/',
      link2: 'https://u.gg/lol/champions/veigar/build',
      name: 'Veigar',
      title: 'The Tiny Master Of Evil',
      tags: ['Mage', 'Assassin', 'All']
    },
    {
      id: 'velkoz.jpg',
      key: '136',
      link: 'https://www.leagueoflegends.com/en-us/champions/vel-koz/',
      link2: 'https://u.gg/lol/champions/velkoz/build',
      name: "Vel'Koz",
      title: 'The Eye Of The Void',
      tags: ['Mage', 'Support', 'All']
    },
    {
      id: 'vex.jpg',
      key: '137',
      link: 'https://www.leagueoflegends.com/en-us/champions/vex/',
      link2: 'https://u.gg/lol/champions/vex/build',
      name: 'Vex',
      title: 'The Gloomist',
      tags: ['Mage', 'Assassin', 'All']
    },
    {
      id: 'vi.jpg',
      key: '138',
      link: 'https://www.leagueoflegends.com/en-us/champions/vi/',
      link2: 'https://u.gg/lol/champions/vi/build',
      name: 'Vi',
      title: 'The Piltover Enforcer',
      tags: ['Tank', 'Fighter', 'All']
    },
    {
      id: 'viego.jpg',
      key: '139',
      link: 'https://www.leagueoflegends.com/en-us/champions/viego/',
      link2: 'https://u.gg/lol/champions/viego/build',
      name: 'Viego',
      title: 'The Ruined King',
      tags: ['Assassin', 'Fighter', 'All']
    },
    {
      id: 'viktor.jpg',
      key: '140',
      link: 'https://www.leagueoflegends.com/en-us/champions/viktor/',
      link2: 'https://u.gg/lol/champions/viktor/build',
      name: 'Viktor',
      title: 'The Machin Herald',
      tags: ['Mage', 'All']
    },
    {
      id: 'vladimir.jpg',
      key: '141',
      link: 'https://www.leagueoflegends.com/en-us/champions/vladimir/',
      link2: 'https://u.gg/lol/champions/vladimir/build',
      name: 'Vladimir',
      title: 'The Crimson Reaper',
      tags: ['Mage', 'Assassin', 'All']
    },
    {
      id: 'volibear.jpg',
      key: '142',
      link: 'https://www.leagueoflegends.com/en-us/champions/volibear/',
      link2: 'https://u.gg/lol/champions/volibear/build',
      name: 'Volibear',
      title: 'The Relentless Storm',
      tags: ['Tank', 'Fighter', 'All']
    },
    {
      id: 'warwick.jpg',
      key: '143',
      link: 'https://www.leagueoflegends.com/en-us/champions/warwick/',
      link2: 'https://u.gg/lol/champions/warwick/build',
      name: 'Warwick',
      title: 'The Uncaged Wrath Of Zaun',
      tags: ['Assassin', 'Fighter', 'All']
    },
    {
      id: 'wukong.jpg',
      key: '144',
      link: 'https://www.leagueoflegends.com/en-us/champions/wukong/',
      link2: 'https://u.gg/lol/champions/wukong/build',
      name: 'Wukong',
      title: 'The Monkey King',
      tags: ['Fighter', 'All']
    },
    {
      id: 'xayah.jpg',
      key: '145',
      link: 'https://www.leagueoflegends.com/en-us/champions/xayah/',
      link2: 'https://u.gg/lol/champions/xayah/build',
      name: 'Xayah',
      title: 'The Rebel',
      tags: ['Marksman', 'All']
    },
    {
      id: 'xerath.jpg',
      key: '146',
      link: 'https://www.leagueoflegends.com/en-us/champions/xerath/',
      link2: 'https://u.gg/lol/champions/xerath/build',
      name: 'Xerath',
      title: 'The Magus Ascendant',
      tags: ['Mage', 'All']
    },
    {
      id: 'xinzhao.jpg',
      key: '147',
      link: 'https://www.leagueoflegends.com/en-us/champions/xin-zhao/',
      link2: 'https://u.gg/lol/champions/xinzhao/build',
      name: 'Xin Zhao',
      title: 'The Seneschal Of Denmacia',
      tags: ['Fighter', 'Tank', 'All']
    },
    {
      id: 'yasuo.jpg',
      key: '148',   
      link: 'https://www.leagueoflegends.com/en-us/champions/yasuo/',
      link2: 'https://u.gg/lol/champions/yasuo/build',
      name: 'Yasuo',
      title: 'The Unforgiven',
      tags: ['Marksman', 'Fighter', 'All']
    },
    {
      id: 'yone.jpg',
      key: '149',
      link: 'https://www.leagueoflegends.com/en-us/champions/yone/',
      link2: 'https://u.gg/lol/champions/yone/build',
      name: 'Yone',
      title: 'The Unforgotten',
      tags: ['Marksman', 'Fighter', 'All']
    },
    {
      id: 'yorick.jpg',
      key: '150',
      link: 'https://www.leagueoflegends.com/en-us/champions/yorick/',
      link2: 'https://u.gg/lol/champions/yorick/build',
      name: 'Yorick',
      title: 'Shephead Of Souls',
      tags: ['Fighter', 'All']
    },
    {
      id: 'yuumi.jpg',
      key: '151',
      link: 'https://www.leagueoflegends.com/en-us/champions/yummi/',
      link2: 'https://u.gg/lol/champions/yummi/build',
      name: 'Yuumi',
      title: 'The Magical Cat',
      tags: ['Support', 'All']
    },
    {
      id: 'zac.jpg',
      key: '152',  
      link: 'https://www.leagueoflegends.com/en-us/champions/zac/',
      link2: 'https://u.gg/lol/champions/zac/build',
      name: 'Zac',
      title: 'The Secret Weapon',
      tags: ['Tank', 'All']
    },
    {
      id: 'zed.jpg',
      key: '153',  
      link: 'https://www.leagueoflegends.com/en-us/champions/zed/',
      link2: 'https://u.gg/lol/champions/zed/build',
      name: 'Zed',
      title: 'The Master of Shadows',
      tags: ['Assassin', 'All']
    },
    {
      id: 'zeri.jpg',
      key: '154',
      link: 'https://www.leagueoflegends.com/en-us/champions/zeri/',
      link2: 'https://u.gg/lol/champions/zeri/build',
      name: 'Zeri',
      title: 'The Spark Of Zaun',
      tags: ['Marksman', 'All']
    },
    {
      id: 'ziggs.jpg',
      key: '155',
      link: 'https://www.leagueoflegends.com/en-us/champions/ziggs/',
      link2: 'https://u.gg/lol/champions/ziggs/build',
      name: 'Ziggs',
      title: 'The Hexplosives Expert',
      tags: ['Mage', 'All']
    },
    {
      id: 'zilean.jpg',
      key: '156',
      link: 'https://www.leagueoflegends.com/en-us/champions/zilean/',
      link2: 'https://u.gg/lol/champions/zilean/build',
      name: 'Zilean',
      title: 'The Chronokeeper',
      tags: ['Mage', 'Support', 'All']
    },
    {
      id: 'zoe.jpg',
      key: '157',
      link: 'https://www.leagueoflegends.com/en-us/champions/zoe/',
      link2: 'https://u.gg/lol/champions/zoe/build',
      name: 'Zoe',
      title: 'The Aspect Of Twilight',
      tags: ['Mage', 'Assassin', 'All']
    },
    {
      id: 'zyra.jpg',
      key: '158',  
      link: 'https://www.leagueoflegends.com/en-us/champions/zyra/',
      link2: 'https://u.gg/lol/champions/zyra/build',
      name: 'Zyra',
      title: 'Rise Of The Thorns',
      tags: ['Mage', 'Support', 'All']
    }
  ]
  export default champions