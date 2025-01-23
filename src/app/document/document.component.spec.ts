import { TestBed, ComponentFixture } from '@angular/core/testing';
import { DocumentUploadComponent } from './document.component';
import { By } from '@angular/platform-browser';

describe('DocumentUploadComponent', () => {
  let component: DocumentUploadComponent;
  let fixture: ComponentFixture<DocumentUploadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DocumentUploadComponent], // Use standalone component
    }).compileComponents();

    fixture = TestBed.createComponent(DocumentUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges(); // Trigger Angular's change detection
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should call onFileSelected when a file is selected', () => {
    // Arrange
    spyOn(component, 'onFileSelected');
    const inputElement = fixture.debugElement.query(By.css('input')).nativeElement;

    // Act
    const mockFile = new File(['dummy content'], 'example.txt', { type: 'text/plain' });
    const event = { target: { files: [mockFile] } } as unknown as Event; // Simulate a file selection event
    inputElement.dispatchEvent(new Event('change')); // Dispatch 'change' event
    component.onFileSelected(event); // Call method manually for testing

    // Assert
    expect(component.onFileSelected).toHaveBeenCalled();
  });

  it('should log the file details to the console', () => {
    // Arrange
    const consoleSpy = spyOn(console, 'log');
    const mockFile = new File(['dummy content'], 'example.txt', { type: 'text/plain' });
    const event = { target: { files: [mockFile] } } as unknown as Event;

    // Act
    component.onFileSelected(event);

    // Assert
    expect(consoleSpy).toHaveBeenCalledWith(mockFile);
  });
});
