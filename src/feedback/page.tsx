import { useState } from 'react';
import { Button } from '@shadcn/button';
import { cn } from '../lib/utils';
import { FaStar } from 'react-icons/fa';

interface FeedbackData {
  id: string;
  rating: number;
  comment: string;
  createdAt: string;
}

function FeedbackPage() {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const [hoveredStar, setHoveredStar] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (rating === 0) {
      setError('Please select a rating');
      return;
    }

    if (comment.trim().length < 10) {
      setError('Please provide a comment with at least 10 characters');
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      const feedback: FeedbackData = {
        id: Date.now().toString(),
        rating,
        comment,
        createdAt: new Date().toISOString()
      };

      // Save to localStorage
      const existingFeedback = JSON.parse(
        localStorage.getItem('feedback') || '[]'
      );
      localStorage.setItem(
        'feedback',
        JSON.stringify([...existingFeedback, feedback])
      );

      // Track submission
      console.log('Feedback submitted:', feedback);

      setIsSubmitting(false);
      setShowSuccess(true);
      setRating(0);
      setComment('');

      setTimeout(() => setShowSuccess(false), 3000);
    }, 1000);
  };

  return (
    <div className='mx-auto max-w-2xl p-6'>
      <h1 className='mb-8 text-2xl font-bold'>Share Your Experience</h1>

      <form onSubmit={handleSubmit} className='space-y-6'>
        <div className='rounded-xl bg-purple-800/30 p-6'>
          <label className='mb-4 block text-lg font-medium'>
            Rate your experience
          </label>
          <div className='flex gap-2'>
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                type='button'
                className='text-2xl focus:outline-none'
                onMouseEnter={() => setHoveredStar(star)}
                onMouseLeave={() => setHoveredStar(0)}
                onClick={() => setRating(star)}
              >
                <FaStar
                  className={cn(
                    star <= (hoveredStar || rating)
                      ? 'text-yellow-400'
                      : 'text-gray-400'
                  )}
                />
              </button>
            ))}
          </div>
        </div>

        <div className='rounded-xl bg-purple-800/30 p-6'>
          <label className='mb-4 block text-lg font-medium'>
            Share your thoughts
          </label>
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder='Tell us about your experience...'
            className='h-32 w-full rounded-lg border border-purple-600 bg-purple-700/30 p-3 focus:ring-2 focus:ring-purple-500 focus:outline-none'
          />
        </div>

        {error && (
          <div className='rounded-lg bg-red-500/20 p-3 text-red-400'>
            {error}
          </div>
        )}

        <Button
          type='submit'
          disabled={isSubmitting}
          className={cn(
            'w-full bg-gradient-to-r from-pink-600 to-purple-600',
            'hover:from-pink-700 hover:to-purple-700',
            'rounded-lg py-3 transition-all'
          )}
        >
          {isSubmitting ? 'Submitting...' : 'Submit Feedback'}
        </Button>
      </form>

      {showSuccess && (
        <div className='fixed right-4 bottom-4 rounded-lg bg-green-500 px-4 py-2 text-white shadow-lg'>
          Thank you for your feedback!
        </div>
      )}
    </div>
  );
}

export default FeedbackPage;
