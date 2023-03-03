function timeSince(date) {
  const seconds = Math.floor(((new Date() - date)+7*3600*1000) / 1000);
  let interval = Math.floor(seconds / 31536000);

  if (interval >= 1) {
    return interval + " year(s) ago";
  }
  interval = Math.floor(seconds / 2592000);
  if (interval >= 1) {
    return interval + " month(s) ago";
  }
  interval = Math.floor(seconds / 86400);
  if (interval >= 1) {
    return interval + " day(s) ago";
  }
  interval = Math.floor(seconds / 3600);
  if (interval >= 1) {
    return interval + " hour(s) ago";
  }
  interval = Math.floor(seconds / 60);
  if (interval >= 1) {
    return interval + " minute(s) ago";
  }
  return Math.floor(seconds) + " second(s) ago";
}

const timestampEl = document.querySelector(".ownerpost-time a");
const timeAgoEl = document.querySelector(".time-ago");

const timestamp = new Date("2023-03-03T10:23:00.000Z");
const timeAgo = timeSince(timestamp);

timestampEl.textContent = "Hungdeptrai"; 
timeAgoEl.textContent = timeAgo;
