import { MainappModule } from './mainapp.module';

describe('MainappModule', () => {
  let mainappModule: MainappModule;

  beforeEach(() => {
    mainappModule = new MainappModule();
  });

  it('should create an instance', () => {
    expect(mainappModule).toBeTruthy();
  });
});
