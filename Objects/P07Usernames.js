function usernames(arrayOfUsernames = []) {
    let uniqueUsernames = arrayOfUsernames.reduce((acc, user) => {
        if (!acc.includes(user)) {
            acc.push(user);
        }

        return acc;
    }, [])

    let sortedUsernames = uniqueUsernames.sort().sort((a, b) => a.length - b.length);

    sortedUsernames.map(username => {
        console.log(username);
    })
}

usernames(['Denise',
'Ignatius',
'Iris',
'Iris',
'Isacc',
'Indie',
'Dean',
'Donatello',
'Enfuego',
'Benjamin',
'Biser',
'Bounty',
'Renard',
'Rot']);