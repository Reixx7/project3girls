import React from 'react';

const ICTovarLanding = () => {
  const features = [
    {
      icon: "📦",
      title: "Управление запасами",
      description: "Сервис 1С-Товары позволяет расставить необходимое количество товаров на полках магазина и автоматически упростить работу по формированию заказов поставщику.",
      color: "bg-orange-50",
      iconColor: "text-orange-500"
    },
    {
      icon: "🛒",
      title: "Автозаказ товаров",
      description: "Сервис 1С-Товары позволяет заказывать товары скоро. Сервис работает с современными и различными организациями для разных видов товаров.",
      color: "bg-purple-50",
      iconColor: "text-purple-500"
    },
    {
      icon: "📊",
      title: "Анализ магазина",
      description: "Система которая управляет проектом. Построение магазина управления обновлению предпочтения для расположения товаров.",
      color: "bg-blue-50",
      iconColor: "text-blue-500"
    },
    {
      icon: "📄",
      title: "Прогнозирование спроса",
      description: "Сервис 1С-Товары позволяет рассчитать прогнозирование необходимого количества товаров для разных видов магазинов.",
      color: "bg-red-50",
      iconColor: "text-red-500"
    },
    {
      icon: "📈",
      title: "Управление поставками",
      description: "Сервис 1С-Товары позволяет управлять поставками товаров магазина. Система работает с размещением товаров.",
      color: "bg-indigo-50",
      iconColor: "text-indigo-500"
    },
    {
      icon: "📚",
      title: "Управление ассортиментом",
      description: "Сервис 1С-Товары позволяет определить ассортимент каталога и управлять товарами магазина эффективно.",
      color: "bg-green-50",
      iconColor: "text-green-500"
    },
    {
      icon: "💰",
      title: "Управление продажами",
      description: "Система которая управляет продажами. Современная система для управления товарами и продажами в магазине.",
      color: "bg-yellow-50",
      iconColor: "text-yellow-500"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
                <span className="text-white text-lg">📦</span>
              </div>
              <span className="text-xl font-semibold text-gray-900">1С-Товары</span>
            </div>
            <nav className="hidden md:flex items-center gap-8">
              <a href="#" className="text-gray-700 hover:text-green-600">Инструмент</a>
              <a href="#" className="text-gray-700 hover:text-green-600">Проекты</a>
              <a href="#" className="text-gray-700 hover:text-green-600">База знаний</a>
              <a href="#" className="text-gray-700 hover:text-green-600">Связь</a>
              <button className="bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition-colors">
                Войти
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Управление запасами розничного магазина
            </h1>
            <p className="text-gray-600 text-lg mb-8">
              Использование сервиса 1С-Товары позволяет значительно упростить работу по формированию заказов поставщику
            </p>
            <button className="bg-green-600 text-white px-8 py-3 rounded-full hover:bg-green-700 transition-colors shadow-lg">
              Заказать демонстрацию
            </button>
          </div>
          <div className="relative flex justify-center items-center">
            <div className="relative w-full h-96 flex justify-center items-center gap-4">
              <div className="bg-gradient-to-br from-green-500 to-green-700 rounded-2xl p-8 shadow-2xl w-48 h-64 flex items-center justify-center transform rotate-3">
                <div className="w-full space-y-3">
                  <div className="bg-white bg-opacity-20 rounded h-8"></div>
                  <div className="bg-white bg-opacity-20 rounded h-8"></div>
                  <div className="bg-white bg-opacity-20 rounded h-8"></div>
                  <div className="bg-white bg-opacity-20 rounded h-8"></div>
                  <div className="bg-white bg-opacity-20 rounded h-8"></div>
                  <div className="bg-white bg-opacity-20 rounded h-8"></div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-green-600 to-green-800 rounded-2xl p-8 shadow-2xl w-48 h-64 flex items-center justify-center transform -rotate-3">
                <div className="w-full space-y-3">
                  <div className="bg-white bg-opacity-20 rounded h-8"></div>
                  <div className="bg-white bg-opacity-20 rounded h-8"></div>
                  <div className="bg-white bg-opacity-20 rounded h-8"></div>
                  <div className="bg-white bg-opacity-20 rounded h-8"></div>
                  <div className="bg-white bg-opacity-20 rounded h-8"></div>
                  <div className="bg-white bg-opacity-20 rounded h-8"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <div key={index} className={`${feature.color} rounded-2xl p-8 hover:shadow-lg transition-shadow`}>
              <div className="text-4xl mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {feature.description}
              </p>
              <button className="text-green-600 font-medium hover:text-green-700 border border-green-600 px-6 py-2 rounded-full hover:bg-green-50 transition-colors">
                Подробнее
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-4 shadow-lg">
          <div className="flex items-center gap-4">
            <span className="text-4xl">🎁</span>
            <p className="text-gray-900 text-lg">
              Подключи любой продукт на 1 месяц бесплатно и оцени наши преимущества
            </p>
          </div>
          <button className="bg-green-600 text-white px-8 py-3 rounded-full hover:bg-green-700 transition-colors shadow-lg whitespace-nowrap">
            Подключить сейчас
          </button>
        </div>
      </section>

    
    </div>
  );
};

export default ICTovarLanding;