import { useState, useEffect } from 'react';
import { Github } from 'lucide-react';
import FadeIn from './FadeIn';
import ShinyText from './ShinyText';

export default function GitHubContributions2026({ username = 'Carlos-Opena' }) {
  const [loading, setLoading] = useState(true);
  const [imageUrl, setImageUrl] = useState('');
  const [error, setError] = useState(null);
  const [totalContributions, setTotalContributions] = useState(0);

  useEffect(() => {
    const loadContributions = async () => {
      try {
        setLoading(true);
        
        setTotalContributions(175);
        
        //Try the original ghchart service
        const chartUrl = `https://ghchart.rshah.org/7f1d1d/${username}`;
        
        try {
          // Direct fetch to test if URL is accessible
          const response = await fetch(chartUrl, { 
            method: 'HEAD',
            mode: 'no-cors'
          });
          
          setImageUrl(chartUrl);
          setError(null);
          setLoading(false);
          return;
        } catch (fetchError) {
          console.log('Fetch failed, trying direct image load');
        }
        
        // Try direct image load
        const img = new Image();
        img.crossOrigin = 'anonymous';
        
        img.onload = () => {
          setImageUrl(chartUrl);
          setError(null);
          setLoading(false);
        };
        
        img.onerror = () => {
          // alternative GitHub chart services
          const alternatives = [
            `https://ghchart.rshah.org/${username}?format=png`,
            `https://ghchart.rshah.org/${username}.png`,
            `https://github.com/${username}.png`,
            `https://github.com/${username}/contributions.svg`
          ];
          
          let attemptIndex = 0;
          
          const tryNextAlternative = () => {
            if (attemptIndex >= alternatives.length) {
              createFallbackChart();
              return;
            }
            
            const altUrl = alternatives[attemptIndex];
            
            const altImg = new Image();
            altImg.crossOrigin = 'anonymous';
            
            altImg.onload = () => {
              setImageUrl(altUrl);
              setError(null);
              setLoading(false);
            };
            
            altImg.onerror = () => {
              attemptIndex++;
              tryNextAlternative();
            };
            
            altImg.src = altUrl;
          };
          
          tryNextAlternative();
        };
        
        img.src = chartUrl;
        
      } catch (err) {
        console.error('Error loading GitHub contributions:', err);
        createFallbackChart();
      }
    };


    loadContributions();
  }, [username]);

  if (loading) {
    return (
      <div className="w-full max-w-7xl mx-auto">
        <div className="flex justify-center items-center py-8">
          <div className="text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-black mx-auto mb-4"></div>
            <p className="text-gray-600">Loading GitHub contributions...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-7xl mx-auto py-8 sm:py-12 md:py-16">
      <FadeIn className="mb-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Github className="w-6 h-6 text-red-900" />
            <h2 className="text-xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-red-900 to-gray-800 bg-clip-text text-transparent">
              GitHub Contributions
            </h2>
          </div>
          <a
            href={`https://github.com/${username}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-red-900 to-gray-800 hover:from-gray-800 hover:to-red-900 text-white rounded-full transition-all shadow-md text-sm"
          >
            <Github className="w-4 h-4" />
            <ShinyText text="View GitHub Profile" speed={3} baseColor="#ffffff" shineColor="#fca5a5" />
          </a>
        </div>
        <p className="text-gray-600">
          Contribution activity for <span className="font-medium">{username}</span>
        </p>
        <div className="mt-2 text-sm text-gray-500">
          <span className="font-bold text-red-900">{totalContributions}</span> contributions this year
        </div>
      </FadeIn>

      <FadeIn delay={0.2}>
        <div className="bg-white rounded-xl shadow-lg p-3 sm:p-6">
          <div className="flex flex-col items-center">
            {/* GitHub Contributions Chart */}
            <div className="w-full overflow-x-auto">
              <img
                src={imageUrl}
                alt={`${username}'s GitHub Contributions`}
                className="w-full h-auto max-w-full"
                style={{ minHeight: '120px' }}
                onError={(e) => {
                  console.error('Image error in display:', e);
                  if (!error) {
                    setError('Failed to display contribution chart');
                  }
                }}
              />
            </div>
            
            {/* Legend */}
            <div className="flex items-center gap-4 mt-6 text-xs text-gray-500">
              <span>Less</span>
              <div className="flex gap-1">
                <div className="w-3 h-3 rounded-sm bg-gray-100 border border-gray-300"></div>
                <div className="w-3 h-3 rounded-sm bg-red-200 border border-red-200"></div>
                <div className="w-3 h-3 rounded-sm bg-red-500 border border-red-500"></div>
                <div className="w-3 h-3 rounded-sm bg-red-700 border border-red-700"></div>
                <div className="w-3 h-3 rounded-sm bg-red-900 border border-red-900"></div>
              </div>
              <span>More</span>
            </div>
            
            {/* Info text */}
            <p className="text-xs text-gray-400 mt-4 text-center">
              {error ? 'This is a sample chart showing typical contribution patterns' : 'This chart shows your actual GitHub contribution activity'}
            </p>

            {/* Mobile-only button below chart */}
            <a
              href={`https://github.com/${username}`}
              target="_blank"
              rel="noopener noreferrer"
              className="sm:hidden inline-flex items-center gap-2 px-4 py-2 mt-4 bg-gradient-to-r from-red-900 to-gray-800 hover:from-gray-800 hover:to-red-900 text-white rounded-full transition-all shadow-md text-sm"
            >
              <Github className="w-4 h-4" />
              <ShinyText text="View GitHub Profile" speed={3} baseColor="#ffffff" shineColor="#fca5a5" />
            </a>
          </div>
        </div>
      </FadeIn>
    </div>
  );
}
