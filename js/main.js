const elList = document.querySelector('.films')
const Input = document.querySelector('.form__input')
const ButtonNext = document.querySelector('.next')
const Buttonafter = document.querySelector('.after')
const elfilmsListForm = document.querySelector('.form');
const elfilmsSelect = document.querySelector('.film-select');


function RenderFilms(array, node) {
  node.innerHTML = null
  
  array.forEach(element => {
    const newImg = document.createElement('img')
    const newH = document.createElement('h4')
    const newP = document.createElement('p')
    const newLi = document.createElement('li')
    
    newImg.setAttribute('src', element.Poster)
    newImg.setAttribute('width', 150)
    newImg.setAttribute('src', element.Poster)
    
    newH.textContent = element.Title
    newP.textContent = element.Type
    
    newLi.appendChild(newImg)
    newLi.appendChild(newH)
    newLi.appendChild(newP)
    node.appendChild(newLi)
    
  });
}
// Renders genres to select
// const renderGenresSelect = (genres, element) => {

//   genres.forEach((genre) => {
//     const newOption = document.createElement('option');
//     newOption.value = genre;
//     newOption.textContent = genre;

//     element.appendChild(newOption);
//   });
// };
function All() {
	const newOption = document.createElement('option');
		newOption.value = 'All';
		newOption.textContent = 'All';
		elfilmsSelect.append(newOption)
}
All()

// const generateGenres = (element) => {
// 	const genres = [];

// 	element.forEach((film) => {
// 		film.genres.forEach((genre) => {
// 			if (!genres.includes(genre)) {
// 				genres.push(genre);
// 			}
// 		});
// 	});

// 	return genres;
// };

// // renderGenresSelect(generateGenres(element), elfilmsSelect)

 // elfilmsListForm.addEventListener('submit', (evt) => {
 // 	evt.preventDefault()

 //   const selectValue = elfilmsSelect.value.trim();


// 	// A.L.L

// 	let filterAllGenres = [];

// 	if(selectValue === 'All') {
// 		filterAllGenres = element;
// 	}else {
// 		filterAllGenres = element.filter((film) => 
// 		film.genres.includes(selectValue),
// 		)
// 	}

//   RenderFilms(elList)
// })

let APIjon = 'b00c5572'
let FilmsHulk = 'hulk'
let page = 1

async function films() {
  
  try {
    const res = await fetch('https://www.omdbapi.com/?i=tt3896198&apikey=' + APIjon + '&s=' + FilmsHulk + '&page=' + page)
    const data = await res.json();
  
    if (data.Response === 'True') {
      RenderFilms(data.Search, elList)
    }
  } catch {
    elList.textContent = "Error"
  }
  
}

films()

Input.addEventListener('input', () => {

  const searchValue = Input.value.trim()

    FilmsHulk = searchValue
  
  films()
})


ButtonNext.addEventListener('click', () => {
  page++

  films()
})
Buttonafter.addEventListener('click', () => {
  page--

  films()
})


