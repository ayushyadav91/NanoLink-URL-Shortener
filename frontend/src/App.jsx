import { useState } from 'react';
import { Sun, Moon, Copy, LogIn } from 'lucide-react';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [originalUrl, setOriginalUrl] = useState('');
  const [shortenedUrl, setShortenedUrl] = useState('');
  const [copied, setCopied] = useState(false);

  const handleShorten = () => {
    // Placeholder - replace with actual API call
    setShortenedUrl(`http://localhost:5000/api/v1/${Math.random().toString(36).substring(7)}`);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(shortenedUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={isDarkMode ? 'dark' : ''}>
      <div className={`min-h-screen transition-colors duration-300 ${
        isDarkMode ? 'bg-gray-900 text-white' : 'bg-gradient-to-br from-blue-50 to-indigo-100 text-gray-900'
      }`}>
        
        {/* Header */}
        <header className="flex justify-between items-center px-8 py-6 border-b border-opacity-20 border-gray-300">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            NanoLink
          </h1>
          
          <div className="flex gap-4 items-center">
            {/* Dark Mode Toggle */}
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className={`p-2 rounded-lg transition-colors ${
                isDarkMode
                  ? 'bg-gray-800 hover:bg-gray-700'
                  : 'bg-white hover:bg-gray-100'
              }`}
              title="Toggle dark mode"
            >
              {isDarkMode ? (
                <Sun size={24} className="text-yellow-400" />
              ) : (
                <Moon size={24} className="text-gray-700" />
              )}
            </button>

            {/* Auth Buttons */}
            <button className={`px-6 py-2 rounded-lg font-semibold transition-colors ${
              isDarkMode
                ? 'text-white hover:bg-gray-800'
                : 'text-gray-900 hover:bg-white'
            }`}>
              <LogIn size={20} className="inline mr-2" />
              Login
            </button>
            <button className="px-6 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg font-semibold hover:shadow-lg transition-shadow">
              Sign Up
            </button>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex items-center justify-center min-h-[calc(100vh-100px)] px-4">
          <div className="w-full max-w-2xl">
            {/* Hero Section */}
            <div className="text-center mb-12">
              <h2 className="text-5xl font-bold mb-4">
                Shorten Your Links
              </h2>
              <p className={`text-xl ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Make your links shorter, shareable, and trackable
              </p>
            </div>

            {/* Input Section */}
            <div className={`p-8 rounded-2xl shadow-2xl ${
              isDarkMode ? 'bg-gray-800' : 'bg-white'
            }`}>
              
              {/* URL Input */}
              <div className="mb-6">
                <label className="block text-sm font-semibold mb-3">
                  Enter your long URL
                </label>
                <div className="flex gap-3">
                  <input
                    type="url"
                    placeholder="https://example.com/very/long/url"
                    value={originalUrl}
                    onChange={(e) => setOriginalUrl(e.target.value)}
                    className={`flex-1 px-4 py-3 rounded-lg border-2 focus:outline-none transition-colors ${
                      isDarkMode
                        ? 'bg-gray-700 border-gray-600 focus:border-blue-500'
                        : 'bg-gray-50 border-gray-300 focus:border-blue-500'
                    }`}
                  />
                  <button
                    onClick={handleShorten}
                    className="px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg font-semibold hover:shadow-lg transition-shadow"
                  >
                    Shorten
                  </button>
                </div>
              </div>

              {/* Shortened URL Display */}
              {shortenedUrl && (
                <div className={`p-4 rounded-lg border-2 ${
                  isDarkMode
                    ? 'bg-gray-700 border-gray-600'
                    : 'bg-blue-50 border-blue-300'
                }`}>
                  <p className={`text-sm font-semibold mb-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Your shortened URL:
                  </p>
                  <div className="flex items-center gap-3">
                    <code className="flex-1 text-lg font-mono break-all">
                      {shortenedUrl}
                    </code>
                    <button
                      onClick={handleCopy}
                      className={`p-2 rounded-lg transition-colors flex-shrink-0 ${
                        isDarkMode
                          ? 'bg-gray-600 hover:bg-gray-500'
                          : 'bg-blue-200 hover:bg-blue-300'
                      }`}
                      title="Copy to clipboard"
                    >
                      <Copy size={20} className={copied ? 'text-green-500' : ''} />
                    </button>
                  </div>
                  {copied && (
                    <p className="text-green-500 text-sm mt-2 font-semibold">
                      ✓ Copied to clipboard!
                    </p>
                  )}
                </div>
              )}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;