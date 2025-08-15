import { AfterViewChecked, Component } from '@angular/core';
import { JobContainerComponent } from '../../../components/job-container/job-container.component';
import { JobVM } from '../../../models/models';
import feather from 'feather-icons';

@Component({
  selector: 'app-education',
  imports: [JobContainerComponent],
  templateUrl: './education.component.html',
  styleUrl: './education.component.css'
})
export class EducationComponent implements AfterViewChecked {
  
  public ComputerScience: JobVM = {
    title: 'EDUCATION.COMPUTER_SCIENCE_DEGREE.TITLE',
    date: 'EDUCATION.COMPUTER_SCIENCE_DEGREE.DATE',
    company: 'EDUCATION.COMPUTER_SCIENCE_DEGREE.COMPANY',
    location: 'EDUCATION.COMPUTER_SCIENCE_DEGREE.LOCATION',
    projects: [
      {
        title: 'EDUCATION.COMPUTER_SCIENCE_DEGREE.PROJECTS.PROGRAMMING.TITLE',
        description: 'EDUCATION.COMPUTER_SCIENCE_DEGREE.PROJECTS.DATABASE.DESCRIPTION',
        technologies: ['Java', 'JavaFX', 'MVC Pattern']
      },
      {
        title: 'EDUCATION.COMPUTER_SCIENCE_DEGREE.PROJECTS.OPERATING_SYSTEMS.TITLE',
        description: 'EDUCATION.COMPUTER_SCIENCE_DEGREE.PROJECTS.OPERATING_SYSTEMS.DESCRIPTION',
        technologies: ['C', 'IPC']
      },
      {
        title: 'EDUCATION.COMPUTER_SCIENCE_DEGREE.PROJECTS.ALGORITHMS.TITLE',
        description: 'EDUCATION.COMPUTER_SCIENCE_DEGREE.PROJECTS.ALGORITHMS.DESCRIPTION',
        technologies: ['Java', 'C']
      },
      {
        title: 'EDUCATION.COMPUTER_SCIENCE_DEGREE.PROJECTS.DATABASE.TITLE',
        description: 'EDUCATION.COMPUTER_SCIENCE_DEGREE.PROJECTS.DATABASE.DESCRIPTION',
        technologies: ['SQL']
      },
       {
        title: 'EDUCATION.COMPUTER_SCIENCE_DEGREE.PROJECTS.SOFTWARE_APPLICATION_DEVELOPMENT.TITLE',
        description: 'EDUCATION.COMPUTER_SCIENCE_DEGREE.PROJECTS.SOFTWARE_APPLICATION_DEVELOPMENT.DESCRIPTION',
        technologies: ['Unified Process']
      },
       {
        title: 'EDUCATION.COMPUTER_SCIENCE_DEGREE.PROJECTS.TWEB.TITLE',
        description: 'EDUCATION.COMPUTER_SCIENCE_DEGREE.PROJECTS.TWEB.DESCRIPTION',
        technologies: ['Angular', '.NET', 'Entity Framework Core', 'SQL Server, REST APIs']
      },
    ],
    isJob: false,
    showMainProjects: true
  };

  public Diploma: JobVM = {
    title: 'EDUCATION.DIPLOMA.TITLE',
    date: 'EDUCATION.DIPLOMA.DATE',
    company: 'EDUCATION.DIPLOMA.COMPANY',
    location: 'EDUCATION.DIPLOMA.LOCATION',
    projects: [
      {
        description: 'EDUCATION.DIPLOMA.PROJECTS.HIGH_SCHOOL.DESCRIPTION'
      },
    ],
    isJob: false,
    showMainProjects: false
  };

  ngAfterViewChecked(): void {
    feather.replace();
  }
}
