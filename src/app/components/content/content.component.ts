import { Component, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseService } from 'src/app/services/course.service';
import { Contents } from 'src/app/models/Course';

declare var YT: any;

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {
  @ViewChild('videoPlayer') videoPlayer!: ElementRef;
  apiLoaded = false;
  selectedCourseId: number = 0;
  content: Contents[] = [];
  selectedContent: Contents | null = null;
  //selectedContent!: Contents;
  player?: YT.Player | undefined;
  currentVideoId!: number;
  playerVars: YT.PlayerVars = {
    autoplay: 1,
    controls: 0
  }

  constructor(private route: ActivatedRoute, private courseService: CourseService) { }

  ngOnInit(): void {
    if (!this.apiLoaded) {
      // This code loads the IFrame Player API code asynchronously, according to the instructions at
      // https://developers.google.com/youtube/iframe_api_reference#Getting_Started
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      document.body.appendChild(tag);
      this.apiLoaded = true;
    }

    this.route.params.subscribe(params => {
      this.selectedCourseId = Number(params['id']);
      this.courseService.getContentsById(this.selectedCourseId).subscribe(contents => {
        this.content = contents;
      });
    });
  }

  onSelect(content: Contents): void {
    console.log('content', content);
    this.selectedContent = content;
    console.log('selectedContent', this.selectedContent);
    if (this.selectedContent) {
      this.player = new YT.Player('player', {
        videoId: this.selectedContent.id,
        playerVars:
          // 'playsinline':1,
          this.playerVars,
        events: {
          'onReady': this.onReady.bind(this),
          'onStateChange': this.onStateChange.bind(this)
        }
      });
      console.log('video', this.selectedContent.videourl)

    }
  }

  onReady(event: YT.PlayerEvent): void {
    console.log('Player ready:', event);
    this.player = event.target;
    event.target.playVideo();
    this.player.playVideo();
    this.playVideo();

    console.log(' onReady', this.selectedContent?.videourl);
  }

  onStateChange(event: YT.OnStateChangeEvent): void {
    if (event.data == YT.PlayerState.PLAYING) {
      this.playVideo()
      console.log('Player is playing');
    }
  }

  playVideo(): void {
    if (this.videoPlayer) {
      this.currentVideoId = this.selectedContent!.id;
      this.videoPlayer.nativeElement.load();
      this.videoPlayer.nativeElement.play();
    }
  }
}