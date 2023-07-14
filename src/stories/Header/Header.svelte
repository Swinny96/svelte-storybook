<script>
  import './header.css';
  import Button from '../Buttons/Button.svelte';
  import Logo from '../assets/logo.svg'

  import { createEventDispatcher } from 'svelte';

  export let user = null;

  const dispatch = createEventDispatcher();

  function onLogin(event) {
    dispatch('login', event);
  }
  function onLogout(event) {
    dispatch('logout', event);
  }
  function onCreateAccount(event) {
    dispatch('createAccount', event);
  }
</script>

<header>
  <div class="storybook-header">
    <div>
      <img src={Logo} height="32" alt="InCharge" />
      <h1>InCharge</h1>
    </div>
    <div>
      {#if user}
        <span class="welcome">
          Welcome, <b>{user.name}</b>!
        </span>
        <Button size="small" on:click={onLogout} label="Log out" />
      {:else}
        <Button size="small" on:click={onLogin} label="Log in" />
        <Button primary size="small" on:click={onCreateAccount} label="Sign up" />
      {/if}
    </div>
  </div>
</header>
