import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CocheDetallePage } from './coche-detalle.page';

describe('CocheDetallePage', () => {
  let component: CocheDetallePage;
  let fixture: ComponentFixture<CocheDetallePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CocheDetallePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CocheDetallePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
