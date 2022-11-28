import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookBuilderComponent } from './book-builder.component';

describe('BookBuilderComponent', () => {
  let component: BookBuilderComponent;
  let fixture: ComponentFixture<BookBuilderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookBuilderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
