import {SignupComponent} from './signup.component'


describe('SignupComponent', () => {
  

  it('should create', () => {
    const signupInstance=new SignupComponent();
    expect(signupInstance).toBeTruthy();
  });
  it('should set signup properties', () => {
    const signupInstance=new SignupComponent();
    signupInstance.userName="tom";
    signupInstance.password="tom@123";
    signupInstance.email="tom@123";
    signupInstance.signup();
    expect(signupInstance).toBeTruthy();
  });
  it('should Clear signup properties', () => {
    const signupInstance=new SignupComponent();
    
    signupInstance.clear();
    expect(signupInstance.userName).toMatch("");
  });
});
