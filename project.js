            //  MAIN PROJECT JS DOCUMENT   //



const menuItemsField = document.querySelector(".section-center");

const writeTheMenuItems = () => {

    allMenuItems = "";

    menu.forEach((e) => {

        allMenuItems += `<div class="menu-items col-lg-6 col-sm-12">
        <img src="${e.img}" alt="${e.title}" class="photo">
        <div class="menu-info">
            <div class="menu-title">
                <h4>
                    ${e.title}
                </h4>
                <h4>
                    ${e.price}
                </h4>
            </div>
            <div class="menu-text">
                ${e.desc}
            </div>
        </div>
      </div>`;
    });

    menuItemsField.innerHTML = allMenuItems;
}

writeTheMenuItems();


