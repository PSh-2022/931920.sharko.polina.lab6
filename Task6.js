function wichimg(id) {
    let container = document.getElementById("container");
    let img1 = document.getElementById("1");
    let img2 = document.getElementById("2");
    switch (id) {
        case 1:
            container.style = "grid-template-columns: 95% 5%;";
			img1.style.visibility = "visible";
			img2.style.visibility = "hidden";
            img1.style.width = "70%";
            break;

        case 2:
            container.style = "grid-template-columns: 5% 95%;";
			img2.style.visibility = "visible";
			img1.style.visibility = "hidden";
            img2.style.width = "70%";
            break;

        case 3:
            container.style = "grid-template-columns: 1fr 1fr;";
			img1.style.visibility = "visible";
			img2.style.visibility = "visible";
            img1.style.width = "380px";
            img2.style.width = "380px";
            break;
        default:
            break;
    }
}