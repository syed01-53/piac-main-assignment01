//Personal Message:
 var message:string ="Hello  ! zain Sultan would you like to learn some Python today";
console.log (message);
 //Name Cases 
 //lowercase
 var nameInfo:string ="ZAIN SULTAN ";
 console.log(nameInfo.toLocaleLowerCase());
 //to uppercase 
 var nameInfo:string ="ali sultan ";
 console.log(nameInfo.toLocaleUpperCase());
 //titlecase

// is on pending 
//  var nameInfo:string ="ali sultan ";
//  console.log(nameInfo.tot)

// Famous Quote 
var FamousQuote :string = "Albert Einstein once said, “A person who never made a mistake never tried anything new.” ";
console.log(FamousQuote);

//Famous Quote 2:

var famousPerson:string ="Nelson Mandela ::";
var famousQuotes:string="  “The greatest glory in living lie never in the falling but in rising in every time we fall.” ";

var FamousQuote2:string =famousPerson.concat(famousQuotes);
console.log("Famous quotes 2: "+FamousQuote2);

// Stripping of name  through escape  character 
let nameOfPerson ="Muhmmad\tAli"
console.log(nameOfPerson);

let name2 ="Muhmmad\nAli"
console.log(name2);

//number eight 
let number1:number= 4;
let number2:number= 2;

//addition,
console.log("addition "+(number1+number2));

//subtraction
console.log("subtraction "+(number1-number2));
// multiplication
console.log("multiplication "+(number1*number2));
// division 
console.log("division "+(number1/number2));

//no.8
console.log(5 + 3);

//Favorite Number:9

let FavoriteNumber:number=10;
console.log(FavoriteNumber);

//Names:11

let MyFriends:string[] =['ali', 'ahmad', "Hmmadula", "mehmmad "];
// comment :10
// console.log(MyFriends[0]);

// console.log(MyFriends[1]);

// console.log(MyFriends[2]);

// console.log(MyFriends[3]);

//or
MyFriends.forEach(element => {
   console.log(element);
    
});
//Greetings
MyFriends.forEach(element => {
    console.log("Ms./Mr."+element+"Most Wellcome");    
 });

//  Your Own Array:
let favorite:string[]=["The Honda C70 typically features a small, efficient, and reliable 72cc, four-stroke, single-cylinder engine.","The C70 is known for its simple and timeless design, often referred to as a", "step-through design, which makes it easy for riders to get on and off the bike."," It usually comes with a semi-automatic transmission, often referred to as a clutchless or semi-auto transmission. "]

for (const iterator of favorite) {
    console.log(iterator);
}

// invited person 
let personInvited :string[]=["zain", "Ali", "Mehmmad"];

personInvited.forEach(element => {
    if(element.valueOf()==="zain"){
        console.log("It is with great admiration for your genius that I extend an invitation to join me for dinner. Your contributions to art, science, and innovation have left an indelible mark on history. I would be humbled and thrilled to engage in conversation with a mind as brilliant as yours. The dinner will be an opportunity to discuss your extraordinary creations and ideas. I hope you can grace us with your presence.");
        
    }
    else if (element.valueOf()=="Ali") {
        console.log("Your groundbreaking work in radioactivity and your pioneering spirit as the first woman to win a Nobel Prize have always been a tremendous source of inspiration for me. I would be incredibly honored if you could attend a dinner in your honor, where we can discuss your remarkable scientific achievements and the challenges you faced as a trailblazer in your field. Your presence would make the evening truly unforgettable."); 
    }
    else if (element.valueOf()=="Mehmmad"){
     console.log("As the first person to walk on the moon, you have captured the imaginations of generations and expanded humanity's horizons beyond Earth. Your journey to the moon represents the epitome of human exploration and discovery. I would be deeply honored if you could join me for a dinner where we can discuss your experiences, insights, and the impact of the Apollo 11 mission on the world. Your presence would make this an extraordinary event.");
    }
     else {
        console.log("this person is not found ")
    }
});

// 14 Guest List: 
interface invited {
    namePerson:string;
    living:string;
    invite_status:string;
    id:number;
    gender:string;
    age:number;
}
let invitedPerson:invited[]=[

    {        id:233,
        namePerson:"zaini",
        living:"yes",
        invite_status:"Present",
        gender:"Male",
        age:23
     },
     {
        id:23,
        namePerson:"Bro",
        living:"yes",
        invite_status:"Present",
        gender:"Male",
        age:25
     },
     {  id:233,
        namePerson:"pagal",
        living:"not",
        invite_status:"Present",
        gender:"Male",
        age:23
     }
];

 for (let index = 0; index < invitedPerson.length; index++) {
    const element = invitedPerson[index];
     console.log(element);
    
 }
//present
let invited :invited[]=invitedPerson.filter((invitedPerson:invited)=>{
return(invitedPerson.invite_status==="Present");
})
console.log(`Total number of people are invited:${invited.length}`);
//living 
let on_living  :invited[]=invitedPerson.filter((invitedPerson:invited)=>{
    return(invitedPerson.living==="not");
    })
    console.log(`Total number of people are not living:${on_living .length}`);
