import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterTeam } from './register-team';

describe('RegisterTeam', () => {
  let component: RegisterTeam;
  let fixture: ComponentFixture<RegisterTeam>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisterTeam]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterTeam);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
