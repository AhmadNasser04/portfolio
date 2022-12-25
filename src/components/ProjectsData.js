import reactLogo from '../resources/react_logo.webp'
import firebase from '../resources/firebase_logo.webp'
import next from '../resources/nextjs_logo.webp'
import tailwind from '../resources/tailwind_logo.webp'
import redux from '../resources/reduxtoolkit.webp'
import tictactoe from '../resources/tictactoe.webp'
import ecommer from '../resources/ecommer.webp'
import speedtests from '../resources/speedtests.webp'
import quizmaster from '../resources/quizmaster.webp'

export const projects = [
    {
        name: 'Speed Tests',
        pic: speedtests,
        time: '2 days',
        description: 'Want to test your speed? Well you can do it here! What speed you ask? Well, any, from internet speed to cps speed we have it all',
        technologies: [['React', reactLogo], ['Tailwindcss', tailwind], ['Firebase', firebase]],
        link: 'https://speedtests.ahmadnasser.net/'
    },
    {
        name: 'Quiz Master',
        pic: quizmaster,
        time: '1 day',
        description: 'A fun little website to do quizzes, new quizzes can be added easily!',
        technologies: [['React', reactLogo], ['Tailwindcss', tailwind], ['Firebase', firebase]],
        link: 'https://quizmaster.ahmadnasser.net/'
    },
    {
        name: 'TicTacToe',
        pic: tictactoe,
        time: '4 days',
        description: 'A fun tictactoe game with local multiplayer, the bot may also be unbeatable, you can test your luck with that one ;D',
        technologies: [['Nextjs', next], ['Tailwindcss', tailwind], ['Firebase', firebase]],
        link: ''
    },
    {
        name: 'ECOMMER',
        pic: ecommer,
        time: '1 week',
        description: 'An amazing ecommer app made with React, Redux Toolkit, Strapi, and mui, with stripe integration',
        technologies: [['React', reactLogo], ['Redux Toolkit', redux], ['Tailwindcss', tailwind], ['Firebase', firebase]],
        link: ''
    },
]