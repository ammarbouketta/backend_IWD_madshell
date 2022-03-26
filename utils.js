const recommend = () => {

    jobs = {
        "Teacher": 0,
        "Lawyer": 0,
        "Journalist": 0,
        "Computer Scientist": 0,
        "Interpreter": 0,
        "Architect": 0,
        "Accountant": 0,
        "Author": 0,
        "Doctor": 0
    }
    let question, questions = [{
        "text": "Are you a numbers whiz?",
        "option": "Yes! I'm the next Einstein!"
    }];
    for (question of questions) {
        console.log(question)
        switch (question["text"]) {
            case "Are you a numbers whiz?":
                console.log("here")
                switch (question["option"]) {
                    case "Yes! I'm the next Einstein!":

                        jobs["Computer Scientist"]++;
                        jobs["Architect"]++;
                        jobs["Accountant"]++;
                        jobs["Teacher"]++;
                        break;
                    case "I'm good with math, but it's not my favorite subject.":
                        jobs["Architect"]--;
                        break;
                    case "No - it's really not my thing.":
                        jobs["Computer Scientist"]--;
                        jobs["Architect"]--;
                        jobs["Accountant"]--;
                        break;
                    default:
                        break;

                }
                break;
            case "Are you good at writing?":
                switch (question.option) {
                    case "Yes! I'm the next Dickens!":
                        jobs["Journalist"]++;
                        jobs["Author"]++;
                        break;
                    case "Yes - just don't ask me to write anything more than a few pages":
                        jobs["Journalist"]++;
                        break;
                    case "I write well, but I don't enjoy it so much.":
                        jobs["Journalist"]--;
                        jobs["Author"]--;
                        break;
                    default:
                        break;
                }
                break;
            case "Are you a tech geek?":
                switch (question.option) {
                    case "Yes! Tech comes naturally to me.":
                        jobs["Computer Scientist"]++;
                        jobs["Architect"]++;
                        jobs["Teacher"]++;
                        break;
                    case "Yes - but it's more of a hobby for me":
                        jobs["Computer Scientist"]++;
                        break;
                    default:
                        break;
                }
                break;
            case "What was your favorite subject in school?":
                switch (question.option) {
                    case "Math":
                        jobs["Computer Scientist"]++;
                        jobs["Architect"]++;
                        jobs["Accountant"]++;
                        break;
                    case "Science":
                        jobs["Doctor"]++;
                        break;
                    case "Languages":
                        jobs["Journalist"]++;
                        jobs["Author"]++;
                        jobs["Interpreter"]++;
                        break;
                    case "His\\Geo":
                        jobs["Teacher"]++;
                        jobs["Author"]++;
                        break;
                    case "Islamic sciences":
                        jobs["Teacher"]++;
                        break;
                    case "Law":
                        jobs["Lawyer"]++;
                        break;
                    case "painting":
                        jobs["Architect"]++;
                        break;
                    case "accounting":
                        jobs["Accountant"]++;
                        break;
                    default:
                        break;
                }
                break;
            case "Languages - can you learn them easily?":
                switch (question.option) {
                    case "I know my first language, and some words and phrases I picked up at school.":
                        jobs["Teacher"]++;
                        break;
                    case "I speak a lot of languages.":
                        jobs["Journalist"]++;
                        jobs["Interpreter"]++;
                        break;
                    case "Not really, I'm reliant on having a mutual language with the locals.":
                        jobs["Interpreter"]--;
                        break;
                    default:
                        break;
                }
                break;
            case "Languages - can you learn them easily?":
                switch (question.option) {
                    case "I know my first language, and some words and phrases I picked up at school.":
                        jobs["Teacher"]++;
                        break;
                    case "I speak a lot of languages.":
                        jobs["Journalist"]++;
                        jobs["Interpreter"]++;
                        break;
                    case "Not really, I'm reliant on having a mutual language with the locals.":
                        jobs["Interpreter"]--;
                        break;
                    default:
                        break;
                }
                break;
            case "Are you good at teaching?":
                switch (question.option) {
                    case "Yes! I can turn any space into my classroom!":
                        jobs["Teacher"]++;
                        break;
                    case "I can explain things, yes.":
                        jobs["Computer Scientist"]++;
                        jobs["Teacher"]++;
                        break;
                    case "I can show someone how to do something when needed.":
                        jobs["Computer Scientist"]++;
                        break;
                    case "Not in this lifetime.":
                        jobs["Teacher"]--;
                        break;
                    default:
                        break;
                }
                break;
            case "What do you want to be?":
                switch (question.option) {
                    case "Take care of people and help them":
                        jobs["Doctor"]++;
                        break;
                    case "Defend people":
                        jobs["Lawyer"]++;
                        break;
                    case "Paint and design":
                        jobs["Architect"]++;
                        break;
                    case "Write about social problems":
                        jobs["Journalist"]++;
                        jobs["Author"]++;
                        break;
                    case "Solve people problems":
                        jobs["Computer Scientist"]++;
                        break;
                    default:
                        break;
                }
                break;
            case "What kind of job you want?":
                switch (question.option) {
                    case "Going to the office":
                        jobs["Teacher"]--;
                        break;
                    case "Research job":
                        jobs["Computer Scientist"]++;
                        break;
                    case "construction and engineering":
                        jobs["Architect"]++;
                        break;
                    default:
                        break;
                }
                break;
        }
    }
    console.log(jobs);
    return Object.keys(jobs).reduce((a, b) => jobs[a] > jobs[b] ? a : b);
}
console.log(recommend());