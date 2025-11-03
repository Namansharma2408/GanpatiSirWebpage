/**
 * Retry a promise-based function with exponential backoff
 * @param {Function} fn - The function to retry
 * @param {number} retries - Number of retry attempts
 * @param {number} delay - Initial delay in milliseconds
 * @returns {Promise} - The result of the function or throws error
 */
export async function retryWithBackoff(fn, retries = 3, delay = 1000) {
  try {
    return await fn();
  } catch (error) {
    if (retries === 0) {
      throw error;
    }
    
    // Check if it's a connection error that should be retried
    const shouldRetry = 
      error.code === 'ECONNRESET' ||
      error.code === 'ETIMEDOUT' ||
      error.code === 'ENOTFOUND' ||
      error.message?.includes('fetch failed') ||
      error.message?.includes('ECONNRESET');
    
    if (!shouldRetry) {
      throw error;
    }
    
    console.warn(`Retrying after ${delay}ms... (${retries} attempts left)`);
    await new Promise(resolve => setTimeout(resolve, delay));
    
    // Exponential backoff
    return retryWithBackoff(fn, retries - 1, delay * 2);
  }
}
