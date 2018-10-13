import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';

describe('LoginComponent', () => {
  let comp: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let el: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [HttpModule, FormsModule, ReactiveFormsModule, RouterTestingModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    comp = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(comp).toBeTruthy();
  });

  it(`should set submitted to true`, async(() => {
    comp.onSubmit();
    expect(comp.submitted).toBeTruthy();
  }));

  it(`form should be valid`, async(() => {
    comp.loginForm.controls['username'].setValue('asd@asd.com');
    comp.loginForm.controls['password'].setValue('sdasd');
    expect(comp.loginForm.valid).toBeTruthy();
  }));

  it(`form should be invalid`, async(() => {
    comp.loginForm.controls['username'].setValue('');
    comp.loginForm.controls['password'].setValue('');
    expect(comp.loginForm.valid).toBeFalsy();
  }));

  it(`should call the onSubmit method`, async(() => {
    comp.loginForm.controls['username'].setValue('asd@asd.com');
    comp.loginForm.controls['password'].setValue('sdasd');
    spyOn(comp, 'onSubmit');
    comp.loading = false;
    el = fixture.debugElement.query(By.css('button')).nativeElement;
    el['disabled'] = false;
    el.click();
    expect(comp.onSubmit).toHaveBeenCalled();
  }));

});
