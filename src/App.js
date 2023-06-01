import { useState } from "react";

import GridSection from "./components/gridSection/GridSection";
import Header from "./components/header/Header"
import Promo from "./components/promo/Promo"

function App() {
  const [posts, setPost] = useState([
    {
        img: 'https://images.unsplash.com/photo-1630438994394-3deff7a591bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80', 
        title: 'ортопедия', 
        descr: 'Ветеринарная ортопедия это раздел хирургии, который занимается профилактикой, диагностикой и лечением заболеваний костной и суставной системы.'
    },
    {
        img: 'https://images.unsplash.com/photo-1632236542159-809925d85fc0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=1169&q=80', 
        title: 'хирургия', 
        descr: 'Ветеринарная хирургия изучает болезни животных, основным методом лечения которых является оперативное вмешательство.'
    },
    {
        img: 'https://images.unsplash.com/photo-1599443015574-be5fe8a05783?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80', 
        title: 'дерматология', 
        descr: 'Ветеринарная дерматология – это особое направление ветеринарной медицины, которое занимается лечением, профилактикой и устранением проблем с кожей и шерстным покровом.'
    },
    {
        img: 'https://images.unsplash.com/photo-1521058394093-99fe728ffde7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE5fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=1169&q=80', 
        title: 'исследования', 
        descr: 'клинический анализ крови, биохимический анализ крови, общий анализ мочи, общий анализ кала( я/г + простейшие)'
    },
    {
        img: 'https://plus.unsplash.com/premium_photo-1663011219208-418276022b35?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80', 
        title: 'терапия', 
        descr: 'ветеринарная терапия изучает распространение, причины возникновения, механизм развития, диагностику, клиническое проявление и профилактику незаразных болезней внутренних органов, а также лечение животных.'
    },
    {
        img: 'https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80', 
        title: 'диагностика', 
        descr: 'клинический анализ крови, биохимический анализ крови, общий анализ мочи, общий анализ кала( я/г + простейшие)'
    }
])

  return (
    <div className="App">
      <Header />
      <Promo title='Вет клиника Доктора Ефимова А.Н'/>
      <GridSection posts={posts}/>
    </div>
  );
}

export default App;
