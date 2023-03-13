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

function updateTimeAgo() {
  const elements = document.querySelectorAll(".news-date");
  elements.forEach((element) => {
    const timestamp = new Date(element.getAttribute("datetime"));
    const timeAgo = timeSince(timestamp);
    element.textContent = timeAgo;
  });
}

setInterval(updateTimeAgo, 1000);
