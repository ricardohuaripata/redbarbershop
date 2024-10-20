import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  pictures: any[] = [
    {
      src: 'images/redbarbershop/picture3.jpg',
      alt: 'banner picture 3',
      width: 382,
      height: 510,
    },
    {
      src: 'images/redbarbershop/picture1.jpg',
      alt: 'banner picture 1',
      width: 382,
      height: 510,
    },
    {
      src: 'images/redbarbershop/picture2.jpg',
      alt: 'banner picture 2',
      width: 382,
      height: 510,
    },
    {
      src: 'images/redbarbershop/picture4.jpg',
      alt: 'banner picture 4',
      width: 382,
      height: 510,
    },
    {
      src: 'images/redbarbershop/picture5.jpg',
      alt: 'banner picture 5',
      width: 287,
      height: 510,
    },
    {
      src: 'images/redbarbershop/picture6.jpg',
      alt: 'banner picture 6',
      width: 382,
      height: 510,
    },
  ];

  videos: string[] = [
    'images/redbarbershop/reel1.mp4',
    'images/redbarbershop/reel2.mp4'
  ]

  play(videoElement: HTMLVideoElement) {
    if (videoElement.paused) {
      videoElement.play();
    }
  }

  pause(videoElement: HTMLVideoElement) {
    if (!videoElement.paused) {
      videoElement.pause();
    }
  }
}
