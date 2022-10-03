import style from './main-form.module.css'
import {useState} from 'react';

export const MainForm = () => {
  const [carPrice, setCarPrice] = useState(167)
  const carPriceHandler = (e) => {
    setCarPrice(e.target.value)
    console.log(carPrice)
  }
  return (
      <section className={style.formContent}>
        <form action="">
          <div className={style.formContent__range}>
            <div className={style.formRange}>
              <p className={style.rangeHeader}>Стоимость автомобиля</p>
              <div className={style.formRange__content}>
                <div className={style.formRange__currentValue}>
                  {/*<input type='number' className={style.value}>3 300 000/>*/}
                  <input
                      className={style.value}
                      type="number"
                      placeholder={carPrice}
                      onChange={carPriceHandler}
                  />
                  <p className={style.value}>₽</p>
                </div>
                <input
                    type="range"
                    min='100'
                    max='200'
                    value={carPrice}
                    onChange={carPriceHandler}
                />
              </div>
            </div>
            <div className={style.formRange}>
              <p className={style.rangeHeader}>Первоначальный взнос</p>
              <div className={style.formRange__content}>
                <div className={style.formRange__currentValue}>
                  <p className={style.value}>420 000 <span>₽</span></p>
                  <p className={style.value__percent}>13%</p>
                </div>
                <input className={style.selector} type="range"/>
              </div>
            </div>
            <div className={style.formRange}>
              <p className={style.rangeHeader}>Срок лизинга</p>
              <div className={style.formRange__content}>
                <div className={style.formRange__currentValue}>
                  <p className={style.value}>60</p>
                  <p className={style.value}>мес.</p>
                </div>
                <input className={style.selector} type="range"/>
              </div>
            </div>
          </div>
          <div className={style.formContent__result}>
            <div className={style.formRange}>
              <p className={style.rangeHeaderResult}>Сумма договора лизинга</p>
              <p className={style.currentSum}>4 467 313 <span>₽</span></p>
            </div>
            <div className={style.formRange}>
              <p className={style.rangeHeaderResult}>Ежемесячный платеж от</p>
              <p className={style.currentSum}>114 455<span>₽</span></p>
            </div>
            <button className={style.form__btn} type='submit'>Оставить заявку</button>
          </div>
        </form>

      </section>
  );
};