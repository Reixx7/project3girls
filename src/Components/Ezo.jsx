import React from "react";

export default function FullPage() {
  return (
    <div>
      {/* Consultation Form Section */}
      <div className="min-h-screen flex items-center justify-center bg-white p-6">
        <div className="w-full max-w-6xl rounded-[40px] bg-gradient-to-r from-green-600 to-green-400 p-12 text-white">
          <div className="grid grid-cols-2 gap-12">
            <div>
              <h1 className="text-3xl font-semibold mb-6">
                Хотите бесплатную консультацию?
                <br />
                Оставляйте заявку
              </h1>
              <p className="text-base opacity-90 max-w-md">
                Оставляйте заявку и наши менеджеры свяжутся с Вами
                в ближайшее время
              </p>
            </div>

            <div className="space-y-5">
              <div>
                <label className="text-sm mb-1 block">Ваше имя</label>
                <input
                  type="text"
                  defaultValue="Сергей"
                  className="w-full rounded-full px-6 py-3 text-gray-800 outline-none"
                />
              </div>

              <div>
                <label className="text-sm mb-1 block">Ваш телефон</label>
                <input
                  type="text"
                  placeholder="Ваш телефон"
                  className="w-full rounded-full px-6 py-3 text-gray-800 outline-none"
                />
              </div>

              <div>
                <label className="text-sm mb-1 block">Ваш e-mail</label>
                <input
                  type="email"
                  placeholder="Ваш e-mail"
                  className="w-full rounded-full px-6 py-3 text-gray-800 outline-none"
                />
              </div>

              <div className="flex items-center justify-between gap-6 pt-2">
                <p className="text-xs opacity-80 max-w-sm">
                  Нажимая кнопку вы даете согласие на обработку персональных
                  данных в соответствии с политикой конфиденциальности
                </p>
                <button className="bg-white text-green-600 font-medium px-8 py-3 rounded-full">
                  Отправить
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="min-h-screen bg-gray-100 p-8">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-800 mb-8">Ответы на вопросы</h1>
          
          <div className="space-y-4">
            <div className="collapse collapse-arrow bg-white border border-gray-200 rounded-2xl">
              <input type="radio" name="my-accordion" />
              <div className="collapse-title text-lg font-medium">
                С чего начать работу с 1С-Товары?
              </div>
              <div className="collapse-content text-sm text-gray-600">
                <p>Для начала работы с 1С-Товары необходимо зарегистрироваться на платформе и подключить базовый тариф.</p>
              </div>
            </div>

            <div className="collapse collapse-arrow bg-white border border-gray-200 rounded-2xl">
              <input type="radio" name="my-accordion" defaultChecked />
              <div className="collapse-title text-lg font-medium">
                Как подключить 1С-Ритейл Чекер* и 1С-Товары?
              </div>
              <div className="collapse-content text-sm text-gray-600">
                <p className="mb-4">Для этого подключите бесплатно новый тариф «1С-Ритейл Чекер».</p>
                <p className="mb-2">Каждую неделю вам на почту будет приходить письмо с рекомендациями:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>какие товары необходимо срочно купить, чтобы избежать упущенной прибыли из-за пустых полок;</li>
                  <li>какие товары у вас в избытке, а какие следует отнести к неликвидам;</li>
                  <li>какие товары стоит пересчитать, чтобы быть уверенным в правильности учета.</li>
                </ul>
              </div>
            </div>

            <div className="collapse collapse-arrow bg-white border border-gray-200 rounded-2xl">
              <input type="radio" name="my-accordion" />
              <div className="collapse-title text-lg font-medium">
                Средний чек, о чем нам может рассказать?
              </div>
              <div className="collapse-content text-sm text-gray-600">
                <p>Средний чек показывает среднюю сумму покупки одного клиента и помогает анализировать эффективность продаж.</p>
              </div>
            </div>

            <div className="collapse collapse-arrow bg-white border border-gray-200 rounded-2xl">
              <input type="radio" name="my-accordion" />
              <div className="collapse-title text-lg font-medium">
                Сценарии автозаказа сервиса 1С-Товары
              </div>
              <div className="collapse-content text-sm text-gray-600">
                <p>Автозаказ позволяет автоматически формировать заказы поставщикам на основе анализа продаж и остатков товаров.</p>
              </div>
            </div>

            <div className="collapse collapse-arrow bg-white border border-gray-200 rounded-2xl">
              <input type="radio" name="my-accordion" />
              <div className="collapse-title text-lg font-medium">
                Как подключить 1С-Ритейл Чекер* и 1С-Товары?
              </div>
              <div className="collapse-content text-sm text-gray-600">
                <p>Следуйте инструкциям в justify <code></code>личном кабинете для подключения сервисов.</p>
              </div>
            </div>

            <div className="collapse collapse-arrow bg-white border border-gray-200 rounded-2xl">
              <input type="radio" name="my-accordion" />
              <div className="collapse-title text-lg font-medium">
                Методы и формулы расчета торговой наценки
              </div>
              <div className="collapse-content text-sm text-gray-600">
                <p>Торговая наценка рассчитывается как разница между ценой продажи и себестоимостью товара.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Knowledge Base Section */}
      <div className="bg-gray-100 py-16 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-12">
            <h1 className="text-4xl font-bold text-gray-800">База знаний</h1>
            <button className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-full font-medium">
              Все статьи
            </button>
          </div>

          <div className="relative">
            <button className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white w-10 h-10 rounded-full shadow-lg flex items-center justify-center z-10">
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <div className="grid grid-cols-3 gap-6">
              <div className="bg-white rounded-2xl overflow-hidden shadow-sm">
                <img 
                  src="https://images.unsplash.com/photo-1557672172-298e090bd0f1?w=400&h=250&fit=crop" 
                  alt="Article" 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-lg font-medium text-gray-800 mb-4 min-h-14">
                    Методы и формулы расчета торговой наценки
                  </h3>
                  <a href="#" className="text-green-600 font-medium hover:text-green-700">
                    Читать статью
                  </a>
                </div>
              </div>

              <div className="bg-white rounded-2xl overflow-hidden shadow-sm">
                <img 
                  src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=250&fit=crop" 
                  alt="Article" 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-lg font-medium text-gray-800 mb-4 min-h-14">
                    Ассортимент продуктового ассортимента
                  </h3>
                  <a href="#" className="text-green-600 font-medium hover:text-green-700">
                    Читать статью
                  </a>
                </div>
              </div>

              <div className="bg-white rounded-2xl overflow-hidden shadow-sm">
                <img 
                  src="https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?w=400&h=250&fit=crop" 
                  alt="Article" 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-green-600 text-lg font-medium mb-4 min-h-14">
                    Что такое сезонность продаж
                  </h3>
                  <a href="#" className="text-green-600 font-medium hover:text-green-700">
                    Читать статью
                  </a>
                </div>
              </div>
            </div>

            <button className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white w-10 h-10 rounded-full shadow-lg flex items-center justify-center z-10">
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-4 gap-12 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
                  </svg>
                </div>
                <span className="text-xl font-semibold">1С-Товары</span>
              </div>
              <p className="text-sm text-gray-400 mb-3">Линия консультации</p>
              <p className="text-xl font-bold mb-4">+7(495)-111-00-10</p>
              <p className="text-sm text-gray-400 mb-1">Наш e-mail</p>
              <p className="text-green-500 mb-6">info@rozn.info</p>
              <p className="text-sm text-gray-400 mb-2">
                Для активации перейдите на <a href="#" className="text-green-500">portal.1cu</a> или обратитесь к Вашему партнеру 1С.
              </p>
              <p className="text-sm text-gray-400">Инструкция по установке сервиса</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Информация</h3>
              <ul className="space-y-3 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white">Как это работает</a></li>
                <li><a href="#" className="hover:text-white">Инструкции</a></li>
                <li><a href="#" className="hover:text-white">Блог</a></li>
                <li><a href="#" className="hover:text-white">О нас</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Продукты</h3>
              <ul className="space-y-3 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white">1С-Ритейл Чекер Демо</a></li>
                <li><a href="#" className="hover:text-white">1С-Товары.Тестовый для магазина на 1 месяц</a></li>
                <li><a href="#" className="hover:text-white">1С-Ритейл Чекер</a></li>
                <li><a href="#" className="hover:text-white">1С-Товары 300</a></li>
                <li><a href="#" className="hover:text-white">1С-Товары 30000</a></li>
              </ul>
            </div>

            <div>
              <button className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-full font-medium w-full">
                Заказать звонок
              </button>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-6 flex justify-between items-center text-sm text-gray-400">
            <p>1С-Товары © 2023</p>
            <p>Сайт создан - <a href="https://wtstudio.ru" className="hover:text-white">wtstudio.ru</a></p>
          </div>
        </div>
      </footer>
    </div>
  );
}