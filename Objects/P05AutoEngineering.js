function autoEngineeringCompany(arrayOfCars = []) {
    let parseDataCars = arrayOfCars.reduce((acc, carData) => {
        let [carBrand, carModel, producedCars] = carData.split('|').map(x => x.trim());

        if (!acc[carBrand]) {
            acc[carBrand] = [];
        }

        if (!acc[carBrand][carModel]) {
            acc[carBrand].push(carModel);
            acc[carBrand][carModel] = 0;
        }

        acc[carBrand][carModel] += Number(producedCars);

        return acc;

    }, {})

    Object.keys(parseDataCars).map(brand => {
        console.log(brand)

        parseDataCars[brand].map(model => {
            console.log(`###${model} -> ${parseDataCars[brand][model]}`);
        })
    })
}

autoEngineeringCompany(['Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10']
);