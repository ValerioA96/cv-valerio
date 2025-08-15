import { AfterViewChecked, AfterViewInit, Component } from '@angular/core';
import { ProjectExperienceComponent } from '../../../components/project-experience/project-experience.component';
import { JobVM, ProjectVM } from '../../../models/models';
import { JobContainerComponent } from '../../../components/job-container/job-container.component';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-home',
  imports: [TranslateModule,RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {


}
