const backButton = document.getElementById('back-btn')
const nextButton = document.getElementById('next-btn')
const helpButton = document.getElementById('help-btn')

const startButton = document.getElementById('start-btn')
const modes = document.getElementById('modes')
const modeInstruction = document.getElementById('modeInstruction')
const levelInstruction = document.getElementById('levelInstruction')
const teachAND = document.getElementById('teachAND')

const easy = document.getElementById('easy')
const easyLevels = document.getElementById('easyLevels')
const level1 = document.getElementById('1')
const level2 = document.getElementById('2')
const level3 = document.getElementById('3')
const level4 = document.getElementById('4')
const level5 = document.getElementById('5')
const level6 = document.getElementById('6')

const medium = document.getElementById('medium')
const mediumLevels = document.getElementById('mediumLevels')
const level7 = document.getElementById('7')
const level8 = document.getElementById('8')
const level9 = document.getElementById('9')
const level10 = document.getElementById('10')
const level11 = document.getElementById('11')
const level12 = document.getElementById('12')

const hard = document.getElementById('hard')
const hardLevels = document.getElementById('hardLevels')
const level13 = document.getElementById('13')
const level14 = document.getElementById('14')
const level15= document.getElementById('15')
const level16 = document.getElementById('16')
const level17 = document.getElementById('17')
const level18 = document.getElementById('18')

const container = document.getElementById('container')
const question = document.getElementById('question')
const questiona = document.getElementById('question-a')
const questionb = document.getElementById('question-b')
const questionc = document.getElementById('question-c')
const questiond = document.getElementById('question-d')
const question1 = document.getElementById('question1')
const question2 = document.getElementById('question2')
const question3 = document.getElementById('question3')
const question3b = document.getElementById('question3-b')
const question3c = document.getElementById('question3-c')
const question3d = document.getElementById('question3-d')
const question4 = document.getElementById('question4')
const question4b =document.getElementById('question4-b')
const question4c =document.getElementById('question4-c')
const question4d =document.getElementById('question4-d')
const question5 = document.getElementById('question5')
const question6 = document.getElementById('question6')
const question8 = document.getElementById('question8')
const question8a = document.getElementById('question8-a')
const question8b = document.getElementById('question8-b')
const question8c = document.getElementById('question8-c')
const question8copt1 = document.getElementById('question8-c-opt1')
const question8copt3 = document.getElementById('question8-c-opt3')
const question8d = document.getElementById('question8-d')
const question8dopt1 = document.getElementById('question8-d-opt1')
const question8dopt3 = document.getElementById('question8-d-opt3')
const question8e = document.getElementById('question8-e')
const question8eopt1 = document.getElementById('question8-e-opt1')
const question8eopt3 = document.getElementById('question8-e-opt3')
const question9 = document.getElementById('question9')
const question9b = document.getElementById('question9-b')
const question11 = document.getElementById('question11')
const question11b = document.getElementById('question11-b')
const question10 = document.getElementById('question10')
const question10b = document.getElementById('question10-b')
const question10c = document.getElementById('question10-c')
const question10d = document.getElementById('question10-d')
const question10e = document.getElementById('question10-e')
const question10f = document.getElementById('question10-f')
const question10fopt1 = document.getElementById('question10-f-opt1')
const question10fopt3 = document.getElementById('question10-f-opt3')
const question10g = document.getElementById('question10-g')
const question10gopt1 = document.getElementById('question10-g-opt1')
const question10gopt3 = document.getElementById('question10-g-opt3')
const question10h = document.getElementById('question10-h')
const question10hopt1 = document.getElementById('question10-h-opt1')
const question10hopt3 = document.getElementById('question10-h-opt3')
const question12 = document.getElementById('question12')
const question12b = document.getElementById('question12-b')
const question12c = document.getElementById('question12-c')
const question12d = document.getElementById('question12-d')
const question12e = document.getElementById('question12-e')
const question12f = document.getElementById('question12-f')
const question12g = document.getElementById('question12-g')
const question13 = document.getElementById('question13')
const question13b = document.getElementById('question13-b')
const question13c = document.getElementById('question13-c')
const question13d = document.getElementById('question13-d')
const question13e = document.getElementById('question13-e')
const question13f = document.getElementById('question13-f')
const question13fopt2 = document.getElementById('question13-f-opt2')
const question13fopt3 = document.getElementById('question13-f-opt3')
const question13g = document.getElementById('question13-g')
const question13gopt2 = document.getElementById('question13-g-opt2')
const question13gopt3 = document.getElementById('question13-g-opt3')
const question13h = document.getElementById('question13-h')
const question13hopt2 = document.getElementById('question13-h-opt2')
const question13hopt3 = document.getElementById('question13-h-opt3')
const question14 = document.getElementById('question14')
const question14b = document.getElementById('question14-b')
const question14c = document.getElementById('question14-c')
const question14d = document.getElementById('question14-d')
const question14e = document.getElementById('question14-e')
const question14f = document.getElementById('question14-f')
const question14g = document.getElementById('question14-g')
const question15 = document.getElementById('question15')
const question15b = document.getElementById('question15-b')
const question15c = document.getElementById('question15-c')
const question15d = document.getElementById('question15-d')
const question15e = document.getElementById('question15-e')
const question15f = document.getElementById('question15-f')
const question15fopt1 = document.getElementById('question15-f-opt1')
const question15fopt2 = document.getElementById('question15-f-opt2')
const question15g = document.getElementById('question15-g')
const question15gopt1 = document.getElementById('question15-g-opt1')
const question15gopt2 = document.getElementById('question15-g-opt2')
const question15h = document.getElementById('question15-h')
const question15hopt1 = document.getElementById('question15-h-opt1')
const question15hopt2 = document.getElementById('question15-h-opt2')
const question15i = document.getElementById('question15-i')
const question15iopt2 = document.getElementById('question15-i-opt2')
const question15j = document.getElementById('question15-j')
const question15jopt2 = document.getElementById('question15-j-opt2')
const question16 = document.getElementById('question16')
const question16b = document.getElementById('question16-b')
const question16c = document.getElementById('question16-c')
const question16d = document.getElementById('question16-d')
const question16e = document.getElementById('question16-e')
const question16f = document.getElementById('question16-f')
const question16fopt2 = document.getElementById('question16-f-opt2')
const question16g = document.getElementById('question16-g')
const question16h = document.getElementById('question16-h')
const question17 = document.getElementById('question17')
const question17b = document.getElementById('question17-b')
const question17c = document.getElementById('question17-c')
const question17d = document.getElementById('question17-d')
const question17dopt1 = document.getElementById('question17-d-opt1')
const question17dopt2 = document.getElementById('question17-d-opt2')
const question17e = document.getElementById('question17-e')
const question17eopt1 = document.getElementById('question17-e-opt1')
const question17eopt2 = document.getElementById('question17-e-opt2')
const question18 = document.getElementById('question18')
const question18b = document.getElementById('question18-b')
const question18c = document.getElementById('question18-c')
const question18d = document.getElementById('question18-d')
const question18e = document.getElementById('question18-e')
const question18f = document.getElementById('question18-f')
const question18fopt1 = document.getElementById('question18-f-opt1')
const question18g = document.getElementById('question18-g')
const question18gopt1 = document.getElementById('question18-g-opt1')
const question18h = document.getElementById('question18-h')
const question18hopt1 = document.getElementById('question18-h-opt1')

const world = document.getElementById('world')
const redTriangle = document.getElementById('redTriangle')
const greenSquare = document.getElementById('greenSquare')
const blueSquare = document.getElementById('blueSquare')

const world2 = document.getElementById('world2')
const sun = document.getElementById('sun')
const moon = document.getElementById('moon')
const cloud = document.getElementById('cloud')

const l1a1 = document.getElementById('l1a1')
const l1a2 = document.getElementById('l1a2')
const l1a3 = document.getElementById('l1a3')
const l2a1 = document.getElementById('l2a1')
const l2a2 = document.getElementById('l2a2')
const l2a3 = document.getElementById('l2a3')
const correct = document.getElementById('correct')
const incorrect = document.getElementById('incorrect')

const t = document.getElementById('t')
const f = document.getElementById('f')

let depth = 0
let m = 0
let l = 0
let n = 0

startButton.addEventListener('click', startGame)
backButton.addEventListener('click', goBack)
nextButton.addEventListener('click', incrementN)
helpButton.addEventListener('click', getHelp)


function startGame() {
    startButton.classList.add('hide')
    backButton.classList.remove('hide')
    modeInstruction.classList.remove('hide')
    modes.classList.remove('hide')
    easy.classList.remove('hide')
    medium.classList.remove('hide')
    hard.classList.remove('hide')
    depth += 1
}

easy.addEventListener('click', goEasy)

function goEasy() {
    modes.classList.add('hide')
    modeInstruction.classList.add('hide')
    levelInstruction.classList.remove('hide')
    easyLevels.classList.remove('hide')
    level1.classList.remove('hide')
    level2.classList.remove('hide')
    level3.classList.remove('hide')
    level4.classList.remove('hide')
    level5.classList.remove('hide')
    level6.classList.remove('hide')
    depth += 1
    m += 1
}

level1.addEventListener('click', playLevel1)
level2.addEventListener('click', playLevel2)
level3.addEventListener('click', playLevel3)
level4.addEventListener('click', playLevel4)
level5.addEventListener('click', playLevel5)
level6.addEventListener('click', playLevel6)

