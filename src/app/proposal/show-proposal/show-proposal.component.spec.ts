import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowProposalComponent } from './show-proposal.component';

describe('ShowProposalComponent', () => {
  let component: ShowProposalComponent;
  let fixture: ComponentFixture<ShowProposalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowProposalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowProposalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
