import { AfterViewChecked, AfterViewInit, Component } from '@angular/core';
import { ProjectExperienceComponent } from '../../../components/project-experience/project-experience.component';
import { JobVM, ProjectVM } from '../../../models/models';
import { JobContainerComponent } from '../../../components/job-container/job-container.component';
import feather from 'feather-icons';

@Component({
  selector: 'app-home',
  imports: [ProjectExperienceComponent,JobContainerComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements AfterViewChecked{

  public BasicNet: ProjectVM = {
    title: 'BasicNet - 01/02/2025 ad oggi',
    description: '4Shops (B2B) - Piattaforma per aziende di Francia, Spagna e Italia per acquisto prodotti Kappa. BasiKit (B2C) - Piattaforma per vendita kit sportivi personalizzabili.',
    technologies: ['Angular', 'Typescript', 'SCSS', 'REST APIs']
  }

  public Orbyta: JobVM = {
    title: 'Full Stack / Frontend Developer',
    date: '17/04/2023 ad oggi',
    company: 'Orbyta',
    location: 'Torino',
    projects: [
      {
        title: 'BasicNet - 01/02/2025 ad oggi',
        description: '4Shops (B2B) - Piattaforma per aziende di Francia, Spagna e Italia per acquisto prodotti Kappa. BasiKit (B2C) - Piattaforma per vendita kit sportivi personalizzabili.',
        technologies: ['Angular', 'Typescript', 'SCSS', 'REST APIs']
      },
      {
        title: 'Engineering - Yoda UI (07/2024 - 01/2025)',
        description: 'Applicazione per Costa Crociere per gestione e definizione prezzi crociere. Utilizzata dai business analyst per pricing e analisi strategie commerciali.',
        technologies: ['Angular', 'Typescript', 'SCSS', 'REST APIs']
      },
    ],
    isJob: false
  };

  ngAfterViewChecked(): void {
    feather.replace();
  }

}
