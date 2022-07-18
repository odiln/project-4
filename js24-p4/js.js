let img=document.querySelector('.section-box')


fetch('https://kinobd.ru/api/films')
.then(data=>data.json())
.then(data=>{
    data.data.forEach((el) => {
        let movieobj =el;
        // console.log(movieobj.name_russian)


            let t=img.innerHTML
            img.innerHTML=`${t}<div class="section-card">
                                    <img class='img' src="${movieobj.small_poster}" alt=''>
                                    <div class="section-title">${movieobj.name_russian}</div>
                                    <div class="section-subtitle">${movieobj.year}</div>
                                    </div>
                                    `  
    });
})