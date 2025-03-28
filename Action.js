const logo = document.querySelector('.topbarLogo');

const menu = document.querySelectorAll('.List0');
const menuItem = document.querySelectorAll('.List1');
//const menuLinks = document.querySelectorAll('.ListTier1');
//const contentSections = document.querySelectorAll('.InfoSheet')







// WWWWWWWWWWWWWWWW Functions WWWWWWWWWWWWWWWWWWWWWWWWW

function toggleActiveElements(className, exclude) {
  const elements = document.querySelectorAll(`.${className}`);

  elements.forEach(element => {
    if (element.classList.contains('active')) {
      if (element !== exclude) {
        element.classList.remove('active');
        //console.log('toggled', element)
      }
    }
  });
}



function toggleActiveInfoSheets(className, exclude) {
  const elements = document.querySelectorAll(`.${className}`);

  elements.forEach(element => {
    if (element.classList.contains('active')) {
      if (element !== exclude) {
        element.classList.remove('active');
        console.log('toggled', element)
      }
    }
  });
}





// WWWWWWWWWW logo functionality WWWWWWWWWWWWWWWWW

document.getElementById('InfoSheetBebe').classList.toggle('active') // start the page with the introduction

logo.addEventListener('click', function(clickedThing) {
  const specificContent = clickedThing.currentTarget.textContent
  const completedString = 'InfoSheet'+specificContent
  const theElement = document.getElementById(completedString)

  console.log('Item clicked:', theElement, 'InfoSheet');
  toggleActiveInfoSheets('InfoSheet', theElement)

    if (theElement) {
      //clickedthingListTier1.classList.add('yourClass');
      //console.log('yago')
      theElement.classList.toggle('active');
      toggleActiveElements('ListTier1')
    } 
    else {
      console.log('Element with ID "yourElementId" not found.');
    }

});




// WWWWWWWWWW Topbar functionality WWWWWWWWWWWWWWWWW

menu.forEach(menu => {
  menu.addEventListener('click', function(clickedThing) {
    // Your event handling logic here

    const clickedThingParent = clickedThing.currentTarget.parentElement;
    const clickedthingListTier1 = clickedThingParent.querySelector('.ListTier1');
    

    console.log('Element clicked:', clickedThing.currentTarget.textContent, clickedthingListTier1);

    toggleActiveElements('ListTier1', clickedthingListTier1)


    //clickedThing.currentTarget.classList.toggle('is-active');

    if (clickedthingListTier1) {
      //clickedthingListTier1.classList.add('yourClass');
      //console.log('yago')
      clickedthingListTier1.classList.toggle('active');
    } else {console.log('Element with ID "yourElementId" not found.');}

    if (clickedThing.currentTarget.textContent == 'Contact'){
      console.log('clicked on Contact')
      const completedString = 'InfoSheet'+clickedThing.currentTarget.textContent
      const theElement = document.getElementById(completedString)
      toggleActiveInfoSheets('InfoSheet', theElement)
      if (theElement) {
        //clickedthingListTier1.classList.add('yourClass');
        //console.log('yago')
        theElement.classList.toggle('active');}
    }

    //clickedthingListTier1.classList.toggle('active');

  });
});





// WWWWWWWWWW InfoSheet functionality WWWWWWWWWWWWWWWWW

menuItem.forEach(menuItem => {
  menuItem.addEventListener('click', function(clickedThing) {

    const specificContent = clickedThing.currentTarget.textContent
    const completedString = 'InfoSheet'+specificContent
    const theElement = document.getElementById(completedString)

    console.log('Item clicked:', theElement, 'InfoSheet');
    

    toggleActiveInfoSheets('InfoSheet', theElement)

    if (theElement) {
      //clickedthingListTier1.classList.add('yourClass');
      //console.log('yago')
      theElement.classList.toggle('active');
      toggleActiveElements('ListTier1')
    } 
    else {
      console.log('Element with ID "yourElementId" not found.');
    }


  });
});


