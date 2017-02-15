var eldestParent = document.getElementById('eldest-parent');
var aChild = document.getElementById('a-child');


//merubah <div>Saya Adalah Keturunan Pertama</div> 
//menjadi <div>Diakses Melalui Eldest Parent</div>
eldestParent.children[0].innerHTML = "Diakses Melalui Eldest Parent";

//merubah <div>Saya adalah Generasi Termuda, yang paling Tua</div>
//menjadi <div>Diakses Melalui a Child</div>
aChild.previousElementSibling.innerHTML = "Diakses Melalui a Child";

//merubah <div>Saya adalah Generasi Termuda, yang Paling Muda</div> 
//menjadi <div>Diakses Melalui a Child</div>
aChild.nextElementSibling.innerHTML = "Diakses Melalui a Child";

//<div>Saya adalah Generasi yang Cukup Tua</div> 
//menjadi <div>Diakses Melalui a Child</div>
eldestParent.children[2].innerHTML = "Diakses Melalui a Child";