const button = document.querySelector("button")
const inputUser = document.querySelector("input")
const hidden_para = document.querySelector(".img-wish")
const section1 = document.querySelector(".section1")

function search(){
    if(inputUser.value != "Book"){
        alert("Sorry, invalid input.")
    } else {
        hidden_para.classList.add("nothidden");
        const div = document.createElement('div');
        div.classList.add('image-container');
        
        for (let i = 1; i <= 4; i++) {
            const imageSrc = `images/Book${i}.png`;
            const imageAlt = `Image ${i}`;
            const imageName = `Book${i}`; 
            
            const image = document.createElement('img');
            image.setAttribute('src', imageSrc);
            image.setAttribute('alt', imageAlt);
            image.setAttribute('id', imageName);
            
            const paragraph = document.createElement('p');
            paragraph.textContent = `Book${i}`;
            
            const span = document.createElement("span");
            span.appendChild(image);
            span.appendChild(paragraph);
            
            div.appendChild(span);
            image.classList.add("imgs");
        } 
        
        section1.appendChild(div);   
    }
}

button.addEventListener("click", search)






let wishList = [];

section1.addEventListener('click', function(event) {
    if (event.target.tagName === 'IMG') {
      const itemName = event.target.id;
      let isItemExists = false;
  
      for (const item of wishList) {
        if (item.name === itemName) {
          isItemExists = true;
          break;
        }
      }
  
      if (!isItemExists) {
        const div = document.createElement('div');
        div.classList.add('wish-item');
        
        const img = document.createElement('img');
        img.setAttribute('src', event.target.src);
        img.setAttribute('alt', event.target.alt);
        img.setAttribute('width', '100');
        img.setAttribute('height', '100');
        
        const span = document.createElement('span');
        span.textContent = itemName;
        
        div.appendChild(img);
        div.appendChild(span);
        document.querySelector('.wish-list').appendChild(div);
        
        wishList.push({name: itemName});
        const wishListItems = document.querySelectorAll('.wish-item');
        if (wishListItems.length > 1) {
          wishListItems[wishListItems.length - 2].classList.remove('last-item');
        }
        div.classList.add('last-item');
      } else {
        alert('This item is already in your wish list.');
      }
    }
  });
  