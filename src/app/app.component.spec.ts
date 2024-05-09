import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { RouterLink, RouterOutlet } from '@angular/router';
import { RouterTestingModule } from "@angular/router/testing";


describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let app: AppComponent;

  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent, RouterTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;
  });

  it('should create the app', () => {    
    expect(app).toBeTruthy();
  });

  it(`should have the 'CountryCanvas' title`, () => {    
    expect(app.title).toEqual('CountryCanvas');
  });

  // it('should render title', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.nativeElement as HTMLElement;
  //   expect(compiled.querySelector('h1')?.textContent).toContain('Hello, CountryCanvas');
  // });

  it('should toggle darkTheme when the switch is clicked', () => {
    // Arrange: Retrieve the theme switcher element
    app.theme = "light-theme";
    const switchEl = fixture.nativeElement.querySelector('#themeSwitcher');

    // Act: Simulate clicking the switch
    switchEl.click();
    fixture.detectChanges();

    // Assert: Check if darkTheme is updated
    expect(app.theme).toBe("dark-theme"); // Adjust based on your component logic
});
});
