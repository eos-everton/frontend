import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemFormEditComponent } from './item-form-edit.component';

describe('ItemFormEditComponent', () => {
  let component: ItemFormEditComponent;
  let fixture: ComponentFixture<ItemFormEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItemFormEditComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemFormEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
