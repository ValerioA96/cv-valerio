import { AfterViewChecked, Component } from '@angular/core';
import { JobContainerComponent } from '../../../components/job-container/job-container.component';
import { JobVM } from '../../../models/models';
import feather from 'feather-icons';

@Component({
  selector: 'app-experience',
  imports: [JobContainerComponent],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent implements AfterViewChecked{

  public Orbyta: JobVM = {
    title: 'JOBS.ORBYTA.TITLE',
    date: 'JOBS.ORBYTA.DATE',
    company: 'JOBS.ORBYTA.COMPANY',
    location: 'JOBS.ORBYTA.LOCATION',
    projects: [
      {
        title: 'JOBS.ORBYTA.PROJECTS.BASICNET.TITLE',
        description: 'JOBS.ORBYTA.PROJECTS.BASICNET.DESCRIPTION',
        technologies: ['Angular', 'Typescript', 'CSS']
      },
      {
        title: 'JOBS.ORBYTA.PROJECTS.ENGINEERING.TITLE',
        description: 'JOBS.ORBYTA.PROJECTS.BASICNET.DESCRIPTION',
        technologies: ['Angular', 'Typescript', 'CSS']
      },
      {
        title: 'JOBS.ORBYTA.PROJECTS.INTERNAL_PROJECT.TITLE',
        description: 'JOBS.ORBYTA.PROJECTS.BASICNET.DESCRIPTION',
        technologies: ['Angular', '.NET', 'Entity Framework Core', 'SQL Server', 'REST APIs']
      },
      {
        title: 'JOBS.ORBYTA.PROJECTS.PERSONAL_PROJECT.TITLE',
        description: 'JOBS.ORBYTA.PROJECTS.BASICNET.DESCRIPTION',
        technologies: ['Angular', '.NET', 'Entity Framework Core', 'SQL Server, REST APIs']
      },
    ],
    isJob: true,
  };

  public Gucci: JobVM = {
    title: 'JOBS.GUCCI.TITLE',
    date: 'JOBS.GUCCI.DATE',
    company: 'JOBS.GUCCI.COMPANY',
    location: 'JOBS.GUCCI.LOCATION',
    projects: [
      {
        description: 'JOBS.GUCCI.PROJECTS.SALES_ASSISTANT_STOREKEEPER.DESCRIPTION'
      },
    ],
    isJob: true
  };

  public Juventus: JobVM = {
    title: 'JOBS.JUVENTUS.TITLE',
    date: 'JOBS.JUVENTUS.DATE',
    company: 'JOBS.JUVENTUS.COMPANY',
    location: 'JOBS.JUVENTUS.LOCATION',
    projects: [
      {
        description: 'JOBS.JUVENTUS.PROJECTS.STEWARD.DESCRIPTION'
      },
    ],
    isJob: true
  };

  ngAfterViewChecked(): void {
    feather.replace();
  }

}
