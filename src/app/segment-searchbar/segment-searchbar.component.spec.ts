import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SegmentSearchbarComponent } from './segment-searchbar.component';

describe('SegmentSearchbarComponent', () => {
  let component: SegmentSearchbarComponent;
  let fixture: ComponentFixture<SegmentSearchbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SegmentSearchbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SegmentSearchbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
