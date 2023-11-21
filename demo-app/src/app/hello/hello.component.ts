import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-hello',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hello.component.html',
  styleUrl: './hello.component.scss'
})
export class HelloComponent {

  version: string = '';

  constructor() {
    this.getVersion().then((version) => {
      this.version = version;
    });
  }

  private async getVersion(): Promise<string> {
    const data = await fetch('/api/version');
    return (await data.text()) ?? 'error';
  }

}
