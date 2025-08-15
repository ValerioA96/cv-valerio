import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import feather from 'feather-icons';

@Component({
  selector: 'app-contacts',
  imports: [TranslateModule],
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.css',
  standalone: true,
})
export class ContactsComponent{

  ngAfterViewChecked(): void {
    feather.replace();
  }
}
