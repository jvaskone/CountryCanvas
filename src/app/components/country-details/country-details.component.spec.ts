import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule} from '@angular/common/http/testing';
import { CountryDetailsComponent } from './country-details.component';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

describe('CountryDetailsComponent', () => {
  let component: CountryDetailsComponent;
  let fixture: ComponentFixture<CountryDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CountryDetailsComponent, HttpClientTestingModule],
      providers: [
        { provide: ActivatedRoute, useValue: {
            params: of({
              bookId: 2,
            }),
          }, 
        }
      ]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CountryDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
