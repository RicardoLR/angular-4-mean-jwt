import { AppPage } from './app.po';

describe('1st tests', () => {
  it('true is true', () => expect(true).toBe(true));
});


describe('Hello world', () => { 
  it('says hello', () => { 
    expect(helloWorld()).toEqual('Hello world!'); 
  });
});