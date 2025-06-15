import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Downdrop } from './downdrop';

describe('Downdrop', () => {
  let component: Downdrop;
  let fixture: ComponentFixture<Downdrop>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Downdrop]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Downdrop);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
