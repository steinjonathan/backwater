import { Component } from '@angular/core';

import { connectFirebase } from './firebaseConnect';
import { setTimeout } from 'timers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  db : any;
  fireSong : boolean = false;

  constructor() {
    //Connect to firebase realtime db;
    this.db = connectFirebase(); 

    this.db.ref('rings').on('value', () => this.song())
  }

  ring() {
    let now = new Date().toString()
    let ring = this.db.ref('rings');
    ring.push(now);
  }

  song() {
    console.log('recebeu');
    this.fireSong = true;
    
    let audio = new Audio('../assets/beep-02.mp3');
    
    setTimeout(() => {
      audio.play();    
    }, 500);
    setTimeout(() => {
      audio.play();    
    }, 1500);
    setTimeout(() => {
      audio.play();    
    }, 2500);
    setTimeout(() => {
      audio.play();    
    }, 3500);
    setTimeout(() => {
      audio.play();    
    }, 4500);
    setTimeout(() => {
      audio.play();    
    }, 5500);
    setTimeout(() => {
      audio.play();    
    }, 6500);
    setTimeout(() => {
      audio.play();    
    }, 7500);
    setTimeout(() => {
      audio.play();    
    }, 8500);

    setTimeout(() => {
      this.fireSong = false;
    }, 10000);
  }
}
