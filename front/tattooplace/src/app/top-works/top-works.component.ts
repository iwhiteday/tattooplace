import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-works',
  templateUrl: './top-works.component.html',
  styleUrls: ['./top-works.component.scss']
})
export class TopWorksComponent implements OnInit {

  works = [
    { id: 1, src: 'https://pp.userapi.com/c841338/v841338040/50f13/_oC0PTMNikE.jpg' },
    { id: 2, src: 'https://pp.userapi.com/c841534/v841534263/4dad9/8Uu98BkEgQg.jpg' },
    { id: 3, src: 'https://pp.userapi.com/c841534/v841534263/4da91/kUfYYr770jg.jpg' },
    { id: 4, src: 'https://pp.userapi.com/c840635/v840635504/3d224/64Y_Xp3xYoc.jpg' },
    { id: 5, src: 'https://pp.userapi.com/c841221/v841221573/26b50/WMOASpiF83k.jpg' },
    { id: 6, src: 'https://pp.userapi.com/c841020/v841020234/53096/WgwVR2TP6Q4.jpg' },
    { id: 7, src: 'https://pp.userapi.com/c841238/v841238680/50786/1IFRZu44414.jpg' },
    { id: 8, src: 'https://pp.userapi.com/c841038/v841038593/53d42/BHPtH4-w0p8.jpg' },
  ];

  constructor() { }

  ngOnInit() {
  }

  like(id:number) {
    console.info("LIKED WORK WITH ID: ", id)
  }

  comment(id:number) {
    console.info("SHOW COMMENT DIALOG FOR ID: ", id)
  }

}
