const Card = () => {
  return (
    <div className="py-10 px-4 sm:px-6 md:px-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        <div className="bg-white rounded-2xl shadow-lg border-t-4 border-yellow-600 p-5 sm:p-6 hover:shadow-xl transition-all duration-300">
          <h2 className="text-xl sm:text-2xl font-bold text-yellow-700 mb-3">🎯 Our Mission</h2>
          <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
            To provide inclusive, value-based, and affordable education that equips students with the tools to become responsible citizens and lifelong learners.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg border-t-4 border-green-600 p-5 sm:p-6 hover:shadow-xl transition-all duration-300">
          <h2 className="text-xl sm:text-2xl font-bold text-green-700 mb-3">🌟 Our Vision</h2>
          <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
            To be a center of excellence in education that nurtures intellect, creativity, discipline, and compassion — especially among children from underprivileged and tribal backgrounds.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
