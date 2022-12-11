<script>
  import { results } from './data/ResultsStore.js'
  import {Route, Router} from 'svelte-navigator'
  import Class from "./lib/Class.svelte";
  import MainScreen from "./lib/MainScreen.svelte";

  $:console.log($results)

</script>

<main data-theme="light" class="flex flex-col justify-center items-center h-screen space-y-4 w-screen">

  <Router>
    <Route>
      <MainScreen />
    </Route>
    <Route path="/class/*">
      <Route path="/" component="MainScreen" />
      <Route path=":id" component="{Class}" />
    </Route>
  </Router>

</main>

<style>

</style>
