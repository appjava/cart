
//-----------------------------------------------------------------

const courses = document.querySelector('#courses-list'),
shoppingCartContent = document.querySelector('#cart-content tbody')
const clearCartBtn = document.querySelector('#clear-cart')

loadEventListeners();

function loadEventListeners(){
    //when new course is added
    courses.addEventListener('click', buyCourse);
    shoppingCartContent.addEventListener('click', removeCourse);
    clearCartBtn.addEventListener('click', clearCart);

    function removeCourse(e){
     if(e.target.classList.contains('remove')){
          e.target.parentElement.parentElement.remove();
     }
     }

     function clearCart(){
          console.log(shoppingCartContent.firstChild)
          while(shoppingCartContent.firstChild){
          shoppingCartContent.removeChild(shoppingCartContent.firstChild);
          }
     }

     function buyCourse(e){
     if(e.target.classList.contains('add-to-cart')){
          //read the course value
          const course = e.target.parentElement.parentElement;
          getCourseInfo(course);
     }
}}

function getCourseInfo(course) {
     //create an Object with course data
     const courseInfo = {
         image: course.querySelector('img').src,
         title: course.querySelector('h4').textContent,
         price: course.querySelector('.price span').textContent,
         id: course.querySelector('a').getAttribute('data-id')
     }
     addToCart(courseInfo);
 }
 
 function addToCart(course){
     const row = document.createElement('tr');
 
     row.innerHTML = `
 <tr>
     <td>
         <img src="${course.image}" width="100">    
     </td>
     <td>
         ${course.title}
     </td>
      <td>
         ${course.price}
     </td>
      <td>
         <a href="#" class="remove" data-id="${course.id}">X</a>
     </td>
 </tr>
 `
     ;
 
     shoppingCartContent.appendChild(row);
 }