const friendsDB = require('./friends.json');
const photosDB = require('./photos.json');

function getRandomElement(array) {
  if (!array.length) {
    return null;
  }

  const randomIndex = parseInt(Math.random() * (array.length - 1));
  const randomElement = array[randomIndex];
  return randomElement;
}

function getNextPhoto() {
  const randomFriend = getRandomElement(friendsDB);

  const randomFriendPhoto = photosDB[randomFriend.id];

  const newFriend = {
    friend: randomFriend.firstName + ' ' + randomFriend.lastName,
    url: getRandomElement(randomFriendPhoto),
  };

  return newFriend;
}
getNextPhoto();
