<template>
  <div class="about">
    <div class="about-content">
      <h1>О проекте "Кабинет Методиста"</h1>
      <div class="description">
        <p>
          "Кабинет Методиста" - это современная образовательная платформа, созданная для поддержки 
          школьных учителей и педагогов. Наша цель - предоставить удобное пространство для обмена 
          методическими материалами, опытом и профессионального общения.
        </p>
        
        <h2>Наши возможности:</h2>
        <ul>
          <li>Банк методических материалов</li>
          <li>Педагогический форум для обсуждения</li>
          <li>Профессиональное сообщество учителей</li>
          <li>Обмен лучшими практиками</li>
        </ul>

        <h2>Наша миссия:</h2>
        <p>
          Мы стремимся создать комфортную среду для профессионального роста педагогов, 
          где каждый учитель может найти поддержку, вдохновение и полезные ресурсы 
          для своей ежедневной работы.
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.about {
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 2rem;
}

.about-content {
  width: 100%;
}

.about h1 {
  font-weight: 600;
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: #2c3e50;
  text-align: center;
}

.about h2 {
  font-weight: 500;
  font-size: 1.5rem;
  margin: 2rem 0 1rem 0;
  color: #2c3e50;
}

.description {
  line-height: 1.6;
  font-size: 1.1rem;
  color: #4a5568;
}

.description p {
  margin-bottom: 1.5rem;
}

.description ul {
  margin: 1rem 0;
  padding-left: 2rem;
}

.description li {
  margin-bottom: 0.5rem;
  line-height: 1.5;
}

@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: flex-start;
    padding-top: 2rem;
  }

  .about-content {
    padding: 2rem 0;
  }
}

@media (max-width: 1023px) {
  .about {
    padding: 0 1rem;
  }
  
  .about h1 {
    font-size: 2rem;
    margin-bottom: 1.5rem;
  }
  
  .about h2 {
    font-size: 1.3rem;
  }
  
  .description {
    font-size: 1rem;
  }
}
</style>