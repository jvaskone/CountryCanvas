import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule} from '@angular/common/http/testing';
import { HomeComponent } from './home.component';
import { ThemeSwitcherService } from '../../services/theme-switcher.service';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeComponent, HttpClientTestingModule],
      providers: [
        {provide: ThemeSwitcherService, useValue: { isDarkTheme: () => false }}
      ]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the selectedSortBy label', () => {
    component.selectedSortBy = 'Area';
    fixture.detectChanges();
    const label = fixture.nativeElement.querySelector('#sort-by-label');
    expect(label.textContent).toContain('Area');
  });

  it('should open the dropdown when the icon is clicked', () => {
    // Arrange: Retrieve the dropdown icon element
    const iconElement = fixture.nativeElement.querySelector('#selectElement');

    // Act: Simulate clicking the icon
    iconElement.click();
    fixture.detectChanges();

    // Assert: Check if the dropdown is open (e.g., by querying options)
    const dropdownOptions = fixture.nativeElement.querySelector('#sort-options');
    expect(dropdownOptions.children.length).toBeGreaterThan(0);
});

  it('should update component state when a sort option is clicked', () => {    
    const selectEl = fixture.nativeElement.querySelector('#selectElement');    
    selectEl.click();
    fixture.detectChanges();

    const selectOptions = fixture.nativeElement.querySelector('#sort-options');
    expect(selectOptions.children.length).toEqual(4);
    selectOptions.children[1].click();
    fixture.detectChanges();

    // Assert: Check if the component state is updated as expected
    expect(component.selectedSortBy).toBe('Area'); 
});
});
