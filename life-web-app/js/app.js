'use strict'

// quotes source: https://medium.com/stories-by-aurora-e/20-stoic-quotes-that-will-motivate-and-inspire-you-bfb4fc7fc660 
// quote source: 
const quotes = 
['Waste no more time arguing what a good man should be. Be One. — Marcus Aurelius', 
'You could leave life right now. Let that determine what you do and say and think.—Marcus Aurelius', 
'He who fears death will never do anything worth of a man who is alive.—Seneca', 
'Life is very short and anxious for those who forget the past, neglect the present, and fear the future.—Seneca',
'How long are you going to wait before you demand the best for yourself?—Epictetus',
'Don’t explain your philosophy. Embody it.—Epictetus',
'You have power over your mind — not outside events. Realize this, and you will find strength.―Marcus Aurelius',
'Hang on to your youthful enthusiasms — you’ll be able to use them better when you’re older.―Seneca',
'Wealth consists not in having great possessions, but in having few wants.―Epictetus',
'If it is not right, do not do it; if it is not true, do not say it. — Marcus Aurelius',
'Begin at once to live, and count each separate day as a separate life.—Seneca',
'Stop drifting…Sprint to the finish. Write off your hopes, and if your well-being matters to you, be your own savior while you can.—Marcus Aurelius',
'Whatever can happen at any time can happen today.—Seneca',
'They lose the day in expectation of the night, and the night in fear of the dawn.—Seneca',
'Let us prepare our minds as if we’d come to the very end of life. Let us postpone nothing. Let us balance life’s books each day… The one who puts the finishing touches on their life each day is never short of time.—Marcus Aurelius',
'True happiness is to enjoy the present, without anxious dependence upon the future, not to amuse ourselves with either hopes or fears but to rest satisfied with what we have, which is sufficient, for he that is so wants nothing. The greatest blessings of mankind are within us and within our reach. A wise man is content with his lot, whatever it may be, without wishing for what he has not.―Seneca',
'The key is to keep company only with people who uplift you, whose presence calls forth your best.―Epictetus',
'The happiness of your life depends upon the quality of your thoughts.―Marcus Aurelius',
'If you want to improve, be content to be thought foolish and stupid.―Epictetus',
'Luck is what happens when preparation meets opportunity.―Seneca',
'Just keep in mind, the more we value things outside our control, the less control we have.-Epictetus',
'The whole future lies in uncertainty, live immediately.-Seneca',
'A gem cannot be polished without friction, nor a man perfected without trials.-Seneca',
'He has the most who is content with the least.-Diogenes',
'Self-control is strength. Right thought is mastery. Calmness is power.-James Allen',
'Man conquers the world by conquering himself.-Zeno of Citium',
'When someone is properly grounded in life, they shouldn’t have to look outside themselves for approval.-Epictetus',
'The ultimate power in life is to be completely self-reliant, completely yourself.-Robert Greene',
'Between stimulus and response, there is a space. In that space is our power to choose our response.-Viktor Frankl',
'The first rule is to keep an untroubled spirit. The second is to look things in the face and know them for what they are.-Marcus Aurelius',
'Sometimes life hits you in the head with a brick. Don’t lose faith.-Steve Jobs',
'The art of being wise is the art of knowing what to overlook.-William James',
'What we fear doing most is usually what we most need to do.-Tim Ferriss'
];

// randomly generated quotes from the quotes array
const randQuote = Math.trunc(Math.random() * quotes.length);


document.querySelector('.quotes').innerHTML = `"${quotes[randQuote]}"`;

// function expression displays life in months 
const displayLifeInWeeks = function(){

    // declare age variables
    const currentAge = Number(document.querySelector('#current-age').value);
    const desiredExpiryAge = Number(document.querySelector('#desired-expiry-age').value);

    // check for valid inputs
    if(currentAge === '' || currentAge === 0 && desiredExpiryAge === '' || desiredExpiryAge === 0){
        document.querySelector('.modal-body').textContent = `looks like you're imortal...`;
    } else{ 
    // console.log(`Current age: ${currentAge}, Desired expiry age: ${desiredExpiryAge}`);
    document.querySelector('.modal-body').textContent = `You have ${(desiredExpiryAge  * 12) - (currentAge * 12)} months to go`;
}

}

// reset input fields
const resetInputFields = function(){
    document.querySelector('#current-age').value = '';
    document.querySelector('#desired-expiry-age').value = '';

    console.log('cleared...');
}

// btn event listener 
document.querySelector('.life-check').addEventListener('click', displayLifeInWeeks);

// modal close event listener
document.querySelector('.reset-input-fields-x').addEventListener('click', resetInputFields);
document.querySelector('.reset-input-fields-close').addEventListener('click', resetInputFields);