angular.module("app")
  .factory('$translateEn', [() => {
    var words = {
      About: "About",
      Project: "Project",
      Monetization: "Monetization",
      Roadmap: "Roadmap",
      Team: "Team",
      Bounty: "Bounty",
      Login: "Login",
      h1_text: "Study <span class='blue'>800</span>  Numbers Still Popular With Advertisers",
      h4_text: "Make Myspace Your Best Designed Space",
      Days: "Days",
      Hours: "Hours",
      Minutes: "Minutes",
      Seconds: "Seconds",
      btn2: "Quick familiarization with project",
      Whitepaper: "Whitepaper",
      emailPlaceholder: "Enter e-mail",
      passwordPlaceholder: "Create a password",
      Confirm: "Confirm",
      passwordError: 'Password must be at least 6 characters',
      emailError: 'Please enter a valid email address',
      realizationPlan: 'Realization plan',
      acceptedPayment: "Accepted for payment",
      showPassword: "Show password"

    }
    return words

  }])