function playLevel1() {
    easyLevels.classList.add('hide')
    levelInstruction.classList.add('hide')
    depth += 1
    l += 1
    container.classList.remove('hide')
    answerButtons.classList.remove('hide')
    showSet1()
    l1a1.addEventListener('click', clickTrue)
    l1a2.addEventListener('click', clickFalse)
    l1a3.addEventListener('click', clickFalse)
    l1a1.removeEventListener('click', clickFalse)
    l1a2.removeEventListener('click', clickTrue)
    l1a3.removeEventListener('click', clickTrue)
    hideQuestions()
    question1.classList.remove('hide')
    world.classList.add('hide')
    world2.classList.add('hide')
    hideSet2()
    hideSet3()
    hideSet4()
    hideSet5()
    hideSet6()
    hideSet7()
    hideSet8()
    hideSet9()
    backButton.classList.add('hide')
    helpButton.classList.remove('hide')
}

function clickTrue() {
    answerButtons.classList.add('hide')
    correct.classList.remove('hide')
    incorrect.classList.add('hide')
    hideQuestions()
    container.classList.add('correct')
    container.classList.remove('wrong')
    backButton.classList.remove('hide')
    nextButton.classList.add('hide')
    world.classList.add('hide')
    world2.classList.add('hide')
    if (n==0 && l==3) {
        backButton.classList.add('hide')
        nextButton.classList.remove('hide')
    } else if(n==0 && l==4) {
        backButton.classList.add('hide')
        nextButton.classList.remove('hide')
    } else if(n==1 && l==4) {
        backButton.classList.add('hide')
        nextButton.classList.remove('hide')
    } else if(n==2 && l==4) {
        backButton.classList.add('hide')
        nextButton.classList.remove('hide')
    } else if(n==0 && l==9) {
        backButton.classList.add('hide')
        nextButton.classList.remove('hide')
    } else if(n==1 && l==9) {
        backButton.classList.remove('hide')
        nextButton.classList.add('hide')
    } else if(n==0 && l==11) {
        backButton.classList.add('hide')
        nextButton.classList.remove('hide')
    } else if(n==1 && l==11) {
        backButton.classList.remove('hide')
        nextButton.classList.add('hide')
    } 
    helpButton.classList.add('hide')
}

function clickFalse() {
    answerButtons.classList.add('hide')
    correct.classList.add('hide')
    incorrect.classList.remove('hide')
    hideQuestions()
    container.classList.add('wrong')
    container.classList.remove('correct')
    backButton.classList.remove('hide')
    nextButton.classList.add('hide')
    world.classList.add('hide')
    world2.classList.add('hide')
    helpButton.classList.add('hide')
}

function playLevel2() {
    easyLevels.classList.add('hide')
    levelInstruction.classList.add('hide')
    depth += 1
    l += 2
    container.classList.remove('hide')
    answerButtons.classList.remove('hide')
    showSet1()
    l1a1.addEventListener('click', clickTrue)
    l1a2.addEventListener('click', clickFalse)
    l1a3.addEventListener('click', clickTrue)
    l1a1.removeEventListener('click', clickFalse)
    l1a2.removeEventListener('click', clickTrue)
    l1a3.removeEventListener('click', clickFalse)
    hideQuestions()
    question2.classList.remove('hide')
    world.classList.add('hide')
    world2.classList.add('hide')
    hideSet2()
    hideSet3()
    hideSet4()
    hideSet5()
    hideSet6()
    hideSet7()
    hideSet8()
    hideSet9()
    backButton.classList.add('hide')
    helpButton.classList.remove('hide')
}
function playLevel3() {
    easyLevels.classList.add('hide')
    levelInstruction.classList.add('hide')
    depth += 1
    l += 3
    container.classList.remove('hide')
    answerButtons.classList.remove('hide')
    showSet1()
    l1a1.addEventListener('click', clickFalse)
    l1a2.addEventListener('click', clickTrue)
    l1a3.addEventListener('click', clickFalse)
    l1a1.removeEventListener('click', clickTrue)
    l1a2.removeEventListener('click', clickFalse)
    l1a3.removeEventListener('click', clickTrue)
    hideQuestions()
    question3.classList.remove('hide')
    world.classList.add('hide')
    world2.classList.add('hide')
    hideSet2()
    hideSet3()
    hideSet4()
    hideSet5()
    hideSet6()
    hideSet7()
    hideSet8()
    hideSet9()
    backButton.classList.add('hide')
    helpButton.classList.remove('hide')
}
function playLevel4() {
    easyLevels.classList.add('hide')
    levelInstruction.classList.add('hide')
    depth += 1
    l += 4
    container.classList.remove('hide')
    answerButtons.classList.remove('hide')
    showSet1()
    l1a1.addEventListener('click', clickFalse)
    l1a2.addEventListener('click', clickFalse)
    l1a3.addEventListener('click', clickTrue)
    l1a1.removeEventListener('click', clickTrue)
    l1a2.removeEventListener('click', clickTrue)
    l1a3.removeEventListener('click', clickFalse)
    hideQuestions()
    question4.classList.remove('hide')
    world.classList.add('hide')
    world2.classList.add('hide')
    hideSet2()
    hideSet3()
    hideSet4()
    hideSet5()
    hideSet6()
    hideSet7()
    hideSet8()
    hideSet9()
    backButton.classList.add('hide')
    helpButton.classList.remove('hide')
}
function playLevel5() {
    easyLevels.classList.add('hide')
    levelInstruction.classList.add('hide')
    depth += 1
    l += 5
    container.classList.remove('hide')
    answerButtons.classList.remove('hide')
    showSet2()
    world.classList.remove('hide')
    world2.classList.add('hide')
    showWorldComponents()
    hideQuestions()
    question5.classList.remove('hide')
    hideSet1()
    hideSet3()
    hideSet4()
    hideSet5()
    hideSet6()
    hideSet7()
    hideSet8()
    hideSet9()
    backButton.classList.add('hide')
    t.addEventListener('click', clickFalse)
    f.addEventListener('click', clickTrue)
    t.removeEventListener('click', clickTrue)
    f.removeEventListener('click', clickFalse)
    helpButton.classList.remove('hide')
}
function playLevel6() {
    easyLevels.classList.add('hide')
    levelInstruction.classList.add('hide')
    depth += 1
    l += 6
    container.classList.remove('hide')
    answerButtons.classList.remove('hide')
    showSet2()
    world.classList.remove('hide')
    world2.classList.add('hide')
    showWorldComponents()
    hideQuestions()
    question6.classList.remove('hide')
    hideSet1()
    hideSet3()
    hideSet4()
    hideSet5()
    hideSet6()
    hideSet7()
    hideSet8()
    hideSet9()
    backButton.classList.add('hide')
    t.addEventListener('click', clickTrue)
    f.addEventListener('click', clickFalse)
    t.removeEventListener('click', clickFalse)
    f.removeEventListener('click', clickTrue)
    helpButton.classList.remove('hide')
}

medium.addEventListener('click', goMedium)

function goMedium() {
    modes.classList.add('hide')
    modeInstruction.classList.add('hide')
    levelInstruction.classList.remove('hide')
    mediumLevels.classList.remove('hide')
    level7.classList.remove('hide')
    level8.classList.remove('hide')
    level9.classList.remove('hide')
    level10.classList.remove('hide')
    level11.classList.remove('hide')
    level12.classList.remove('hide')
    depth += 1
    m += 2
}

level7.addEventListener('click', playLevel7)
level8.addEventListener('click', playLevel8)
level9.addEventListener('click', playLevel9)
level10.addEventListener('click', playLevel10)
level11.addEventListener('click', playLevel11)
level12.addEventListener('click', playLevel12)

function playLevel7() {
    mediumLevels.classList.add('hide')
    levelInstruction.classList.add('hide')
    depth += 1
    l += 7
    nextButton.classList.remove('hide')
    container.classList.remove('hide')
    world.classList.remove('hide')
    world2.classList.add('hide')
    showWorldComponents()
    hideQuestions()
    question.classList.remove('hide')
}
const trueResult = document.getElementById('trueResult')
const falseResult = document.getElementById('falseResult')

function clickedAnswer1() {
    questiond.classList.add('hide')
    trueResult.classList.remove('hide')
    answerButtons.classList.add('hide')
    backButton.classList.remove('hide')
}

function clickedAnswer2() {
    questiond.classList.add('hide')
    falseResult.classList.remove('hide')
    answerButtons.classList.add('hide')
    backButton.classList.remove('hide')
    container.classList.remove('correct')
    container.classList.add('wrong')
}

function clickedAnswer3() {
    question12g.classList.add('hide')
    trueResult12.classList.remove('hide')
    answerButtons.classList.add('hide')
    backButton.classList.remove('hide')
    container.classList.add('correct')
    container.classList.remove('wrong')
}

function clickedAnswer4() {
    question12g.classList.add('hide')
    falseResult12.classList.remove('hide')
    answerButtons.classList.add('hide')
    backButton.classList.remove('hide')
    container.classList.remove('correct')
    container.classList.add('wrong')
}

function clickedAnswer5() {
    question14g.classList.add('hide')
    falseResult14.classList.remove('hide')
    answerButtons.classList.add('hide')
    backButton.classList.remove('hide')
    container.classList.remove('correct')
    container.classList.add('wrong')
}

function clickedAnswer6() {
    question14g.classList.add('hide')
    trueResult14.classList.remove('hide')
    answerButtons.classList.add('hide')
    backButton.classList.remove('hide')
    container.classList.add('correct')
    container.classList.remove('wrong')
}

