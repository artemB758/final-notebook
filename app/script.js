const clickBtn = document.querySelector("button");
clickBtn.addEventListener("click", btnValue);

// const createDiv = document.createElement("div");
// const ul = document.createElement("ul");
const select = document.querySelector(".select");
select.style.visibility = "hidden";
const textValue = document.querySelector(".text-value");
textValue.style.visibility = "hidden";
const valueResult = document.querySelector(".value-result");
valueResult.style.visibility = "hidden";
// let li;
const collection = [];
const result = new Map();
let convert;

function btnValue(){

    // li = document.createElement("li");
    // document.body.appendChild(createDiv);
    // createDiv.append(ul);
    // ul.append(li);

    textValue.style.visibility = "visible";
    select.style.visibility = "visible";
    valueResult.style.visibility = "visible";
    
  
}

valueResult.addEventListener("click", valueF);

function valueF(){
        // li.innerHTML = textValue.value;
        //  result.set(select.value, li.innerHTML);
        //  console.log(result)
        let text = textValue.value.trim();
        
        result.set(select.value, text);
        console.log(result)

        
    convert = Object.fromEntries(result.entries());
    collection.push(convert)
    console.log(convert)
       
      
 
}


let saveL = document.querySelector(".list");
saveL.addEventListener("click", saveList)


function saveList(){
    for(let i = 0; i < collection.length; i++){
        console.log(collection[i])
    }
}


