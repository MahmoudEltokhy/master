


    var Quotes = [

        {
            quote: "“Be yourself; everyone else is already taken.”",
            author : "Oscar Wilde"
        }, 

        {
            quote: "“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”",
            author : "Marilyn Monroe"
        }, 


        {
            quote: "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
            author : "Albert Einstein"
        }, 


        {
            quote: "“So many books, so little time.”",
            author : "Frank Zappa"
        }, 


        {
            quote: "“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”",
            author : "Bernard M. Baruch"
        }, 

        {
            quote: "“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”",
            author : "Dr. Seuss"
        }, 

        {
            quote: "“You only live once, but if you do it right, once is enough.”",
            author : "Mae West"
        }

        ,


        {
            quote: "“Be yourself; everyone else is already taken.”",
            author : "Oscar Wilde"
        }, 

        {
            quote: "“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”",
            author : "Marilyn Monroe"
        }, 


        {
            quote: "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
            author : "Albert Einstein"
        }, 


        {
            quote: "“So many books, so little time.”",
            author : "Frank Zappa"
        }, 


        {
            quote: "“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”",
            author : "Bernard M. Baruch"
        }, 

        {
            quote: "“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”",
            author : "Dr. Seuss"
        }, 

        {
            quote: "“You only live once, but if you do it right, once is enough.”",
            author : "Mae West"
        }

        ,

        {
            quote: "“Be yourself; everyone else is already taken.”",
            author : "Oscar Wilde"
        }, 

        {
            quote: "“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”",
            author : "Marilyn Monroe"
        }, 


        {
            quote: "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
            author : "Albert Einstein"
        }, 


        {
            quote: "“So many books, so little time.”",
            author : "Frank Zappa"
        }, 


        {
            quote: "“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”",
            author : "Bernard M. Baruch"
        }, 

        {
            quote: "“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”",
            author : "Dr. Seuss"
        }, 

        {
            quote: "“You only live once, but if you do it right, once is enough.”",
            author : "Mae West"
        }
]

var usedNumbers = []; 

function quoteChoose(){
    var index; 

    index = Math.random() * Quotes.length ; 

    var index1 = Math.floor(index);

    usedNumbers.push(index1);

    if(usedNumbers.includes(index1)){

        if(index1 >= Quotes.length){

            var x = Math.random() * 10 ;

            return Math.ceil(index1 - x / (0.5*x)) ;
        }

        else{

            return Math.ceil(index1);
        }
    }

    else{
        return index1

    }


    


    

}


function getQuote()
{ 
   var index = quoteChoose();
   document.getElementById("quoteChange").innerHTML = Quotes[index].quote;
   document.getElementById("quoteAuthor").innerHTML = Quotes[index].author;
}
