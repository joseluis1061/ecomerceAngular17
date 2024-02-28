import { Component, signal, OnInit, OnDestroy, PLATFORM_ID, Inject } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
@Component({
  selector: 'app-contador',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contador.component.html',
  styleUrl: './contador.component.scss'
})
export class ContadorComponent implements OnInit, OnDestroy {
  contador= signal(0);
  constContadorReference!: number;
  destroyCount: boolean = false;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {  }
  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.constContadorReference = window.setInterval(()=>{
        this.contador.update(prevValiu => prevValiu +1 );
        console.log("Contando")
      }, 1000)
    }
  }

  updateDestroy(){
    this.destroyCount = !this.destroyCount;
  }

  ngOnDestroy():void{
    if (isPlatformBrowser(this.platformId)) {
      window.clearInterval(this.constContadorReference);
    }
  }

}
