import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfFriendsComponent } from './prof-friends.component';

describe('ProfFriendsComponent', () => {
  let component: ProfFriendsComponent;
  let fixture: ComponentFixture<ProfFriendsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfFriendsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfFriendsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
