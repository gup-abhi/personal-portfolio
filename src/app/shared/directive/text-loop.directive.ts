import { AfterViewInit, Directive, ElementRef, Input, OnInit, Renderer2, ViewChild } from '@angular/core';

@Directive({
  selector: '[appTextLoop]'
})
export class TextLoopDirective implements AfterViewInit, OnInit {
  @Input() textColor = "var(--text-color)";
  @Input() fontSize = "20px";
  @Input() blinkWidth = "2px";
  @Input() typingSpeedMilliseconds = 300;
  @Input() deleteSpeedMilliseconds = 300;
  @ViewChild('role') roleElement!: ElementRef;
  @ViewChild('hobby') hobbyElement!: ElementRef;
  @Input() wordArray: string[] = [
    "Full Stack Developer...",
    "Security Enthusiastic...",
    "Orchestrating COde & Safety..."
  ];

  private i = 0;

  constructor(private renderer: Renderer2) { }

  ngOnInit() : void {
    console.log(`Inside loop directive!!`)
  }

  ngAfterViewInit(): void {
    this.initVariables();
    this.typingEffect();
  }

  private initVariables(): void {
    this.renderer.setStyle(
      this.roleElement.nativeElement,
      "color",
      this.textColor
    );
    this.renderer.setStyle(
      this.roleElement.nativeElement,
      "font-size",
      this.fontSize
    );
    this.renderer.setStyle(this.roleElement.nativeElement, "padding", "0.1em");

    this.renderer.setStyle(
      this.hobbyElement.nativeElement,
      "border-right-width",
      this.blinkWidth
    );
    this.renderer.setStyle(
      this.hobbyElement.nativeElement,
      "border-right-color",
      this.textColor
    );
    this.renderer.setStyle(
      this.hobbyElement.nativeElement,
      "font-size",
      this.fontSize
    );
  }

  private typingEffect(): void {
    const word = this.wordArray[this.i].split("");
    const loopTyping = () => {
      if (word.length > 0) {
        this.roleElement.nativeElement.innerHTML += word.shift();
      } else {
        this.deletingEffect();
        return;
      }
      setTimeout(loopTyping, this.typingSpeedMilliseconds);
    };
    loopTyping();
  }

  private deletingEffect(): void {
    const word = this.wordArray[this.i].split("");
    const loopDeleting = () => {
      if (word.length > 0) {
        word.pop();
        this.roleElement.nativeElement.innerHTML = word.join("");
      } else {
        this.i = this.wordArray.length > this.i + 1 ? this.i++ : 0;

        this.typingEffect();
        return;
      }
      setTimeout(loopDeleting, this.deleteSpeedMilliseconds);
    };
    loopDeleting();
  }
}