import { expect } from '@wdio/globals'
import { Browser } from 'puppeteer-core';
import  assert  from "assert/strict"

it("Webdriverio main page", async()=>  {
    await browser.url('https://www.google.com.ua');
    await browser.pause(2000);
    let gsearch = await $('.gLFyf')
    await gsearch.addValue("webdriver io")                                  
    await browser.pause(2000)
    // let gclick = await $('.gNO89b')
    // await gclick.click()
    // await browser.pause(2000)





   
    // it("should get html for centrain elements", async() =>{
    //     await browser.url('https://webdriver.io');
    
    //     assert( 1 === 1, "1 not equal 1")
    //     assert( 1 === "hello", "1 not equals hello")
    
    // });
    
        // xit("should show waitUntil command", async() =>{
        //     await browser.url('https://webdriver.io');
    
        //     await browser.waitUntil( async() =>{
        //         return $('.button[href="/docs/gettingstarted').isDisplayed();
        // }, 5000,     "Button is not displayed"  )
        // })
        // xit("should get html for centrain elements", async() =>{
        //     await browser.url('https://webdriver.io');
        
        //     const outerHTML = await $('.dropdown__menu').getHTML()
        //     console.log("outerHTML :" + outerHTML)
        //     const innerHTML = await $('.dropdown__menu').getHTML(false)
        //     console.log("innerHTML :" + innerHTML)
    
        // })

//     it("homework2", async ()=> {
//             await browser.url('https://webdriver.io');                                  //1
//             let toggle = await $('button[aria-label="Toggle navigation bar"]')
//             await toggle.click()
//             await browser.pause(2000) 
//             let list = await $('.menu__list')
//             let listItem = await $('.menu__list-item')
//             let link = await $('a[href="/docs/api"]')                                   //2
//             let apiButton = await $('=/docs/api')
//             $("=API").click()                                                           //3
//             await browser.pause(2000) 
//             const scrollPoint = await $('.footer__link-item[href="/blog"] ')
//             await browser.pause(2000)
//             await scrollPoint.scrollIntoView()                                          //4
//             await browser.pause(2000)
//             const protComm = await $('.pagination-nav__label ')
//             let displayedInViewPort = await protComm.isDisplayedInViewport()
//             console.log("Is blog button displayed in viewport: " +  displayedInViewPort )
//             let clickable = await protComm.isClickable()
//             console.log("Is clickable: " + clickable)
//             const outerHTML = await $('.pagination-nav__label').getHTML()
//             console.log("outerHTML :" + outerHTML)
//             const innerHTML = await $('.pagination-nav__label').getHTML(false)
//             console.log("innerHTML :" + innerHTML)
//             await protComm.click()
//             await browser.pause(3000)
//             await browser.waitUntil( async() =>{
//                 return $('#webdriver-protocol').isDisplayed();
//         }, 5000,     "Text is not displayed"  )
//     })
    

    
    // it("should show if an element is enabled", async() =>{
    //     await browser.url('https://webdriver.io');

    //     const getStartedButton = await $('.button[href="/docs/gettingstarted"] ')
    //     let isEnabled = await getStartedButton.isEnabled()
    //     console.log("Is get started button enabled: " + isEnabled)
    // })

//     it("should show if an element is focused", async() =>{
//         await browser.url('https://webdriver.io');

//         const getStartedButton = await $('.button[href="/docs/gettingstarted"] ')
//         let isFocused = await getStartedButton.isFocused()
//         console.log("Is get started button focused before click: " + isFocused)
//         await browser.pause(2000)
//         await getStartedButton.click()
//         console.log("Is get started button focused after click: " + isFocused)
//         await browser.pause(2000)
//     })

//     it("should show movement to element action", async() =>{
//         await browser.url('https://webdriver.io');

//         const getStartedLink = await $('.footer__link-item[href="/docs/gettingstarted"] ')
//         await browser.pause(2000)
//         await getStartedLink.scrollIntoView()
//         await browser.pause(2000)
//    })
// it("should show save screenshot command", async() =>{
//     await browser.url('https://webdriver.io');

//     const getStartedLink = await $('.footer__link-item[href="/docs/gettingstarted"]')
//     await browser.pause(2000)
//     await getStartedLink.scrollIntoView()
//     await browser.pause(2000)
//     await getStartedLink.saveScreenshot('linkScreenshot.png')
// })
// it( "should switch to another window", async() =>{
//     await browser.url('https://webdriver.io');
//     await browser.newWindow('https://google.com');
//     await browser.pause(2000)
//     await browser.switchWindow('https://webdriver.io')
//     await browser.pause(2000)

// })



        // it("should show if an element is clickable", async() =>{
        //     await browser.url('https://webdriver.io');

        //     const blogButton = await $('.button[href="/docs/gettingstarted"] ')
        //     let clickable = await blogButton.isClickable()
        //     console.log("Is clickable: " + clickable)
        // })
        // it("should show if an element is displayed  ", async() =>{
        //     await browser.url('https://webdriver.io');
    
        //     const blogButton = await $('.button[href="/docs/gettingstarted"] ')
        //     let displayed = await blogButton.isDisplayed()
        //     console.log("Is displayed: " + displayed)
        // })
        // it("should show if an element is visible", async() =>{
        //     await browser.url('https://webdriver.io');
    
        //     const blogButton = await $('.button[href="/docs/gettingstarted"] ')
        //     let displayedInViewPort = await blogButton.isDisplayedInViewport()
        //      console.log("Is blog button displaued in viewport: " +  displayedInViewPort )
        // }) 

    // it("homework1", async ()=> {
        // await browser.url('https://webdriver.io');                           //1
    //     let toggle = await $('button[aria-label="Toggle navigation bar"]')
    //     await toggle.click()
    //     await browser.pause(2000) 
    //     let list = await $('.menu__list')
    //     let listItem = await $('.menu__list-item')
    //     let link = await $('a[href="/docs/api"]')
    //     let apiButton = await $('=/docs/api')
    //     $("=API").click()                                                    //2 
    //     await browser.pause(2000)
    //     let urlPage = await browser.getUrl()
    //     console.log(urlPage)                                                 //3
    //     let header = await $('h1=Introduction')
    //     await expect(header).toHaveText('Introduction')                      //4
    //     let wordLink = await $("=WebDriver")
    //     await expect(wordLink).toHaveAttribute('href')                       //5
    //     let searchButton = await $('.searchBox_ZlJk')
    //     await searchButton.click()                                           //6
    //     await browser.pause(2000)
    //     let input = await $('.DocSearch-Input')
    //     await input.addValue("all is done")                                  //7
    //     await browser.pause(2000)
    //     let resetButton = await $('.DocSearch-Reset')
    //     await resetButton.click()                                            //8
    //     await browser.pause(2000)
    // })
    
     
    // browser.windowHandleFullscreen();
    // xit("should have correct title", async ()=> {
    //     await browser.url('https://webdriver.io/');

    //     const title = await browser.getTitle()
    //     console.log(title);

    //     await expect(browser).toHaveTitle('WebdriverIO · Next-gen browser and mobile automation test framework for Node.js | WebdriverIO')
    // } );
    
    // xit("should show addValue command", async ()=> {
    //     await browser.url('https://the-internet.herokuapp.com/login');
        
    //     let input = await $("#username")
    //     await input.addValue("hello")
    //     await browser.pause(2000)

    //     await input.addValue(123)
    //     await browser.pause(2000)

    //         await expect(input).toHaveValue("hello123")
    // } );

    // xit("should show setValue command", async ()=> {
    //     await browser.url('https://the-internet.herokuapp.com/login');
        
    //     let input = await $("#username")
    //     await input.setValue("world")
    //     await browser.pause(2000)
    //     await input.setValue("hello")
    //     await browser.pause(2000)

    //     console.log(await input.getValue())
    //     await expect(input).toHaveValue("hello")
    // } );

    // xit("should show click command", async ()=> {

    //     await browser.url('https://the-internet.herokuapp.com/login');
        
    //     let loginButton = await $('.radius')
    //     await browser.pause(2000)
    //     await loginButton.click()
    //     await browser.pause(4000)

    //     let InputUsername = await $("#username")
    //     await InputUsername.addValue("tomsmith")
    //     await browser.pause(2000)

    //     let InputPassword = await $("#password")
    //     await InputPassword.addValue("SuperSecretPassword!")
    //     await browser.pause(2000)

    //     await loginButton.click()
    //     await browser.pause(4000)

    // } );

    // xit("should show getAttribute command", async ()=> {

    //     await browser.url('https://dou.ua/search/');
        
    //     let inputSearch = await $('#gsc-iw-id1')
    //     let attr = await inputSearch.getAttribute("aria-label")
    //     console.log("Placeholder attribute is: " + attr)

    //     await inputSearch.setValue("Cat")
    //     attr = await inputSearch.getValue()      
    //     await browser.pause(2000)
    //     console.log("Value attribute is: " + attr)
        
    // } );
    // xit("should show getLocation command", async ()=> {

    //     await browser.url('https://dou.ua');
        
    //     let inputSearch = await $('#txtGlobalSearch')
    //     let location = await inputSearch.getLocation()
    //     console.log("Location is: " + location)

    //     let xLocation = await inputSearch.getLocation("x")
    //     console.log("Location by x is: " + xLocation)
        
    // } );
    // xit("should show getText command", async ()=> {

    //     await browser.url('https://webdriver.io');
    //         let subtitle = await $('.hero__subtitle')
    //     console.log("Subtitle text is: " + await subtitle.getText())
    // } );
    
    
    

});