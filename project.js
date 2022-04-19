//  MAIN PROJECT JS DOCUMENT   //


// class isimleri nasılsa birden fazla bulunmadığı için HTML Token'a oranla daha fazla kolaylık sağlasın diye querySelector'ı kullanıyorum//
const menuItemsField = document.querySelector(".section-center");
const buttonsField = document.querySelector(".btn-container");



//  !!!  Burada butonları doğrudan fonksiyonun içine yazıyla eklemek daha basit olacaktı ancak projede bu tarz kategori objeleri sonradan eklenebilir ya da revize edilebilir. Bunun daha kolay olması için ayrı bir array olarak oluşturup buton isimlerini bu array'in içinden gönderiyorum.  //
const menuCategories = [
    
    "All",
    "Korea",
    "Japan",
    "China"
];


//  While Page Is Openning, Create The Category Buttons In UI //
const createTheAllButtons = () => {
    
    myAllButtons = "";
    
    menuCategories.forEach((e) => {
        
        myAllButtons += `<button class="btn btn-item btn-outline-success" id="${e}">
        ${e}
        </button>`;
        
    });
    
    buttonsField.innerHTML = myAllButtons;
}

createTheAllButtons();


const allButtons = document.querySelectorAll(".btn-item");


// Control The All Event Listeners In A Single Function //
const allEventListeners = () => {
    
    buttonsField.addEventListener("click",displayMenuItemsByCategory);
}


// Display The Menu Items in Terms of Category Buttons //
const displayMenuItemsByCategory = (e) => {
    
    const clickedCategory = e.target;

    if(clickedCategory.id === "All"){

        // Site Başlangıcındaki default "all" gösterimi için forEach kullanıyorum.
        writeTheMenuItems();
    }
    // Diğer bütün kategorileri aşağıda tek bir map döngüsü fonksiyonuna yolluyorum.
    else{
        selectCategoryBeforeDisplay(clickedCategory);
    }
}

// If Clicking a Category Button ( Except "All" ), Select and Show The Menu Items //
const selectCategoryBeforeDisplay = (clickedCategory) => {

    const clickedButtonId = clickedCategory.id;

    const menuDeneme = menu.filter((menuItem) => {

        return menuItem.category === clickedButtonId

    }).map((e) => {

        return {

            id: e.id,
            img: e.img,
            title: e.title,
            price: e.price,
            desc: e.desc,
        }
    });

    console.log(menuDeneme);
}


allEventListeners();


// Display All Menu Items As A Default //
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

