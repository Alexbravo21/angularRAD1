import { Component, OnInit } from '@angular/core';
import * as M from 'materialize-css/dist/js/materialize';

@Component({
  selector: 'app-quoting',
  templateUrl: './quoting.component.html',
  styleUrls: ['./quoting.component.scss']
})
export class QuotingComponent implements OnInit {
    
    games = [
        {
            id: 1,
            name: "Overwatch",
            price: 60,
            discount: 50,
            description: 'Overwatch is a team-based multiplayer first-person shooter developed and published by Blizzard Entertainment. Described as a "hero shooter", Overwatch assigns players into two teams of six, with each player selecting from a roster of over 30 characters, known as "heroes", each with a unique style of play that is divided into three general roles that fit their purpose.',
            img: "assets/img/covers/ow.jpg"
        },
        {
            id: 2,
            name: "World of Warcraft",
            price: 60,
            discount: 35,
            description: 'World of Warcraft (WoW) is a massively multiplayer online role-playing game (MMORPG) released in 2004 by Blizzard Entertainment. It is the fourth released game set in the Warcraft fantasy universe.[3] World of Warcraft takes place within the Warcraft world of Azeroth, approximately four years after the events at the conclusion of Blizzard´s previous Warcraft release, Warcraft III: The Frozen Throne.',
            img: "assets/img/covers/wow.jpg"
        },
        {
            id: 3,
            name: "Diablo 3",
            price: 45,
            discount: 30,
            description: 'Diablo III is a hack-and-slash action role-playing game developed and published by Blizzard Entertainment as the third installment in the Diablo franchise. It was released for Microsoft Windows and OS X in May 2012, the PlayStation 3 and Xbox 360 in September 2013, the PlayStation 4 and Xbox One in August 2014, and the Nintendo Switch in November 2018.',
            img: "assets/img/covers/diablo.jpg"
        },
        {
            id: 4,
            name: "Star Craft 2",
            price: 60,
            discount: 15,
            description: 'StarCraft II: Wings of Liberty is a science fiction real-time strategy video game developed and published by Blizzard Entertainment. It was released worldwide in July 2010 for Microsoft Windows and Mac OS X. A sequel to the 1998 video game StarCraft and the Brood War expansion pack, the game is actually split into three installments: the base game, subtitled Wings of Liberty, an expansion pack, Heart of the Swarm, and a stand-alone expansion pack, Legacy of the Void. In March 2016, a campaign pack called StarCraft II: Nova Covert Ops was also released.',
            img: "assets/img/covers/sc.jpg"
        },
        {
            id: 5,
            name: "Heroes of the storm",
            price: 15,
            discount: 60,
            description: 'Heroes of the Storm is a crossover multiplayer online battle arena video game developed and published by Blizzard Entertainment and released on June 2, 2015, for Microsoft Windows and macOS. The game features various characters from Blizzard´s franchises as playable heroes, as well as different battlegrounds based on Warcraft, Diablo, StarCraft, and Overwatch universes. The game is free-to-play, based on freemium business model, and is supported by microtransactions which can be used to purchase heroes, visual alterations for the heroes in the game, mounts, and other cosmetic elements. Blizzard does not call the game a "multiplayer online battle arena" or an "action real-time strategy" because they feel it is something different with a broader playstyle; they refer to it as an online "hero brawler".',
            img: "assets/img/covers/hots.jpg"
        },
        {
            id: 6,
            name: "Call of Duty Black Ops 4",
            price: 60,
            discount: 25,
            description: 'Call of Duty: Black Ops 4 (stylized as Call of Duty: Black Ops IIII) is a multiplayer first-person shooter developed by Treyarch and published by Activision. It was released worldwide for Microsoft Windows, PlayStation 4, and Xbox One on October 12, 2018. It is a sequel to the 2015 game Call of Duty: Black Ops III, the fifth entry in the Black Ops sub-series, and the 15th installment in the Call of Duty series overall.',
            img: "assets/img/covers/cod.jpg"
        },
        {
            id: 7,
            name: "Destiny 2",
            price: 60,
            discount: 45,
            description: 'Destiny 2 is a free-to-play online-only multiplayer first-person shooter video game developed by Bungie. It was released for PlayStation 4 and Xbox One on September 6, 2017, followed by a Microsoft Windows version the following month. The game was published by Activision until December 31 2018 , when Bungie acquired the publishing rights to the franchise. It is the sequel to 2014´s Destiny and its subsequent expansions. Set in a "mythic science fiction" world, the game features a multiplayer "shared-world" environment with elements of role-playing games. Like the original, activities in Destiny 2 are divided among player versus environment (PvE) and player versus player (PvP) game types. In addition to normal story missions, PvE features three-player "strikes" and six-player raids.',
            img: "assets/img/covers/destiny.jpg"
        }
    ]
    selectedGame = this.games[0];
    quantity = 1;
    finalPrice = (this.selectedGame["price"] - (this.selectedGame["price"] * (this.selectedGame["discount"] / 100))) * this.quantity;
    finalRealPrice = this.selectedGame["price"] * this.quantity;
    num_games: number = 1;

    constructor() { }

    ngAfterViewInit(){
        var elems = document.querySelectorAll('select');
        var instances = M.FormSelect.init(elems);
    }
    ngOnInit(): void  {
    }

    getGame = () => {
        return this.selectedGame;
    }

    onSearchChange(searchValue): void {  
        this.quantity = searchValue;
        this.finalPrice = (this.selectedGame["price"] - (this.selectedGame["price"] * (this.selectedGame["discount"] / 100))) * this.quantity;
        this.finalRealPrice = this.selectedGame["price"] * this.quantity;
    }

    onGameChange() {
        this.quantity = 1;
        this.num_games = 1;
        this.finalPrice = (this.selectedGame["price"] - (this.selectedGame["price"] * (this.selectedGame["discount"] / 100))) * this.quantity;
        this.finalRealPrice = this.selectedGame["price"] * this.quantity;
    }

}
