const checkbox1 = document.getElementById('checkbox1');
const checkbox2 = document.getElementById('checkbox2');
const main_content = document.getElementById('main_content');
const choiceNO = document.getElementById('choiceNO');
const choiceYES = document.getElementById('choiceYES');

checkbox1.addEventListener('click', function() {
    main_content.style.display = 'none';
    choiceYES.style.display = 'flex';
});

checkbox2.addEventListener('click', function() {
    main_content.style.display = 'none';
    choiceNO.style.display = 'flex';
});