function clickedAnswer7() {
    question16e.classList.add('hide')
    question16f.classList.remove('hide')
    answerButtons.classList.add('hide')
    container.classList.add('correct')
    container.classList.remove('wrong')
    nextButton.classList.remove('hide')

    option = 1
}

function clickedAnswer8() {
    question16e.classList.add('hide')
    question16fopt2.classList.remove('hide')
    answerButtons.classList.add('hide')
    nextButton.classList.remove('hide')

    option = 2
}

function clickedAnswer9() {
    question17e.classList.add('hide')
    answerButtons.classList.add('hide')
    nextButton.classList.add('hide')
    trueResult17.classList.remove('hide')
    backButton.classList.remove('hide')
}

function clickedAnswer10() {
    question17e.classList.add('hide')
    answerButtons.classList.add('hide')
    nextButton.classList.add('hide')
    falseResult17.classList.remove('hide')
    container.classList.remove('correct')
    container.classList.add('wrong')
    backButton.classList.remove('hide')
}

function clickedAnswer11() {
    question18e.classList.add('hide')
    question18fopt1.classList.remove('hide')
    answerButtons.classList.add('hide')
    nextButton.classList.remove('hide')
    option = 1
}

function clickedAnswer12() {
    question18e.classList.add('hide')
    question18f.classList.remove('hide')
    answerButtons.classList.add('hide')
    nextButton.classList.remove('hide')
    option = 2
}

function playLevel8() {
    mediumLevels.classList.add('hide')
    levelInstruction.classList.add('hide')
    depth += 1
    l += 8
    nextButton.classList.remove('hide')
    container.classList.remove('hide')
    world.classList.remove('hide')
    world2.classList.add('hide')
    showWorldComponents()
    hideQuestions()
    question8.classList.remove('hide')
}

const trueResult8 = document.getElementById('trueResult8')
const falseResult8 = document.getElementById('falseResult8')
const trueResult10 = document.getElementById('trueResult10')
const falseResult10 = document.getElementById('falseResult10')
const trueResult12 = document.getElementById('trueResult12')
const falseResult12 = document.getElementById('falseResult12')
const trueResult13 = document.getElementById('trueResult13')
const falseResult13 = document.getElementById('falseResult13')
const trueResult14 = document.getElementById('trueResult14')
const falseResult14 = document.getElementById('falseResult14')
const trueResult15 = document.getElementById('trueResult15')
const falseResult15opt1 = document.getElementById('falseResult15opt1')
const falseResult15opt2 = document.getElementById('falseResult15opt2')
const trueResult16 = document.getElementById('trueResult16')
const falseResult16 = document.getElementById('falseResult16')
const trueResult17 = document.getElementById('trueResult17')
const falseResult17 = document.getElementById('falseResult17')
const falseResult17opt1 = document.getElementById('falseResult17opt1')
const falseResult17opt2 = document.getElementById('falseResult17opt2')
const trueResult18 = document.getElementById('trueResult18')
const falseResult18 = document.getElementById('falseResult18')
let option = 0

function clickTriangle() {
    blueSquare.classList.add('hide')
    greenSquare.classList.add('hide')
    answerButtons.classList.add('hide')

    if (l==8) {
        question8b.classList.add('hide')
        question8c.classList.remove('hide')
    } else if (l==10) {
        question10e.classList.add('hide')
        question10f.classList.remove('hide')
    }
    
    nextButton.classList.remove('hide')
    option = 2
}

function clickBlueSquare() {
    redTriangle.classList.add('hide')
    greenSquare.classList.add('hide')
    answerButtons.classList.add('hide')

    if (l==8) {
        question8b.classList.add('hide')
        question8copt1.classList.remove('hide')
    } else if (l==10) {
        question10e.classList.add('hide')
        question10fopt1.classList.remove('hide')
    }

    nextButton.classList.remove('hide')
    option = 1
}

function clickGreenSquare() {
    blueSquare.classList.add('hide')
    redTriangle.classList.add('hide')
    answerButtons.classList.add('hide')

    if (l==8) {
        question8b.classList.add('hide')
        question8copt3.classList.remove('hide')
    } else if (l==10) {
        question10e.classList.add('hide')
        question10fopt3.classList.remove('hide')
    }

    nextButton.classList.remove('hide')
    option = 3
}

function clickSun() {
    moon.classList.add('hide')
    cloud.classList.add('hide')
    answerButtons.classList.add('hide')

    if (l==13) {
        question13e.classList.add('hide')
        question13f.classList.remove('hide')
    } else if (l==15) {
        question15e.classList.add('hide')
        question15fopt1.classList.remove('hide')
    } else if (l==17) {
        question17c.classList.add('hide')
        question17dopt1.classList.remove('hide')
        container.classList.remove('correct')
        container.classList.add('wrong')
    }

    nextButton.classList.remove('hide')
    option = 1
}

function clickMoon() {
    sun.classList.add('hide')
    cloud.classList.add('hide')
    answerButtons.classList.add('hide')

    if (l==13) {
        question13e.classList.add('hide')
        question13fopt2.classList.remove('hide')
    } else if (l==15) {
        question15e.classList.add('hide')
        question15fopt2.classList.remove('hide')
    } else if (l==17) {
        question17c.classList.add('hide')
        question17dopt2.classList.remove('hide')
        container.classList.remove('correct')
        container.classList.add('wrong')
    }

    nextButton.classList.remove('hide')
    option = 2
}

function clickCloud() {
    sun.classList.add('hide')
    moon.classList.add('hide')
    answerButtons.classList.add('hide')

    if (l==13) {
        question13e.classList.add('hide')
        question13fopt3.classList.remove('hide')
    } else if (l==15) {
        question15e.classList.add('hide')
        question15f.classList.remove('hide')
    } else if (l==17) {
        question17c.classList.add('hide')
        question17d.classList.remove('hide')
        container.classList.remove('correct')
        container.classList.add('wrong')
    } 

    nextButton.classList.remove('hide')
    option = 3
}

function playLevel9() {
    mediumLevels.classList.add('hide')
    levelInstruction.classList.add('hide')
    depth += 1
    l += 9
    container.classList.remove('hide')
    answerButtons.classList.remove('hide')
    showSet2()
    world.classList.remove('hide')
    world2.classList.add('hide')
    showWorldComponents()
    hideQuestions()
    question9.classList.remove('hide')
    hideSet1()
    hideSet3()
    hideSet4()
    hideSet5()
    hideSet6()
    hideSet7()
    hideSet8()
    hideSet9()
    backButton.classList.add('hide')
    t.addEventListener('click', clickTrue)
    f.addEventListener('click', clickFalse)
    t.removeEventListener('click', clickFalse)
    f.removeEventListener('click', clickTrue)
    helpButton.classList.remove('hide')
}
function playLevel10() {
    mediumLevels.classList.add('hide')
    levelInstruction.classList.add('hide')
    depth += 1
    l += 10
    nextButton.classList.remove('hide')
    container.classList.remove('hide')
    world.classList.remove('hide')
    world2.classList.add('hide')
    showWorldComponents()
    hideQuestions()
    question10.classList.remove('hide')
}
function playLevel11() {
    mediumLevels.classList.add('hide')
    levelInstruction.classList.add('hide')
    depth += 1
    l += 11
    container.classList.remove('hide')
    answerButtons.classList.remove('hide')
    showSet2()
    world.classList.remove('hide')
    showWorldComponents()
    hideQuestions()
    question11.classList.remove('hide')
    hideSet1()
    hideSet3()
    hideSet4()
    hideSet5()
    hideSet6()
    hideSet7()
    hideSet8()
    hideSet9()
    backButton.classList.add('hide')
    t.addEventListener('click', clickFalse)
    f.addEventListener('click', clickTrue)
    t.removeEventListener('click', clickTrue)
    f.removeEventListener('click', clickFalse)
    container.classList.remove('correct')
    container.classList.remove('wrong')
    correct.classList.add('hide')
    nextButton.classList.add('hide')
    helpButton.classList.remove('hide')
}
function playLevel12() {
    mediumLevels.classList.add('hide')
    levelInstruction.classList.add('hide')
    depth += 1
    l += 12
    nextButton.classList.remove('hide')
    container.classList.remove('hide')
    world.classList.remove('hide')
    world2.classList.add('hide')
    showWorldComponents()
    hideQuestions()
    question12.classList.remove('hide')
}

hard.addEventListener('click', goHard)

function goHard() {
    modes.classList.add('hide')
    modeInstruction.classList.add('hide')
    levelInstruction.classList.remove('hide')
    hardLevels.classList.remove('hide')
    level13.classList.remove('hide')
    level14.classList.remove('hide')
    level15.classList.remove('hide')
    level16.classList.remove('hide')
    level17.classList.remove('hide')
    level18.classList.remove('hide')
    depth += 1
    m += 3
}

level13.addEventListener('click', playLevel13)
level14.addEventListener('click', playLevel14)
level15.addEventListener('click', playLevel15)
level16.addEventListener('click', playLevel16)
level17.addEventListener('click', playLevel17)
level18.addEventListener('click', playLevel18)

