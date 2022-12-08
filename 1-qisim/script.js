function func(e){
    let text = document.querySelector(".lorem").innerText;
    let searchValue = e.target.value;

    let natija = text.includes(searchValue);

    let success = document.querySelector(".true");
    let failed = document.querySelector(".false");

    if(natija) {
        success.classList.remove("d-none");
        failed.classList.add("d-none")
    } else {
        success.classList.add("d-none")
        failed.classList.remove("d-none")
    }

}
