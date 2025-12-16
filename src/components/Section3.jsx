import React from 'react'
import img1 from '../assets/Grocery shopping-amico 1.png'
import img2 from '../assets/Coffee shop-amico 1.png'

const Section3 = () => {
  return (
    <div className="w-full max-w-[1512px] mx-auto px-20 py-16">
      <h2 className="text-3xl mb-12">
        Для розничных магазинов и ресторанов
      </h2>

      <div className="flex gap-16">
        <div className="flex flex-col gap-16 w-1/2">
          <img
            src={img1}
            alt=""
            className="w-[500px] h-[500px] object-contain"
          />
          <img
            src={img2}
            alt=""
            className="w-[500px] h-[500px] object-contain"
          />
        </div>

        <div className="flex flex-col gap-8 w-1/2">
          <div className="bg-white rounded-2xl shadow-md p-8">
            <h3 className="text-xl mb-4">
              Получайте рекомендации по управлению ассортиментом
            </h3>
            <p className="text-gray-600 mb-4">
              Для этого подключите бесплатно новый тариф «1С-Ритейл Чекер».
              Каждую неделю вам на почту будут приходить письма с рекомендациями:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>какие товары необходимо срочно купить</li>
              <li>что стоит убрать из избытка</li>
              <li>какие товары стоит пересчитать</li>
            </ul>
            <p className='text-green-600 mt-5 text-bold'>Подробнее о 1С-Ритейл Чекер</p>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-8">
            <h3 className="text-xl mb-4">
              Прогнозируйте спрос и управляйте запасами
            </h3>
            <p className="text-gray-600">
              Используйте 1С-Товары для более точного прогноза спроса.
              1С-Товары учитывают средние продажи, тренды, периоды дефицита
              товара (пробелы на полках), сезонность спроса, праздники,
              распродажи, акции. Ежедневно система автоматически проверяет
              минимальные остатки и формирует заявку поставщику, используя
              результаты прогноза. Это помогает избежать дефицита и излишков.
            </p>
            <p className='text-green-600 mt-5 text-bold'>Подробнее о 1С-Товары</p>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-8">
            <h3 className="text-xl mb-4">
              Планируйте ассортимент без ошибок
            </h3>
            <p className="text-gray-600">
              Удобные отчеты помогут определить оптимальный ассортимент
              и повысить оборачиваемость товаров.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-8">
            <h3 className="text-xl mb-4">
              Контролируйте бизнес и повышайте прибыль
            </h3>
            <p className="text-gray-600">
              Для этого используйте блок аналитики. Пробуйте разные варианты
              повышения продаж — новые товары, изменение наценки,
              перераспределение площади. Отчеты помогут оценить результат.
              Блок аналитики доступен онлайн и выполнен в формате панели
              ключевых показателей.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Section3
