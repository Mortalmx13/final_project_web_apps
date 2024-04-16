/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu')
      navToggle = document.getElementById('nav-toggle')
      navClose = document.getElementById('nav-close')
/*=============== MENU SHOW ===============*/
if(navToggle){
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}
/*=============== MENU HIDDEN ===============*/
if(navClose){
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}
/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}

navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () => {
    const header = document.getElementById('header')
    this.scrollY >= 50 ? header.classList.add('bg-header')
                       : header.classList.remove('bg-header')
}
window.addEventListener('scroll', scrollHeader)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== SHOW SCROLL UP ===============*/  
const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up')

    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                        : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== SCROLL REVEAL ANIMATION ===============*/


/*=============== CALCULATE JS ===============*/
const calculateForm = document.getElementById('calculate-form'),
      calculateIn = document.getElementById('calculate-in'),
      calculateLb = document.getElementById('calculate-lb'),
      calculateMessage = document.getElementById('calculate-message')

const calculateBmi = (e) => {
    e.preventDefault()

    if(calculateIn.value === '' || calculateLb.value === ''){
        calculateMessage.classList.remove('color-green')
        calculateMessage.classList.add('color-red')

        calculateMessage.textContent = 'Fill in the Height and Weight.'

        setTimeout(() => {
            calculateMessage.textContent = ''
        }, 3000)
    } else {
        const inch = calculateIn.value,
              pound = calculateLb.value,
              bmi = ((pound / (inch * inch)) * 703)

        if(bmi < 18.5){
            calculateMessage.classList.add('color-yellow')
            calculateMessage.textContent = `Your BMI is ${bmi.toFixed(2)} and you are UNDERWEIGHT.`
        } else if(bmi < 25){
            calculateMessage.classList.add('color-green')
            calculateMessage.textContent = `Your BMI is ${bmi.toFixed(2)} and you are NORMAL.`
        } else if (bmi < 29.9){
            calculateMessage.classList.add('color-orange')
            calculateMessage.textContent = `Your BMI is ${bmi.toFixed(2)} and you are OVERWEIGHT.`
        } else {
            calculateMessage.classList.add('color-red')
            calculateMessage.textContent = `Your BMI is ${bmi.toFixed(2)} and you are OBESE.`
        }

        calculateIn.value = ''
        calculateLb.value = ''

        setTimeout(() => {
            calculateMessage.textContent = ''
        }, 4000)
    }
}

calculateForm.addEventListener('submit', calculateBmi)

/*=============== EMAIL JS ===============*/ 