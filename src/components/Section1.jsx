import React from "react";

const Section1 = () => {
  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl font-semibold mb-10">С нами удобнее</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <div className="bg-white rounded-2xl shadow-md p-8">
            <h3 className="text-lg font-semibold mb-6 text-center">
              Без 1С-Товары
            </h3>

            <ul className="space-y-5 text-gray-600">
              <li className="flex items-start gap-3">
                <span className="text-red-500 text-xl leading-none">✕</span>
                <p>Лишний товар складируется и не продается</p>
              </li>

              <li className="flex items-start gap-3">
                <span className="text-red-500 text-xl leading-none">✕</span>
                <p>
                  Постоянно приходится думать какой продукт будет актуален,
                  а какой стоит выводить из ассортимента
                </p>
              </li>

              <li className="flex items-start gap-3">
                <span className="text-red-500 text-xl leading-none">✕</span>
                <p>Лишний товар складируется и не продается</p>
              </li>

              <li className="flex items-start gap-3">
                <span className="text-red-500 text-xl leading-none">✕</span>
                <p>
                  Постоянно приходится думать какой продукт будет актуален,
                  а какой стоит выводить из ассортимента
                </p>
              </li>

              <li className="flex items-start gap-3">
                <span className="text-red-500 text-xl leading-none">✕</span>
                <p>Лишний товар складируется и не продается</p>
              </li>

              <li className="flex items-start gap-3">
                <span className="text-red-500 text-xl leading-none">✕</span>
                <p>
                  Постоянно приходится думать какой продукт будет актуален,
                  а какой стоит выводить из ассортимента
                </p>
              </li>
            </ul>
          </div>

          <div className="bg-green-50 rounded-2xl shadow-md p-8">
            <h3 className="text-lg font-semibold mb-6 text-center">
              Вместе с 1С-Товары
            </h3>

            <ul className="space-y-5 text-gray-700">
              <li className="flex items-start gap-3">
                <span className="text-green-600 text-xl leading-none">✓</span>
                <p>Организованная система остатков</p>
              </li>

              <li className="flex items-start gap-3">
                <span className="text-green-600 text-xl leading-none">✓</span>
                <p>
                  В магазине есть определенная ассортиментная матрица,
                  поддерживающая актуальный ассортимент
                </p>
              </li>

              <li className="flex items-start gap-3">
                <span className="text-green-600 text-xl leading-none">✓</span>
                <p>Рассчитанный прогноз спроса</p>
              </li>

              <li className="flex items-start gap-3">
                <span className="text-green-600 text-xl leading-none">✓</span>
                <p>
                  В магазине есть определенная ассортиментная матрица,
                  поддерживающая актуальный ассортимент
                </p>
              </li>

              <li className="flex items-start gap-3">
                <span className="text-green-600 text-xl leading-none">✓</span>
                <p>Организованная система остатков</p>
              </li>

              <li className="flex items-start gap-3">
                <span className="text-green-600 text-xl leading-none">✓</span>
                <p>Система контроля упущенных продаж</p>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Section1;
