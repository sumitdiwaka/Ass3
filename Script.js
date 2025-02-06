   
    const Article = document.querySelector('.Article')
    const text = document.querySelector('.text')

    const ArticleBtnclick = document.querySelector('#ArticleBtnclick')
    const TextBtnclick = document.querySelector('#TextBtnclick')


    TextBtnclick.addEventListener("click",()=>{
       



        // text.classList.toggle('active')
        if(text.classList.contains("hidden"))
        {
           
            text.classList.remove("hidden");
            Article.classList.add("hidden");
        }
        
    })

    ArticleBtnclick.addEventListener("click",()=>{
        // text.classList.toggle('active')
        if(Article.classList.contains("hidden"))
        {
           
            Article.classList.remove("hidden");
            text.classList.add("hidden");
        }
        
    })