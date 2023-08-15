<template>
  <div class="text-center">
    <h1>Tutorial</h1>
    <p>Welcome to the Tutorial Page: Connecting Your Dota Mod to Our Backend

      We understand that connecting your Dota mod to a backend system can seem like a daunting task, but fear not! This
      step-by-step tutorial will guide you through the process and help you seamlessly integrate your mod with our backend
      service.

      Sign up and create an account: Begin by visiting our website and creating an account. It's quick, easy, and
      completely free!

      Access the Developer Dashboard: Once you've signed up and logged in, navigate to the Developer Dashboard. This is
      where you'll manage your mods and access the necessary tools for integration.

      Register your mod: Register your Dota mod within the Developer Dashboard. Provide essential details such as the mod
      name, description, and any additional information required.

      Generate API keys: To establish a secure connection between your mod and our backend, you'll need API keys. These
      keys authenticate your mod's requests and ensure data privacy. Generate unique API keys for your mod within the
      Developer Dashboard.

      Implement the backend integration: In your mod's source code, locate the relevant sections where you want to capture
      game data, such as the end of a match or significant in-game events. Use our provided SDK and API documentation to
      integrate the necessary code snippets into your mod. This will enable data retrieval and transmission to our
      backend.

      Test and debug: It's crucial to thoroughly test your mod's integration with our backend. Simulate various gameplay
      scenarios, trigger events, and verify that the data is accurately captured and transmitted to our system. Use the
      debugging tools and logs provided in the Developer Dashboard to aid in this process.

      Monitor and analyze: Once your mod is live and connected to our backend, you can access comprehensive analytics and
      reports through the Developer Dashboard. Gain insights into gameplay patterns, player behavior, and performance
      metrics to refine and improve your mod over time.

      Join the developer community: Connect with fellow Dota mod developers through our forums and community channels.
      Share your experiences, seek advice, and collaborate with others to enhance your modding journey.</p>
    <router-link to="/dashboard" class="btn btn-primary">Get Started</router-link>
  </div>
</template>
