
describe('Тестирование авторизации', function () {
    
    it('верный логин, верный пароль', function () {
        cy.visit('https://login.qa.studio/'); // заходим на сайт
        cy.get('#loginButton').should('be.disabled'); //кнопка войти задизайблена
        cy.get('#mail').type('german@dolnikov.ru'); // ввели логин
        cy.get('#loginButton').should('be.disabled'); //кнопка войти задизайблена 
        cy.get('#pass').type('iLoveqastudio1'); // ввели пароль
        cy.get('#loginButton').click(); // клик  на кнопку войти
        cy.get('#messageHeader').should('be.visible'); // видим слово
        cy.get('#messageHeader').contains('Авторизация прошла успешно');// текст совпадает
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // видим крестик
                })

    it('верный логин не верный пароль', function () {
        cy.visit('https://login.qa.studio/'); // заходим на сайт
        cy.get('#loginButton').should('be.disabled'); //кнопка войти задизайблена
        cy.get('#mail').type('german@dolnikov.ru'); // ввели логин
        cy.get('#loginButton').should('be.disabled'); //кнопка войти задизайблена
        cy.get('#pass').type('iLoveqastudio13'); // ввели НЕ правильный пароль
        cy.get('#loginButton').click(); // клик  на кнопку войти
        cy.get('#messageHeader').should('be.visible'); // видим слово
        cy.get('#messageHeader').contains('Такого логина или пароля нет');// текст совпадает
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // видим крестик
        })

    it('логин без @, верный пароль', function () {
        cy.visit('https://login.qa.studio/'); // заходим на сайт
        cy.get('#loginButton').should('be.disabled'); //кнопка войти задизайблена
        cy.get('#mail').type('germandolnikov.ru'); // ввели логин без @
        cy.get('#loginButton').should('be.disabled'); //кнопка войти задизайблена
        cy.get('#pass').type('iLoveqastudio1'); // ввели пароль  
        cy.get('#loginButton').click(); // клик  на кнопку войти
        cy.get('#messageHeader').should('be.visible'); // видим слово
        cy.get('#messageHeader').contains('Нужно исправить проблему валидации');// текст совпадает
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // видим крестик
            })

     it('верный логин с большими буквами, верный пароль', function () {
        cy.visit('https://login.qa.studio/'); // заходим на сайт
        cy.get('#loginButton').should('be.disabled'); //кнопка войти задизайблена
        cy.get('#mail').type('GerMan@Dolnikov.ru'); // ввели логин с большими буквами
        cy.get('#loginButton').should('be.disabled'); //кнопка войти задизайблена 
        cy.get('#pass').type('iLoveqastudio1'); // ввели пароль
        cy.get('#loginButton').click(); // клик  на кнопку войти
        cy.get('#messageHeader').should('be.visible'); // видим слово
        cy.get('#messageHeader').contains('Авторизация прошла успешно');// текст совпадает
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // видим крестик
             })

     it('забыли пароль', function () {
        cy.visit('https://login.qa.studio/'); // заходим на сайт
        cy.get('#loginButton').should('be.disabled'); //кнопка войти задизайблена
        cy.get('#forgotEmailButton').should('be.visible') //забыли пароль
        cy.get('#forgotEmailButton').click(); //клик на забыли пароль
        cy.get('#forgotForm').should('be.visible'); // видим окно
        cy.get('#forgotForm > .header').should('be.visible'); // видим слово
        cy.get('#forgotForm > .header').contains('Восстановите пароль');// текст совпадает
        cy.get('#restoreEmailButton').should('be.visible'); // кнопка отправить доступна
        cy.get('#exitRestoreButton > .exitIcon').should('be.visible'); // видим крестик
        cy.get('#mailForgot').type('german@dolnikov.ru'); // ввели логин
        cy.get('#restoreEmailButton').click(); // клик на  отправить код
        cy.get('#messageHeader').should('be.visible'); // видим слово
        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail');// текст совпадает
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // видим крестик

    })
})
