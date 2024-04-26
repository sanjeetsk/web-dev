
let men = document.querySelector(".men");
let women = document.querySelector(".women");
let kids = document.querySelector(".kids");

const myData = [];

fetch("https://cdn.shopify.com/s/files/1/0564/3685/0790/files/multiProduct.json")
    .then((res) => res.json())
    .then((json) => {
        json.categories.forEach((category) => {
            if (category.category_name == "Men") {
                category.category_products.forEach((product) => {
                    const discount = Math.round((product.compare_at_price - product.price) * 100 / product.compare_at_price);
                    men.innerHTML += `
                        <div class="img">
                            ${product.badge_text ? `<span class="badge">${product.badge_text}</span>` : ''}
                            <img src="${product.image}" alt="${product.title}" width="100%" height="100%">
                            <div class="img-title">
                                <div>
                                    <span id="des">${product.title} &nbsp; &nbsp;•</span>
                                    <span id="vendor">${product.vendor}</span>
                                </div>
                                <div>
                                    <span id="price">Rs ${product.price}.00</span> 
                                    <span id="compare_at_price">${product.compare_at_price}.00</span> 
                                    <span id="discount">${discount}% Off</span>
                                </div>
                            </div>
                            <button class="btn-add">Add to cart</button>
                        </div>
                    `;
                })
            }
            else if (category.category_name === "Women") {
                category.category_products.forEach((product) => {
                    const discount = Math.round((product.compare_at_price - product.price) * 100 / product.compare_at_price);
                    women.innerHTML += `
                        <div class="img">
                            ${product.badge_text ? `<span class="badge">${product.badge_text}</span>` : ''}
                            <img src="${product.image}" alt="${product.title}" width="100%" height="100%">
                            <div class="img-title">
                                <div>
                                    <span id="des">${product.title} &nbsp; &nbsp;•</span>
                                    <span id="vendor">${product.vendor} </span>
                                </div>
                                <div>
                                    <span id="price">Rs ${product.price}.00</span> 
                                    <span id="compare_at_price">${product.compare_at_price}.00</span> 
                                    <span id="discount">${discount}% Off</span>
                                </div>
                            </div>
                            <button class="btn-add">Add to cart</button>
                        </div>
                    `;
                });
            } else if (category.category_name === "Kids") {
                category.category_products.forEach((product) => {
                    const discount = Math.round((product.compare_at_price - product.price) * 100 / product.compare_at_price);
                    kids.innerHTML += `
                        <div class="img">
                            ${product.badge_text ? `<span class="badge">${product.badge_text}</span>` : ''}
                            <img src="${product.image}" alt="${product.title}" width="100%" height="100%">
                            <div class="img-title">
                                <div>
                                    <span id="des">${product.title} &nbsp; &nbsp;•</span>
                                    <span id="vendor">${product.vendor} </span>
                                </div>
                                <div>
                                    <span id="price">Rs ${product.price}.00</span> 
                                    <span id="compare_at_price">${product.compare_at_price}.00</span> 
                                    <span id="discount">${discount}% Off</span>
                                </div>
                            </div>
                            <button class="btn-add">Add to cart</button>
                        </div>
                    `;
                });
            }
        })

        const menPro = document.querySelector('#men');
        const womenPro = document.querySelector('#women');
        const kidsPro = document.querySelector('#kids');
        const allCateg = document.querySelectorAll('.selectCategories');
        const menCat = document.querySelector('.men-clothing');
        const womenCat = document.querySelector('.women-clothing');
        const kidsCat = document.querySelector('.kids-clothing');
        const clothings = document.querySelectorAll('.clothings');

        menPro.addEventListener('click', () => {
            allCateg.forEach((ele) => {
                ele.style.backgroundColor = "bisque";
            })
            clothings.forEach((ele) => {
                ele.classList.add('hide');
            })
            menCat.classList.remove('hide');
            menPro.style.backgroundColor = "green";
        })

        womenPro.addEventListener('click', () => {
            allCateg.forEach((ele) => {
                ele.style.backgroundColor = "bisque";
            })
            clothings.forEach((ele) => {
                ele.classList.add('hide');
            })
            womenCat.classList.remove('hide');
            womenPro.style.backgroundColor = "green";
        })

        kidsPro.addEventListener('click', () => {
            allCateg.forEach((ele) => {
                ele.style.backgroundColor = "bisque";
            })
            clothings.forEach((ele) => {
                ele.classList.add('hide');
            })
            kidsCat.classList.remove('hide');
            kidsPro.style.backgroundColor = "green";
        })
    })