import { Component, Input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-badge',
  imports: [TranslateModule],
  templateUrl: './badge.component.html',
  styleUrl: './badge.component.css',
  standalone: true
})
export class BadgeComponent {

  @Input() data: string = '';
}
