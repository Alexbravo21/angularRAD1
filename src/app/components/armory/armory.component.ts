import { Component, OnInit } from '@angular/core';
import { GetcharsService } from '../../services/getchars.service';
import { interval } from 'rxjs';
import { Character } from 'src/app/services/character';

@Component({
  selector: 'app-armory',
  templateUrl: './armory.component.html',
  styleUrls: ['./armory.component.scss']
})
export class ArmoryComponent implements OnInit {
    
    allChars: Character[];
    classColor: Object = {
        dk: '#C41F3B',
        druid: '#FF7D0A',
        hunter: '#ABD473',
        mage: '#69CCF0',
        monk: '#00FF96',
        paladin: '#F58CBA',
        priest: '#FFFFFF',
        rogue: '#FFF569',
        shaman: '#0070DE',
        warlock: '#9482C9',
        warrior: '#C79C6E',
        dh: '#A330C9'
    }
    character: Object = {};
    armory_logo: String = 'assets/img/armory/logo.png';
    armory_background: String = '../../../assets/img/armory/background_3.jpg';
    faction_logo: String;
    logoFade: Boolean = false;
    armoryFade: Boolean = false;
    i: number = 0;
    classAlias: string;


    constructor(private getCharService: GetcharsService) {
    }

    ngOnInit(): void {
    }

    getFirstChar = () => {
        this.logoFade = true;
        this.armoryFade = true;
        this.getCharService.getChars().subscribe(data => {
            this.allChars = data;
            this.character = this.allChars[this.i];
            this.armory_background = this.character['render_url'];
            this.faction_logo = `assets/img/armory/${this.character['faction']}.png`;
            this.classAlias = this.character['class_alias'];
        });
        const newChar = interval(3500);
        newChar.subscribe(() => this.getNextChar());
    }

    getNextChar = () => {
        this.character = this.allChars[this.i];
        this.armory_background = this.character['render_url'];
        this.faction_logo = `assets/img/armory/${this.character['faction']}.png`;
        this.classAlias = this.character['class_alias'];
        this.i = this.i == this.allChars.length-1 ? 0 :  this.i+1;
    }

}