function playLevel13() {
    hardLevels.classList.add('hide')
    levelInstruction.classList.add('hide')
    depth += 1
    l += 13
    nextButton.classList.remove('hide')
    container.classList.remove('hide')
    world.classList.add('hide')
    world2.classList.remove('hide')
    showWorld2Components()
    hideQuestions()
    question13.classList.remove('hide')
}
function playLevel14() {
    hardLevels.classList.add('hide')
    levelInstruction.classList.add('hide')
    depth += 1
    l += 14
    nextButton.classList.remove('hide')
    container.classList.remove('hide')
    world.classList.add('hide')
    world2.classList.remove('hide')
    showWorld2Components()
    hideQuestions()
    question14.classList.remove('hide')
}
function playLevel15() {
    hardLevels.classList.add('hide')
    levelInstruction.classList.add('hide')
    depth += 1
    l += 15
    nextButton.classList.remove('hide')
    container.classList.remove('hide')
    world.classList.add('hide')
    world2.classList.remove('hide')
    showWorld2Components()
    hideQuestions()
    question15.classList.remove('hide')
}
function playLevel16() {
    hardLevels.classList.add('hide')
    levelInstruction.classList.add('hide')
    depth += 1
    l += 16
    nextButton.classList.remove('hide')
    container.classList.remove('hide')
    world.classList.add('hide')
    world2.classList.remove('hide')
    showWorld2Components()
    hideQuestions()
    question16.classList.remove('hide')
}
function playLevel17() {
    hardLevels.classList.add('hide')
    levelInstruction.classList.add('hide')
    depth += 1
    l += 17
    nextButton.classList.remove('hide')
    container.classList.remove('hide')
    world.classList.add('hide')
    world2.classList.remove('hide')
    showWorld2Components()
    hideQuestions()
    question17.classList.remove('hide')
}
function playLevel18() {
    hardLevels.classList.add('hide')
    levelInstruction.classList.add('hide')
    depth += 1
    l += 18
    nextButton.classList.remove('hide')
    container.classList.remove('hide')
    world.classList.add('hide')
    world2.classList.remove('hide')
    showWorld2Components()
    hideQuestions()
    question18.classList.remove('hide')
}

const answerButtons = document.getElementById('answer-btns')
const answer1 = document.getElementById('answer1')
const answer2 = document.getElementById('answer2')
answer1.addEventListener('click', clickedAnswer1)
answer2.addEventListener('click', clickedAnswer2)
const answer3 = document.getElementById('answer3')
const answer4 = document.getElementById('answer4')
answer3.addEventListener('click', clickedAnswer3)
answer4.addEventListener('click', clickedAnswer4)
const answer5 = document.getElementById('answer5')
const answer6 = document.getElementById('answer6')
answer5.addEventListener('click', clickedAnswer5)
answer6.addEventListener('click', clickedAnswer6)
const answer7 = document.getElementById('answer7')
const answer8 = document.getElementById('answer8')
answer7.addEventListener('click', clickedAnswer7)
answer8.addEventListener('click', clickedAnswer8)
const answer9 = document.getElementById('answer9')
const answer10 = document.getElementById('answer10')
answer9.addEventListener('click', clickedAnswer9)
answer10.addEventListener('click', clickedAnswer10)

const answer11 = document.getElementById('answer11')
const answer12 = document.getElementById('answer12')
answer11.addEventListener('click', clickedAnswer11)
answer12.addEventListener('click', clickedAnswer12)

l2a1.addEventListener('click', clickSun)
l2a2.addEventListener('click', clickMoon)
l2a3.addEventListener('click', clickCloud)

function incrementN() {
    n += 1
    goNext()
}

