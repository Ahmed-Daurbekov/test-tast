import React from 'react';
import './Main.scss'

const Main = () => {
  return (
    <main className='main'>
      <div className="container">
        <div className="main-columns">
          <div className="main-left_column">
            <p className="left_column-title">Зарабатывайте больше <span>с WELBEX</span></p>
            <p className="left_column-text">Развиваем и контролируем продажи за вас</p>
          </div>
          <div className="main-right_column">
            <p className="right_column-title">Вместе с <span className='first'>бесплатной </span><span className='second'>консультацией</span> мы дарим:</p>
            <div className="right_column-list">
              <div className='top-div'>
                <ul>
                  <li className='list-title'>Виджеты</li>
                  <li>30 готовых решений</li>
                </ul>

                <ul>
                  <li className='list-title'>Dashboard</li>
                  <li>с показателями вашего бизнеса</li>
                </ul>
                
                <ul className='small-screen'>
                  <li>Skype аудит</li>
                  <li>30 виджетов</li>
                </ul>
              </div>
              <div className='bottom-div'>
                <ul>
                  <li className='list-title'>Skype Аудит</li>
                  <li>отдела продаж и CRM системы</li>
                </ul>

                <ul>
                  <li className='list-title'>35 дней</li>
                  <li>использования CRM</li>
                </ul>

                <ul className='small-screen'>
                  <li>Dashboard</li>
                  <li>Месяц аmoCRM</li>
                </ul>
              </div>
            </div>
            <button className="right_column-btn">Получить консультацию</button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;