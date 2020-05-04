describe('angularjs homepage todo list', function() {
    it('should add a todo', function() {
      browser.get('https://angularjs.org');
      
      browser.waitForAngular();

      element(by.model('yourName')).sendKeys('Julie');

      var text = element(by.xpath('/html/body/div[2]/div[1]/div[2]/div[2]/div/h1'));

      expect(text.getText()).toEqual('Hello Julie!');

      
     
    });
  });