const getItem = () => {

    const categories = document.querySelector('#categories');

    const categoriesTotal = document.querySelectorAll('#categories ul');
    console.log('Number of categories:',categoriesTotal.length);

    const allItem = document.querySelectorAll('.item');

    for (const item of allItem) {
        const categoriesHeadName = item.querySelector('#categories h2');
        const categoriesLength = item.querySelectorAll('ul li');
        console.log(`Category: ${categoriesHeadName.textContent}`);
        console.log(`Elements: ${categoriesLength.length}`);
    }

}

getItem();