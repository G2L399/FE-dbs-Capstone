import { useState } from "react";
import { Button } from "@shadcn/button";
import { cn } from "../lib/utils";
import { FaStar } from "react-icons/fa";

interface FeedbackData {
  id: string;
  rating: number;
  comment: string;
  createdAt: string;
}

function FeedbackPage() {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const [hoveredStar, setHoveredStar] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (rating === 0) {
      setError("Please select a rating");
      return;
    }

    if (comment.trim().length < 10) {
      setError("Please provide a comment with at least 10 characters");
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      const feedback: FeedbackData = {
        id: Date.now().toString(),
        rating,
        comment,
        createdAt: new Date().toISOString(),
      };

      // Save to localStorage
      const existingFeedback = JSON.parse(localStorage.getItem("feedback") || "[]");
      localStorage.setItem(
        "feedback",
        JSON.stringify([...existingFeedback, feedback])
      );

      // Track submission
      console.log("Feedback submitted:", feedback);

      setIsSubmitting(false);
      setShowSuccess(true);
      setRating(0);
      setComment("");

      setTimeout(() => setShowSuccess(false), 3000);
    }, 1000);
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-8">Share Your Experience</h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="bg-purple-800/30 p-6 rounded-xl">
          <label className="block text-lg font-medium mb-4">Rate your experience</label>
          <div className="flex gap-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                type="button"
                className="text-2xl focus:outline-none"
                onMouseEnter={() => setHoveredStar(star)}
                onMouseLeave={() => setHoveredStar(0)}
                onClick={() => setRating(star)}
              >
                <FaStar
                  className={cn(
                    star <= (hoveredStar || rating)
                      ? "text-yellow-400"
                      : "text-gray-400"
                  )}
                />
              </button>
            ))}
          </div>
        </div>

        <div className="bg-purple-800/30 p-6 rounded-xl">
          <label className="block text-lg font-medium mb-4">
            Share your thoughts
          </label>
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Tell us about your experience..."
            className="w-full h-32 bg-purple-700/30 border border-purple-600 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        {error && (
          <div className="bg-red-500/20 text-red-400 p-3 rounded-lg">{error}</div>
        )}

        <Button
          type="submit"
          disabled={isSubmitting}
          className={cn(
            "w-full bg-gradient-to-r from-pink-600 to-purple-600",
            "hover:from-pink-700 hover:to-purple-700",
            "py-3 rounded-lg transition-all"
          )}
        >
          {isSubmitting ? "Submitting..." : "Submit Feedback"}
        </Button>
      </form>

      {showSuccess && (
        <div className="fixed bottom-4 right-4 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg">
          Thank you for your feedback!
        </div>
      )}
    </div>
  );
}

export default FeedbackPage;