function systemComponents(arrayOfComponents) {
    parsedDataSys = arrayOfComponents.reduce((acc, systemComponentsLine) => {
        let [system, componentName, subComponentName] = systemComponentsLine.split('|').map(x => x.trim());

        if (!acc[system]) {
            acc[system] = [];
        }

        if (!acc[system][componentName]) {
            acc[system].push(componentName);
            acc[system][componentName] = [];
        }

        if (!acc[system][componentName][subComponentName]) {
            acc[system][componentName].push(subComponentName);
        }

        return acc;
    }, {})

    Object.keys(parsedDataSys).sort().sort((a, b) => parsedDataSys[b].length - parsedDataSys[a].length).map(s => {
        console.log(s);

        parsedDataSys[s].sort((a, b) => parsedDataSys[s][b].length - parsedDataSys[s][a].length).map(cn => {
            console.log(`|||${cn}`)

            parsedDataSys[s][cn].map(scn => {
                console.log(`||||||${scn}`)
            })
        })
    })

}

systemComponents(['SULS | Main Site | Home Page',
    'SULS | Main Site | Login Page',
    'SULS | Main Site | Register Page',
    'SULS | Judge Site | Login Page',
    'SULS | Judge Site | Submittion Page',
    'Lambda | CoreA | A23',
    'SULS | Digital Site | Login Page',
    'Lambda | CoreB | B24',
    'Lambda | CoreA | A24',
    'Lambda | CoreA | A25',
    'Lambda | CoreC | C4',
    'Indice | Session | Default Storage',
    'Indice | Session | Default Security']
);