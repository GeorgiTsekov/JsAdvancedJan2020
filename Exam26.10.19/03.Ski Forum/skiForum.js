class Forum {
    users = [];
    questions = [];
    id = 1;
    currentLogUsers = [];

    register(_username, _password, _repeatPassword, _email) {
        if (_username === '' || _password === '' || _repeatPassword === '' || _email === '') {
            throw new Error("Input can not be empty");
        }

        if (_password !== _repeatPassword) {
            throw new Error("Passwords do not match");
        }

        if (this.users.find(x => x.username === _username)) {
            throw new Error("This user already exists!");
        }

        let user = {
            username: _username,
            email: _email,
            password: _password
        }

        this.users.push(user);

        return `${_username} with ${_email} was registered successfully!`
    }

    login(_username, _password) {
        if (!this.users.find(x => x.username === _username)) {
            throw new Error("There is no such user");
        }

        if (this.users.find(x => x.username === _username && x.password === _password)) {
            this.currentLogUsers.push(_username);

            return "Hello! You have logged in successfully";
        }
    }

    logout(_username, _password) {
        if (!this.users.find(x => x.username === _username)) {
            throw new Error("There is no such user");
        }

        if (this.users.find(x => x.username === _username && x.password === _password)) {
            return "You have logged out successfully";
        }

        this.currentLogUsers = this.currentLogUsers.filter(x => x !== _username);
    }

    postQuestion(_username, _question) {
        if (!this.users.find(x => x.username === _username) || !this.currentLogUsers.includes(_username)) {
            throw new Error("You should be logged in to post questions");
        }

        if (_question === '') {
            throw new Error("Invalid question");
        }

        this.questions.push({
            id: this.id,
            question: _question,
            postedBy: _username,
            answers: []
        });

        this.id++;

        return "Your question has been posted successfully";
    }

    postAnswer(_username, _questionId, _answer) {
        if (!this.users.find(x => x.username === _username) || !this.currentLogUsers.includes(_username)) {
            throw new Error("You should be logged in to post answers");
        }

        if (_answer === '') {
            throw new Error("Invalid answer");
        }

        if (_questionId >= this.id || _questionId < 1) {
            throw new Error("There is no such question");
        }

        let questionRef = this.questions.find(question => question.id === _questionId);

        questionRef.answers.push({
            answeredBy: _username,
            answer: _answer
        })

        return "Your answer has been posted successfully";
    }

    showQuestions() {
        let temp = this.questions

        return this.questions.reduce((acc, x, i) => {
            return acc += `Question ${x.id} by ${x.postedBy}: ${x.question}`
                + x.answers.reduce((answerAcc, answer) => {
                    return answerAcc += `\n---${answer.answeredBy}: ${answer.answer}`
                }, '') + '\n'
        }, '').trim()
    }
}

let forum = new Forum();

forum.register('Michael', '123', '123', 'michael@abv.bg');
forum.register('Stoyan', '123ab7', '123ab7', 'some@gmail@.com');
forum.login('Michael', '123');
forum.login('Stoyan', '123ab7');

forum.postQuestion('Michael', "Can I rent a snowboard from your shop?");
forum.postAnswer('Stoyan', 1, "Yes, I have rented one last year.");
forum.postQuestion('Stoyan', "How long are supposed to be the ski for my daughter?");
forum.postAnswer('Michael', 2, "How old is she?");
forum.postAnswer('Michael', 2, "Tell us how tall she is.");

console.log(forum.showQuestions());
