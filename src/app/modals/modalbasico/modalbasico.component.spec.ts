import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalbasicoComponent } from './modalbasico.component';

describe('ModalbasicoComponent', () => {
  let component: ModalbasicoComponent;
  let fixture: ComponentFixture<ModalbasicoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalbasicoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalbasicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
