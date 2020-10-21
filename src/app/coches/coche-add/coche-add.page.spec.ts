import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CocheAddPage } from './coche-add.page';

describe('CocheAddPage', () => {
  let component: CocheAddPage;
  let fixture: ComponentFixture<CocheAddPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CocheAddPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CocheAddPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
