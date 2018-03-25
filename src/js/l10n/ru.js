angular.module("app")
  .factory('$translateRu', [() => {
    var words = {
      About: "О Нас",
      Project: "Проекты",
      Monetization: "Монетизация",
      Roadmap: "План действий",
      Team: "Команда",
      Bounty: "Награда",
      Login: "Логин",
      h1_text: "Изучение <span class='blue'>800</span> номеров, все еще популярных с рекламодателями",
      h4_text: "Сделайте Myspace своим лучшим дизайном",
      Days: "Дней",
      Hours: "Часов",
      Minutes: "Минут",
      Seconds: "Секунд",
      btn2: "Быстрое ознакомление с проектом",
      Whitepaper: "Whitepaper",
      emailPlaceholder: "Enter e-mail",
      passwordPlaceholder: "Create a password",
      Confirm: "Confirm",
    }
    return words

  }])