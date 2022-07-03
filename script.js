
function hiddenTable(event) {
    event.target.nextElementSibling.classList.toggle('hidden-table');
}

/* CÁLCULO DOS kmod */

function getKmodOne(num) {
    document.querySelector('.kmod01-span').value = num.toFixed(2);
    reloadCalc ()
}

function getKmod2(num) {
    document.querySelector('.kmod02-span').value = num.toFixed(2);
    reloadCalc ()
}

function getKmod3(num) {
    document.querySelector('.kmod03-span').value = num.toFixed(2);
    reloadCalc ()
}

function reloadCalc () {
    let kmod1 = document.querySelector('.kmod01-span').value;
    let kmod2 = document.querySelector('.kmod02-span').value;
    let kmod3 = document.querySelector('.kmod03-span').value;
    let kmod = document.querySelector('.kmod-span');
    
    let soma = (kmod1 * kmod2 * kmod3);

    kmod.textContent = Number(soma.toFixed('2'));
}

/*  */