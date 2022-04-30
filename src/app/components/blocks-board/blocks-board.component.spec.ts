import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlocksBoardComponent } from './blocks-board.component';

describe('BlocksBoardComponent', () => {
  let component: BlocksBoardComponent;
  let fixture: ComponentFixture<BlocksBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlocksBoardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlocksBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