function goNext() {
    if (n==1 && l==3) {
        container.classList.remove('hide')
        answerButtons.classList.remove('hide')
        showSet1()
        l1a1.addEventListener('click', clickTrue)
        l1a2.addEventListener('click', clickFalse)
        l1a3.addEventListener('click', clickTrue)
        l1a1.removeEventListener('click', clickFalse)
        l1a2.removeEventListener('click', clickTrue)
        l1a3.removeEventListener('click', clickFalse)
        hideQuestions()
        question3b.classList.remove('hide')
        world.classList.add('hide')
        hideSet2()
        hideSet3()
        hideSet4()
        hideSet5()
        hideSet6()
        hideSet7()
        hideSet8()
        hideSet9()
        backButton.classList.add('hide')
        container.classList.remove('correct')
        container.classList.remove('wrong')
        correct.classList.add('hide')
        nextButton.classList.add('hide')
        helpButton.classList.remove('hide')
    } else if (n==1 && l==4) {
        container.classList.remove('hide')
        answerButtons.classList.remove('hide')
        showSet1()
        l1a1.addEventListener('click', clickFalse)
        l1a2.addEventListener('click', clickFalse)
        l1a3.addEventListener('click', clickTrue)
        l1a1.removeEventListener('click', clickTrue)
        l1a2.removeEventListener('click', clickTrue)
        l1a3.removeEventListener('click', clickFalse)
        hideQuestions()
        question4b.classList.remove('hide')
        world.classList.add('hide')
        hideSet2()
        hideSet3()
        hideSet4()
        hideSet5()
        hideSet6()
        hideSet7()
        hideSet8()
        hideSet9()
        backButton.classList.add('hide')
        container.classList.remove('correct')
        container.classList.remove('wrong')
        correct.classList.add('hide')
        nextButton.classList.add('hide')
        helpButton.classList.remove('hide')
    } else if (n==2 && l==4) {
        container.classList.remove('hide')
        answerButtons.classList.remove('hide')
        showSet1()
        l1a1.addEventListener('click', clickTrue)
        l1a2.addEventListener('click', clickTrue)
        l1a3.addEventListener('click', clickFalse)
        l1a1.removeEventListener('click', clickFalse)
        l1a2.removeEventListener('click', clickFalse)
        l1a3.removeEventListener('click', clickTrue)
        hideQuestions()
        question4c.classList.remove('hide')
        world.classList.add('hide')
        hideSet2()
        hideSet3()
        hideSet4()
        hideSet5()
        hideSet6()
        hideSet7()
        hideSet8()
        hideSet9()
        backButton.classList.add('hide')
        container.classList.remove('correct')
        container.classList.remove('wrong')
        correct.classList.add('hide')
        nextButton.classList.add('hide')
        helpButton.classList.remove('hide')
    } else if (n==3 && l==4) {
        container.classList.remove('hide')
        answerButtons.classList.remove('hide')
        showSet1()
        l1a1.addEventListener('click', clickTrue)
        l1a2.addEventListener('click', clickTrue)
        l1a3.addEventListener('click', clickFalse)
        l1a1.removeEventListener('click', clickFalse)
        l1a2.removeEventListener('click', clickFalse)
        l1a3.removeEventListener('click', clickTrue)
        hideQuestions()
        question4d.classList.remove('hide')
        world.classList.add('hide')
        hideSet2()
        hideSet3()
        hideSet4()
        hideSet5()
        hideSet6()
        hideSet7()
        hideSet8()
        hideSet9()
        backButton.classList.add('hide')
        container.classList.remove('correct')
        container.classList.remove('wrong')
        correct.classList.add('hide')
        nextButton.classList.add('hide')
        helpButton.classList.remove('hide')
    } else if (n==1 && l==7) {
        container.classList.add('wrong')
        question.classList.add('hide')
        questiona.classList.remove('hide')
        backButton.classList.add('hide')
    } else if (n==2 && l==7) {
        questiona.classList.add('hide')
        questionb.classList.remove('hide')
    } else if (n==3 && l==7) {
        questionb.classList.add('hide')
        questionc.classList.remove('hide')
    } else if (n==4 && l==7) {
        questionc.classList.add('hide')
        questiond.classList.remove('hide')
        container.classList.remove('wrong')
        container.classList.add('correct')
        redTriangle.classList.add('hide')
        greenSquare.classList.add('hide')
        nextButton.classList.add('hide')
        answerButtons.classList.remove('hide')
        showSet3()
        hideSet1()
        hideSet2()
        hideSet4()
        hideSet5()
        hideSet6()
        hideSet7()
        hideSet8()
        hideSet9()
    } else if (n==1 && l==8) {
        container.classList.add('correct')
        question8.classList.add('hide')
        question8a.classList.remove('hide')
        backButton.classList.add('hide')
    } else if (n==2 && l==8) {
        question8a.classList.add('hide')
        question8b.classList.remove('hide')
        answerButtons.classList.remove('hide')
        nextButton.classList.add('hide')
        showSet1()
        hideSet2()
        hideSet3()
        hideSet4()
        hideSet5()
        hideSet6()
        hideSet7()
        hideSet8()
        hideSet9()
        l1a1.removeEventListener('click', clickFalse)
        l1a1.removeEventListener('click', clickTrue)
        l1a2.removeEventListener('click', clickFalse)
        l1a2.removeEventListener('click', clickTrue)
        l1a3.removeEventListener('click', clickFalse)
        l1a3.removeEventListener('click', clickTrue)
        l1a2.addEventListener('click', clickTriangle)
        l1a1.addEventListener('click', clickBlueSquare)
        l1a3.addEventListener('click', clickGreenSquare)
    } else if (n==3 && l==8 && option==2) {
        container.classList.remove('correct')
        container.classList.add('wrong')
        question8c.classList.add('hide')
        question8d.classList.remove('hide')
    } else if (n==4 && l==8 && option==2) {
        question8d.classList.add('hide')
        question8e.classList.remove('hide')
    } else if (n==5 && l==8 && option==2) {
        question8e.classList.add('hide')
        container.classList.remove('wrong')
        container.classList.add('correct')
        trueResult8.classList.remove('hide')
        nextButton.classList.add('hide')
        backButton.classList.remove('hide')
    } else if (n==3 && l==8 && option==1) {
        container.classList.remove('correct')
        container.classList.add('wrong')
        question8copt1.classList.add('hide')
        question8dopt1.classList.remove('hide')
    } else if (n==4 && l==8 && option==1) {
        question8dopt1.classList.add('hide')
        question8eopt1.classList.remove('hide')
    } else if (n==5 && l==8 && option==1) {
        question8eopt1.classList.add('hide')
        container.classList.add('wrong')
        container.classList.remove('correct')
        falseResult8.classList.remove('hide')
        nextButton.classList.add('hide')
        backButton.classList.remove('hide')
    } else if (n==3 && l==8 && option==3) {
        container.classList.remove('correct')
        container.classList.add('wrong')
        question8copt3.classList.add('hide')
        question8dopt3.classList.remove('hide')
    } else if (n==4 && l==8 && option==3) {
        question8dopt3.classList.add('hide')
        question8eopt3.classList.remove('hide')
    } else if (n==5 && l==8 && option==3) {
        question8eopt3.classList.add('hide')
        container.classList.add('wrong')
        container.classList.remove('correct')
        falseResult8.classList.remove('hide')
        nextButton.classList.add('hide')
        backButton.classList.remove('hide')
    } else if (n==1 && l==9) {
        container.classList.remove('hide')
        answerButtons.classList.remove('hide')
        showSet2()
        world.classList.remove('hide')
        showWorldComponents()
        hideQuestions()
        question9b.classList.remove('hide')
        hideSet1()
        hideSet3()
        hideSet4()
        hideSet5()
        hideSet6()
        hideSet7()
        hideSet8()
        hideSet9()
        backButton.classList.add('hide')
        t.addEventListener('click', clickTrue)
        f.addEventListener('click', clickFalse)
        t.removeEventListener('click', clickFalse)
        f.removeEventListener('click', clickTrue)
        container.classList.remove('correct')
        container.classList.remove('wrong')
        correct.classList.add('hide')
        nextButton.classList.add('hide')
        helpButton.classList.remove('hide')
    } else if (n==1 && l==11) {
        container.classList.remove('hide')
        answerButtons.classList.remove('hide')
        showSet2()
        world.classList.remove('hide')
        showWorldComponents()
        hideQuestions()
        question11b.classList.remove('hide')
        hideSet1()
        hideSet3()
        hideSet4()
        hideSet5()
        hideSet6()
        hideSet7()
        hideSet8()
        hideSet9()
        backButton.classList.add('hide')
        t.addEventListener('click', clickFalse)
        f.addEventListener('click', clickTrue)
        t.removeEventListener('click', clickTrue)
        f.removeEventListener('click', clickFalse)
        container.classList.remove('correct')
        container.classList.remove('wrong')
        correct.classList.add('hide')
        nextButton.classList.add('hide')
        helpButton.classList.remove('hide')
    } else if (n==1 && l==10) {
        question10.classList.add('hide')
        question10b.classList.remove('hide')
        backButton.classList.add('hide')
    } else if (n==2 && l==10) {
        question10b.classList.add('hide')
        question10c.classList.remove('hide')
    } else if (n==3 && l==10) {
        container.classList.add('correct')
        question10c.classList.add('hide')
        question10d.classList.remove('hide')
    } else if (n==4 && l==10) {
        question10d.classList.add('hide')
        question10e.classList.remove('hide')
        answerButtons.classList.remove('hide')
        nextButton.classList.add('hide')
        showSet1()
        hideSet2()
        hideSet3()
        hideSet4()
        hideSet5()
        hideSet6()
        hideSet7()
        hideSet8()
        hideSet9()
        l1a1.removeEventListener('click', clickFalse)
        l1a1.removeEventListener('click', clickTrue)
        l1a2.removeEventListener('click', clickFalse)
        l1a2.removeEventListener('click', clickTrue)
        l1a3.removeEventListener('click', clickFalse)
        l1a3.removeEventListener('click', clickTrue)
        l1a2.addEventListener('click', clickTriangle)
        l1a1.addEventListener('click', clickBlueSquare)
        l1a3.addEventListener('click', clickGreenSquare)
    } else if (n==5 && l==10 && option==2) {
        container.classList.remove('correct')
        container.classList.add('wrong')
        question10f.classList.add('hide')
        question10g.classList.remove('hide')
    } else if (n==6 && l==10 && option==2) {
        question10g.classList.add('hide')
        question10h.classList.remove('hide')
    } else if (n==7 && l==10 && option==2) {
        question10h.classList.add('hide')
        container.classList.remove('wrong')
        container.classList.add('correct')
        trueResult10.classList.remove('hide')
        nextButton.classList.add('hide')
        backButton.classList.remove('hide')
    } else if (n==5 && l==10 && option==1) {
        container.classList.remove('correct')
        container.classList.add('wrong')
        question10fopt1.classList.add('hide')
        question10gopt1.classList.remove('hide')
    } else if (n==6 && l==10 && option==1) {
        question10gopt1.classList.add('hide')
        question10hopt1.classList.remove('hide')
    } else if (n==7 && l==10 && option==1) {
        question10hopt1.classList.add('hide')
        container.classList.add('wrong')
        container.classList.remove('correct')
        falseResult10.classList.remove('hide')
        nextButton.classList.add('hide')
        backButton.classList.remove('hide')
    } else if (n==5 && l==10 && option==3) {
        container.classList.remove('correct')
        container.classList.add('wrong')
        question10fopt3.classList.add('hide')
        question10gopt3.classList.remove('hide')
    } else if (n==6 && l==10 && option==3) {
        question10gopt3.classList.add('hide')
        question10hopt3.classList.remove('hide')
    } else if (n==7 && l==10 && option==3) {
        question10hopt3.classList.add('hide')
        container.classList.add('wrong')
        container.classList.remove('correct')
        falseResult10.classList.remove('hide')
        nextButton.classList.add('hide')
        backButton.classList.remove('hide')
    } else if (n==1 && l==12) {
        question12.classList.add('hide')
        question12b.classList.remove('hide')
        backButton.classList.add('hide')
    } else if (n==2 && l==12) {
        question12b.classList.add('hide')
        question12c.classList.remove('hide')
    } else if (n==3 && l==12) {
        question12c.classList.add('hide')
        question12d.classList.remove('hide')
        container.classList.add('wrong')
    } else if (n==4 && l==12) {
        question12d.classList.add('hide')
        question12e.classList.remove('hide')
    } else if (n==5 && l==12) {
        question12e.classList.add('hide')
        question12f.classList.remove('hide')
        blueSquare.classList.add('hide')
        redTriangle.classList.add('hide')
    } else if (n==6 && l==12) {
        question12f.classList.add('hide')
        question12g.classList.remove('hide')
        container.classList.add('correct')
        container.classList.remove('wrong')
        answerButtons.classList.remove('hide')
        showSet4()
        hideSet1()
        hideSet2()
        hideSet3()
        hideSet5()
        hideSet6()
        hideSet7()
        hideSet8()
        hideSet9()
        nextButton.classList.add('hide')
    } else if (n==1 && l==13) {
        question13.classList.add('hide')
        question13b.classList.remove('hide')
        backButton.classList.add('hide')
    } else if (n==2 && l==13) {
        question13b.classList.add('hide')
        question13c.classList.remove('hide')
    } else if (n==3 && l==13) {
        container.classList.add('correct')
        question13c.classList.add('hide')
        question13d.classList.remove('hide')
    } else if (n==4 && l==13) {
        question13d.classList.add('hide')
        question13e.classList.remove('hide')
        answerButtons.classList.remove('hide')
        nextButton.classList.add('hide')
        showSet5()
        hideSet1()
        hideSet2()
        hideSet3()
        hideSet4()
        hideSet6()
        hideSet7()
        hideSet8()
        hideSet9()
        l2a1.addEventListener('click', clickSun)
        l2a2.addEventListener('click', clickMoon)
        l2a3.addEventListener('click', clickCloud)
    } else if (n==5 && l==13 && option==1) {
        container.classList.remove('correct')
        container.classList.add('wrong')
        question13f.classList.add('hide')
        question13g.classList.remove('hide')
    } else if (n==6 && l==13 && option==1) {
        question13g.classList.add('hide')
        question13h.classList.remove('hide')
    } else if (n==7 && l==13 && option==1) {
        question13h.classList.add('hide')
        container.classList.remove('wrong')
        container.classList.add('correct')
        trueResult13.classList.remove('hide')
        nextButton.classList.add('hide')
        backButton.classList.remove('hide')
    } else if (n==5 && l==13 && option==2) {
        container.classList.remove('correct')
        container.classList.add('wrong')
        question13fopt2.classList.add('hide')
        question13gopt2.classList.remove('hide')
    } else if (n==6 && l==13 && option==2) {
        question13gopt2.classList.add('hide')
        question13hopt2.classList.remove('hide')
    } else if (n==7 && l==13 && option==2) {
        question13hopt2.classList.add('hide')
        container.classList.add('wrong')
        container.classList.remove('correct')
        falseResult13.classList.remove('hide')
        nextButton.classList.add('hide')
        backButton.classList.remove('hide')
    } else if (n==5 && l==13 && option==3) {
        container.classList.remove('correct')
        container.classList.add('wrong')
        question13fopt3.classList.add('hide')
        question13gopt3.classList.remove('hide')
    } else if (n==6 && l==13 && option==3) {
        question13gopt3.classList.add('hide')
        question13hopt3.classList.remove('hide')
    } else if (n==7 && l==13 && option==3) {
        question13hopt3.classList.add('hide')
        container.classList.add('wrong')
        container.classList.remove('correct')
        falseResult13.classList.remove('hide')
        nextButton.classList.add('hide')
        backButton.classList.remove('hide')
    } else if (n==1 && l==14) {
        question14.classList.add('hide')
        question14b.classList.remove('hide')
        backButton.classList.add('hide')
    } else if (n==2 && l==14) {
        question14b.classList.add('hide')
        question14c.classList.remove('hide')
    } else if (n==3 && l==14) {
        container.classList.remove('correct')
        container.classList.add('wrong')
        question14c.classList.add('hide')
        question14d.classList.remove('hide')
    } else if (n==4 && l==14) {
        question14d.classList.add('hide')
        question14e.classList.remove('hide')
    } else if (n==5 && l==14) {
        question14e.classList.add('hide')
        question14f.classList.remove('hide')
        sun.classList.add('hide')
        cloud.classList.add('hide')
    } else if (n==6 && l==14) {
        question14f.classList.add('hide')
        question14g.classList.remove('hide')
        container.classList.add('correct')
        container.classList.remove('wrong')
        answerButtons.classList.remove('hide')
        nextButton.classList.add('hide')
        showSet6()
        hideSet1()
        hideSet2()
        hideSet3()
        hideSet4()
        hideSet5()
        hideSet7()
        hideSet8()
        hideSet9()
    } else if (n==1 && l==15) {
        question15.classList.add('hide')
        question15b.classList.remove('hide')
        backButton.classList.add('hide')
    } else if (n==2 && l==15) {
        question15b.classList.add('hide')
        question15c.classList.remove('hide')
    } else if (n==3 && l==15) {
        container.classList.add('correct')
        container.classList.remove('wrong')
        question15c.classList.add('hide')
        question15d.classList.remove('hide')
    } else if (n==4 && l==15) {
        question15d.classList.add('hide')
        question15e.classList.remove('hide')
        answerButtons.classList.remove('hide')
        nextButton.classList.add('hide')
        showSet5()
        hideSet1()
        hideSet2()
        hideSet3()
        hideSet4()
        hideSet6()
        hideSet7()
        hideSet8()
        hideSet9()
        l2a1.addEventListener('click', clickSun)
        l2a2.addEventListener('click', clickMoon)
        l2a3.addEventListener('click', clickCloud)
    } else if (n==5 && l==15 && option==1) {
        container.classList.remove('correct')
        container.classList.add('wrong')
        question15fopt1.classList.add('hide')
        question15gopt1.classList.remove('hide')
    } else if (n==6 && l==15 && option==1) {
        question15gopt1.classList.add('hide')
        question15hopt1.classList.remove('hide')
    } else if (n==7 && l==15 && option==1) {
        question15hopt1.classList.add('hide')
        container.classList.add('wrong')
        container.classList.remove('correct')
        falseResult15opt1.classList.remove('hide')
        nextButton.classList.add('hide')
        backButton.classList.remove('hide')
    } else if (n==5 && l==15 && option==2) {
        container.classList.remove('correct')
        container.classList.add('wrong')
        question15fopt2.classList.add('hide')
        question15gopt2.classList.remove('hide')
    } else if (n==6 && l==15 && option==2) {
        question15gopt2.classList.add('hide')
        question15hopt2.classList.remove('hide')
    } else if (n==7 && l==15 && option==2) {
        question15hopt2.classList.add('hide')
        question15iopt2.classList.remove('hide')
    } else if (n==8 && l==15 && option==2) {
        question15iopt2.classList.add('hide')
        question15jopt2.classList.remove('hide')
    } else if (n==9 && l==15 && option==2) {
        question15jopt2.classList.add('hide')
        container.classList.add('wrong')
        container.classList.remove('correct')
        falseResult15opt2.classList.remove('hide')
        nextButton.classList.add('hide')
        backButton.classList.remove('hide')
    } else if (n==5 && l==15 && option==3) {
        container.classList.remove('correct')
        container.classList.add('wrong')
        question15f.classList.add('hide')
        question15g.classList.remove('hide')
    } else if (n==6 && l==15 && option==3) {
        question15g.classList.add('hide')
        question15h.classList.remove('hide')
    } else if (n==7 && l==15 && option==3) {
        question15h.classList.add('hide')
        question15i.classList.remove('hide')
    } else if (n==8 && l==15 && option==3) {
        question15i.classList.add('hide')
        question15j.classList.remove('hide')
    } else if (n==9 && l==15 && option==3) {
        question15j.classList.add('hide')
        trueResult15.classList.remove('hide')
        nextButton.classList.add('hide')
        backButton.classList.remove('hide')
        container.classList.add('correct')
        container.classList.remove('wrong')
    } else if (n==1 && l==16) {
        question16.classList.add('hide')
        question16b.classList.remove('hide')
        backButton.classList.add('hide')
    } else if (n==2 && l==16) {
        question16b.classList.add('hide')
        question16c.classList.remove('hide')
    } else if (n==3 && l==16) {
        container.classList.remove('correct')
        container.classList.add('wrong')
        question16c.classList.add('hide')
        question16d.classList.remove('hide')
    } else if (n==4 && l==16) {
        container.classList.add('correct')
        container.classList.remove('wrong')
        question16d.classList.add('hide')
        question16e.classList.remove('hide')
        answerButtons.classList.remove('hide')
        showSet7()
        hideSet1()
        hideSet2()
        hideSet3()
        hideSet4()
        hideSet5()
        hideSet6()
        hideSet8()
        hideSet9()
        nextButton.classList.add('hide')
        moon.classList.add('hide')
        cloud.classList.add('hide')
    } else if (n==5 && l==16 && option==1) {
        container.classList.remove('correct')
        container.classList.add('wrong')
        question16f.classList.add('hide')
        question16g.classList.remove('hide')
    } else if (n==6 && l==16 && option==1) {
        question16g.classList.add('hide')
        question16h.classList.remove('hide')
    } else if (n==7 && l==16 && option==1) {
        question16h.classList.add('hide')
        container.classList.add('correct')
        container.classList.remove('wrong')
        trueResult16.classList.remove('hide')
        nextButton.classList.add('hide')
        backButton.classList.remove('hide')
    } else if (n==5 && l==16 && option==2) {
        question16fopt2.classList.add('hide')
        container.classList.remove('correct')
        container.classList.add('wrong')
        falseResult16.classList.remove('hide')
        nextButton.classList.add('hide')
        backButton.classList.remove('hide')
    } 
    else if (n==1 && l==17) {
        question17.classList.add('hide')
        question17b.classList.remove('hide')
        backButton.classList.add('hide')
    } else if (n==2 && l==17) {
        question17b.classList.add('hide')
        question17c.classList.remove('hide')
        answerButtons.classList.remove('hide')
        showSet5()
        hideSet1()
        hideSet2()
        hideSet3()
        hideSet4()
        hideSet6()
        hideSet7()
        hideSet8()
        hideSet9()
        l2a1.addEventListener('click', clickSun)
        l2a2.addEventListener('click', clickMoon)
        l2a3.addEventListener('click', clickCloud)
        nextButton.classList.add('hide')
        container.classList.add('correct')
        container.classList.remove('wrong')
    } else if (n==3 && l==17 && option==1) {
        question17dopt1.classList.add('hide')
        question17eopt1.classList.remove('hide')
    } else if (n==4 && l==17 && option==1) {
        question17eopt1.classList.add('hide')
        falseResult17opt1.classList.remove('hide')
        nextButton.classList.add('hide')
        backButton.classList.remove('hide')
    } else if (n==3 && l==17 && option==2) {
        question17dopt2.classList.add('hide')
        question17eopt2.classList.remove('hide')
    } else if (n==4 && l==17 && option==2) {
        question17eopt2.classList.add('hide')
        falseResult17opt2.classList.remove('hide')
        nextButton.classList.add('hide')
        backButton.classList.remove('hide')
    } else if (n==3 && l==17 && option==3) {
        question17d.classList.add('hide')
        question17e.classList.remove('hide')
        container.classList.add('correct')
        container.classList.remove('wrong')
        answerButtons.classList.remove('hide')
        showSet8()
        hideSet1()
        hideSet2()
        hideSet3()
        hideSet4()
        hideSet5()
        hideSet6()
        hideSet7()
        hideSet9()
        nextButton.classList.add('hide')
    }
    else if (n==1 && l==18) {
        question18.classList.add('hide')
        question18b.classList.remove('hide')
        backButton.classList.add('hide')
    } else if (n==2 && l==18) {
        question18b.classList.add('hide')
        question18c.classList.remove('hide')
    } else if (n==3 && l==18) {
        container.classList.remove('correct')
        container.classList.add('wrong')
        question18c.classList.add('hide')
        question18d.classList.remove('hide')
    } else if (n==4 && l==18) {
        container.classList.add('correct')
        container.classList.remove('wrong')
        question18d.classList.add('hide')
        question18e.classList.remove('hide')
        answerButtons.classList.remove('hide')
        showSet9()
        hideSet1()
        hideSet2()
        hideSet3()
        hideSet4()
        hideSet5()
        hideSet6()
        hideSet7()
        hideSet8()
        nextButton.classList.add('hide')
        moon.classList.add('hide')
        cloud.classList.add('hide')
    } else if (n==5 && l==18 && option==2) {
        question18f.classList.add('hide')
        question18g.classList.remove('hide')
        container.classList.add('wrong')
        container.classList.remove('correct')
    } else if (n==6 && l==18 && option==2) {
        question18g.classList.add('hide')
        question18h.classList.remove('hide')
    } else if (n==7 && l==18 && option==2) {
        question18h.classList.add('hide')
        container.classList.remove('wrong')
        container.classList.add('correct')
        nextButton.classList.add('hide')
        backButton.classList.remove('hide')
        trueResult18.classList.remove('hide')
    } else if (n==5 && l==18 && option==1) {
        question18fopt1.classList.add('hide')
        question18gopt1.classList.remove('hide')
        container.classList.add('wrong')
        container.classList.remove('correct')
    } else if (n==6 && l==18 && option==1) {
        question18gopt1.classList.add('hide')
        question18hopt1.classList.remove('hide')
    } else if (n==7 && l==18 && option==1) {
        question18hopt1.classList.add('hide')
        container.classList.remove('correct')
        container.classList.add('wrong')
        nextButton.classList.add('hide')
        backButton.classList.remove('hide')
        falseResult18.classList.remove('hide')
    }
}

