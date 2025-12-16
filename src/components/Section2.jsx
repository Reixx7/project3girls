import React from "react";

const Section2 = () => {
  return (
    <section className="w-full bg-green-50 py-16">
      <div className="max-w-7xl mx-auto px-4 relative">
        
        {/* Header */}
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-2xl font-semibold">Популярные продукты</h2>
          <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-full text-sm font-medium">
            Все продукты
          </button>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Card 1 */}
          <div className="bg-white rounded-3xl shadow-md p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-semibold">1С-Товары 300</h3>
                <span className="border border-green-500 text-green-600 text-sm px-3 py-1 rounded-full">
                  400 руб/мес
                </span>
              </div>

              <ul className="space-y-3 text-sm text-gray-500">
                <li>• Прогноз спроса с использованием сервера прогнозирования (ограничение – 300 товаров)</li>
                <li>• Контроль товарных остатков и автоматический заказ товаров (ограничение – 300 товаров)</li>
                <li>• Анализ работы розничного магазина или сети магазинов</li>
                <li>• Рекомендации по управлению ассортиментом (1С-Ритейл Чекер)</li>
              </ul>
            </div>

            <a href="#" className="text-green-600 text-sm mt-6 inline-flex items-center gap-1">
              Подробнее <span>→</span>
            </a>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-3xl shadow-md p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-semibold">1С-Товары 30000</h3>
                <span className="border border-green-500 text-green-600 text-sm px-3 py-1 rounded-full">
                  1700 руб/мес
                </span>
              </div>

              <ul className="space-y-3 text-sm text-gray-500">
                <li>• Прогноз спроса с использованием сервера прогнозирования (ограничение – 30000 товаров)</li>
                <li>• Контроль товарных остатков и автоматический заказ товаров (ограничение – 30000 товаров)</li>
                <li>• Анализ работы розничного магазина или сети магазинов</li>
                <li>• Рекомендации по управлению ассортиментом (1С-Ритейл Чекер)</li>
              </ul>
            </div>

            <a href="#" className="text-green-600 text-sm mt-6 inline-flex items-center gap-1">
              Подробнее <span>→</span>
            </a>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-3xl shadow-md p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-semibold">1С-Товары</h3>
                <span className="border border-green-500 text-green-600 text-sm px-3 py-1 rounded-full">
                  4 500 руб/мес
                </span>
              </div>

              <ul className="space-y-3 text-sm text-gray-500">
                <li>• Прогноз спроса с использованием сервера прогнозирования</li>
                <li>• Контроль товарных остатков и автоматический заказ товаров</li>
                <li>• Анализ работы розничного магазина или сети магазинов</li>
                <li>• Рекомендации по управлению ассортиментом (1С-Ритейл Чекер)</li>
              </ul>
            </div>

            <a href="#" className="text-green-600 text-sm mt-6 inline-flex items-center gap-1">
              Подробнее <span>→</span>
            </a>
          </div>
        </div>


        {/* Arrows */}
        <button className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full border items-center justify-center text-gray-400">
          ‹
        </button>
        <button className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full border items-center justify-center text-gray-400">
          ›
        </button>

      </div>
    </section>
  );
};

export default Section2;
