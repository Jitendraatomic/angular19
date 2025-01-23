import { Component } from '@angular/core';

@Component({
  selector: 'app-qna',
  standalone: true,
  template: `
    <h2>Ask a Question</h2>
    <textarea placeholder="Type your question"></textarea>
    <button>Submit</button>
    <div class="response">
      <p><b>Answer:</b> Here is the response...</p>
    </div>
  `,
})
export class QnaComponent {}
