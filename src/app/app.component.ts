import { Component } from '@angular/core';
import { Slip } from './advice-interface';
import { AdviceService } from './services/advice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'app-generator';
  constructor(private adviceService: AdviceService) {}

  public advice?: any;

  ngOnInit() {
    this.adviceService.getAdvice().subscribe((res: any) => {
      this.advice = res;
    });
  }

  public newAdvice(): void {
    this.adviceService.getAdvice().subscribe((res: any) => {
      this.advice = res;
    });
  }
}
