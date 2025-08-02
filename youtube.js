/**
 * This funciton 
 * ------------------
 *   - hides YouTube Shorts on all Youtube pages from showing in reccomended
 *   - hides Youtube Playables because wtf is that 
*/
function hideYoutubeShorts() {

  // find shorts divs (reels self)
  const reels = document.querySelectorAll('ytd-reel-shelf-renderer');
  reels.forEach(reel => {

    // target the child h2's title span
    const titleSpan = reel.querySelector('span#title'); 

    // hide shorts
    if (titleSpan && titleSpan.textContent.trim().toLowerCase() === 'shorts') {
      reel.style.display = 'none';
    }
  });


  // find shorts divs (rich shelf)
  const richShelves = document.querySelectorAll('ytd-rich-shelf-renderer');
  richShelves.forEach(shelf => {

    // target the child h2's title span
    const titleSpan = shelf.querySelector('span#title'); 

    // hide shorts and playables
    if (
        titleSpan && titleSpan.textContent.trim().toLowerCase() === 'shorts' ||
        titleSpan && titleSpan.textContent.trim().toLowerCase() === 'youtube playables'
    ) {
      shelf.style.display = 'none';
    }
  });
}

// main loop
hideYoutubeShorts();

// Observe added elements (YouTube is a SPA)
const observerShorts = new MutationObserver(hideYoutubeShorts);
observerShorts.observe(document.body, { childList: true, subtree: true });