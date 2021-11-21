import "./style.css";
import Pizza from "./pizza.jpg";
import StrawBerry from "./strawberry.jpg";
import Burger from "./burger.jpg";
import Soup from "./soup.jpg";
import Steak from "./steak.jpg";
import LocationIcon from "./thumbtack-solid.svg";
import PhoneBook from "./address-book-solid.svg";

const content = document.createElement("div");
content.classList.add("content");

const removeAllChildNodes = function (parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
};

const navigationBar = function () {
  const pageLink = document.createElement("div");
  pageLink.classList.add("nav-bar-link");
  const pageUl = document.createElement("ul");
  const homeLink = document.createElement("li");
  const homeLinkButton = document.createElement("a");
  homeLink.appendChild(homeLinkButton);
  homeLinkButton.textContent = "Home";
  const menuLink = document.createElement("li");
  const menuLinkButton = document.createElement("a");
  menuLink.appendChild(menuLinkButton);
  menuLinkButton.textContent = "Menu";
  const contactUsLink = document.createElement("li");
  const contactUsLinkButton = document.createElement("a");
  contactUsLink.appendChild(contactUsLinkButton);
  contactUsLinkButton.textContent = "Contact Us";

  content.appendChild(pageLink);
  pageLink.appendChild(pageUl);
  pageUl.appendChild(homeLink);
  pageUl.appendChild(menuLink);
  pageUl.appendChild(contactUsLink);

  homeLinkButton.addEventListener("click", function (e) {
    removeAllChildNodes(content);
    home();
  });

  menuLinkButton.addEventListener("click", function (e) {
    removeAllChildNodes(content);
    menu();
  });

  contactUsLink.addEventListener("click", function (e) {
    removeAllChildNodes(content);
    contactUs();
  });

  return content;
};

const footer = function (page) {
  const footerDiv = document.createElement("div");
  if (page == "fixed") {
    footerDiv.classList.add("footer");
  } else {
    footerDiv.classList.add("other-footer");
  }
  const footerPara = document.createElement("p");
  const footerLink = document.createElement("a");
  footerLink.href = "https://github.com/dimejidj";
  footerPara.appendChild(footerLink);
  footerLink.innerHTML = "Copyright &copy; 2021 DimejiDJ";

  footerDiv.appendChild(footerPara);
  content.appendChild(footerDiv);
  return content;
};

const home = function () {
  navigationBar();
  const shopName = document.createElement("div");
  shopName.classList.add("logo");
  const shopNameWords = document.createElement("h2");
  shopNameWords.textContent = "Food Shack";
  shopName.appendChild(shopNameWords);

  content.appendChild(shopName);

  const description = document.createElement("div");
  description.classList.add("para");
  const describePara = document.createElement("p");
  describePara.textContent =
    "The best place to get your waffles, we have a mix of waffles including eggs, bacon ships, lobster and what ever you can imagine and want to put inside your waffle. Come and enjoy the best waffle in town";
  description.appendChild(describePara);
  content.appendChild(description);

  footer("fixed");

  return content;
};

