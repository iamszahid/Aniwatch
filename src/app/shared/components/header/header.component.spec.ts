import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { HeaderComponent } from './header.component';
import { ReactiveFormsModule } from '@angular/forms';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let router: Router;

  beforeEach(() => {
    const routerSpy = jasmine.createSpyObj('Router', ['navigate']);

    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [HeaderComponent],
      providers: [
        { provide: Router, useValue: routerSpy }
      ]
    });

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
  });

  it('#search should navigate to detail route with search value', () => {
    component.searchControl.setValue('test');
    component.search();
    const spy = router.navigate as jasmine.Spy;
    const navArgs = spy.calls.first().args[0];

    // Expecting navigate to have been called with ['detail', 'test']
    expect(navArgs).toEqual(['detail', 'test']);
  });
});
