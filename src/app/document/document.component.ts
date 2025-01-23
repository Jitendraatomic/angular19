import { Component } from '@angular/core';

@Component({
  selector: 'app-document-upload',
  standalone: true,
  template: `
    <h2>Upload Documents</h2>
    <input type="file" (change)="onFileSelected($event)" />
  `,
})
export class DocumentUploadComponent {
  onFileSelected(event: Event) {
    const file = (event.target as HTMLInputElement).files?.[0];
    console.log(file);
  }
}
