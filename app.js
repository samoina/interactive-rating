let mainBtnRating = document.querySelector('.main__button--rating'),
    ratingList = document.querySelector('.rating__list'),
    mainRating = document.querySelector('.main__rating'),
    mainResponse = document.querySelector('.main__response'),
    rating = document.querySelector('.response__rating'),
    listValue,
    activeButton;

ratingList.addEventListener('click', getListValue);
mainBtnRating.addEventListener('click', displayResponse);


function getListValue(e){
  listValue = e.target.textContent; 
  console.log(e.target.textContent); 
  const target = e.target;

  if(target.matches('Button')){
    if(activeButton){
      activeButton.style.backgroundColor = '';
      activeButton.style.color = ''
    }

    target.style.backgroundColor = 'green';
    target.style.color = '#fff';

    activeButton = target;
  }
}


function displayResponse(ev){
  console.log(`You selected ${listValue} out of 5`);
  mainRating.classList.toggle('main__hidden');
  rating.textContent = listValue;
  mainResponse.classList.toggle('main__hidden');
  
  ev.preventDefault();
}














