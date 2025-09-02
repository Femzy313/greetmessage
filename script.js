let input = document.getElementById('name');
let displayMessage = document.getElementById('display-message');
let message = document.getElementById('message')
let selection = document.getElementById('theme');
let generateCard = document.getElementById('generate');
const value = input.value;


let celebration =  [ 'Choose', 'Birthday', 'Wedding', 'Valentine Day', 'Friendship Day', 'Mother Day', 'Father Day'];


/*generateCard.addEventListener('click', () => {
  function refreshPage() {
    location.reload();
  }
   if (input.value && celebration[0] == selection.value) {
    displayMessage.textContent('');
   } else if (input.value && celebration[1]  == selection.value) {
    displayMessage.textContent = (`Happy Birthday, ${input.value} 🎉🎂 Wishing you a day filled with joy, laughter, and all your favorite things. May this year bring you success, love, and endless blessings!🥳🎈🍰`);
   } else if (input.value && celebration[2]  == selection.value){
    displayMessage.textContent = (`Congratulation on your wedding, Mr/Mrs ${input.value}! 💍💐 Wishing you a lifetime filled with love, laughter, and endless happiness together. May your journey ahead be as beautiful as your love story.❤👰✨`);
   } else if (input.value && celebration[3]  == selection.value){
    displayMessage.textContent = (`Happy Valentine's Day, ${input.value}! ❤🌹 Wishing you a day full of love, smiles, and sweet moments. You deserve all the warmth and happiness today and always!💌🙂💕`);
   } else if (input.value && celebration[4]  == selection.value){
    displayMessage.textContent = (`Happy Friendship Day, ${input.value}!🤝💛. I'm so grateful for your friendship. Thanks for always being there, making me smile, and sharing thr good vibes. Here's to more laughs and memories together!🎉🙂`);
   } else if (input.value && celebration[5]  == selection.value){
    displayMessage.textContent = (`Happy Mother's Day, Mrs ${input.value}! 💐❤ Thank you for your endless love, care, and strength. You're truly one of a kind, and i'm so grateful for you every single day.🌺👨‍👩‍👦💖`);
   } else if (input.value && celebration[6]  == selection.value){
   displayMessage.textContent = (`Happy Father's Day, Mr ${input.value}!👔💙 Thank you for your guidance, strength, and endless support. You're a true hero and an inspiration. Wishing you a day as amazing as you are!👨‍👩‍👦🎉`);
   } else {
      displayMessage.textContent = ('')
   }
})
*/

let clicked = false;

function handleClick() {
 if (!clicked) {
  if (input.value && celebration[0] == selection.value) {
    displayMessage.textContent('');
   } else if (input.value && celebration[1]  == selection.value) {
    displayMessage.textContent = (`Happy Birthday, ${input.value} 🎉🎂 Wishing you a day filled with joy, laughter, and all your favorite things. May this year bring you success, love, and endless blessings!🥳🎈🍰`);
   } else if (input.value && celebration[2]  == selection.value){
    displayMessage.textContent = (`Congratulation on your wedding, Mr/Mrs ${input.value}! 💍💐 Wishing you a lifetime filled with love, laughter, and endless happiness together. May your journey ahead be as beautiful as your love story.❤👰✨`);
   } else if (input.value && celebration[3]  == selection.value){
    displayMessage.textContent = (`Happy Valentine's Day, ${input.value}! ❤🌹 Wishing you a day full of love, smiles, and sweet moments. You deserve all the warmth and happiness today and always!💌🙂💕`);
   } else if (input.value && celebration[4]  == selection.value){
    displayMessage.textContent = (`Happy Friendship Day, ${input.value}!🤝💛. I'm so grateful for your friendship. Thanks for always being there, making me smile, and sharing thr good vibes. Here's to more laughs and memories together!🎉🙂`);
   } else if (input.value && celebration[5]  == selection.value){
    displayMessage.textContent = (`Happy Mother's Day, Mrs ${input.value}! 💐❤ Thank you for your endless love, care, and strength. You're truly one of a kind, and i'm so grateful for you every single day.🌺👨‍👩‍👦💖`);
   } else if (input.value && celebration[6]  == selection.value){
   displayMessage.textContent = (`Happy Father's Day, Mr ${input.value}!👔💙 Thank you for your guidance, strength, and endless support. You're a true hero and an inspiration. Wishing you a day as amazing as you are!👨‍👩‍👦🎉`);
   } else {
      displayMessage.textContent = ('')
   }
   

  clicked = true;
 } else {
  location.reload();
}
  
} 
   