function goBack() {
    if (depth == 1) {
        startButton.classList.remove('hide')
        backButton.classList.add('hide')
        modeInstruction.classList.add('hide')
        modes.classList.add('hide')
        easy.classList.add('hide')
        medium.classList.add('hide')
        hard.classList.add('hide')
        depth -= 1
    } else if (depth == 2 && m == 1) {
        modes.classList.remove('hide')
        modeInstruction.classList.remove('hide')
        levelInstruction.classList.add('hide')
        easyLevels.classList.add('hide')
        level1.classList.add('hide')
        level2.classList.add('hide')
        level3.classList.add('hide')
        level4.classList.add('hide')
        level5.classList.add('hide')
        level6.classList.add('hide')
        depth -= 1
        m -= 1
    } else if (depth == 2 && m == 2) {
        modes.classList.remove('hide')
        modeInstruction.classList.remove('hide')
        levelInstruction.classList.add('hide')
        mediumLevels.classList.add('hide')
        level7.classList.add('hide')
        level8.classList.add('hide')
        level9.classList.add('hide')
        level10.classList.add('hide')
        level11.classList.add('hide')
        level12.classList.add('hide')
        depth -= 1
        m -= 2
    } else if (depth == 2 && m == 3) {
        modes.classList.remove('hide')
        modeInstruction.classList.remove('hide')
        levelInstruction.classList.add('hide')
        hardLevels.classList.add('hide')
        level13.classList.add('hide')
        level14.classList.add('hide')
        level15.classList.add('hide')
        level16.classList.add('hide')
        level17.classList.add('hide')
        level18.classList.add('hide')
        depth -= 1
        m -= 3
    } else if (depth == 3 && m == 1 && l == 1) {
        easyLevels.classList.remove('hide')
        levelInstruction.classList.remove('hide')
        depth -= 1
        l -= 1
        nextButton.classList.add('hide')
        container.classList.add('hide')
        answerButtons.classList.add('hide')
        container.classList.remove('correct')
        container.classList.remove('wrong')
        correct.classList.add('hide')
        incorrect.classList.add('hide')
    } else if (depth == 3 && m == 1 && l == 2) {
        easyLevels.classList.remove('hide')
        levelInstruction.classList.remove('hide')
        depth -= 1
        l -= 2
        nextButton.classList.add('hide')
        container.classList.add('hide')
        answerButtons.classList.add('hide')
        container.classList.remove('correct')
        container.classList.remove('wrong')
        correct.classList.add('hide')
        incorrect.classList.add('hide')
    } else if (depth == 3 && m == 1 && l == 3) {
        easyLevels.classList.remove('hide')
        levelInstruction.classList.remove('hide')
        depth -= 1
        l -= 3
        n = 0
        nextButton.classList.add('hide')
        container.classList.add('hide')
        answerButtons.classList.add('hide')
        container.classList.remove('correct')
        container.classList.remove('wrong')
        correct.classList.add('hide')
        incorrect.classList.add('hide')
    } else if (depth == 3 && m == 1 && l == 4) {
        easyLevels.classList.remove('hide')
        levelInstruction.classList.remove('hide')
        depth -= 1
        l -= 4
        n = 0
        nextButton.classList.add('hide')
        container.classList.add('hide')
        answerButtons.classList.add('hide')
        container.classList.remove('correct')
        container.classList.remove('wrong')
        correct.classList.add('hide')
        incorrect.classList.add('hide')
    } else if (depth == 3 && m == 1 && l == 5) {
        easyLevels.classList.remove('hide')
        levelInstruction.classList.remove('hide')
        depth -= 1
        l -= 5
        nextButton.classList.add('hide')
        container.classList.add('hide')
        answerButtons.classList.add('hide')
        container.classList.remove('correct')
        container.classList.remove('wrong')
        correct.classList.add('hide')
        incorrect.classList.add('hide')
    } else if (depth == 3 && m == 1 && l == 6) {
        easyLevels.classList.remove('hide')
        levelInstruction.classList.remove('hide')
        depth -= 1
        l -= 6
        nextButton.classList.add('hide')
        container.classList.add('hide')
        answerButtons.classList.add('hide')
        container.classList.remove('correct')
        container.classList.remove('wrong')
        correct.classList.add('hide')
        incorrect.classList.add('hide')
    } else if (depth == 3 && m == 2 && l == 7) {
        mediumLevels.classList.remove('hide')
        levelInstruction.classList.remove('hide')

        nextButton.classList.add('hide')
        container.classList.add('hide')
        question.classList.add('hide')
        trueResult.classList.add('hide')
        falseResult.classList.add('hide')
        container.classList.remove('correct')
        container.classList.remove('wrong')
        redTriangle.classList.remove('hide')
        greenSquare.classList.remove('hide')

        depth -= 1
        l -= 7
        n = 0
    } else if (depth == 3 && m == 2 && l == 8) {
        mediumLevels.classList.remove('hide')
        levelInstruction.classList.remove('hide')

        nextButton.classList.add('hide')
        container.classList.add('hide')
        question8.classList.add('hide')
        trueResult8.classList.add('hide')
        falseResult8.classList.add('hide')
        container.classList.remove('correct')
        container.classList.remove('wrong')
        blueSquare.classList.remove('hide')
        greenSquare.classList.remove('hide')

        depth -= 1
        l -= 8
        n = 0
    } else if (depth == 3 && m == 2 && l == 9) {
        mediumLevels.classList.remove('hide')
        levelInstruction.classList.remove('hide')
        depth -= 1
        l -= 9
        n = 0
        nextButton.classList.add('hide')
        container.classList.add('hide')
        answerButtons.classList.add('hide')
        container.classList.remove('correct')
        container.classList.remove('wrong')
        correct.classList.add('hide')
        incorrect.classList.add('hide')
    } else if (depth == 3 && m == 2 && l == 10) {
        mediumLevels.classList.remove('hide')
        levelInstruction.classList.remove('hide')

        nextButton.classList.add('hide')
        container.classList.add('hide')
        question10.classList.add('hide')
        trueResult10.classList.add('hide')
        falseResult10.classList.add('hide')
        container.classList.remove('correct')
        container.classList.remove('wrong')
        blueSquare.classList.remove('hide')
        greenSquare.classList.remove('hide')

        depth -= 1
        l -= 10
        n = 0
    } else if (depth == 3 && m == 2 && l == 11) {
        mediumLevels.classList.remove('hide')
        levelInstruction.classList.remove('hide')
        depth -= 1
        l -= 11
        n = 0
        nextButton.classList.add('hide')
        container.classList.add('hide')
        answerButtons.classList.add('hide')
        container.classList.remove('correct')
        container.classList.remove('wrong')
        correct.classList.add('hide')
        incorrect.classList.add('hide')
    } else if (depth == 3 && m == 2 && l == 12) {
        mediumLevels.classList.remove('hide')
        levelInstruction.classList.remove('hide')
        depth -= 1
        l -= 12
        n = 0
        nextButton.classList.add('hide')
        container.classList.add('hide')
        question12.classList.add('hide')
        trueResult12.classList.add('hide')
        falseResult12.classList.add('hide')
        container.classList.remove('correct')
        container.classList.remove('wrong')
        blueSquare.classList.remove('hide')
        greenSquare.classList.remove('hide')
    } else if (depth == 3 && m == 3 && l == 13) {
        hardLevels.classList.remove('hide')
        levelInstruction.classList.remove('hide')

        nextButton.classList.add('hide')
        container.classList.add('hide')
        question13.classList.add('hide')
        trueResult13.classList.add('hide')
        falseResult13.classList.add('hide')
        container.classList.remove('correct')
        container.classList.remove('wrong')
        moon.classList.remove('hide')
        cloud.classList.remove('hide')
        
        depth -= 1
        l -= 13
        n = 0
    } else if (depth == 3 && m == 3 && l == 14) {
        hardLevels.classList.remove('hide')
        levelInstruction.classList.remove('hide')

        nextButton.classList.add('hide')
        container.classList.add('hide')
        question14.classList.add('hide')
        trueResult14.classList.add('hide')
        falseResult14.classList.add('hide')
        container.classList.remove('correct')
        container.classList.remove('wrong')
        sun.classList.remove('hide')
        cloud.classList.remove('hide')

        depth -= 1
        l -= 14
        n = 0
    } else if (depth == 3 && m == 3 && l == 15) {
        hardLevels.classList.remove('hide')
        levelInstruction.classList.remove('hide')

        nextButton.classList.add('hide')
        container.classList.add('hide')
        question15.classList.add('hide')
        trueResult15.classList.add('hide')
        falseResult15opt1.classList.add('hide')
        falseResult15opt2.classList.add('hide')
        container.classList.remove('correct')
        container.classList.remove('wrong')

        depth -= 1
        l -= 15
        n = 0
    } else if (depth == 3 && m == 3 && l == 16) {
        hardLevels.classList.remove('hide')
        levelInstruction.classList.remove('hide')

        nextButton.classList.add('hide')
        container.classList.add('hide')
        question16.classList.add('hide')
        trueResult16.classList.add('hide')
        falseResult16.classList.add('hide')
        container.classList.remove('correct')
        container.classList.remove('wrong')
        moon.classList.remove('hide')
        cloud.classList.remove('hide')

        depth -= 1
        l -= 16
        n = 0
    } else if (depth == 3 && m == 3 && l == 17) {
        hardLevels.classList.remove('hide')
        levelInstruction.classList.remove('hide')

        nextButton.classList.add('hide')
        container.classList.add('hide')
        question17.classList.add('hide')
        trueResult17.classList.add('hide')
        falseResult17.classList.add('hide')
        falseResult17opt1.classList.add('hide')
        falseResult17opt2.classList.add('hide')
        container.classList.remove('correct')
        container.classList.remove('wrong')

        depth -= 1
        l -= 17
        n = 0
    } else if (depth == 3 && m == 3 && l == 18) {
        hardLevels.classList.remove('hide')
        levelInstruction.classList.remove('hide')

        nextButton.classList.add('hide')
        container.classList.add('hide')
        question18.classList.add('hide')
        trueResult18.classList.add('hide')
        falseResult18.classList.add('hide')
        container.classList.remove('correct')
        container.classList.remove('wrong')

        depth -= 1
        l -= 18
        n = 0
    }
}

