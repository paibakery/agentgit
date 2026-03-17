export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-indigo-600">AI Vision</h1>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#features" className="text-gray-700 hover:text-indigo-600 transition">Features</a>
              <a href="#services" className="text-gray-700 hover:text-indigo-600 transition">Services</a>
              <a href="#about" className="text-gray-700 hover:text-indigo-600 transition">About</a>
              <a href="#contact" className="text-gray-700 hover:text-indigo-600 transition">Contact</a>
            </div>
            <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition">
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Transform Your Business with
            <span className="text-indigo-600"> AI Solutions</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            We build cutting-edge artificial intelligence solutions that automate processes, 
            enhance decision-making, and drive innovation for businesses of all sizes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-indigo-600 text-white px-8 py-3 rounded-lg hover:bg-indigo-700 transition text-lg">
              Start Free Trial
            </button>
            <button className="bg-white text-indigo-600 border-2 border-indigo-600 px-8 py-3 rounded-lg hover:bg-indigo-50 transition text-lg">
              Watch Demo
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose AI Vision?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our AI solutions are designed to deliver measurable results and transform your operations.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-lg hover:shadow-lg transition">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 bg-indigo-600 rounded"></div>
              </div>
              <h3 className="text-xl font-semibold mb-3">Machine Learning</h3>
              <p className="text-gray-600">
                Advanced ML algorithms that learn from your data and improve over time.
              </p>
            </div>
            <div className="text-center p-6 rounded-lg hover:shadow-lg transition">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 bg-indigo-600 rounded"></div>
              </div>
              <h3 className="text-xl font-semibold mb-3">Natural Language Processing</h3>
              <p className="text-gray-600">
                Understand and process human language with cutting-edge NLP technology.
              </p>
            </div>
            <div className="text-center p-6 rounded-lg hover:shadow-lg transition">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 bg-indigo-600 rounded"></div>
              </div>
              <h3 className="text-xl font-semibold mb-3">Computer Vision</h3>
              <p className="text-gray-600">
                Extract insights from images and videos with powerful vision AI models.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive AI solutions tailored to your specific business needs.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4">AI Consulting</h3>
              <p className="text-gray-600 mb-4">
                Strategic guidance to help you leverage AI for maximum business impact.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• AI Strategy Development</li>
                <li>• Technology Assessment</li>
                <li>• Implementation Planning</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4">Custom AI Development</h3>
              <p className="text-gray-600 mb-4">
                Build tailored AI solutions that address your unique business challenges.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Custom Model Training</li>
                <li>• API Development</li>
                <li>• Integration Services</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-indigo-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-indigo-100 mb-8">
            Join hundreds of companies already using AI Vision to drive growth and innovation.
          </p>
          <button className="bg-white text-indigo-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition text-lg font-semibold">
            Schedule a Demo
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">AI Vision</h3>
              <p className="text-gray-400">
                Empowering businesses with intelligent AI solutions.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Features</li>
                <li>Pricing</li>
                <li>Documentation</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li>About</li>
                <li>Blog</li>
                <li>Careers</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li>info@aivision.com</li>
                <li>+1 (555) 123-4567</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 AI Vision. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
