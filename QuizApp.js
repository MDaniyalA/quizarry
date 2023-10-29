const questions = [
    {
        'que':'which of the fallowing is markup language',
        'a'  :'CSS',
        'b'  :'php',
        'c'  :'Javascript',
        'd'  :'HTML',
    'Correct':'a'
    },
    {
        'que':'which of the fallowing is use for backend purpose',
        'a'  :'React',
        'b'  :'php',
        'c'  :'JS',
        'd'  :'scss',
    'Correct':'b'
    },
    {
        'que':'which of the fallowing is type of database',
        'a'  :'MYSql',
        'b'  :'php',
        'c'  :'mangotb',
        'd'  :'expresss',
    'Correct':'a'
    }
];
let index= 0;
let total=questions.length;
let right=0;
let wrong=0;
let questionhead= document.getElementById("question-heading")
//select all element by class name by .options
 const optionInputs = document.querySelectorAll(".options");
const questiononload= () => {
    //when question ends
    if (index===total) {
        return endQuiz()   
    }
    //when new question is loaded it will clear the previous checked option
    reset()
const data=questions[index];
// console.log(data);
/// it will add one in index and display before the question 
questionhead.innerHTML=` ${index +1}) ${data.que}`;
optionInputs[0].nextElementSibling.innerHTML=data.a;
optionInputs[1].nextElementSibling.innerHTML=data.b;
optionInputs[2].nextElementSibling.innerHTML=data.c;
optionInputs[3].nextElementSibling.innerHTML=data.d;

}
const   submitQuiz=()=>{
    const data=questions[index];
    const ans= getanser();
if (ans===data.Correct) {
    right++;
}
else{
wrong++;
}
index++;
 questiononload() ;
 return;
}
const getanser=()=>{
    let anser;
    optionInputs.forEach(
        (input)=>{
            if (input.checked) {
                // console.log(input.value);
                anser= input.value;
                
                // console.log('yes');
            }
            // else{

            //     console.log('no');
            // }
        }
    )
    return anser;
}

const reset=()=>{
    optionInputs.forEach(
        (input)=>{
            input.checked=false;
        }
    )
}

const endQuiz= ()=>{
    document.getElementById("box1").innerHTML=` 
    <h3> thankx for Quiz</h3>
    <h2> ${right} / ${total} are correct ansers</h2>
    `;
};

questiononload();