/**
 * Performance optimization utilities
 */

// Debounce function to limit the rate at which a function can fire
export const debounce = <T extends (...args: unknown[]) => void>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: NodeJS.Timeout;
  return function executedFunction(...args: Parameters<T>): void {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

// Throttle function to ensure a function runs at most once per specified interval
export const throttle = <T extends (...args: unknown[]) => void>(
  func: T,
  limit: number
): ((...args: Parameters<T>) => void) => {
  let inThrottle: boolean;
  return function executedFunction(...args: Parameters<T>): void {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => {
        inThrottle = false;
      }, limit);
    }
  };
};

// Lazy load background images with intersection observer
export const lazyLoadBackgroundImage = (selector: string) => {
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const element = entry.target as HTMLElement;
          const bgImage = element.getAttribute('data-bg');
          if (bgImage) {
            element.style.backgroundImage = `url('${bgImage}')`;
            element.removeAttribute('data-bg');
          }
          observer.unobserve(element);
        }
      });
    });

    document.querySelectorAll(selector).forEach(el => {
      observer.observe(el);
    });
  }
};

// Optimize animation frames
export const rafDebounce = <T extends (...args: unknown[]) => void>(
  func: T
): ((...args: Parameters<T>) => void) => {
  let scheduled = false;
  return function executedFunction(...args: Parameters<T>): void {
    if (!scheduled) {
      scheduled = true;
      requestAnimationFrame(() => {
        func(...args);
        scheduled = false;
      });
    }
  };
};