function getHelp() {
    if (l==1) {
        alert('Pick an object that is both a square AND blue.')
    } else if (l==2) {
        alert('Pick an object that is either a square OR blue.')
    } else if (l==3 && n==0) {
        alert('Pick an object that is NOT a square.')
    } else if (l==3 && n==1) {
        alert('Pick an object that is NOT NOT a square.')
    } else if (l==4 && n==0) {
        alert('Work out what\'s in the brackets first!')
    } else if (l==4 && n==1) {
        alert('Pick an object that is NOT a triangle AND NOT blue.')
    } else if (l==4 && n==2) {
        alert('Work out what\'s in the brackets first!')
    } else if (l==4 && n==3) {
        alert('Pick an object that is NOT a square OR NOT green.')
    } else if (l==5) {
        alert('True or False?: ALL of these objects are squares.')
    } else if (l==6) {
        alert('True or False?: SOME of these objects are triangles.')
    } else if (l==9 && n==0) {
        alert('True or False?: NOT ALL of these objects are squares.')
    } else if (l==9 && n==1) {
        alert('True or False?: SOME of these objects are NOT squares.')
    } else if (l==11 && n==0) {
        alert('True or False?: NONE of these objects are triangles.')
    } else if (l==11 && n==1) {
        alert('True or False?: ALL of these objects are NOT triangles.')
    }
}

