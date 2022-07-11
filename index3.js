var allTest = [];
var editedTest = null;

// test
function loadTest() {
    let storage = localStorage.getItem("test");
    if(storage != null){
        allTest = JSON.parse(storage);
    }

    if(localStorage.getItem("editedTest") != null){
        editedTest = JSON.parse(localStorage.getItem("editedTest"));
    }

    if(editedTest != null){

        let form = document.getElementById('form');

        if(form != null){

            form.elements['addAnser'].value = editedTest.question;
            form.elements['test__a'].value = editedTest.a;
            form.elements['test__b'].value = editedTest.b;
            form.elements['test__c'].value = editedTest.c;
            form.elements['test__d'].value = editedTest.d;
            form.elements['answer'].value = editedTest.answer;
        }
    }
}
loadTest();

// yangi test qo'shish yoki o'zgartib saqlash
function save() {

    let form = document.getElementById('form');
    
    let question = form.elements['addAnser'].value;
    let a = form.elements['test__a'].value;
    let b = form.elements['test__b'].value;
    let c = form.elements['test__c'].value;
    let d = form.elements['test__d'].value;
    let answer = form.elements['answer'].value;

    // o'zgartirib saqlash
    if(editedTest != null){

        let index = allTest.findIndex(val => val.question == editedTest.question && val.answer == editedTest.answer);
        if(index > -1){
            allTest[index].question = question;
            allTest[index].a = a;
            allTest[index].b = b;
            allTest[index].c = c;
            allTest[index].d = d;
            allTest[index].answer = answer;
        }
    }

    // yengi test qo'shish
    else {
        
        let test = {
            question: question,
            a: a,
            b: b,
            c: c,
            d: d,
            answer: answer
        }

        allTest.push(test);
    }

    localStorage.removeItem("editedTest");
    localStorage.setItem("test", JSON.stringify(allTest));
}

// table ni to'ldirish uchun
function loadTable(){

    var table = document.getElementById("table");

    if(table != null){
        for(let i = 0; i < allTest.length; i++){

            var row = table.insertRow(i + 1);
    
            var cell1 = row.insertCell(0);
            var cell2 = row.insertCell(1);
            var cell3 = row.insertCell(2);
            var cell4 = row.insertCell(3);
            var cell5 = row.insertCell(4);
    
            cell1.innerHTML = i + 1;
            cell2.innerHTML = allTest[i].question;
            cell3.innerHTML = allTest[i].answer;
            cell4.innerHTML = `<i class="fas fa-pen" onclick="editTest(`+ i +`)"></i>`;
            cell5.innerHTML = `<i class="fas fa-trash-alt" onclick="deleteTest(`+ i +`)"></i>`;
        }
    }    
}
loadTable();

// testni o'chirish
function deleteTest(index){
    
    // allTest massivdan o'chirish
    allTest.splice(index, 1);

    // localstorage da saqlash
    localStorage.setItem("test", JSON.stringify(allTest));
    
    // page ni qayta ochish
    location.reload();
}

// testni o'zgartirish
function editTest(index){

    // kelgan index bo'yicha o'zgaradigan testni massivdan olish 
    editedTest = allTest[index];
    
    // localstorage ga o'zgaradigan testni yozib qo'yish
    localStorage.setItem("editedTest", JSON.stringify(editedTest));
    
    // index3.html ga o'tish
    window.location.href = 'index3.html';
}