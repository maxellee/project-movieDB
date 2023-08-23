/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против...",
        ],
    };
        
    const Adv = document.querySelector('.promo__adv'),
          promoContent = document.querySelector('.promo__content'),
          promoTitle = Adv.querySelector('.promo__adv-title'),
          promoAdv = Adv.querySelectorAll('img'),
          promoBg = document.querySelector('.promo__bg'),
          promoGenre = promoBg.querySelector('.promo__genre'),
          movieList = document.querySelector('.promo__interactive-list'),
          addForm = document.querySelector('form.add'),
          addInput = document.querySelector('.adding__input'),
          checkbox = document.querySelector('[type=checkbox]');
          
    addForm.addEventListener('submit', (event) => {
        event.preventDefault();

        let newFilm = addInput.value; 
        const favorite = checkbox.checked;

        if(favorite){
            console.log('Add to favorite film');
        }
        if(newFilm){
            if(newFilm.length > 21){
                newFilm = `${newFilm.slice(0, 22)}...`;
            }
            movieDB.movies.push(newFilm);
            sortArr(movieDB.movies);
    
            createMovieList(movieDB.movies, movieList);
        }

        event.target.reset();
    })

    const deleteAdv = (arg) =>{
        arg.forEach(item => {
            item.remove();
        });
    }

    const makeChanges = () => {
        promoGenre.textContent = 'ДРАМА';
        promoBg.style.backgroundImage = 'url("img/bg.jpg")';
    }
    
    const sortArr = (arr) => {
        movieDB.movies.sort();
    }

    function createMovieList(films, parent){
        parent.innerHTML = '';
        sortArr(films);


        films.forEach((film, i) => {
            parent.innerHTML += `
            <li class="promo__interactive-item">${i + 1} ${film}
                <div class="delete"></div>
            </li>
            `;
        })

        document.querySelectorAll('.delete').forEach((btn, i) => {
            btn.addEventListener('click', () => {
                btn.parentElement.remove();
                movieDB.movies.splice(i, 1);

                createMovieList(films, parent);
            });
        })
    }

    deleteAdv(promoAdv);
    makeChanges();
    createMovieList(movieDB.movies, movieList);

})

// для динамічного створення вкладених елементів ідеально підходить команда innerHTML, завдяки якій можна наповнити
// HTML колекцію усією необхідною структурою яка буде повторюватись декілька разів









// const   addingInput = document.querySelector('.adding__input'),
//         addDiv = document.querySelector('.add'),
//         addButton = addDiv.querySelector('button'),
//         deleteButtons = document.querySelectorAll('.delete'),
//         favorite = document.querySelector('.add input[type=checkbox]');

    
// addButton.addEventListener('click', (event) => {
//     event.preventDefault();
//     // movieList.innerHTML = '';
//     if(!addingInput.value){
//         alert('Write smth maan');
//     } else {
//         if(addingInput.value.length > 21){
//             addingInput.value.slice(0, 21);
//             addingInput.value += '...';
//         }
//         movieDB.movies.push(addingInput.value);

//         for(let i = movieDB.movies.length; i <= movieDB.movies.length; i++){
//             movieList.innerHTML += `
//             <li class="promo__interactive-item">${i} ${movieDB.movies[movieDB.movies.length - 1]}
//                 <div class="delete"></div>
//             </li>
//             `;
//         }
        
//         // movieList.innerHTML = '';
//         // movieDB.movies.forEach((film, i) => {
//         //     movieList.innerHTML += `
//         //     <li class="promo__interactive-item">${i + 1} ${film}
//         //         <div class="delete"></div>
//         //     </li>
//         //     `;
//         // })

//         console.log(movieDB.movies);
//     }
// })

// deleteButtons.forEach((deleteButton) => {
//     deleteButton.addEventListener('click', (event) => {
//         if(movieDB.movies == deleteButton.parentElement.value){
//             movieDB.movies.splice(movieDB.movies.indexOf(deleteButton.parentElement.textContent, 0), 1);
//         }
//         // movieDB.movies.splice(0, 1);
//         // movieDB.movies.splice(movieDB.movies.indexOf(deleteButton.parentElement.textContent, 0), 0)
//         deleteButton.parentElement.remove();
//         console.log(movieDB.movies);
//         // console.log(deleteButton.parentElement.textContent);
//     })    
// })

