import Player from '@vimeo/player';

import _ from 'lodash';

const player = new Player('vimeo-player', {
  id: 236203659,
  width: 640,
});

const CURRENT_TIME_KEY = 'videoplayer-current-time';

player.on('timeupdate', _.throttle(getCurrentTime, 1000));

function getCurrentTime(currentTime) {
  const time = JSON.stringify(currentTime.seconds);
  localStorage.setItem(CURRENT_TIME_KEY, time);
}

player.setCurrentTime(JSON.parse(localStorage.getItem(CURRENT_TIME_KEY)) || 0);
