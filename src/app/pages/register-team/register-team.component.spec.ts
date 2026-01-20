import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterTeamComponent } from './register-team.component';

describe('RegisterTeamComponent', () => {
  let component: RegisterTeamComponent;
  let fixture: ComponentFixture<RegisterTeamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisterTeamComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterTeamComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
