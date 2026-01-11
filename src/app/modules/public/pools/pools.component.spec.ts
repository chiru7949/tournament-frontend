import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pools } from './pools';

describe('Pools', () => {
  let component: Pools;
  let fixture: ComponentFixture<Pools>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pools]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pools);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
