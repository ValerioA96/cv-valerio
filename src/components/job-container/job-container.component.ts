import { Component, Input } from '@angular/core';
import { ProjectExperienceComponent } from '../project-experience/project-experience.component';
import { BadgeComponent } from '../badge/badge.component';
import { JobVM } from '../../models/models';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-job-container',
  imports: [ProjectExperienceComponent, BadgeComponent, CommonModule],
  templateUrl: './job-container.component.html',
  styleUrl: './job-container.component.css',
  standalone: true
})
export class JobContainerComponent {

  @Input() job!: JobVM;
  
}
