import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPageTemplateComponent } from './user-page-template.component';

describe('UserPageTemplateComponent', () => {
  let component: UserPageTemplateComponent;
  let fixture: ComponentFixture<UserPageTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserPageTemplateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserPageTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
