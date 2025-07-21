import { Component, Input } from '@angular/core';
import { ProjectVM } from '../../models/models';
import { CommonModule } from '@angular/common';
import { BadgeComponent } from '../badge/badge.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-project-experience',
  imports: [CommonModule, BadgeComponent, TranslateModule],
  templateUrl: './project-experience.component.html',
  styleUrl: './project-experience.component.css',
  standalone: true
})
export class ProjectExperienceComponent {

  @Input() project!: ProjectVM;
}
