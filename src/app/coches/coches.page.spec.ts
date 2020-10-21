import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CochesPage } from './coches.page';

describe('CochesPage', () => {
  let component: CochesPage;
  let fixture: ComponentFixture<CochesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CochesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CochesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
