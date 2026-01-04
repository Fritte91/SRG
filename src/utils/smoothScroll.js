/**
 * Smooth scroll to an element
 * @param {string} targetId - ID of the target element
 * @param {number} offset - Offset from the top (default: 80 for navbar height)
 */
export const smoothScrollTo = (targetId, offset = 80) => {
  const element = document.getElementById(targetId);
  if (element) {
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    });
  }
};

/**
 * Handle anchor link clicks with smooth scroll
 * @param {Event} e - Click event
 */
export const handleAnchorClick = (e) => {
  const href = e.currentTarget.getAttribute('href');
  if (href && href.startsWith('#')) {
    e.preventDefault();
    const targetId = href.substring(1);
    smoothScrollTo(targetId);
  }
};
