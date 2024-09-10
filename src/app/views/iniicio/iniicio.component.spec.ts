import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IniicioComponent } from './iniicio.component';

describe('IniicioComponent', () => {
  let component: IniicioComponent;
  let fixture: ComponentFixture<IniicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IniicioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IniicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