const menu = function () {
  navigationBar();
  const menuTitleDiv = document.createElement("div");
  menuTitleDiv.classList.add("menu-title");
  const menuTitleText = document.createElement("h2");
  menuTitleText.textContent = "Menu";
  menuTitleDiv.appendChild(menuTitleText);
  content.appendChild(menuTitleDiv);
  const pizzaImg = new Image();
  pizzaImg.src = Pizza;
  const strawberryImg = new Image();
  strawberryImg.src = StrawBerry;
  const burgerImg = new Image();
  burgerImg.src = Burger;
  const steakImg = new Image();
  steakImg.src = Steak;
  const soupImg = new Image();
  soupImg.src = Soup;

  class MenuItems {
    constructor(pic, name, description, price) {
      this.pic = pic;
      this.name = name;
      this.description = description;
      this.price = price;
    }

    createItem() {
      const itemDiv = document.createElement("div");
      itemDiv.classList.add("item");
      const picDiv = document.createElement("div");
      picDiv.classList.add("item-pic");
      picDiv.appendChild(this.pic);
      const itemNameDiv = document.createElement("div");
      const itemNameDivPara = document.createElement("p");
      itemNameDiv.appendChild(itemNameDivPara);
      itemNameDivPara.textContent = this.name;
      const itemDescriptionDiv = document.createElement("div");
      itemDescriptionDiv.classList.add("item-desc-class");
      const itemDescriptionPara = document.createElement("p");
      itemDescriptionDiv.appendChild(itemDescriptionPara);
      itemDescriptionPara.textContent = this.description;
      const priceDiv = document.createElement("div");
      priceDiv.classList.add("price-class");
      const pricePara = document.createElement("p");
      priceDiv.appendChild(pricePara);
      pricePara.textContent = this.price;

      const itemDetailsDiv = document.createElement("div");
      itemDetailsDiv.classList.add("item-details");

      const itemDetailsFlex = document.createElement("div");
      itemDetailsFlex.classList.add("item-para");

      itemDiv.appendChild(picDiv);
      itemDiv.appendChild(itemDetailsFlex);
      itemDetailsFlex.appendChild(itemDetailsDiv);
      itemDetailsDiv.appendChild(itemNameDiv);
      itemDetailsDiv.appendChild(priceDiv);
      itemDetailsFlex.appendChild(itemDescriptionDiv);
      content.appendChild(itemDiv);
    }
  }

  const pizzaItem = new MenuItems(
    pizzaImg,
    "Pizza",
    "Pizza with pepperoni and onions and beef on top of it",
    "£20.99"
  );
  pizzaItem.createItem();

  const strawBerryItem = new MenuItems(
    strawberryImg,
    "StrawBerries",
    "Strawberries with some oats and cream",
    "£5.99"
  );
  strawBerryItem.createItem();

  const burgerItem = new MenuItems(
    burgerImg,
    "Burger",
    "Beef Burger with onions, cheese and lettuce with the buns grilled",
    "£12.99"
  );
  burgerItem.createItem();

  const soupItem = new MenuItems(
    soupImg,
    "Soup",
    "A pumpkin soup with a zest of lemon and some parsnips to top it off",
    "£5.99"
  );
  soupItem.createItem();

  const steakItem = new MenuItems(
    steakImg,
    "Steak",
    "Steak with parsnips, and vegetables. Can be had either rare, medium rare or rare",
    "£25.99"
  );
  steakItem.createItem();

  footer();
  return content;
};

const contactUs = function () {
  navigationBar();
  const compassImg = new Image();
  compassImg.src = LocationIcon;
  const phoneImg = new Image();
  phoneImg.src = PhoneBook;
  const aboutUsDiv = document.createElement("div");
  aboutUsDiv.classList.add("about-us");
  const addressDiv = document.createElement("div");
  addressDiv.appendChild(compassImg);
  addressDiv.classList.add("address");
  const addressPara = document.createElement("p");
  addressPara.innerHTML =
    "Riverside Building <br> County Hall <br> London <br> SE1 7PB";
  addressDiv.appendChild(addressPara);
  aboutUsDiv.appendChild(addressDiv);

  const phoneDiv = document.createElement("div");
  phoneDiv.classList.add("phone");
  const phonePara = document.createElement("p");
  phonePara.innerHTML =
    "01234567891 <br> We are open: <br> Mon  - Thurs: 8am - 8pm <br> Fri - Sun: 8am = 11pm <br> Come down and enjoy";
  phoneDiv.appendChild(phoneImg);
  phoneDiv.appendChild(phonePara);

  content.appendChild(aboutUsDiv);
  content.appendChild(phoneDiv);
  footer("fixed");
  return content;
};

document.body.appendChild(home());