function hideQuestions() {
    question1.classList.add('hide')
    question2.classList.add('hide')
    question3.classList.add('hide')
    question3b.classList.add('hide')
    question4.classList.add('hide')
    question4b.classList.add('hide')
    question4c.classList.add('hide')
    question4d.classList.add('hide')
    question5.classList.add('hide')
    question6.classList.add('hide')
    question.classList.add('hide')
    question8.classList.add('hide')
    question8a.classList.add('hide')
    question8b.classList.add('hide')
    question8c.classList.add('hide')
    question8copt1.classList.add('hide')
    question8copt3.classList.add('hide')
    question8d.classList.add('hide')
    question8dopt1.classList.add('hide')
    question8dopt3.classList.add('hide')
    question8e.classList.add('hide')
    question8eopt1.classList.add('hide')
    question8eopt3.classList.add('hide')
    question9.classList.add('hide')
    question9b.classList.add('hide')
    question11.classList.add('hide')
    question11b.classList.add('hide')
    question10.classList.add('hide')
    question10b.classList.add('hide')
    question10c.classList.add('hide')
    question10d.classList.add('hide')
    question10e.classList.add('hide')
    question10f.classList.add('hide')
    question10fopt1.classList.add('hide')
    question10fopt3.classList.add('hide')
    question10g.classList.add('hide')
    question10gopt1.classList.add('hide')
    question10gopt3.classList.add('hide')
    question10h.classList.add('hide')
    question10hopt1.classList.add('hide')
    question10hopt3.classList.add('hide')
    question12.classList.add('hide')
    question12b.classList.add('hide')
    question12c.classList.add('hide')
    question12d.classList.add('hide')
    question12e.classList.add('hide')
    question12f.classList.add('hide')
    question12g.classList.add('hide')
    question12.classList.add('hide')
    question12b.classList.add('hide')
    question13.classList.add('hide')
    question13b.classList.add('hide')
    question13c.classList.add('hide')
    question13d.classList.add('hide')
    question13e.classList.add('hide')
    question13f.classList.add('hide')
    question13fopt2.classList.add('hide')
    question13fopt3.classList.add('hide')
    question13g.classList.add('hide')
    question13gopt2.classList.add('hide')
    question13gopt3.classList.add('hide')
    question13h.classList.add('hide')
    question13hopt2.classList.add('hide')
    question13hopt3.classList.add('hide')
    question14.classList.add('hide')
    question14b.classList.add('hide')
    question14c.classList.add('hide')
    question14d.classList.add('hide')
    question14e.classList.add('hide')
    question14f.classList.add('hide')
    question14g.classList.add('hide')
    question15.classList.add('hide')
    question15b.classList.add('hide')
    question15c.classList.add('hide')
    question15d.classList.add('hide')
    question15e.classList.add('hide')
    question15f.classList.add('hide')
    question15fopt1.classList.add('hide')
    question15fopt2.classList.add('hide')
    question15g.classList.add('hide')
    question15gopt1.classList.add('hide')
    question15gopt2.classList.add('hide')
    question15h.classList.add('hide')
    question15hopt1.classList.add('hide')
    question15hopt2.classList.add('hide')
    question15i.classList.add('hide')
    question15iopt2.classList.add('hide')
    question15jopt2.classList.add('hide')
    question16.classList.add('hide')
    question16b.classList.add('hide')
    question16c.classList.add('hide')
    question16d.classList.add('hide')
    question16e.classList.add('hide')
    question16f.classList.add('hide')
    question16fopt2.classList.add('hide')
    question16g.classList.add('hide')
    question16h.classList.add('hide')
    question17.classList.add('hide')
    question17b.classList.add('hide')
    question17c.classList.add('hide')
    question17d.classList.add('hide')
    question17dopt1.classList.add('hide')
    question17dopt2.classList.add('hide')
    question17e.classList.add('hide')
    question17eopt1.classList.add('hide')
    question17eopt2.classList.add('hide')
    question18.classList.add('hide')
    question18b.classList.add('hide')
    question18c.classList.add('hide')
    question18d.classList.add('hide')
    question18e.classList.add('hide')
    question18f.classList.add('hide')
    question18fopt1.classList.add('hide')
    question18g.classList.add('hide')
    question18gopt1.classList.add('hide')
    question18h.classList.add('hide')
    question18hopt1.classList.add('hide')
}
function hideSet1() {
    l1a1.classList.add('hide')
    l1a2.classList.add('hide')
    l1a3.classList.add('hide')
}
function hideSet2() {
    t.classList.add('hide')
    f.classList.add('hide')
}
function hideSet3() {
    answer1.classList.add('hide')
    answer2.classList.add('hide')
}
function hideSet4() {
    answer3.classList.add('hide')
    answer4.classList.add('hide')
}
function hideSet5() {
    l2a1.classList.add('hide')
    l2a2.classList.add('hide')
    l2a3.classList.add('hide')
}
function hideSet6() {
    answer5.classList.add('hide')
    answer6.classList.add('hide')
}
function hideSet7() {
    answer7.classList.add('hide')
    answer8.classList.add('hide')
}
function hideSet8() {
    answer9.classList.add('hide')
    answer10.classList.add('hide')
}
function hideSet9() {
    answer11.classList.add('hide')
    answer12.classList.add('hide')
}
function showSet1() {
    l1a1.classList.remove('hide')
    l1a2.classList.remove('hide')
    l1a3.classList.remove('hide')
}
function showSet2() {
    t.classList.remove('hide')
    f.classList.remove('hide')
}
function showSet3() {
    answer1.classList.remove('hide')
    answer2.classList.remove('hide')
}
function showSet4() {
    answer3.classList.remove('hide')
    answer4.classList.remove('hide')
}
function showSet5() {
    l2a1.classList.remove('hide')
    l2a2.classList.remove('hide')
    l2a3.classList.remove('hide')
}
function showSet6() {
    answer5.classList.remove('hide')
    answer6.classList.remove('hide')
}
function showSet7() {
    answer7.classList.remove('hide')
    answer8.classList.remove('hide')
}
function showSet8() {
    answer9.classList.remove('hide')
    answer10.classList.remove('hide')
}
function showSet9() {
    answer11.classList.remove('hide')
    answer12.classList.remove('hide')
}
function showWorldComponents() {
    blueSquare.classList.remove('hide')
    redTriangle.classList.remove('hide')
    greenSquare.classList.remove('hide')
}
function showWorld2Components() {
    sun.classList.remove('hide')
    moon.classList.remove('hide')
    cloud.classList.remove('hide')
}