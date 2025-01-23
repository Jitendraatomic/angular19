import { TestBed, ComponentFixture } from '@angular/core/testing';
import { QnaComponent } from './qna.component';
import { By } from '@angular/platform-browser';

describe('QnaComponent', () => {
  let component: QnaComponent;
  let fixture: ComponentFixture<QnaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QnaComponent], // Use standalone component
    }).compileComponents();

    fixture = TestBed.createComponent(QnaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges(); // Trigger Angular's change detection
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });
  

  it('should render a heading with text "Ask a Question"', () => {
    const headingElement = fixture.debugElement.query(By.css('h2')).nativeElement;
    expect(headingElement.textContent).toBe('Ask a Question');
  });

  it('should render a textarea for typing the question', () => {
    const textareaElement = fixture.debugElement.query(By.css('textarea')).nativeElement;
    expect(textareaElement).toBeTruthy();
    expect(textareaElement.placeholder).toBe('Type your question');
  });

  it('should render a submit button with text "Submit"', () => {
    const buttonElement = fixture.debugElement.query(By.css('button')).nativeElement;
    expect(buttonElement).toBeTruthy();
    expect(buttonElement.textContent).toBe('Submit');
  });

  it('should render a response container with an answer', () => {
    const responseElement = fixture.debugElement.query(By.css('.response p')).nativeElement;
    expect(responseElement).toBeTruthy();
    expect(responseElement.textContent).toContain('Answer: Here is the response...');
  });
});
